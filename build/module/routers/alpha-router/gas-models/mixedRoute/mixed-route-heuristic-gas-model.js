import { BigNumber } from '@ethersproject/bignumber';
import { partitionMixedRouteByProtocol } from '@mageswap/router-sdk';
import { Pair } from '@mageswap/v2-sdk';
import { Pool } from '@mageswap/v3-sdk';
import JSBI from 'jsbi';
import _ from 'lodash';
import { WRAPPED_NATIVE_CURRENCY } from '../../../..';
import { log } from '../../../../util';
import { CurrencyAmount } from '../../../../util/amounts';
import { getHighestLiquidityV3NativePool, getHighestLiquidityV3USDPool, getV2NativePool, } from '../../../../util/gas-factory-helpers';
import { IOnChainGasModelFactory, } from '../gas-model';
import { BASE_SWAP_COST as BASE_SWAP_COST_V2, COST_PER_EXTRA_HOP as COST_PER_EXTRA_HOP_V2, } from '../v2/v2-heuristic-gas-model';
import { BASE_SWAP_COST, COST_PER_HOP, COST_PER_INIT_TICK, COST_PER_UNINIT_TICK, } from '../v3/gas-costs';
/**
 * Computes a gas estimate for a mixed route swap using heuristics.
 * Considers number of hops in the route, number of ticks crossed
 * and the typical base cost for a swap.
 *
 * We get the number of ticks crossed in a swap from the MixedRouteQuoterV1
 * contract.
 *
 * We compute gas estimates off-chain because
 *  1/ Calling eth_estimateGas for a swaps requires the caller to have
 *     the full balance token being swapped, and approvals.
 *  2/ Tracking gas used using a wrapper contract is not accurate with Multicall
 *     due to EIP-2929. We would have to make a request for every swap we wanted to estimate.
 *  3/ For V2 we simulate all our swaps off-chain so have no way to track gas used.
 *
 * @export
 * @class MixedRouteHeuristicGasModelFactory
 */
