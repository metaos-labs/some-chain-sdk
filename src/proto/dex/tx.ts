/* eslint-disable */
import Long from "long";
import { grpc } from "@improbable-eng/grpc-web";
import * as _m0 from "protobufjs/minimal";
import { BrowserHeaders } from "browser-headers";

export const protobufPackage = "sophonlabs.sophon.dex";

export interface MsgAddLiquidity {
  creator: string;
  token1Addr: string;
  token2Addr: string;
  token1DesiredAmount: string;
  token2DesiredAmount: string;
  token1MinAmount: string;
  token2MinAmount: string;
  deadline: Long;
}

export interface MsgAddLiquidityResponse {
  token1Addr: string;
  token1Amount: string;
  token2Addr: string;
  token2Amount: string;
  liquidity: string;
}

export interface MsgRemoveLiquidity {
  creator: string;
  token1Addr: string;
  token2Addr: string;
  liquidity: string;
  minToken1Amount: string;
  minToken2Amount: string;
  deadline: Long;
}

export interface MsgRemoveLiquidityResponse {
  token1Addr: string;
  token1Amount: string;
  token2Addr: string;
  token2Amount: string;
}

export interface MsgSwapExactTokensForTokens {
  creator: string;
  token1Amount: string;
  minToken2Amount: string;
  path: string[];
  deadline: Long;
}

export interface MsgSwapExactTokensForTokensResponse {}

export interface MsgSwapTokensForExactTokens {
  creator: string;
  maxToken1Amount: string;
  token2Amount: string;
  path: string[];
  deadline: Long;
}

export interface MsgSwapTokensForExactTokensResponse {}

export interface MsgCreateMiningPoolChangePlan {
  creator: string;
  block: Long;
  poolId: string;
  allocPoint: Long;
}

export interface MsgCreateMiningPoolChangePlanResponse {}

export interface MsgUpdateMiningPoolChangePlan {
  creator: string;
  block: Long;
  poolId: string;
  allocPoint: Long;
}

export interface MsgUpdateMiningPoolChangePlanResponse {}

export interface MsgDeleteMiningPoolChangePlan {
  creator: string;
  block: Long;
  poolId: string;
}

export interface MsgDeleteMiningPoolChangePlanResponse {}

export interface MsgWithdrawAllRewards {
  creator: string;
}

export interface MsgWithdrawAllRewardsResponse {
  totalWithdrawReward: string;
  poolRewards: MsgWithdrawPoolRewardResponse[];
}

export interface MsgWithdrawPoolRewardResponse {
  poolId: string;
  withdrawReward: string;
}

export interface MsgWithdrawRewards {
  creator: string;
  token1Addr: string;
  token2Addr: string;
}

export interface MsgSync {
  creator: string;
  token1Addr: string;
  token2Addr: string;
}

export interface MsgSyncResponse {}

export interface MsgGovRemoveLiquidity {
  creator: string;
  token1Addr: string;
  token2Addr: string;
  liquidity: string;
  minToken1Amount: string;
  minToken2Amount: string;
  deadline: Long;
}

export interface MsgGovRemoveLiquidityResponse {}

export interface MsgGovSwapExactTokensForTokens {
  creator: string;
  token1Amount: string;
  minToken2Amount: string;
  path: string[];
  deadline: Long;
}

export interface MsgGovSwapExactTokensForTokensResponse {}

export interface MsgGovBurn {
  creator: string;
  value: string;
}

export interface MsgGovBurnResponse {}

function createBaseMsgAddLiquidity(): MsgAddLiquidity {
  return {
    creator: "",
    token1Addr: "",
    token2Addr: "",
    token1DesiredAmount: "",
    token2DesiredAmount: "",
    token1MinAmount: "",
    token2MinAmount: "",
    deadline: Long.ZERO,
  };
}

