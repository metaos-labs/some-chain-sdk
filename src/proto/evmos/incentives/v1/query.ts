/* eslint-disable */
import Long from "long";
import { grpc } from "@improbable-eng/grpc-web";
import * as _m0 from "protobufjs/minimal";
import {
  PageRequest,
  PageResponse,
} from "../../../cosmos/base/query/v1beta1/pagination";
import { Incentive, GasMeter } from "./incentives";
import { DecCoin } from "../../../cosmos/base/v1beta1/coin";
import { Params } from "./genesis";
import { BrowserHeaders } from "browser-headers";

export const protobufPackage = "evmos.incentives.v1";

/**
 * QueryIncentivesRequest is the request type for the Query/Incentives RPC
 * method.
 */
export interface QueryIncentivesRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/**
 * QueryIncentivesResponse is the response type for the Query/Incentives RPC
 * method.
 */
export interface QueryIncentivesResponse {
  incentives: Incentive[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}

/** QueryIncentiveRequest is the request type for the Query/Incentive RPC method. */
export interface QueryIncentiveRequest {
  /** contract identifier is the hex contract address of a contract */
  contract: string;
}

/**
 * QueryIncentiveResponse is the response type for the Query/Incentive RPC
 * method.
 */
export interface QueryIncentiveResponse {
  incentive?: Incentive;
}

/**
 * QueryGasMetersRequest is the request type for the Query/Incentives RPC
 * method.
 */
export interface QueryGasMetersRequest {
  /** contract is the hex contract address of a incentivized smart contract */
  contract: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/**
 * QueryGasMetersResponse is the response type for the Query/Incentives RPC
 * method.
 */
export interface QueryGasMetersResponse {
  gasMeters: GasMeter[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}

/** QueryGasMeterRequest is the request type for the Query/Incentive RPC method. */
export interface QueryGasMeterRequest {
  /** contract identifier is the hex contract address of a contract */
  contract: string;
  /** participant identifier is the hex address of a user */
  participant: string;
}

/**
 * QueryGasMeterResponse is the response type for the Query/Incentive RPC
 * method.
 */
export interface QueryGasMeterResponse {
  gasMeter: Long;
}

/**
 * QueryAllocationMetersRequest is the request type for the
 * Query/AllocationMeters RPC method.
 */
export interface QueryAllocationMetersRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/**
 * QueryAllocationMetersResponse is the response type for the
 * Query/AllocationMeters RPC method.
 */
export interface QueryAllocationMetersResponse {
  allocationMeters: DecCoin[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}

/**
 * QueryAllocationMeterRequest is the request type for the Query/AllocationMeter
 * RPC method.
 */
export interface QueryAllocationMeterRequest {
  /** denom is the coin denom to query an allocation meter for. */
  denom: string;
}

/**
 * QueryAllocationMeterResponse is the response type for the
 * Query/AllocationMeter RPC method.
 */
export interface QueryAllocationMeterResponse {
  allocationMeter?: DecCoin;
}

/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/**
 * QueryParamsResponse is the response type for the Query/Params RPC
 * method.
 */
export interface QueryParamsResponse {
  params?: Params;
}

function createBaseQueryIncentivesRequest(): QueryIncentivesRequest {
  return { pagination: undefined };
}

export const QueryIncentivesRequest = {
  encode(
    message: QueryIncentivesRequest,
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
  ): QueryIncentivesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIncentivesRequest();
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

  fromJSON(object: any): QueryIncentivesRequest {
    return {
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryIncentivesRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryIncentivesRequest>, I>>(
    object: I
  ): QueryIncentivesRequest {
    const message = createBaseQueryIncentivesRequest();
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryIncentivesResponse(): QueryIncentivesResponse {
  return { incentives: [], pagination: undefined };
}

export const QueryIncentivesResponse = {
  encode(
    message: QueryIncentivesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.incentives) {
      Incentive.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryIncentivesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIncentivesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.incentives.push(Incentive.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryIncentivesResponse {
    return {
      incentives: Array.isArray(object?.incentives)
        ? object.incentives.map((e: any) => Incentive.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryIncentivesResponse): unknown {
    const obj: any = {};
    if (message.incentives) {
      obj.incentives = message.incentives.map((e) =>
        e ? Incentive.toJSON(e) : undefined
      );
    } else {
      obj.incentives = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryIncentivesResponse>, I>>(
    object: I
  ): QueryIncentivesResponse {
    const message = createBaseQueryIncentivesResponse();
    message.incentives =
      object.incentives?.map((e) => Incentive.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryIncentiveRequest(): QueryIncentiveRequest {
  return { contract: "" };
}

export const QueryIncentiveRequest = {
  encode(
    message: QueryIncentiveRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contract !== "") {
      writer.uint32(10).string(message.contract);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryIncentiveRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIncentiveRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contract = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryIncentiveRequest {
    return {
      contract: isSet(object.contract) ? String(object.contract) : "",
    };
  },

  toJSON(message: QueryIncentiveRequest): unknown {
    const obj: any = {};
    message.contract !== undefined && (obj.contract = message.contract);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryIncentiveRequest>, I>>(
    object: I
  ): QueryIncentiveRequest {
    const message = createBaseQueryIncentiveRequest();
    message.contract = object.contract ?? "";
    return message;
  },
};

function createBaseQueryIncentiveResponse(): QueryIncentiveResponse {
  return { incentive: undefined };
}

export const QueryIncentiveResponse = {
  encode(
    message: QueryIncentiveResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.incentive !== undefined) {
      Incentive.encode(message.incentive, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryIncentiveResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIncentiveResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.incentive = Incentive.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryIncentiveResponse {
    return {
      incentive: isSet(object.incentive)
        ? Incentive.fromJSON(object.incentive)
        : undefined,
    };
  },

  toJSON(message: QueryIncentiveResponse): unknown {
    const obj: any = {};
    message.incentive !== undefined &&
      (obj.incentive = message.incentive
        ? Incentive.toJSON(message.incentive)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryIncentiveResponse>, I>>(
    object: I
  ): QueryIncentiveResponse {
    const message = createBaseQueryIncentiveResponse();
    message.incentive =
      object.incentive !== undefined && object.incentive !== null
        ? Incentive.fromPartial(object.incentive)
        : undefined;
    return message;
  },
};

function createBaseQueryGasMetersRequest(): QueryGasMetersRequest {
  return { contract: "", pagination: undefined };
}

export const QueryGasMetersRequest = {
  encode(
    message: QueryGasMetersRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contract !== "") {
      writer.uint32(10).string(message.contract);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGasMetersRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGasMetersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contract = reader.string();
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

  fromJSON(object: any): QueryGasMetersRequest {
    return {
      contract: isSet(object.contract) ? String(object.contract) : "",
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryGasMetersRequest): unknown {
    const obj: any = {};
    message.contract !== undefined && (obj.contract = message.contract);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGasMetersRequest>, I>>(
    object: I
  ): QueryGasMetersRequest {
    const message = createBaseQueryGasMetersRequest();
    message.contract = object.contract ?? "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryGasMetersResponse(): QueryGasMetersResponse {
  return { gasMeters: [], pagination: undefined };
}

export const QueryGasMetersResponse = {
  encode(
    message: QueryGasMetersResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.gasMeters) {
      GasMeter.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryGasMetersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGasMetersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gasMeters.push(GasMeter.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryGasMetersResponse {
    return {
      gasMeters: Array.isArray(object?.gasMeters)
        ? object.gasMeters.map((e: any) => GasMeter.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryGasMetersResponse): unknown {
    const obj: any = {};
    if (message.gasMeters) {
      obj.gasMeters = message.gasMeters.map((e) =>
        e ? GasMeter.toJSON(e) : undefined
      );
    } else {
      obj.gasMeters = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGasMetersResponse>, I>>(
    object: I
  ): QueryGasMetersResponse {
    const message = createBaseQueryGasMetersResponse();
    message.gasMeters =
      object.gasMeters?.map((e) => GasMeter.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryGasMeterRequest(): QueryGasMeterRequest {
  return { contract: "", participant: "" };
}

export const QueryGasMeterRequest = {
  encode(
    message: QueryGasMeterRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contract !== "") {
      writer.uint32(10).string(message.contract);
    }
    if (message.participant !== "") {
      writer.uint32(18).string(message.participant);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGasMeterRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGasMeterRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contract = reader.string();
          break;
        case 2:
          message.participant = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGasMeterRequest {
    return {
      contract: isSet(object.contract) ? String(object.contract) : "",
      participant: isSet(object.participant) ? String(object.participant) : "",
    };
  },

  toJSON(message: QueryGasMeterRequest): unknown {
    const obj: any = {};
    message.contract !== undefined && (obj.contract = message.contract);
    message.participant !== undefined &&
      (obj.participant = message.participant);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGasMeterRequest>, I>>(
    object: I
  ): QueryGasMeterRequest {
    const message = createBaseQueryGasMeterRequest();
    message.contract = object.contract ?? "";
    message.participant = object.participant ?? "";
    return message;
  },
};

function createBaseQueryGasMeterResponse(): QueryGasMeterResponse {
  return { gasMeter: Long.UZERO };
}

export const QueryGasMeterResponse = {
  encode(
    message: QueryGasMeterResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.gasMeter.isZero()) {
      writer.uint32(8).uint64(message.gasMeter);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGasMeterResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGasMeterResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gasMeter = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGasMeterResponse {
    return {
      gasMeter: isSet(object.gasMeter)
        ? Long.fromValue(object.gasMeter)
        : Long.UZERO,
    };
  },

  toJSON(message: QueryGasMeterResponse): unknown {
    const obj: any = {};
    message.gasMeter !== undefined &&
      (obj.gasMeter = (message.gasMeter || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGasMeterResponse>, I>>(
    object: I
  ): QueryGasMeterResponse {
    const message = createBaseQueryGasMeterResponse();
    message.gasMeter =
      object.gasMeter !== undefined && object.gasMeter !== null
        ? Long.fromValue(object.gasMeter)
        : Long.UZERO;
    return message;
  },
};

function createBaseQueryAllocationMetersRequest(): QueryAllocationMetersRequest {
  return { pagination: undefined };
}

export const QueryAllocationMetersRequest = {
  encode(
    message: QueryAllocationMetersRequest,
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
  ): QueryAllocationMetersRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllocationMetersRequest();
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

  fromJSON(object: any): QueryAllocationMetersRequest {
    return {
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryAllocationMetersRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllocationMetersRequest>, I>>(
    object: I
  ): QueryAllocationMetersRequest {
    const message = createBaseQueryAllocationMetersRequest();
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryAllocationMetersResponse(): QueryAllocationMetersResponse {
  return { allocationMeters: [], pagination: undefined };
}

export const QueryAllocationMetersResponse = {
  encode(
    message: QueryAllocationMetersResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.allocationMeters) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryAllocationMetersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllocationMetersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.allocationMeters.push(
            DecCoin.decode(reader, reader.uint32())
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

  fromJSON(object: any): QueryAllocationMetersResponse {
    return {
      allocationMeters: Array.isArray(object?.allocationMeters)
        ? object.allocationMeters.map((e: any) => DecCoin.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryAllocationMetersResponse): unknown {
    const obj: any = {};
    if (message.allocationMeters) {
      obj.allocationMeters = message.allocationMeters.map((e) =>
        e ? DecCoin.toJSON(e) : undefined
      );
    } else {
      obj.allocationMeters = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllocationMetersResponse>, I>>(
    object: I
  ): QueryAllocationMetersResponse {
    const message = createBaseQueryAllocationMetersResponse();
    message.allocationMeters =
      object.allocationMeters?.map((e) => DecCoin.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryAllocationMeterRequest(): QueryAllocationMeterRequest {
  return { denom: "" };
}

export const QueryAllocationMeterRequest = {
  encode(
    message: QueryAllocationMeterRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAllocationMeterRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllocationMeterRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllocationMeterRequest {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
    };
  },

  toJSON(message: QueryAllocationMeterRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllocationMeterRequest>, I>>(
    object: I
  ): QueryAllocationMeterRequest {
    const message = createBaseQueryAllocationMeterRequest();
    message.denom = object.denom ?? "";
    return message;
  },
};

function createBaseQueryAllocationMeterResponse(): QueryAllocationMeterResponse {
  return { allocationMeter: undefined };
}

export const QueryAllocationMeterResponse = {
  encode(
    message: QueryAllocationMeterResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.allocationMeter !== undefined) {
      DecCoin.encode(
        message.allocationMeter,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAllocationMeterResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllocationMeterResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.allocationMeter = DecCoin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllocationMeterResponse {
    return {
      allocationMeter: isSet(object.allocationMeter)
        ? DecCoin.fromJSON(object.allocationMeter)
        : undefined,
    };
  },

  toJSON(message: QueryAllocationMeterResponse): unknown {
    const obj: any = {};
    message.allocationMeter !== undefined &&
      (obj.allocationMeter = message.allocationMeter
        ? DecCoin.toJSON(message.allocationMeter)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllocationMeterResponse>, I>>(
    object: I
  ): QueryAllocationMeterResponse {
    const message = createBaseQueryAllocationMeterResponse();
    message.allocationMeter =
      object.allocationMeter !== undefined && object.allocationMeter !== null
        ? DecCoin.fromPartial(object.allocationMeter)
        : undefined;
    return message;
  },
};

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

/** Query defines the gRPC querier service. */
export interface Query {
  /** Incentives retrieves registered incentives */
  Incentives(
    request: DeepPartial<QueryIncentivesRequest>,
    metadata?: grpc.Metadata
  ): Promise<QueryIncentivesResponse>;
  /** Incentive retrieves a registered incentive */
  Incentive(
    request: DeepPartial<QueryIncentiveRequest>,
    metadata?: grpc.Metadata
  ): Promise<QueryIncentiveResponse>;
  /** GasMeters retrieves active gas meters for a given contract */
  GasMeters(
    request: DeepPartial<QueryGasMetersRequest>,
    metadata?: grpc.Metadata
  ): Promise<QueryGasMetersResponse>;
  /** GasMeter Retrieves a active gas meter */
  GasMeter(
    request: DeepPartial<QueryGasMeterRequest>,
    metadata?: grpc.Metadata
  ): Promise<QueryGasMeterResponse>;
  /**
   * AllocationMeters retrieves active allocation meters for a given
   * denomination
   */
  AllocationMeters(
    request: DeepPartial<QueryAllocationMetersRequest>,
    metadata?: grpc.Metadata
  ): Promise<QueryAllocationMetersResponse>;
  /** AllocationMeter Retrieves a active gas meter */
  AllocationMeter(
    request: DeepPartial<QueryAllocationMeterRequest>,
    metadata?: grpc.Metadata
  ): Promise<QueryAllocationMeterResponse>;
  /** Params retrieves the incentives module params */
  Params(
    request: DeepPartial<QueryParamsRequest>,
    metadata?: grpc.Metadata
  ): Promise<QueryParamsResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Incentives = this.Incentives.bind(this);
    this.Incentive = this.Incentive.bind(this);
    this.GasMeters = this.GasMeters.bind(this);
    this.GasMeter = this.GasMeter.bind(this);
    this.AllocationMeters = this.AllocationMeters.bind(this);
    this.AllocationMeter = this.AllocationMeter.bind(this);
    this.Params = this.Params.bind(this);
  }

  Incentives(
    request: DeepPartial<QueryIncentivesRequest>,
    metadata?: grpc.Metadata
  ): Promise<QueryIncentivesResponse> {
    return this.rpc.unary(
      QueryIncentivesDesc,
      QueryIncentivesRequest.fromPartial(request),
      metadata
    );
  }

  Incentive(
    request: DeepPartial<QueryIncentiveRequest>,
    metadata?: grpc.Metadata
  ): Promise<QueryIncentiveResponse> {
    return this.rpc.unary(
      QueryIncentiveDesc,
      QueryIncentiveRequest.fromPartial(request),
      metadata
    );
  }

  GasMeters(
    request: DeepPartial<QueryGasMetersRequest>,
    metadata?: grpc.Metadata
  ): Promise<QueryGasMetersResponse> {
    return this.rpc.unary(
      QueryGasMetersDesc,
      QueryGasMetersRequest.fromPartial(request),
      metadata
    );
  }

  GasMeter(
    request: DeepPartial<QueryGasMeterRequest>,
    metadata?: grpc.Metadata
  ): Promise<QueryGasMeterResponse> {
    return this.rpc.unary(
      QueryGasMeterDesc,
      QueryGasMeterRequest.fromPartial(request),
      metadata
    );
  }

  AllocationMeters(
    request: DeepPartial<QueryAllocationMetersRequest>,
    metadata?: grpc.Metadata
  ): Promise<QueryAllocationMetersResponse> {
    return this.rpc.unary(
      QueryAllocationMetersDesc,
      QueryAllocationMetersRequest.fromPartial(request),
      metadata
    );
  }

  AllocationMeter(
    request: DeepPartial<QueryAllocationMeterRequest>,
    metadata?: grpc.Metadata
  ): Promise<QueryAllocationMeterResponse> {
    return this.rpc.unary(
      QueryAllocationMeterDesc,
      QueryAllocationMeterRequest.fromPartial(request),
      metadata
    );
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
}

export const QueryDesc = {
  serviceName: "evmos.incentives.v1.Query",
};

export const QueryIncentivesDesc: UnaryMethodDefinitionish = {
  methodName: "Incentives",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryIncentivesRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryIncentivesResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryIncentiveDesc: UnaryMethodDefinitionish = {
  methodName: "Incentive",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryIncentiveRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryIncentiveResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryGasMetersDesc: UnaryMethodDefinitionish = {
  methodName: "GasMeters",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryGasMetersRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryGasMetersResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryGasMeterDesc: UnaryMethodDefinitionish = {
  methodName: "GasMeter",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryGasMeterRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryGasMeterResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryAllocationMetersDesc: UnaryMethodDefinitionish = {
  methodName: "AllocationMeters",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryAllocationMetersRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryAllocationMetersResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryAllocationMeterDesc: UnaryMethodDefinitionish = {
  methodName: "AllocationMeter",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryAllocationMeterRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryAllocationMeterResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
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
