/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Params } from "./feemarket";

export const protobufPackage = "ethermint.feemarket.v1";

/** GenesisState defines the feemarket module's genesis state. */
export interface GenesisState {
  /** params defines all the paramaters of the module. */
  params?: Params;
  /**
   * base fee is the exported value from previous software version.
   * Zero by default.
   */
  baseFee: string;
  /**
   * block gas is the amount of gas used on the last block before the upgrade.
   * Zero by default.
   */
  blockGas: Long;
}

function createBaseGenesisState(): GenesisState {
  return { params: undefined, baseFee: "", blockGas: Long.UZERO };
}

export const GenesisState = {
  encode(
    message: GenesisState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.baseFee !== "") {
      writer.uint32(18).string(message.baseFee);
    }
    if (!message.blockGas.isZero()) {
      writer.uint32(24).uint64(message.blockGas);
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
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.baseFee = reader.string();
          break;
        case 3:
          message.blockGas = reader.uint64() as Long;
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
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      baseFee: isSet(object.baseFee) ? String(object.baseFee) : "",
      blockGas: isSet(object.blockGas)
        ? Long.fromValue(object.blockGas)
        : Long.UZERO,
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    message.baseFee !== undefined && (obj.baseFee = message.baseFee);
    message.blockGas !== undefined &&
      (obj.blockGas = (message.blockGas || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(
    object: I
  ): GenesisState {
    const message = createBaseGenesisState();
    message.params =
      object.params !== undefined && object.params !== null
        ? Params.fromPartial(object.params)
        : undefined;
    message.baseFee = object.baseFee ?? "";
    message.blockGas =
      object.blockGas !== undefined && object.blockGas !== null
        ? Long.fromValue(object.blockGas)
        : Long.UZERO;
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
