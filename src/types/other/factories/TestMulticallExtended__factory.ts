/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  TestMulticallExtended,
  TestMulticallExtendedInterface,
} from "../TestMulticallExtended";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "a",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "b",
        type: "uint256",
      },
    ],
    name: "functionThatReturnsTuple",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "a",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "b",
            type: "uint256",
          },
        ],
        internalType: "struct TestMulticallExtended.Tuple",
        name: "tuple",
        type: "tuple",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "previousBlockhash",
        type: "bytes32",
      },
      {
        internalType: "bytes[]",
        name: "data",
        type: "bytes[]",
      },
    ],
    name: "multicall",
    outputs: [
      {
        internalType: "bytes[]",
        name: "",
        type: "bytes[]",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "bytes[]",
        name: "data",
        type: "bytes[]",
      },
    ],
    name: "multicall",
    outputs: [
      {
        internalType: "bytes[]",
        name: "",
        type: "bytes[]",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes[]",
        name: "data",
        type: "bytes[]",
      },
    ],
    name: "multicall",
    outputs: [
      {
        internalType: "bytes[]",
        name: "results",
        type: "bytes[]",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_time",
        type: "uint256",
      },
    ],
    name: "setTime",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610742806100206000396000f3fe60806040526004361061005a5760003560e01c80633beb26c4116100435780633beb26c4146100b55780635ae401dc146100d7578063ac9650d8146100ea5761005a565b80631f0464d11461005f5780633b16a6a314610088575b600080fd5b61007261006d366004610430565b6100fd565b60405161007f91906105f3565b60405180910390f35b34801561009457600080fd5b506100a86100a3366004610578565b610185565b60405161007f919061068b565b3480156100c157600080fd5b506100d56100d036600461052f565b6101a6565b005b6100726100e5366004610547565b6101ab565b6100726100f83660046103f0565b610224565b6060838060014303401461017257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600960248201527f426c6f636b686173680000000000000000000000000000000000000000000000604482015290519081900360640190fd5b61017c8484610224565b95945050505050565b61018d61038d565b5060408051808201909152908152602081019190915290565b600055565b606083806101b7610387565b111561017257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f5472616e73616374696f6e20746f6f206f6c6400000000000000000000000000604482015290519081900360640190fd5b60608167ffffffffffffffff8111801561023d57600080fd5b5060405190808252806020026020018201604052801561027157816020015b606081526020019060019003908161025c5790505b50905060005b82811015610380576000803086868581811061028f57fe5b90506020028101906102a191906106a2565b6040516102af9291906105e3565b600060405180830381855af49150503d80600081146102ea576040519150601f19603f3d011682016040523d82523d6000602084013e6102ef565b606091505b50915091508161035e5760448151101561030857600080fd5b60048101905080806020019051810190610322919061047a565b6040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103559190610671565b60405180910390fd5b8084848151811061036b57fe5b60209081029190910101525050600101610277565b5092915050565b60005490565b604051806040016040528060008152602001600081525090565b60008083601f8401126103b8578081fd5b50813567ffffffffffffffff8111156103cf578182fd5b60208301915083602080830285010111156103e957600080fd5b9250929050565b60008060208385031215610402578182fd5b823567ffffffffffffffff811115610418578283fd5b610424858286016103a7565b90969095509350505050565b600080600060408486031215610444578081fd5b83359250602084013567ffffffffffffffff811115610461578182fd5b61046d868287016103a7565b9497909650939450505050565b60006020828403121561048b578081fd5b815167ffffffffffffffff808211156104a2578283fd5b818401915084601f8301126104b5578283fd5b8151818111156104c157fe5b60405160207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f84011682010181811084821117156104fd57fe5b604052818152838201602001871015610514578485fd5b610525826020830160208701610705565b9695505050505050565b600060208284031215610540578081fd5b5035919050565b60008060006040848603121561055b578283fd5b83359250602084013567ffffffffffffffff811115610461578283fd5b6000806040838503121561058a578182fd5b50508035926020909101359150565b600081518084526105b1816020860160208601610705565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6000828483379101908152919050565b6000602080830181845280855180835260408601915060408482028701019250838701855b82811015610664577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc0888603018452610652858351610599565b94509285019290850190600101610618565b5092979650505050505050565b6000602082526106846020830184610599565b9392505050565b815181526020918201519181019190915260400190565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126106d6578283fd5b83018035915067ffffffffffffffff8211156106f0578283fd5b6020019150368190038213156103e957600080fd5b60005b83811015610720578181015183820152602001610708565b8381111561072f576000848401525b5050505056fea164736f6c6343000706000a";

export class TestMulticallExtended__factory extends ContractFactory {
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
  ): Promise<TestMulticallExtended> {
    return super.deploy(overrides || {}) as Promise<TestMulticallExtended>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TestMulticallExtended {
    return super.attach(address) as TestMulticallExtended;
  }
  connect(signer: Signer): TestMulticallExtended__factory {
    return super.connect(signer) as TestMulticallExtended__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestMulticallExtendedInterface {
    return new utils.Interface(_abi) as TestMulticallExtendedInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestMulticallExtended {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as TestMulticallExtended;
  }
}
