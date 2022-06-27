/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "sophonlabs.sophon.token";

export interface TokenMetadataEx {
  tokenDenom: string;
  decimal: number;
  maxSupply: string;
  /** mininum signature count in owner group, default value: 1 */
  minSignCount: number;
  owners: string[];
}

function createBaseTokenMetadataEx(): TokenMetadataEx {
  return {
    tokenDenom: "",
    decimal: 0,
    maxSupply: "",
    minSignCount: 0,
    owners: [],
  };
}

export const TokenMetadataEx = {
  encode(
    message: TokenMetadataEx,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.tokenDenom !== "") {
      writer.uint32(10).string(message.tokenDenom);
    }
    if (message.decimal !== 0) {
      writer.uint32(16).int32(message.decimal);
    }
    if (message.maxSupply !== "") {
      writer.uint32(26).string(message.maxSupply);
    }
    if (message.minSignCount !== 0) {
      writer.uint32(32).int32(message.minSignCount);
    }
    for (const v of message.owners) {
      writer.uint32(42).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TokenMetadataEx {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTokenMetadataEx();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenDenom = reader.string();
          break;
        case 2:
          message.decimal = reader.int32();
          break;
        case 3:
          message.maxSupply = reader.string();
          break;
        case 4:
          message.minSignCount = reader.int32();
          break;
        case 5:
          message.owners.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TokenMetadataEx {
    return {
      tokenDenom: isSet(object.tokenDenom) ? String(object.tokenDenom) : "",
      decimal: isSet(object.decimal) ? Number(object.decimal) : 0,
      maxSupply: isSet(object.maxSupply) ? String(object.maxSupply) : "",
      minSignCount: isSet(object.minSignCount)
        ? Number(object.minSignCount)
        : 0,
      owners: Array.isArray(object?.owners)
        ? object.owners.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: TokenMetadataEx): unknown {
    const obj: any = {};
    message.tokenDenom !== undefined && (obj.tokenDenom = message.tokenDenom);
    message.decimal !== undefined &&
      (obj.decimal = Math.round(message.decimal));
    message.maxSupply !== undefined && (obj.maxSupply = message.maxSupply);
    message.minSignCount !== undefined &&
      (obj.minSignCount = Math.round(message.minSignCount));
    if (message.owners) {
      obj.owners = message.owners.map((e) => e);
    } else {
      obj.owners = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TokenMetadataEx>, I>>(
    object: I
  ): TokenMetadataEx {
    const message = createBaseTokenMetadataEx();
    message.tokenDenom = object.tokenDenom ?? "";
    message.decimal = object.decimal ?? 0;
    message.maxSupply = object.maxSupply ?? "";
    message.minSignCount = object.minSignCount ?? 0;
    message.owners = object.owners?.map((e) => e) || [];
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
