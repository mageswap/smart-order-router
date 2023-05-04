import { Token } from '@mageswap/sdk-core';
import _ from 'lodash';
import { IERC20Metadata__factory } from '../types/v3/factories/IERC20Metadata__factory';
import { ChainId, log, WRAPPED_NATIVE_CURRENCY } from '../util';
// Some well known tokens on each chain for seeding cache / testing.
export const USDC_MAINNET = new Token(ChainId.MAINNET, '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', 6, 'USDC', 'USD//C');
export const USDT_MAINNET = new Token(ChainId.MAINNET, '0xdAC17F958D2ee523a2206206994597C13D831ec7', 6, 'USDT', 'Tether USD');
export const WBTC_MAINNET = new Token(ChainId.MAINNET, '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599', 8, 'WBTC', 'Wrapped BTC');
export const DAI_MAINNET = new Token(ChainId.MAINNET, '0x6B175474E89094C44Da98b954EedeAC495271d0F', 18, 'DAI', 'Dai Stablecoin');
export const FEI_MAINNET = new Token(ChainId.MAINNET, '0x956F47F50A910163D8BF957Cf5846D573E7f87CA', 18, 'FEI', 'Fei USD');
export const UNI_MAINNET = new Token(ChainId.MAINNET, '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984', 18, 'UNI', 'Uniswap');
export const USDC_ROPSTEN = new Token(ChainId.ROPSTEN, '0x07865c6e87b9f70255377e024ace6630c1eaa37f', 6, 'USDC', 'USD//C');
export const USDT_ROPSTEN = new Token(ChainId.ROPSTEN, '0x516de3a7a567d81737e3a46ec4ff9cfd1fcb0136', 6, 'USDT', 'Tether USD');
export const DAI_ROPSTEN = new Token(ChainId.ROPSTEN, '0xad6d458402f60fd3bd25163575031acdce07538d', 18, 'DAI', 'Dai Stablecoin');
export const DAI_RINKEBY_1 = new Token(ChainId.RINKEBY, '0x5592ec0cfb4dbc12d3ab100b257153436a1f0fea', 18, 'DAI', 'DAI');
export const DAI_RINKEBY_2 = new Token(ChainId.RINKEBY, '0xc7AD46e0b8a400Bb3C915120d284AafbA8fc4735', 18, 'DAI', 'DAI');
export const USDC_RINKEBY = new Token(ChainId.RINKEBY, '0x4DBCdF9B62e891a7cec5A2568C3F4FAF9E8Abe2b', 6, 'tUSDC', 'test USD//C');
export const USDT_RINKEBY = new Token(ChainId.RINKEBY, '0xa689352b7c1cad82864beb1d90679356d3962f4d', 18, 'USDT', 'Tether USD');
export const USDC_GÖRLI = new Token(ChainId.GÖRLI, '0x07865c6e87b9f70255377e024ace6630c1eaa37f', 6, 'USDC', 'USD//C');
export const USDT_GÖRLI = new Token(ChainId.GÖRLI, '0xe583769738b6dd4e7caf8451050d1948be717679', 18, 'USDT', 'Tether USD');
export const WBTC_GÖRLI = new Token(ChainId.GÖRLI, '0xa0a5ad2296b38bd3e3eb59aaeaf1589e8d9a29a9', 8, 'WBTC', 'Wrapped BTC');
export const DAI_GÖRLI = new Token(ChainId.GÖRLI, '0x11fe4b6ae13d2a6055c8d9cf65c55bac32b5d844', 18, 'DAI', 'Dai Stablecoin');
export const UNI_GÖRLI = new Token(ChainId.GÖRLI, '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984', 18, 'UNI', 'Uni token');
export const USDC_KOVAN = new Token(ChainId.KOVAN, '0x31eeb2d0f9b6fd8642914ab10f4dd473677d80df', 6, 'USDC', 'USD//C');
export const USDT_KOVAN = new Token(ChainId.KOVAN, '0xa325f1b1ebb748715dfbbaf62e0c6677e137f45d', 18, 'USDT', 'Tether USD');
export const WBTC_KOVAN = new Token(ChainId.KOVAN, '0xe36bc5d8b689ad6d80e78c3e736670e80d4b329d', 8, 'WBTC', 'Wrapped BTC');
export const DAI_KOVAN = new Token(ChainId.KOVAN, '0x9dc7b33c3b63fc00ed5472fbd7813edda6a64752', 18, 'DAI', 'Dai Stablecoin');
export const USDC_OPTIMISM = new Token(ChainId.OPTIMISM, '0x7F5c764cBc14f9669B88837ca1490cCa17c31607', 6, 'USDC', 'USD//C');
export const USDT_OPTIMISM = new Token(ChainId.OPTIMISM, '0x94b008aA00579c1307B0EF2c499aD98a8ce58e58', 6, 'USDT', 'Tether USD');
export const WBTC_OPTIMISM = new Token(ChainId.OPTIMISM, '0x68f180fcCe6836688e9084f035309E29Bf0A2095', 8, 'WBTC', 'Wrapped BTC');
export const DAI_OPTIMISM = new Token(ChainId.OPTIMISM, '0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1', 18, 'DAI', 'Dai Stablecoin');
export const OP_OPTIMISM = new Token(ChainId.OPTIMISM, '0x4200000000000000000000000000000000000042', 18, 'OP', 'Optimism');
export const USDC_OPTIMISM_GOERLI = new Token(ChainId.OPTIMISM_GOERLI, '0x7E07E15D2a87A24492740D16f5bdF58c16db0c4E', 6, 'USDC', 'USD//C');
export const USDT_OPTIMISM_GOERLI = new Token(ChainId.OPTIMISM_GOERLI, '0x853eb4bA5D0Ba2B77a0A5329Fd2110d5CE149ECE', 6, 'USDT', 'Tether USD');
export const WBTC_OPTIMISM_GOERLI = new Token(ChainId.OPTIMISM_GOERLI, '0xe0a592353e81a94Db6E3226fD4A99F881751776a', 8, 'WBTC', 'Wrapped BTC');
export const DAI_OPTIMISM_GOERLI = new Token(ChainId.OPTIMISM_GOERLI, '0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1', 18, 'DAI', 'Dai Stablecoin');
export const USDC_OPTIMISTIC_KOVAN = new Token(ChainId.OPTIMISTIC_KOVAN, '0x3b8e53b3ab8e01fb57d0c9e893bc4d655aa67d84', 6, 'USDC', 'USD//C');
export const USDT_OPTIMISTIC_KOVAN = new Token(ChainId.OPTIMISTIC_KOVAN, '0x7F5c764cBc14f9669B88837ca1490cCa17c31607', 6, 'USDT', 'Tether USD');
export const WBTC_OPTIMISTIC_KOVAN = new Token(ChainId.OPTIMISTIC_KOVAN, '0x2382a8f65b9120E554d1836a504808aC864E169d', 8, 'WBTC', 'Wrapped BTC');
export const DAI_OPTIMISTIC_KOVAN = new Token(ChainId.OPTIMISTIC_KOVAN, '0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1', 18, 'DAI', 'Dai Stablecoin');
export const USDC_ARBITRUM = new Token(ChainId.ARBITRUM_ONE, '0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8', 6, 'USDC', 'USD//C');
export const USDT_ARBITRUM = new Token(ChainId.ARBITRUM_ONE, '0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9', 6, 'USDT', 'Tether USD');
export const WBTC_ARBITRUM = new Token(ChainId.ARBITRUM_ONE, '0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f', 8, 'WBTC', 'Wrapped BTC');
export const DAI_ARBITRUM = new Token(ChainId.ARBITRUM_ONE, '0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1', 18, 'DAI', 'Dai Stablecoin');
export const ARB_ARBITRUM = new Token(ChainId.ARBITRUM_ONE, '0x912CE59144191C1204E64559FE8253a0e49E6548', 18, 'ARB', 'Arbitrum');
// export const DAI_ARBITRUM_RINKEBY = new Token(
//   ChainId.ARBITRUM_RINKEBY,
//   '0x2f3C1B6A51A469051A22986aA0dDF98466cc8D3c',
//   18,
//   'DAI',
//   'Dai Stablecoin'
// );
// higher liquidity in dai-weth pool on arb-rinkeby
export const DAI_ARBITRUM_RINKEBY = new Token(ChainId.ARBITRUM_RINKEBY, '0x5364dc963c402aaf150700f38a8ef52c1d7d7f14', 18, 'DAI', 'Dai Stablecoin');
export const DAI_ARBITRUM_GOERLI = new Token(ChainId.ARBITRUM_GOERLI, '0x0000000000000000000000000000000000000000', // TODO: add address
18, 'DAI', 'Dai Stablecoin');
export const USDT_ARBITRUM_RINKEBY = new Token(ChainId.ARBITRUM_RINKEBY, '0x920b9301c2de92186299cd2abc7199e25b9728b3', 6, 'UDST', 'Tether USD');
export const USDC_ARBITRUM_RINKEBY = new Token(ChainId.ARBITRUM_RINKEBY, '0x09b98f8b2395d076514037ff7d39a091a536206c', 6, 'USDC', 'USD//C');
export const UNI_ARBITRUM_RINKEBY = new Token(ChainId.ARBITRUM_RINKEBY, '0x049251a7175071316e089d0616d8b6aacd2c93b8', 18, 'UNI', 'Uni token');
// Bridged version of official Goerli USDC
export const USDC_ARBITRUM_GOERLI = new Token(ChainId.ARBITRUM_GOERLI, '0x8FB1E3fC51F3b789dED7557E680551d93Ea9d892', 6, 'USDC', 'USD//C');
//polygon tokens
export const WMATIC_POLYGON = new Token(ChainId.POLYGON, '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270', 18, 'WMATIC', 'Wrapped MATIC');
export const WETH_POLYGON = new Token(ChainId.POLYGON, '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619', 18, 'WETH', 'Wrapped Ether');
export const USDC_POLYGON = new Token(ChainId.POLYGON, '0x2791bca1f2de4661ed88a30c99a7a9449aa84174', 6, 'USDC', 'USD//C');
export const DAI_POLYGON = new Token(ChainId.POLYGON, '0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063', 18, 'DAI', 'Dai Stablecoin');
//polygon mumbai tokens
export const WMATIC_POLYGON_MUMBAI = new Token(ChainId.POLYGON_MUMBAI, '0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889', 18, 'WMATIC', 'Wrapped MATIC');
export const USDC_POLYGON_MUMBAI = new Token(ChainId.POLYGON_MUMBAI, '0xe11a86849d99f524cac3e7a0ec1241828e332c62', 6, 'USDC', 'USD//C');
export const DAI_POLYGON_MUMBAI = new Token(ChainId.POLYGON_MUMBAI, '0x001b3b4d0f3714ca98ba10f6042daebf0b1b7b6f', 18, 'DAI', 'Dai Stablecoin');
export const WETH_POLYGON_MUMBAI = new Token(ChainId.POLYGON_MUMBAI, '0xa6fa4fb5f76172d178d61b04b0ecd319c5d1c0aa', 18, 'WETH', 'Wrapped Ether');
// BNB chain Tokens
export const BTC_BSC = new Token(ChainId.BSC, '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c', 18, 'BTCB', 'Binance BTC');
export const BUSD_BSC = new Token(ChainId.BSC, '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56', 18, 'BUSD', 'BUSD');
export const DAI_BSC = new Token(ChainId.BSC, '0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3', 18, 'DAI', 'DAI');
export const ETH_BSC = new Token(ChainId.BSC, '0x2170Ed0880ac9A755fd29B2688956BD959F933F8', 18, 'ETH', 'ETH');
export const USDC_BSC = new Token(ChainId.BSC, '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d', 18, 'USDC', 'USDC');
export const USDT_BSC = new Token(ChainId.BSC, '0x55d398326f99059fF775485246999027B3197955', 18, 'USDT', 'USDT');
// Celo Tokens
export const CELO = new Token(ChainId.CELO, '0x471EcE3750Da237f93B8E339c536989b8978a438', 18, 'CELO', 'Celo native asset');
export const DAI_CELO = new Token(ChainId.CELO, '0xE4fE50cdD716522A56204352f00AA110F731932d', 18, 'DAI', 'Dai Stablecoin');
export const CUSD_CELO = new Token(ChainId.CELO, '0x765DE816845861e75A25fCA122bb6898B8B1282a', 18, 'CUSD', 'Celo Dollar Stablecoin');
export const CEUR_CELO = new Token(ChainId.CELO, '0xD8763CBa276a3738E6DE85b4b3bF5FDed6D6cA73', 18, 'CEUR', 'Celo Euro Stablecoin');
// Celo Alfajores Tokens
export const CELO_ALFAJORES = new Token(ChainId.CELO_ALFAJORES, '0xF194afDf50B03e69Bd7D057c1Aa9e10c9954E4C9', 18, 'CELO', 'Celo native asset');
export const DAI_CELO_ALFAJORES = new Token(ChainId.CELO_ALFAJORES, '0x7d91E51C8F218f7140188A155f5C75388630B6a8', 18, 'DAI', 'Dai Stablecoin');
export const CUSD_CELO_ALFAJORES = new Token(ChainId.CELO_ALFAJORES, '0x874069Fa1Eb16D44d622F2e0Ca25eeA172369bC1', 18, 'CUSD', 'Celo Dollar Stablecoin');
export const CEUR_CELO_ALFAJORES = new Token(ChainId.CELO_ALFAJORES, '0x10c892A6EC43a53E45D0B916B4b7D383B1b78C0F', 18, 'CEUR', 'Celo Euro Stablecoin');
// Gnosis Tokens
export const USDC_ETHEREUM_GNOSIS = new Token(ChainId.GNOSIS, '0xddafbb505ad214d7b80b1f830fccc89b60fb7a83', 6, 'USDC', 'USDC from Ethereum on Gnosis');
export const WXDAI_GNOSIS = new Token(ChainId.GNOSIS, '0xe91d153e0b41518a2ce8dd3d7944fa863463a97d', 18, 'WXDAI', 'Wrapped XDAI on Gnosis');
export const WBTC_GNOSIS = new Token(ChainId.GNOSIS, '0x8e5bbbb09ed1ebde8674cda39a0c169401db4252', 8, 'WBTC', 'Wrapped BTC from Ethereum on Gnosis');
// Moonbeam Tokens
export const USDC_MOONBEAM = new Token(ChainId.MOONBEAM, '0x818ec0A7Fe18Ff94269904fCED6AE3DaE6d6dC0b', 6, 'USDC', 'USD Coin bridged using Multichain');
export const WGLMR_MOONBEAM = new Token(ChainId.MOONBEAM, '0xAcc15dC74880C9944775448304B263D191c6077F', 18, 'WGLMR', 'Wrapped GLMR');
export const DAI_MOONBEAM = new Token(ChainId.MOONBEAM, '0x818ec0A7Fe18Ff94269904fCED6AE3DaE6d6dC0b', 6, 'DAI', 'Dai on moonbeam bridged using Multichain');
export const WBTC_MOONBEAM = new Token(ChainId.MOONBEAM, '0x922D641a426DcFFaeF11680e5358F34d97d112E1', 8, 'WBTC', 'Wrapped BTC bridged using Multichain');
export class TokenProvider {
    constructor(chainId, multicall2Provider) {
        this.chainId = chainId;
        this.multicall2Provider = multicall2Provider;
    }
    async getTokens(_addresses, providerConfig) {
        const addressToToken = {};
        const symbolToToken = {};
        const addresses = _(_addresses)
            .map((address) => address.toLowerCase())
            .uniq()
            .value();
        if (addresses.length > 0) {
            const [symbolsResult, decimalsResult] = await Promise.all([
                this.multicall2Provider.callSameFunctionOnMultipleContracts({
                    addresses,
                    contractInterface: IERC20Metadata__factory.createInterface(),
                    functionName: 'symbol',
                    providerConfig,
                }),
                this.multicall2Provider.callSameFunctionOnMultipleContracts({
                    addresses,
                    contractInterface: IERC20Metadata__factory.createInterface(),
                    functionName: 'decimals',
                    providerConfig,
                }),
            ]);
            const { results: symbols } = symbolsResult;
            const { results: decimals } = decimalsResult;
            for (let i = 0; i < addresses.length; i++) {
                const address = addresses[i];
                const symbolResult = symbols[i];
                const decimalResult = decimals[i];
                if (!(symbolResult === null || symbolResult === void 0 ? void 0 : symbolResult.success) || !(decimalResult === null || decimalResult === void 0 ? void 0 : decimalResult.success)) {
                    log.info({
                        symbolResult,
                        decimalResult,
                    }, `Dropping token with address ${address} as symbol or decimal are invalid`);
                    continue;
                }
                const symbol = symbolResult.result[0];
                const decimal = decimalResult.result[0];
                addressToToken[address.toLowerCase()] = new Token(this.chainId, address, decimal, symbol);
                symbolToToken[symbol.toLowerCase()] =
                    addressToToken[address.toLowerCase()];
            }
            log.info(`Got token symbol and decimals for ${Object.values(addressToToken).length} out of ${addresses.length} tokens on-chain ${providerConfig ? `as of: ${providerConfig === null || providerConfig === void 0 ? void 0 : providerConfig.blockNumber}` : ''}`);
        }
        return {
            getTokenByAddress: (address) => {
                return addressToToken[address.toLowerCase()];
            },
            getTokenBySymbol: (symbol) => {
                return symbolToToken[symbol.toLowerCase()];
            },
            getAllTokens: () => {
                return Object.values(addressToToken);
            },
        };
    }
}
export const DAI_ON = (chainId) => {
    switch (chainId) {
        case ChainId.MAINNET:
            return DAI_MAINNET;
        case ChainId.ROPSTEN:
            return DAI_ROPSTEN;
        case ChainId.RINKEBY:
            return DAI_RINKEBY_1;
        case ChainId.GÖRLI:
            return DAI_GÖRLI;
        case ChainId.KOVAN:
            return DAI_KOVAN;
        case ChainId.OPTIMISM:
            return DAI_OPTIMISM;
        case ChainId.OPTIMISM_GOERLI:
            return DAI_OPTIMISM_GOERLI;
        case ChainId.OPTIMISTIC_KOVAN:
            return DAI_OPTIMISTIC_KOVAN;
        case ChainId.ARBITRUM_ONE:
            return DAI_ARBITRUM;
        case ChainId.ARBITRUM_RINKEBY:
            return DAI_ARBITRUM_RINKEBY;
        case ChainId.ARBITRUM_GOERLI:
            return DAI_ARBITRUM_GOERLI;
        case ChainId.POLYGON:
            return DAI_POLYGON;
        case ChainId.POLYGON_MUMBAI:
            return DAI_POLYGON_MUMBAI;
        case ChainId.CELO:
            return DAI_CELO;
        case ChainId.CELO_ALFAJORES:
            return DAI_CELO_ALFAJORES;
        case ChainId.MOONBEAM:
            return DAI_MOONBEAM;
        case ChainId.BSC:
            return DAI_BSC;
        default:
            throw new Error(`Chain id: ${chainId} not supported`);
    }
};
export const USDT_ON = (chainId) => {
    switch (chainId) {
        case ChainId.MAINNET:
            return USDT_MAINNET;
        case ChainId.ROPSTEN:
            return USDT_ROPSTEN;
        case ChainId.RINKEBY:
            return USDT_RINKEBY;
        case ChainId.GÖRLI:
            return USDT_GÖRLI;
        case ChainId.KOVAN:
            return USDT_KOVAN;
        case ChainId.OPTIMISM:
            return USDT_OPTIMISM;
        case ChainId.OPTIMISM_GOERLI:
            return USDT_OPTIMISM_GOERLI;
        case ChainId.OPTIMISTIC_KOVAN:
            return USDT_OPTIMISTIC_KOVAN;
        case ChainId.ARBITRUM_ONE:
            return USDT_ARBITRUM;
        case ChainId.ARBITRUM_RINKEBY:
            return USDT_ARBITRUM_RINKEBY;
        case ChainId.BSC:
            return USDT_BSC;
        default:
            throw new Error(`Chain id: ${chainId} not supported`);
    }
};
export const USDC_ON = (chainId) => {
    switch (chainId) {
        case ChainId.MAINNET:
            return USDC_MAINNET;
        case ChainId.ROPSTEN:
            return USDC_ROPSTEN;
        case ChainId.RINKEBY:
            return USDC_RINKEBY;
        case ChainId.GÖRLI:
            return USDC_GÖRLI;
        case ChainId.KOVAN:
            return USDC_KOVAN;
        case ChainId.OPTIMISM:
            return USDC_OPTIMISM;
        case ChainId.OPTIMISM_GOERLI:
            return USDC_OPTIMISM_GOERLI;
        case ChainId.OPTIMISTIC_KOVAN:
            return USDC_OPTIMISTIC_KOVAN;
        case ChainId.ARBITRUM_ONE:
            return USDC_ARBITRUM;
        case ChainId.ARBITRUM_RINKEBY:
            return USDC_ARBITRUM_RINKEBY;
        case ChainId.ARBITRUM_GOERLI:
            return USDC_ARBITRUM_GOERLI;
        case ChainId.POLYGON:
            return USDC_POLYGON;
        case ChainId.POLYGON_MUMBAI:
            return USDC_POLYGON_MUMBAI;
        case ChainId.GNOSIS:
            return USDC_ETHEREUM_GNOSIS;
        case ChainId.MOONBEAM:
            return USDC_MOONBEAM;
        case ChainId.BSC:
            return USDC_BSC;
        default:
            throw new Error(`Chain id: ${chainId} not supported`);
    }
};
export const WNATIVE_ON = (chainId) => {
    return WRAPPED_NATIVE_CURRENCY[chainId];
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9rZW4tcHJvdmlkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcHJvdmlkZXJzL3Rva2VuLXByb3ZpZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUMzQyxPQUFPLENBQUMsTUFBTSxRQUFRLENBQUM7QUFFdkIsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDeEYsT0FBTyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxTQUFTLENBQUM7QUErQmhFLG9FQUFvRTtBQUNwRSxNQUFNLENBQUMsTUFBTSxZQUFZLEdBQUcsSUFBSSxLQUFLLENBQ25DLE9BQU8sQ0FBQyxPQUFPLEVBQ2YsNENBQTRDLEVBQzVDLENBQUMsRUFDRCxNQUFNLEVBQ04sUUFBUSxDQUNULENBQUM7QUFDRixNQUFNLENBQUMsTUFBTSxZQUFZLEdBQUcsSUFBSSxLQUFLLENBQ25DLE9BQU8sQ0FBQyxPQUFPLEVBQ2YsNENBQTRDLEVBQzVDLENBQUMsRUFDRCxNQUFNLEVBQ04sWUFBWSxDQUNiLENBQUM7QUFDRixNQUFNLENBQUMsTUFBTSxZQUFZLEdBQUcsSUFBSSxLQUFLLENBQ25DLE9BQU8sQ0FBQyxPQUFPLEVBQ2YsNENBQTRDLEVBQzVDLENBQUMsRUFDRCxNQUFNLEVBQ04sYUFBYSxDQUNkLENBQUM7QUFDRixNQUFNLENBQUMsTUFBTSxXQUFXLEdBQUcsSUFBSSxLQUFLLENBQ2xDLE9BQU8sQ0FBQyxPQUFPLEVBQ2YsNENBQTRDLEVBQzVDLEVBQUUsRUFDRixLQUFLLEVBQ0wsZ0JBQWdCLENBQ2pCLENBQUM7QUFDRixNQUFNLENBQUMsTUFBTSxXQUFXLEdBQUcsSUFBSSxLQUFLLENBQ2xDLE9BQU8sQ0FBQyxPQUFPLEVBQ2YsNENBQTRDLEVBQzVDLEVBQUUsRUFDRixLQUFLLEVBQ0wsU0FBUyxDQUNWLENBQUM7QUFDRixNQUFNLENBQUMsTUFBTSxXQUFXLEdBQUcsSUFBSSxLQUFLLENBQ2xDLE9BQU8sQ0FBQyxPQUFPLEVBQ2YsNENBQTRDLEVBQzVDLEVBQUUsRUFDRixLQUFLLEVBQ0wsU0FBUyxDQUNWLENBQUM7QUFFRixNQUFNLENBQUMsTUFBTSxZQUFZLEdBQUcsSUFBSSxLQUFLLENBQ25DLE9BQU8sQ0FBQyxPQUFPLEVBQ2YsNENBQTRDLEVBQzVDLENBQUMsRUFDRCxNQUFNLEVBQ04sUUFBUSxDQUNULENBQUM7QUFDRixNQUFNLENBQUMsTUFBTSxZQUFZLEdBQUcsSUFBSSxLQUFLLENBQ25DLE9BQU8sQ0FBQyxPQUFPLEVBQ2YsNENBQTRDLEVBQzVDLENBQUMsRUFDRCxNQUFNLEVBQ04sWUFBWSxDQUNiLENBQUM7QUFDRixNQUFNLENBQUMsTUFBTSxXQUFXLEdBQUcsSUFBSSxLQUFLLENBQ2xDLE9BQU8sQ0FBQyxPQUFPLEVBQ2YsNENBQTRDLEVBQzVDLEVBQUUsRUFDRixLQUFLLEVBQ0wsZ0JBQWdCLENBQ2pCLENBQUM7QUFFRixNQUFNLENBQUMsTUFBTSxhQUFhLEdBQUcsSUFBSSxLQUFLLENBQ3BDLE9BQU8sQ0FBQyxPQUFPLEVBQ2YsNENBQTRDLEVBQzVDLEVBQUUsRUFDRixLQUFLLEVBQ0wsS0FBSyxDQUNOLENBQUM7QUFDRixNQUFNLENBQUMsTUFBTSxhQUFhLEdBQUcsSUFBSSxLQUFLLENBQ3BDLE9BQU8sQ0FBQyxPQUFPLEVBQ2YsNENBQTRDLEVBQzVDLEVBQUUsRUFDRixLQUFLLEVBQ0wsS0FBSyxDQUNOLENBQUM7QUFDRixNQUFNLENBQUMsTUFBTSxZQUFZLEdBQUcsSUFBSSxLQUFLLENBQ25DLE9BQU8sQ0FBQyxPQUFPLEVBQ2YsNENBQTRDLEVBQzVDLENBQUMsRUFDRCxPQUFPLEVBQ1AsYUFBYSxDQUNkLENBQUM7QUFDRixNQUFNLENBQUMsTUFBTSxZQUFZLEdBQUcsSUFBSSxLQUFLLENBQ25DLE9BQU8sQ0FBQyxPQUFPLEVBQ2YsNENBQTRDLEVBQzVDLEVBQUUsRUFDRixNQUFNLEVBQ04sWUFBWSxDQUNiLENBQUM7QUFFRixNQUFNLENBQUMsTUFBTSxVQUFVLEdBQUcsSUFBSSxLQUFLLENBQ2pDLE9BQU8sQ0FBQyxLQUFLLEVBQ2IsNENBQTRDLEVBQzVDLENBQUMsRUFDRCxNQUFNLEVBQ04sUUFBUSxDQUNULENBQUM7QUFDRixNQUFNLENBQUMsTUFBTSxVQUFVLEdBQUcsSUFBSSxLQUFLLENBQ2pDLE9BQU8sQ0FBQyxLQUFLLEVBQ2IsNENBQTRDLEVBQzVDLEVBQUUsRUFDRixNQUFNLEVBQ04sWUFBWSxDQUNiLENBQUM7QUFDRixNQUFNLENBQUMsTUFBTSxVQUFVLEdBQUcsSUFBSSxLQUFLLENBQ2pDLE9BQU8sQ0FBQyxLQUFLLEVBQ2IsNENBQTRDLEVBQzVDLENBQUMsRUFDRCxNQUFNLEVBQ04sYUFBYSxDQUNkLENBQUM7QUFDRixNQUFNLENBQUMsTUFBTSxTQUFTLEdBQUcsSUFBSSxLQUFLLENBQ2hDLE9BQU8sQ0FBQyxLQUFLLEVBQ2IsNENBQTRDLEVBQzVDLEVBQUUsRUFDRixLQUFLLEVBQ0wsZ0JBQWdCLENBQ2pCLENBQUM7QUFDRixNQUFNLENBQUMsTUFBTSxTQUFTLEdBQUcsSUFBSSxLQUFLLENBQ2hDLE9BQU8sQ0FBQyxLQUFLLEVBQ2IsNENBQTRDLEVBQzVDLEVBQUUsRUFDRixLQUFLLEVBQ0wsV0FBVyxDQUNaLENBQUM7QUFFRixNQUFNLENBQUMsTUFBTSxVQUFVLEdBQUcsSUFBSSxLQUFLLENBQ2pDLE9BQU8sQ0FBQyxLQUFLLEVBQ2IsNENBQTRDLEVBQzVDLENBQUMsRUFDRCxNQUFNLEVBQ04sUUFBUSxDQUNULENBQUM7QUFDRixNQUFNLENBQUMsTUFBTSxVQUFVLEdBQUcsSUFBSSxLQUFLLENBQ2pDLE9BQU8sQ0FBQyxLQUFLLEVBQ2IsNENBQTRDLEVBQzVDLEVBQUUsRUFDRixNQUFNLEVBQ04sWUFBWSxDQUNiLENBQUM7QUFDRixNQUFNLENBQUMsTUFBTSxVQUFVLEdBQUcsSUFBSSxLQUFLLENBQ2pDLE9BQU8sQ0FBQyxLQUFLLEVBQ2IsNENBQTRDLEVBQzVDLENB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