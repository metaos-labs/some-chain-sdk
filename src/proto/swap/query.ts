/* eslint-disable */
import Long from "long";
import { grpc } from "@improbable-eng/grpc-web";
import * as _m0 from "protobufjs/minimal";
import { Params } from "./params";
import {
  NonfungiblePositionPool,
  LiquidityPosition,
} from "./nonfungible_position";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";
import {
  Pool,
  PoolFee,
  PoolSlot0,
  PoolObservation,
  PoolPosition,
  PoolTick,
  PoolWord,
} from "./pool";
import { ActivatingPool } from "./reward";
import { BrowserHeaders } from "browser-headers";

export const protobufPackage = "sophonlabs.sophon.swap";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params?: Params;
}

export interface QueryGetNonfungiblePositionPoolRequest {}

export interface QueryGetNonfungiblePositionPoolResponse {
  nonfungiblePositionPool?: NonfungiblePositionPool;
}

export interface QueryGetLiquidityPositionRequest {
  tokenId: string;
}

export interface QueryGetLiquidityPositionResponse {
  liquidityPosition?: LiquidityPosition;
}

export interface QueryAllLiquidityPositionRequest {
  pagination?: PageRequest;
}

export interface QueryAllLiquidityPositionResponse {
  liquidityPositions: LiquidityPosition[];
  pagination?: PageResponse;
}

export interface QueryGetPoolRequest {
  address: string;
}

export interface QueryGetPoolResponse {
  pool?: Pool;
}

export interface QueryAllPoolRequest {
  pagination?: PageRequest;
}

export interface QueryAllPoolResponse {
  pools: Pool[];
  pagination?: PageResponse;
}

export interface QueryGetPoolFeeRequest {
  fee: number;
}

export interface QueryGetPoolFeeResponse {
  poolFee?: PoolFee;
}

export interface QueryAllPoolFeeRequest {
  pagination?: PageRequest;
}

export interface QueryAllPoolFeeResponse {
  poolFees: PoolFee[];
  pagination?: PageResponse;
}

export interface QueryGetPoolSlot0Request {
  address: string;
}

export interface QueryGetPoolSlot0Response {
  poolSlot0?: PoolSlot0;
}

export interface QueryAllPoolSlot0Request {
  pagination?: PageRequest;
}

export interface QueryAllPoolSlot0Response {
  poolSlot0s: PoolSlot0[];
  pagination?: PageResponse;
}

export interface QueryGetPoolObservationRequest {
  address: string;
  index: number;
}

export interface QueryGetPoolObservationResponse {
  poolObservation?: PoolObservation;
}

export interface QueryAllPoolObservationRequest {
  address: string;
  pagination?: PageRequest;
}

export interface QueryAllPoolObservationResponse {
  poolObservations: PoolObservation[];
  pagination?: PageResponse;
}

export interface QueryGetPoolPositionRequest {
  address: string;
  owner: string;
  tickLower: number;
  tickUpper: number;
}

export interface QueryGetPoolPositionResponse {
  poolPosition?: PoolPosition;
}

export interface QueryAllPoolPositionRequest {
  /** the pool address */
  address: string;
  /** the owner address */
  owner: string;
  pagination?: PageRequest;
}

export interface QueryAllPoolPositionResponse {
  poolPositions: PoolPosition[];
  pagination?: PageResponse;
}

export interface QueryGetPoolTickRequest {
  address: string;
  index: number;
}

export interface QueryGetPoolTickResponse {
  poolTick?: PoolTick;
}

export interface QueryAllPoolTickRequest {
  address: string;
  pagination?: PageRequest;
}

export interface QueryAllPoolTickResponse {
  poolTicks: PoolTick[];
  pagination?: PageResponse;
}

export interface QueryGetPoolWordRequest {
  address: string;
  index: number;
}

export interface QueryGetPoolWordResponse {
  poolWord?: PoolWord;
}

export interface QueryAllPoolWordRequest {
  address: string;
  pagination?: PageRequest;
}

export interface QueryAllPoolWordResponse {
  poolWords: PoolWord[];
  pagination?: PageResponse;
}

export interface QueryGetLiquidityPositionTokenUriRequest {
  /** the id of the NFT */
  tokenId: string;
}

export interface QueryGetLiquidityPositionTokenUriResponse {
  uri: string;
}

export interface QueryAllLiquidityPositionOwnerRequest {
  address: string;
  skipZeroLiquidity: boolean;
}

export interface QueryAllLiquidityPositionOwnerResponse {
  liquidityPositions: LiquidityPosition[];
}

export interface QueryPoolSlot0AggregationRequest {
  addresses: string[];
}

export interface PoolSlot0AggregationResponse {
  pool?: Pool;
  poolSlot0?: PoolSlot0;
}

export interface QueryPoolSlot0AggregationResponse {
  poolSlot0Aggregations: PoolSlot0AggregationResponse[];
}

export interface QueryQuoteSwapExactInRequest {
  /** the number of amount in */
  amountIn: string;
  /** the maximum number of gas to use, if value is 0, gas limit is ignored */
  gasLimit: Long;
  denoms: string[];
  fees: number[];
}

export interface QueryQuoteSwapExactInResponse {
  available: boolean;
  amountOut: string;
  initializedTicksCrossed: number;
  gasUsed: Long;
}

export interface QueryQuoteSwapExactOutRequest {
  /** the number of amount out */
  amountOut: string;
  /** the maximum number of gas to use, if value is 0, gas limit is ignored */
  gasLimit: Long;
  denoms: string[];
  fees: number[];
}

export interface QueryQuoteSwapExactOutResponse {
  available: boolean;
  amountIn: string;
  initializedTicksCrossed: number;
  gasUsed: Long;
}

export interface QueryGetActivatingPoolRequest {
  address: string;
}

export interface QueryGetActivatingPoolResponse {
  activatingPool?: ActivatingPool;
}

export interface QueryAllActivatingPoolRequest {
  pagination?: PageRequest;
}

export interface QueryAllActivatingPoolResponse {
  activatingPool: ActivatingPool[];
  pagination?: PageResponse;
}

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(
    _: QueryParamsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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

  fromJSON(_: any): QueryParamsRequest {
    return {};
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(
    _: I
  ): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return { params: undefined };
}

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
    };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(
    object: I
  ): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params =
      object.params !== undefined && object.params !== null
        ? Params.fromPartial(object.params)
        : undefined;
    return message;
  },
};

function createBaseQueryGetNonfungiblePositionPoolRequest(): QueryGetNonfungiblePositionPoolRequest {
  return {};
}

