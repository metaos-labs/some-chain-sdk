/* eslint-disable */
import Long from "long";
import { grpc } from "@improbable-eng/grpc-web";
import * as _m0 from "protobufjs/minimal";
import { BrowserHeaders } from "browser-headers";

export const protobufPackage = "sophonlabs.sophon.swap";

export interface MsgCreatePool {
  creator: string;
  /** the denom of denom0 in the pool */
  denom0: string;
  /** the denom of denom1 in the pool */
  denom1: string;
  /** the fee rate for the pool */
  fee: number;
  /** the initial square root price of the poo */
  sqrtPrice: string;
}

export interface MsgCreatePoolResponse {}

export interface MsgCreatePosition {
  creator: string;
  /** the denom of token0 in the pool */
  denom0: string;
  /** the denom of token1 in the pool */
  denom1: string;
  /** the fee rate for the pool */
  fee: number;
  /** the price lower bound of the position */
  tickLower: number;
  /** the price higher bound of the position */
  tickUpper: number;
  /** the desired amount of denom0 in the position */
  amount0Desired: string;
  /** the desired amount of denom1 in the position */
  amount1Desired: string;
  /** the minimum amount that denom0 needs to add when slippage occurs */
  amount0Min: string;
  /** the minimum amount that denom1 needs to add when slippage occurs */
  amount1Min: string;
  /** the minted NFT holder address */
  recipient: string;
  /** the time by which the transaction must be included to effect the change, unix time */
  deadline: Long;
}

export interface MsgCreatePositionResponse {}

export interface MsgIncreaseLiquidity {
  /** the message creator, with tokens paid for the message */
  creator: string;
  /** then id of the NFT for which liquidity is being increased */
  tokenId: string;
  /** the desired amount of denom0 to be spent */
  amount0Desired: string;
  /** the desired amount of denom1 to be spent */
  amount1Desired: string;
  /** the minimum amount of denom0 to spend, which serves as a slippage check */
  amount0Min: string;
  /** the minimum amount of denom1 to spend, which serves as a slippage check */
  amount1Min: string;
  /** the time by which the transaction must be included to effect the change, unix time */
  deadline: Long;
}

export interface MsgIncreaseLiquidityResponse {}

export interface MsgDecreaseLiquidity {
  creator: string;
  /** then id of the NFT for which liquidity is being decreased */
  tokenId: string;
  /** the amount by which liquidity will be decreased */
  liquidity: string;
  /** the minimum amount of denom0 that should be accounted for the burned liquidity */
  amount0Min: string;
  /** the minimum amount of denom1 that should be accounted for the burned liquidity */
  amount1Min: string;
  /** the time by which the transaction must be included to effect the change, unix time */
  deadline: Long;
}

export interface MsgDecreaseLiquidityResponse {}

export interface MsgCollect {
  creator: string;
  /** the id of the NFT for which tokens are being collected */
  tokenId: string;
  /** the address that should receive the tokens */
  recipient: string;
  /** the maximum amount of denom0 to collect */
  amount0Max: string;
  /** the maximum amount of denom1 to collect */
  amount1Max: string;
  /** whether to get only owed tokens. True means only get the tokens that are owed(less gas), false means trigger settlement first, then collect(more gas) */
  collectOnly: boolean;
}

export interface MsgCollectResponse {}

export interface MsgSwapExactIn {
  creator: string;
  recipient: string;
  amountIn: string;
  amountOutMin: string;
  denoms: string[];
  fees: number[];
  deadline: Long;
}

export interface MsgSwapExactInResponse {}

export interface MsgSwapExactOut {
  creator: string;
  recipient: string;
  amountOut: string;
  amountInMax: string;
  denoms: string[];
  fees: number[];
  deadline: Long;
}

export interface MsgSwapExactOutResponse {}

export interface MsgSetOperator {
  creator: string;
  /** the pool address */
  address: string;
  /** the index of the reward config, starting at 0 */
  index: number;
  /** the new operator address, if empty, remove the operator */
  operator: string;
}

export interface MsgSetOperatorResponse {}

export interface MsgSetReward {
  creator: string;
  address: string;
  index: number;
  /** reward denom */
  denom: string;
  rewardPerSecond: string;
  /**
   * If it is true, it means that the reward will be issued by mint, otherwise the reward will be issued through the vault.
   *
   * If the balance of the vault is insufficient, only part of the reward will be issued.
   */
  mintable: boolean;
  /** the reward config effective time */
  triggerTime: Long;
}

export interface MsgSetRewardResponse {}

export interface MsgCollectReward {
  creator: string;
  /** the id of the NFT for which tokens are being collected */
  tokenId: string;
  /** the address that should receive the tokens */
  recipient: string;
  /** whether to get only owed tokens. True means only get the tokens that are owed(less gas), false means trigger settlement first, then collect(more gas) */
  collectOnly: boolean;
}

export interface MsgCollectRewardResponse {}

export interface MsgCollectFeeProtocol {
  creator: string;
  /** the pool address */
  address: string;
}

export interface MsgCollectFeeProtocolResponse {}

export interface MsgGovBurn {
  creator: string;
  amount: string;
}

export interface MsgGovBurnResponse {}

export interface MsgGovSwapExactIn {
  creator: string;
  amountIn: string;
  amountOutMin: string;
  denoms: string[];
  fees: number[];
  deadline: Long;
}

export interface MsgGovSwapExactInResponse {}

function createBaseMsgCreatePool(): MsgCreatePool {
  return { creator: "", denom0: "", denom1: "", fee: 0, sqrtPrice: "" };
}

export const MsgCreatePool = {
  encode(
    message: MsgCreatePool,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.denom0 !== "") {
      writer.uint32(18).string(message.denom0);
    }
    if (message.denom1 !== "") {
      writer.uint32(26).string(message.denom1);
    }
    if (message.fee !== 0) {
      writer.uint32(32).int32(message.fee);
    }
    if (message.sqrtPrice !== "") {
      writer.uint32(42).string(message.sqrtPrice);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreatePool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.denom0 = reader.string();
          break;
        case 3:
          message.denom1 = reader.string();
          break;
        case 4:
          message.fee = reader.int32();
          break;
        case 5:
          message.sqrtPrice = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreatePool {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      denom0: isSet(object.denom0) ? String(object.denom0) : "",
      denom1: isSet(object.denom1) ? String(object.denom1) : "",
      fee: isSet(object.fee) ? Number(object.fee) : 0,
      sqrtPrice: isSet(object.sqrtPrice) ? String(object.sqrtPrice) : "",
    };
  },

  toJSON(message: MsgCreatePool): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.denom0 !== undefined && (obj.denom0 = message.denom0);
    message.denom1 !== undefined && (obj.denom1 = message.denom1);
    message.fee !== undefined && (obj.fee = Math.round(message.fee));
    message.sqrtPrice !== undefined && (obj.sqrtPrice = message.sqrtPrice);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreatePool>, I>>(
    object: I
  ): MsgCreatePool {
    const message = createBaseMsgCreatePool();
    message.creator = object.creator ?? "";
    message.denom0 = object.denom0 ?? "";
    message.denom1 = object.denom1 ?? "";
    message.fee = object.fee ?? 0;
    message.sqrtPrice = object.sqrtPrice ?? "";
    return message;
  },
};

