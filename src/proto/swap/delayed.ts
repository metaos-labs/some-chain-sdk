/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "sophonlabs.sophon.swap";

export interface PoolSetRewardAction {
  /** the pool address */
  address: string;
  /** the reward index */
  index: number;
  rewardPerSecond: string;
}

export interface PoolUpdateByScaleRewardAction {
  denom: string;
  scale: string;
}

function createBasePoolSetRewardAction(): PoolSetRewardAction {
  return { address: "", index: 0, rewardPerSecond: "" };
}

export const PoolSetRewardAction = {
  encode(
    message: PoolSetRewardAction,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.index !== 0) {
      writer.uint32(16).uint32(message.index);
    }
    if (message.rewardPerSecond !== "") {
      writer.uint32(26).string(message.rewardPerSecond);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PoolSetRewardAction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolSetRewardAction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.index = reader.uint32();
          break;
        case 3:
          message.rewardPerSecond = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PoolSetRewardAction {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      index: isSet(object.index) ? Number(object.index) : 0,
      rewardPerSecond: isSet(object.rewardPerSecond)
        ? String(object.rewardPerSecond)
        : "",
    };
  },

  toJSON(message: PoolSetRewardAction): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.index !== undefined && (obj.index = Math.round(message.index));
    message.rewardPerSecond !== undefined &&
      (obj.rewardPerSecond = message.rewardPerSecond);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PoolSetRewardAction>, I>>(
    object: I
  ): PoolSetRewardAction {
    const message = createBasePoolSetRewardAction();
    message.address = object.address ?? "";
    message.index = object.index ?? 0;
    message.rewardPerSecond = object.rewardPerSecond ?? "";
    return message;
  },
};

function createBasePoolUpdateByScaleRewardAction(): PoolUpdateByScaleRewardAction {
  return { denom: "", scale: "" };
}

export const PoolUpdateByScaleRewardAction = {
  encode(
    message: PoolUpdateByScaleRewardAction,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.scale !== "") {
      writer.uint32(18).string(message.scale);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): PoolUpdateByScaleRewardAction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolUpdateByScaleRewardAction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.scale = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PoolUpdateByScaleRewardAction {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      scale: isSet(object.scale) ? String(object.scale) : "",
    };
  },

  toJSON(message: PoolUpdateByScaleRewardAction): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.scale !== undefined && (obj.scale = message.scale);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PoolUpdateByScaleRewardAction>, I>>(
    object: I
  ): PoolUpdateByScaleRewardAction {
    const message = createBasePoolUpdateByScaleRewardAction();
    message.denom = object.denom ?? "";
    message.scale = object.scale ?? "";
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
