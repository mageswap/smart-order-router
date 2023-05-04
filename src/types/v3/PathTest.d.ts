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
  CallOverrides,
} from 'ethers';
import { BytesLike } from '@ethersproject/bytes';
import { Listener, Provider } from '@ethersproject/providers';
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi';
import type { TypedEventFilter, TypedEvent, TypedListener } from './common';

interface PathTestInterface extends ethers.utils.Interface {
  functions: {
    'decodeFirstPool(bytes)': FunctionFragment;
    'getFirstPool(bytes)': FunctionFragment;
    'getGasCostOfDecodeFirstPool(bytes)': FunctionFragment;
    'hasMultiplePools(bytes)': FunctionFragment;
    'skipToken(bytes)': FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: 'decodeFirstPool',
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: 'getFirstPool',
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: 'getGasCostOfDecodeFirstPool',
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: 'hasMultiplePools',
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: 'skipToken',
    values: [BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: 'decodeFirstPool',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'getFirstPool',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'getGasCostOfDecodeFirstPool',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'hasMultiplePools',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'skipToken', data: BytesLike): Result;

  events: {};
}

export class PathTest extends BaseContract {
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

  interface: PathTestInterface;

  functions: {
    decodeFirstPool(
      path: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [string, string, number] & { tokenA: string; tokenB: string; fee: number }
    >;

    getFirstPool(path: BytesLike, overrides?: CallOverrides): Promise<[string]>;

    getGasCostOfDecodeFirstPool(
      path: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    hasMultiplePools(
      path: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    skipToken(path: BytesLike, overrides?: CallOverrides): Promise<[string]>;
  };

  decodeFirstPool(
    path: BytesLike,
    overrides?: CallOverrides
  ): Promise<
    [string, string, number] & { tokenA: string; tokenB: string; fee: number }
  >;

  getFirstPool(path: BytesLike, overrides?: CallOverrides): Promise<string>;

  getGasCostOfDecodeFirstPool(
    path: BytesLike,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  hasMultiplePools(
    path: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  skipToken(path: BytesLike, overrides?: CallOverrides): Promise<string>;

  callStatic: {
    decodeFirstPool(
      path: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [string, string, number] & { tokenA: string; tokenB: string; fee: number }
    >;

    getFirstPool(path: BytesLike, overrides?: CallOverrides): Promise<string>;

    getGasCostOfDecodeFirstPool(
      path: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    hasMultiplePools(
      path: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    skipToken(path: BytesLike, overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    decodeFirstPool(
      path: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getFirstPool(
      path: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getGasCostOfDecodeFirstPool(
      path: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    hasMultiplePools(
      path: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    skipToken(path: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    decodeFirstPool(
      path: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getFirstPool(
      path: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getGasCostOfDecodeFirstPool(
      path: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    hasMultiplePools(
      path: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    skipToken(
      path: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