function createBaseMsgCreatePoolResponse(): MsgCreatePoolResponse {
  return {};
}

export const MsgCreatePoolResponse = {
  encode(
    _: MsgCreatePoolResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCreatePoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgCreatePoolResponse {
    return {};
  },

  toJSON(_: MsgCreatePoolResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreatePoolResponse>, I>>(
    _: I
  ): MsgCreatePoolResponse {
    const message = createBaseMsgCreatePoolResponse();
    return message;
  },
};

function createBaseMsgCreatePosition(): MsgCreatePosition {
  return {
    creator: "",
    denom0: "",
    denom1: "",
    fee: 0,
    tickLower: 0,
    tickUpper: 0,
    amount0Desired: "",
    amount1Desired: "",
    amount0Min: "",
    amount1Min: "",
    recipient: "",
    deadline: Long.ZERO,
  };
}

export const MsgCreatePosition = {
  encode(
    message: MsgCreatePosition,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.denom0 !== "") {
      writer.uint32(18).string(message.denom0);
    }
    if (message.denom1 !== "") {
      writer.uint32(26).string(message.denom1);
    }
    if (message.fee !== 0) {
      writer.uint32(32).int32(message.fee);
    }
    if (message.tickLower !== 0) {
      writer.uint32(40).int32(message.tickLower);
    }
    if (message.tickUpper !== 0) {
      writer.uint32(48).int32(message.tickUpper);
    }
    if (message.amount0Desired !== "") {
      writer.uint32(58).string(message.amount0Desired);
    }
    if (message.amount1Desired !== "") {
      writer.uint32(66).string(message.amount1Desired);
    }
    if (message.amount0Min !== "") {
      writer.uint32(74).string(message.amount0Min);
    }
    if (message.amount1Min !== "") {
      writer.uint32(82).string(message.amount1Min);
    }
    if (message.recipient !== "") {
      writer.uint32(90).string(message.recipient);
    }
    if (!message.deadline.isZero()) {
      writer.uint32(96).int64(message.deadline);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreatePosition {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePosition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.denom0 = reader.string();
          break;
        case 3:
          message.denom1 = reader.string();
          break;
        case 4:
          message.fee = reader.int32();
          break;
        case 5:
          message.tickLower = reader.int32();
          break;
        case 6:
          message.tickUpper = reader.int32();
          break;
        case 7:
          message.amount0Desired = reader.string();
          break;
        case 8:
          message.amount1Desired = reader.string();
          break;
        case 9:
          message.amount0Min = reader.string();
          break;
        case 10:
          message.amount1Min = reader.string();
          break;
        case 11:
          message.recipient = reader.string();
          break;
        case 12:
          message.deadline = reader.int64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreatePosition {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      denom0: isSet(object.denom0) ? String(object.denom0) : "",
      denom1: isSet(object.denom1) ? String(object.denom1) : "",
      fee: isSet(object.fee) ? Number(object.fee) : 0,
      tickLower: isSet(object.tickLower) ? Number(object.tickLower) : 0,
      tickUpper: isSet(object.tickUpper) ? Number(object.tickUpper) : 0,
      amount0Desired: isSet(object.amount0Desired)
        ? String(object.amount0Desired)
        : "",
      amount1Desired: isSet(object.amount1Desired)
        ? String(object.amount1Desired)
        : "",
      amount0Min: isSet(object.amount0Min) ? String(object.amount0Min) : "",
      amount1Min: isSet(object.amount1Min) ? String(object.amount1Min) : "",
      recipient: isSet(object.recipient) ? String(object.recipient) : "",
      deadline: isSet(object.deadline)
        ? Long.fromValue(object.deadline)
        : Long.ZERO,
    };
  },

  toJSON(message: MsgCreatePosition): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.denom0 !== undefined && (obj.denom0 = message.denom0);
    message.denom1 !== undefined && (obj.denom1 = message.denom1);
    message.fee !== undefined && (obj.fee = Math.round(message.fee));
    message.tickLower !== undefined &&
      (obj.tickLower = Math.round(message.tickLower));
    message.tickUpper !== undefined &&
      (obj.tickUpper = Math.round(message.tickUpper));
    message.amount0Desired !== undefined &&
      (obj.amount0Desired = message.amount0Desired);
    message.amount1Desired !== undefined &&
      (obj.amount1Desired = message.amount1Desired);
    message.amount0Min !== undefined && (obj.amount0Min = message.amount0Min);
    message.amount1Min !== undefined && (obj.amount1Min = message.amount1Min);
    message.recipient !== undefined && (obj.recipient = message.recipient);
    message.deadline !== undefined &&
      (obj.deadline = (message.deadline || Long.ZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreatePosition>, I>>(
    object: I
  ): MsgCreatePosition {
    const message = createBaseMsgCreatePosition();
    message.creator = object.creator ?? "";
    message.denom0 = object.denom0 ?? "";
    message.denom1 = object.denom1 ?? "";
    message.fee = object.fee ?? 0;
    message.tickLower = object.tickLower ?? 0;
    message.tickUpper = object.tickUpper ?? 0;
    message.amount0Desired = object.amount0Desired ?? "";
    message.amount1Desired = object.amount1Desired ?? "";
    message.amount0Min = object.amount0Min ?? "";
    message.amount1Min = object.amount1Min ?? "";
    message.recipient = object.recipient ?? "";
    message.deadline =
      object.deadline !== undefined && object.deadline !== null
        ? Long.fromValue(object.deadline)
        : Long.ZERO;
    return message;
  },
};

function createBaseMsgCreatePositionResponse(): MsgCreatePositionResponse {
  return {};
}

export const MsgCreatePositionResponse = {
  encode(
    _: MsgCreatePositionResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCreatePositionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePositionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgCreatePositionResponse {
    return {};
  },

  toJSON(_: MsgCreatePositionResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreatePositionResponse>, I>>(
    _: I
  ): MsgCreatePositionResponse {
    const message = createBaseMsgCreatePositionResponse();
    return message;
  },
};

function createBaseMsgIncreaseLiquidity(): MsgIncreaseLiquidity {
  return {
    creator: "",
    tokenId: "",
    amount0Desired: "",
    amount1Desired: "",
    amount0Min: "",
    amount1Min: "",
    deadline: Long.ZERO,
  };
}

export const MsgIncreaseLiquidity = {
  encode(
    message: MsgIncreaseLiquidity,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.tokenId !== "") {
      writer.uint32(18).string(message.tokenId);
    }
    if (message.amount0Desired !== "") {
      writer.uint32(26).string(message.amount0Desired);
    }
    if (message.amount1Desired !== "") {
      writer.uint32(34).string(message.amount1Desired);
    }
    if (message.amount0Min !== "") {
      writer.uint32(42).string(message.amount0Min);
    }
    if (message.amount1Min !== "") {
      writer.uint32(50).string(message.amount1Min);
    }
    if (!message.deadline.isZero()) {
      writer.uint32(56).int64(message.deadline);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgIncreaseLiquidity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgIncreaseLiquidity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.tokenId = reader.string();
          break;
        case 3:
          message.amount0Desired = reader.string();
          break;
        case 4:
          message.amount1Desired = reader.string();
          break;
        case 5:
          message.amount0Min = reader.string();
          break;
        case 6:
          message.amount1Min = reader.string();
          break;
        case 7:
          message.deadline = reader.int64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgIncreaseLiquidity {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      tokenId: isSet(object.tokenId) ? String(object.tokenId) : "",
      amount0Desired: isSet(object.amount0Desired)
        ? String(object.amount0Desired)
        : "",
      amount1Desired: isSet(object.amount1Desired)
        ? String(object.amount1Desired)
        : "",
      amount0Min: isSet(object.amount0Min) ? String(object.amount0Min) : "",
      amount1Min: isSet(object.amount1Min) ? String(object.amount1Min) : "",
      deadline: isSet(object.deadline)
        ? Long.fromValue(object.deadline)
        : Long.ZERO,
    };
  },

  toJSON(message: MsgIncreaseLiquidity): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.tokenId !== undefined && (obj.tokenId = message.tokenId);
    message.amount0Desired !== undefined &&
      (obj.amount0Desired = message.amount0Desired);
    message.amount1Desired !== undefined &&
      (obj.amount1Desired = message.amount1Desired);
    message.amount0Min !== undefined && (obj.amount0Min = message.amount0Min);
    message.amount1Min !== undefined && (obj.amount1Min = message.amount1Min);
    message.deadline !== undefined &&
      (obj.deadline = (message.deadline || Long.ZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgIncreaseLiquidity>, I>>(
    object: I
  ): MsgIncreaseLiquidity {
    const message = createBaseMsgIncreaseLiquidity();
    message.creator = object.creator ?? "";
    message.tokenId = object.tokenId ?? "";
    message.amount0Desired = object.amount0Desired ?? "";
    message.amount1Desired = object.amount1Desired ?? "";
    message.amount0Min = object.amount0Min ?? "";
    message.amount1Min = object.amount1Min ?? "";
    message.deadline =
      object.deadline !== undefined && object.deadline !== null
        ? Long.fromValue(object.deadline)
        : Long.ZERO;
    return message;
  },
};

function createBaseMsgIncreaseLiquidityResponse(): MsgIncreaseLiquidityResponse {
  return {};
}

export const MsgIncreaseLiquidityResponse = {
  encode(
    _: MsgIncreaseLiquidityResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgIncreaseLiquidityResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgIncreaseLiquidityResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgIncreaseLiquidityResponse {
    return {};
  },

  toJSON(_: MsgIncreaseLiquidityResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgIncreaseLiquidityResponse>, I>>(
    _: I
  ): MsgIncreaseLiquidityResponse {
    const message = createBaseMsgIncreaseLiquidityResponse();
    return message;
  },
};

function createBaseMsgDecreaseLiquidity(): MsgDecreaseLiquidity {
  return {
    creator: "",
    tokenId: "",
    liquidity: "",
    amount0Min: "",
    amount1Min: "",
    deadline: Long.ZERO,
  };
}

export const MsgDecreaseLiquidity = {
  encode(
    message: MsgDecreaseLiquidity,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.tokenId !== "") {
      writer.uint32(18).string(message.tokenId);
    }
    if (message.liquidity !== "") {
      writer.uint32(26).string(message.liquidity);
    }
    if (message.amount0Min !== "") {
      writer.uint32(34).string(message.amount0Min);
    }
    if (message.amount1Min !== "") {
      writer.uint32(42).string(message.amount1Min);
    }
    if (!message.deadline.isZero()) {
      writer.uint32(48).int64(message.deadline);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgDecreaseLiquidity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDecreaseLiquidity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.tokenId = reader.string();
          break;
        case 3:
          message.liquidity = reader.string();
          break;
        case 4:
          message.amount0Min = reader.string();
          break;
        case 5:
          message.amount1Min = reader.string();
          break;
        case 6:
          message.deadline = reader.int64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDecreaseLiquidity {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      tokenId: isSet(object.tokenId) ? String(object.tokenId) : "",
      liquidity: isSet(object.liquidity) ? String(object.liquidity) : "",
      amount0Min: isSet(object.amount0Min) ? String(object.amount0Min) : "",
      amount1Min: isSet(object.amount1Min) ? String(object.amount1Min) : "",
      deadline: isSet(object.deadline)
        ? Long.fromValue(object.deadline)
        : Long.ZERO,
    };
  },

  toJSON(message: MsgDecreaseLiquidity): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.tokenId !== undefined && (obj.tokenId = message.tokenId);
    message.liquidity !== undefined && (obj.liquidity = message.liquidity);
    message.amount0Min !== undefined && (obj.amount0Min = message.amount0Min);
    message.amount1Min !== undefined && (obj.amount1Min = message.amount1Min);
    message.deadline !== undefined &&
      (obj.deadline = (message.deadline || Long.ZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDecreaseLiquidity>, I>>(
    object: I
  ): MsgDecreaseLiquidity {
    const message = createBaseMsgDecreaseLiquidity();
    message.creator = object.creator ?? "";
    message.tokenId = object.tokenId ?? "";
    message.liquidity = object.liquidity ?? "";
    message.amount0Min = object.amount0Min ?? "";
    message.amount1Min = object.amount1Min ?? "";
    message.deadline =
      object.deadline !== undefined && object.deadline !== null
        ? Long.fromValue(object.deadline)
        : Long.ZERO;
    return message;
  },
};

function createBaseMsgDecreaseLiquidityResponse(): MsgDecreaseLiquidityResponse {
  return {};
}

export const MsgDecreaseLiquidityResponse = {
  encode(
    _: MsgDecreaseLiquidityResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgDecreaseLiquidityResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDecreaseLiquidityResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgDecreaseLiquidityResponse {
    return {};
  },

  toJSON(_: MsgDecreaseLiquidityResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDecreaseLiquidityResponse>, I>>(
    _: I
  ): MsgDecreaseLiquidityResponse {
    const message = createBaseMsgDecreaseLiquidityResponse();
    return message;
  },
};

function createBaseMsgCollect(): MsgCollect {
  return {
    creator: "",
    tokenId: "",
    recipient: "",
    amount0Max: "",
    amount1Max: "",
    collectOnly: false,
  };
}

export const MsgCollect = {
  encode(
    message: MsgCollect,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.tokenId !== "") {
      writer.uint32(18).string(message.tokenId);
    }
    if (message.recipient !== "") {
      writer.uint32(26).string(message.recipient);
    }
    if (message.amount0Max !== "") {
      writer.uint32(34).string(message.amount0Max);
    }
    if (message.amount1Max !== "") {
      writer.uint32(42).string(message.amount1Max);
    }
    if (message.collectOnly === true) {
      writer.uint32(48).bool(message.collectOnly);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCollect {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCollect();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.tokenId = reader.string();
          break;
        case 3:
          message.recipient = reader.string();
          break;
        case 4:
          message.amount0Max = reader.string();
          break;
        case 5:
          message.amount1Max = reader.string();
          break;
        case 6:
          message.collectOnly = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCollect {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      tokenId: isSet(object.tokenId) ? String(object.tokenId) : "",
      recipient: isSet(object.recipient) ? String(object.recipient) : "",
      amount0Max: isSet(object.amount0Max) ? String(object.amount0Max) : "",
      amount1Max: isSet(object.amount1Max) ? String(object.amount1Max) : "",
      collectOnly: isSet(object.collectOnly)
        ? Boolean(object.collectOnly)
        : false,
    };
  },

  toJSON(message: MsgCollect): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.tokenId !== undefined && (obj.tokenId = message.tokenId);
    message.recipient !== undefined && (obj.recipient = message.recipient);
    message.amount0Max !== undefined && (obj.amount0Max = message.amount0Max);
    message.amount1Max !== undefined && (obj.amount1Max = message.amount1Max);
    message.collectOnly !== undefined &&
      (obj.collectOnly = message.collectOnly);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCollect>, I>>(
    object: I
  ): MsgCollect {
    const message = createBaseMsgCollect();
    message.creator = object.creator ?? "";
    message.tokenId = object.tokenId ?? "";
    message.recipient = object.recipient ?? "";
    message.amount0Max = object.amount0Max ?? "";
    message.amount1Max = object.amount1Max ?? "";
    message.collectOnly = object.collectOnly ?? false;
    return message;
  },
};

function createBaseMsgCollectResponse(): MsgCollectResponse {
  return {};
}

export const MsgCollectResponse = {
  encode(
    _: MsgCollectResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCollectResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCollectResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgCollectResponse {
    return {};
  },

  toJSON(_: MsgCollectResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCollectResponse>, I>>(
    _: I
  ): MsgCollectResponse {
    const message = createBaseMsgCollectResponse();
    return message;
  },
};

function createBaseMsgSwapExactIn(): MsgSwapExactIn {
  return {
    creator: "",
    recipient: "",
    amountIn: "",
    amountOutMin: "",
    denoms: [],
    fees: [],
    deadline: Long.ZERO,
  };
}

export const MsgSwapExactIn = {
  encode(
    message: MsgSwapExactIn,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.recipient !== "") {
      writer.uint32(18).string(message.recipient);
    }
    if (message.amountIn !== "") {
      writer.uint32(26).string(message.amountIn);
    }
    if (message.amountOutMin !== "") {
      writer.uint32(34).string(message.amountOutMin);
    }
    for (const v of message.denoms) {
      writer.uint32(42).string(v!);
    }
    writer.uint32(50).fork();
    for (const v of message.fees) {
      writer.int32(v);
    }
    writer.ldelim();
    if (!message.deadline.isZero()) {
      writer.uint32(56).int64(message.deadline);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSwapExactIn {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSwapExactIn();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.recipient = reader.string();
          break;
        case 3:
          message.amountIn = reader.string();
          break;
        case 4:
          message.amountOutMin = reader.string();
          break;
        case 5:
          message.denoms.push(reader.string());
          break;
        case 6:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.fees.push(reader.int32());
            }
          } else {
            message.fees.push(reader.int32());
          }
          break;
        case 7:
          message.deadline = reader.int64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSwapExactIn {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      recipient: isSet(object.recipient) ? String(object.recipient) : "",
      amountIn: isSet(object.amountIn) ? String(object.amountIn) : "",
      amountOutMin: isSet(object.amountOutMin)
        ? String(object.amountOutMin)
        : "",
      denoms: Array.isArray(object?.denoms)
        ? object.denoms.map((e: any) => String(e))
        : [],
      fees: Array.isArray(object?.fees)
        ? object.fees.map((e: any) => Number(e))
        : [],
      deadline: isSet(object.deadline)
        ? Long.fromValue(object.deadline)
        : Long.ZERO,
    };
  },

  toJSON(message: MsgSwapExactIn): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.recipient !== undefined && (obj.recipient = message.recipient);
    message.amountIn !== undefined && (obj.amountIn = message.amountIn);
    message.amountOutMin !== undefined &&
      (obj.amountOutMin = message.amountOutMin);
    if (message.denoms) {
      obj.denoms = message.denoms.map((e) => e);
    } else {
      obj.denoms = [];
    }
    if (message.fees) {
      obj.fees = message.fees.map((e) => Math.round(e));
    } else {
      obj.fees = [];
    }
    message.deadline !== undefined &&
      (obj.deadline = (message.deadline || Long.ZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSwapExactIn>, I>>(
    object: I
  ): MsgSwapExactIn {
    const message = createBaseMsgSwapExactIn();
    message.creator = object.creator ?? "";
    message.recipient = object.recipient ?? "";
    message.amountIn = object.amountIn ?? "";
    message.amountOutMin = object.amountOutMin ?? "";
    message.denoms = object.denoms?.map((e) => e) || [];
    message.fees = object.fees?.map((e) => e) || [];
    message.deadline =
      object.deadline !== undefined && object.deadline !== null
        ? Long.fromValue(object.deadline)
        : Long.ZERO;
    return message;
  },
};

function createBaseMsgSwapExactInResponse(): MsgSwapExactInResponse {
  return {};
}

export const MsgSwapExactInResponse = {
  encode(
    _: MsgSwapExactInResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSwapExactInResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSwapExactInResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgSwapExactInResponse {
    return {};
  },

  toJSON(_: MsgSwapExactInResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSwapExactInResponse>, I>>(
    _: I
  ): MsgSwapExactInResponse {
    const message = createBaseMsgSwapExactInResponse();
    return message;
  },
};

function createBaseMsgSwapExactOut(): MsgSwapExactOut {
  return {
    creator: "",
    recipient: "",
    amountOut: "",
    amountInMax: "",
    denoms: [],
    fees: [],
    deadline: Long.ZERO,
  };
}

export const MsgSwapExactOut = {
  encode(
    message: MsgSwapExactOut,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.recipient !== "") {
      writer.uint32(18).string(message.recipient);
    }
    if (message.amountOut !== "") {
      writer.uint32(26).string(message.amountOut);
    }
    if (message.amountInMax !== "") {
      writer.uint32(34).string(message.amountInMax);
    }
    for (const v of message.denoms) {
      writer.uint32(42).string(v!);
    }
    writer.uint32(50).fork();
    for (const v of message.fees) {
      writer.int32(v);
    }
    writer.ldelim();
    if (!message.deadline.isZero()) {
      writer.uint32(56).int64(message.deadline);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSwapExactOut {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSwapExactOut();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.recipient = reader.string();
          break;
        case 3:
          message.amountOut = reader.string();
          break;
        case 4:
          message.amountInMax = reader.string();
          break;
        case 5:
          message.denoms.push(reader.string());
          break;
        case 6:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.fees.push(reader.int32());
            }
          } else {
            message.fees.push(reader.int32());
          }
          break;
        case 7:
          message.deadline = reader.int64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSwapExactOut {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      recipient: isSet(object.recipient) ? String(object.recipient) : "",
      amountOut: isSet(object.amountOut) ? String(object.amountOut) : "",
      amountInMax: isSet(object.amountInMax) ? String(object.amountInMax) : "",
      denoms: Array.isArray(object?.denoms)
        ? object.denoms.map((e: any) => String(e))
        : [],
      fees: Array.isArray(object?.fees)
        ? object.fees.map((e: any) => Number(e))
        : [],
      deadline: isSet(object.deadline)
        ? Long.fromValue(object.deadline)
        : Long.ZERO,
    };
  },

  toJSON(message: MsgSwapExactOut): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.recipient !== undefined && (obj.recipient = message.recipient);
    message.amountOut !== undefined && (obj.amountOut = message.amountOut);
    message.amountInMax !== undefined &&
      (obj.amountInMax = message.amountInMax);
    if (message.denoms) {
      obj.denoms = message.denoms.map((e) => e);
    } else {
      obj.denoms = [];
    }
    if (message.fees) {
      obj.fees = message.fees.map((e) => Math.round(e));
    } else {
      obj.fees = [];
    }
    message.deadline !== undefined &&
      (obj.deadline = (message.deadline || Long.ZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSwapExactOut>, I>>(
    object: I
  ): MsgSwapExactOut {
    const message = createBaseMsgSwapExactOut();
    message.creator = object.creator ?? "";
    message.recipient = object.recipient ?? "";
    message.amountOut = object.amountOut ?? "";
    message.amountInMax = object.amountInMax ?? "";
    message.denoms = object.denoms?.map((e) => e) || [];
    message.fees = object.fees?.map((e) => e) || [];
    message.deadline =
      object.deadline !== undefined && object.deadline !== null
        ? Long.fromValue(object.deadline)
        : Long.ZERO;
    return message;
  },
};

function createBaseMsgSwapExactOutResponse(): MsgSwapExactOutResponse {
  return {};
}

export const MsgSwapExactOutResponse = {
  encode(
    _: MsgSwapExactOutResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSwapExactOutResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSwapExactOutResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgSwapExactOutResponse {
    return {};
  },

  toJSON(_: MsgSwapExactOutResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSwapExactOutResponse>, I>>(
    _: I
  ): MsgSwapExactOutResponse {
    const message = createBaseMsgSwapExactOutResponse();
    return message;
  },
};

function createBaseMsgSetOperator(): MsgSetOperator {
  return { creator: "", address: "", index: 0, operator: "" };
}

export const MsgSetOperator = {
  encode(
    message: MsgSetOperator,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.index !== 0) {
      writer.uint32(24).uint32(message.index);
    }
    if (message.operator !== "") {
      writer.uint32(34).string(message.operator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetOperator {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetOperator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.address = reader.string();
          break;
        case 3:
          message.index = reader.uint32();
          break;
        case 4:
          message.operator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSetOperator {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      address: isSet(object.address) ? String(object.address) : "",
      index: isSet(object.index) ? Number(object.index) : 0,
      operator: isSet(object.operator) ? String(object.operator) : "",
    };
  },

  toJSON(message: MsgSetOperator): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.address !== undefined && (obj.address = message.address);
    message.index !== undefined && (obj.index = Math.round(message.index));
    message.operator !== undefined && (obj.operator = message.operator);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSetOperator>, I>>(
    object: I
  ): MsgSetOperator {
    const message = createBaseMsgSetOperator();
    message.creator = object.creator ?? "";
    message.address = object.address ?? "";
    message.index = object.index ?? 0;
    message.operator = object.operator ?? "";
    return message;
  },
};

function createBaseMsgSetOperatorResponse(): MsgSetOperatorResponse {
  return {};
}

export const MsgSetOperatorResponse = {
  encode(
    _: MsgSetOperatorResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSetOperatorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetOperatorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgSetOperatorResponse {
    return {};
  },

  toJSON(_: MsgSetOperatorResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSetOperatorResponse>, I>>(
    _: I
  ): MsgSetOperatorResponse {
    const message = createBaseMsgSetOperatorResponse();
    return message;
  },
};

function createBaseMsgSetReward(): MsgSetReward {
  return {
    creator: "",
    address: "",
    index: 0,
    denom: "",
    rewardPerSecond: "",
    mintable: false,
    triggerTime: Long.ZERO,
  };
}

export const MsgSetReward = {
  encode(
    message: MsgSetReward,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.index !== 0) {
      writer.uint32(24).uint32(message.index);
    }
    if (message.denom !== "") {
      writer.uint32(34).string(message.denom);
    }
    if (message.rewardPerSecond !== "") {
      writer.uint32(42).string(message.rewardPerSecond);
    }
    if (message.mintable === true) {
      writer.uint32(48).bool(message.mintable);
    }
    if (!message.triggerTime.isZero()) {
      writer.uint32(56).int64(message.triggerTime);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetReward {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetReward();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.address = reader.string();
          break;
        case 3:
          message.index = reader.uint32();
          break;
        case 4:
          message.denom = reader.string();
          break;
        case 5:
          message.rewardPerSecond = reader.string();
          break;
        case 6:
          message.mintable = reader.bool();
          break;
        case 7:
          message.triggerTime = reader.int64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSetReward {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      address: isSet(object.address) ? String(object.address) : "",
      index: isSet(object.index) ? Number(object.index) : 0,
      denom: isSet(object.denom) ? String(object.denom) : "",
      rewardPerSecond: isSet(object.rewardPerSecond)
        ? String(object.rewardPerSecond)
        : "",
      mintable: isSet(object.mintable) ? Boolean(object.mintable) : false,
      triggerTime: isSet(object.triggerTime)
        ? Long.fromValue(object.triggerTime)
        : Long.ZERO,
    };
  },

  toJSON(message: MsgSetReward): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.address !== undefined && (obj.address = message.address);
    message.index !== undefined && (obj.index = Math.round(message.index));
    message.denom !== undefined && (obj.denom = message.denom);
    message.rewardPerSecond !== undefined &&
      (obj.rewardPerSecond = message.rewardPerSecond);
    message.mintable !== undefined && (obj.mintable = message.mintable);
    message.triggerTime !== undefined &&
      (obj.triggerTime = (message.triggerTime || Long.ZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSetReward>, I>>(
    object: I
  ): MsgSetReward {
    const message = createBaseMsgSetReward();
    message.creator = object.creator ?? "";
    message.address = object.address ?? "";
    message.index = object.index ?? 0;
    message.denom = object.denom ?? "";
    message.rewardPerSecond = object.rewardPerSecond ?? "";
    message.mintable = object.mintable ?? false;
    message.triggerTime =
      object.triggerTime !== undefined && object.triggerTime !== null
        ? Long.fromValue(object.triggerTime)
        : Long.ZERO;
    return message;
  },
};

function createBaseMsgSetRewardResponse(): MsgSetRewardResponse {
  return {};
}

export const MsgSetRewardResponse = {
  encode(
    _: MsgSetRewardResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSetRewardResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetRewardResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgSetRewardResponse {
    return {};
  },

  toJSON(_: MsgSetRewardResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSetRewardResponse>, I>>(
    _: I
  ): MsgSetRewardResponse {
    const message = createBaseMsgSetRewardResponse();
    return message;
  },
};

function createBaseMsgCollectReward(): MsgCollectReward {
  return { creator: "", tokenId: "", recipient: "", collectOnly: false };
}

export const MsgCollectReward = {
  encode(
    message: MsgCollectReward,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.tokenId !== "") {
      writer.uint32(18).string(message.tokenId);
    }
    if (message.recipient !== "") {
      writer.uint32(26).string(message.recipient);
    }
    if (message.collectOnly === true) {
      writer.uint32(32).bool(message.collectOnly);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCollectReward {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCollectReward();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.tokenId = reader.string();
          break;
        case 3:
          message.recipient = reader.string();
          break;
        case 4:
          message.collectOnly = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCollectReward {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      tokenId: isSet(object.tokenId) ? String(object.tokenId) : "",
      recipient: isSet(object.recipient) ? String(object.recipient) : "",
      collectOnly: isSet(object.collectOnly)
        ? Boolean(object.collectOnly)
        : false,
    };
  },

  toJSON(message: MsgCollectReward): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.tokenId !== undefined && (obj.tokenId = message.tokenId);
    message.recipient !== undefined && (obj.recipient = message.recipient);
    message.collectOnly !== undefined &&
      (obj.collectOnly = message.collectOnly);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCollectReward>, I>>(
    object: I
  ): MsgCollectReward {
    const message = createBaseMsgCollectReward();
    message.creator = object.creator ?? "";
    message.tokenId = object.tokenId ?? "";
    message.recipient = object.recipient ?? "";
    message.collectOnly = object.collectOnly ?? false;
    return message;
  },
};

function createBaseMsgCollectRewardResponse(): MsgCollectRewardResponse {
  return {};
}

export const MsgCollectRewardResponse = {
  encode(
    _: MsgCollectRewardResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCollectRewardResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCollectRewardResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgCollectRewardResponse {
    return {};
  },

  toJSON(_: MsgCollectRewardResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCollectRewardResponse>, I>>(
    _: I
  ): MsgCollectRewardResponse {
    const message = createBaseMsgCollectRewardResponse();
    return message;
  },
};

function createBaseMsgCollectFeeProtocol(): MsgCollectFeeProtocol {
  return { creator: "", address: "" };
}

export const MsgCollectFeeProtocol = {
  encode(
    message: MsgCollectFeeProtocol,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCollectFeeProtocol {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCollectFeeProtocol();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCollectFeeProtocol {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      address: isSet(object.address) ? String(object.address) : "",
    };
  },

  toJSON(message: MsgCollectFeeProtocol): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCollectFeeProtocol>, I>>(
    object: I
  ): MsgCollectFeeProtocol {
    const message = createBaseMsgCollectFeeProtocol();
    message.creator = object.creator ?? "";
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseMsgCollectFeeProtocolResponse(): MsgCollectFeeProtocolResponse {
  return {};
}

export const MsgCollectFeeProtocolResponse = {
  encode(
    _: MsgCollectFeeProtocolResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCollectFeeProtocolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCollectFeeProtocolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgCollectFeeProtocolResponse {
    return {};
  },

  toJSON(_: MsgCollectFeeProtocolResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCollectFeeProtocolResponse>, I>>(
    _: I
  ): MsgCollectFeeProtocolResponse {
    const message = createBaseMsgCollectFeeProtocolResponse();
    return message;
  },
};

function createBaseMsgGovBurn(): MsgGovBurn {
  return { creator: "", amount: "" };
}

export const MsgGovBurn = {
  encode(
    message: MsgGovBurn,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgGovBurn {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGovBurn();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgGovBurn {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
    };
  },

  toJSON(message: MsgGovBurn): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgGovBurn>, I>>(
    object: I
  ): MsgGovBurn {
    const message = createBaseMsgGovBurn();
    message.creator = object.creator ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
};

function createBaseMsgGovBurnResponse(): MsgGovBurnResponse {
  return {};
}

export const MsgGovBurnResponse = {
  encode(
    _: MsgGovBurnResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgGovBurnResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGovBurnResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgGovBurnResponse {
    return {};
  },

  toJSON(_: MsgGovBurnResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgGovBurnResponse>, I>>(
    _: I
  ): MsgGovBurnResponse {
    const message = createBaseMsgGovBurnResponse();
    return message;
  },
};

function createBaseMsgGovSwapExactIn(): MsgGovSwapExactIn {
  return {
    creator: "",
    amountIn: "",
    amountOutMin: "",
    denoms: [],
    fees: [],
    deadline: Long.ZERO,
  };
}

export const MsgGovSwapExactIn = {
  encode(
    message: MsgGovSwapExactIn,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.amountIn !== "") {
      writer.uint32(18).string(message.amountIn);
    }
    if (message.amountOutMin !== "") {
      writer.uint32(26).string(message.amountOutMin);
    }
    for (const v of message.denoms) {
      writer.uint32(34).string(v!);
    }
    writer.uint32(42).fork();
    for (const v of message.fees) {
      writer.int32(v);
    }
    writer.ldelim();
    if (!message.deadline.isZero()) {
      writer.uint32(48).int64(message.deadline);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgGovSwapExactIn {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGovSwapExactIn();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.amountIn = reader.string();
          break;
        case 3:
          message.amountOutMin = reader.string();
          break;
        case 4:
          message.denoms.push(reader.string());
          break;
        case 5:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.fees.push(reader.int32());
            }
          } else {
            message.fees.push(reader.int32());
          }
          break;
        case 6:
          message.deadline = reader.int64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgGovSwapExactIn {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      amountIn: isSet(object.amountIn) ? String(object.amountIn) : "",
      amountOutMin: isSet(object.amountOutMin)
        ? String(object.amountOutMin)
        : "",
      denoms: Array.isArray(object?.denoms)
        ? object.denoms.map((e: any) => String(e))
        : [],
      fees: Array.isArray(object?.fees)
        ? object.fees.map((e: any) => Number(e))
        : [],
      deadline: isSet(object.deadline)
        ? Long.fromValue(object.deadline)
        : Long.ZERO,
    };
  },

  toJSON(message: MsgGovSwapExactIn): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.amountIn !== undefined && (obj.amountIn = message.amountIn);
    message.amountOutMin !== undefined &&
      (obj.amountOutMin = message.amountOutMin);
    if (message.denoms) {
      obj.denoms = message.denoms.map((e) => e);
    } else {
      obj.denoms = [];
    }
    if (message.fees) {
      obj.fees = message.fees.map((e) => Math.round(e));
    } else {
      obj.fees = [];
    }
    message.deadline !== undefined &&
      (obj.deadline = (message.deadline || Long.ZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgGovSwapExactIn>, I>>(
    object: I
  ): MsgGovSwapExactIn {
    const message = createBaseMsgGovSwapExactIn();
    message.creator = object.creator ?? "";
    message.amountIn = object.amountIn ?? "";
    message.amountOutMin = object.amountOutMin ?? "";
    message.denoms = object.denoms?.map((e) => e) || [];
    message.fees = object.fees?.map((e) => e) || [];
    message.deadline =
      object.deadline !== undefined && object.deadline !== null
        ? Long.fromValue(object.deadline)
        : Long.ZERO;
    return message;
  },
};

function createBaseMsgGovSwapExactInResponse(): MsgGovSwapExactInResponse {
  return {};
}

export const MsgGovSwapExactInResponse = {
  encode(
    _: MsgGovSwapExactInResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgGovSwapExactInResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGovSwapExactInResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgGovSwapExactInResponse {
    return {};
  },

  toJSON(_: MsgGovSwapExactInResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgGovSwapExactInResponse>, I>>(
    _: I
  ): MsgGovSwapExactInResponse {
    const message = createBaseMsgGovSwapExactInResponse();
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  CreatePool(
    request: DeepPartial<MsgCreatePool>,
    metadata?: grpc.Metadata
  ): Promise<MsgCreatePoolResponse>;
  CreatePosition(
    request: DeepPartial<MsgCreatePosition>,
    metadata?: grpc.Metadata
  ): Promise<MsgCreatePositionResponse>;
  IncreaseLiquidity(
    request: DeepPartial<MsgIncreaseLiquidity>,
    metadata?: grpc.Metadata
  ): Promise<MsgIncreaseLiquidityResponse>;
  DecreaseLiquidity(
    request: DeepPartial<MsgDecreaseLiquidity>,
    metadata?: grpc.Metadata
  ): Promise<MsgDecreaseLiquidityResponse>;
  Collect(
    request: DeepPartial<MsgCollect>,
    metadata?: grpc.Metadata
  ): Promise<MsgCollectResponse>;
  SwapExactIn(
    request: DeepPartial<MsgSwapExactIn>,
    metadata?: grpc.Metadata
  ): Promise<MsgSwapExactInResponse>;
  SwapExactOut(
    request: DeepPartial<MsgSwapExactOut>,
    metadata?: grpc.Metadata
  ): Promise<MsgSwapExactOutResponse>;
  SetOperator(
    request: DeepPartial<MsgSetOperator>,
    metadata?: grpc.Metadata
  ): Promise<MsgSetOperatorResponse>;
  SetReward(
    request: DeepPartial<MsgSetReward>,
    metadata?: grpc.Metadata
  ): Promise<MsgSetRewardResponse>;
  CollectReward(
    request: DeepPartial<MsgCollectReward>,
    metadata?: grpc.Metadata
  ): Promise<MsgCollectRewardResponse>;
  CollectFeeProtocol(
    request: DeepPartial<MsgCollectFeeProtocol>,
    metadata?: grpc.Metadata
  ): Promise<MsgCollectFeeProtocolResponse>;
  GovBurn(
    request: DeepPartial<MsgGovBurn>,
    metadata?: grpc.Metadata
  ): Promise<MsgGovBurnResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  GovSwapExactIn(
    request: DeepPartial<MsgGovSwapExactIn>,
    metadata?: grpc.Metadata
  ): Promise<MsgGovSwapExactInResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreatePool = this.CreatePool.bind(this);
    this.CreatePosition = this.CreatePosition.bind(this);
    this.IncreaseLiquidity = this.IncreaseLiquidity.bind(this);
    this.DecreaseLiquidity = this.DecreaseLiquidity.bind(this);
    this.Collect = this.Collect.bind(this);
    this.SwapExactIn = this.SwapExactIn.bind(this);
    this.SwapExactOut = this.SwapExactOut.bind(this);
    this.SetOperator = this.SetOperator.bind(this);
    this.SetReward = this.SetReward.bind(this);
    this.CollectReward = this.CollectReward.bind(this);
    this.CollectFeeProtocol = this.CollectFeeProtocol.bind(this);
    this.GovBurn = this.GovBurn.bind(this);
    this.GovSwapExactIn = this.GovSwapExactIn.bind(this);
  }

  CreatePool(
    request: DeepPartial<MsgCreatePool>,
    metadata?: grpc.Metadata
  ): Promise<MsgCreatePoolResponse> {
    return this.rpc.unary(
      MsgCreatePoolDesc,
      MsgCreatePool.fromPartial(request),
      metadata
    );
  }

  CreatePosition(
    request: DeepPartial<MsgCreatePosition>,
    metadata?: grpc.Metadata
  ): Promise<MsgCreatePositionResponse> {
    return this.rpc.unary(
      MsgCreatePositionDesc,
      MsgCreatePosition.fromPartial(request),
      metadata
    );
  }

  IncreaseLiquidity(
    request: DeepPartial<MsgIncreaseLiquidity>,
    metadata?: grpc.Metadata
  ): Promise<MsgIncreaseLiquidityResponse> {
    return this.rpc.unary(
      MsgIncreaseLiquidityDesc,
      MsgIncreaseLiquidity.fromPartial(request),
      metadata
    );
  }

  DecreaseLiquidity(
    request: DeepPartial<MsgDecreaseLiquidity>,
    metadata?: grpc.Metadata
  ): Promise<MsgDecreaseLiquidityResponse> {
    return this.rpc.unary(
      MsgDecreaseLiquidityDesc,
      MsgDecreaseLiquidity.fromPartial(request),
      metadata
    );
  }

  Collect(
    request: DeepPartial<MsgCollect>,
    metadata?: grpc.Metadata
  ): Promise<MsgCollectResponse> {
    return this.rpc.unary(
      MsgCollectDesc,
      MsgCollect.fromPartial(request),
      metadata
    );
  }

  SwapExactIn(
    request: DeepPartial<MsgSwapExactIn>,
    metadata?: grpc.Metadata
  ): Promise<MsgSwapExactInResponse> {
    return this.rpc.unary(
      MsgSwapExactInDesc,
      MsgSwapExactIn.fromPartial(request),
      metadata
    );
  }

  SwapExactOut(
    request: DeepPartial<MsgSwapExactOut>,
    metadata?: grpc.Metadata
  ): Promise<MsgSwapExactOutResponse> {
    return this.rpc.unary(
      MsgSwapExactOutDesc,
      MsgSwapExactOut.fromPartial(request),
      metadata
    );
  }

  SetOperator(
    request: DeepPartial<MsgSetOperator>,
    metadata?: grpc.Metadata
  ): Promise<MsgSetOperatorResponse> {
    return this.rpc.unary(
      MsgSetOperatorDesc,
      MsgSetOperator.fromPartial(request),
      metadata
    );
  }

  SetReward(
    request: DeepPartial<MsgSetReward>,
    metadata?: grpc.Metadata
  ): Promise<MsgSetRewardResponse> {
    return this.rpc.unary(
      MsgSetRewardDesc,
      MsgSetReward.fromPartial(request),
      metadata
    );
  }

  CollectReward(
    request: DeepPartial<MsgCollectReward>,
    metadata?: grpc.Metadata
  ): Promise<MsgCollectRewardResponse> {
    return this.rpc.unary(
      MsgCollectRewardDesc,
      MsgCollectReward.fromPartial(request),
      metadata
    );
  }

  CollectFeeProtocol(
    request: DeepPartial<MsgCollectFeeProtocol>,
    metadata?: grpc.Metadata
  ): Promise<MsgCollectFeeProtocolResponse> {
    return this.rpc.unary(
      MsgCollectFeeProtocolDesc,
      MsgCollectFeeProtocol.fromPartial(request),
      metadata
    );
  }

  GovBurn(
    request: DeepPartial<MsgGovBurn>,
    metadata?: grpc.Metadata
  ): Promise<MsgGovBurnResponse> {
    return this.rpc.unary(
      MsgGovBurnDesc,
      MsgGovBurn.fromPartial(request),
      metadata
    );
  }

  GovSwapExactIn(
    request: DeepPartial<MsgGovSwapExactIn>,
    metadata?: grpc.Metadata
  ): Promise<MsgGovSwapExactInResponse> {
    return this.rpc.unary(
      MsgGovSwapExactInDesc,
      MsgGovSwapExactIn.fromPartial(request),
      metadata
    );
  }
}

export const MsgDesc = {
  serviceName: "sophonlabs.sophon.swap.Msg",
};

export const MsgCreatePoolDesc: UnaryMethodDefinitionish = {
  methodName: "CreatePool",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgCreatePool.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgCreatePoolResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const MsgCreatePositionDesc: UnaryMethodDefinitionish = {
  methodName: "CreatePosition",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgCreatePosition.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgCreatePositionResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const MsgIncreaseLiquidityDesc: UnaryMethodDefinitionish = {
  methodName: "IncreaseLiquidity",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgIncreaseLiquidity.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgIncreaseLiquidityResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const MsgDecreaseLiquidityDesc: UnaryMethodDefinitionish = {
  methodName: "DecreaseLiquidity",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgDecreaseLiquidity.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgDecreaseLiquidityResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const MsgCollectDesc: UnaryMethodDefinitionish = {
  methodName: "Collect",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgCollect.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgCollectResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const MsgSwapExactInDesc: UnaryMethodDefinitionish = {
  methodName: "SwapExactIn",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgSwapExactIn.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgSwapExactInResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const MsgSwapExactOutDesc: UnaryMethodDefinitionish = {
  methodName: "SwapExactOut",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgSwapExactOut.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgSwapExactOutResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const MsgSetOperatorDesc: UnaryMethodDefinitionish = {
  methodName: "SetOperator",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgSetOperator.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgSetOperatorResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const MsgSetRewardDesc: UnaryMethodDefinitionish = {
  methodName: "SetReward",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgSetReward.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgSetRewardResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const MsgCollectRewardDesc: UnaryMethodDefinitionish = {
  methodName: "CollectReward",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgCollectReward.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgCollectRewardResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const MsgCollectFeeProtocolDesc: UnaryMethodDefinitionish = {
  methodName: "CollectFeeProtocol",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgCollectFeeProtocol.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgCollectFeeProtocolResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const MsgGovBurnDesc: UnaryMethodDefinitionish = {
  methodName: "GovBurn",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgGovBurn.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgGovBurnResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const MsgGovSwapExactInDesc: UnaryMethodDefinitionish = {
  methodName: "GovSwapExactIn",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgGovSwapExactIn.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgGovSwapExactInResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

interface UnaryMethodDefinitionishR
  extends grpc.UnaryMethodDefinition<any, any> {
  requestStream: any;
  responseStream: any;
}

type UnaryMethodDefinitionish = UnaryMethodDefinitionishR;

interface Rpc {
  unary<T extends UnaryMethodDefinitionish>(
    methodDesc: T,
    request: any,
    metadata: grpc.Metadata | undefined
  ): Promise<any>;
}

export class GrpcWebImpl {
  private host: string;
  private options: {
    transport?: grpc.TransportFactory;

    debug?: boolean;
    metadata?: grpc.Metadata;
  };

  constructor(
    host: string,
    options: {
      transport?: grpc.TransportFactory;

      debug?: boolean;
      metadata?: grpc.Metadata;
    }
  ) {
    this.host = host;
    this.options = options;
  }

  unary<T extends UnaryMethodDefinitionish>(
    methodDesc: T,
    _request: any,
    metadata: grpc.Metadata | undefined
  ): Promise<any> {
    const request = { ..._request, ...methodDesc.requestType };
    const maybeCombinedMetadata =
      metadata && this.options.metadata
        ? new BrowserHeaders({
            ...this.options?.metadata.headersMap,
            ...metadata?.headersMap,
          })
        : metadata || this.options.metadata;
    return new Promise((resolve, reject) => {
      grpc.unary(methodDesc, {
        request,
        host: this.host,
        metadata: maybeCombinedMetadata,
        transport: this.options.transport,
        debug: this.options.debug,
        onEnd: function (response) {
          if (response.status === grpc.Code.OK) {
            resolve(response.message);
          } else {
            const err = new Error(response.statusMessage) as any;
            err.code = response.status;
            err.metadata = response.trailers;
            reject(err);
          }
        },
      });
    });
  }
}

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Long
  ? string | number | Long
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
        Exclude<keyof I, KeysOfUnion<P>>,
        never
      >;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
