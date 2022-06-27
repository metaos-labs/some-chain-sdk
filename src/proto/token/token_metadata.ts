/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "sophonlabs.sophon.token";

export interface TokenMetadata {
  address: string;
  creator: string;
  name: string;
  symbol: string;
  totalSupply: string;
  decimal: number;
  extra: string;
}

function createBaseTokenMetadata(): TokenMetadata {
  return {
    address: "",
    creator: "",
    name: "",
    symbol: "",
    totalSupply: "",
    decimal: 0,
    extra: "",
  };
}

export const TokenMetadata = {
  encode(
    message: TokenMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.symbol !== "") {
      writer.uint32(34).string(message.symbol);
    }
    if (message.totalSupply !== "") {
      writer.uint32(42).string(message.totalSupply);
    }
    if (message.decimal !== 0) {
      writer.uint32(48).int32(message.decimal);
    }
    if (message.extra !== "") {
      writer.uint32(58).string(message.extra);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TokenMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTokenMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.creator = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.symbol = reader.string();
          break;
        case 5:
          message.totalSupply = reader.string();
          break;
        case 6:
          message.decimal = reader.int32();
          break;
        case 7:
          message.extra = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TokenMetadata {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      creator: isSet(object.creator) ? String(object.creator) : "",
      name: isSet(object.name) ? String(object.name) : "",
      symbol: isSet(object.symbol) ? String(object.symbol) : "",
      totalSupply: isSet(object.totalSupply) ? String(object.totalSupply) : "",
      decimal: isSet(object.decimal) ? Number(object.decimal) : 0,
      extra: isSet(object.extra) ? String(object.extra) : "",
    };
  },

  toJSON(message: TokenMetadata): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.creator !== undefined && (obj.creator = message.creator);
    message.name !== undefined && (obj.name = message.name);
    message.symbol !== undefined && (obj.symbol = message.symbol);
    message.totalSupply !== undefined &&
      (obj.totalSupply = message.totalSupply);
    message.decimal !== undefined &&
      (obj.decimal = Math.round(message.decimal));
    message.extra !== undefined && (obj.extra = message.extra);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TokenMetadata>, I>>(
    object: I
  ): TokenMetadata {
    const message = createBaseTokenMetadata();
    message.address = object.address ?? "";
    message.creator = object.creator ?? "";
    message.name = object.name ?? "";
    message.symbol = object.symbol ?? "";
    message.totalSupply = object.totalSupply ?? "";
    message.decimal = object.decimal ?? 0;
    message.extra = object.extra ?? "";
    return message;
  },
};

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
