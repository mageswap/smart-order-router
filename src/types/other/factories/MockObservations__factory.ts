/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import type {
  MockObservations,
  MockObservationsInterface,
} from '../MockObservations';

const _abi = [
  {
    inputs: [
      {
        internalType: 'uint32[3]',
        name: 'blockTimestamps',
        type: 'uint32[3]',
      },
      {
        internalType: 'int24[3]',
        name: 'ticks',
        type: 'int24[3]',
      },
      {
        internalType: 'bool',
        name: 'mockLowObservationCardinality',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'observations',
    outputs: [
      {
        internalType: 'uint32',
        name: 'blockTimestamp',
        type: 'uint32',
      },
      {
        internalType: 'int56',
        name: 'tickCumulative',
        type: 'int56',
      },
      {
        internalType: 'uint160',
        name: 'secondsPerLiquidityCumulativeX128',
        type: 'uint160',
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
        internalType: 'uint32[]',
        name: 'secondsAgos',
        type: 'uint32[]',
      },
    ],
    name: 'observe',
    outputs: [
      {
        internalType: 'int56[]',
        name: 'tickCumulatives',
        type: 'int56[]',
      },
      {
        internalType: 'uint160[]',
        name: 'secondsPerLiquidityCumulativeX128s',
        type: 'uint160[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'slot0',
    outputs: [
      {
        internalType: 'uint160',
        name: '',
        type: 'uint160',
      },
      {
        internalType: 'int24',
        name: '',
        type: 'int24',
      },
      {
        internalType: 'uint16',
        name: '',
        type: 'uint16',
      },
      {
        internalType: 'uint16',
        name: '',
        type: 'uint16',
      },
      {
        internalType: 'uint16',
        name: '',
        type: 'uint16',
      },
      {
        internalType: 'uint8',
        name: '',
        type: 'uint8',
      },
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];

const _bytecode =
  '0x608060405234801561001057600080fd5b50604051611015380380611015833981810160405260e081101561003357600080fd5b5060c0810151815160608301919063ffffffff161561007d576040805162461bcd60e51b81526020600482015260016024820152600360fc1b604482015290519081900360640190fd5b602083015163ffffffff166100bd576040805162461bcd60e51b81526020600482015260016024820152603160f81b604482015290519081900360640190fd5b6020830151604084015163ffffffff918216911611610107576040805162461bcd60e51b81526020600482015260016024820152601960f91b604482015290519081900360640190fd5b6000805b600381101561026157801561016f57600084600183036003811061012b57fe5b60200201519050600086600184036003811061014357fe5b602002015187846003811061015457fe5b60200201510390508063ffffffff168260020b028401935050505b604051806080016040528086836003811061018657fe5b602002015163ffffffff1681526020018360060b8152602001826001600160a01b031681526020016001151581525060018261ffff81106101c357fe5b825191018054602084015160408501516060909501511515600160f81b026001600160f81b036001600160a01b039096166b01000000000000000000000002600160581b600160f81b031960069390930b66ffffffffffffff166401000000000266ffffffffffffff60201b1963ffffffff90971663ffffffff1990951694909417959095169290921716929092179290921617905560010161010b565b5060408301516000805460029290920b62ffffff1662ffffff1990921691909117905581610290576003610293565b60015b6000805464ffff000000191660ff929092166301000000029190911761ffff60281b191665020000000000178155610d3f94508493506102d692509050396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063252c09d7146100465780633850c7bd146100aa578063883bdbfd14610110575b600080fd5b6100636004803603602081101561005c57600080fd5b5035610219565b6040805163ffffffff909516855260069390930b602085015273ffffffffffffffffffffffffffffffffffffffff9091168383015215156060830152519081900360800190f35b6100b2610290565b6040805173ffffffffffffffffffffffffffffffffffffffff909816885260029690960b602088015261ffff9485168787015292841660608701529216608085015260ff90911660a0840152151560c0830152519081900360e00190f35b6101806004803603602081101561012657600080fd5b81019060208101813564010000000081111561014157600080fd5b82018360208201111561015357600080fd5b8035906020019184602083028401116401000000008311171561017557600080fd5b5090925090506102bc565b604051808060200180602001838103835285818151815260200191508051906020019060200280838360005b838110156101c45781810151838201526020016101ac565b50505050905001838103825284818151815260200191508051906020019060200280838360005b838110156102035781810151838201526020016101eb565b5050505090500194505050505060405180910390f35b60018161ffff811061022a57600080fd5b015463ffffffff81169150640100000000810460060b906b010000000000000000000000810473ffffffffffffffffffffffffffffffffffffffff16907f0100000000000000000000000000000000000000000000000000000000000000900460ff1684565b60008054600281900b9061ffff6501000000000082048116916301000000900416838080919293949596565b60608061032b600160020154604080516020808802828101820190935287825263ffffffff90931692909188918891829185019084908082843760009201829052508054600196959450600281900b935061ffff65010000000000820481169350630100000090910416610336565b915091509250929050565b60608060008361ffff16116103ac57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600160248201527f4900000000000000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b865167ffffffffffffffff811180156103c457600080fd5b506040519080825280602002602001820160405280156103ee578160200160208202803683370190505b509150865167ffffffffffffffff8111801561040957600080fd5b50604051908082528060200260200182016040528015610433578160200160208202803683370190505b50905060005b87518110156104d3576104648a8a8a848151811061045357fe5b60200260200101518a8a8a8a6104e0565b84838151811061047057fe5b6020026020010184848151811061048357fe5b602002602001018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152508260060b60060b81525050508080600101915050610439565b5097509795505050505050565b60008063ffffffff87166105b8576000898661ffff1661ffff811061050157fe5b60408051608081018252919092015463ffffffff8082168084526401000000008304600690810b810b900b60208501526b010000000000000000000000830473ffffffffffffffffffffffffffffffffffffffff16948401949094527f010000000000000000000000000000000000000000000000000000000000000090910460ff16151560608301529092508a16146105a4576105a1818a89886106b1565b90505b8060200151816040015192509250506106a5565b8688036000806105cd8c8c858c8c8c8c610780565b91509150816000015163ffffffff168363ffffffff1614156105ff5781602001518260400151945094505050506106a5565b805163ffffffff848116911614156106275780602001518160400151945094505050506106a5565b8151815160208085015190840151918390039286039163ffffffff80841692908516910360060b8161065557fe5b05028460200151018263ffffffff168263ffffffff16866040015186604001510373ffffffffffffffffffffffffffffffffffffffff16028161069457fe5b048560400151019650965050505050505b97509795505050505050565b6106b9610d0b565b600085600001518503905060405180608001604052808663ffffffff1681526020018263ffffffff168660020b0288602001510160060b81526020016000856fffffffffffffffffffffffffffffffff1611610716576001610718565b845b6fffffffffffffffffffffffffffffffff1673ffffffff00000000000000000000000000000000608085901b168161074c57fe5b0488604001510173ffffffffffffffffffffffffffffffffffffffff16815260200160011515815250915050949350505050565b610788610d0b565b610790610d0b565b888561ffff1661ffff81106107a157fe5b60408051608081018252919092015463ffffffff81168083526401000000008204600690810b810b900b60208401526b010000000000000000000000820473ffffffffffffffffffffffffffffffffffffffff16938301939093527f0100000000000000000000000000000000000000000000000000000000000000900460ff1615156060820152925061083790899089610a44565b1561086f578663ffffffff16826000015163ffffffff161415610859576106a5565b81610866838989886106b1565b915091506106a5565b888361ffff168660010161ffff168161088457fe5b0661ffff1661ffff811061089457fe5b60408051608081018252929091015463ffffffff811683526401000000008104600690810b810b900b602084015273ffffffffffffffffffffffffffffffffffffffff6b0100000000000000000000008204169183019190915260ff7f0100000000000000000000000000000000000000000000000000000000000000909104161515606082018190529092506109ad57604080516080810182528a5463ffffffff811682526401000000008104600690810b810b900b60208301526b010000000000000000000000810473ffffffffffffffffffffffffffffffffffffffff16928201929092527f010000000000000000000000000000000000000000000000000000000000000090910460ff161515606082015291505b6109bc88836000015189610a44565b610a2757604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600360248201527f4f4c440000000000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b610a348989898887610b09565b9150915097509795505050505050565b60008363ffffffff168363ffffffff1611158015610a6e57508363ffffffff168263ffffffff1611155b15610a8a578163ffffffff168363ffffffff1611159050610b02565b60008463ffffffff168463ffffffff1611610ab2578363ffffffff1664010000000001610aba565b8363ffffffff165b64ffffffffff16905060008563ffffffff168463ffffffff1611610aeb578363ffffffff1664010000000001610af3565b8363ffffffff165b64ffffffffff16909111159150505b9392505050565b610b11610d0b565b610b19610d0b565b60008361ffff168560010161ffff1681610b2f57fe5b0661ffff169050600060018561ffff16830103905060005b506002818301048961ffff87168281610b5c57fe5b0661ffff8110610b6857fe5b60408051608081018252929091015463ffffffff811683526401000000008104600690810b810b900b602084015273ffffffffffffffffffffffffffffffffffffffff6b0100000000000000000000008204169183019190915260ff7f010000000000000000000000000000000000000000000000000000000000000090910416151560608201819052909550610c0457806001019250610b47565b898661ffff168260010181610c1557fe5b0661ffff8110610c2157fe5b60408051608081018252929091015463ffffffff811683526401000000008104600690810b810b900b602084015273ffffffffffffffffffffffffffffffffffffffff6b0100000000000000000000008204169183019190915260ff7f010000000000000000000000000000000000000000000000000000000000000090910416151560608201528551909450600090610cbd908b908b610a44565b9050808015610cd65750610cd68a8a8760000151610a44565b15610ce15750610cfe565b80610cf157600182039250610cf8565b8160010193505b50610b47565b5050509550959350505050565b6040805160808101825260008082526020820181905291810182905260608101919091529056fea164736f6c6343000706000a';

export class MockObservations__factory extends ContractFactory {
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
    blockTimestamps: [BigNumberish, BigNumberish, BigNumberish],
    ticks: [BigNumberish, BigNumberish, BigNumberish],
    mockLowObservationCardinality: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MockObservations> {
    return super.deploy(
      blockTimestamps,
      ticks,
      mockLowObservationCardinality,
      overrides || {}
    ) as Promise<MockObservations>;
  }
  getDeployTransaction(
    blockTimestamps: [BigNumberish, BigNumberish, BigNumberish],
    ticks: [BigNumberish, BigNumberish, BigNumberish],
    mockLowObservationCardinality: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      blockTimestamps,
      ticks,
      mockLowObservationCardinality,
      overrides || {}
    );
  }
  attach(address: string): MockObservations {
    return super.attach(address) as MockObservations;
  }
  connect(signer: Signer): MockObservations__factory {
    return super.connect(signer) as MockObservations__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockObservationsInterface {
    return new utils.Interface(_abi) as MockObservationsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockObservations {
    return new Contract(address, _abi, signerOrProvider) as MockObservations;
  }
}
