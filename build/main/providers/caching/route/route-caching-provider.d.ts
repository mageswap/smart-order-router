/**
 * Provider for getting token data from a Token List.
 *
 * @export
 * @interface IRouteCachingProvider
 */
import { Protocol } from '@mageswap/router-sdk';
import { Currency, CurrencyAmount, Token, TradeType } from '@mageswap/sdk-core';
import { ChainId } from '../../../util';
import { CacheMode } from './model';
import { CachedRoutes } from './model/cached-routes';
/**
 * Abstract class for a RouteCachingProvider.
 * Defines the base methods of how to interact with this interface, but not the implementation of how to cache.
 */
export declare abstract class IRouteCachingProvider {
    /**
     * Final implementation of the public `getCachedRoute` method, this is how code will interact with the implementation
     *
     * @public
     * @readonly
     * @param chainId
     * @param amount
     * @param quoteToken
     * @param tradeType
     * @param protocols
     * @param blockNumber
     */
    readonly getCachedRoute: (chainId: number, amount: CurrencyAmount<Currency>, quoteToken: Token, tradeType: TradeType, protocols: Protocol[], blockNumber: number) => Promise<CachedRoutes | undefined>;
    /**
     * Final implementation of the public `setCachedRoute` method.
     * This method will set the blockToLive in the CachedRoutes object before calling the internal method to insert in cache.
     *
     * @public
     * @readonly
     * @param cachedRoutes The route to cache.
     * @returns Promise<boolean> Indicates if the route was inserted into cache.
     */
    readonly setCachedRoute: (cachedRoutes: CachedRoutes, amount: CurrencyAmount<Currency>) => Promise<boolean>;
    /**
     * Returns the CacheMode for the given cachedRoutes and amount
     *
     * @param cachedRoutes
     * @param amount
     */
    getCacheModeFromCachedRoutes(cachedRoutes: CachedRoutes, amount: CurrencyAmount<Currency>): Promise<CacheMode>;
    /**
     * Returns the CacheMode for the given combination of chainId, tokenIn, tokenOut and tradetype
     *
     * @public
     * @abstract
     * @param chainId
     * @param tokenIn
     * @param tokenOut
     * @param tradeType
     * @param amount
     */
    abstract getCacheMode(chainId: ChainId, amount: CurrencyAmount<Currency>, quoteToken: Token, tradeType: TradeType, protocols: Protocol[]): Promise<CacheMode>;
    private filterExpiredCachedRoutes;
    /**
     * Internal function to fetch the CachedRoute from the cache.
     * Must be implemented.
     *
     * @param chainId
     * @param amount
     * @param quoteToken
     * @param tradeType
     * @param protocols
     * @protected
     */
    protected abstract _getCachedRoute(chainId: ChainId, amount: CurrencyAmount<Currency>, quoteToken: Token, tradeType: TradeType, protocols: Protocol[]): Promise<CachedRoutes | undefined>;
    /**
     * Internal function to insert the CachedRoute into cache.
     * Must be implemented.
     *
     * @param cachedRoutes
     * @param amount
     * @protected
     */
    protected abstract _setCachedRoute(cachedRoutes: CachedRoutes, amount: CurrencyAmount<Currency>): Promise<boolean>;
    /**
     * Internal function to getBlocksToLive for a given cachedRoute.
     * This function is called before attempting to insert the route into cache.
     * Must be implemented.
     *
     * @param cachedRoutes
     * @param amount
     * @protected
     */
    protected abstract _getBlocksToLive(cachedRoutes: CachedRoutes, amount: CurrencyAmount<Currency>): Promise<number>;
}
