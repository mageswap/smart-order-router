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
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface MockTimeUniswapV3PoolDeployerInterface
  extends ethers.utils.Interface {
  functions: {
    "deploy(address,address,address,uint24,int24)": FunctionFragment;
    "parameters()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "deploy",
    values: [string, string, string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "parameters",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "deploy", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "parameters", data: BytesLike): Result;

  events: {
    "PoolDeployed(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "PoolDeployed"): EventFragment;
}

export type PoolDeployedEvent = TypedEvent<[string] & { pool: string }>;

export class MockTimeUniswapV3PoolDeployer extends BaseContract {
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

  interface: MockTimeUniswapV3PoolDeployerInterface;

  functions: {
    deploy(
      factory: string,
      token0: string,
      token1: string,
      fee: BigNumberish,
      tickSpacing: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    parameters(
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, number, number] & {
        factory: string;
        token0: string;
        token1: string;
        fee: number;
        tickSpacing: number;
      }
    >;
  };

  deploy(
    factory: string,
    token0: string,
    token1: string,
    fee: BigNumberish,
    tickSpacing: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  parameters(
    overrides?: CallOverrides
  ): Promise<
    [string, string, string, number, number] & {
      factory: string;
      token0: string;
      token1: string;
      fee: number;
      tickSpacing: number;
    }
  >;

  callStatic: {
    deploy(
      factory: string,
      token0: string,
      token1: string,
      fee: BigNumberish,
      tickSpacing: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    parameters(
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, number, number] & {
        factory: string;
        token0: string;
        token1: string;
        fee: number;
        tickSpacing: number;
      }
    >;
  };

  filters: {
    "PoolDeployed(address)"(
      pool?: null
    ): TypedEventFilter<[string], { pool: string }>;

    PoolDeployed(pool?: null): TypedEventFilter<[string], { pool: string }>;
  };

  estimateGas: {
    deploy(
      factory: string,
      token0: string,
      token1: string,
      fee: BigNumberish,
      tickSpacing: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    parameters(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    deploy(
      factory: string,
      token0: string,
      token1: string,
      fee: BigNumberish,
      tickSpacing: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    parameters(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
