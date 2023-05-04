/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import type { TickTest, TickTestInterface } from '../TickTest';

const _abi = [
  {
    inputs: [
      {
        internalType: 'int24',
        name: 'tick',
        type: 'int24',
      },
    ],
    name: 'clear',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'int24',
        name: 'tick',
        type: 'int24',
      },
      {
        internalType: 'uint256',
        name: 'feeGrowthGlobal0X128',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'feeGrowthGlobal1X128',
        type: 'uint256',
      },
      {
        internalType: 'uint160',
        name: 'secondsPerLiquidityCumulativeX128',
        type: 'uint160',
      },
      {
        internalType: 'int56',
        name: 'tickCumulative',
        type: 'int56',
      },
      {
        internalType: 'uint32',
        name: 'time',
        type: 'uint32',
      },
    ],
    name: 'cross',
    outputs: [
      {
        internalType: 'int128',
        name: 'liquidityNet',
        type: 'int128',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'int24',
        name: 'tickLower',
        type: 'int24',
      },
      {
        internalType: 'int24',
        name: 'tickUpper',
        type: 'int24',
      },
      {
        internalType: 'int24',
        name: 'tickCurrent',
        type: 'int24',
      },
      {
        internalType: 'uint256',
        name: 'feeGrowthGlobal0X128',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'feeGrowthGlobal1X128',
        type: 'uint256',
      },
    ],
    name: 'getFeeGrowthInside',
    outputs: [
      {
        internalType: 'uint256',
        name: 'feeGrowthInside0X128',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'feeGrowthInside1X128',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'int24',
        name: 'tick',
        type: 'int24',
      },
      {
        components: [
          {
            internalType: 'uint128',
            name: 'liquidityGross',
            type: 'uint128',
          },
          {
            internalType: 'int128',
            name: 'liquidityNet',
            type: 'int128',
          },
          {
            internalType: 'uint256',
            name: 'feeGrowthOutside0X128',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'feeGrowthOutside1X128',
            type: 'uint256',
          },
          {
            internalType: 'int56',
            name: 'tickCumulativeOutside',
            type: 'int56',
          },
          {
            internalType: 'uint160',
            name: 'secondsPerLiquidityOutsideX128',
            type: 'uint160',
          },
          {
            internalType: 'uint32',
            name: 'secondsOutside',
            type: 'uint32',
          },
          {
            internalType: 'bool',
            name: 'initialized',
            type: 'bool',
          },
        ],
        internalType: 'struct Tick.Info',
        name: 'info',
        type: 'tuple',
      },
    ],
    name: 'setTick',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'int24',
        name: 'tickSpacing',
        type: 'int24',
      },
    ],
    name: 'tickSpacingToMaxLiquidityPerTick',
    outputs: [
      {
        internalType: 'uint128',
        name: '',
        type: 'uint128',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'int24',
        name: '',
        type: 'int24',
      },
    ],
    name: 'ticks',
    outputs: [
      {
        internalType: 'uint128',
        name: 'liquidityGross',
        type: 'uint128',
      },
      {
        internalType: 'int128',
        name: 'liquidityNet',
        type: 'int128',
      },
      {
        internalType: 'uint256',
        name: 'feeGrowthOutside0X128',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'feeGrowthOutside1X128',
        type: 'uint256',
      },
      {
        internalType: 'int56',
        name: 'tickCumulativeOutside',
        type: 'int56',
      },
      {
        internalType: 'uint160',
        name: 'secondsPerLiquidityOutsideX128',
        type: 'uint160',
      },
      {
        internalType: 'uint32',
        name: 'secondsOutside',
        type: 'uint32',
      },
      {
        internalType: 'bool',
        name: 'initialized',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'int24',
        name: 'tick',
        type: 'int24',
      },
      {
        internalType: 'int24',
        name: 'tickCurrent',
        type: 'int24',
      },
      {
        internalType: 'int128',
        name: 'liquidityDelta',
        type: 'int128',
      },
      {
        internalType: 'uint256',
        name: 'feeGrowthGlobal0X128',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'feeGrowthGlobal1X128',
        type: 'uint256',
      },
      {
        internalType: 'uint160',
        name: 'secondsPerLiquidityCumulativeX128',
        type: 'uint160',
      },
      {
        internalType: 'int56',
        name: 'tickCumulative',
        type: 'int56',
      },
      {
        internalType: 'uint32',
        name: 'time',
        type: 'uint32',
      },
      {
        internalType: 'bool',
        name: 'upper',
        type: 'bool',
      },
      {
        internalType: 'uint128',
        name: 'maxLiquidity',
        type: 'uint128',
      },
    ],
    name: 'update',
    outputs: [
      {
        internalType: 'bool',
        name: 'flipped',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];

const _bytecode =
  '0x608060405234801561001057600080fd5b50610c02806100206000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c806382c66f871161005b57806382c66f87146100e1578063b613524a14610101578063df33fa8814610114578063f30dba93146101345761007d565b806320b90da91461008257806330e3ff4c146100ab5780635cb083ce146100cc575b600080fd5b610095610090366004610929565b61015b565b6040516100a29190610b62565b60405180910390f35b6100be6100b93660046109d4565b61017f565b6040516100a2929190610be7565b6100df6100da366004610a28565b61019e565b005b6100f46100ef366004610908565b6102d4565b6040516100a29190610b7b565b6100df61010f366004610908565b6102e7565b610127610122366004610afd565b6102f5565b6040516100a29190610b6d565b610147610142366004610908565b610311565b6040516100a2989796959493929190610b8f565b6000610170818c8c8c8c8c8c8c8c8c8c61037f565b9b9a5050505050505050505050565b600080610190818888888888610572565b915091509550959350505050565b600291820b820b600090815260208181526040918290208351815492850151600f0b6001600160801b03908116600160801b029181166fffffffffffffffffffffffffffffffff199094169390931790921691909117815590820151600182015560608201519281019290925560808101516003909201805460a083015160c084015160e0909401511515600160f81b027effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff63ffffffff909516600160d81b0263ffffffff60d81b196001600160a01b03909316670100000000000000027fffffffffff0000000000000000000000000000000000000000ffffffffffffff60069890980b66ffffffffffffff1666ffffffffffffff19909516949094179690961692909217169390931791909116919091179055565b60006102df8261061e565b90505b919050565b6102f2600082610688565b50565b6000610306818888888888886106b4565b979650505050505050565b60006020819052908152604090208054600182015460028301546003909301546001600160801b03831693600160801b909304600f0b9290600681900b9067010000000000000081046001600160a01b031690600160d81b810463ffffffff1690600160f81b900460ff1688565b60028a810b900b600090815260208c90526040812080546001600160801b0316826103aa828d610787565b9050846001600160801b0316816001600160801b031611156103f8576040805162461bcd60e51b81526020600482015260026024820152614c4f60f01b604482015290519081900360640190fd5b6001600160801b0382811615908216158114159450156104ce578c60020b8e60020b1361049e57600183018b9055600283018a90556003830180547fffffffffff0000000000000000000000000000000000000000ffffffffffffff166701000000000000006001600160a01b038c16021766ffffffffffffff191666ffffffffffffff60068b900b161763ffffffff60d81b1916600160d81b63ffffffff8a16021790555b6003830180547effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff16600160f81b1790555b82546fffffffffffffffffffffffffffffffff19166001600160801b0382161783558561052057825461051b9061051690600160801b9004600f90810b810b908f900b610843565b610859565b610541565b82546105419061051690600160801b9004600f90810b810b908f900b61086a565b8354600f9190910b6001600160801b03908116600160801b0291161790925550909c9b505050505050505050505050565b600285810b80820b60009081526020899052604080822088850b850b83529082209193849391929184918291908a900b126105b8575050600182015460028301546105cb565b8360010154880391508360020154870390505b6000808b60020b8b60020b12156105ed57505060018301546002840154610600565b84600101548a0391508460020154890390505b92909803979097039b96909503949094039850939650505050505050565b60008082600281900b620d89e7198161063357fe5b05029050600083600281900b620d89e88161064a57fe5b0502905060008460020b83830360020b8161066157fe5b0560010190508062ffffff166001600160801b0380168161067e57fe5b0495945050505050565b600290810b810b6000908152602092909252604082208281556001810183905590810182905560030155565b600295860b860b60009081526020979097526040909620600181018054909503909455938301805490920390915560038201805463ffffffff600160d81b6001600160a01b036701000000000000008085048216909603169094027fffffffffff0000000000000000000000000000000000000000ffffffffffffff90921691909117600681810b90960390950b66ffffffffffffff1666ffffffffffffff199095169490941782810485169095039093160263ffffffff60d81b1990931692909217905554600160801b9004600f0b90565b60008082600f0b12156107ec57826001600160801b03168260000384039150816001600160801b0316106107e7576040805162461bcd60e51b81526020600482015260026024820152614c5360f01b604482015290519081900360640190fd5b61083d565b826001600160801b03168284019150816001600160801b0316101561083d576040805162461bcd60e51b81526020600482015260026024820152614c4160f01b604482015290519081900360640190fd5b92915050565b8181018281121560008312151461083d57600080fd5b80600f81900b81146102e257600080fd5b8082038281131560008312151461083d57600080fd5b803580151581146102e257600080fd5b8035600f81900b81146102e257600080fd5b8035600281900b81146102e257600080fd5b8035600681900b81146102e257600080fd5b80356001600160801b03811681146102e257600080fd5b80356001600160a01b03811681146102e257600080fd5b803563ffffffff811681146102e257600080fd5b600060208284031215610919578081fd5b610922826108a2565b9392505050565b6000806000806000806000806000806101408b8d031215610948578586fd5b6109518b6108a2565b995061095f60208c016108a2565b985061096d60408c01610890565b975060608b0135965060808b0135955061098960a08c016108dd565b945061099760c08c016108b4565b93506109a560e08c016108f4565b92506109b46101008c01610880565b91506109c36101208c016108c6565b90509295989b9194979a5092959850565b600080600080600060a086880312156109eb578081fd5b6109f4866108a2565b9450610a02602087016108a2565b9350610a10604087016108a2565b94979396509394606081013594506080013592915050565b600080828403610120811215610a3c578283fd5b610a45846108a2565b925061010080601f1983011215610a5a578283fd5b604051915080820182811067ffffffffffffffff82111715610a7857fe5b604052610a87602086016108c6565b8252610a9560408601610890565b60208301526060850135604083015260808501356060830152610aba60a086016108b4565b6080830152610acb60c086016108dd565b60a0830152610adc60e086016108f4565b60c0830152610aec818601610880565b60e083015250809150509250929050565b60008060008060008060c08789031215610b15578182fd5b610b1e876108a2565b95506020870135945060408701359350610b3a606088016108dd565b9250610b48608088016108b4565b9150610b5660a088016108f4565b90509295509295509295565b901515815260200190565b600f9190910b815260200190565b6001600160801b0391909116815260200190565b6001600160801b03989098168852600f9690960b60208801526040870194909452606086019290925260060b60808501526001600160a01b031660a084015263ffffffff1660c0830152151560e08201526101000190565b91825260208201526040019056fea164736f6c6343000706000a';

export class TickTest__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TickTest> {
    return super.deploy(overrides || {}) as Promise<TickTest>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TickTest {
    return super.attach(address) as TickTest;
  }
  connect(signer: Signer): TickTest__factory {
    return super.connect(signer) as TickTest__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TickTestInterface {
    return new utils.Interface(_abi) as TickTestInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TickTest {
    return new Contract(address, _abi, signerOrProvider) as TickTest;
  }
}
