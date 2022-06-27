/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { MiningPoolChangePlan } from "./mining_pool_change_plan";

export const protobufPackage = "sophonlabs.sophon.dex";

/** GenesisState defines the dex module's genesis state. */
export interface GenesisState {
  miningPoolChangePlanList: MiningPoolChangePlan[];
  /** this line is used by starport scaffolding # genesis/proto/state */
  params?: Params;
}

export interface Params {
  adminAddr: string;
  feeOn: boolean;
  /** mining SOP starting from this block number */
  miningStartBlock: Long;
  /** mining SOP stopped from this block number */
  miningEndBlock: Long;
  miningReducing: Long;
  /** total mining SOP amount during this period */
  firstBlockMiningAmount: string;
}

function createBaseGenesisState(): GenesisState {
  return { miningPoolChangePlanList: [], params: undefined };
}

export const GenesisState = {
  encode(
    message: GenesisState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.miningPoolChangePlanList) {
      MiningPoolChangePlan.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
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
        case 2:
          message.miningPoolChangePlanList.push(
            MiningPoolChangePlan.decode(reader, reader.uint32())
          );
          break;
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

  fromJSON(object: any): GenesisState {
    return {
      miningPoolChangePlanList: Array.isArray(object?.miningPoolChangePlanList)
        ? object.miningPoolChangePlanList.map((e: any) =>
            MiningPoolChangePlan.fromJSON(e)
          )
        : [],
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.miningPoolChangePlanList) {
      obj.miningPoolChangePlanList = message.miningPoolChangePlanList.map((e) =>
        e ? MiningPoolChangePlan.toJSON(e) : undefined
      );
    } else {
      obj.miningPoolChangePlanList = [];
    }
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(
    object: I
  ): GenesisState {
    const message = createBaseGenesisState();
    message.miningPoolChangePlanList =
      object.miningPoolChangePlanList?.map((e) =>
        MiningPoolChangePlan.fromPartial(e)
      ) || [];
    message.params =
      object.params !== undefined && object.params !== null
        ? Params.fromPartial(object.params)
        : undefined;
    return message;
  },
};

function createBaseParams(): Params {
  return {
    adminAddr: "",
    feeOn: false,
    miningStartBlock: Long.ZERO,
    miningEndBlock: Long.ZERO,
    miningReducing: Long.ZERO,
    firstBlockMiningAmount: "",
  };
}

export const Params = {
  encode(
    message: Params,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.adminAddr !== "") {
      writer.uint32(10).string(message.adminAddr);
    }
    if (message.feeOn === true) {
      writer.uint32(16).bool(message.feeOn);
    }
    if (!message.miningStartBlock.isZero()) {
      writer.uint32(24).int64(message.miningStartBlock);
    }
    if (!message.miningEndBlock.isZero()) {
      writer.uint32(32).int64(message.miningEndBlock);
    }
    if (!message.miningReducing.isZero()) {
      writer.uint32(40).int64(message.miningReducing);
    }
    if (message.firstBlockMiningAmount !== "") {
      writer.uint32(50).string(message.firstBlockMiningAmount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.adminAddr = reader.string();
          break;
        case 2:
          message.feeOn = reader.bool();
          break;
        case 3:
          message.miningStartBlock = reader.int64() as Long;
          break;
        case 4:
          message.miningEndBlock = reader.int64() as Long;
          break;
        case 5:
          message.miningReducing = reader.int64() as Long;
          break;
        case 6:
          message.firstBlockMiningAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Params {
    return {
      adminAddr: isSet(object.adminAddr) ? String(object.adminAddr) : "",
      feeOn: isSet(object.feeOn) ? Boolean(object.feeOn) : false,
      miningStartBlock: isSet(object.miningStartBlock)
        ? Long.fromValue(object.miningStartBlock)
        : Long.ZERO,
      miningEndBlock: isSet(object.miningEndBlock)
        ? Long.fromValue(object.miningEndBlock)
        : Long.ZERO,
      miningReducing: isSet(object.miningReducing)
        ? Long.fromValue(object.miningReducing)
        : Long.ZERO,
      firstBlockMiningAmount: isSet(object.firstBlockMiningAmount)
        ? String(object.firstBlockMiningAmount)
        : "",
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.adminAddr !== undefined && (obj.adminAddr = message.adminAddr);
    message.feeOn !== undefined && (obj.feeOn = message.feeOn);
    message.miningStartBlock !== undefined &&
      (obj.miningStartBlock = (
        message.miningStartBlock || Long.ZERO
      ).toString());
    message.miningEndBlock !== undefined &&
      (obj.miningEndBlock = (message.miningEndBlock || Long.ZERO).toString());
    message.miningReducing !== undefined &&
      (obj.miningReducing = (message.miningReducing || Long.ZERO).toString());
    message.firstBlockMiningAmount !== undefined &&
      (obj.firstBlockMiningAmount = message.firstBlockMiningAmount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.adminAddr = object.adminAddr ?? "";
    message.feeOn = object.feeOn ?? false;
    message.miningStartBlock =
      object.miningStartBlock !== undefined && object.miningStartBlock !== null
        ? Long.fromValue(object.miningStartBlock)
        : Long.ZERO;
    message.miningEndBlock =
      object.miningEndBlock !== undefined && object.miningEndBlock !== null
        ? Long.fromValue(object.miningEndBlock)
        : Long.ZERO;
    message.miningReducing =
      object.miningReducing !== undefined && object.miningReducing !== null
        ? Long.fromValue(object.miningReducing)
        : Long.ZERO;
    message.firstBlockMiningAmount = object.firstBlockMiningAmount ?? "";
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
