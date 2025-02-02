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

interface SqrtPriceMathTestInterface extends ethers.utils.Interface {
  functions: {
    "getAmount0Delta(uint160,uint160,uint128,bool)": FunctionFragment;
    "getAmount1Delta(uint160,uint160,uint128,bool)": FunctionFragment;
    "getGasCostOfGetAmount0Delta(uint160,uint160,uint128,bool)": FunctionFragment;
    "getGasCostOfGetAmount1Delta(uint160,uint160,uint128,bool)": FunctionFragment;
    "getGasCostOfGetNextSqrtPriceFromInput(uint160,uint128,uint256,bool)": FunctionFragment;
    "getGasCostOfGetNextSqrtPriceFromOutput(uint160,uint128,uint256,bool)": FunctionFragment;
    "getNextSqrtPriceFromInput(uint160,uint128,uint256,bool)": FunctionFragment;
    "getNextSqrtPriceFromOutput(uint160,uint128,uint256,bool)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getAmount0Delta",
    values: [BigNumberish, BigNumberish, BigNumberish, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "getAmount1Delta",
    values: [BigNumberish, BigNumberish, BigNumberish, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "getGasCostOfGetAmount0Delta",
    values: [BigNumberish, BigNumberish, BigNumberish, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "getGasCostOfGetAmount1Delta",
    values: [BigNumberish, BigNumberish, BigNumberish, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "getGasCostOfGetNextSqrtPriceFromInput",
    values: [BigNumberish, BigNumberish, BigNumberish, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "getGasCostOfGetNextSqrtPriceFromOutput",
    values: [BigNumberish, BigNumberish, BigNumberish, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "getNextSqrtPriceFromInput",
    values: [BigNumberish, BigNumberish, BigNumberish, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "getNextSqrtPriceFromOutput",
    values: [BigNumberish, BigNumberish, BigNumberish, boolean]
  ): string;

  decodeFunctionResult(
    functionFragment: "getAmount0Delta",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAmount1Delta",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getGasCostOfGetAmount0Delta",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getGasCostOfGetAmount1Delta",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getGasCostOfGetNextSqrtPriceFromInput",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getGasCostOfGetNextSqrtPriceFromOutput",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getNextSqrtPriceFromInput",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getNextSqrtPriceFromOutput",
    data: BytesLike
  ): Result;

  events: {};
}

export class SqrtPriceMathTest extends BaseContract {
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

  interface: SqrtPriceMathTestInterface;

  functions: {
    getAmount0Delta(
      sqrtLower: BigNumberish,
      sqrtUpper: BigNumberish,
      liquidity: BigNumberish,
      roundUp: boolean,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { amount0: BigNumber }>;

    getAmount1Delta(
      sqrtLower: BigNumberish,
      sqrtUpper: BigNumberish,
      liquidity: BigNumberish,
      roundUp: boolean,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { amount1: BigNumber }>;

    getGasCostOfGetAmount0Delta(
      sqrtLower: BigNumberish,
      sqrtUpper: BigNumberish,
      liquidity: BigNumberish,
      roundUp: boolean,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getGasCostOfGetAmount1Delta(
      sqrtLower: BigNumberish,
      sqrtUpper: BigNumberish,
      liquidity: BigNumberish,
      roundUp: boolean,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getGasCostOfGetNextSqrtPriceFromInput(
      sqrtP: BigNumberish,
      liquidity: BigNumberish,
      amountIn: BigNumberish,
      zeroForOne: boolean,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getGasCostOfGetNextSqrtPriceFromOutput(
      sqrtP: BigNumberish,
      liquidity: BigNumberish,
      amountOut: BigNumberish,
      zeroForOne: boolean,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getNextSqrtPriceFromInput(
      sqrtP: BigNumberish,
      liquidity: BigNumberish,
      amountIn: BigNumberish,
      zeroForOne: boolean,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { sqrtQ: BigNumber }>;

    getNextSqrtPriceFromOutput(
      sqrtP: BigNumberish,
      liquidity: BigNumberish,
      amountOut: BigNumberish,
      zeroForOne: boolean,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { sqrtQ: BigNumber }>;
  };

  getAmount0Delta(
    sqrtLower: BigNumberish,
    sqrtUpper: BigNumberish,
    liquidity: BigNumberish,
    roundUp: boolean,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getAmount1Delta(
    sqrtLower: BigNumberish,
    sqrtUpper: BigNumberish,
    liquidity: BigNumberish,
    roundUp: boolean,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getGasCostOfGetAmount0Delta(
    sqrtLower: BigNumberish,
    sqrtUpper: BigNumberish,
    liquidity: BigNumberish,
    roundUp: boolean,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getGasCostOfGetAmount1Delta(
    sqrtLower: BigNumberish,
    sqrtUpper: BigNumberish,
    liquidity: BigNumberish,
    roundUp: boolean,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getGasCostOfGetNextSqrtPriceFromInput(
    sqrtP: BigNumberish,
    liquidity: BigNumberish,
    amountIn: BigNumberish,
    zeroForOne: boolean,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getGasCostOfGetNextSqrtPriceFromOutput(
    sqrtP: BigNumberish,
    liquidity: BigNumberish,
    amountOut: BigNumberish,
    zeroForOne: boolean,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getNextSqrtPriceFromInput(
    sqrtP: BigNumberish,
    liquidity: BigNumberish,
    amountIn: BigNumberish,
    zeroForOne: boolean,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getNextSqrtPriceFromOutput(
    sqrtP: BigNumberish,
    liquidity: BigNumberish,
    amountOut: BigNumberish,
    zeroForOne: boolean,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    getAmount0Delta(
      sqrtLower: BigNumberish,
      sqrtUpper: BigNumberish,
      liquidity: BigNumberish,
      roundUp: boolean,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAmount1Delta(
      sqrtLower: BigNumberish,
      sqrtUpper: BigNumberish,
      liquidity: BigNumberish,
      roundUp: boolean,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getGasCostOfGetAmount0Delta(
      sqrtLower: BigNumberish,
      sqrtUpper: BigNumberish,
      liquidity: BigNumberish,
      roundUp: boolean,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getGasCostOfGetAmount1Delta(
      sqrtLower: BigNumberish,
      sqrtUpper: BigNumberish,
      liquidity: BigNumberish,
      roundUp: boolean,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getGasCostOfGetNextSqrtPriceFromInput(
      sqrtP: BigNumberish,
      liquidity: BigNumberish,
      amountIn: BigNumberish,
      zeroForOne: boolean,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getGasCostOfGetNextSqrtPriceFromOutput(
      sqrtP: BigNumberish,
      liquidity: BigNumberish,
      amountOut: BigNumberish,
      zeroForOne: boolean,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getNextSqrtPriceFromInput(
      sqrtP: BigNumberish,
      liquidity: BigNumberish,
      amountIn: BigNumberish,
      zeroForOne: boolean,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getNextSqrtPriceFromOutput(
      sqrtP: BigNumberish,
      liquidity: BigNumberish,
      amountOut: BigNumberish,
      zeroForOne: boolean,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    getAmount0Delta(
      sqrtLower: BigNumberish,
      sqrtUpper: BigNumberish,
      liquidity: BigNumberish,
      roundUp: boolean,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAmount1Delta(
      sqrtLower: BigNumberish,
      sqrtUpper: BigNumberish,
      liquidity: BigNumberish,
      roundUp: boolean,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getGasCostOfGetAmount0Delta(
      sqrtLower: BigNumberish,
      sqrtUpper: BigNumberish,
      liquidity: BigNumberish,
      roundUp: boolean,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getGasCostOfGetAmount1Delta(
      sqrtLower: BigNumberish,
      sqrtUpper: BigNumberish,
      liquidity: BigNumberish,
      roundUp: boolean,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getGasCostOfGetNextSqrtPriceFromInput(
      sqrtP: BigNumberish,
      liquidity: BigNumberish,
      amountIn: BigNumberish,
      zeroForOne: boolean,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getGasCostOfGetNextSqrtPriceFromOutput(
      sqrtP: BigNumberish,
      liquidity: BigNumberish,
      amountOut: BigNumberish,
      zeroForOne: boolean,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getNextSqrtPriceFromInput(
      sqrtP: BigNumberish,
      liquidity: BigNumberish,
      amountIn: BigNumberish,
      zeroForOne: boolean,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getNextSqrtPriceFromOutput(
      sqrtP: BigNumberish,
      liquidity: BigNumberish,
      amountOut: BigNumberish,
      zeroForOne: boolean,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getAmount0Delta(
      sqrtLower: BigNumberish,
      sqrtUpper: BigNumberish,
      liquidity: BigNumberish,
      roundUp: boolean,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAmount1Delta(
      sqrtLower: BigNumberish,
      sqrtUpper: BigNumberish,
      liquidity: BigNumberish,
      roundUp: boolean,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getGasCostOfGetAmount0Delta(
      sqrtLower: BigNumberish,
      sqrtUpper: BigNumberish,
      liquidity: BigNumberish,
      roundUp: boolean,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getGasCostOfGetAmount1Delta(
      sqrtLower: BigNumberish,
      sqrtUpper: BigNumberish,
      liquidity: BigNumberish,
      roundUp: boolean,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getGasCostOfGetNextSqrtPriceFromInput(
      sqrtP: BigNumberish,
      liquidity: BigNumberish,
      amountIn: BigNumberish,
      zeroForOne: boolean,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getGasCostOfGetNextSqrtPriceFromOutput(
      sqrtP: BigNumberish,
      liquidity: BigNumberish,
      amountOut: BigNumberish,
      zeroForOne: boolean,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getNextSqrtPriceFromInput(
      sqrtP: BigNumberish,
      liquidity: BigNumberish,
      amountIn: BigNumberish,
      zeroForOne: boolean,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getNextSqrtPriceFromOutput(
      sqrtP: BigNumberish,
      liquidity: BigNumberish,
      amountOut: BigNumberish,
      zeroForOne: boolean,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
