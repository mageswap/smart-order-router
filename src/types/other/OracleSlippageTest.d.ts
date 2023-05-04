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
  CallOverrides,
} from 'ethers';
import { BytesLike } from '@ethersproject/bytes';
import { Listener, Provider } from '@ethersproject/providers';
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi';
import type { TypedEventFilter, TypedEvent, TypedListener } from './common';

interface OracleSlippageTestInterface extends ethers.utils.Interface {
  functions: {
    'WETH9()': FunctionFragment;
    'checkOracleSlippage(bytes[],uint128[],uint24,uint32)': FunctionFragment;
    'factory()': FunctionFragment;
    'registerPool(address,address,address,uint24)': FunctionFragment;
    'setTime(uint256)': FunctionFragment;
    'testGetBlockStartingAndCurrentTick(address)': FunctionFragment;
    'testGetSyntheticTicks(bytes[],uint128[],uint32)': FunctionFragment;
  };

  encodeFunctionData(functionFragment: 'WETH9', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'checkOracleSlippage',
    values: [BytesLike[], BigNumberish[], BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: 'factory', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'registerPool',
    values: [string, string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'setTime',
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'testGetBlockStartingAndCurrentTick',
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: 'testGetSyntheticTicks',
    values: [BytesLike[], BigNumberish[], BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: 'WETH9', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'checkOracleSlippage',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'factory', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'registerPool',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'setTime', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'testGetBlockStartingAndCurrentTick',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'testGetSyntheticTicks',
    data: BytesLike
  ): Result;

  events: {};
}

export class OracleSlippageTest extends BaseContract {
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

  interface: OracleSlippageTestInterface;

  functions: {
    WETH9(overrides?: CallOverrides): Promise<[string]>;

    'checkOracleSlippage(bytes[],uint128[],uint24,uint32)'(
      paths: BytesLike[],
      amounts: BigNumberish[],
      maximumTickDivergence: BigNumberish,
      secondsAgo: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[void]>;

    'checkOracleSlippage(bytes,uint24,uint32)'(
      path: BytesLike,
      maximumTickDivergence: BigNumberish,
      secondsAgo: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[void]>;

    factory(overrides?: CallOverrides): Promise<[string]>;

    registerPool(
      pool: string,
      tokenIn: string,
      tokenOut: string,
      fee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setTime(
      _time: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    testGetBlockStartingAndCurrentTick(
      pool: string,
      overrides?: CallOverrides
    ): Promise<
      [number, number] & { blockStartingTick: number; currentTick: number }
    >;

    'testGetSyntheticTicks(bytes[],uint128[],uint32)'(
      paths: BytesLike[],
      amounts: BigNumberish[],
      secondsAgo: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        averageSyntheticAverageTick: BigNumber;
        averageSyntheticCurrentTick: BigNumber;
      }
    >;

    'testGetSyntheticTicks(bytes,uint32)'(
      path: BytesLike,
      secondsAgo: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        syntheticAverageTick: BigNumber;
        syntheticCurrentTick: BigNumber;
      }
    >;
  };

  WETH9(overrides?: CallOverrides): Promise<string>;

  'checkOracleSlippage(bytes[],uint128[],uint24,uint32)'(
    paths: BytesLike[],
    amounts: BigNumberish[],
    maximumTickDivergence: BigNumberish,
    secondsAgo: BigNumberish,
    overrides?: CallOverrides
  ): Promise<void>;

  'checkOracleSlippage(bytes,uint24,uint32)'(
    path: BytesLike,
    maximumTickDivergence: BigNumberish,
    secondsAgo: BigNumberish,
    overrides?: CallOverrides
  ): Promise<void>;

  factory(overrides?: CallOverrides): Promise<string>;

  registerPool(
    pool: string,
    tokenIn: string,
    tokenOut: string,
    fee: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setTime(
    _time: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  testGetBlockStartingAndCurrentTick(
    pool: string,
    overrides?: CallOverrides
  ): Promise<
    [number, number] & { blockStartingTick: number; currentTick: number }
  >;

  'testGetSyntheticTicks(bytes[],uint128[],uint32)'(
    paths: BytesLike[],
    amounts: BigNumberish[],
    secondsAgo: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & {
      averageSyntheticAverageTick: BigNumber;
      averageSyntheticCurrentTick: BigNumber;
    }
  >;

  'testGetSyntheticTicks(bytes,uint32)'(
    path: BytesLike,
    secondsAgo: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & {
      syntheticAverageTick: BigNumber;
      syntheticCurrentTick: BigNumber;
    }
  >;

  callStatic: {
    WETH9(overrides?: CallOverrides): Promise<string>;

    'checkOracleSlippage(bytes[],uint128[],uint24,uint32)'(
      paths: BytesLike[],
      amounts: BigNumberish[],
      maximumTickDivergence: BigNumberish,
      secondsAgo: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    'checkOracleSlippage(bytes,uint24,uint32)'(
      path: BytesLike,
      maximumTickDivergence: BigNumberish,
      secondsAgo: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    factory(overrides?: CallOverrides): Promise<string>;

    registerPool(
      pool: string,
      tokenIn: string,
      tokenOut: string,
      fee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setTime(_time: BigNumberish, overrides?: CallOverrides): Promise<void>;

    testGetBlockStartingAndCurrentTick(
      pool: string,
      overrides?: CallOverrides
    ): Promise<
      [number, number] & { blockStartingTick: number; currentTick: number }
    >;

    'testGetSyntheticTicks(bytes[],uint128[],uint32)'(
      paths: BytesLike[],
      amounts: BigNumberish[],
      secondsAgo: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        averageSyntheticAverageTick: BigNumber;
        averageSyntheticCurrentTick: BigNumber;
      }
    >;

    'testGetSyntheticTicks(bytes,uint32)'(
      path: BytesLike,
      secondsAgo: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        syntheticAverageTick: BigNumber;
        syntheticCurrentTick: BigNumber;
      }
    >;
  };

  filters: {};

  estimateGas: {
    WETH9(overrides?: CallOverrides): Promise<BigNumber>;

    'checkOracleSlippage(bytes[],uint128[],uint24,uint32)'(
      paths: BytesLike[],
      amounts: BigNumberish[],
      maximumTickDivergence: BigNumberish,
      secondsAgo: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    'checkOracleSlippage(bytes,uint24,uint32)'(
      path: BytesLike,
      maximumTickDivergence: BigNumberish,
      secondsAgo: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    factory(overrides?: CallOverrides): Promise<BigNumber>;

    registerPool(
      pool: string,
      tokenIn: string,
      tokenOut: string,
      fee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setTime(
      _time: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    testGetBlockStartingAndCurrentTick(
      pool: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    'testGetSyntheticTicks(bytes[],uint128[],uint32)'(
      paths: BytesLike[],
      amounts: BigNumberish[],
      secondsAgo: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    'testGetSyntheticTicks(bytes,uint32)'(
      path: BytesLike,
      secondsAgo: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    WETH9(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'checkOracleSlippage(bytes[],uint128[],uint24,uint32)'(
      paths: BytesLike[],
      amounts: BigNumberish[],
      maximumTickDivergence: BigNumberish,
      secondsAgo: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    'checkOracleSlippage(bytes,uint24,uint32)'(
      path: BytesLike,
      maximumTickDivergence: BigNumberish,
      secondsAgo: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    factory(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    registerPool(
      pool: string,
      tokenIn: string,
      tokenOut: string,
      fee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setTime(
      _time: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    testGetBlockStartingAndCurrentTick(
      pool: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    'testGetSyntheticTicks(bytes[],uint128[],uint32)'(
      paths: BytesLike[],
      amounts: BigNumberish[],
      secondsAgo: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    'testGetSyntheticTicks(bytes,uint32)'(
      path: BytesLike,
      secondsAgo: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
