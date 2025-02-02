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

interface NFTDescriptorTestInterface extends ethers.utils.Interface {
  functions: {
    "addressToString(address)": FunctionFragment;
    "constructTokenURI((uint256,address,address,string,string,uint8,uint8,bool,int24,int24,int24,int24,uint24,address))": FunctionFragment;
    "feeToPercentString(uint24)": FunctionFragment;
    "fixedPointToDecimalString(uint160,uint8,uint8)": FunctionFragment;
    "generateSVGImage((uint256,address,address,string,string,uint8,uint8,bool,int24,int24,int24,int24,uint24,address))": FunctionFragment;
    "getGasCostOfConstructTokenURI((uint256,address,address,string,string,uint8,uint8,bool,int24,int24,int24,int24,uint24,address))": FunctionFragment;
    "isRare(uint256,address)": FunctionFragment;
    "rangeLocation(int24,int24)": FunctionFragment;
    "sliceTokenHex(address,uint256)": FunctionFragment;
    "tickToDecimalString(int24,int24,uint8,uint8,bool)": FunctionFragment;
    "tokenToColorHex(address,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addressToString",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "constructTokenURI",
    values: [
      {
        tokenId: BigNumberish;
        quoteTokenAddress: string;
        baseTokenAddress: string;
        quoteTokenSymbol: string;
        baseTokenSymbol: string;
        quoteTokenDecimals: BigNumberish;
        baseTokenDecimals: BigNumberish;
        flipRatio: boolean;
        tickLower: BigNumberish;
        tickUpper: BigNumberish;
        tickCurrent: BigNumberish;
        tickSpacing: BigNumberish;
        fee: BigNumberish;
        poolAddress: string;
      }
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "feeToPercentString",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "fixedPointToDecimalString",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "generateSVGImage",
    values: [
      {
        tokenId: BigNumberish;
        quoteTokenAddress: string;
        baseTokenAddress: string;
        quoteTokenSymbol: string;
        baseTokenSymbol: string;
        quoteTokenDecimals: BigNumberish;
        baseTokenDecimals: BigNumberish;
        flipRatio: boolean;
        tickLower: BigNumberish;
        tickUpper: BigNumberish;
        tickCurrent: BigNumberish;
        tickSpacing: BigNumberish;
        fee: BigNumberish;
        poolAddress: string;
      }
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getGasCostOfConstructTokenURI",
    values: [
      {
        tokenId: BigNumberish;
        quoteTokenAddress: string;
        baseTokenAddress: string;
        quoteTokenSymbol: string;
        baseTokenSymbol: string;
        quoteTokenDecimals: BigNumberish;
        baseTokenDecimals: BigNumberish;
        flipRatio: boolean;
        tickLower: BigNumberish;
        tickUpper: BigNumberish;
        tickCurrent: BigNumberish;
        tickSpacing: BigNumberish;
        fee: BigNumberish;
        poolAddress: string;
      }
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "isRare",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "rangeLocation",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "sliceTokenHex",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "tickToDecimalString",
    values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "tokenToColorHex",
    values: [string, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "addressToString",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "constructTokenURI",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "feeToPercentString",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "fixedPointToDecimalString",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "generateSVGImage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getGasCostOfConstructTokenURI",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isRare", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "rangeLocation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "sliceTokenHex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tickToDecimalString",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tokenToColorHex",
    data: BytesLike
  ): Result;

  events: {};
}

export class NFTDescriptorTest extends BaseContract {
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

  interface: NFTDescriptorTestInterface;

  functions: {
    addressToString(
      _address: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    constructTokenURI(
      params: {
        tokenId: BigNumberish;
        quoteTokenAddress: string;
        baseTokenAddress: string;
        quoteTokenSymbol: string;
        baseTokenSymbol: string;
        quoteTokenDecimals: BigNumberish;
        baseTokenDecimals: BigNumberish;
        flipRatio: boolean;
        tickLower: BigNumberish;
        tickUpper: BigNumberish;
        tickCurrent: BigNumberish;
        tickSpacing: BigNumberish;
        fee: BigNumberish;
        poolAddress: string;
      },
      overrides?: CallOverrides
    ): Promise<[string]>;

    feeToPercentString(
      fee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    fixedPointToDecimalString(
      sqrtRatioX96: BigNumberish,
      token0Decimals: BigNumberish,
      token1Decimals: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    generateSVGImage(
      params: {
        tokenId: BigNumberish;
        quoteTokenAddress: string;
        baseTokenAddress: string;
        quoteTokenSymbol: string;
        baseTokenSymbol: string;
        quoteTokenDecimals: BigNumberish;
        baseTokenDecimals: BigNumberish;
        flipRatio: boolean;
        tickLower: BigNumberish;
        tickUpper: BigNumberish;
        tickCurrent: BigNumberish;
        tickSpacing: BigNumberish;
        fee: BigNumberish;
        poolAddress: string;
      },
      overrides?: CallOverrides
    ): Promise<[string]>;

    getGasCostOfConstructTokenURI(
      params: {
        tokenId: BigNumberish;
        quoteTokenAddress: string;
        baseTokenAddress: string;
        quoteTokenSymbol: string;
        baseTokenSymbol: string;
        quoteTokenDecimals: BigNumberish;
        baseTokenDecimals: BigNumberish;
        flipRatio: boolean;
        tickLower: BigNumberish;
        tickUpper: BigNumberish;
        tickCurrent: BigNumberish;
        tickSpacing: BigNumberish;
        fee: BigNumberish;
        poolAddress: string;
      },
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    isRare(
      tokenId: BigNumberish,
      poolAddress: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    rangeLocation(
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, string]>;

    sliceTokenHex(
      token: string,
      offset: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    tickToDecimalString(
      tick: BigNumberish,
      tickSpacing: BigNumberish,
      token0Decimals: BigNumberish,
      token1Decimals: BigNumberish,
      flipRatio: boolean,
      overrides?: CallOverrides
    ): Promise<[string]>;

    tokenToColorHex(
      token: string,
      offset: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;
  };

  addressToString(_address: string, overrides?: CallOverrides): Promise<string>;

  constructTokenURI(
    params: {
      tokenId: BigNumberish;
      quoteTokenAddress: string;
      baseTokenAddress: string;
      quoteTokenSymbol: string;
      baseTokenSymbol: string;
      quoteTokenDecimals: BigNumberish;
      baseTokenDecimals: BigNumberish;
      flipRatio: boolean;
      tickLower: BigNumberish;
      tickUpper: BigNumberish;
      tickCurrent: BigNumberish;
      tickSpacing: BigNumberish;
      fee: BigNumberish;
      poolAddress: string;
    },
    overrides?: CallOverrides
  ): Promise<string>;

  feeToPercentString(
    fee: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  fixedPointToDecimalString(
    sqrtRatioX96: BigNumberish,
    token0Decimals: BigNumberish,
    token1Decimals: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  generateSVGImage(
    params: {
      tokenId: BigNumberish;
      quoteTokenAddress: string;
      baseTokenAddress: string;
      quoteTokenSymbol: string;
      baseTokenSymbol: string;
      quoteTokenDecimals: BigNumberish;
      baseTokenDecimals: BigNumberish;
      flipRatio: boolean;
      tickLower: BigNumberish;
      tickUpper: BigNumberish;
      tickCurrent: BigNumberish;
      tickSpacing: BigNumberish;
      fee: BigNumberish;
      poolAddress: string;
    },
    overrides?: CallOverrides
  ): Promise<string>;

  getGasCostOfConstructTokenURI(
    params: {
      tokenId: BigNumberish;
      quoteTokenAddress: string;
      baseTokenAddress: string;
      quoteTokenSymbol: string;
      baseTokenSymbol: string;
      quoteTokenDecimals: BigNumberish;
      baseTokenDecimals: BigNumberish;
      flipRatio: boolean;
      tickLower: BigNumberish;
      tickUpper: BigNumberish;
      tickCurrent: BigNumberish;
      tickSpacing: BigNumberish;
      fee: BigNumberish;
      poolAddress: string;
    },
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  isRare(
    tokenId: BigNumberish,
    poolAddress: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  rangeLocation(
    tickLower: BigNumberish,
    tickUpper: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[string, string]>;

  sliceTokenHex(
    token: string,
    offset: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  tickToDecimalString(
    tick: BigNumberish,
    tickSpacing: BigNumberish,
    token0Decimals: BigNumberish,
    token1Decimals: BigNumberish,
    flipRatio: boolean,
    overrides?: CallOverrides
  ): Promise<string>;

  tokenToColorHex(
    token: string,
    offset: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    addressToString(
      _address: string,
      overrides?: CallOverrides
    ): Promise<string>;

    constructTokenURI(
      params: {
        tokenId: BigNumberish;
        quoteTokenAddress: string;
        baseTokenAddress: string;
        quoteTokenSymbol: string;
        baseTokenSymbol: string;
        quoteTokenDecimals: BigNumberish;
        baseTokenDecimals: BigNumberish;
        flipRatio: boolean;
        tickLower: BigNumberish;
        tickUpper: BigNumberish;
        tickCurrent: BigNumberish;
        tickSpacing: BigNumberish;
        fee: BigNumberish;
        poolAddress: string;
      },
      overrides?: CallOverrides
    ): Promise<string>;

    feeToPercentString(
      fee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    fixedPointToDecimalString(
      sqrtRatioX96: BigNumberish,
      token0Decimals: BigNumberish,
      token1Decimals: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    generateSVGImage(
      params: {
        tokenId: BigNumberish;
        quoteTokenAddress: string;
        baseTokenAddress: string;
        quoteTokenSymbol: string;
        baseTokenSymbol: string;
        quoteTokenDecimals: BigNumberish;
        baseTokenDecimals: BigNumberish;
        flipRatio: boolean;
        tickLower: BigNumberish;
        tickUpper: BigNumberish;
        tickCurrent: BigNumberish;
        tickSpacing: BigNumberish;
        fee: BigNumberish;
        poolAddress: string;
      },
      overrides?: CallOverrides
    ): Promise<string>;

    getGasCostOfConstructTokenURI(
      params: {
        tokenId: BigNumberish;
        quoteTokenAddress: string;
        baseTokenAddress: string;
        quoteTokenSymbol: string;
        baseTokenSymbol: string;
        quoteTokenDecimals: BigNumberish;
        baseTokenDecimals: BigNumberish;
        flipRatio: boolean;
        tickLower: BigNumberish;
        tickUpper: BigNumberish;
        tickCurrent: BigNumberish;
        tickSpacing: BigNumberish;
        fee: BigNumberish;
        poolAddress: string;
      },
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isRare(
      tokenId: BigNumberish,
      poolAddress: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    rangeLocation(
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, string]>;

    sliceTokenHex(
      token: string,
      offset: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    tickToDecimalString(
      tick: BigNumberish,
      tickSpacing: BigNumberish,
      token0Decimals: BigNumberish,
      token1Decimals: BigNumberish,
      flipRatio: boolean,
      overrides?: CallOverrides
    ): Promise<string>;

    tokenToColorHex(
      token: string,
      offset: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {};

  estimateGas: {
    addressToString(
      _address: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    constructTokenURI(
      params: {
        tokenId: BigNumberish;
        quoteTokenAddress: string;
        baseTokenAddress: string;
        quoteTokenSymbol: string;
        baseTokenSymbol: string;
        quoteTokenDecimals: BigNumberish;
        baseTokenDecimals: BigNumberish;
        flipRatio: boolean;
        tickLower: BigNumberish;
        tickUpper: BigNumberish;
        tickCurrent: BigNumberish;
        tickSpacing: BigNumberish;
        fee: BigNumberish;
        poolAddress: string;
      },
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    feeToPercentString(
      fee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    fixedPointToDecimalString(
      sqrtRatioX96: BigNumberish,
      token0Decimals: BigNumberish,
      token1Decimals: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    generateSVGImage(
      params: {
        tokenId: BigNumberish;
        quoteTokenAddress: string;
        baseTokenAddress: string;
        quoteTokenSymbol: string;
        baseTokenSymbol: string;
        quoteTokenDecimals: BigNumberish;
        baseTokenDecimals: BigNumberish;
        flipRatio: boolean;
        tickLower: BigNumberish;
        tickUpper: BigNumberish;
        tickCurrent: BigNumberish;
        tickSpacing: BigNumberish;
        fee: BigNumberish;
        poolAddress: string;
      },
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getGasCostOfConstructTokenURI(
      params: {
        tokenId: BigNumberish;
        quoteTokenAddress: string;
        baseTokenAddress: string;
        quoteTokenSymbol: string;
        baseTokenSymbol: string;
        quoteTokenDecimals: BigNumberish;
        baseTokenDecimals: BigNumberish;
        flipRatio: boolean;
        tickLower: BigNumberish;
        tickUpper: BigNumberish;
        tickCurrent: BigNumberish;
        tickSpacing: BigNumberish;
        fee: BigNumberish;
        poolAddress: string;
      },
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isRare(
      tokenId: BigNumberish,
      poolAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    rangeLocation(
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    sliceTokenHex(
      token: string,
      offset: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    tickToDecimalString(
      tick: BigNumberish,
      tickSpacing: BigNumberish,
      token0Decimals: BigNumberish,
      token1Decimals: BigNumberish,
      flipRatio: boolean,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    tokenToColorHex(
      token: string,
      offset: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addressToString(
      _address: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    constructTokenURI(
      params: {
        tokenId: BigNumberish;
        quoteTokenAddress: string;
        baseTokenAddress: string;
        quoteTokenSymbol: string;
        baseTokenSymbol: string;
        quoteTokenDecimals: BigNumberish;
        baseTokenDecimals: BigNumberish;
        flipRatio: boolean;
        tickLower: BigNumberish;
        tickUpper: BigNumberish;
        tickCurrent: BigNumberish;
        tickSpacing: BigNumberish;
        fee: BigNumberish;
        poolAddress: string;
      },
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    feeToPercentString(
      fee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    fixedPointToDecimalString(
      sqrtRatioX96: BigNumberish,
      token0Decimals: BigNumberish,
      token1Decimals: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    generateSVGImage(
      params: {
        tokenId: BigNumberish;
        quoteTokenAddress: string;
        baseTokenAddress: string;
        quoteTokenSymbol: string;
        baseTokenSymbol: string;
        quoteTokenDecimals: BigNumberish;
        baseTokenDecimals: BigNumberish;
        flipRatio: boolean;
        tickLower: BigNumberish;
        tickUpper: BigNumberish;
        tickCurrent: BigNumberish;
        tickSpacing: BigNumberish;
        fee: BigNumberish;
        poolAddress: string;
      },
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getGasCostOfConstructTokenURI(
      params: {
        tokenId: BigNumberish;
        quoteTokenAddress: string;
        baseTokenAddress: string;
        quoteTokenSymbol: string;
        baseTokenSymbol: string;
        quoteTokenDecimals: BigNumberish;
        baseTokenDecimals: BigNumberish;
        flipRatio: boolean;
        tickLower: BigNumberish;
        tickUpper: BigNumberish;
        tickCurrent: BigNumberish;
        tickSpacing: BigNumberish;
        fee: BigNumberish;
        poolAddress: string;
      },
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isRare(
      tokenId: BigNumberish,
      poolAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    rangeLocation(
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    sliceTokenHex(
      token: string,
      offset: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    tickToDecimalString(
      tick: BigNumberish,
      tickSpacing: BigNumberish,
      token0Decimals: BigNumberish,
      token1Decimals: BigNumberish,
      flipRatio: boolean,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    tokenToColorHex(
      token: string,
      offset: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