export class MixedRouteHeuristicGasModelFactory extends IOnChainGasModelFactory {
    constructor() {
        super();
    }
    async buildGasModel({ chainId, gasPriceWei, v3poolProvider: V3poolProvider, quoteToken, v2poolProvider: V2poolProvider, }) {
        const usdPool = await getHighestLiquidityV3USDPool(chainId, V3poolProvider);
        // If our quote token is WETH, we don't need to convert our gas use to be in terms
        // of the quote token in order to produce a gas adjusted amount.
        // We do return a gas use in USD however, so we still convert to usd.
        const nativeCurrency = WRAPPED_NATIVE_CURRENCY[chainId];
        if (quoteToken.equals(nativeCurrency)) {
            const estimateGasCost = (routeWithValidQuote) => {
                const { totalGasCostNativeCurrency, baseGasUse } = this.estimateGas(routeWithValidQuote, gasPriceWei, chainId);
                const token0 = usdPool.token0.address == nativeCurrency.address;
                const nativeTokenPrice = token0
                    ? usdPool.token0Price
                    : usdPool.token1Price;
                const gasCostInTermsOfUSD = nativeTokenPrice.quote(totalGasCostNativeCurrency);
                return {
                    gasEstimate: baseGasUse,
                    gasCostInToken: totalGasCostNativeCurrency,
                    gasCostInUSD: gasCostInTermsOfUSD,
                };
            };
            return {
                estimateGasCost,
            };
        }
        // If the quote token is not in the native currency, we convert the gas cost to be in terms of the quote token.
        // We do this by getting the highest liquidity <quoteToken>/<nativeCurrency> pool. eg. <quoteToken>/ETH pool.
        const nativeV3Pool = await getHighestLiquidityV3NativePool(quoteToken, V3poolProvider);
        let nativeV2Pool;
        if (V2poolProvider) {
            /// MixedRoutes
            nativeV2Pool = await getV2NativePool(quoteToken, V2poolProvider);
        }
        const usdToken = usdPool.token0.address == nativeCurrency.address
            ? usdPool.token1
            : usdPool.token0;
        const estimateGasCost = (routeWithValidQuote) => {
            const { totalGasCostNativeCurrency, baseGasUse } = this.estimateGas(routeWithValidQuote, gasPriceWei, chainId);
            if (!nativeV3Pool && !nativeV2Pool) {
                log.info(`Unable to find ${nativeCurrency.symbol} pool with the quote token, ${quoteToken.symbol} to produce gas adjusted costs. Route will not account for gas.`);
                return {
                    gasEstimate: baseGasUse,
                    gasCostInToken: CurrencyAmount.fromRawAmount(quoteToken, 0),
                    gasCostInUSD: CurrencyAmount.fromRawAmount(usdToken, 0),
                };
            }
            /// we will use nativeV2Pool for fallback if nativeV3 does not exist or has 0 liquidity
            /// can use ! here because we return above if v3Pool and v2Pool are null
            const nativePool = (!nativeV3Pool || JSBI.equal(nativeV3Pool.liquidity, JSBI.BigInt(0))) &&
                nativeV2Pool
                ? nativeV2Pool
                : nativeV3Pool;
            const token0 = nativePool.token0.address == nativeCurrency.address;
            // returns mid price in terms of the native currency (the ratio of quoteToken/nativeToken)
            const nativeTokenPrice = token0
                ? nativePool.token0Price
                : nativePool.token1Price;
            let gasCostInTermsOfQuoteToken;
            try {
                // native token is base currency
                gasCostInTermsOfQuoteToken = nativeTokenPrice.quote(totalGasCostNativeCurrency);
            }
            catch (err) {
                log.info({
                    nativeTokenPriceBase: nativeTokenPrice.baseCurrency,
                    nativeTokenPriceQuote: nativeTokenPrice.quoteCurrency,
                    gasCostInEth: totalGasCostNativeCurrency.currency,
                }, 'Debug eth price token issue');
                throw err;
            }
            // true if token0 is the native currency
            const token0USDPool = usdPool.token0.address == nativeCurrency.address;
            // gets the mid price of the pool in terms of the native token
            const nativeTokenPriceUSDPool = token0USDPool
                ? usdPool.token0Price
                : usdPool.token1Price;
            let gasCostInTermsOfUSD;
            try {
                gasCostInTermsOfUSD = nativeTokenPriceUSDPool.quote(totalGasCostNativeCurrency);
            }
            catch (err) {
                log.info({
                    usdT1: usdPool.token0.symbol,
                    usdT2: usdPool.token1.symbol,
                    gasCostInNativeToken: totalGasCostNativeCurrency.currency.symbol,
                }, 'Failed to compute USD gas price');
                throw err;
            }
            return {
                gasEstimate: baseGasUse,
                gasCostInToken: gasCostInTermsOfQuoteToken,
                gasCostInUSD: gasCostInTermsOfUSD,
            };
        };
        return {
            estimateGasCost: estimateGasCost.bind(this),
        };
    }
    estimateGas(routeWithValidQuote, gasPriceWei, chainId) {
        const totalInitializedTicksCrossed = BigNumber.from(Math.max(1, _.sum(routeWithValidQuote.initializedTicksCrossedList)));
        /**
         * Since we must make a separate call to multicall for each v3 and v2 section, we will have to
         * add the BASE_SWAP_COST to each section.
         */
        let baseGasUse = BigNumber.from(0);
        const route = routeWithValidQuote.route;
        const res = partitionMixedRouteByProtocol(route);
        res.map((section) => {
            if (section.every((pool) => pool instanceof Pool)) {
                baseGasUse = baseGasUse.add(BASE_SWAP_COST(chainId));
                baseGasUse = baseGasUse.add(COST_PER_HOP(chainId).mul(section.length));
            }
            else if (section.every((pool) => pool instanceof Pair)) {
                baseGasUse = baseGasUse.add(BASE_SWAP_COST_V2);
                baseGasUse = baseGasUse.add(
                /// same behavior in v2 heuristic gas model factory
                COST_PER_EXTRA_HOP_V2.mul(section.length - 1));
            }
        });
        const tickGasUse = COST_PER_INIT_TICK(chainId).mul(totalInitializedTicksCrossed);
        const uninitializedTickGasUse = COST_PER_UNINIT_TICK.mul(0);
        // base estimate gas used based on chainId estimates for hops and ticks gas useage
        baseGasUse = baseGasUse.add(tickGasUse).add(uninitializedTickGasUse);
        const baseGasCostWei = gasPriceWei.mul(baseGasUse);
        const wrappedCurrency = WRAPPED_NATIVE_CURRENCY[chainId];
        const totalGasCostNativeCurrency = CurrencyAmount.fromRawAmount(wrappedCurrency, baseGasCostWei.toString());
        return {
            totalGasCostNativeCurrency,
            totalInitializedTicksCrossed,
            baseGasUse,
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWl4ZWQtcm91dGUtaGV1cmlzdGljLWdhcy1tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9yb3V0ZXJzL2FscGhhLXJvdXRlci9nYXMtbW9kZWxzL21peGVkUm91dGUvbWl4ZWQtcm91dGUtaGV1cmlzdGljLWdhcy1tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDckQsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDckUsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3hDLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUN4QyxPQUFPLElBQUksTUFBTSxNQUFNLENBQUM7QUFDeEIsT0FBTyxDQUFDLE1BQU0sUUFBUSxDQUFDO0FBRXZCLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN0RCxPQUFPLEVBQVcsR0FBRyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDaEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzFELE9BQU8sRUFDTCwrQkFBK0IsRUFDL0IsNEJBQTRCLEVBQzVCLGVBQWUsR0FDaEIsTUFBTSxzQ0FBc0MsQ0FBQztBQUU5QyxPQUFPLEVBR0wsdUJBQXVCLEdBQ3hCLE1BQU0sY0FBYyxDQUFDO0FBQ3RCLE9BQU8sRUFDTCxjQUFjLElBQUksaUJBQWlCLEVBQ25DLGtCQUFrQixJQUFJLHFCQUFxQixHQUM1QyxNQUFNLDhCQUE4QixDQUFDO0FBQ3RDLE9BQU8sRUFDTCxjQUFjLEVBQ2QsWUFBWSxFQUNaLGtCQUFrQixFQUNsQixvQkFBb0IsR0FDckIsTUFBTSxpQkFBaUIsQ0FBQztBQUV6Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FpQkc7QUFDSCxNQUFNLE9BQU8sa0NBQW1DLFNB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