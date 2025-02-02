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

interface PositionValueTestInterface extends ethers.utils.Interface {
  functions: {
    "fees(address,uint256)": FunctionFragment;
    "feesGas(address,uint256)": FunctionFragment;
    "principal(address,uint256,uint160)": FunctionFragment;
    "principalGas(address,uint256,uint160)": FunctionFragment;
    "total(address,uint256,uint160)": FunctionFragment;
    "totalGas(address,uint256,uint160)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "fees",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "feesGas",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "principal",
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "principalGas",
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "total",
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "totalGas",
    values: [string, BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "fees", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "feesGas", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "principal", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "principalGas",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "total", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "totalGas", data: BytesLike): Result;

  events: {};
}

export class PositionValueTest extends BaseContract {
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

  interface: PositionValueTestInterface;

  functions: {
    fees(
      nft: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { amount0: BigNumber; amount1: BigNumber }
    >;

    feesGas(
      nft: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    principal(
      nft: string,
      tokenId: BigNumberish,
      sqrtRatioX96: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { amount0: BigNumber; amount1: BigNumber }
    >;

    principalGas(
      nft: string,
      tokenId: BigNumberish,
      sqrtRatioX96: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    total(
      nft: string,
      tokenId: BigNumberish,
      sqrtRatioX96: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { amount0: BigNumber; amount1: BigNumber }
    >;

    totalGas(
      nft: string,
      tokenId: BigNumberish,
      sqrtRatioX96: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  fees(
    nft: string,
    tokenId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & { amount0: BigNumber; amount1: BigNumber }
  >;

  feesGas(
    nft: string,
    tokenId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  principal(
    nft: string,
    tokenId: BigNumberish,
    sqrtRatioX96: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & { amount0: BigNumber; amount1: BigNumber }
  >;

  principalGas(
    nft: string,
    tokenId: BigNumberish,
    sqrtRatioX96: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  total(
    nft: string,
    tokenId: BigNumberish,
    sqrtRatioX96: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & { amount0: BigNumber; amount1: BigNumber }
  >;

  totalGas(
    nft: string,
    tokenId: BigNumberish,
    sqrtRatioX96: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    fees(
      nft: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { amount0: BigNumber; amount1: BigNumber }
    >;

    feesGas(
      nft: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    principal(
      nft: string,
      tokenId: BigNumberish,
      sqrtRatioX96: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { amount0: BigNumber; amount1: BigNumber }
    >;

    principalGas(
      nft: string,
      tokenId: BigNumberish,
      sqrtRatioX96: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    total(
      nft: string,
      tokenId: BigNumberish,
      sqrtRatioX96: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { amount0: BigNumber; amount1: BigNumber }
    >;

    totalGas(
      nft: string,
      tokenId: BigNumberish,
      sqrtRatioX96: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    fees(
      nft: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    feesGas(
      nft: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    principal(
      nft: string,
      tokenId: BigNumberish,
      sqrtRatioX96: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    principalGas(
      nft: string,
      tokenId: BigNumberish,
      sqrtRatioX96: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    total(
      nft: string,
      tokenId: BigNumberish,
      sqrtRatioX96: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    totalGas(
      nft: string,
      tokenId: BigNumberish,
      sqrtRatioX96: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    fees(
      nft: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    feesGas(
      nft: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    principal(
      nft: string,
      tokenId: BigNumberish,
      sqrtRatioX96: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    principalGas(
      nft: string,
      tokenId: BigNumberish,
      sqrtRatioX96: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    total(
      nft: string,
      tokenId: BigNumberish,
      sqrtRatioX96: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    totalGas(
      nft: string,
      tokenId: BigNumberish,
      sqrtRatioX96: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
