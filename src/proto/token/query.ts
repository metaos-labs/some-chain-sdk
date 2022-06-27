/* eslint-disable */
import Long from "long";
import { grpc } from "@improbable-eng/grpc-web";
import * as _m0 from "protobufjs/minimal";
import { MetadataExt } from "./metadata_ext";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";
import { BrowserHeaders } from "browser-headers";

export const protobufPackage = "sophonlabs.sophon.token";

export interface QueryGetMetadataRequest {
  denom: string;
}

export interface QueryGetMetadataResponse {
  metadata: string;
  metadataExt?: MetadataExt;
  supply: string;
}

export interface QueryAllMetadataRequest {
  pagination?: PageRequest;
}

export interface QueryAllMetadataResponse {
  metadatas: QueryGetMetadataResponse[];
  pagination?: PageResponse;
}

function createBaseQueryGetMetadataRequest(): QueryGetMetadataRequest {
  return { denom: "" };
}

export const QueryGetMetadataRequest = {
  encode(
    message: QueryGetMetadataRequest,
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
  ): QueryGetMetadataRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetMetadataRequest();
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

  fromJSON(object: any): QueryGetMetadataRequest {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
    };
  },

  toJSON(message: QueryGetMetadataRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetMetadataRequest>, I>>(
    object: I
  ): QueryGetMetadataRequest {
    const message = createBaseQueryGetMetadataRequest();
    message.denom = object.denom ?? "";
    return message;
  },
};

function createBaseQueryGetMetadataResponse(): QueryGetMetadataResponse {
  return { metadata: "", metadataExt: undefined, supply: "" };
}

export const QueryGetMetadataResponse = {
  encode(
    message: QueryGetMetadataResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.metadata !== "") {
      writer.uint32(10).string(message.metadata);
    }
    if (message.metadataExt !== undefined) {
      MetadataExt.encode(
        message.metadataExt,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.supply !== "") {
      writer.uint32(26).string(message.supply);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetMetadataResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetMetadataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.metadata = reader.string();
          break;
        case 2:
          message.metadataExt = MetadataExt.decode(reader, reader.uint32());
          break;
        case 3:
          message.supply = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetMetadataResponse {
    return {
      metadata: isSet(object.metadata) ? String(object.metadata) : "",
      metadataExt: isSet(object.metadataExt)
        ? MetadataExt.fromJSON(object.metadataExt)
        : undefined,
      supply: isSet(object.supply) ? String(object.supply) : "",
    };
  },

  toJSON(message: QueryGetMetadataResponse): unknown {
    const obj: any = {};
    message.metadata !== undefined && (obj.metadata = message.metadata);
    message.metadataExt !== undefined &&
      (obj.metadataExt = message.metadataExt
        ? MetadataExt.toJSON(message.metadataExt)
        : undefined);
    message.supply !== undefined && (obj.supply = message.supply);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetMetadataResponse>, I>>(
    object: I
  ): QueryGetMetadataResponse {
    const message = createBaseQueryGetMetadataResponse();
    message.metadata = object.metadata ?? "";
    message.metadataExt =
      object.metadataExt !== undefined && object.metadataExt !== null
        ? MetadataExt.fromPartial(object.metadataExt)
        : undefined;
    message.supply = object.supply ?? "";
    return message;
  },
};

function createBaseQueryAllMetadataRequest(): QueryAllMetadataRequest {
  return { pagination: undefined };
}

export const QueryAllMetadataRequest = {
  encode(
    message: QueryAllMetadataRequest,
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
  ): QueryAllMetadataRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllMetadataRequest();
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

  fromJSON(object: any): QueryAllMetadataRequest {
    return {
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryAllMetadataRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllMetadataRequest>, I>>(
    object: I
  ): QueryAllMetadataRequest {
    const message = createBaseQueryAllMetadataRequest();
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryAllMetadataResponse(): QueryAllMetadataResponse {
  return { metadatas: [], pagination: undefined };
}

export const QueryAllMetadataResponse = {
  encode(
    message: QueryAllMetadataResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.metadatas) {
      QueryGetMetadataResponse.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryAllMetadataResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllMetadataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.metadatas.push(
            QueryGetMetadataResponse.decode(reader, reader.uint32())
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

  fromJSON(object: any): QueryAllMetadataResponse {
    return {
      metadatas: Array.isArray(object?.metadatas)
        ? object.metadatas.map((e: any) => QueryGetMetadataResponse.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryAllMetadataResponse): unknown {
    const obj: any = {};
    if (message.metadatas) {
      obj.metadatas = message.metadatas.map((e) =>
        e ? QueryGetMetadataResponse.toJSON(e) : undefined
      );
    } else {
      obj.metadatas = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllMetadataResponse>, I>>(
    object: I
  ): QueryAllMetadataResponse {
    const message = createBaseQueryAllMetadataResponse();
    message.metadatas =
      object.metadatas?.map((e) => QueryGetMetadataResponse.fromPartial(e)) ||
      [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  Metadata(
    request: DeepPartial<QueryGetMetadataRequest>,
    metadata?: grpc.Metadata
  ): Promise<QueryGetMetadataResponse>;
  /** Queries a list of MetadataExt items. */
  MetadataAll(
    request: DeepPartial<QueryAllMetadataRequest>,
    metadata?: grpc.Metadata
  ): Promise<QueryAllMetadataResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Metadata = this.Metadata.bind(this);
    this.MetadataAll = this.MetadataAll.bind(this);
  }

  Metadata(
    request: DeepPartial<QueryGetMetadataRequest>,
    metadata?: grpc.Metadata
  ): Promise<QueryGetMetadataResponse> {
    return this.rpc.unary(
      QueryMetadataDesc,
      QueryGetMetadataRequest.fromPartial(request),
      metadata
    );
  }

  MetadataAll(
    request: DeepPartial<QueryAllMetadataRequest>,
    metadata?: grpc.Metadata
  ): Promise<QueryAllMetadataResponse> {
    return this.rpc.unary(
      QueryMetadataAllDesc,
      QueryAllMetadataRequest.fromPartial(request),
      metadata
    );
  }
}

export const QueryDesc = {
  serviceName: "sophonlabs.sophon.token.Query",
};

export const QueryMetadataDesc: UnaryMethodDefinitionish = {
  methodName: "Metadata",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryGetMetadataRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryGetMetadataResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryMetadataAllDesc: UnaryMethodDefinitionish = {
  methodName: "MetadataAll",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryAllMetadataRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryAllMetadataResponse.decode(data),
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
