/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "sophonlabs.sophon.dex";

export interface MiningPoolChangePlan {
  block: Long;
  poolId: string;
  allocPoint: Long;
  creator: string;
}

function createBaseMiningPoolChangePlan(): MiningPoolChangePlan {
  return { block: Long.ZERO, poolId: "", allocPoint: Long.UZERO, creator: "" };
}

export const MiningPoolChangePlan = {
  encode(
    message: MiningPoolChangePlan,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.block.isZero()) {
      writer.uint32(8).int64(message.block);
    }
    if (message.poolId !== "") {
      writer.uint32(18).string(message.poolId);
    }
    if (!message.allocPoint.isZero()) {
      writer.uint32(24).uint64(message.allocPoint);
    }
    if (message.creator !== "") {
      writer.uint32(34).string(message.creator);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MiningPoolChangePlan {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMiningPoolChangePlan();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.block = reader.int64() as Long;
          break;
        case 2:
          message.poolId = reader.string();
          break;
        case 3:
          message.allocPoint = reader.uint64() as Long;
          break;
        case 4:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MiningPoolChangePlan {
    return {
      block: isSet(object.block) ? Long.fromValue(object.block) : Long.ZERO,
      poolId: isSet(object.poolId) ? String(object.poolId) : "",
      allocPoint: isSet(object.allocPoint)
        ? Long.fromValue(object.allocPoint)
        : Long.UZERO,
      creator: isSet(object.creator) ? String(object.creator) : "",
    };
  },

  toJSON(message: MiningPoolChangePlan): unknown {
    const obj: any = {};
    message.block !== undefined &&
      (obj.block = (message.block || Long.ZERO).toString());
    message.poolId !== undefined && (obj.poolId = message.poolId);
    message.allocPoint !== undefined &&
      (obj.allocPoint = (message.allocPoint || Long.UZERO).toString());
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MiningPoolChangePlan>, I>>(
    object: I
  ): MiningPoolChangePlan {
    const message = createBaseMiningPoolChangePlan();
    message.block =
      object.block !== undefined && object.block !== null
        ? Long.fromValue(object.block)
        : Long.ZERO;
    message.poolId = object.poolId ?? "";
    message.allocPoint =
      object.allocPoint !== undefined && object.allocPoint !== null
        ? Long.fromValue(object.allocPoint)
        : Long.UZERO;
    message.creator = object.creator ?? "";
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
