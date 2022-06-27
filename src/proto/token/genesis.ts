/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { MetadataExt } from "./metadata_ext";

export const protobufPackage = "sophonlabs.sophon.token";

/** GenesisState defines the token module's genesis state. */
export interface GenesisState {
  tokenCount: Long;
  /** this line is used by starport scaffolding # genesis/proto/state */
  metadataExts: MetadataExt[];
}

function createBaseGenesisState(): GenesisState {
  return { tokenCount: Long.UZERO, metadataExts: [] };
}

export const GenesisState = {
  encode(
    message: GenesisState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.tokenCount.isZero()) {
      writer.uint32(8).uint64(message.tokenCount);
    }
    for (const v of message.metadataExts) {
      MetadataExt.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenCount = reader.uint64() as Long;
          break;
        case 2:
          message.metadataExts.push(
            MetadataExt.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      tokenCount: isSet(object.tokenCount)
        ? Long.fromValue(object.tokenCount)
        : Long.UZERO,
      metadataExts: Array.isArray(object?.metadataExts)
        ? object.metadataExts.map((e: any) => MetadataExt.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.tokenCount !== undefined &&
      (obj.tokenCount = (message.tokenCount || Long.UZERO).toString());
    if (message.metadataExts) {
      obj.metadataExts = message.metadataExts.map((e) =>
        e ? MetadataExt.toJSON(e) : undefined
      );
    } else {
      obj.metadataExts = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(
    object: I
  ): GenesisState {
    const message = createBaseGenesisState();
    message.tokenCount =
      object.tokenCount !== undefined && object.tokenCount !== null
        ? Long.fromValue(object.tokenCount)
        : Long.UZERO;
    message.metadataExts =
      object.metadataExts?.map((e) => MetadataExt.fromPartial(e)) || [];
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
