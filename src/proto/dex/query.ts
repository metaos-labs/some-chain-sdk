/* eslint-disable */
import Long from "long";
import { grpc } from "@improbable-eng/grpc-web";
import * as _m0 from "protobufjs/minimal";
import { SwapPoolInfo } from "./swap_pool";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";
import { MiningPoolChangePlan } from "./mining_pool_change_plan";
import { BrowserHeaders } from "browser-headers";

export const protobufPackage = "sophonlabs.sophon.dex";

export interface QueryPoolMetadataRequest {
  token1Addr: string;
  token2Addr: string;
}

export interface QueryPoolMetadataResponse {
  swapPool?: SwapPoolInfo;
  liquidity: string;
}

export interface QueryAccountPoolMetadataResponse {
  poolMetadata?: QueryPoolMetadataResponse;
  accountLiquidity: string;
}

export interface QueryTryAddLiquidityRequest {
  creator: string;
  token1Addr: string;
  token2Addr: string;
  token1DesiredAmount: string;
  token2DesiredAmount: string;
  token1MinAmount: string;
  token2MinAmount: string;
}

export interface QueryTryAddLiquidityResponse {
  mintLiquidityAmount: string;
  depositToken1Amount: string;
  depositToken2Amount: string;
}

export interface QueryTryRemoveLiquidityRequest {
  creator: string;
  token1Addr: string;
  token2Addr: string;
  liquidity: string;
  minToken1Amount: string;
  minToken2Amount: string;
}

export interface QueryTryRemoveLiquidityResponse {
  token1WithdrawAmount: string;
  token2WithdrawAmount: string;
}

export interface QueryPoolMetadataAllRequest {
  pagination?: PageRequest;
}

export interface QueryPoolMetadataAllResponse {
  pagination?: PageResponse;
  poolMetadatas: QueryPoolMetadataResponse[];
}

export interface QueryAccountPoolMetadataRequest {
  accountAddr: string;
  token1Addr: string;
  token2Addr: string;
}

export interface QueryAccountPoolMetadataAllRequest {
  accountAddr: string;
}

export interface QueryAccountPoolMetadataAllResponse {
  accountPoolMetadatas: QueryAccountPoolMetadataResponse[];
}

export interface QueryGetMiningPoolChangePlanRequest {
  block: Long;
  poolId: string;
}

export interface QueryGetMiningPoolChangePlanResponse {
  miningPoolChangePlan?: MiningPoolChangePlan;
}

export interface QueryAllMiningPoolChangePlanRequest {
  block: Long;
  pagination?: PageRequest;
}

export interface QueryAllMiningPoolChangePlanResponse {
  miningPoolChangePlan: MiningPoolChangePlan[];
  pagination?: PageResponse;
}

export interface QueryRewardsRequest {
  accountAddr: string;
}

export interface QueryRewardsResponse {
  totalReward: string;
  rewards: QueryRewardResponse[];
}

export interface QueryRewardResponse {
  poolId: string;
  reward: string;
}

export interface QueryMiningPoolsAllRequest {
  onlyLive: boolean;
}

export interface QueryMiningPoolsAllResponse {
  totalAllocPoint: Long;
  miningPools: QueryMiningPoolResponse[];
}

export interface QueryMiningPoolResponse {
  allocPoint: Long;
  swapPool?: SwapPoolInfo;
}

function createBaseQueryPoolMetadataRequest(): QueryPoolMetadataRequest {
  return { token1Addr: "", token2Addr: "" };
}

