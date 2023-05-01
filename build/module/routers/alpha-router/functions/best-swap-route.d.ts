import { BigNumber } from '@ethersproject/bignumber';
import { TradeType } from '@mageswap/sdk-core';
import { ChainId } from '../../../util';
import { CurrencyAmount } from '../../../util/amounts';
import { AlphaRouterConfig } from '../alpha-router';
import { IGasModel } from '../gas-models';
import { RouteWithValidQuote, V3RouteWithValidQuote } from './../entities/route-with-valid-quote';
export type BestSwapRoute = {
    quote: CurrencyAmount;
    quoteGasAdjusted: CurrencyAmount;
    estimatedGasUsed: BigNumber;
    estimatedGasUsedUSD: CurrencyAmount;
    estimatedGasUsedQuoteToken: CurrencyAmount;
    routes: RouteWithValidQuote[];
};
export declare function getBestSwapRoute(amount: CurrencyAmount, percents: number[], routesWithValidQuotes: RouteWithValidQuote[], routeType: TradeType, chainId: ChainId, routingConfig: AlphaRouterConfig, gasModel?: IGasModel<V3RouteWithValidQuote>): Promise<BestSwapRoute | null>;
export declare function getBestSwapRouteBy(routeType: TradeType, percentToQuotes: {
    [percent: number]: RouteWithValidQuote[];
}, percents: number[], chainId: ChainId, by: (routeQuote: RouteWithValidQuote) => CurrencyAmount, routingConfig: AlphaRouterConfig, gasModel?: IGasModel<V3RouteWithValidQuote>): Promise<BestSwapRoute | undefined>;
