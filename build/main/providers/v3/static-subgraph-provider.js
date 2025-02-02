"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StaticV3SubgraphProvider = void 0;
const v3_sdk_1 = require("@mageswap/v3-sdk");
const jsbi_1 = __importDefault(require("jsbi"));
const lodash_1 = __importDefault(require("lodash"));
const amounts_1 = require("../../util/amounts");
const chains_1 = require("../../util/chains");
const log_1 = require("../../util/log");
const token_provider_1 = require("../token-provider");
const BASES_TO_CHECK_TRADES_AGAINST = {
    [chains_1.ChainId.FANTOM]: [chains_1.WRAPPED_NATIVE_CURRENCY[chains_1.ChainId.FANTOM], token_provider_1.USDC_FANTOM],
    // [ChainId.AVAX]: [
    //   WRAPPED_NATIVE_CURRENCY[ChainId.AVAX]
    // ],
    // [ChainId.ZKSYNC]: [WRAPPED_NATIVE_CURRENCY[ChainId.ZKSYNC]],
    // [ChainId.CANTO]: [
    //   WRAPPED_NATIVE_CURRENCY[ChainId.CANTO]
    // ],
    [chains_1.ChainId.MAINNET]: [
        chains_1.WRAPPED_NATIVE_CURRENCY[chains_1.ChainId.MAINNET],
        token_provider_1.DAI_MAINNET,
        token_provider_1.USDC_MAINNET,
        token_provider_1.USDT_MAINNET,
        token_provider_1.WBTC_MAINNET,
    ],
    [chains_1.ChainId.ROPSTEN]: [
        chains_1.WRAPPED_NATIVE_CURRENCY[chains_1.ChainId.ROPSTEN],
        token_provider_1.DAI_ROPSTEN,
        token_provider_1.USDT_ROPSTEN,
        token_provider_1.USDC_ROPSTEN,
    ],
    [chains_1.ChainId.RINKEBY]: [
        chains_1.WRAPPED_NATIVE_CURRENCY[chains_1.ChainId.RINKEBY],
        token_provider_1.DAI_RINKEBY_1,
        token_provider_1.DAI_RINKEBY_2,
        token_provider_1.USDC_RINKEBY,
        token_provider_1.USDT_RINKEBY,
    ],
    [chains_1.ChainId.GÖRLI]: [
        chains_1.WRAPPED_NATIVE_CURRENCY[chains_1.ChainId.GÖRLI],
        token_provider_1.USDT_GÖRLI,
        token_provider_1.USDC_GÖRLI,
        token_provider_1.WBTC_GÖRLI,
        token_provider_1.DAI_GÖRLI,
    ],
    [chains_1.ChainId.KOVAN]: [
        chains_1.WRAPPED_NATIVE_CURRENCY[chains_1.ChainId.KOVAN],
        token_provider_1.USDC_KOVAN,
        token_provider_1.USDT_KOVAN,
        token_provider_1.WBTC_KOVAN,
        token_provider_1.DAI_KOVAN,
    ],
    [chains_1.ChainId.OPTIMISM]: [
        chains_1.WRAPPED_NATIVE_CURRENCY[chains_1.ChainId.OPTIMISM],
        token_provider_1.USDC_OPTIMISM,
        token_provider_1.DAI_OPTIMISM,
        token_provider_1.USDT_OPTIMISM,
        token_provider_1.WBTC_OPTIMISM,
        token_provider_1.OP_OPTIMISM,
    ],
    [chains_1.ChainId.ARBITRUM_ONE]: [
        chains_1.WRAPPED_NATIVE_CURRENCY[chains_1.ChainId.ARBITRUM_ONE],
        token_provider_1.WBTC_ARBITRUM,
        token_provider_1.DAI_ARBITRUM,
        token_provider_1.USDC_ARBITRUM,
        token_provider_1.USDT_ARBITRUM,
        token_provider_1.ARB_ARBITRUM,
    ],
    [chains_1.ChainId.ARBITRUM_RINKEBY]: [
        chains_1.WRAPPED_NATIVE_CURRENCY[chains_1.ChainId.ARBITRUM_RINKEBY],
        token_provider_1.DAI_ARBITRUM_RINKEBY,
        token_provider_1.UNI_ARBITRUM_RINKEBY,
        token_provider_1.USDT_ARBITRUM_RINKEBY,
    ],
    [chains_1.ChainId.ARBITRUM_GOERLI]: [
        chains_1.WRAPPED_NATIVE_CURRENCY[chains_1.ChainId.ARBITRUM_GOERLI],
        token_provider_1.USDC_ARBITRUM_GOERLI,
    ],
    [chains_1.ChainId.OPTIMISM_GOERLI]: [
        chains_1.WRAPPED_NATIVE_CURRENCY[chains_1.ChainId.OPTIMISM_GOERLI],
        token_provider_1.USDC_OPTIMISM_GOERLI,
        token_provider_1.DAI_OPTIMISM_GOERLI,
        token_provider_1.USDT_OPTIMISM_GOERLI,
        token_provider_1.WBTC_OPTIMISM_GOERLI,
    ],
    [chains_1.ChainId.OPTIMISTIC_KOVAN]: [
        chains_1.WRAPPED_NATIVE_CURRENCY[chains_1.ChainId.OPTIMISTIC_KOVAN],
        token_provider_1.DAI_OPTIMISTIC_KOVAN,
        token_provider_1.WBTC_OPTIMISTIC_KOVAN,
        token_provider_1.USDT_OPTIMISTIC_KOVAN,
        token_provider_1.USDC_OPTIMISTIC_KOVAN,
    ],
    [chains_1.ChainId.POLYGON]: [token_provider_1.USDC_POLYGON, token_provider_1.WETH_POLYGON, token_provider_1.WMATIC_POLYGON],
    [chains_1.ChainId.POLYGON_MUMBAI]: [
        token_provider_1.DAI_POLYGON_MUMBAI,
        chains_1.WRAPPED_NATIVE_CURRENCY[chains_1.ChainId.POLYGON_MUMBAI],
        token_provider_1.WMATIC_POLYGON_MUMBAI,
    ],
    [chains_1.ChainId.CELO]: [token_provider_1.CELO, token_provider_1.CUSD_CELO, token_provider_1.CEUR_CELO, token_provider_1.DAI_CELO],
    [chains_1.ChainId.CELO_ALFAJORES]: [
        token_provider_1.CELO_ALFAJORES,
        token_provider_1.CUSD_CELO_ALFAJORES,
        token_provider_1.CEUR_CELO_ALFAJORES,
        token_provider_1.DAI_CELO_ALFAJORES,
    ],
    [chains_1.ChainId.GNOSIS]: [
        chains_1.WRAPPED_NATIVE_CURRENCY[chains_1.ChainId.GNOSIS],
        token_provider_1.WBTC_GNOSIS,
        token_provider_1.WXDAI_GNOSIS,
        token_provider_1.USDC_ETHEREUM_GNOSIS,
    ],
    [chains_1.ChainId.BSC]: [
        chains_1.WRAPPED_NATIVE_CURRENCY[chains_1.ChainId.BSC],
        token_provider_1.BUSD_BSC,
        token_provider_1.DAI_BSC,
        token_provider_1.USDC_BSC,
        token_provider_1.USDT_BSC,
        token_provider_1.BTC_BSC,
        token_provider_1.ETH_BSC,
    ],
    [chains_1.ChainId.MOONBEAM]: [
        chains_1.WRAPPED_NATIVE_CURRENCY[chains_1.ChainId.MOONBEAM],
        token_provider_1.DAI_MOONBEAM,
        token_provider_1.USDC_MOONBEAM,
        token_provider_1.WBTC_MOONBEAM,
    ],
    [chains_1.ChainId.FANTOM]: [chains_1.WRAPPED_NATIVE_CURRENCY[chains_1.ChainId.FANTOM], token_provider_1.USDC_FANTOM],
};
/**
 * Provider that uses a hardcoded list of V3 pools to generate a list of subgraph pools.
 *
 * Since the pools are hardcoded and the data does not come from the Subgraph, the TVL values
 * are dummys and should not be depended on.
 *
 * Useful for instances where other data sources are unavailable. E.g. Subgraph not available.
 *
 * @export
 * @class StaticV3SubgraphProvider
 */
