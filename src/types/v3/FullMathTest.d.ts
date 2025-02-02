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

interface FullMathTestInterface extends ethers.utils.Interface {
  functions: {
    "mulDiv(uint256,uint256,uint256)": FunctionFragment;
    "mulDivRoundingUp(uint256,uint256,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "mulDiv",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "mulDivRoundingUp",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "mulDiv", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "mulDivRoundingUp",
    data: BytesLike
  ): Result;

  events: {};
}

export class FullMathTest extends BaseContract {
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

  interface: FullMathTestInterface;

  functions: {
    mulDiv(
      x: BigNumberish,
      y: BigNumberish,
      z: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    mulDivRoundingUp(
      x: BigNumberish,
      y: BigNumberish,
      z: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  mulDiv(
    x: BigNumberish,
    y: BigNumberish,
    z: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  mulDivRoundingUp(
    x: BigNumberish,
    y: BigNumberish,
    z: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    mulDiv(
      x: BigNumberish,
      y: BigNumberish,
      z: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    mulDivRoundingUp(
      x: BigNumberish,
      y: BigNumberish,
      z: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    mulDiv(
      x: BigNumberish,
      y: BigNumberish,
      z: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    mulDivRoundingUp(
      x: BigNumberish,
      y: BigNumberish,
      z: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    mulDiv(
      x: BigNumberish,
      y: BigNumberish,
      z: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    mulDivRoundingUp(
      x: BigNumberish,
      y: BigNumberish,
      z: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
