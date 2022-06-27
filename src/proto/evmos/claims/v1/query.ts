/* eslint-disable */
import Long from "long";
import { grpc } from "@improbable-eng/grpc-web";
import * as _m0 from "protobufjs/minimal";
import { Params } from "./genesis";
import {
  PageRequest,
  PageResponse,
} from "../../../cosmos/base/query/v1beta1/pagination";
import { BrowserHeaders } from "browser-headers";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { ClaimsRecordAddress, Claim } from "./claims";

export const protobufPackage = "evmos.claims.v1";

/**
 * QueryTotalUnclaimedRequest is the request type for the Query/TotalUnclaimed
 * RPC method.
 */
export interface QueryTotalUnclaimedRequest {}

/**
 * QueryTotalUnclaimedResponse is the response type for the Query/TotalUnclaimed
 * RPC method.
 */
export interface QueryTotalUnclaimedResponse {
  /** coins defines the unclaimed coins */
  coins: Coin[];
}

/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params defines the parameters of the module. */
  params?: Params;
}

/**
 * QueryClaimsRecordsRequest is the request type for the Query/ClaimsRecords RPC
 * method.
 */
export interface QueryClaimsRecordsRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/**
 * QueryClaimsRecordsResponse is the response type for the Query/ClaimsRecords
 * RPC method.
 */