class StaticV3SubgraphProvider {
    constructor(chainId, poolProvider) {
        this.chainId = chainId;
        this.poolProvider = poolProvider;
    }
    async getPools(tokenIn, tokenOut) {
        log_1.log.info('In static subgraph provider for V3');
        const bases = BASES_TO_CHECK_TRADES_AGAINST[this.chainId];
        const basePairs = lodash_1.default.flatMap(bases, (base) => bases.map((otherBase) => [base, otherBase]));
        if (tokenIn && tokenOut) {
            basePairs.push([tokenIn, tokenOut], ...bases.map((base) => [tokenIn, base]), ...bases.map((base) => [tokenOut, base]));
        }
        const pairs = (0, lodash_1.default)(basePairs)
            .filter((tokens) => Boolean(tokens[0] && tokens[1]))
            .filter(([tokenA, tokenB]) => tokenA.address !== tokenB.address && !tokenA.equals(tokenB))
            .flatMap(([tokenA, tokenB]) => {
            return [
                [tokenA, tokenB, v3_sdk_1.FeeAmount.LOWEST],
                [tokenA, tokenB, v3_sdk_1.FeeAmount.LOW],
                [tokenA, tokenB, v3_sdk_1.FeeAmount.MEDIUM],
                [tokenA, tokenB, v3_sdk_1.FeeAmount.HIGH],
            ];
        })
            .value();
        log_1.log.info(`V3 Static subgraph provider about to get ${pairs.length} pools on-chain`);
        const poolAccessor = await this.poolProvider.getPools(pairs);
        const pools = poolAccessor.getAllPools();
        const poolAddressSet = new Set();
        const subgraphPools = (0, lodash_1.default)(pools)
            .map((pool) => {
            const { token0, token1, fee, liquidity } = pool;
            const poolAddress = v3_sdk_1.Pool.getAddress(pool.token0, pool.token1, pool.fee);
            if (poolAddressSet.has(poolAddress)) {
                return undefined;
            }
            poolAddressSet.add(poolAddress);
            const liquidityNumber = jsbi_1.default.toNumber(liquidity);
            return {
                id: poolAddress,
                feeTier: (0, amounts_1.unparseFeeAmount)(fee),
                liquidity: liquidity.toString(),
                token0: {
                    id: token0.address,
                },
                token1: {
                    id: token1.address,
                },
                // As a very rough proxy we just use liquidity for TVL.
                tvlETH: liquidityNumber,
                tvlUSD: liquidityNumber,
            };
        })
            .compact()
            .value();
        return subgraphPools;
    }
}
exports.StaticV3SubgraphProvider = StaticV3SubgraphProvider;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljLXN1YmdyYXBoLXByb3ZpZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3Byb3ZpZGVycy92My9zdGF0aWMtc3ViZ3JhcGgtcHJvdmlkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBRUEsNkNBQW1EO0FBQ25ELGdEQUF3QjtBQUN4QixvREFBdUI7QUFFdkIsZ0RBQXNEO0FBQ3RELDhDQUFxRTtBQUNyRSx3Q0FBcUM7QUFDckMsc0RBb0UyQjtBQVMzQixNQUFNLDZCQUE2QixHQUFtQjtJQUNwRCxDQUFDLGdCQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxnQ0FBdUIsQ0FBQyxnQkFBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLDRCQUFXLENBQUM7SUFDeEUsb0JBQW9CO0lBQ3BCLDBDQUEwQztJQUMxQyxLQUFLO0lBQ0wsK0RBQStEO0lBQy9ELHFCQUFxQjtJQUNyQiwyQ0FBMkM7SUFDM0MsS0FBSztJQUNMLENBQUMsZ0JBQU8sQ0FBQyxPQUFPLENBQUMsRUFBRTtRQUNqQixnQ0FBdUIsQ0FBQyxnQkFBTyxDQUFDLE9BQU8sQ0FBRTtRQUN6Qyw0QkFBVztRQUNYLDZCQUFZO1FBQ1osNkJBQVk7UUFDWiw2QkFBWTtLQUNiO0lBQ0QsQ0FBQyxnQkFBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQ2pCLGdDQUF1QixDQUFDLGdCQUFPLENBQUMsT0FBTyxDQUFFO1FBQ3pDLDRCQUFXO1FBQ1gsNkJBQVk7UUFDWiw2QkFBWTtLQUNiO0lBQ0QsQ0FBQyxnQkFBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQ2pCLGdDQUF1QixDQUFDLGdCQUFPLENBQUMsT0FBTyxDQUFFO1FBQ3pDLDhCQUFhO1FBQ2IsOEJBQWE7UUFDYiw2QkFBWTtRQUNaLDZCQUFZO0tBQ2I7SUFDRCxDQUFDLGdCQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDZixnQ0FBdUIsQ0FBQyxnQkFBTyxDQUFDLEtBQUssQ0FBRTtRQUN2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