export const QueryPoolMetadataRequest = {
  encode(
    message: QueryPoolMetadataRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.token1Addr !== "") {
      writer.uint32(10).string(message.token1Addr);
    }
    if (message.token2Addr !== "") {
      writer.uint32(18).string(message.token2Addr);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryPoolMetadataRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolMetadataRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.token1Addr = reader.string();
          break;
        case 2:
          message.token2Addr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryPoolMetadataRequest {
    return {
      token1Addr: isSet(object.token1Addr) ? String(object.token1Addr) : "",
      token2Addr: isSet(object.token2Addr) ? String(object.token2Addr) : "",
    };
  },

  toJSON(message: QueryPoolMetadataRequest): unknown {
    const obj: any = {};
    message.token1Addr !== undefined && (obj.token1Addr = message.token1Addr);
    message.token2Addr !== undefined && (obj.token2Addr = message.token2Addr);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryPoolMetadataRequest>, I>>(
    object: I
  ): QueryPoolMetadataRequest {
    const message = createBaseQueryPoolMetadataRequest();
    message.token1Addr = object.token1Addr ?? "";
    message.token2Addr = object.token2Addr ?? "";
    return message;
  },
};

function createBaseQueryPoolMetadataResponse(): QueryPoolMetadataResponse {
  return { swapPool: undefined, liquidity: "" };
}

export const QueryPoolMetadataResponse = {
  encode(
    message: QueryPoolMetadataResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.swapPool !== undefined) {
      SwapPoolInfo.encode(message.swapPool, writer.uint32(10).fork()).ldelim();
    }
    if (message.liquidity !== "") {
      writer.uint32(18).string(message.liquidity);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryPoolMetadataResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolMetadataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.swapPool = SwapPoolInfo.decode(reader, reader.uint32());
          break;
        case 2:
          message.liquidity = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryPoolMetadataResponse {
    return {
      swapPool: isSet(object.swapPool)
        ? SwapPoolInfo.fromJSON(object.swapPool)
        : undefined,
      liquidity: isSet(object.liquidity) ? String(object.liquidity) : "",
    };
  },

  toJSON(message: QueryPoolMetadataResponse): unknown {
    const obj: any = {};
    message.swapPool !== undefined &&
      (obj.swapPool = message.swapPool
        ? SwapPoolInfo.toJSON(message.swapPool)
        : undefined);
    message.liquidity !== undefined && (obj.liquidity = message.liquidity);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryPoolMetadataResponse>, I>>(
    object: I
  ): QueryPoolMetadataResponse {
    const message = createBaseQueryPoolMetadataResponse();
    message.swapPool =
      object.swapPool !== undefined && object.swapPool !== null
        ? SwapPoolInfo.fromPartial(object.swapPool)
        : undefined;
    message.liquidity = object.liquidity ?? "";
    return message;
  },
};

function createBaseQueryAccountPoolMetadataResponse(): QueryAccountPoolMetadataResponse {
  return { poolMetadata: undefined, accountLiquidity: "" };
}

export const QueryAccountPoolMetadataResponse = {
  encode(
    message: QueryAccountPoolMetadataResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.poolMetadata !== undefined) {
      QueryPoolMetadataResponse.encode(
        message.poolMetadata,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.accountLiquidity !== "") {
      writer.uint32(18).string(message.accountLiquidity);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAccountPoolMetadataResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountPoolMetadataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolMetadata = QueryPoolMetadataResponse.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.accountLiquidity = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAccountPoolMetadataResponse {
    return {
      poolMetadata: isSet(object.poolMetadata)
        ? QueryPoolMetadataResponse.fromJSON(object.poolMetadata)
        : undefined,
      accountLiquidity: isSet(object.accountLiquidity)
        ? String(object.accountLiquidity)
        : "",
    };
  },

  toJSON(message: QueryAccountPoolMetadataResponse): unknown {
    const obj: any = {};
    message.poolMetadata !== undefined &&
      (obj.poolMetadata = message.poolMetadata
        ? QueryPoolMetadataResponse.toJSON(message.poolMetadata)
        : undefined);
    message.accountLiquidity !== undefined &&
      (obj.accountLiquidity = message.accountLiquidity);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryAccountPoolMetadataResponse>, I>
  >(object: I): QueryAccountPoolMetadataResponse {
    const message = createBaseQueryAccountPoolMetadataResponse();
    message.poolMetadata =
      object.poolMetadata !== undefined && object.poolMetadata !== null
        ? QueryPoolMetadataResponse.fromPartial(object.poolMetadata)
        : undefined;
    message.accountLiquidity = object.accountLiquidity ?? "";
    return message;
  },
};

function createBaseQueryTryAddLiquidityRequest(): QueryTryAddLiquidityRequest {
  return {
    creator: "",
    token1Addr: "",
    token2Addr: "",
    token1DesiredAmount: "",
    token2DesiredAmount: "",
    token1MinAmount: "",
    token2MinAmount: "",
  };
}

export const QueryTryAddLiquidityRequest = {
  encode(
    message: QueryTryAddLiquidityRequest,
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
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryTryAddLiquidityRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTryAddLiquidityRequest();
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTryAddLiquidityRequest {
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
    };
  },

  toJSON(message: QueryTryAddLiquidityRequest): unknown {
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
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryTryAddLiquidityRequest>, I>>(
    object: I
  ): QueryTryAddLiquidityRequest {
    const message = createBaseQueryTryAddLiquidityRequest();
    message.creator = object.creator ?? "";
    message.token1Addr = object.token1Addr ?? "";
    message.token2Addr = object.token2Addr ?? "";
    message.token1DesiredAmount = object.token1DesiredAmount ?? "";
    message.token2DesiredAmount = object.token2DesiredAmount ?? "";
    message.token1MinAmount = object.token1MinAmount ?? "";
    message.token2MinAmount = object.token2MinAmount ?? "";
    return message;
  },
};

function createBaseQueryTryAddLiquidityResponse(): QueryTryAddLiquidityResponse {
  return {
    mintLiquidityAmount: "",
    depositToken1Amount: "",
    depositToken2Amount: "",
  };
}

export const QueryTryAddLiquidityResponse = {
  encode(
    message: QueryTryAddLiquidityResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.mintLiquidityAmount !== "") {
      writer.uint32(10).string(message.mintLiquidityAmount);
    }
    if (message.depositToken1Amount !== "") {
      writer.uint32(18).string(message.depositToken1Amount);
    }
    if (message.depositToken2Amount !== "") {
      writer.uint32(26).string(message.depositToken2Amount);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryTryAddLiquidityResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTryAddLiquidityResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mintLiquidityAmount = reader.string();
          break;
        case 2:
          message.depositToken1Amount = reader.string();
          break;
        case 3:
          message.depositToken2Amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTryAddLiquidityResponse {
    return {
      mintLiquidityAmount: isSet(object.mintLiquidityAmount)
        ? String(object.mintLiquidityAmount)
        : "",
      depositToken1Amount: isSet(object.depositToken1Amount)
        ? String(object.depositToken1Amount)
        : "",
      depositToken2Amount: isSet(object.depositToken2Amount)
        ? String(object.depositToken2Amount)
        : "",
    };
  },

  toJSON(message: QueryTryAddLiquidityResponse): unknown {
    const obj: any = {};
    message.mintLiquidityAmount !== undefined &&
      (obj.mintLiquidityAmount = message.mintLiquidityAmount);
    message.depositToken1Amount !== undefined &&
      (obj.depositToken1Amount = message.depositToken1Amount);
    message.depositToken2Amount !== undefined &&
      (obj.depositToken2Amount = message.depositToken2Amount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryTryAddLiquidityResponse>, I>>(
    object: I
  ): QueryTryAddLiquidityResponse {
    const message = createBaseQueryTryAddLiquidityResponse();
    message.mintLiquidityAmount = object.mintLiquidityAmount ?? "";
    message.depositToken1Amount = object.depositToken1Amount ?? "";
    message.depositToken2Amount = object.depositToken2Amount ?? "";
    return message;
  },
};

function createBaseQueryTryRemoveLiquidityRequest(): QueryTryRemoveLiquidityRequest {
  return {
    creator: "",
    token1Addr: "",
    token2Addr: "",
    liquidity: "",
    minToken1Amount: "",
    minToken2Amount: "",
  };
}

export const QueryTryRemoveLiquidityRequest = {
  encode(
    message: QueryTryRemoveLiquidityRequest,
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
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryTryRemoveLiquidityRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTryRemoveLiquidityRequest();
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTryRemoveLiquidityRequest {
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
    };
  },

  toJSON(message: QueryTryRemoveLiquidityRequest): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.token1Addr !== undefined && (obj.token1Addr = message.token1Addr);
    message.token2Addr !== undefined && (obj.token2Addr = message.token2Addr);
    message.liquidity !== undefined && (obj.liquidity = message.liquidity);
    message.minToken1Amount !== undefined &&
      (obj.minToken1Amount = message.minToken1Amount);
    message.minToken2Amount !== undefined &&
      (obj.minToken2Amount = message.minToken2Amount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryTryRemoveLiquidityRequest>, I>>(
    object: I
  ): QueryTryRemoveLiquidityRequest {
    const message = createBaseQueryTryRemoveLiquidityRequest();
    message.creator = object.creator ?? "";
    message.token1Addr = object.token1Addr ?? "";
    message.token2Addr = object.token2Addr ?? "";
    message.liquidity = object.liquidity ?? "";
    message.minToken1Amount = object.minToken1Amount ?? "";
    message.minToken2Amount = object.minToken2Amount ?? "";
    return message;
  },
};

function createBaseQueryTryRemoveLiquidityResponse(): QueryTryRemoveLiquidityResponse {
  return { token1WithdrawAmount: "", token2WithdrawAmount: "" };
}

export const QueryTryRemoveLiquidityResponse = {
  encode(
    message: QueryTryRemoveLiquidityResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.token1WithdrawAmount !== "") {
      writer.uint32(10).string(message.token1WithdrawAmount);
    }
    if (message.token2WithdrawAmount !== "") {
      writer.uint32(18).string(message.token2WithdrawAmount);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryTryRemoveLiquidityResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTryRemoveLiquidityResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.token1WithdrawAmount = reader.string();
          break;
        case 2:
          message.token2WithdrawAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTryRemoveLiquidityResponse {
    return {
      token1WithdrawAmount: isSet(object.token1WithdrawAmount)
        ? String(object.token1WithdrawAmount)
        : "",
      token2WithdrawAmount: isSet(object.token2WithdrawAmount)
        ? String(object.token2WithdrawAmount)
        : "",
    };
  },

  toJSON(message: QueryTryRemoveLiquidityResponse): unknown {
    const obj: any = {};
    message.token1WithdrawAmount !== undefined &&
      (obj.token1WithdrawAmount = message.token1WithdrawAmount);
    message.token2WithdrawAmount !== undefined &&
      (obj.token2WithdrawAmount = message.token2WithdrawAmount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryTryRemoveLiquidityResponse>, I>>(
    object: I
  ): QueryTryRemoveLiquidityResponse {
    const message = createBaseQueryTryRemoveLiquidityResponse();
    message.token1WithdrawAmount = object.token1WithdrawAmount ?? "";
    message.token2WithdrawAmount = object.token2WithdrawAmount ?? "";
    return message;
  },
};

function createBaseQueryPoolMetadataAllRequest(): QueryPoolMetadataAllRequest {
  return { pagination: undefined };
}

export const QueryPoolMetadataAllRequest = {
  encode(
    message: QueryPoolMetadataAllRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryPoolMetadataAllRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolMetadataAllRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryPoolMetadataAllRequest {
    return {
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryPoolMetadataAllRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryPoolMetadataAllRequest>, I>>(
    object: I
  ): QueryPoolMetadataAllRequest {
    const message = createBaseQueryPoolMetadataAllRequest();
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryPoolMetadataAllResponse(): QueryPoolMetadataAllResponse {
  return { pagination: undefined, poolMetadatas: [] };
}

export const QueryPoolMetadataAllResponse = {
  encode(
    message: QueryPoolMetadataAllResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(10).fork()
      ).ldelim();
    }
    for (const v of message.poolMetadatas) {
      QueryPoolMetadataResponse.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryPoolMetadataAllResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolMetadataAllResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        case 2:
          message.poolMetadatas.push(
            QueryPoolMetadataResponse.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryPoolMetadataAllResponse {
    return {
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
      poolMetadatas: Array.isArray(object?.poolMetadatas)
        ? object.poolMetadatas.map((e: any) =>
            QueryPoolMetadataResponse.fromJSON(e)
          )
        : [],
    };
  },

  toJSON(message: QueryPoolMetadataAllResponse): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    if (message.poolMetadatas) {
      obj.poolMetadatas = message.poolMetadatas.map((e) =>
        e ? QueryPoolMetadataResponse.toJSON(e) : undefined
      );
    } else {
      obj.poolMetadatas = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryPoolMetadataAllResponse>, I>>(
    object: I
  ): QueryPoolMetadataAllResponse {
    const message = createBaseQueryPoolMetadataAllResponse();
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    message.poolMetadatas =
      object.poolMetadatas?.map((e) =>
        QueryPoolMetadataResponse.fromPartial(e)
      ) || [];
    return message;
  },
};

function createBaseQueryAccountPoolMetadataRequest(): QueryAccountPoolMetadataRequest {
  return { accountAddr: "", token1Addr: "", token2Addr: "" };
}

export const QueryAccountPoolMetadataRequest = {
  encode(
    message: QueryAccountPoolMetadataRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.accountAddr !== "") {
      writer.uint32(10).string(message.accountAddr);
    }
    if (message.token1Addr !== "") {
      writer.uint32(18).string(message.token1Addr);
    }
    if (message.token2Addr !== "") {
      writer.uint32(26).string(message.token2Addr);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAccountPoolMetadataRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountPoolMetadataRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountAddr = reader.string();
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

  fromJSON(object: any): QueryAccountPoolMetadataRequest {
    return {
      accountAddr: isSet(object.accountAddr) ? String(object.accountAddr) : "",
      token1Addr: isSet(object.token1Addr) ? String(object.token1Addr) : "",
      token2Addr: isSet(object.token2Addr) ? String(object.token2Addr) : "",
    };
  },

  toJSON(message: QueryAccountPoolMetadataRequest): unknown {
    const obj: any = {};
    message.accountAddr !== undefined &&
      (obj.accountAddr = message.accountAddr);
    message.token1Addr !== undefined && (obj.token1Addr = message.token1Addr);
    message.token2Addr !== undefined && (obj.token2Addr = message.token2Addr);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAccountPoolMetadataRequest>, I>>(
    object: I
  ): QueryAccountPoolMetadataRequest {
    const message = createBaseQueryAccountPoolMetadataRequest();
    message.accountAddr = object.accountAddr ?? "";
    message.token1Addr = object.token1Addr ?? "";
    message.token2Addr = object.token2Addr ?? "";
    return message;
  },
};

function createBaseQueryAccountPoolMetadataAllRequest(): QueryAccountPoolMetadataAllRequest {
  return { accountAddr: "" };
}

export const QueryAccountPoolMetadataAllRequest = {
  encode(
    message: QueryAccountPoolMetadataAllRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.accountAddr !== "") {
      writer.uint32(10).string(message.accountAddr);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAccountPoolMetadataAllRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountPoolMetadataAllRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountAddr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAccountPoolMetadataAllRequest {
    return {
      accountAddr: isSet(object.accountAddr) ? String(object.accountAddr) : "",
    };
  },

  toJSON(message: QueryAccountPoolMetadataAllRequest): unknown {
    const obj: any = {};
    message.accountAddr !== undefined &&
      (obj.accountAddr = message.accountAddr);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryAccountPoolMetadataAllRequest>, I>
  >(object: I): QueryAccountPoolMetadataAllRequest {
    const message = createBaseQueryAccountPoolMetadataAllRequest();
    message.accountAddr = object.accountAddr ?? "";
    return message;
  },
};

function createBaseQueryAccountPoolMetadataAllResponse(): QueryAccountPoolMetadataAllResponse {
  return { accountPoolMetadatas: [] };
}

export const QueryAccountPoolMetadataAllResponse = {
  encode(
    message: QueryAccountPoolMetadataAllResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.accountPoolMetadatas) {
      QueryAccountPoolMetadataResponse.encode(
        v!,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAccountPoolMetadataAllResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountPoolMetadataAllResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountPoolMetadatas.push(
            QueryAccountPoolMetadataResponse.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAccountPoolMetadataAllResponse {
    return {
      accountPoolMetadatas: Array.isArray(object?.accountPoolMetadatas)
        ? object.accountPoolMetadatas.map((e: any) =>
            QueryAccountPoolMetadataResponse.fromJSON(e)
          )
        : [],
    };
  },

  toJSON(message: QueryAccountPoolMetadataAllResponse): unknown {
    const obj: any = {};
    if (message.accountPoolMetadatas) {
      obj.accountPoolMetadatas = message.accountPoolMetadatas.map((e) =>
        e ? QueryAccountPoolMetadataResponse.toJSON(e) : undefined
      );
    } else {
      obj.accountPoolMetadatas = [];
    }
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryAccountPoolMetadataAllResponse>, I>
  >(object: I): QueryAccountPoolMetadataAllResponse {
    const message = createBaseQueryAccountPoolMetadataAllResponse();
    message.accountPoolMetadatas =
      object.accountPoolMetadatas?.map((e) =>
        QueryAccountPoolMetadataResponse.fromPartial(e)
      ) || [];
    return message;
  },
};

function createBaseQueryGetMiningPoolChangePlanRequest(): QueryGetMiningPoolChangePlanRequest {
  return { block: Long.ZERO, poolId: "" };
}

export const QueryGetMiningPoolChangePlanRequest = {
  encode(
    message: QueryGetMiningPoolChangePlanRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.block.isZero()) {
      writer.uint32(8).int64(message.block);
    }
    if (message.poolId !== "") {
      writer.uint32(18).string(message.poolId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetMiningPoolChangePlanRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetMiningPoolChangePlanRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.block = reader.int64() as Long;
          break;
        case 2:
          message.poolId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetMiningPoolChangePlanRequest {
    return {
      block: isSet(object.block) ? Long.fromValue(object.block) : Long.ZERO,
      poolId: isSet(object.poolId) ? String(object.poolId) : "",
    };
  },

  toJSON(message: QueryGetMiningPoolChangePlanRequest): unknown {
    const obj: any = {};
    message.block !== undefined &&
      (obj.block = (message.block || Long.ZERO).toString());
    message.poolId !== undefined && (obj.poolId = message.poolId);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryGetMiningPoolChangePlanRequest>, I>
  >(object: I): QueryGetMiningPoolChangePlanRequest {
    const message = createBaseQueryGetMiningPoolChangePlanRequest();
    message.block =
      object.block !== undefined && object.block !== null
        ? Long.fromValue(object.block)
        : Long.ZERO;
    message.poolId = object.poolId ?? "";
    return message;
  },
};

function createBaseQueryGetMiningPoolChangePlanResponse(): QueryGetMiningPoolChangePlanResponse {
  return { miningPoolChangePlan: undefined };
}

export const QueryGetMiningPoolChangePlanResponse = {
  encode(
    message: QueryGetMiningPoolChangePlanResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.miningPoolChangePlan !== undefined) {
      MiningPoolChangePlan.encode(
        message.miningPoolChangePlan,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetMiningPoolChangePlanResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetMiningPoolChangePlanResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.miningPoolChangePlan = MiningPoolChangePlan.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetMiningPoolChangePlanResponse {
    return {
      miningPoolChangePlan: isSet(object.miningPoolChangePlan)
        ? MiningPoolChangePlan.fromJSON(object.miningPoolChangePlan)
        : undefined,
    };
  },

  toJSON(message: QueryGetMiningPoolChangePlanResponse): unknown {
    const obj: any = {};
    message.miningPoolChangePlan !== undefined &&
      (obj.miningPoolChangePlan = message.miningPoolChangePlan
        ? MiningPoolChangePlan.toJSON(message.miningPoolChangePlan)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryGetMiningPoolChangePlanResponse>, I>
  >(object: I): QueryGetMiningPoolChangePlanResponse {
    const message = createBaseQueryGetMiningPoolChangePlanResponse();
    message.miningPoolChangePlan =
      object.miningPoolChangePlan !== undefined &&
      object.miningPoolChangePlan !== null
        ? MiningPoolChangePlan.fromPartial(object.miningPoolChangePlan)
        : undefined;
    return message;
  },
};

function createBaseQueryAllMiningPoolChangePlanRequest(): QueryAllMiningPoolChangePlanRequest {
  return { block: Long.ZERO, pagination: undefined };
}

export const QueryAllMiningPoolChangePlanRequest = {
  encode(
    message: QueryAllMiningPoolChangePlanRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.block.isZero()) {
      writer.uint32(8).int64(message.block);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAllMiningPoolChangePlanRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllMiningPoolChangePlanRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.block = reader.int64() as Long;
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllMiningPoolChangePlanRequest {
    return {
      block: isSet(object.block) ? Long.fromValue(object.block) : Long.ZERO,
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryAllMiningPoolChangePlanRequest): unknown {
    const obj: any = {};
    message.block !== undefined &&
      (obj.block = (message.block || Long.ZERO).toString());
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryAllMiningPoolChangePlanRequest>, I>
  >(object: I): QueryAllMiningPoolChangePlanRequest {
    const message = createBaseQueryAllMiningPoolChangePlanRequest();
    message.block =
      object.block !== undefined && object.block !== null
        ? Long.fromValue(object.block)
        : Long.ZERO;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryAllMiningPoolChangePlanResponse(): QueryAllMiningPoolChangePlanResponse {
  return { miningPoolChangePlan: [], pagination: undefined };
}

export const QueryAllMiningPoolChangePlanResponse = {
  encode(
    message: QueryAllMiningPoolChangePlanResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.miningPoolChangePlan) {
      MiningPoolChangePlan.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAllMiningPoolChangePlanResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllMiningPoolChangePlanResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.miningPoolChangePlan.push(
            MiningPoolChangePlan.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllMiningPoolChangePlanResponse {
    return {
      miningPoolChangePlan: Array.isArray(object?.miningPoolChangePlan)
        ? object.miningPoolChangePlan.map((e: any) =>
            MiningPoolChangePlan.fromJSON(e)
          )
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryAllMiningPoolChangePlanResponse): unknown {
    const obj: any = {};
    if (message.miningPoolChangePlan) {
      obj.miningPoolChangePlan = message.miningPoolChangePlan.map((e) =>
        e ? MiningPoolChangePlan.toJSON(e) : undefined
      );
    } else {
      obj.miningPoolChangePlan = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryAllMiningPoolChangePlanResponse>, I>
  >(object: I): QueryAllMiningPoolChangePlanResponse {
    const message = createBaseQueryAllMiningPoolChangePlanResponse();
    message.miningPoolChangePlan =
      object.miningPoolChangePlan?.map((e) =>
        MiningPoolChangePlan.fromPartial(e)
      ) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryRewardsRequest(): QueryRewardsRequest {
  return { accountAddr: "" };
}

export const QueryRewardsRequest = {
  encode(
    message: QueryRewardsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.accountAddr !== "") {
      writer.uint32(10).string(message.accountAddr);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRewardsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRewardsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountAddr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryRewardsRequest {
    return {
      accountAddr: isSet(object.accountAddr) ? String(object.accountAddr) : "",
    };
  },

  toJSON(message: QueryRewardsRequest): unknown {
    const obj: any = {};
    message.accountAddr !== undefined &&
      (obj.accountAddr = message.accountAddr);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryRewardsRequest>, I>>(
    object: I
  ): QueryRewardsRequest {
    const message = createBaseQueryRewardsRequest();
    message.accountAddr = object.accountAddr ?? "";
    return message;
  },
};

function createBaseQueryRewardsResponse(): QueryRewardsResponse {
  return { totalReward: "", rewards: [] };
}

export const QueryRewardsResponse = {
  encode(
    message: QueryRewardsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.totalReward !== "") {
      writer.uint32(10).string(message.totalReward);
    }
    for (const v of message.rewards) {
      QueryRewardResponse.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryRewardsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRewardsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalReward = reader.string();
          break;
        case 2:
          message.rewards.push(
            QueryRewardResponse.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryRewardsResponse {
    return {
      totalReward: isSet(object.totalReward) ? String(object.totalReward) : "",
      rewards: Array.isArray(object?.rewards)
        ? object.rewards.map((e: any) => QueryRewardResponse.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryRewardsResponse): unknown {
    const obj: any = {};
    message.totalReward !== undefined &&
      (obj.totalReward = message.totalReward);
    if (message.rewards) {
      obj.rewards = message.rewards.map((e) =>
        e ? QueryRewardResponse.toJSON(e) : undefined
      );
    } else {
      obj.rewards = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryRewardsResponse>, I>>(
    object: I
  ): QueryRewardsResponse {
    const message = createBaseQueryRewardsResponse();
    message.totalReward = object.totalReward ?? "";
    message.rewards =
      object.rewards?.map((e) => QueryRewardResponse.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryRewardResponse(): QueryRewardResponse {
  return { poolId: "", reward: "" };
}

export const QueryRewardResponse = {
  encode(
    message: QueryRewardResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.poolId !== "") {
      writer.uint32(10).string(message.poolId);
    }
    if (message.reward !== "") {
      writer.uint32(18).string(message.reward);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRewardResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRewardResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.string();
          break;
        case 2:
          message.reward = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryRewardResponse {
    return {
      poolId: isSet(object.poolId) ? String(object.poolId) : "",
      reward: isSet(object.reward) ? String(object.reward) : "",
    };
  },

  toJSON(message: QueryRewardResponse): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = message.poolId);
    message.reward !== undefined && (obj.reward = message.reward);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryRewardResponse>, I>>(
    object: I
  ): QueryRewardResponse {
    const message = createBaseQueryRewardResponse();
    message.poolId = object.poolId ?? "";
    message.reward = object.reward ?? "";
    return message;
  },
};

function createBaseQueryMiningPoolsAllRequest(): QueryMiningPoolsAllRequest {
  return { onlyLive: false };
}

export const QueryMiningPoolsAllRequest = {
  encode(
    message: QueryMiningPoolsAllRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.onlyLive === true) {
      writer.uint32(8).bool(message.onlyLive);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryMiningPoolsAllRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMiningPoolsAllRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.onlyLive = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryMiningPoolsAllRequest {
    return {
      onlyLive: isSet(object.onlyLive) ? Boolean(object.onlyLive) : false,
    };
  },

  toJSON(message: QueryMiningPoolsAllRequest): unknown {
    const obj: any = {};
    message.onlyLive !== undefined && (obj.onlyLive = message.onlyLive);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryMiningPoolsAllRequest>, I>>(
    object: I
  ): QueryMiningPoolsAllRequest {
    const message = createBaseQueryMiningPoolsAllRequest();
    message.onlyLive = object.onlyLive ?? false;
    return message;
  },
};

function createBaseQueryMiningPoolsAllResponse(): QueryMiningPoolsAllResponse {
  return { totalAllocPoint: Long.UZERO, miningPools: [] };
}

export const QueryMiningPoolsAllResponse = {
  encode(
    message: QueryMiningPoolsAllResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.totalAllocPoint.isZero()) {
      writer.uint32(8).uint64(message.totalAllocPoint);
    }
    for (const v of message.miningPools) {
      QueryMiningPoolResponse.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryMiningPoolsAllResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMiningPoolsAllResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalAllocPoint = reader.uint64() as Long;
          break;
        case 2:
          message.miningPools.push(
            QueryMiningPoolResponse.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryMiningPoolsAllResponse {
    return {
      totalAllocPoint: isSet(object.totalAllocPoint)
        ? Long.fromValue(object.totalAllocPoint)
        : Long.UZERO,
      miningPools: Array.isArray(object?.miningPools)
        ? object.miningPools.map((e: any) =>
            QueryMiningPoolResponse.fromJSON(e)
          )
        : [],
    };
  },

  toJSON(message: QueryMiningPoolsAllResponse): unknown {
    const obj: any = {};
    message.totalAllocPoint !== undefined &&
      (obj.totalAllocPoint = (
        message.totalAllocPoint || Long.UZERO
      ).toString());
    if (message.miningPools) {
      obj.miningPools = message.miningPools.map((e) =>
        e ? QueryMiningPoolResponse.toJSON(e) : undefined
      );
    } else {
      obj.miningPools = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryMiningPoolsAllResponse>, I>>(
    object: I
  ): QueryMiningPoolsAllResponse {
    const message = createBaseQueryMiningPoolsAllResponse();
    message.totalAllocPoint =
      object.totalAllocPoint !== undefined && object.totalAllocPoint !== null
        ? Long.fromValue(object.totalAllocPoint)
        : Long.UZERO;
    message.miningPools =
      object.miningPools?.map((e) => QueryMiningPoolResponse.fromPartial(e)) ||
      [];
    return message;
  },
};

function createBaseQueryMiningPoolResponse(): QueryMiningPoolResponse {
  return { allocPoint: Long.UZERO, swapPool: undefined };
}

export const QueryMiningPoolResponse = {
  encode(
    message: QueryMiningPoolResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.allocPoint.isZero()) {
      writer.uint32(8).uint64(message.allocPoint);
    }
    if (message.swapPool !== undefined) {
      SwapPoolInfo.encode(message.swapPool, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryMiningPoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMiningPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.allocPoint = reader.uint64() as Long;
          break;
        case 2:
          message.swapPool = SwapPoolInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryMiningPoolResponse {
    return {
      allocPoint: isSet(object.allocPoint)
        ? Long.fromValue(object.allocPoint)
        : Long.UZERO,
      swapPool: isSet(object.swapPool)
        ? SwapPoolInfo.fromJSON(object.swapPool)
        : undefined,
    };
  },

  toJSON(message: QueryMiningPoolResponse): unknown {
    const obj: any = {};
    message.allocPoint !== undefined &&
      (obj.allocPoint = (message.allocPoint || Long.UZERO).toString());
    message.swapPool !== undefined &&
      (obj.swapPool = message.swapPool
        ? SwapPoolInfo.toJSON(message.swapPool)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryMiningPoolResponse>, I>>(
    object: I
  ): QueryMiningPoolResponse {
    const message = createBaseQueryMiningPoolResponse();
    message.allocPoint =
      object.allocPoint !== undefined && object.allocPoint !== null
        ? Long.fromValue(object.allocPoint)
        : Long.UZERO;
    message.swapPool =
      object.swapPool !== undefined && object.swapPool !== null
        ? SwapPoolInfo.fromPartial(object.swapPool)
        : undefined;
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Queries a list of poolMetadata items. */
  PoolMetadata(
    request: DeepPartial<QueryPoolMetadataRequest>,
    metadata?: grpc.Metadata
  ): Promise<QueryPoolMetadataResponse>;
  /** Queries a list of tryAddLiquidity items. */
  TryAddLiquidity(
    request: DeepPartial<QueryTryAddLiquidityRequest>,
    metadata?: grpc.Metadata
  ): Promise<QueryTryAddLiquidityResponse>;
  /** Queries a list of tryRemoveLiquidity items. */
  TryRemoveLiquidity(
    request: DeepPartial<QueryTryRemoveLiquidityRequest>,
    metadata?: grpc.Metadata
  ): Promise<QueryTryRemoveLiquidityResponse>;
  /** Queries a list of PoolMetadataAll items. */
  PoolMetadataAll(
    request: DeepPartial<QueryPoolMetadataAllRequest>,
    metadata?: grpc.Metadata
  ): Promise<QueryPoolMetadataAllResponse>;
  /** Queries an account pool metadata item. */
  AccountPoolMetadata(
    request: DeepPartial<QueryAccountPoolMetadataRequest>,
    metadata?: grpc.Metadata
  ): Promise<QueryAccountPoolMetadataResponse>;
  /** Queries a list of AccountPoolMetadataAll items. */
  AccountPoolMetadataAll(
    request: DeepPartial<QueryAccountPoolMetadataAllRequest>,
    metadata?: grpc.Metadata
  ): Promise<QueryAccountPoolMetadataAllResponse>;
  /** Queries a MiningPoolChangePlan by index. */
  MiningPoolChangePlan(
    request: DeepPartial<QueryGetMiningPoolChangePlanRequest>,
    metadata?: grpc.Metadata
  ): Promise<QueryGetMiningPoolChangePlanResponse>;
  /** Queries a list of MiningPoolChangePlan items. */
  MiningPoolChangePlanAll(
    request: DeepPartial<QueryAllMiningPoolChangePlanRequest>,
    metadata?: grpc.Metadata
  ): Promise<QueryAllMiningPoolChangePlanResponse>;
  /** Queries a list of Rewards items. */
  Rewards(
    request: DeepPartial<QueryRewardsRequest>,
    metadata?: grpc.Metadata
  ): Promise<QueryRewardsResponse>;
  /** Queries a list of MiningPoolsAll items. */
  MiningPoolsAll(
    request: DeepPartial<QueryMiningPoolsAllRequest>,
    metadata?: grpc.Metadata
  ): Promise<QueryMiningPoolsAllResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.PoolMetadata = this.PoolMetadata.bind(this);
    this.TryAddLiquidity = this.TryAddLiquidity.bind(this);
    this.TryRemoveLiquidity = this.TryRemoveLiquidity.bind(this);
    this.PoolMetadataAll = this.PoolMetadataAll.bind(this);
    this.AccountPoolMetadata = this.AccountPoolMetadata.bind(this);
    this.AccountPoolMetadataAll = this.AccountPoolMetadataAll.bind(this);
    this.MiningPoolChangePlan = this.MiningPoolChangePlan.bind(this);
    this.MiningPoolChangePlanAll = this.MiningPoolChangePlanAll.bind(this);
    this.Rewards = this.Rewards.bind(this);
    this.MiningPoolsAll = this.MiningPoolsAll.bind(this);
  }

  PoolMetadata(
    request: DeepPartial<QueryPoolMetadataRequest>,
    metadata?: grpc.Metadata
  ): Promise<QueryPoolMetadataResponse> {
    return this.rpc.unary(
      QueryPoolMetadataDesc,
      QueryPoolMetadataRequest.fromPartial(request),
      metadata
    );
  }

  TryAddLiquidity(
    request: DeepPartial<QueryTryAddLiquidityRequest>,
    metadata?: grpc.Metadata
  ): Promise<QueryTryAddLiquidityResponse> {
    return this.rpc.unary(
      QueryTryAddLiquidityDesc,
      QueryTryAddLiquidityRequest.fromPartial(request),
      metadata
    );
  }

  TryRemoveLiquidity(
    request: DeepPartial<QueryTryRemoveLiquidityRequest>,
    metadata?: grpc.Metadata
  ): Promise<QueryTryRemoveLiquidityResponse> {
    return this.rpc.unary(
      QueryTryRemoveLiquidityDesc,
      QueryTryRemoveLiquidityRequest.fromPartial(request),
      metadata
    );
  }

  PoolMetadataAll(
    request: DeepPartial<QueryPoolMetadataAllRequest>,
    metadata?: grpc.Metadata
  ): Promise<QueryPoolMetadataAllResponse> {
    return this.rpc.unary(
      QueryPoolMetadataAllDesc,
      QueryPoolMetadataAllRequest.fromPartial(request),
      metadata
    );
  }

  AccountPoolMetadata(
    request: DeepPartial<QueryAccountPoolMetadataRequest>,
    metadata?: grpc.Metadata
  ): Promise<QueryAccountPoolMetadataResponse> {
    return this.rpc.unary(
      QueryAccountPoolMetadataDesc,
      QueryAccountPoolMetadataRequest.fromPartial(request),
      metadata
    );
  }

  AccountPoolMetadataAll(
    request: DeepPartial<QueryAccountPoolMetadataAllRequest>,
    metadata?: grpc.Metadata
  ): Promise<QueryAccountPoolMetadataAllResponse> {
    return this.rpc.unary(
      QueryAccountPoolMetadataAllDesc,
      QueryAccountPoolMetadataAllRequest.fromPartial(request),
      metadata
    );
  }

  MiningPoolChangePlan(
    request: DeepPartial<QueryGetMiningPoolChangePlanRequest>,
    metadata?: grpc.Metadata
  ): Promise<QueryGetMiningPoolChangePlanResponse> {
    return this.rpc.unary(
      QueryMiningPoolChangePlanDesc,
      QueryGetMiningPoolChangePlanRequest.fromPartial(request),
      metadata
    );
  }

  MiningPoolChangePlanAll(
    request: DeepPartial<QueryAllMiningPoolChangePlanRequest>,
    metadata?: grpc.Metadata
  ): Promise<QueryAllMiningPoolChangePlanResponse> {
    return this.rpc.unary(
      QueryMiningPoolChangePlanAllDesc,
      QueryAllMiningPoolChangePlanRequest.fromPartial(request),
      metadata
    );
  }

  Rewards(
    request: DeepPartial<QueryRewardsRequest>,
    metadata?: grpc.Metadata
  ): Promise<QueryRewardsResponse> {
    return this.rpc.unary(
      QueryRewardsDesc,
      QueryRewardsRequest.fromPartial(request),
      metadata
    );
  }

  MiningPoolsAll(
    request: DeepPartial<QueryMiningPoolsAllRequest>,
    metadata?: grpc.Metadata
  ): Promise<QueryMiningPoolsAllResponse> {
    return this.rpc.unary(
      QueryMiningPoolsAllDesc,
      QueryMiningPoolsAllRequest.fromPartial(request),
      metadata
    );
  }
}

export const QueryDesc = {
  serviceName: "sophonlabs.sophon.dex.Query",
};

export const QueryPoolMetadataDesc: UnaryMethodDefinitionish = {
  methodName: "PoolMetadata",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryPoolMetadataRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryPoolMetadataResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryTryAddLiquidityDesc: UnaryMethodDefinitionish = {
  methodName: "TryAddLiquidity",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryTryAddLiquidityRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryTryAddLiquidityResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryTryRemoveLiquidityDesc: UnaryMethodDefinitionish = {
  methodName: "TryRemoveLiquidity",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryTryRemoveLiquidityRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryTryRemoveLiquidityResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryPoolMetadataAllDesc: UnaryMethodDefinitionish = {
  methodName: "PoolMetadataAll",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryPoolMetadataAllRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryPoolMetadataAllResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryAccountPoolMetadataDesc: UnaryMethodDefinitionish = {
  methodName: "AccountPoolMetadata",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryAccountPoolMetadataRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryAccountPoolMetadataResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryAccountPoolMetadataAllDesc: UnaryMethodDefinitionish = {
  methodName: "AccountPoolMetadataAll",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryAccountPoolMetadataAllRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryAccountPoolMetadataAllResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryMiningPoolChangePlanDesc: UnaryMethodDefinitionish = {
  methodName: "MiningPoolChangePlan",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryGetMiningPoolChangePlanRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryGetMiningPoolChangePlanResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryMiningPoolChangePlanAllDesc: UnaryMethodDefinitionish = {
  methodName: "MiningPoolChangePlanAll",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryAllMiningPoolChangePlanRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryAllMiningPoolChangePlanResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryRewardsDesc: UnaryMethodDefinitionish = {
  methodName: "Rewards",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryRewardsRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryRewardsResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryMiningPoolsAllDesc: UnaryMethodDefinitionish = {
  methodName: "MiningPoolsAll",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryMiningPoolsAllRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryMiningPoolsAllResponse.decode(data),
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
