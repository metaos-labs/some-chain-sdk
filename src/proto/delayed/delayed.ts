/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Any } from "../google/protobuf/any";

export const protobufPackage = "sophonlabs.sophon.delayed";

export interface DelayedAction {
  triggerTime: Long;
  identifier: string;
  data?: Any;
}

function createBaseDelayedAction(): DelayedAction {
  return { triggerTime: Long.ZERO, identifier: "", data: undefined };
}

export const DelayedAction = {
  encode(
    message: DelayedAction,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.triggerTime.isZero()) {
      writer.uint32(8).int64(message.triggerTime);
    }
    if (message.identifier !== "") {
      writer.uint32(18).string(message.identifier);
    }
    if (message.data !== undefined) {
      Any.encode(message.data, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DelayedAction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelayedAction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.triggerTime = reader.int64() as Long;
          break;
        case 2:
          message.identifier = reader.string();
          break;
        case 3:
          message.data = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DelayedAction {
    return {
      triggerTime: isSet(object.triggerTime)
        ? Long.fromValue(object.triggerTime)
        : Long.ZERO,
      identifier: isSet(object.identifier) ? String(object.identifier) : "",
      data: isSet(object.data) ? Any.fromJSON(object.data) : undefined,
    };
  },

  toJSON(message: DelayedAction): unknown {
    const obj: any = {};
    message.triggerTime !== undefined &&
      (obj.triggerTime = (message.triggerTime || Long.ZERO).toString());
    message.identifier !== undefined && (obj.identifier = message.identifier);
    message.data !== undefined &&
      (obj.data = message.data ? Any.toJSON(message.data) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DelayedAction>, I>>(
    object: I
  ): DelayedAction {
    const message = createBaseDelayedAction();
    message.triggerTime =
      object.triggerTime !== undefined && object.triggerTime !== null
        ? Long.fromValue(object.triggerTime)
        : Long.ZERO;
    message.identifier = object.identifier ?? "";
    message.data =
      object.data !== undefined && object.data !== null
        ? Any.fromPartial(object.data)
        : undefined;
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