export const MsgAddLiquidity = {
  encode(
    message: MsgAddLiquidity,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.token1Addr !== "") {
      writer.uint32(18).string(message.token1Addr);
    }
    if (message.token2Addr !== "") {
      writer.uint32(26).string(message.token2Addr);
    }
    if (message.token1DesiredAmount !== "") {
      writer.uint32(34).string(message.token1DesiredAmount);
    }
    if (message.token2DesiredAmount !== "") {
      writer.uint32(42).string(message.token2DesiredAmount);
    }
    if (message.token1MinAmount !== "") {
      writer.uint32(50).string(message.token1MinAmount);
    }
    if (message.token2MinAmount !== "") {
      writer.uint32(58).string(message.token2MinAmount);
    }
    if (!message.deadline.isZero()) {
      writer.uint32(64).int64(message.deadline);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddLiquidity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddLiquidity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.token1Addr = reader.string();
          break;
        case 3:
          message.token2Addr = reader.string();
          break;
        case 4:
          message.token1DesiredAmount = reader.string();
          break;
        case 5:
          message.token2DesiredAmount = reader.string();
          break;
        case 6:
          message.token1MinAmount = reader.string();
          break;
        case 7:
          message.token2MinAmount = reader.string();
          break;
        case 8:
          message.deadline = reader.int64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAddLiquidity {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      token1Addr: isSet(object.token1Addr) ? String(object.token1Addr) : "",
      token2Addr: isSet(object.token2Addr) ? String(object.token2Addr) : "",
      token1DesiredAmount: isSet(object.token1DesiredAmount)
        ? String(object.token1DesiredAmount)
        : "",
      token2DesiredAmount: isSet(object.token2DesiredAmount)
        ? String(object.token2DesiredAmount)
        : "",
      token1MinAmount: isSet(object.token1MinAmount)
        ? String(object.token1MinAmount)
        : "",
      token2MinAmount: isSet(object.token2MinAmount)
        ? String(object.token2MinAmount)
        : "",
      deadline: isSet(object.deadline)
        ? Long.fromValue(object.deadline)
        : Long.ZERO,
    };
  },

  toJSON(message: MsgAddLiquidity): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.token1Addr !== undefined && (obj.token1Addr = message.token1Addr);
    message.token2Addr !== undefined && (obj.token2Addr = message.token2Addr);
    message.token1DesiredAmount !== undefined &&
      (obj.token1DesiredAmount = message.token1DesiredAmount);
    message.token2DesiredAmount !== undefined &&
      (obj.token2DesiredAmount = message.token2DesiredAmount);
    message.token1MinAmount !== undefined &&
      (obj.token1MinAmount = message.token1MinAmount);
    message.token2MinAmount !== undefined &&
      (obj.token2MinAmount = message.token2MinAmount);
    message.deadline !== undefined &&
      (obj.deadline = (message.deadline || Long.ZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgAddLiquidity>, I>>(
    object: I
  ): MsgAddLiquidity {
    const message = createBaseMsgAddLiquidity();
    message.creator = object.creator ?? "";
    message.token1Addr = object.token1Addr ?? "";
    message.token2Addr = object.token2Addr ?? "";
    message.token1DesiredAmount = object.token1DesiredAmount ?? "";
    message.token2DesiredAmount = object.token2DesiredAmount ?? "";
    message.token1MinAmount = object.token1MinAmount ?? "";
    message.token2MinAmount = object.token2MinAmount ?? "";
    message.deadline =
      object.deadline !== undefined && object.deadline !== null
        ? Long.fromValue(object.deadline)
        : Long.ZERO;
    return message;
  },
};

function createBaseMsgAddLiquidityResponse(): MsgAddLiquidityResponse {
  return {
    token1Addr: "",
    token1Amount: "",
    token2Addr: "",
    token2Amount: "",
    liquidity: "",
  };
}

export const MsgAddLiquidityResponse = {
  encode(
    message: MsgAddLiquidityResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.token1Addr !== "") {
      writer.uint32(10).string(message.token1Addr);
    }
    if (message.token1Amount !== "") {
      writer.uint32(18).string(message.token1Amount);
    }
    if (message.token2Addr !== "") {
      writer.uint32(26).string(message.token2Addr);
    }
    if (message.token2Amount !== "") {
      writer.uint32(34).string(message.token2Amount);
    }
    if (message.liquidity !== "") {
      writer.uint32(42).string(message.liquidity);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgAddLiquidityResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddLiquidityResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.token1Addr = reader.string();
          break;
        case 2:
          message.token1Amount = reader.string();
          break;
        case 3:
          message.token2Addr = reader.string();
          break;
        case 4:
          message.token2Amount = reader.string();
          break;
        case 5:
          message.liquidity = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAddLiquidityResponse {
    return {
      token1Addr: isSet(object.token1Addr) ? String(object.token1Addr) : "",
      token1Amount: isSet(object.token1Amount)
        ? String(object.token1Amount)
        : "",
      token2Addr: isSet(object.token2Addr) ? String(object.token2Addr) : "",
      token2Amount: isSet(object.token2Amount)
        ? String(object.token2Amount)
        : "",
      liquidity: isSet(object.liquidity) ? String(object.liquidity) : "",
    };
  },

  toJSON(message: MsgAddLiquidityResponse): unknown {
    const obj: any = {};
    message.token1Addr !== undefined && (obj.token1Addr = message.token1Addr);
    message.token1Amount !== undefined &&
      (obj.token1Amount = message.token1Amount);
    message.token2Addr !== undefined && (obj.token2Addr = message.token2Addr);
    message.token2Amount !== undefined &&
      (obj.token2Amount = message.token2Amount);
    message.liquidity !== undefined && (obj.liquidity = message.liquidity);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgAddLiquidityResponse>, I>>(
    object: I
  ): MsgAddLiquidityResponse {
    const message = createBaseMsgAddLiquidityResponse();
    message.token1Addr = object.token1Addr ?? "";
    message.token1Amount = object.token1Amount ?? "";
    message.token2Addr = object.token2Addr ?? "";
    message.token2Amount = object.token2Amount ?? "";
    message.liquidity = object.liquidity ?? "";
    return message;
  },
};

function createBaseMsgRemoveLiquidity(): MsgRemoveLiquidity {
  return {
    creator: "",
    token1Addr: "",
    token2Addr: "",
    liquidity: "",
    minToken1Amount: "",
    minToken2Amount: "",
    deadline: Long.ZERO,
  };
}

export const MsgRemoveLiquidity = {
  encode(
    message: MsgRemoveLiquidity,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.token1Addr !== "") {
      writer.uint32(18).string(message.token1Addr);
    }
    if (message.token2Addr !== "") {
      writer.uint32(26).string(message.token2Addr);
    }
    if (message.liquidity !== "") {
      writer.uint32(34).string(message.liquidity);
    }
    if (message.minToken1Amount !== "") {
      writer.uint32(42).string(message.minToken1Amount);
    }
    if (message.minToken2Amount !== "") {
      writer.uint32(50).string(message.minToken2Amount);
    }
    if (!message.deadline.isZero()) {
      writer.uint32(56).int64(message.deadline);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveLiquidity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveLiquidity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.token1Addr = reader.string();
          break;
        case 3:
          message.token2Addr = reader.string();
          break;
        case 4:
          message.liquidity = reader.string();
          break;
        case 5:
          message.minToken1Amount = reader.string();
          break;
        case 6:
          message.minToken2Amount = reader.string();
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

  fromJSON(object: any): MsgRemoveLiquidity {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      token1Addr: isSet(object.token1Addr) ? String(object.token1Addr) : "",
      token2Addr: isSet(object.token2Addr) ? String(object.token2Addr) : "",
      liquidity: isSet(object.liquidity) ? String(object.liquidity) : "",
      minToken1Amount: isSet(object.minToken1Amount)
        ? String(object.minToken1Amount)
        : "",
      minToken2Amount: isSet(object.minToken2Amount)
        ? String(object.minToken2Amount)
        : "",
      deadline: isSet(object.deadline)
        ? Long.fromValue(object.deadline)
        : Long.ZERO,
    };
  },

  toJSON(message: MsgRemoveLiquidity): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.token1Addr !== undefined && (obj.token1Addr = message.token1Addr);
    message.token2Addr !== undefined && (obj.token2Addr = message.token2Addr);
    message.liquidity !== undefined && (obj.liquidity = message.liquidity);
    message.minToken1Amount !== undefined &&
      (obj.minToken1Amount = message.minToken1Amount);
    message.minToken2Amount !== undefined &&
      (obj.minToken2Amount = message.minToken2Amount);
    message.deadline !== undefined &&
      (obj.deadline = (message.deadline || Long.ZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRemoveLiquidity>, I>>(
    object: I
  ): MsgRemoveLiquidity {
    const message = createBaseMsgRemoveLiquidity();
    message.creator = object.creator ?? "";
    message.token1Addr = object.token1Addr ?? "";
    message.token2Addr = object.token2Addr ?? "";
    message.liquidity = object.liquidity ?? "";
    message.minToken1Amount = object.minToken1Amount ?? "";
    message.minToken2Amount = object.minToken2Amount ?? "";
    message.deadline =
      object.deadline !== undefined && object.deadline !== null
        ? Long.fromValue(object.deadline)
        : Long.ZERO;
    return message;
  },
};

function createBaseMsgRemoveLiquidityResponse(): MsgRemoveLiquidityResponse {
  return { token1Addr: "", token1Amount: "", token2Addr: "", token2Amount: "" };
}

export const MsgRemoveLiquidityResponse = {
  encode(
    message: MsgRemoveLiquidityResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.token1Addr !== "") {
      writer.uint32(10).string(message.token1Addr);
    }
    if (message.token1Amount !== "") {
      writer.uint32(18).string(message.token1Amount);
    }
    if (message.token2Addr !== "") {
      writer.uint32(26).string(message.token2Addr);
    }
    if (message.token2Amount !== "") {
      writer.uint32(34).string(message.token2Amount);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgRemoveLiquidityResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveLiquidityResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.token1Addr = reader.string();
          break;
        case 2:
          message.token1Amount = reader.string();
          break;
        case 3:
          message.token2Addr = reader.string();
          break;
        case 4:
          message.token2Amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRemoveLiquidityResponse {
    return {
      token1Addr: isSet(object.token1Addr) ? String(object.token1Addr) : "",
      token1Amount: isSet(object.token1Amount)
        ? String(object.token1Amount)
        : "",
      token2Addr: isSet(object.token2Addr) ? String(object.token2Addr) : "",
      token2Amount: isSet(object.token2Amount)
        ? String(object.token2Amount)
        : "",
    };
  },

  toJSON(message: MsgRemoveLiquidityResponse): unknown {
    const obj: any = {};
    message.token1Addr !== undefined && (obj.token1Addr = message.token1Addr);
    message.token1Amount !== undefined &&
      (obj.token1Amount = message.token1Amount);
    message.token2Addr !== undefined && (obj.token2Addr = message.token2Addr);
    message.token2Amount !== undefined &&
      (obj.token2Amount = message.token2Amount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRemoveLiquidityResponse>, I>>(
    object: I
  ): MsgRemoveLiquidityResponse {
    const message = createBaseMsgRemoveLiquidityResponse();
    message.token1Addr = object.token1Addr ?? "";
    message.token1Amount = object.token1Amount ?? "";
    message.token2Addr = object.token2Addr ?? "";
    message.token2Amount = object.token2Amount ?? "";
    return message;
  },
};

function createBaseMsgSwapExactTokensForTokens(): MsgSwapExactTokensForTokens {
  return {
    creator: "",
    token1Amount: "",
    minToken2Amount: "",
    path: [],
    deadline: Long.ZERO,
  };
}

export const MsgSwapExactTokensForTokens = {
  encode(
    message: MsgSwapExactTokensForTokens,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.token1Amount !== "") {
      writer.uint32(18).string(message.token1Amount);
    }
    if (message.minToken2Amount !== "") {
      writer.uint32(26).string(message.minToken2Amount);
    }
    for (const v of message.path) {
      writer.uint32(34).string(v!);
    }
    if (!message.deadline.isZero()) {
      writer.uint32(40).int64(message.deadline);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSwapExactTokensForTokens {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSwapExactTokensForTokens();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.token1Amount = reader.string();
          break;
        case 3:
          message.minToken2Amount = reader.string();
          break;
        case 4:
          message.path.push(reader.string());
          break;
        case 5:
          message.deadline = reader.int64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSwapExactTokensForTokens {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      token1Amount: isSet(object.token1Amount)
        ? String(object.token1Amount)
        : "",
      minToken2Amount: isSet(object.minToken2Amount)
        ? String(object.minToken2Amount)
        : "",
      path: Array.isArray(object?.path)
        ? object.path.map((e: any) => String(e))
        : [],
      deadline: isSet(object.deadline)
        ? Long.fromValue(object.deadline)
        : Long.ZERO,
    };
  },

  toJSON(message: MsgSwapExactTokensForTokens): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.token1Amount !== undefined &&
      (obj.token1Amount = message.token1Amount);
    message.minToken2Amount !== undefined &&
      (obj.minToken2Amount = message.minToken2Amount);
    if (message.path) {
      obj.path = message.path.map((e) => e);
    } else {
      obj.path = [];
    }
    message.deadline !== undefined &&
      (obj.deadline = (message.deadline || Long.ZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSwapExactTokensForTokens>, I>>(
    object: I
  ): MsgSwapExactTokensForTokens {
    const message = createBaseMsgSwapExactTokensForTokens();
    message.creator = object.creator ?? "";
    message.token1Amount = object.token1Amount ?? "";
    message.minToken2Amount = object.minToken2Amount ?? "";
    message.path = object.path?.map((e) => e) || [];
    message.deadline =
      object.deadline !== undefined && object.deadline !== null
        ? Long.fromValue(object.deadline)
        : Long.ZERO;
    return message;
  },
};

function createBaseMsgSwapExactTokensForTokensResponse(): MsgSwapExactTokensForTokensResponse {
  return {};
}

export const MsgSwapExactTokensForTokensResponse = {
  encode(
    _: MsgSwapExactTokensForTokensResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSwapExactTokensForTokensResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSwapExactTokensForTokensResponse();
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

  fromJSON(_: any): MsgSwapExactTokensForTokensResponse {
    return {};
  },

  toJSON(_: MsgSwapExactTokensForTokensResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<MsgSwapExactTokensForTokensResponse>, I>
  >(_: I): MsgSwapExactTokensForTokensResponse {
    const message = createBaseMsgSwapExactTokensForTokensResponse();
    return message;
  },
};

function createBaseMsgSwapTokensForExactTokens(): MsgSwapTokensForExactTokens {
  return {
    creator: "",
    maxToken1Amount: "",
    token2Amount: "",
    path: [],
    deadline: Long.ZERO,
  };
}

export const MsgSwapTokensForExactTokens = {
  encode(
    message: MsgSwapTokensForExactTokens,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.maxToken1Amount !== "") {
      writer.uint32(18).string(message.maxToken1Amount);
    }
    if (message.token2Amount !== "") {
      writer.uint32(26).string(message.token2Amount);
    }
    for (const v of message.path) {
      writer.uint32(34).string(v!);
    }
    if (!message.deadline.isZero()) {
      writer.uint32(40).int64(message.deadline);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSwapTokensForExactTokens {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSwapTokensForExactTokens();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.maxToken1Amount = reader.string();
          break;
        case 3:
          message.token2Amount = reader.string();
          break;
        case 4:
          message.path.push(reader.string());
          break;
        case 5:
          message.deadline = reader.int64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSwapTokensForExactTokens {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      maxToken1Amount: isSet(object.maxToken1Amount)
        ? String(object.maxToken1Amount)
        : "",
      token2Amount: isSet(object.token2Amount)
        ? String(object.token2Amount)
        : "",
      path: Array.isArray(object?.path)
        ? object.path.map((e: any) => String(e))
        : [],
      deadline: isSet(object.deadline)
        ? Long.fromValue(object.deadline)
        : Long.ZERO,
    };
  },

  toJSON(message: MsgSwapTokensForExactTokens): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.maxToken1Amount !== undefined &&
      (obj.maxToken1Amount = message.maxToken1Amount);
    message.token2Amount !== undefined &&
      (obj.token2Amount = message.token2Amount);
    if (message.path) {
      obj.path = message.path.map((e) => e);
    } else {
      obj.path = [];
    }
    message.deadline !== undefined &&
      (obj.deadline = (message.deadline || Long.ZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSwapTokensForExactTokens>, I>>(
    object: I
  ): MsgSwapTokensForExactTokens {
    const message = createBaseMsgSwapTokensForExactTokens();
    message.creator = object.creator ?? "";
    message.maxToken1Amount = object.maxToken1Amount ?? "";
    message.token2Amount = object.token2Amount ?? "";
    message.path = object.path?.map((e) => e) || [];
    message.deadline =
      object.deadline !== undefined && object.deadline !== null
        ? Long.fromValue(object.deadline)
        : Long.ZERO;
    return message;
  },
};

function createBaseMsgSwapTokensForExactTokensResponse(): MsgSwapTokensForExactTokensResponse {
  return {};
}

export const MsgSwapTokensForExactTokensResponse = {
  encode(
    _: MsgSwapTokensForExactTokensResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSwapTokensForExactTokensResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSwapTokensForExactTokensResponse();
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

  fromJSON(_: any): MsgSwapTokensForExactTokensResponse {
    return {};
  },

  toJSON(_: MsgSwapTokensForExactTokensResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<MsgSwapTokensForExactTokensResponse>, I>
  >(_: I): MsgSwapTokensForExactTokensResponse {
    const message = createBaseMsgSwapTokensForExactTokensResponse();
    return message;
  },
};

function createBaseMsgCreateMiningPoolChangePlan(): MsgCreateMiningPoolChangePlan {
  return { creator: "", block: Long.ZERO, poolId: "", allocPoint: Long.UZERO };
}

export const MsgCreateMiningPoolChangePlan = {
  encode(
    message: MsgCreateMiningPoolChangePlan,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (!message.block.isZero()) {
      writer.uint32(16).int64(message.block);
    }
    if (message.poolId !== "") {
      writer.uint32(26).string(message.poolId);
    }
    if (!message.allocPoint.isZero()) {
      writer.uint32(32).uint64(message.allocPoint);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCreateMiningPoolChangePlan {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateMiningPoolChangePlan();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.block = reader.int64() as Long;
          break;
        case 3:
          message.poolId = reader.string();
          break;
        case 4:
          message.allocPoint = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateMiningPoolChangePlan {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      block: isSet(object.block) ? Long.fromValue(object.block) : Long.ZERO,
      poolId: isSet(object.poolId) ? String(object.poolId) : "",
      allocPoint: isSet(object.allocPoint)
        ? Long.fromValue(object.allocPoint)
        : Long.UZERO,
    };
  },

  toJSON(message: MsgCreateMiningPoolChangePlan): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.block !== undefined &&
      (obj.block = (message.block || Long.ZERO).toString());
    message.poolId !== undefined && (obj.poolId = message.poolId);
    message.allocPoint !== undefined &&
      (obj.allocPoint = (message.allocPoint || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateMiningPoolChangePlan>, I>>(
    object: I
  ): MsgCreateMiningPoolChangePlan {
    const message = createBaseMsgCreateMiningPoolChangePlan();
    message.creator = object.creator ?? "";
    message.block =
      object.block !== undefined && object.block !== null
        ? Long.fromValue(object.block)
        : Long.ZERO;
    message.poolId = object.poolId ?? "";
    message.allocPoint =
      object.allocPoint !== undefined && object.allocPoint !== null
        ? Long.fromValue(object.allocPoint)
        : Long.UZERO;
    return message;
  },
};

function createBaseMsgCreateMiningPoolChangePlanResponse(): MsgCreateMiningPoolChangePlanResponse {
  return {};
}

export const MsgCreateMiningPoolChangePlanResponse = {
  encode(
    _: MsgCreateMiningPoolChangePlanResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCreateMiningPoolChangePlanResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateMiningPoolChangePlanResponse();
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

  fromJSON(_: any): MsgCreateMiningPoolChangePlanResponse {
    return {};
  },

  toJSON(_: MsgCreateMiningPoolChangePlanResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<MsgCreateMiningPoolChangePlanResponse>, I>
  >(_: I): MsgCreateMiningPoolChangePlanResponse {
    const message = createBaseMsgCreateMiningPoolChangePlanResponse();
    return message;
  },
};

function createBaseMsgUpdateMiningPoolChangePlan(): MsgUpdateMiningPoolChangePlan {
  return { creator: "", block: Long.ZERO, poolId: "", allocPoint: Long.UZERO };
}

export const MsgUpdateMiningPoolChangePlan = {
  encode(
    message: MsgUpdateMiningPoolChangePlan,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (!message.block.isZero()) {
      writer.uint32(16).int64(message.block);
    }
    if (message.poolId !== "") {
      writer.uint32(26).string(message.poolId);
    }
    if (!message.allocPoint.isZero()) {
      writer.uint32(32).uint64(message.allocPoint);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUpdateMiningPoolChangePlan {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateMiningPoolChangePlan();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.block = reader.int64() as Long;
          break;
        case 3:
          message.poolId = reader.string();
          break;
        case 4:
          message.allocPoint = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateMiningPoolChangePlan {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      block: isSet(object.block) ? Long.fromValue(object.block) : Long.ZERO,
      poolId: isSet(object.poolId) ? String(object.poolId) : "",
      allocPoint: isSet(object.allocPoint)
        ? Long.fromValue(object.allocPoint)
        : Long.UZERO,
    };
  },

  toJSON(message: MsgUpdateMiningPoolChangePlan): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.block !== undefined &&
      (obj.block = (message.block || Long.ZERO).toString());
    message.poolId !== undefined && (obj.poolId = message.poolId);
    message.allocPoint !== undefined &&
      (obj.allocPoint = (message.allocPoint || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateMiningPoolChangePlan>, I>>(
    object: I
  ): MsgUpdateMiningPoolChangePlan {
    const message = createBaseMsgUpdateMiningPoolChangePlan();
    message.creator = object.creator ?? "";
    message.block =
      object.block !== undefined && object.block !== null
        ? Long.fromValue(object.block)
        : Long.ZERO;
    message.poolId = object.poolId ?? "";
    message.allocPoint =
      object.allocPoint !== undefined && object.allocPoint !== null
        ? Long.fromValue(object.allocPoint)
        : Long.UZERO;
    return message;
  },
};

function createBaseMsgUpdateMiningPoolChangePlanResponse(): MsgUpdateMiningPoolChangePlanResponse {
  return {};
}

export const MsgUpdateMiningPoolChangePlanResponse = {
  encode(
    _: MsgUpdateMiningPoolChangePlanResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUpdateMiningPoolChangePlanResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateMiningPoolChangePlanResponse();
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

  fromJSON(_: any): MsgUpdateMiningPoolChangePlanResponse {
    return {};
  },

  toJSON(_: MsgUpdateMiningPoolChangePlanResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<MsgUpdateMiningPoolChangePlanResponse>, I>
  >(_: I): MsgUpdateMiningPoolChangePlanResponse {
    const message = createBaseMsgUpdateMiningPoolChangePlanResponse();
    return message;
  },
};

function createBaseMsgDeleteMiningPoolChangePlan(): MsgDeleteMiningPoolChangePlan {
  return { creator: "", block: Long.ZERO, poolId: "" };
}

export const MsgDeleteMiningPoolChangePlan = {
  encode(
    message: MsgDeleteMiningPoolChangePlan,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (!message.block.isZero()) {
      writer.uint32(16).int64(message.block);
    }
    if (message.poolId !== "") {
      writer.uint32(26).string(message.poolId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgDeleteMiningPoolChangePlan {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteMiningPoolChangePlan();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.block = reader.int64() as Long;
          break;
        case 3:
          message.poolId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteMiningPoolChangePlan {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      block: isSet(object.block) ? Long.fromValue(object.block) : Long.ZERO,
      poolId: isSet(object.poolId) ? String(object.poolId) : "",
    };
  },

  toJSON(message: MsgDeleteMiningPoolChangePlan): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.block !== undefined &&
      (obj.block = (message.block || Long.ZERO).toString());
    message.poolId !== undefined && (obj.poolId = message.poolId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteMiningPoolChangePlan>, I>>(
    object: I
  ): MsgDeleteMiningPoolChangePlan {
    const message = createBaseMsgDeleteMiningPoolChangePlan();
    message.creator = object.creator ?? "";
    message.block =
      object.block !== undefined && object.block !== null
        ? Long.fromValue(object.block)
        : Long.ZERO;
    message.poolId = object.poolId ?? "";
    return message;
  },
};

function createBaseMsgDeleteMiningPoolChangePlanResponse(): MsgDeleteMiningPoolChangePlanResponse {
  return {};
}

export const MsgDeleteMiningPoolChangePlanResponse = {
  encode(
    _: MsgDeleteMiningPoolChangePlanResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgDeleteMiningPoolChangePlanResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteMiningPoolChangePlanResponse();
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

  fromJSON(_: any): MsgDeleteMiningPoolChangePlanResponse {
    return {};
  },

  toJSON(_: MsgDeleteMiningPoolChangePlanResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<MsgDeleteMiningPoolChangePlanResponse>, I>
  >(_: I): MsgDeleteMiningPoolChangePlanResponse {
    const message = createBaseMsgDeleteMiningPoolChangePlanResponse();
    return message;
  },
};

function createBaseMsgWithdrawAllRewards(): MsgWithdrawAllRewards {
  return { creator: "" };
}

export const MsgWithdrawAllRewards = {
  encode(
    message: MsgWithdrawAllRewards,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgWithdrawAllRewards {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawAllRewards();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgWithdrawAllRewards {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
    };
  },

  toJSON(message: MsgWithdrawAllRewards): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgWithdrawAllRewards>, I>>(
    object: I
  ): MsgWithdrawAllRewards {
    const message = createBaseMsgWithdrawAllRewards();
    message.creator = object.creator ?? "";
    return message;
  },
};

function createBaseMsgWithdrawAllRewardsResponse(): MsgWithdrawAllRewardsResponse {
  return { totalWithdrawReward: "", poolRewards: [] };
}

export const MsgWithdrawAllRewardsResponse = {
  encode(
    message: MsgWithdrawAllRewardsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.totalWithdrawReward !== "") {
      writer.uint32(10).string(message.totalWithdrawReward);
    }
    for (const v of message.poolRewards) {
      MsgWithdrawPoolRewardResponse.encode(
        v!,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgWithdrawAllRewardsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawAllRewardsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalWithdrawReward = reader.string();
          break;
        case 2:
          message.poolRewards.push(
            MsgWithdrawPoolRewardResponse.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgWithdrawAllRewardsResponse {
    return {
      totalWithdrawReward: isSet(object.totalWithdrawReward)
        ? String(object.totalWithdrawReward)
        : "",
      poolRewards: Array.isArray(object?.poolRewards)
        ? object.poolRewards.map((e: any) =>
            MsgWithdrawPoolRewardResponse.fromJSON(e)
          )
        : [],
    };
  },

  toJSON(message: MsgWithdrawAllRewardsResponse): unknown {
    const obj: any = {};
    message.totalWithdrawReward !== undefined &&
      (obj.totalWithdrawReward = message.totalWithdrawReward);
    if (message.poolRewards) {
      obj.poolRewards = message.poolRewards.map((e) =>
        e ? MsgWithdrawPoolRewardResponse.toJSON(e) : undefined
      );
    } else {
      obj.poolRewards = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgWithdrawAllRewardsResponse>, I>>(
    object: I
  ): MsgWithdrawAllRewardsResponse {
    const message = createBaseMsgWithdrawAllRewardsResponse();
    message.totalWithdrawReward = object.totalWithdrawReward ?? "";
    message.poolRewards =
      object.poolRewards?.map((e) =>
        MsgWithdrawPoolRewardResponse.fromPartial(e)
      ) || [];
    return message;
  },
};

function createBaseMsgWithdrawPoolRewardResponse(): MsgWithdrawPoolRewardResponse {
  return { poolId: "", withdrawReward: "" };
}

export const MsgWithdrawPoolRewardResponse = {
  encode(
    message: MsgWithdrawPoolRewardResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.poolId !== "") {
      writer.uint32(10).string(message.poolId);
    }
    if (message.withdrawReward !== "") {
      writer.uint32(18).string(message.withdrawReward);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgWithdrawPoolRewardResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawPoolRewardResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.string();
          break;
        case 2:
          message.withdrawReward = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgWithdrawPoolRewardResponse {
    return {
      poolId: isSet(object.poolId) ? String(object.poolId) : "",
      withdrawReward: isSet(object.withdrawReward)
        ? String(object.withdrawReward)
        : "",
    };
  },

  toJSON(message: MsgWithdrawPoolRewardResponse): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = message.poolId);
    message.withdrawReward !== undefined &&
      (obj.withdrawReward = message.withdrawReward);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgWithdrawPoolRewardResponse>, I>>(
    object: I
  ): MsgWithdrawPoolRewardResponse {
    const message = createBaseMsgWithdrawPoolRewardResponse();
    message.poolId = object.poolId ?? "";
    message.withdrawReward = object.withdrawReward ?? "";
    return message;
  },
};

function createBaseMsgWithdrawRewards(): MsgWithdrawRewards {
  return { creator: "", token1Addr: "", token2Addr: "" };
}

export const MsgWithdrawRewards = {
  encode(
    message: MsgWithdrawRewards,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.token1Addr !== "") {
      writer.uint32(18).string(message.token1Addr);
    }
    if (message.token2Addr !== "") {
      writer.uint32(26).string(message.token2Addr);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawRewards {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawRewards();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.token1Addr = reader.string();
          break;
        case 3:
          message.token2Addr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgWithdrawRewards {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      token1Addr: isSet(object.token1Addr) ? String(object.token1Addr) : "",
      token2Addr: isSet(object.token2Addr) ? String(object.token2Addr) : "",
    };
  },

  toJSON(message: MsgWithdrawRewards): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.token1Addr !== undefined && (obj.token1Addr = message.token1Addr);
    message.token2Addr !== undefined && (obj.token2Addr = message.token2Addr);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgWithdrawRewards>, I>>(
    object: I
  ): MsgWithdrawRewards {
    const message = createBaseMsgWithdrawRewards();
    message.creator = object.creator ?? "";
    message.token1Addr = object.token1Addr ?? "";
    message.token2Addr = object.token2Addr ?? "";
    return message;
  },
};

function createBaseMsgSync(): MsgSync {
  return { creator: "", token1Addr: "", token2Addr: "" };
}

export const MsgSync = {
  encode(
    message: MsgSync,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.token1Addr !== "") {
      writer.uint32(18).string(message.token1Addr);
    }
    if (message.token2Addr !== "") {
      writer.uint32(26).string(message.token2Addr);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSync {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSync();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.token1Addr = reader.string();
          break;
        case 3:
          message.token2Addr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSync {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      token1Addr: isSet(object.token1Addr) ? String(object.token1Addr) : "",
      token2Addr: isSet(object.token2Addr) ? String(object.token2Addr) : "",
    };
  },

  toJSON(message: MsgSync): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.token1Addr !== undefined && (obj.token1Addr = message.token1Addr);
    message.token2Addr !== undefined && (obj.token2Addr = message.token2Addr);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSync>, I>>(object: I): MsgSync {
    const message = createBaseMsgSync();
    message.creator = object.creator ?? "";
    message.token1Addr = object.token1Addr ?? "";
    message.token2Addr = object.token2Addr ?? "";
    return message;
  },
};

function createBaseMsgSyncResponse(): MsgSyncResponse {
  return {};
}

export const MsgSyncResponse = {
  encode(
    _: MsgSyncResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSyncResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSyncResponse();
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

  fromJSON(_: any): MsgSyncResponse {
    return {};
  },

  toJSON(_: MsgSyncResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSyncResponse>, I>>(
    _: I
  ): MsgSyncResponse {
    const message = createBaseMsgSyncResponse();
    return message;
  },
};

function createBaseMsgGovRemoveLiquidity(): MsgGovRemoveLiquidity {
  return {
    creator: "",
    token1Addr: "",
    token2Addr: "",
    liquidity: "",
    minToken1Amount: "",
    minToken2Amount: "",
    deadline: Long.ZERO,
  };
}

export const MsgGovRemoveLiquidity = {
  encode(
    message: MsgGovRemoveLiquidity,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.token1Addr !== "") {
      writer.uint32(18).string(message.token1Addr);
    }
    if (message.token2Addr !== "") {
      writer.uint32(26).string(message.token2Addr);
    }
    if (message.liquidity !== "") {
      writer.uint32(34).string(message.liquidity);
    }
    if (message.minToken1Amount !== "") {
      writer.uint32(42).string(message.minToken1Amount);
    }
    if (message.minToken2Amount !== "") {
      writer.uint32(50).string(message.minToken2Amount);
    }
    if (!message.deadline.isZero()) {
      writer.uint32(56).int64(message.deadline);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgGovRemoveLiquidity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGovRemoveLiquidity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.token1Addr = reader.string();
          break;
        case 3:
          message.token2Addr = reader.string();
          break;
        case 4:
          message.liquidity = reader.string();
          break;
        case 5:
          message.minToken1Amount = reader.string();
          break;
        case 6:
          message.minToken2Amount = reader.string();
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

  fromJSON(object: any): MsgGovRemoveLiquidity {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      token1Addr: isSet(object.token1Addr) ? String(object.token1Addr) : "",
      token2Addr: isSet(object.token2Addr) ? String(object.token2Addr) : "",
      liquidity: isSet(object.liquidity) ? String(object.liquidity) : "",
      minToken1Amount: isSet(object.minToken1Amount)
        ? String(object.minToken1Amount)
        : "",
      minToken2Amount: isSet(object.minToken2Amount)
        ? String(object.minToken2Amount)
        : "",
      deadline: isSet(object.deadline)
        ? Long.fromValue(object.deadline)
        : Long.ZERO,
    };
  },

  toJSON(message: MsgGovRemoveLiquidity): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.token1Addr !== undefined && (obj.token1Addr = message.token1Addr);
    message.token2Addr !== undefined && (obj.token2Addr = message.token2Addr);
    message.liquidity !== undefined && (obj.liquidity = message.liquidity);
    message.minToken1Amount !== undefined &&
      (obj.minToken1Amount = message.minToken1Amount);
    message.minToken2Amount !== undefined &&
      (obj.minToken2Amount = message.minToken2Amount);
    message.deadline !== undefined &&
      (obj.deadline = (message.deadline || Long.ZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgGovRemoveLiquidity>, I>>(
    object: I
  ): MsgGovRemoveLiquidity {
    const message = createBaseMsgGovRemoveLiquidity();
    message.creator = object.creator ?? "";
    message.token1Addr = object.token1Addr ?? "";
    message.token2Addr = object.token2Addr ?? "";
    message.liquidity = object.liquidity ?? "";
    message.minToken1Amount = object.minToken1Amount ?? "";
    message.minToken2Amount = object.minToken2Amount ?? "";
    message.deadline =
      object.deadline !== undefined && object.deadline !== null
        ? Long.fromValue(object.deadline)
        : Long.ZERO;
    return message;
  },
};

function createBaseMsgGovRemoveLiquidityResponse(): MsgGovRemoveLiquidityResponse {
  return {};
}

export const MsgGovRemoveLiquidityResponse = {
  encode(
    _: MsgGovRemoveLiquidityResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgGovRemoveLiquidityResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGovRemoveLiquidityResponse();
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

  fromJSON(_: any): MsgGovRemoveLiquidityResponse {
    return {};
  },

  toJSON(_: MsgGovRemoveLiquidityResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgGovRemoveLiquidityResponse>, I>>(
    _: I
  ): MsgGovRemoveLiquidityResponse {
    const message = createBaseMsgGovRemoveLiquidityResponse();
    return message;
  },
};

function createBaseMsgGovSwapExactTokensForTokens(): MsgGovSwapExactTokensForTokens {
  return {
    creator: "",
    token1Amount: "",
    minToken2Amount: "",
    path: [],
    deadline: Long.ZERO,
  };
}

export const MsgGovSwapExactTokensForTokens = {
  encode(
    message: MsgGovSwapExactTokensForTokens,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.token1Amount !== "") {
      writer.uint32(18).string(message.token1Amount);
    }
    if (message.minToken2Amount !== "") {
      writer.uint32(26).string(message.minToken2Amount);
    }
    for (const v of message.path) {
      writer.uint32(34).string(v!);
    }
    if (!message.deadline.isZero()) {
      writer.uint32(40).int64(message.deadline);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgGovSwapExactTokensForTokens {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGovSwapExactTokensForTokens();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.token1Amount = reader.string();
          break;
        case 3:
          message.minToken2Amount = reader.string();
          break;
        case 4:
          message.path.push(reader.string());
          break;
        case 5:
          message.deadline = reader.int64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgGovSwapExactTokensForTokens {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      token1Amount: isSet(object.token1Amount)
        ? String(object.token1Amount)
        : "",
      minToken2Amount: isSet(object.minToken2Amount)
        ? String(object.minToken2Amount)
        : "",
      path: Array.isArray(object?.path)
        ? object.path.map((e: any) => String(e))
        : [],
      deadline: isSet(object.deadline)
        ? Long.fromValue(object.deadline)
        : Long.ZERO,
    };
  },

  toJSON(message: MsgGovSwapExactTokensForTokens): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.token1Amount !== undefined &&
      (obj.token1Amount = message.token1Amount);
    message.minToken2Amount !== undefined &&
      (obj.minToken2Amount = message.minToken2Amount);
    if (message.path) {
      obj.path = message.path.map((e) => e);
    } else {
      obj.path = [];
    }
    message.deadline !== undefined &&
      (obj.deadline = (message.deadline || Long.ZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgGovSwapExactTokensForTokens>, I>>(
    object: I
  ): MsgGovSwapExactTokensForTokens {
    const message = createBaseMsgGovSwapExactTokensForTokens();
    message.creator = object.creator ?? "";
    message.token1Amount = object.token1Amount ?? "";
    message.minToken2Amount = object.minToken2Amount ?? "";
    message.path = object.path?.map((e) => e) || [];
    message.deadline =
      object.deadline !== undefined && object.deadline !== null
        ? Long.fromValue(object.deadline)
        : Long.ZERO;
    return message;
  },
};

function createBaseMsgGovSwapExactTokensForTokensResponse(): MsgGovSwapExactTokensForTokensResponse {
  return {};
}

export const MsgGovSwapExactTokensForTokensResponse = {
  encode(
    _: MsgGovSwapExactTokensForTokensResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgGovSwapExactTokensForTokensResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGovSwapExactTokensForTokensResponse();
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

  fromJSON(_: any): MsgGovSwapExactTokensForTokensResponse {
    return {};
  },

  toJSON(_: MsgGovSwapExactTokensForTokensResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<MsgGovSwapExactTokensForTokensResponse>, I>
  >(_: I): MsgGovSwapExactTokensForTokensResponse {
    const message = createBaseMsgGovSwapExactTokensForTokensResponse();
    return message;
  },
};

function createBaseMsgGovBurn(): MsgGovBurn {
  return { creator: "", value: "" };
}

export const MsgGovBurn = {
  encode(
    message: MsgGovBurn,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
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
          message.value = reader.string();
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
      value: isSet(object.value) ? String(object.value) : "",
    };
  },

  toJSON(message: MsgGovBurn): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgGovBurn>, I>>(
    object: I
  ): MsgGovBurn {
    const message = createBaseMsgGovBurn();
    message.creator = object.creator ?? "";
    message.value = object.value ?? "";
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

/** Msg defines the Msg service. */
export interface Msg {
  AddLiquidity(
    request: DeepPartial<MsgAddLiquidity>,
    metadata?: grpc.Metadata
  ): Promise<MsgAddLiquidityResponse>;
  RemoveLiquidity(
    request: DeepPartial<MsgRemoveLiquidity>,
    metadata?: grpc.Metadata
  ): Promise<MsgRemoveLiquidityResponse>;
  SwapExactTokensForTokens(
    request: DeepPartial<MsgSwapExactTokensForTokens>,
    metadata?: grpc.Metadata
  ): Promise<MsgSwapExactTokensForTokensResponse>;
  SwapTokensForExactTokens(
    request: DeepPartial<MsgSwapTokensForExactTokens>,
    metadata?: grpc.Metadata
  ): Promise<MsgSwapTokensForExactTokensResponse>;
  CreateMiningPoolChangePlan(
    request: DeepPartial<MsgCreateMiningPoolChangePlan>,
    metadata?: grpc.Metadata
  ): Promise<MsgCreateMiningPoolChangePlanResponse>;
  UpdateMiningPoolChangePlan(
    request: DeepPartial<MsgUpdateMiningPoolChangePlan>,
    metadata?: grpc.Metadata
  ): Promise<MsgUpdateMiningPoolChangePlanResponse>;
  DeleteMiningPoolChangePlan(
    request: DeepPartial<MsgDeleteMiningPoolChangePlan>,
    metadata?: grpc.Metadata
  ): Promise<MsgDeleteMiningPoolChangePlanResponse>;
  WithdrawAllRewards(
    request: DeepPartial<MsgWithdrawAllRewards>,
    metadata?: grpc.Metadata
  ): Promise<MsgWithdrawAllRewardsResponse>;
  WithdrawRewards(
    request: DeepPartial<MsgWithdrawRewards>,
    metadata?: grpc.Metadata
  ): Promise<MsgWithdrawPoolRewardResponse>;
  Sync(
    request: DeepPartial<MsgSync>,
    metadata?: grpc.Metadata
  ): Promise<MsgSyncResponse>;
  GovRemoveLiquidity(
    request: DeepPartial<MsgGovRemoveLiquidity>,
    metadata?: grpc.Metadata
  ): Promise<MsgGovRemoveLiquidityResponse>;
  GovSwapExactTokensForTokens(
    request: DeepPartial<MsgGovSwapExactTokensForTokens>,
    metadata?: grpc.Metadata
  ): Promise<MsgGovSwapExactTokensForTokensResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  GovBurn(
    request: DeepPartial<MsgGovBurn>,
    metadata?: grpc.Metadata
  ): Promise<MsgGovBurnResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.AddLiquidity = this.AddLiquidity.bind(this);
    this.RemoveLiquidity = this.RemoveLiquidity.bind(this);
    this.SwapExactTokensForTokens = this.SwapExactTokensForTokens.bind(this);
    this.SwapTokensForExactTokens = this.SwapTokensForExactTokens.bind(this);
    this.CreateMiningPoolChangePlan =
      this.CreateMiningPoolChangePlan.bind(this);
    this.UpdateMiningPoolChangePlan =
      this.UpdateMiningPoolChangePlan.bind(this);
    this.DeleteMiningPoolChangePlan =
      this.DeleteMiningPoolChangePlan.bind(this);
    this.WithdrawAllRewards = this.WithdrawAllRewards.bind(this);
    this.WithdrawRewards = this.WithdrawRewards.bind(this);
    this.Sync = this.Sync.bind(this);
    this.GovRemoveLiquidity = this.GovRemoveLiquidity.bind(this);
    this.GovSwapExactTokensForTokens =
      this.GovSwapExactTokensForTokens.bind(this);
    this.GovBurn = this.GovBurn.bind(this);
  }

  AddLiquidity(
    request: DeepPartial<MsgAddLiquidity>,
    metadata?: grpc.Metadata
  ): Promise<MsgAddLiquidityResponse> {
    return this.rpc.unary(
      MsgAddLiquidityDesc,
      MsgAddLiquidity.fromPartial(request),
      metadata
    );
  }

  RemoveLiquidity(
    request: DeepPartial<MsgRemoveLiquidity>,
    metadata?: grpc.Metadata
  ): Promise<MsgRemoveLiquidityResponse> {
    return this.rpc.unary(
      MsgRemoveLiquidityDesc,
      MsgRemoveLiquidity.fromPartial(request),
      metadata
    );
  }

  SwapExactTokensForTokens(
    request: DeepPartial<MsgSwapExactTokensForTokens>,
    metadata?: grpc.Metadata
  ): Promise<MsgSwapExactTokensForTokensResponse> {
    return this.rpc.unary(
      MsgSwapExactTokensForTokensDesc,
      MsgSwapExactTokensForTokens.fromPartial(request),
      metadata
    );
  }

  SwapTokensForExactTokens(
    request: DeepPartial<MsgSwapTokensForExactTokens>,
    metadata?: grpc.Metadata
  ): Promise<MsgSwapTokensForExactTokensResponse> {
    return this.rpc.unary(
      MsgSwapTokensForExactTokensDesc,
      MsgSwapTokensForExactTokens.fromPartial(request),
      metadata
    );
  }

  CreateMiningPoolChangePlan(
    request: DeepPartial<MsgCreateMiningPoolChangePlan>,
    metadata?: grpc.Metadata
  ): Promise<MsgCreateMiningPoolChangePlanResponse> {
    return this.rpc.unary(
      MsgCreateMiningPoolChangePlanDesc,
      MsgCreateMiningPoolChangePlan.fromPartial(request),
      metadata
    );
  }

  UpdateMiningPoolChangePlan(
    request: DeepPartial<MsgUpdateMiningPoolChangePlan>,
    metadata?: grpc.Metadata
  ): Promise<MsgUpdateMiningPoolChangePlanResponse> {
    return this.rpc.unary(
      MsgUpdateMiningPoolChangePlanDesc,
      MsgUpdateMiningPoolChangePlan.fromPartial(request),
      metadata
    );
  }

  DeleteMiningPoolChangePlan(
    request: DeepPartial<MsgDeleteMiningPoolChangePlan>,
    metadata?: grpc.Metadata
  ): Promise<MsgDeleteMiningPoolChangePlanResponse> {
    return this.rpc.unary(
      MsgDeleteMiningPoolChangePlanDesc,
      MsgDeleteMiningPoolChangePlan.fromPartial(request),
      metadata
    );
  }

  WithdrawAllRewards(
    request: DeepPartial<MsgWithdrawAllRewards>,
    metadata?: grpc.Metadata
  ): Promise<MsgWithdrawAllRewardsResponse> {
    return this.rpc.unary(
      MsgWithdrawAllRewardsDesc,
      MsgWithdrawAllRewards.fromPartial(request),
      metadata
    );
  }

  WithdrawRewards(
    request: DeepPartial<MsgWithdrawRewards>,
    metadata?: grpc.Metadata
  ): Promise<MsgWithdrawPoolRewardResponse> {
    return this.rpc.unary(
      MsgWithdrawRewardsDesc,
      MsgWithdrawRewards.fromPartial(request),
      metadata
    );
  }

  Sync(
    request: DeepPartial<MsgSync>,
    metadata?: grpc.Metadata
  ): Promise<MsgSyncResponse> {
    return this.rpc.unary(MsgSyncDesc, MsgSync.fromPartial(request), metadata);
  }

  GovRemoveLiquidity(
    request: DeepPartial<MsgGovRemoveLiquidity>,
    metadata?: grpc.Metadata
  ): Promise<MsgGovRemoveLiquidityResponse> {
    return this.rpc.unary(
      MsgGovRemoveLiquidityDesc,
      MsgGovRemoveLiquidity.fromPartial(request),
      metadata
    );
  }

  GovSwapExactTokensForTokens(
    request: DeepPartial<MsgGovSwapExactTokensForTokens>,
    metadata?: grpc.Metadata
  ): Promise<MsgGovSwapExactTokensForTokensResponse> {
    return this.rpc.unary(
      MsgGovSwapExactTokensForTokensDesc,
      MsgGovSwapExactTokensForTokens.fromPartial(request),
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
}

export const MsgDesc = {
  serviceName: "sophonlabs.sophon.dex.Msg",
};

export const MsgAddLiquidityDesc: UnaryMethodDefinitionish = {
  methodName: "AddLiquidity",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgAddLiquidity.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgAddLiquidityResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const MsgRemoveLiquidityDesc: UnaryMethodDefinitionish = {
  methodName: "RemoveLiquidity",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgRemoveLiquidity.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgRemoveLiquidityResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const MsgSwapExactTokensForTokensDesc: UnaryMethodDefinitionish = {
  methodName: "SwapExactTokensForTokens",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgSwapExactTokensForTokens.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgSwapExactTokensForTokensResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const MsgSwapTokensForExactTokensDesc: UnaryMethodDefinitionish = {
  methodName: "SwapTokensForExactTokens",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgSwapTokensForExactTokens.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgSwapTokensForExactTokensResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const MsgCreateMiningPoolChangePlanDesc: UnaryMethodDefinitionish = {
  methodName: "CreateMiningPoolChangePlan",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgCreateMiningPoolChangePlan.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgCreateMiningPoolChangePlanResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const MsgUpdateMiningPoolChangePlanDesc: UnaryMethodDefinitionish = {
  methodName: "UpdateMiningPoolChangePlan",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgUpdateMiningPoolChangePlan.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgUpdateMiningPoolChangePlanResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const MsgDeleteMiningPoolChangePlanDesc: UnaryMethodDefinitionish = {
  methodName: "DeleteMiningPoolChangePlan",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgDeleteMiningPoolChangePlan.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgDeleteMiningPoolChangePlanResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const MsgWithdrawAllRewardsDesc: UnaryMethodDefinitionish = {
  methodName: "WithdrawAllRewards",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgWithdrawAllRewards.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgWithdrawAllRewardsResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const MsgWithdrawRewardsDesc: UnaryMethodDefinitionish = {
  methodName: "WithdrawRewards",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgWithdrawRewards.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgWithdrawPoolRewardResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const MsgSyncDesc: UnaryMethodDefinitionish = {
  methodName: "Sync",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgSync.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgSyncResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const MsgGovRemoveLiquidityDesc: UnaryMethodDefinitionish = {
  methodName: "GovRemoveLiquidity",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgGovRemoveLiquidity.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgGovRemoveLiquidityResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const MsgGovSwapExactTokensForTokensDesc: UnaryMethodDefinitionish = {
  methodName: "GovSwapExactTokensForTokens",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgGovSwapExactTokensForTokens.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgGovSwapExactTokensForTokensResponse.decode(data),
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
