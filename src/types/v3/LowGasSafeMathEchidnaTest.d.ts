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
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface LowGasSafeMathEchidnaTestInterface extends ethers.utils.Interface {
  functions: {
    "checkAdd(uint256,uint256)": FunctionFragment;
    "checkAddi(int256,int256)": FunctionFragment;
    "checkMul(uint256,uint256)": FunctionFragment;
    "checkSub(uint256,uint256)": FunctionFragment;
    "checkSubi(int256,int256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "checkAdd",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "checkAddi",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "checkMul",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "checkSub",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "checkSubi",
    values: [BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "checkAdd", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "checkAddi", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "checkMul", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "checkSub", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "checkSubi", data: BytesLike): Result;

  events: {};
}

export class LowGasSafeMathEchidnaTest extends BaseContract {
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

  interface: LowGasSafeMathEchidnaTestInterface;

  functions: {
    checkAdd(
      x: BigNumberish,
      y: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[void]>;

    checkAddi(
      x: BigNumberish,
      y: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[void]>;

    checkMul(
      x: BigNumberish,
      y: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[void]>;

    checkSub(
      x: BigNumberish,
      y: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[void]>;

    checkSubi(
      x: BigNumberish,
      y: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[void]>;
  };

  checkAdd(
    x: BigNumberish,
    y: BigNumberish,
    overrides?: CallOverrides
  ): Promise<void>;

  checkAddi(
    x: BigNumberish,
    y: BigNumberish,
    overrides?: CallOverrides
  ): Promise<void>;

  checkMul(
    x: BigNumberish,
    y: BigNumberish,
    overrides?: CallOverrides
  ): Promise<void>;

  checkSub(
    x: BigNumberish,
    y: BigNumberish,
    overrides?: CallOverrides
  ): Promise<void>;

  checkSubi(
    x: BigNumberish,
    y: BigNumberish,
    overrides?: CallOverrides
  ): Promise<void>;

  callStatic: {
    checkAdd(
      x: BigNumberish,
      y: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    checkAddi(
      x: BigNumberish,
      y: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    checkMul(
      x: BigNumberish,
      y: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    checkSub(
      x: BigNumberish,
      y: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    checkSubi(
      x: BigNumberish,
      y: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    checkAdd(
      x: BigNumberish,
      y: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    checkAddi(
      x: BigNumberish,
      y: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    checkMul(
      x: BigNumberish,
      y: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    checkSub(
      x: BigNumberish,
      y: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    checkSubi(
      x: BigNumberish,
      y: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    checkAdd(
      x: BigNumberish,
      y: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    checkAddi(
      x: BigNumberish,
      y: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    checkMul(
      x: BigNumberish,
      y: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    checkSub(
      x: BigNumberish,
      y: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    checkSubi(
      x: BigNumberish,
      y: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}