export const QueryGetNonfungiblePositionPoolRequest = {
  encode(
    _: QueryGetNonfungiblePositionPoolRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetNonfungiblePositionPoolRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetNonfungiblePositionPoolRequest();
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

  fromJSON(_: any): QueryGetNonfungiblePositionPoolRequest {
    return {};
  },

  toJSON(_: QueryGetNonfungiblePositionPoolRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryGetNonfungiblePositionPoolRequest>, I>
  >(_: I): QueryGetNonfungiblePositionPoolRequest {
    const message = createBaseQueryGetNonfungiblePositionPoolRequest();
    return message;
  },
};

function createBaseQueryGetNonfungiblePositionPoolResponse(): QueryGetNonfungiblePositionPoolResponse {
  return { nonfungiblePositionPool: undefined };
}

export const QueryGetNonfungiblePositionPoolResponse = {
  encode(
    message: QueryGetNonfungiblePositionPoolResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.nonfungiblePositionPool !== undefined) {
      NonfungiblePositionPool.encode(
        message.nonfungiblePositionPool,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetNonfungiblePositionPoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetNonfungiblePositionPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nonfungiblePositionPool = NonfungiblePositionPool.decode(
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

  fromJSON(object: any): QueryGetNonfungiblePositionPoolResponse {
    return {
      nonfungiblePositionPool: isSet(object.nonfungiblePositionPool)
        ? NonfungiblePositionPool.fromJSON(object.nonfungiblePositionPool)
        : undefined,
    };
  },

  toJSON(message: QueryGetNonfungiblePositionPoolResponse): unknown {
    const obj: any = {};
    message.nonfungiblePositionPool !== undefined &&
      (obj.nonfungiblePositionPool = message.nonfungiblePositionPool
        ? NonfungiblePositionPool.toJSON(message.nonfungiblePositionPool)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryGetNonfungiblePositionPoolResponse>, I>
  >(object: I): QueryGetNonfungiblePositionPoolResponse {
    const message = createBaseQueryGetNonfungiblePositionPoolResponse();
    message.nonfungiblePositionPool =
      object.nonfungiblePositionPool !== undefined &&
      object.nonfungiblePositionPool !== null
        ? NonfungiblePositionPool.fromPartial(object.nonfungiblePositionPool)
        : undefined;
    return message;
  },
};

function createBaseQueryGetLiquidityPositionRequest(): QueryGetLiquidityPositionRequest {
  return { tokenId: "" };
}

export const QueryGetLiquidityPositionRequest = {
  encode(
    message: QueryGetLiquidityPositionRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.tokenId !== "") {
      writer.uint32(10).string(message.tokenId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetLiquidityPositionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetLiquidityPositionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetLiquidityPositionRequest {
    return {
      tokenId: isSet(object.tokenId) ? String(object.tokenId) : "",
    };
  },

  toJSON(message: QueryGetLiquidityPositionRequest): unknown {
    const obj: any = {};
    message.tokenId !== undefined && (obj.tokenId = message.tokenId);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryGetLiquidityPositionRequest>, I>
  >(object: I): QueryGetLiquidityPositionRequest {
    const message = createBaseQueryGetLiquidityPositionRequest();
    message.tokenId = object.tokenId ?? "";
    return message;
  },
};

function createBaseQueryGetLiquidityPositionResponse(): QueryGetLiquidityPositionResponse {
  return { liquidityPosition: undefined };
}

export const QueryGetLiquidityPositionResponse = {
  encode(
    message: QueryGetLiquidityPositionResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.liquidityPosition !== undefined) {
      LiquidityPosition.encode(
        message.liquidityPosition,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetLiquidityPositionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetLiquidityPositionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.liquidityPosition = LiquidityPosition.decode(
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

  fromJSON(object: any): QueryGetLiquidityPositionResponse {
    return {
      liquidityPosition: isSet(object.liquidityPosition)
        ? LiquidityPosition.fromJSON(object.liquidityPosition)
        : undefined,
    };
  },

  toJSON(message: QueryGetLiquidityPositionResponse): unknown {
    const obj: any = {};
    message.liquidityPosition !== undefined &&
      (obj.liquidityPosition = message.liquidityPosition
        ? LiquidityPosition.toJSON(message.liquidityPosition)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryGetLiquidityPositionResponse>, I>
  >(object: I): QueryGetLiquidityPositionResponse {
    const message = createBaseQueryGetLiquidityPositionResponse();
    message.liquidityPosition =
      object.liquidityPosition !== undefined &&
      object.liquidityPosition !== null
        ? LiquidityPosition.fromPartial(object.liquidityPosition)
        : undefined;
    return message;
  },
};

function createBaseQueryAllLiquidityPositionRequest(): QueryAllLiquidityPositionRequest {
  return { pagination: undefined };
}

export const QueryAllLiquidityPositionRequest = {
  encode(
    message: QueryAllLiquidityPositionRequest,
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
  ): QueryAllLiquidityPositionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllLiquidityPositionRequest();
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

  fromJSON(object: any): QueryAllLiquidityPositionRequest {
    return {
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryAllLiquidityPositionRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryAllLiquidityPositionRequest>, I>
  >(object: I): QueryAllLiquidityPositionRequest {
    const message = createBaseQueryAllLiquidityPositionRequest();
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryAllLiquidityPositionResponse(): QueryAllLiquidityPositionResponse {
  return { liquidityPositions: [], pagination: undefined };
}

export const QueryAllLiquidityPositionResponse = {
  encode(
    message: QueryAllLiquidityPositionResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.liquidityPositions) {
      LiquidityPosition.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryAllLiquidityPositionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllLiquidityPositionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.liquidityPositions.push(
            LiquidityPosition.decode(reader, reader.uint32())
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

  fromJSON(object: any): QueryAllLiquidityPositionResponse {
    return {
      liquidityPositions: Array.isArray(object?.liquidityPositions)
        ? object.liquidityPositions.map((e: any) =>
            LiquidityPosition.fromJSON(e)
          )
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryAllLiquidityPositionResponse): unknown {
    const obj: any = {};
    if (message.liquidityPositions) {
      obj.liquidityPositions = message.liquidityPositions.map((e) =>
        e ? LiquidityPosition.toJSON(e) : undefined
      );
    } else {
      obj.liquidityPositions = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryAllLiquidityPositionResponse>, I>
  >(object: I): QueryAllLiquidityPositionResponse {
    const message = createBaseQueryAllLiquidityPositionResponse();
    message.liquidityPositions =
      object.liquidityPositions?.map((e) => LiquidityPosition.fromPartial(e)) ||
      [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryGetPoolRequest(): QueryGetPoolRequest {
  return { address: "" };
}

export const QueryGetPoolRequest = {
  encode(
    message: QueryGetPoolRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetPoolRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPoolRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetPoolRequest {
    return {
      address: isSet(object.address) ? String(object.address) : "",
    };
  },

  toJSON(message: QueryGetPoolRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetPoolRequest>, I>>(
    object: I
  ): QueryGetPoolRequest {
    const message = createBaseQueryGetPoolRequest();
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseQueryGetPoolResponse(): QueryGetPoolResponse {
  return { pool: undefined };
}

export const QueryGetPoolResponse = {
  encode(
    message: QueryGetPoolResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pool !== undefined) {
      Pool.encode(message.pool, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetPoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool = Pool.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetPoolResponse {
    return {
      pool: isSet(object.pool) ? Pool.fromJSON(object.pool) : undefined,
    };
  },

  toJSON(message: QueryGetPoolResponse): unknown {
    const obj: any = {};
    message.pool !== undefined &&
      (obj.pool = message.pool ? Pool.toJSON(message.pool) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetPoolResponse>, I>>(
    object: I
  ): QueryGetPoolResponse {
    const message = createBaseQueryGetPoolResponse();
    message.pool =
      object.pool !== undefined && object.pool !== null
        ? Pool.fromPartial(object.pool)
        : undefined;
    return message;
  },
};

function createBaseQueryAllPoolRequest(): QueryAllPoolRequest {
  return { pagination: undefined };
}

export const QueryAllPoolRequest = {
  encode(
    message: QueryAllPoolRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllPoolRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPoolRequest();
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

  fromJSON(object: any): QueryAllPoolRequest {
    return {
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryAllPoolRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllPoolRequest>, I>>(
    object: I
  ): QueryAllPoolRequest {
    const message = createBaseQueryAllPoolRequest();
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryAllPoolResponse(): QueryAllPoolResponse {
  return { pools: [], pagination: undefined };
}

export const QueryAllPoolResponse = {
  encode(
    message: QueryAllPoolResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.pools) {
      Pool.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryAllPoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pools.push(Pool.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllPoolResponse {
    return {
      pools: Array.isArray(object?.pools)
        ? object.pools.map((e: any) => Pool.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryAllPoolResponse): unknown {
    const obj: any = {};
    if (message.pools) {
      obj.pools = message.pools.map((e) => (e ? Pool.toJSON(e) : undefined));
    } else {
      obj.pools = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllPoolResponse>, I>>(
    object: I
  ): QueryAllPoolResponse {
    const message = createBaseQueryAllPoolResponse();
    message.pools = object.pools?.map((e) => Pool.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryGetPoolFeeRequest(): QueryGetPoolFeeRequest {
  return { fee: 0 };
}

export const QueryGetPoolFeeRequest = {
  encode(
    message: QueryGetPoolFeeRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.fee !== 0) {
      writer.uint32(8).int32(message.fee);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetPoolFeeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPoolFeeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fee = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetPoolFeeRequest {
    return {
      fee: isSet(object.fee) ? Number(object.fee) : 0,
    };
  },

  toJSON(message: QueryGetPoolFeeRequest): unknown {
    const obj: any = {};
    message.fee !== undefined && (obj.fee = Math.round(message.fee));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetPoolFeeRequest>, I>>(
    object: I
  ): QueryGetPoolFeeRequest {
    const message = createBaseQueryGetPoolFeeRequest();
    message.fee = object.fee ?? 0;
    return message;
  },
};

function createBaseQueryGetPoolFeeResponse(): QueryGetPoolFeeResponse {
  return { poolFee: undefined };
}

export const QueryGetPoolFeeResponse = {
  encode(
    message: QueryGetPoolFeeResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.poolFee !== undefined) {
      PoolFee.encode(message.poolFee, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetPoolFeeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPoolFeeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolFee = PoolFee.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetPoolFeeResponse {
    return {
      poolFee: isSet(object.poolFee)
        ? PoolFee.fromJSON(object.poolFee)
        : undefined,
    };
  },

  toJSON(message: QueryGetPoolFeeResponse): unknown {
    const obj: any = {};
    message.poolFee !== undefined &&
      (obj.poolFee = message.poolFee
        ? PoolFee.toJSON(message.poolFee)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetPoolFeeResponse>, I>>(
    object: I
  ): QueryGetPoolFeeResponse {
    const message = createBaseQueryGetPoolFeeResponse();
    message.poolFee =
      object.poolFee !== undefined && object.poolFee !== null
        ? PoolFee.fromPartial(object.poolFee)
        : undefined;
    return message;
  },
};

function createBaseQueryAllPoolFeeRequest(): QueryAllPoolFeeRequest {
  return { pagination: undefined };
}

export const QueryAllPoolFeeRequest = {
  encode(
    message: QueryAllPoolFeeRequest,
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
  ): QueryAllPoolFeeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPoolFeeRequest();
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

  fromJSON(object: any): QueryAllPoolFeeRequest {
    return {
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryAllPoolFeeRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllPoolFeeRequest>, I>>(
    object: I
  ): QueryAllPoolFeeRequest {
    const message = createBaseQueryAllPoolFeeRequest();
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryAllPoolFeeResponse(): QueryAllPoolFeeResponse {
  return { poolFees: [], pagination: undefined };
}

export const QueryAllPoolFeeResponse = {
  encode(
    message: QueryAllPoolFeeResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.poolFees) {
      PoolFee.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryAllPoolFeeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPoolFeeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolFees.push(PoolFee.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllPoolFeeResponse {
    return {
      poolFees: Array.isArray(object?.poolFees)
        ? object.poolFees.map((e: any) => PoolFee.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryAllPoolFeeResponse): unknown {
    const obj: any = {};
    if (message.poolFees) {
      obj.poolFees = message.poolFees.map((e) =>
        e ? PoolFee.toJSON(e) : undefined
      );
    } else {
      obj.poolFees = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllPoolFeeResponse>, I>>(
    object: I
  ): QueryAllPoolFeeResponse {
    const message = createBaseQueryAllPoolFeeResponse();
    message.poolFees =
      object.poolFees?.map((e) => PoolFee.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryGetPoolSlot0Request(): QueryGetPoolSlot0Request {
  return { address: "" };
}

export const QueryGetPoolSlot0Request = {
  encode(
    message: QueryGetPoolSlot0Request,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetPoolSlot0Request {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPoolSlot0Request();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetPoolSlot0Request {
    return {
      address: isSet(object.address) ? String(object.address) : "",
    };
  },

  toJSON(message: QueryGetPoolSlot0Request): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetPoolSlot0Request>, I>>(
    object: I
  ): QueryGetPoolSlot0Request {
    const message = createBaseQueryGetPoolSlot0Request();
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseQueryGetPoolSlot0Response(): QueryGetPoolSlot0Response {
  return { poolSlot0: undefined };
}

export const QueryGetPoolSlot0Response = {
  encode(
    message: QueryGetPoolSlot0Response,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.poolSlot0 !== undefined) {
      PoolSlot0.encode(message.poolSlot0, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetPoolSlot0Response {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPoolSlot0Response();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolSlot0 = PoolSlot0.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetPoolSlot0Response {
    return {
      poolSlot0: isSet(object.poolSlot0)
        ? PoolSlot0.fromJSON(object.poolSlot0)
        : undefined,
    };
  },

  toJSON(message: QueryGetPoolSlot0Response): unknown {
    const obj: any = {};
    message.poolSlot0 !== undefined &&
      (obj.poolSlot0 = message.poolSlot0
        ? PoolSlot0.toJSON(message.poolSlot0)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetPoolSlot0Response>, I>>(
    object: I
  ): QueryGetPoolSlot0Response {
    const message = createBaseQueryGetPoolSlot0Response();
    message.poolSlot0 =
      object.poolSlot0 !== undefined && object.poolSlot0 !== null
        ? PoolSlot0.fromPartial(object.poolSlot0)
        : undefined;
    return message;
  },
};

function createBaseQueryAllPoolSlot0Request(): QueryAllPoolSlot0Request {
  return { pagination: undefined };
}

export const QueryAllPoolSlot0Request = {
  encode(
    message: QueryAllPoolSlot0Request,
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
  ): QueryAllPoolSlot0Request {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPoolSlot0Request();
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

  fromJSON(object: any): QueryAllPoolSlot0Request {
    return {
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryAllPoolSlot0Request): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllPoolSlot0Request>, I>>(
    object: I
  ): QueryAllPoolSlot0Request {
    const message = createBaseQueryAllPoolSlot0Request();
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryAllPoolSlot0Response(): QueryAllPoolSlot0Response {
  return { poolSlot0s: [], pagination: undefined };
}

export const QueryAllPoolSlot0Response = {
  encode(
    message: QueryAllPoolSlot0Response,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.poolSlot0s) {
      PoolSlot0.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryAllPoolSlot0Response {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPoolSlot0Response();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolSlot0s.push(PoolSlot0.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllPoolSlot0Response {
    return {
      poolSlot0s: Array.isArray(object?.poolSlot0s)
        ? object.poolSlot0s.map((e: any) => PoolSlot0.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryAllPoolSlot0Response): unknown {
    const obj: any = {};
    if (message.poolSlot0s) {
      obj.poolSlot0s = message.poolSlot0s.map((e) =>
        e ? PoolSlot0.toJSON(e) : undefined
      );
    } else {
      obj.poolSlot0s = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllPoolSlot0Response>, I>>(
    object: I
  ): QueryAllPoolSlot0Response {
    const message = createBaseQueryAllPoolSlot0Response();
    message.poolSlot0s =
      object.poolSlot0s?.map((e) => PoolSlot0.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryGetPoolObservationRequest(): QueryGetPoolObservationRequest {
  return { address: "", index: 0 };
}

export const QueryGetPoolObservationRequest = {
  encode(
    message: QueryGetPoolObservationRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.index !== 0) {
      writer.uint32(16).uint32(message.index);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetPoolObservationRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPoolObservationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.index = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetPoolObservationRequest {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      index: isSet(object.index) ? Number(object.index) : 0,
    };
  },

  toJSON(message: QueryGetPoolObservationRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.index !== undefined && (obj.index = Math.round(message.index));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetPoolObservationRequest>, I>>(
    object: I
  ): QueryGetPoolObservationRequest {
    const message = createBaseQueryGetPoolObservationRequest();
    message.address = object.address ?? "";
    message.index = object.index ?? 0;
    return message;
  },
};

function createBaseQueryGetPoolObservationResponse(): QueryGetPoolObservationResponse {
  return { poolObservation: undefined };
}

export const QueryGetPoolObservationResponse = {
  encode(
    message: QueryGetPoolObservationResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.poolObservation !== undefined) {
      PoolObservation.encode(
        message.poolObservation,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetPoolObservationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPoolObservationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolObservation = PoolObservation.decode(
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

  fromJSON(object: any): QueryGetPoolObservationResponse {
    return {
      poolObservation: isSet(object.poolObservation)
        ? PoolObservation.fromJSON(object.poolObservation)
        : undefined,
    };
  },

  toJSON(message: QueryGetPoolObservationResponse): unknown {
    const obj: any = {};
    message.poolObservation !== undefined &&
      (obj.poolObservation = message.poolObservation
        ? PoolObservation.toJSON(message.poolObservation)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetPoolObservationResponse>, I>>(
    object: I
  ): QueryGetPoolObservationResponse {
    const message = createBaseQueryGetPoolObservationResponse();
    message.poolObservation =
      object.poolObservation !== undefined && object.poolObservation !== null
        ? PoolObservation.fromPartial(object.poolObservation)
        : undefined;
    return message;
  },
};

function createBaseQueryAllPoolObservationRequest(): QueryAllPoolObservationRequest {
  return { address: "", pagination: undefined };
}

export const QueryAllPoolObservationRequest = {
  encode(
    message: QueryAllPoolObservationRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAllPoolObservationRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPoolObservationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
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

  fromJSON(object: any): QueryAllPoolObservationRequest {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryAllPoolObservationRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllPoolObservationRequest>, I>>(
    object: I
  ): QueryAllPoolObservationRequest {
    const message = createBaseQueryAllPoolObservationRequest();
    message.address = object.address ?? "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryAllPoolObservationResponse(): QueryAllPoolObservationResponse {
  return { poolObservations: [], pagination: undefined };
}

export const QueryAllPoolObservationResponse = {
  encode(
    message: QueryAllPoolObservationResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.poolObservations) {
      PoolObservation.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryAllPoolObservationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPoolObservationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolObservations.push(
            PoolObservation.decode(reader, reader.uint32())
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

  fromJSON(object: any): QueryAllPoolObservationResponse {
    return {
      poolObservations: Array.isArray(object?.poolObservations)
        ? object.poolObservations.map((e: any) => PoolObservation.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryAllPoolObservationResponse): unknown {
    const obj: any = {};
    if (message.poolObservations) {
      obj.poolObservations = message.poolObservations.map((e) =>
        e ? PoolObservation.toJSON(e) : undefined
      );
    } else {
      obj.poolObservations = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllPoolObservationResponse>, I>>(
    object: I
  ): QueryAllPoolObservationResponse {
    const message = createBaseQueryAllPoolObservationResponse();
    message.poolObservations =
      object.poolObservations?.map((e) => PoolObservation.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryGetPoolPositionRequest(): QueryGetPoolPositionRequest {
  return { address: "", owner: "", tickLower: 0, tickUpper: 0 };
}

export const QueryGetPoolPositionRequest = {
  encode(
    message: QueryGetPoolPositionRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.tickLower !== 0) {
      writer.uint32(24).int32(message.tickLower);
    }
    if (message.tickUpper !== 0) {
      writer.uint32(32).int32(message.tickUpper);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetPoolPositionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPoolPositionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.owner = reader.string();
          break;
        case 3:
          message.tickLower = reader.int32();
          break;
        case 4:
          message.tickUpper = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetPoolPositionRequest {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
      tickLower: isSet(object.tickLower) ? Number(object.tickLower) : 0,
      tickUpper: isSet(object.tickUpper) ? Number(object.tickUpper) : 0,
    };
  },

  toJSON(message: QueryGetPoolPositionRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.owner !== undefined && (obj.owner = message.owner);
    message.tickLower !== undefined &&
      (obj.tickLower = Math.round(message.tickLower));
    message.tickUpper !== undefined &&
      (obj.tickUpper = Math.round(message.tickUpper));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetPoolPositionRequest>, I>>(
    object: I
  ): QueryGetPoolPositionRequest {
    const message = createBaseQueryGetPoolPositionRequest();
    message.address = object.address ?? "";
    message.owner = object.owner ?? "";
    message.tickLower = object.tickLower ?? 0;
    message.tickUpper = object.tickUpper ?? 0;
    return message;
  },
};

function createBaseQueryGetPoolPositionResponse(): QueryGetPoolPositionResponse {
  return { poolPosition: undefined };
}

export const QueryGetPoolPositionResponse = {
  encode(
    message: QueryGetPoolPositionResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.poolPosition !== undefined) {
      PoolPosition.encode(
        message.poolPosition,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetPoolPositionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPoolPositionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolPosition = PoolPosition.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetPoolPositionResponse {
    return {
      poolPosition: isSet(object.poolPosition)
        ? PoolPosition.fromJSON(object.poolPosition)
        : undefined,
    };
  },

  toJSON(message: QueryGetPoolPositionResponse): unknown {
    const obj: any = {};
    message.poolPosition !== undefined &&
      (obj.poolPosition = message.poolPosition
        ? PoolPosition.toJSON(message.poolPosition)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetPoolPositionResponse>, I>>(
    object: I
  ): QueryGetPoolPositionResponse {
    const message = createBaseQueryGetPoolPositionResponse();
    message.poolPosition =
      object.poolPosition !== undefined && object.poolPosition !== null
        ? PoolPosition.fromPartial(object.poolPosition)
        : undefined;
    return message;
  },
};

function createBaseQueryAllPoolPositionRequest(): QueryAllPoolPositionRequest {
  return { address: "", owner: "", pagination: undefined };
}

export const QueryAllPoolPositionRequest = {
  encode(
    message: QueryAllPoolPositionRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAllPoolPositionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPoolPositionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.owner = reader.string();
          break;
        case 3:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllPoolPositionRequest {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryAllPoolPositionRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.owner !== undefined && (obj.owner = message.owner);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllPoolPositionRequest>, I>>(
    object: I
  ): QueryAllPoolPositionRequest {
    const message = createBaseQueryAllPoolPositionRequest();
    message.address = object.address ?? "";
    message.owner = object.owner ?? "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryAllPoolPositionResponse(): QueryAllPoolPositionResponse {
  return { poolPositions: [], pagination: undefined };
}

export const QueryAllPoolPositionResponse = {
  encode(
    message: QueryAllPoolPositionResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.poolPositions) {
      PoolPosition.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryAllPoolPositionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPoolPositionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolPositions.push(
            PoolPosition.decode(reader, reader.uint32())
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

  fromJSON(object: any): QueryAllPoolPositionResponse {
    return {
      poolPositions: Array.isArray(object?.poolPositions)
        ? object.poolPositions.map((e: any) => PoolPosition.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryAllPoolPositionResponse): unknown {
    const obj: any = {};
    if (message.poolPositions) {
      obj.poolPositions = message.poolPositions.map((e) =>
        e ? PoolPosition.toJSON(e) : undefined
      );
    } else {
      obj.poolPositions = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllPoolPositionResponse>, I>>(
    object: I
  ): QueryAllPoolPositionResponse {
    const message = createBaseQueryAllPoolPositionResponse();
    message.poolPositions =
      object.poolPositions?.map((e) => PoolPosition.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryGetPoolTickRequest(): QueryGetPoolTickRequest {
  return { address: "", index: 0 };
}

export const QueryGetPoolTickRequest = {
  encode(
    message: QueryGetPoolTickRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.index !== 0) {
      writer.uint32(16).int32(message.index);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetPoolTickRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPoolTickRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.index = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetPoolTickRequest {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      index: isSet(object.index) ? Number(object.index) : 0,
    };
  },

  toJSON(message: QueryGetPoolTickRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.index !== undefined && (obj.index = Math.round(message.index));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetPoolTickRequest>, I>>(
    object: I
  ): QueryGetPoolTickRequest {
    const message = createBaseQueryGetPoolTickRequest();
    message.address = object.address ?? "";
    message.index = object.index ?? 0;
    return message;
  },
};

function createBaseQueryGetPoolTickResponse(): QueryGetPoolTickResponse {
  return { poolTick: undefined };
}

export const QueryGetPoolTickResponse = {
  encode(
    message: QueryGetPoolTickResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.poolTick !== undefined) {
      PoolTick.encode(message.poolTick, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetPoolTickResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPoolTickResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolTick = PoolTick.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetPoolTickResponse {
    return {
      poolTick: isSet(object.poolTick)
        ? PoolTick.fromJSON(object.poolTick)
        : undefined,
    };
  },

  toJSON(message: QueryGetPoolTickResponse): unknown {
    const obj: any = {};
    message.poolTick !== undefined &&
      (obj.poolTick = message.poolTick
        ? PoolTick.toJSON(message.poolTick)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetPoolTickResponse>, I>>(
    object: I
  ): QueryGetPoolTickResponse {
    const message = createBaseQueryGetPoolTickResponse();
    message.poolTick =
      object.poolTick !== undefined && object.poolTick !== null
        ? PoolTick.fromPartial(object.poolTick)
        : undefined;
    return message;
  },
};

function createBaseQueryAllPoolTickRequest(): QueryAllPoolTickRequest {
  return { address: "", pagination: undefined };
}

export const QueryAllPoolTickRequest = {
  encode(
    message: QueryAllPoolTickRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAllPoolTickRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPoolTickRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
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

  fromJSON(object: any): QueryAllPoolTickRequest {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryAllPoolTickRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllPoolTickRequest>, I>>(
    object: I
  ): QueryAllPoolTickRequest {
    const message = createBaseQueryAllPoolTickRequest();
    message.address = object.address ?? "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryAllPoolTickResponse(): QueryAllPoolTickResponse {
  return { poolTicks: [], pagination: undefined };
}

export const QueryAllPoolTickResponse = {
  encode(
    message: QueryAllPoolTickResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.poolTicks) {
      PoolTick.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryAllPoolTickResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPoolTickResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolTicks.push(PoolTick.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllPoolTickResponse {
    return {
      poolTicks: Array.isArray(object?.poolTicks)
        ? object.poolTicks.map((e: any) => PoolTick.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryAllPoolTickResponse): unknown {
    const obj: any = {};
    if (message.poolTicks) {
      obj.poolTicks = message.poolTicks.map((e) =>
        e ? PoolTick.toJSON(e) : undefined
      );
    } else {
      obj.poolTicks = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllPoolTickResponse>, I>>(
    object: I
  ): QueryAllPoolTickResponse {
    const message = createBaseQueryAllPoolTickResponse();
    message.poolTicks =
      object.poolTicks?.map((e) => PoolTick.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryGetPoolWordRequest(): QueryGetPoolWordRequest {
  return { address: "", index: 0 };
}

export const QueryGetPoolWordRequest = {
  encode(
    message: QueryGetPoolWordRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.index !== 0) {
      writer.uint32(16).int32(message.index);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetPoolWordRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPoolWordRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.index = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetPoolWordRequest {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      index: isSet(object.index) ? Number(object.index) : 0,
    };
  },

  toJSON(message: QueryGetPoolWordRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.index !== undefined && (obj.index = Math.round(message.index));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetPoolWordRequest>, I>>(
    object: I
  ): QueryGetPoolWordRequest {
    const message = createBaseQueryGetPoolWordRequest();
    message.address = object.address ?? "";
    message.index = object.index ?? 0;
    return message;
  },
};

function createBaseQueryGetPoolWordResponse(): QueryGetPoolWordResponse {
  return { poolWord: undefined };
}

export const QueryGetPoolWordResponse = {
  encode(
    message: QueryGetPoolWordResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.poolWord !== undefined) {
      PoolWord.encode(message.poolWord, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetPoolWordResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPoolWordResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolWord = PoolWord.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetPoolWordResponse {
    return {
      poolWord: isSet(object.poolWord)
        ? PoolWord.fromJSON(object.poolWord)
        : undefined,
    };
  },

  toJSON(message: QueryGetPoolWordResponse): unknown {
    const obj: any = {};
    message.poolWord !== undefined &&
      (obj.poolWord = message.poolWord
        ? PoolWord.toJSON(message.poolWord)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetPoolWordResponse>, I>>(
    object: I
  ): QueryGetPoolWordResponse {
    const message = createBaseQueryGetPoolWordResponse();
    message.poolWord =
      object.poolWord !== undefined && object.poolWord !== null
        ? PoolWord.fromPartial(object.poolWord)
        : undefined;
    return message;
  },
};

function createBaseQueryAllPoolWordRequest(): QueryAllPoolWordRequest {
  return { address: "", pagination: undefined };
}

export const QueryAllPoolWordRequest = {
  encode(
    message: QueryAllPoolWordRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAllPoolWordRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPoolWordRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
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

  fromJSON(object: any): QueryAllPoolWordRequest {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryAllPoolWordRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllPoolWordRequest>, I>>(
    object: I
  ): QueryAllPoolWordRequest {
    const message = createBaseQueryAllPoolWordRequest();
    message.address = object.address ?? "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryAllPoolWordResponse(): QueryAllPoolWordResponse {
  return { poolWords: [], pagination: undefined };
}

export const QueryAllPoolWordResponse = {
  encode(
    message: QueryAllPoolWordResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.poolWords) {
      PoolWord.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryAllPoolWordResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPoolWordResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolWords.push(PoolWord.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllPoolWordResponse {
    return {
      poolWords: Array.isArray(object?.poolWords)
        ? object.poolWords.map((e: any) => PoolWord.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryAllPoolWordResponse): unknown {
    const obj: any = {};
    if (message.poolWords) {
      obj.poolWords = message.poolWords.map((e) =>
        e ? PoolWord.toJSON(e) : undefined
      );
    } else {
      obj.poolWords = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllPoolWordResponse>, I>>(
    object: I
  ): QueryAllPoolWordResponse {
    const message = createBaseQueryAllPoolWordResponse();
    message.poolWords =
      object.poolWords?.map((e) => PoolWord.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryGetLiquidityPositionTokenUriRequest(): QueryGetLiquidityPositionTokenUriRequest {
  return { tokenId: "" };
}

export const QueryGetLiquidityPositionTokenUriRequest = {
  encode(
    message: QueryGetLiquidityPositionTokenUriRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.tokenId !== "") {
      writer.uint32(10).string(message.tokenId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetLiquidityPositionTokenUriRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetLiquidityPositionTokenUriRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetLiquidityPositionTokenUriRequest {
    return {
      tokenId: isSet(object.tokenId) ? String(object.tokenId) : "",
    };
  },

  toJSON(message: QueryGetLiquidityPositionTokenUriRequest): unknown {
    const obj: any = {};
    message.tokenId !== undefined && (obj.tokenId = message.tokenId);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryGetLiquidityPositionTokenUriRequest>, I>
  >(object: I): QueryGetLiquidityPositionTokenUriRequest {
    const message = createBaseQueryGetLiquidityPositionTokenUriRequest();
    message.tokenId = object.tokenId ?? "";
    return message;
  },
};

function createBaseQueryGetLiquidityPositionTokenUriResponse(): QueryGetLiquidityPositionTokenUriResponse {
  return { uri: "" };
}

export const QueryGetLiquidityPositionTokenUriResponse = {
  encode(
    message: QueryGetLiquidityPositionTokenUriResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.uri !== "") {
      writer.uint32(10).string(message.uri);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetLiquidityPositionTokenUriResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetLiquidityPositionTokenUriResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.uri = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetLiquidityPositionTokenUriResponse {
    return {
      uri: isSet(object.uri) ? String(object.uri) : "",
    };
  },

  toJSON(message: QueryGetLiquidityPositionTokenUriResponse): unknown {
    const obj: any = {};
    message.uri !== undefined && (obj.uri = message.uri);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryGetLiquidityPositionTokenUriResponse>, I>
  >(object: I): QueryGetLiquidityPositionTokenUriResponse {
    const message = createBaseQueryGetLiquidityPositionTokenUriResponse();
    message.uri = object.uri ?? "";
    return message;
  },
};

function createBaseQueryAllLiquidityPositionOwnerRequest(): QueryAllLiquidityPositionOwnerRequest {
  return { address: "", skipZeroLiquidity: false };
}

export const QueryAllLiquidityPositionOwnerRequest = {
  encode(
    message: QueryAllLiquidityPositionOwnerRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.skipZeroLiquidity === true) {
      writer.uint32(16).bool(message.skipZeroLiquidity);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAllLiquidityPositionOwnerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllLiquidityPositionOwnerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.skipZeroLiquidity = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllLiquidityPositionOwnerRequest {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      skipZeroLiquidity: isSet(object.skipZeroLiquidity)
        ? Boolean(object.skipZeroLiquidity)
        : false,
    };
  },

  toJSON(message: QueryAllLiquidityPositionOwnerRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.skipZeroLiquidity !== undefined &&
      (obj.skipZeroLiquidity = message.skipZeroLiquidity);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryAllLiquidityPositionOwnerRequest>, I>
  >(object: I): QueryAllLiquidityPositionOwnerRequest {
    const message = createBaseQueryAllLiquidityPositionOwnerRequest();
    message.address = object.address ?? "";
    message.skipZeroLiquidity = object.skipZeroLiquidity ?? false;
    return message;
  },
};

function createBaseQueryAllLiquidityPositionOwnerResponse(): QueryAllLiquidityPositionOwnerResponse {
  return { liquidityPositions: [] };
}

export const QueryAllLiquidityPositionOwnerResponse = {
  encode(
    message: QueryAllLiquidityPositionOwnerResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.liquidityPositions) {
      LiquidityPosition.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAllLiquidityPositionOwnerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllLiquidityPositionOwnerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.liquidityPositions.push(
            LiquidityPosition.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllLiquidityPositionOwnerResponse {
    return {
      liquidityPositions: Array.isArray(object?.liquidityPositions)
        ? object.liquidityPositions.map((e: any) =>
            LiquidityPosition.fromJSON(e)
          )
        : [],
    };
  },

  toJSON(message: QueryAllLiquidityPositionOwnerResponse): unknown {
    const obj: any = {};
    if (message.liquidityPositions) {
      obj.liquidityPositions = message.liquidityPositions.map((e) =>
        e ? LiquidityPosition.toJSON(e) : undefined
      );
    } else {
      obj.liquidityPositions = [];
    }
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryAllLiquidityPositionOwnerResponse>, I>
  >(object: I): QueryAllLiquidityPositionOwnerResponse {
    const message = createBaseQueryAllLiquidityPositionOwnerResponse();
    message.liquidityPositions =
      object.liquidityPositions?.map((e) => LiquidityPosition.fromPartial(e)) ||
      [];
    return message;
  },
};

function createBaseQueryPoolSlot0AggregationRequest(): QueryPoolSlot0AggregationRequest {
  return { addresses: [] };
}

export const QueryPoolSlot0AggregationRequest = {
  encode(
    message: QueryPoolSlot0AggregationRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.addresses) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryPoolSlot0AggregationRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolSlot0AggregationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.addresses.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryPoolSlot0AggregationRequest {
    return {
      addresses: Array.isArray(object?.addresses)
        ? object.addresses.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: QueryPoolSlot0AggregationRequest): unknown {
    const obj: any = {};
    if (message.addresses) {
      obj.addresses = message.addresses.map((e) => e);
    } else {
      obj.addresses = [];
    }
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryPoolSlot0AggregationRequest>, I>
  >(object: I): QueryPoolSlot0AggregationRequest {
    const message = createBaseQueryPoolSlot0AggregationRequest();
    message.addresses = object.addresses?.map((e) => e) || [];
    return message;
  },
};

function createBasePoolSlot0AggregationResponse(): PoolSlot0AggregationResponse {
  return { pool: undefined, poolSlot0: undefined };
}

export const PoolSlot0AggregationResponse = {
  encode(
    message: PoolSlot0AggregationResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pool !== undefined) {
      Pool.encode(message.pool, writer.uint32(10).fork()).ldelim();
    }
    if (message.poolSlot0 !== undefined) {
      PoolSlot0.encode(message.poolSlot0, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): PoolSlot0AggregationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolSlot0AggregationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool = Pool.decode(reader, reader.uint32());
          break;
        case 2:
          message.poolSlot0 = PoolSlot0.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PoolSlot0AggregationResponse {
    return {
      pool: isSet(object.pool) ? Pool.fromJSON(object.pool) : undefined,
      poolSlot0: isSet(object.poolSlot0)
        ? PoolSlot0.fromJSON(object.poolSlot0)
        : undefined,
    };
  },

  toJSON(message: PoolSlot0AggregationResponse): unknown {
    const obj: any = {};
    message.pool !== undefined &&
      (obj.pool = message.pool ? Pool.toJSON(message.pool) : undefined);
    message.poolSlot0 !== undefined &&
      (obj.poolSlot0 = message.poolSlot0
        ? PoolSlot0.toJSON(message.poolSlot0)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PoolSlot0AggregationResponse>, I>>(
    object: I
  ): PoolSlot0AggregationResponse {
    const message = createBasePoolSlot0AggregationResponse();
    message.pool =
      object.pool !== undefined && object.pool !== null
        ? Pool.fromPartial(object.pool)
        : undefined;
    message.poolSlot0 =
      object.poolSlot0 !== undefined && object.poolSlot0 !== null
        ? PoolSlot0.fromPartial(object.poolSlot0)
        : undefined;
    return message;
  },
};

function createBaseQueryPoolSlot0AggregationResponse(): QueryPoolSlot0AggregationResponse {
  return { poolSlot0Aggregations: [] };
}

export const QueryPoolSlot0AggregationResponse = {
  encode(
    message: QueryPoolSlot0AggregationResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.poolSlot0Aggregations) {
      PoolSlot0AggregationResponse.encode(
        v!,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryPoolSlot0AggregationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolSlot0AggregationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolSlot0Aggregations.push(
            PoolSlot0AggregationResponse.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryPoolSlot0AggregationResponse {
    return {
      poolSlot0Aggregations: Array.isArray(object?.poolSlot0Aggregations)
        ? object.poolSlot0Aggregations.map((e: any) =>
            PoolSlot0AggregationResponse.fromJSON(e)
          )
        : [],
    };
  },

  toJSON(message: QueryPoolSlot0AggregationResponse): unknown {
    const obj: any = {};
    if (message.poolSlot0Aggregations) {
      obj.poolSlot0Aggregations = message.poolSlot0Aggregations.map((e) =>
        e ? PoolSlot0AggregationResponse.toJSON(e) : undefined
      );
    } else {
      obj.poolSlot0Aggregations = [];
    }
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryPoolSlot0AggregationResponse>, I>
  >(object: I): QueryPoolSlot0AggregationResponse {
    const message = createBaseQueryPoolSlot0AggregationResponse();
    message.poolSlot0Aggregations =
      object.poolSlot0Aggregations?.map((e) =>
        PoolSlot0AggregationResponse.fromPartial(e)
      ) || [];
    return message;
  },
};

function createBaseQueryQuoteSwapExactInRequest(): QueryQuoteSwapExactInRequest {
  return { amountIn: "", gasLimit: Long.UZERO, denoms: [], fees: [] };
}

export const QueryQuoteSwapExactInRequest = {
  encode(
    message: QueryQuoteSwapExactInRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.amountIn !== "") {
      writer.uint32(10).string(message.amountIn);
    }
    if (!message.gasLimit.isZero()) {
      writer.uint32(16).uint64(message.gasLimit);
    }
    for (const v of message.denoms) {
      writer.uint32(26).string(v!);
    }
    writer.uint32(34).fork();
    for (const v of message.fees) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryQuoteSwapExactInRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryQuoteSwapExactInRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amountIn = reader.string();
          break;
        case 2:
          message.gasLimit = reader.uint64() as Long;
          break;
        case 3:
          message.denoms.push(reader.string());
          break;
        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.fees.push(reader.int32());
            }
          } else {
            message.fees.push(reader.int32());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryQuoteSwapExactInRequest {
    return {
      amountIn: isSet(object.amountIn) ? String(object.amountIn) : "",
      gasLimit: isSet(object.gasLimit)
        ? Long.fromValue(object.gasLimit)
        : Long.UZERO,
      denoms: Array.isArray(object?.denoms)
        ? object.denoms.map((e: any) => String(e))
        : [],
      fees: Array.isArray(object?.fees)
        ? object.fees.map((e: any) => Number(e))
        : [],
    };
  },

  toJSON(message: QueryQuoteSwapExactInRequest): unknown {
    const obj: any = {};
    message.amountIn !== undefined && (obj.amountIn = message.amountIn);
    message.gasLimit !== undefined &&
      (obj.gasLimit = (message.gasLimit || Long.UZERO).toString());
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
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryQuoteSwapExactInRequest>, I>>(
    object: I
  ): QueryQuoteSwapExactInRequest {
    const message = createBaseQueryQuoteSwapExactInRequest();
    message.amountIn = object.amountIn ?? "";
    message.gasLimit =
      object.gasLimit !== undefined && object.gasLimit !== null
        ? Long.fromValue(object.gasLimit)
        : Long.UZERO;
    message.denoms = object.denoms?.map((e) => e) || [];
    message.fees = object.fees?.map((e) => e) || [];
    return message;
  },
};

function createBaseQueryQuoteSwapExactInResponse(): QueryQuoteSwapExactInResponse {
  return {
    available: false,
    amountOut: "",
    initializedTicksCrossed: 0,
    gasUsed: Long.UZERO,
  };
}

export const QueryQuoteSwapExactInResponse = {
  encode(
    message: QueryQuoteSwapExactInResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.available === true) {
      writer.uint32(8).bool(message.available);
    }
    if (message.amountOut !== "") {
      writer.uint32(18).string(message.amountOut);
    }
    if (message.initializedTicksCrossed !== 0) {
      writer.uint32(24).int32(message.initializedTicksCrossed);
    }
    if (!message.gasUsed.isZero()) {
      writer.uint32(32).uint64(message.gasUsed);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryQuoteSwapExactInResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryQuoteSwapExactInResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.available = reader.bool();
          break;
        case 2:
          message.amountOut = reader.string();
          break;
        case 3:
          message.initializedTicksCrossed = reader.int32();
          break;
        case 4:
          message.gasUsed = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryQuoteSwapExactInResponse {
    return {
      available: isSet(object.available) ? Boolean(object.available) : false,
      amountOut: isSet(object.amountOut) ? String(object.amountOut) : "",
      initializedTicksCrossed: isSet(object.initializedTicksCrossed)
        ? Number(object.initializedTicksCrossed)
        : 0,
      gasUsed: isSet(object.gasUsed)
        ? Long.fromValue(object.gasUsed)
        : Long.UZERO,
    };
  },

  toJSON(message: QueryQuoteSwapExactInResponse): unknown {
    const obj: any = {};
    message.available !== undefined && (obj.available = message.available);
    message.amountOut !== undefined && (obj.amountOut = message.amountOut);
    message.initializedTicksCrossed !== undefined &&
      (obj.initializedTicksCrossed = Math.round(
        message.initializedTicksCrossed
      ));
    message.gasUsed !== undefined &&
      (obj.gasUsed = (message.gasUsed || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryQuoteSwapExactInResponse>, I>>(
    object: I
  ): QueryQuoteSwapExactInResponse {
    const message = createBaseQueryQuoteSwapExactInResponse();
    message.available = object.available ?? false;
    message.amountOut = object.amountOut ?? "";
    message.initializedTicksCrossed = object.initializedTicksCrossed ?? 0;
    message.gasUsed =
      object.gasUsed !== undefined && object.gasUsed !== null
        ? Long.fromValue(object.gasUsed)
        : Long.UZERO;
    return message;
  },
};

function createBaseQueryQuoteSwapExactOutRequest(): QueryQuoteSwapExactOutRequest {
  return { amountOut: "", gasLimit: Long.UZERO, denoms: [], fees: [] };
}

export const QueryQuoteSwapExactOutRequest = {
  encode(
    message: QueryQuoteSwapExactOutRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.amountOut !== "") {
      writer.uint32(10).string(message.amountOut);
    }
    if (!message.gasLimit.isZero()) {
      writer.uint32(16).uint64(message.gasLimit);
    }
    for (const v of message.denoms) {
      writer.uint32(26).string(v!);
    }
    writer.uint32(34).fork();
    for (const v of message.fees) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryQuoteSwapExactOutRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryQuoteSwapExactOutRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amountOut = reader.string();
          break;
        case 2:
          message.gasLimit = reader.uint64() as Long;
          break;
        case 3:
          message.denoms.push(reader.string());
          break;
        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.fees.push(reader.int32());
            }
          } else {
            message.fees.push(reader.int32());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryQuoteSwapExactOutRequest {
    return {
      amountOut: isSet(object.amountOut) ? String(object.amountOut) : "",
      gasLimit: isSet(object.gasLimit)
        ? Long.fromValue(object.gasLimit)
        : Long.UZERO,
      denoms: Array.isArray(object?.denoms)
        ? object.denoms.map((e: any) => String(e))
        : [],
      fees: Array.isArray(object?.fees)
        ? object.fees.map((e: any) => Number(e))
        : [],
    };
  },

  toJSON(message: QueryQuoteSwapExactOutRequest): unknown {
    const obj: any = {};
    message.amountOut !== undefined && (obj.amountOut = message.amountOut);
    message.gasLimit !== undefined &&
      (obj.gasLimit = (message.gasLimit || Long.UZERO).toString());
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
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryQuoteSwapExactOutRequest>, I>>(
    object: I
  ): QueryQuoteSwapExactOutRequest {
    const message = createBaseQueryQuoteSwapExactOutRequest();
    message.amountOut = object.amountOut ?? "";
    message.gasLimit =
      object.gasLimit !== undefined && object.gasLimit !== null
        ? Long.fromValue(object.gasLimit)
        : Long.UZERO;
    message.denoms = object.denoms?.map((e) => e) || [];
    message.fees = object.fees?.map((e) => e) || [];
    return message;
  },
};

function createBaseQueryQuoteSwapExactOutResponse(): QueryQuoteSwapExactOutResponse {
  return {
    available: false,
    amountIn: "",
    initializedTicksCrossed: 0,
    gasUsed: Long.UZERO,
  };
}

export const QueryQuoteSwapExactOutResponse = {
  encode(
    message: QueryQuoteSwapExactOutResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.available === true) {
      writer.uint32(8).bool(message.available);
    }
    if (message.amountIn !== "") {
      writer.uint32(18).string(message.amountIn);
    }
    if (message.initializedTicksCrossed !== 0) {
      writer.uint32(24).int32(message.initializedTicksCrossed);
    }
    if (!message.gasUsed.isZero()) {
      writer.uint32(32).uint64(message.gasUsed);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryQuoteSwapExactOutResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryQuoteSwapExactOutResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.available = reader.bool();
          break;
        case 2:
          message.amountIn = reader.string();
          break;
        case 3:
          message.initializedTicksCrossed = reader.int32();
          break;
        case 4:
          message.gasUsed = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryQuoteSwapExactOutResponse {
    return {
      available: isSet(object.available) ? Boolean(object.available) : false,
      amountIn: isSet(object.amountIn) ? String(object.amountIn) : "",
      initializedTicksCrossed: isSet(object.initializedTicksCrossed)
        ? Number(object.initializedTicksCrossed)
        : 0,
      gasUsed: isSet(object.gasUsed)
        ? Long.fromValue(object.gasUsed)
        : Long.UZERO,
    };
  },

  toJSON(message: QueryQuoteSwapExactOutResponse): unknown {
    const obj: any = {};
    message.available !== undefined && (obj.available = message.available);
    message.amountIn !== undefined && (obj.amountIn = message.amountIn);
    message.initializedTicksCrossed !== undefined &&
      (obj.initializedTicksCrossed = Math.round(
        message.initializedTicksCrossed
      ));
    message.gasUsed !== undefined &&
      (obj.gasUsed = (message.gasUsed || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryQuoteSwapExactOutResponse>, I>>(
    object: I
  ): QueryQuoteSwapExactOutResponse {
    const message = createBaseQueryQuoteSwapExactOutResponse();
    message.available = object.available ?? false;
    message.amountIn = object.amountIn ?? "";
    message.initializedTicksCrossed = object.initializedTicksCrossed ?? 0;
    message.gasUsed =
      object.gasUsed !== undefined && object.gasUsed !== null
        ? Long.fromValue(object.gasUsed)
        : Long.UZERO;
    return message;
  },
};

function createBaseQueryGetActivatingPoolRequest(): QueryGetActivatingPoolRequest {
  return { address: "" };
}

export const QueryGetActivatingPoolRequest = {
  encode(
    message: QueryGetActivatingPoolRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetActivatingPoolRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetActivatingPoolRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetActivatingPoolRequest {
    return {
      address: isSet(object.address) ? String(object.address) : "",
    };
  },

  toJSON(message: QueryGetActivatingPoolRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetActivatingPoolRequest>, I>>(
    object: I
  ): QueryGetActivatingPoolRequest {
    const message = createBaseQueryGetActivatingPoolRequest();
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseQueryGetActivatingPoolResponse(): QueryGetActivatingPoolResponse {
  return { activatingPool: undefined };
}

export const QueryGetActivatingPoolResponse = {
  encode(
    message: QueryGetActivatingPoolResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.activatingPool !== undefined) {
      ActivatingPool.encode(
        message.activatingPool,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetActivatingPoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetActivatingPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.activatingPool = ActivatingPool.decode(
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

  fromJSON(object: any): QueryGetActivatingPoolResponse {
    return {
      activatingPool: isSet(object.activatingPool)
        ? ActivatingPool.fromJSON(object.activatingPool)
        : undefined,
    };
  },

  toJSON(message: QueryGetActivatingPoolResponse): unknown {
    const obj: any = {};
    message.activatingPool !== undefined &&
      (obj.activatingPool = message.activatingPool
        ? ActivatingPool.toJSON(message.activatingPool)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetActivatingPoolResponse>, I>>(
    object: I
  ): QueryGetActivatingPoolResponse {
    const message = createBaseQueryGetActivatingPoolResponse();
    message.activatingPool =
      object.activatingPool !== undefined && object.activatingPool !== null
        ? ActivatingPool.fromPartial(object.activatingPool)
        : undefined;
    return message;
  },
};

function createBaseQueryAllActivatingPoolRequest(): QueryAllActivatingPoolRequest {
  return { pagination: undefined };
}

export const QueryAllActivatingPoolRequest = {
  encode(
    message: QueryAllActivatingPoolRequest,
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
  ): QueryAllActivatingPoolRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllActivatingPoolRequest();
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

  fromJSON(object: any): QueryAllActivatingPoolRequest {
    return {
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryAllActivatingPoolRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllActivatingPoolRequest>, I>>(
    object: I
  ): QueryAllActivatingPoolRequest {
    const message = createBaseQueryAllActivatingPoolRequest();
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryAllActivatingPoolResponse(): QueryAllActivatingPoolResponse {
  return { activatingPool: [], pagination: undefined };
}

export const QueryAllActivatingPoolResponse = {
  encode(
    message: QueryAllActivatingPoolResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.activatingPool) {
      ActivatingPool.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryAllActivatingPoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllActivatingPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.activatingPool.push(
            ActivatingPool.decode(reader, reader.uint32())
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

  fromJSON(object: any): QueryAllActivatingPoolResponse {
    return {
      activatingPool: Array.isArray(object?.activatingPool)
        ? object.activatingPool.map((e: any) => ActivatingPool.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryAllActivatingPoolResponse): unknown {
    const obj: any = {};
    if (message.activatingPool) {
      obj.activatingPool = message.activatingPool.map((e) =>
        e ? ActivatingPool.toJSON(e) : undefined
      );
    } else {
      obj.activatingPool = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllActivatingPoolResponse>, I>>(
    object: I
  ): QueryAllActivatingPoolResponse {
    const message = createBaseQueryAllActivatingPoolResponse();
    message.activatingPool =
      object.activatingPool?.map((e) => ActivatingPool.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(
    request: DeepPartial<QueryParamsRequest>,
    metadata?: grpc.Metadata
  ): Promise<QueryParamsResponse>;
  /** Queries a NonfungiblePositionPool by index. */
  NonfungiblePositionPool(
    request: DeepPartial<QueryGetNonfungiblePositionPoolRequest>,
    metadata?: grpc.Metadata
  ): Promise<QueryGetNonfungiblePositionPoolResponse>;
  /** Queries a LiquidityPosition by index. */
  LiquidityPosition(
    request: DeepPartial<QueryGetLiquidityPositionRequest>,
    metadata?: grpc.Metadata
  ): Promise<QueryGetLiquidityPositionResponse>;
  /** Queries a list of LiquidityPosition items. */
  LiquidityPositionAll(
    request: DeepPartial<QueryAllLiquidityPositionRequest>,
    metadata?: grpc.Metadata
  ): Promise<QueryAllLiquidityPositionResponse>;
  /** Query the total liquidity positions for a specific owner address. */
  LiquidityPositionOwner(
    request: DeepPartial<QueryAllLiquidityPositionOwnerRequest>,
    metadata?: grpc.Metadata
  ): Promise<QueryAllLiquidityPositionOwnerResponse>;
  /** Produces the URI describing a particular token ID for a liquidity position. */
  LiquidityPositionTokenUri(
    request: DeepPartial<QueryGetLiquidityPositionTokenUriRequest>,
    metadata?: grpc.Metadata
  ): Promise<QueryGetLiquidityPositionTokenUriResponse>;
  /** Queries a Pool by index. */
  Pool(
    request: DeepPartial<QueryGetPoolRequest>,
    metadata?: grpc.Metadata
  ): Promise<QueryGetPoolResponse>;
  /** Queries a list of Pool items. */
  PoolAll(
    request: DeepPartial<QueryAllPoolRequest>,
    metadata?: grpc.Metadata
  ): Promise<QueryAllPoolResponse>;
  /** Queries a PoolFee by index. */
  PoolFee(
    request: DeepPartial<QueryGetPoolFeeRequest>,
    metadata?: grpc.Metadata
  ): Promise<QueryGetPoolFeeResponse>;
  /** Queries a list of PoolFee items. */
  PoolFeeAll(
    request: DeepPartial<QueryAllPoolFeeRequest>,
    metadata?: grpc.Metadata
  ): Promise<QueryAllPoolFeeResponse>;
  /** Queries a PoolSlot0 by index. */
  PoolSlot0(
    request: DeepPartial<QueryGetPoolSlot0Request>,
    metadata?: grpc.Metadata
  ): Promise<QueryGetPoolSlot0Response>;
  /** Queries a list of PoolSlot0 items. */
  PoolSlot0All(
    request: DeepPartial<QueryAllPoolSlot0Request>,
    metadata?: grpc.Metadata
  ): Promise<QueryAllPoolSlot0Response>;
  /** Queries a list of PoolSlot0Aggregation items. */
  PoolSlot0Aggregation(
    request: DeepPartial<QueryPoolSlot0AggregationRequest>,
    metadata?: grpc.Metadata
  ): Promise<QueryPoolSlot0AggregationResponse>;
  /** Queries a PoolObservation by index. */
  PoolObservation(
    request: DeepPartial<QueryGetPoolObservationRequest>,
    metadata?: grpc.Metadata
  ): Promise<QueryGetPoolObservationResponse>;
  /** Queries a list of PoolObservation items. */
  PoolObservationAll(
    request: DeepPartial<QueryAllPoolObservationRequest>,
    metadata?: grpc.Metadata
  ): Promise<QueryAllPoolObservationResponse>;
  /** Queries a PoolPosition by index. */
  PoolPosition(
    request: DeepPartial<QueryGetPoolPositionRequest>,
    metadata?: grpc.Metadata
  ): Promise<QueryGetPoolPositionResponse>;
  /** Queries a list of PoolPosition items. */
  PoolPositionAll(
    request: DeepPartial<QueryAllPoolPositionRequest>,
    metadata?: grpc.Metadata
  ): Promise<QueryAllPoolPositionResponse>;
  /** Queries a PoolTick by index. */
  PoolTick(
    request: DeepPartial<QueryGetPoolTickRequest>,
    metadata?: grpc.Metadata
  ): Promise<QueryGetPoolTickResponse>;
  /** Queries a list of PoolTick items. */
  PoolTickAll(
    request: DeepPartial<QueryAllPoolTickRequest>,
    metadata?: grpc.Metadata
  ): Promise<QueryAllPoolTickResponse>;
  /** Queries a PoolWord by index. */
  PoolWord(
    request: DeepPartial<QueryGetPoolWordRequest>,
    metadata?: grpc.Metadata
  ): Promise<QueryGetPoolWordResponse>;
  /** Queries a list of PoolWord items. */
  PoolWordAll(
    request: DeepPartial<QueryAllPoolWordRequest>,
    metadata?: grpc.Metadata
  ): Promise<QueryAllPoolWordResponse>;
  /** Returns the amount out received for a given exact input swap without execution the swap. */
  QuoteSwapExactIn(
    request: DeepPartial<QueryQuoteSwapExactInRequest>,
    metadata?: grpc.Metadata
  ): Promise<QueryQuoteSwapExactInResponse>;
  /** Returns the amount in required for a given exact output swap without executing the swap. */
  QuoteSwapExactOut(
    request: DeepPartial<QueryQuoteSwapExactOutRequest>,
    metadata?: grpc.Metadata
  ): Promise<QueryQuoteSwapExactOutResponse>;
  /** Queries a ActivatingPool by index. */
  ActivatingPool(
    request: DeepPartial<QueryGetActivatingPoolRequest>,
    metadata?: grpc.Metadata
  ): Promise<QueryGetActivatingPoolResponse>;
  /** Queries a list of ActivatingPool items. */
  ActivatingPoolAll(
    request: DeepPartial<QueryAllActivatingPoolRequest>,
    metadata?: grpc.Metadata
  ): Promise<QueryAllActivatingPoolResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.NonfungiblePositionPool = this.NonfungiblePositionPool.bind(this);
    this.LiquidityPosition = this.LiquidityPosition.bind(this);
    this.LiquidityPositionAll = this.LiquidityPositionAll.bind(this);
    this.LiquidityPositionOwner = this.LiquidityPositionOwner.bind(this);
    this.LiquidityPositionTokenUri = this.LiquidityPositionTokenUri.bind(this);
    this.Pool = this.Pool.bind(this);
    this.PoolAll = this.PoolAll.bind(this);
    this.PoolFee = this.PoolFee.bind(this);
    this.PoolFeeAll = this.PoolFeeAll.bind(this);
    this.PoolSlot0 = this.PoolSlot0.bind(this);
    this.PoolSlot0All = this.PoolSlot0All.bind(this);
    this.PoolSlot0Aggregation = this.PoolSlot0Aggregation.bind(this);
    this.PoolObservation = this.PoolObservation.bind(this);
    this.PoolObservationAll = this.PoolObservationAll.bind(this);
    this.PoolPosition = this.PoolPosition.bind(this);
    this.PoolPositionAll = this.PoolPositionAll.bind(this);
    this.PoolTick = this.PoolTick.bind(this);
    this.PoolTickAll = this.PoolTickAll.bind(this);
    this.PoolWord = this.PoolWord.bind(this);
    this.PoolWordAll = this.PoolWordAll.bind(this);
    this.QuoteSwapExactIn = this.QuoteSwapExactIn.bind(this);
    this.QuoteSwapExactOut = this.QuoteSwapExactOut.bind(this);
    this.ActivatingPool = this.ActivatingPool.bind(this);
    this.ActivatingPoolAll = this.ActivatingPoolAll.bind(this);
  }

  Params(
    request: DeepPartial<QueryParamsRequest>,
    metadata?: grpc.Metadata
  ): Promise<QueryParamsResponse> {
    return this.rpc.unary(
      QueryParamsDesc,
      QueryParamsRequest.fromPartial(request),
      metadata
    );
  }

  NonfungiblePositionPool(
    request: DeepPartial<QueryGetNonfungiblePositionPoolRequest>,
    metadata?: grpc.Metadata
  ): Promise<QueryGetNonfungiblePositionPoolResponse> {
    return this.rpc.unary(
      QueryNonfungiblePositionPoolDesc,
      QueryGetNonfungiblePositionPoolRequest.fromPartial(request),
      metadata
    );
  }

  LiquidityPosition(
    request: DeepPartial<QueryGetLiquidityPositionRequest>,
    metadata?: grpc.Metadata
  ): Promise<QueryGetLiquidityPositionResponse> {
    return this.rpc.unary(
      QueryLiquidityPositionDesc,
      QueryGetLiquidityPositionRequest.fromPartial(request),
      metadata
    );
  }

  LiquidityPositionAll(
    request: DeepPartial<QueryAllLiquidityPositionRequest>,
    metadata?: grpc.Metadata
  ): Promise<QueryAllLiquidityPositionResponse> {
    return this.rpc.unary(
      QueryLiquidityPositionAllDesc,
      QueryAllLiquidityPositionRequest.fromPartial(request),
      metadata
    );
  }

  LiquidityPositionOwner(
    request: DeepPartial<QueryAllLiquidityPositionOwnerRequest>,
    metadata?: grpc.Metadata
  ): Promise<QueryAllLiquidityPositionOwnerResponse> {
    return this.rpc.unary(
      QueryLiquidityPositionOwnerDesc,
      QueryAllLiquidityPositionOwnerRequest.fromPartial(request),
      metadata
    );
  }

  LiquidityPositionTokenUri(
    request: DeepPartial<QueryGetLiquidityPositionTokenUriRequest>,
    metadata?: grpc.Metadata
  ): Promise<QueryGetLiquidityPositionTokenUriResponse> {
    return this.rpc.unary(
      QueryLiquidityPositionTokenUriDesc,
      QueryGetLiquidityPositionTokenUriRequest.fromPartial(request),
      metadata
    );
  }

  Pool(
    request: DeepPartial<QueryGetPoolRequest>,
    metadata?: grpc.Metadata
  ): Promise<QueryGetPoolResponse> {
    return this.rpc.unary(
      QueryPoolDesc,
      QueryGetPoolRequest.fromPartial(request),
      metadata
    );
  }

  PoolAll(
    request: DeepPartial<QueryAllPoolRequest>,
    metadata?: grpc.Metadata
  ): Promise<QueryAllPoolResponse> {
    return this.rpc.unary(
      QueryPoolAllDesc,
      QueryAllPoolRequest.fromPartial(request),
      metadata
    );
  }

  PoolFee(
    request: DeepPartial<QueryGetPoolFeeRequest>,
    metadata?: grpc.Metadata
  ): Promise<QueryGetPoolFeeResponse> {
    return this.rpc.unary(
      QueryPoolFeeDesc,
      QueryGetPoolFeeRequest.fromPartial(request),
      metadata
    );
  }

  PoolFeeAll(
    request: DeepPartial<QueryAllPoolFeeRequest>,
    metadata?: grpc.Metadata
  ): Promise<QueryAllPoolFeeResponse> {
    return this.rpc.unary(
      QueryPoolFeeAllDesc,
      QueryAllPoolFeeRequest.fromPartial(request),
      metadata
    );
  }

  PoolSlot0(
    request: DeepPartial<QueryGetPoolSlot0Request>,
    metadata?: grpc.Metadata
  ): Promise<QueryGetPoolSlot0Response> {
    return this.rpc.unary(
      QueryPoolSlot0Desc,
      QueryGetPoolSlot0Request.fromPartial(request),
      metadata
    );
  }

  PoolSlot0All(
    request: DeepPartial<QueryAllPoolSlot0Request>,
    metadata?: grpc.Metadata
  ): Promise<QueryAllPoolSlot0Response> {
    return this.rpc.unary(
      QueryPoolSlot0AllDesc,
      QueryAllPoolSlot0Request.fromPartial(request),
      metadata
    );
  }

  PoolSlot0Aggregation(
    request: DeepPartial<QueryPoolSlot0AggregationRequest>,
    metadata?: grpc.Metadata
  ): Promise<QueryPoolSlot0AggregationResponse> {
    return this.rpc.unary(
      QueryPoolSlot0AggregationDesc,
      QueryPoolSlot0AggregationRequest.fromPartial(request),
      metadata
    );
  }

  PoolObservation(
    request: DeepPartial<QueryGetPoolObservationRequest>,
    metadata?: grpc.Metadata
  ): Promise<QueryGetPoolObservationResponse> {
    return this.rpc.unary(
      QueryPoolObservationDesc,
      QueryGetPoolObservationRequest.fromPartial(request),
      metadata
    );
  }

  PoolObservationAll(
    request: DeepPartial<QueryAllPoolObservationRequest>,
    metadata?: grpc.Metadata
  ): Promise<QueryAllPoolObservationResponse> {
    return this.rpc.unary(
      QueryPoolObservationAllDesc,
      QueryAllPoolObservationRequest.fromPartial(request),
      metadata
    );
  }

  PoolPosition(
    request: DeepPartial<QueryGetPoolPositionRequest>,
    metadata?: grpc.Metadata
  ): Promise<QueryGetPoolPositionResponse> {
    return this.rpc.unary(
      QueryPoolPositionDesc,
      QueryGetPoolPositionRequest.fromPartial(request),
      metadata
    );
  }

  PoolPositionAll(
    request: DeepPartial<QueryAllPoolPositionRequest>,
    metadata?: grpc.Metadata
  ): Promise<QueryAllPoolPositionResponse> {
    return this.rpc.unary(
      QueryPoolPositionAllDesc,
      QueryAllPoolPositionRequest.fromPartial(request),
      metadata
    );
  }

  PoolTick(
    request: DeepPartial<QueryGetPoolTickRequest>,
    metadata?: grpc.Metadata
  ): Promise<QueryGetPoolTickResponse> {
    return this.rpc.unary(
      QueryPoolTickDesc,
      QueryGetPoolTickRequest.fromPartial(request),
      metadata
    );
  }

  PoolTickAll(
    request: DeepPartial<QueryAllPoolTickRequest>,
    metadata?: grpc.Metadata
  ): Promise<QueryAllPoolTickResponse> {
    return this.rpc.unary(
      QueryPoolTickAllDesc,
      QueryAllPoolTickRequest.fromPartial(request),
      metadata
    );
  }

  PoolWord(
    request: DeepPartial<QueryGetPoolWordRequest>,
    metadata?: grpc.Metadata
  ): Promise<QueryGetPoolWordResponse> {
    return this.rpc.unary(
      QueryPoolWordDesc,
      QueryGetPoolWordRequest.fromPartial(request),
      metadata
    );
  }

  PoolWordAll(
    request: DeepPartial<QueryAllPoolWordRequest>,
    metadata?: grpc.Metadata
  ): Promise<QueryAllPoolWordResponse> {
    return this.rpc.unary(
      QueryPoolWordAllDesc,
      QueryAllPoolWordRequest.fromPartial(request),
      metadata
    );
  }

  QuoteSwapExactIn(
    request: DeepPartial<QueryQuoteSwapExactInRequest>,
    metadata?: grpc.Metadata
  ): Promise<QueryQuoteSwapExactInResponse> {
    return this.rpc.unary(
      QueryQuoteSwapExactInDesc,
      QueryQuoteSwapExactInRequest.fromPartial(request),
      metadata
    );
  }

  QuoteSwapExactOut(
    request: DeepPartial<QueryQuoteSwapExactOutRequest>,
    metadata?: grpc.Metadata
  ): Promise<QueryQuoteSwapExactOutResponse> {
    return this.rpc.unary(
      QueryQuoteSwapExactOutDesc,
      QueryQuoteSwapExactOutRequest.fromPartial(request),
      metadata
    );
  }

  ActivatingPool(
    request: DeepPartial<QueryGetActivatingPoolRequest>,
    metadata?: grpc.Metadata
  ): Promise<QueryGetActivatingPoolResponse> {
    return this.rpc.unary(
      QueryActivatingPoolDesc,
      QueryGetActivatingPoolRequest.fromPartial(request),
      metadata
    );
  }

  ActivatingPoolAll(
    request: DeepPartial<QueryAllActivatingPoolRequest>,
    metadata?: grpc.Metadata
  ): Promise<QueryAllActivatingPoolResponse> {
    return this.rpc.unary(
      QueryActivatingPoolAllDesc,
      QueryAllActivatingPoolRequest.fromPartial(request),
      metadata
    );
  }
}

export const QueryDesc = {
  serviceName: "sophonlabs.sophon.swap.Query",
};

export const QueryParamsDesc: UnaryMethodDefinitionish = {
  methodName: "Params",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryParamsRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryParamsResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryNonfungiblePositionPoolDesc: UnaryMethodDefinitionish = {
  methodName: "NonfungiblePositionPool",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryGetNonfungiblePositionPoolRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryGetNonfungiblePositionPoolResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryLiquidityPositionDesc: UnaryMethodDefinitionish = {
  methodName: "LiquidityPosition",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryGetLiquidityPositionRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryGetLiquidityPositionResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryLiquidityPositionAllDesc: UnaryMethodDefinitionish = {
  methodName: "LiquidityPositionAll",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryAllLiquidityPositionRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryAllLiquidityPositionResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryLiquidityPositionOwnerDesc: UnaryMethodDefinitionish = {
  methodName: "LiquidityPositionOwner",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryAllLiquidityPositionOwnerRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryAllLiquidityPositionOwnerResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryLiquidityPositionTokenUriDesc: UnaryMethodDefinitionish = {
  methodName: "LiquidityPositionTokenUri",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryGetLiquidityPositionTokenUriRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryGetLiquidityPositionTokenUriResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryPoolDesc: UnaryMethodDefinitionish = {
  methodName: "Pool",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryGetPoolRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryGetPoolResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryPoolAllDesc: UnaryMethodDefinitionish = {
  methodName: "PoolAll",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryAllPoolRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryAllPoolResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryPoolFeeDesc: UnaryMethodDefinitionish = {
  methodName: "PoolFee",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryGetPoolFeeRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryGetPoolFeeResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryPoolFeeAllDesc: UnaryMethodDefinitionish = {
  methodName: "PoolFeeAll",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryAllPoolFeeRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryAllPoolFeeResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryPoolSlot0Desc: UnaryMethodDefinitionish = {
  methodName: "PoolSlot0",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryGetPoolSlot0Request.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryGetPoolSlot0Response.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryPoolSlot0AllDesc: UnaryMethodDefinitionish = {
  methodName: "PoolSlot0All",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryAllPoolSlot0Request.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryAllPoolSlot0Response.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryPoolSlot0AggregationDesc: UnaryMethodDefinitionish = {
  methodName: "PoolSlot0Aggregation",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryPoolSlot0AggregationRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryPoolSlot0AggregationResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryPoolObservationDesc: UnaryMethodDefinitionish = {
  methodName: "PoolObservation",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryGetPoolObservationRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryGetPoolObservationResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryPoolObservationAllDesc: UnaryMethodDefinitionish = {
  methodName: "PoolObservationAll",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryAllPoolObservationRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryAllPoolObservationResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryPoolPositionDesc: UnaryMethodDefinitionish = {
  methodName: "PoolPosition",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryGetPoolPositionRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryGetPoolPositionResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryPoolPositionAllDesc: UnaryMethodDefinitionish = {
  methodName: "PoolPositionAll",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryAllPoolPositionRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryAllPoolPositionResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryPoolTickDesc: UnaryMethodDefinitionish = {
  methodName: "PoolTick",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryGetPoolTickRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryGetPoolTickResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryPoolTickAllDesc: UnaryMethodDefinitionish = {
  methodName: "PoolTickAll",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryAllPoolTickRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryAllPoolTickResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryPoolWordDesc: UnaryMethodDefinitionish = {
  methodName: "PoolWord",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryGetPoolWordRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryGetPoolWordResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryPoolWordAllDesc: UnaryMethodDefinitionish = {
  methodName: "PoolWordAll",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryAllPoolWordRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryAllPoolWordResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryQuoteSwapExactInDesc: UnaryMethodDefinitionish = {
  methodName: "QuoteSwapExactIn",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryQuoteSwapExactInRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryQuoteSwapExactInResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryQuoteSwapExactOutDesc: UnaryMethodDefinitionish = {
  methodName: "QuoteSwapExactOut",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryQuoteSwapExactOutRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryQuoteSwapExactOutResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryActivatingPoolDesc: UnaryMethodDefinitionish = {
  methodName: "ActivatingPool",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryGetActivatingPoolRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryGetActivatingPoolResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryActivatingPoolAllDesc: UnaryMethodDefinitionish = {
  methodName: "ActivatingPoolAll",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryAllActivatingPoolRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryAllActivatingPoolResponse.decode(data),
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
