"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WETH9 = exports.constructSameAddressMap = exports.MULTICALL2_ADDRESS = exports.V3_MIGRATOR_ADDRESS = exports.NONFUNGIBLE_POSITION_MANAGER_ADDRESS = exports.TICK_LENS_ADDRESS = exports.ARB_GASINFO_ADDRESS = exports.OVM_GASPRICE_ADDRESS = exports.SWAP_ROUTER_02_ADDRESSES = exports.UNISWAP_MULTICALL_ADDRESSES = exports.MIXED_ROUTE_QUOTER_V1_ADDRESSES = exports.QUOTER_V2_ADDRESSES = exports.V3_CORE_FACTORY_ADDRESSES = exports.BSC_V3_MIGRATOR_ADDRESS = exports.BSC_SWAP_ROUTER_02_ADDRESS = exports.BSC_NONFUNGIBLE_POSITION_MANAGER_ADDRESS = exports.BSC_TICK_LENS_ADDRESS = void 0;
const sdk_core_1 = require("@mageswap/sdk-core");
const v3_sdk_1 = require("@mageswap/v3-sdk");
const chains_1 = require("./chains");
const CELO_V3_CORE_FACTORY_ADDRESSES = '0xAfE208a311B21f13EF87E33A90049fC17A7acDEc';
const CELO_QUOTER_ADDRESSES = '0x82825d0554fA07f7FC52Ab63c961F330fdEFa8E8';
const CELO_MULTICALL_ADDRESS = '0x633987602DE5C4F337e3DbF265303A1080324204';
const ARBITRUM_GOERLI_V3_CORE_FACTORY_ADDRESSES = '0x4893376342d5D7b3e31d4184c08b265e5aB2A3f6';
const ARBITRUM_GOERLI_QUOTER_ADDRESSES = '0x1dd92b83591781D0C6d98d07391eea4b9a6008FA';
const ARBITRUM_GOERLI_MULTICALL_ADDRESS = '0x8260CB40247290317a4c062F3542622367F206Ee';
const OPTIMISM_GOERLI_V3_CORE_FACTORY_ADDRESSES = '0xB656dA17129e7EB733A557f4EBc57B76CFbB5d10';
const OPTIMISM_GOERLI_QUOTER_ADDRESSES = '0x9569CbA925c8ca2248772A9A4976A516743A246F';
const OPTIMISM_GOERLI_MULTICALL_ADDRESS = '0x07F2D8a2a02251B62af965f22fC4744A5f96BCCd';
const BSC_V3_CORE_FACTORY_ADDRESSES = '0xdB1d10011AD0Ff90774D0C6Bb92e5C5c8b4461F7';
const BSC_QUOTER_ADDRESSES = '0x78D78E420Da98ad378D7799bE8f4AF69033EB077';
const BSC_MULTICALL_ADDRESS = '0x963Df249eD09c358A4819E39d9Cd5736c3087184';
exports.BSC_TICK_LENS_ADDRESS = '0xD9270014D396281579760619CCf4c3af0501A47C';
exports.BSC_NONFUNGIBLE_POSITION_MANAGER_ADDRESS = '0x7b8A01B39D58278b5DE7e48c8449c9f4F5170613';
exports.BSC_SWAP_ROUTER_02_ADDRESS = '0xB971eF87ede563556b2ED4b1C0b0019111Dd85d2';
exports.BSC_V3_MIGRATOR_ADDRESS = '0x32681814957e0C13117ddc0c2aba232b5c9e760f';
exports.V3_CORE_FACTORY_ADDRESSES = Object.assign(Object.assign({}, constructSameAddressMap(v3_sdk_1.FACTORY_ADDRESS)), { [chains_1.ChainId.CELO]: CELO_V3_CORE_FACTORY_ADDRESSES, [chains_1.ChainId.CELO_ALFAJORES]: CELO_V3_CORE_FACTORY_ADDRESSES, [chains_1.ChainId.OPTIMISM_GOERLI]: OPTIMISM_GOERLI_V3_CORE_FACTORY_ADDRESSES, [chains_1.ChainId.ARBITRUM_GOERLI]: ARBITRUM_GOERLI_V3_CORE_FACTORY_ADDRESSES, [chains_1.ChainId.BSC]: BSC_V3_CORE_FACTORY_ADDRESSES });
exports.QUOTER_V2_ADDRESSES = Object.assign(Object.assign({}, constructSameAddressMap('0x61fFE014bA17989E743c5F6cB21bF9697530B21e')), { [chains_1.ChainId.CELO]: CELO_QUOTER_ADDRESSES, [chains_1.ChainId.CELO_ALFAJORES]: CELO_QUOTER_ADDRESSES, [chains_1.ChainId.OPTIMISM_GOERLI]: OPTIMISM_GOERLI_QUOTER_ADDRESSES, [chains_1.ChainId.ARBITRUM_GOERLI]: ARBITRUM_GOERLI_QUOTER_ADDRESSES, [chains_1.ChainId.BSC]: BSC_QUOTER_ADDRESSES });
exports.MIXED_ROUTE_QUOTER_V1_ADDRESSES = {
    [chains_1.ChainId.MAINNET]: '0x84E44095eeBfEC7793Cd7d5b57B7e401D7f1cA2E',
    [chains_1.ChainId.RINKEBY]: '0x84E44095eeBfEC7793Cd7d5b57B7e401D7f1cA2E',
    [chains_1.ChainId.ROPSTEN]: '0x84E44095eeBfEC7793Cd7d5b57B7e401D7f1cA2E',
    [chains_1.ChainId.GÖRLI]: '0xBa60b6e6fF25488308789E6e0A65D838be34194e',
};
exports.UNISWAP_MULTICALL_ADDRESSES = Object.assign(Object.assign({}, constructSameAddressMap('0x1F98415757620B543A52E61c46B32eB19261F984')), { [chains_1.ChainId.CELO]: CELO_MULTICALL_ADDRESS, [chains_1.ChainId.CELO_ALFAJORES]: CELO_MULTICALL_ADDRESS, [chains_1.ChainId.OPTIMISM_GOERLI]: OPTIMISM_GOERLI_MULTICALL_ADDRESS, [chains_1.ChainId.ARBITRUM_GOERLI]: ARBITRUM_GOERLI_MULTICALL_ADDRESS, [chains_1.ChainId.BSC]: BSC_MULTICALL_ADDRESS });
const SWAP_ROUTER_02_ADDRESSES = (chainId) => {
    if (chainId == chains_1.ChainId.BSC) {
        return exports.BSC_SWAP_ROUTER_02_ADDRESS;
    }
    return '0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45';
};
exports.SWAP_ROUTER_02_ADDRESSES = SWAP_ROUTER_02_ADDRESSES;
exports.OVM_GASPRICE_ADDRESS = '0x420000000000000000000000000000000000000F';
exports.ARB_GASINFO_ADDRESS = '0x000000000000000000000000000000000000006C';
exports.TICK_LENS_ADDRESS = '0xbfd8137f7d1516D3ea5cA83523914859ec47F573';
exports.NONFUNGIBLE_POSITION_MANAGER_ADDRESS = '0xC36442b4a4522E871399CD717aBDD847Ab11FE88';
exports.V3_MIGRATOR_ADDRESS = '0xA5644E29708357803b5A882D272c41cC0dF92B34';
exports.MULTICALL2_ADDRESS = '0x5BA1e12693Dc8F9c48aAD8770482f4739bEeD696';
function constructSameAddressMap(address, additionalNetworks = []) {
    return chains_1.NETWORKS_WITH_SAME_UNISWAP_ADDRESSES.concat(additionalNetworks).reduce((memo, chainId) => {
        memo[chainId] = address;
        return memo;
    }, {});
}
exports.constructSameAddressMap = constructSameAddressMap;
exports.WETH9 = {
    [chains_1.ChainId.MAINNET]: new sdk_core_1.Token(chains_1.ChainId.MAINNET, '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', 18, 'WETH', 'Wrapped Ether'),
    [chains_1.ChainId.ROPSTEN]: new sdk_core_1.Token(chains_1.ChainId.ROPSTEN, '0xc778417E063141139Fce010982780140Aa0cD5Ab', 18, 'WETH', 'Wrapped Ether'),
    [chains_1.ChainId.RINKEBY]: new sdk_core_1.Token(chains_1.ChainId.RINKEBY, '0xc778417E063141139Fce010982780140Aa0cD5Ab', 18, 'WETH', 'Wrapped Ether'),
    [chains_1.ChainId.GÖRLI]: new sdk_core_1.Token(chains_1.ChainId.GÖRLI, '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6', 18, 'WETH', 'Wrapped Ether'),
    [chains_1.ChainId.KOVAN]: new sdk_core_1.Token(chains_1.ChainId.KOVAN, '0xd0A1E359811322d97991E03f863a0C30C2cF029C', 18, 'WETH', 'Wrapped Ether'),
    [chains_1.ChainId.OPTIMISM]: new sdk_core_1.Token(chains_1.ChainId.OPTIMISM, '0x4200000000000000000000000000000000000006', 18, 'WETH', 'Wrapped Ether'),
    [chains_1.ChainId.OPTIMISM_GOERLI]: new sdk_core_1.Token(chains_1.ChainId.OPTIMISM_GOERLI, '0x4200000000000000000000000000000000000006', 18, 'WETH', 'Wrapped Ether'),
    [chains_1.ChainId.OPTIMISTIC_KOVAN]: new sdk_core_1.Token(chains_1.ChainId.OPTIMISTIC_KOVAN, '0x4200000000000000000000000000000000000006', 18, 'WETH', 'Wrapped Ether'),
    [chains_1.ChainId.ARBITRUM_ONE]: new sdk_core_1.Token(chains_1.ChainId.ARBITRUM_ONE, '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1', 18, 'WETH', 'Wrapped Ether'),
    [chains_1.ChainId.ARBITRUM_RINKEBY]: new sdk_core_1.Token(chains_1.ChainId.ARBITRUM_RINKEBY, '0xB47e6A5f8b33b3F17603C83a0535A9dcD7E32681', 18, 'WETH', 'Wrapped Ether'),
    [chains_1.ChainId.ARBITRUM_GOERLI]: new sdk_core_1.Token(chains_1.ChainId.ARBITRUM_GOERLI, '0xe39Ab88f8A4777030A534146A9Ca3B52bd5D43A3', 18, 'WETH', 'Wrapped Ether'),
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzc2VzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3V0aWwvYWRkcmVzc2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLGlEQUEyQztBQUMzQyw2Q0FBbUQ7QUFFbkQscUNBQXlFO0FBRXpFLE1BQU0sOEJBQThCLEdBQ2xDLDRDQUE0QyxDQUFDO0FBQy9DLE1BQU0scUJBQXFCLEdBQUcsNENBQTRDLENBQUM7QUFDM0UsTUFBTSxzQkFBc0IsR0FBRyw0Q0FBNEMsQ0FBQztBQUU1RSxNQUFNLHlDQUF5QyxHQUM3Qyw0Q0FBNEMsQ0FBQztBQUMvQyxNQUFNLGdDQUFnQyxHQUNwQyw0Q0FBNEMsQ0FBQztBQUMvQyxNQUFNLGlDQUFpQyxHQUNyQyw0Q0FBNEMsQ0FBQztBQUUvQyxNQUFNLHlDQUF5QyxHQUM3Qyw0Q0FBNEMsQ0FBQztBQUMvQyxNQUFNLGdDQUFnQyxHQUNwQyw0Q0FBNEMsQ0FBQztBQUMvQyxNQUFNLGlDQUFpQyxHQUNyQyw0Q0FBNEMsQ0FBQztBQUUvQyxNQUFNLDZCQUE2QixHQUNqQyw0Q0FBNEMsQ0FBQztBQUMvQyxNQUFNLG9CQUFvQixHQUFHLDRDQUE0QyxDQUFDO0FBQzFFLE1BQU0scUJBQXFCLEdBQUcsNENBQTRDLENBQUM7QUFFOUQsUUFBQSxxQkFBcUIsR0FDaEMsNENBQTRDLENBQUM7QUFDbEMsUUFBQSx3Q0FBd0MsR0FDbkQsNENBQTRDLENBQUM7QUFDbEMsUUFBQSwwQkFBMEIsR0FDckMsNENBQTRDLENBQUM7QUFDbEMsUUFBQSx1QkFBdUIsR0FDbEMsNENBQTRDLENBQUM7QUFFbEMsUUFBQSx5QkFBeUIsbUNBQ2pDLHVCQUF1QixDQUFDLHdCQUFlLENBQUMsS0FDM0MsQ0FBQyxnQkFBTyxDQUFDLElBQUksQ0FBQyxFQUFFLDhCQUE4QixFQUM5QyxDQUFDLGdCQUFPLENBQUMsY0FBYyxDQUFDLEVBQUUsOEJBQThCLEVBQ3hELENBQUMsZ0JBQU8sQ0FBQyxlQUFlLENBQUMsRUFBRSx5Q0FBeUMsRUFDcEUsQ0FBQyxnQkFBTyxDQUFDLGVBQWUsQ0FBQyxFQUFFLHlDQUF5QyxFQUNwRSxDQUFDLGdCQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsNkJBQTZCLElBRTVDO0FBRVcsUUFBQSxtQkFBbUIsbUNBQzNCLHVCQUF1QixDQUFDLDRDQUE0QyxDQUFDLEtBQ3hFLENBQUMsZ0JBQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxxQkFBcUIsRUFDckMsQ0FBQyxnQkFBTyxDQUFDLGNBQWMsQ0FBQyxFQUFFLHFCQUFxQixFQUMvQyxDQUFDLGdCQUFPLENBQUMsZUFBZSxDQUFDLEVBQUUsZ0NBQWdDLEVBQzNELENBQUMsZ0JBQU8sQ0FBQyxlQUFlLENBQUMsRUFBRSxnQ0FBZ0MsRUFDM0QsQ0FBQyxnQkFBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLG9CQUFvQixJQUVuQztBQUVXLFFBQUEsK0JBQStCLEdBQWU7SUFDekQsQ0FBQyxnQkFBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLDRDQUE0QztJQUMvRCxDQUFDLGdCQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsNENBQTRDO0lBQy9ELENBQUMsZ0JBQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSw0Q0FBNEM7SUFDL0QsQ0FBQyxnQkFBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLDRDQUE0QztDQUM5RCxDQUFDO0FBRVcsUUFBQSwyQkFBMkIsbUNBQ25DLHVCQUF1QixDQUFDLDRDQUE0QyxDQUFDLEtBQ3hFLENBQUMsZ0JBQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxzQkFBc0IsRUFDdEMsQ0FBQyxnQkFBTyxDQUFDLGNBQWMsQ0FBQyxFQUFFLHNCQUFzQixFQUNoRCxDQUFDLGdCQUFPLENBQUMsZUFBZSxDQUFDLEVBQUUsaUNBQWlDLEVBQzVELENBQUMsZ0JBQU8sQ0FBQyxlQUFlLENBQUMsRUFBRSxpQ0FBaUMsRUFDNUQsQ0FBQyxnQkFBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLHFCQUFxQixJQUVwQztBQUVLLE1BQU0sd0JBQXdCLEdBQUcsQ0FBQyxPQUFlLEVBQUUsRUFBRTtJQUMxRCxJQUFJLE9BQU8sSUFBSSxnQkFBTyxDQUFDLEdBQUcsRUFBRTtRQUMxQixPQUFPLGtDQUEwQixDQUFDO0tBQ25DO0lBQ0QsT0FBTyw0Q0FBNEMsQ0FBQztBQUN0RCxDQUFDLENBQUM7QUFMVyxRQUFBLHdCQUF3Qiw0QkFLbkM7QUFFVyxRQUFBLG9CQUFvQixHQUMvQiw0Q0FBNEMsQ0FBQztBQUNsQyxRQUFBLG1CQUFtQixHQUFHLDRDQUE0QyxDQUFDO0FBQ25FLFFBQUEsaUJBQWlCLEdBQUcsNENBQTRDLENBQUM7QUFDakUsUUFBQSxvQ0FBb0MsR0FDL0MsNENBQTRDLENBQUM7QUFDbEMsUUFBQSxtQkFBbUIsR0FBRyw0Q0FBNEMsQ0FBQztBQUNuRSxRQUFBLGtCQUFrQixHQUFHLDRDQUE0QyxDQUFDO0FBSS9FLFNBQWdCLHVCQUF1QixDQUNyQyxPQUFVLEVBQ1YscUJBQWdDLEVBQUU7SUFFbEMsT0FBTyw2Q0FBb0MsQ0FBQyxNQUFNLENBQ2hELGtCQUFrQixDQUNuQixDQUFDLE1BQU0sQ0FFTCxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsRUFBRTtRQUNuQixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsT0FBTyxDQUFDO1FBQ3hCLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ1QsQ0FBQztBQVpELDBEQVlDO0FBRVksUUFBQSxLQUFLLEdBWWQ7SUFDRixDQUFDLGdCQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsSUFBSSxnQkFBSyxDQUMxQixnQkFBTyxDQUFDLE9BQU8sRUFDZiw0Q0FBNEMsRUFDNUMsRUFBRSxFQUNGLE1BQU0sRUFDTixlQUFlLENBQ2hCO0lBQ0QsQ0FBQyxnQkFBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLElBQUksZ0JBQUssQ0FDMUIsZ0JBQU8sQ0FBQyxPQUFPLEVBQ2YsNENBQTRDLEVBQzVDLEVBQUUsRUFDRixNQUFNLEVBQ04sZUFBZSxDQUNoQjtJQUNELENBQUMsZ0JBQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSxJQUFJLGdCQUFLLENBQzFCLGdCQUFPLENBQUMsT0FBTyxFQUNmLDRDQUE0QyxFQUM1QyxFQUFFLEVBQ0YsTUFBTSxFQUNOLGVBQWUsQ0FDaEI7SUFDRCxDQUFDLGdCQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsSUFBSSxnQkFBSyxDQUN4QixnQkFBTyxDQUFDLEtBQUssRUFDYiw0Q0FBNEMsRUFDNUMsRUFBRSxFQUNGLE1BQU0sRUFDTixlQUFlLENBQ2hCO0lBQ0QsQ0FBQyxnQkFBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLElBQUksZ0JBQUssQ0FDeEIsZ0JBQU8sQ0FBQyxLQUFLLEVBQ2IsNENBQTRDLEVBQzVDLEVBQUUsRUFDRixNQUFNLEVBQ04sZUFBZSxDQUNoQjtJQUNELENBQUMsZ0JBQU8sQ0FBQyxRQUFRLENBQUMsRUFBRSxJQUFJLGdCQUFLLENBQzNCLGdCQUFPLENBQUMsUUFBUSxFQUNoQiw0Q0FBNEMsRUFDNUMsRUFBRSxFQUNGLE1BQU0sRUFDTixlQUFlLENBQ2hCO0lBQ0QsQ0FBQyxnQkFBTyxDQUFDLGVBQWUsQ0FBQyxFQUFFLElBQUksZ0JBQUssQ0FDbEMsZ0JBQU8sQ0FBQyxlQUFlLEVBQ3ZCLDRDQUE0QyxFQUM1QyxFQUFFLEVBQ0YsTUFBTSxFQUNOLGVBQWUsQ0FDaEI7SUFDRCxDQUFDLGdCQUFPLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxJQUFJLGdCQUFLLENBQ25DLGdCQUFPLENBQUMsZ0JBQWdCLEVBQ3hCLDRDQUE0QyxFQUM1QyxFQUFFLEVBQ0YsTUFBTSxFQUNOLGVBQWUsQ0FDaEI7SUFDRCxDQUFDLGdCQUFPLENBQUMsWUFBWSxDQUFDLEVBQUUsSUFBSSxnQkFBSyxDQUMvQixnQkFBTyxDQUFDLFlBQVksRUFDcEIsNENBQTRDLEVBQzVDLEVBQUUsRUFDRixNQUFNLEVBQ04sZUFBZSxDQUNoQjtJQUNELENBQUMsZ0JBQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLElBQUksZ0JBQUssQ0FDbkMsZ0JBQU8sQ0FBQyxnQkFBZ0IsRUFDeEIsNENBQTRDLEVBQzVDLEVBQUUsRUFDRixNQUFNLEVBQ04sZUFBZSxDQUNoQjtJQUNELENBQUMsZ0JBQU8sQ0FBQyxlQUFlLENBQUMsRUFBRSxJQUFJLGdCQUFLLENBQ2xDLGdCQUFPLENBQUMsZUFBZSxFQUN2Qiw0Q0FBNEMsRUFDNUMsRUFBRSxFQUNGLE1BQU0sRUFDTixlQUFlLENBQ2hCO0NBQ0YsQ0FBQyJ9