export interface QueryClaimsRecordsResponse {
  /** claims defines all claims records */
  claims: ClaimsRecordAddress[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}

/**
 * QueryClaimsRecordRequest is the request type for the Query/ClaimsRecord RPC
 * method.
 */
export interface QueryClaimsRecordRequest {
  /** address defines the user to query claims record for */
  address: string;
}

/**
 * QueryClaimsRecordResponse is the response type for the Query/ClaimsRecord RPC
 * method.
 */
export interface QueryClaimsRecordResponse {
  /** total initial claimable amount for the user */
  initialClaimableAmount: string;
  /** the claims of the user */
  claims: Claim[];
}

function createBaseQueryTotalUnclaimedRequest(): QueryTotalUnclaimedRequest {
  return {};
}

export const QueryTotalUnclaimedRequest = {
  encode(
    _: QueryTotalUnclaimedRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryTotalUnclaimedRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalUnclaimedRequest();
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

  fromJSON(_: any): QueryTotalUnclaimedRequest {
    return {};
  },

  toJSON(_: QueryTotalUnclaimedRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryTotalUnclaimedRequest>, I>>(
    _: I
  ): QueryTotalUnclaimedRequest {
    const message = createBaseQueryTotalUnclaimedRequest();
    return message;
  },
};

function createBaseQueryTotalUnclaimedResponse(): QueryTotalUnclaimedResponse {
  return { coins: [] };
}

export const QueryTotalUnclaimedResponse = {
  encode(
    message: QueryTotalUnclaimedResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryTotalUnclaimedResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalUnclaimedResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.coins.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTotalUnclaimedResponse {
    return {
      coins: Array.isArray(object?.coins)
        ? object.coins.map((e: any) => Coin.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryTotalUnclaimedResponse): unknown {
    const obj: any = {};
    if (message.coins) {
      obj.coins = message.coins.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.coins = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryTotalUnclaimedResponse>, I>>(
    object: I
  ): QueryTotalUnclaimedResponse {
    const message = createBaseQueryTotalUnclaimedResponse();
    message.coins = object.coins?.map((e) => Coin.fromPartial(e)) || [];
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

function createBaseQueryClaimsRecordsRequest(): QueryClaimsRecordsRequest {
  return { pagination: undefined };
}

export const QueryClaimsRecordsRequest = {
  encode(
    message: QueryClaimsRecordsRequest,
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
  ): QueryClaimsRecordsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClaimsRecordsRequest();
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

  fromJSON(object: any): QueryClaimsRecordsRequest {
    return {
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryClaimsRecordsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryClaimsRecordsRequest>, I>>(
    object: I
  ): QueryClaimsRecordsRequest {
    const message = createBaseQueryClaimsRecordsRequest();
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryClaimsRecordsResponse(): QueryClaimsRecordsResponse {
  return { claims: [], pagination: undefined };
}

export const QueryClaimsRecordsResponse = {
  encode(
    message: QueryClaimsRecordsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.claims) {
      ClaimsRecordAddress.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryClaimsRecordsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClaimsRecordsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.claims.push(
            ClaimsRecordAddress.decode(reader, reader.uint32())
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

  fromJSON(object: any): QueryClaimsRecordsResponse {
    return {
      claims: Array.isArray(object?.claims)
        ? object.claims.map((e: any) => ClaimsRecordAddress.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryClaimsRecordsResponse): unknown {
    const obj: any = {};
    if (message.claims) {
      obj.claims = message.claims.map((e) =>
        e ? ClaimsRecordAddress.toJSON(e) : undefined
      );
    } else {
      obj.claims = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryClaimsRecordsResponse>, I>>(
    object: I
  ): QueryClaimsRecordsResponse {
    const message = createBaseQueryClaimsRecordsResponse();
    message.claims =
      object.claims?.map((e) => ClaimsRecordAddress.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryClaimsRecordRequest(): QueryClaimsRecordRequest {
  return { address: "" };
}

export const QueryClaimsRecordRequest = {
  encode(
    message: QueryClaimsRecordRequest,
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
  ): QueryClaimsRecordRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClaimsRecordRequest();
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

  fromJSON(object: any): QueryClaimsRecordRequest {
    return {
      address: isSet(object.address) ? String(object.address) : "",
    };
  },

  toJSON(message: QueryClaimsRecordRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryClaimsRecordRequest>, I>>(
    object: I
  ): QueryClaimsRecordRequest {
    const message = createBaseQueryClaimsRecordRequest();
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseQueryClaimsRecordResponse(): QueryClaimsRecordResponse {
  return { initialClaimableAmount: "", claims: [] };
}

export const QueryClaimsRecordResponse = {
  encode(
    message: QueryClaimsRecordResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.initialClaimableAmount !== "") {
      writer.uint32(10).string(message.initialClaimableAmount);
    }
    for (const v of message.claims) {
      Claim.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryClaimsRecordResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClaimsRecordResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.initialClaimableAmount = reader.string();
          break;
        case 2:
          message.claims.push(Claim.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryClaimsRecordResponse {
    return {
      initialClaimableAmount: isSet(object.initialClaimableAmount)
        ? String(object.initialClaimableAmount)
        : "",
      claims: Array.isArray(object?.claims)
        ? object.claims.map((e: any) => Claim.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryClaimsRecordResponse): unknown {
    const obj: any = {};
    message.initialClaimableAmount !== undefined &&
      (obj.initialClaimableAmount = message.initialClaimableAmount);
    if (message.claims) {
      obj.claims = message.claims.map((e) => (e ? Claim.toJSON(e) : undefined));
    } else {
      obj.claims = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryClaimsRecordResponse>, I>>(
    object: I
  ): QueryClaimsRecordResponse {
    const message = createBaseQueryClaimsRecordResponse();
    message.initialClaimableAmount = object.initialClaimableAmount ?? "";
    message.claims = object.claims?.map((e) => Claim.fromPartial(e)) || [];
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** TotalUnclaimed queries the total unclaimed tokens from the airdrop */
  TotalUnclaimed(
    request: DeepPartial<QueryTotalUnclaimedRequest>,
    metadata?: grpc.Metadata
  ): Promise<QueryTotalUnclaimedResponse>;
  /** Params returns the claims module parameters */
  Params(
    request: DeepPartial<QueryParamsRequest>,
    metadata?: grpc.Metadata
  ): Promise<QueryParamsResponse>;
  /** ClaimsRecords returns all claims records */
  ClaimsRecords(
    request: DeepPartial<QueryClaimsRecordsRequest>,
    metadata?: grpc.Metadata
  ): Promise<QueryClaimsRecordsResponse>;
  /** ClaimsRecord returns the claims record for a given address */
  ClaimsRecord(
    request: DeepPartial<QueryClaimsRecordRequest>,
    metadata?: grpc.Metadata
  ): Promise<QueryClaimsRecordResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.TotalUnclaimed = this.TotalUnclaimed.bind(this);
    this.Params = this.Params.bind(this);
    this.ClaimsRecords = this.ClaimsRecords.bind(this);
    this.ClaimsRecord = this.ClaimsRecord.bind(this);
  }

  TotalUnclaimed(
    request: DeepPartial<QueryTotalUnclaimedRequest>,
    metadata?: grpc.Metadata
  ): Promise<QueryTotalUnclaimedResponse> {
    return this.rpc.unary(
      QueryTotalUnclaimedDesc,
      QueryTotalUnclaimedRequest.fromPartial(request),
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

  ClaimsRecords(
    request: DeepPartial<QueryClaimsRecordsRequest>,
    metadata?: grpc.Metadata
  ): Promise<QueryClaimsRecordsResponse> {
    return this.rpc.unary(
      QueryClaimsRecordsDesc,
      QueryClaimsRecordsRequest.fromPartial(request),
      metadata
    );
  }

  ClaimsRecord(
    request: DeepPartial<QueryClaimsRecordRequest>,
    metadata?: grpc.Metadata
  ): Promise<QueryClaimsRecordResponse> {
    return this.rpc.unary(
      QueryClaimsRecordDesc,
      QueryClaimsRecordRequest.fromPartial(request),
      metadata
    );
  }
}

export const QueryDesc = {
  serviceName: "evmos.claims.v1.Query",
};

export const QueryTotalUnclaimedDesc: UnaryMethodDefinitionish = {
  methodName: "TotalUnclaimed",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryTotalUnclaimedRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryTotalUnclaimedResponse.decode(data),
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

export const QueryClaimsRecordsDesc: UnaryMethodDefinitionish = {
  methodName: "ClaimsRecords",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryClaimsRecordsRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryClaimsRecordsResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryClaimsRecordDesc: UnaryMethodDefinitionish = {
  methodName: "ClaimsRecord",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryClaimsRecordRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryClaimsRecordResponse.decode(data),
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
