/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from 'ethers';
import { BytesLike } from '@ethersproject/bytes';
import { Listener, Provider } from '@ethersproject/providers';
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi';
import type { TypedEventFilter, TypedEvent, TypedListener } from './common';

interface TestMulticallExtendedInterface extends ethers.utils.Interface {
  functions: {
    'functionThatReturnsTuple(uint256,uint256)': FunctionFragment;
    'multicall(bytes32,bytes[])': FunctionFragment;
    'setTime(uint256)': FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: 'functionThatReturnsTuple',
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'multicall',
    values: [BytesLike, BytesLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: 'setTime',
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: 'functionThatReturnsTuple',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'multicall', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setTime', data: BytesLike): Result;

  events: {};
}

export class TestMulticallExtended extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: TestMulticallExtendedInterface;

  functions: {
    functionThatReturnsTuple(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [[BigNumber, BigNumber] & { a: BigNumber; b: BigNumber }] & {
        tuple: [BigNumber, BigNumber] & { a: BigNumber; b: BigNumber };
      }
    >;

    'multicall(bytes32,bytes[])'(
      previousBlockhash: BytesLike,
      data: BytesLike[],
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    'multicall(uint256,bytes[])'(
      deadline: BigNumberish,
      data: BytesLike[],
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    'multicall(bytes[])'(
      data: BytesLike[],
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setTime(
      _time: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  functionThatReturnsTuple(
    a: BigNumberish,
    b: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber] & { a: BigNumber; b: BigNumber }>;

  'multicall(bytes32,bytes[])'(
    previousBlockhash: BytesLike,
    data: BytesLike[],
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  'multicall(uint256,bytes[])'(
    deadline: BigNumberish,
    data: BytesLike[],
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  'multicall(bytes[])'(
    data: BytesLike[],
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setTime(
    _time: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    functionThatReturnsTuple(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber] & { a: BigNumber; b: BigNumber }>;

    'multicall(bytes32,bytes[])'(
      previousBlockhash: BytesLike,
      data: BytesLike[],
      overrides?: CallOverrides
    ): Promise<string[]>;

    'multicall(uint256,bytes[])'(
      deadline: BigNumberish,
      data: BytesLike[],
      overrides?: CallOverrides
    ): Promise<string[]>;

    'multicall(bytes[])'(
      data: BytesLike[],
      overrides?: CallOverrides
    ): Promise<string[]>;

    setTime(_time: BigNumberish, overrides?: CallOverrides): Promise<void>;
  };

  filters: {};

  estimateGas: {
    functionThatReturnsTuple(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    'multicall(bytes32,bytes[])'(
      previousBlockhash: BytesLike,
      data: BytesLike[],
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    'multicall(uint256,bytes[])'(
      deadline: BigNumberish,
      data: BytesLike[],
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    'multicall(bytes[])'(
      data: BytesLike[],
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setTime(
      _time: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    functionThatReturnsTuple(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    'multicall(bytes32,bytes[])'(
      previousBlockhash: BytesLike,
      data: BytesLike[],
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    'multicall(uint256,bytes[])'(
      deadline: BigNumberish,
      data: BytesLike[],
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    'multicall(bytes[])'(
      data: BytesLike[],
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setTime(
      _time: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
