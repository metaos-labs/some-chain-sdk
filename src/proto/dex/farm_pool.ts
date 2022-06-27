/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "sophonlabs.sophon.dex";

/** SOP Mining info per block number */
export interface SopBlockMiningInfo {
  blockNum: Long;
  preBlockNum: Long;
  allocPointTotal: number;
  MainPoolCount: number;
  miningSOPAmtPerBlock: string;
}

/** All of mining pool rewards */
export interface GlobalMiningPoolRewards {
  totalAllocPoint: Long;
  lastBlock: Long;
  accTokenPerShare: string;
}

/** Specific mining pool rewards */
export interface MiningPoolRewards {
  poolId: string;
  allocPoint: Long;
  lastAccTokenPerShare: string;
  remainingReward: string;
}

/** All of liquidity provider mining pool rewards */
export interface LiquidityMiningPoolRewards {
  poolId: string;
  accTokenPerShare: string;
}

/** Specific liquidity provider mining pool rewards */
export interface LiquidityProviderMiningPoolRewards {
  account: string;
  lastAccTokenPerShare: string;
  remainingReward: string;
}

function createBaseSopBlockMiningInfo(): SopBlockMiningInfo {
  return {
    blockNum: Long.ZERO,
    preBlockNum: Long.ZERO,
    allocPointTotal: 0,
    MainPoolCount: 0,
    miningSOPAmtPerBlock: "",
  };
}

export const SopBlockMiningInfo = {
  encode(
    message: SopBlockMiningInfo,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.blockNum.isZero()) {
      writer.uint32(8).int64(message.blockNum);
    }
    if (!message.preBlockNum.isZero()) {
      writer.uint32(16).int64(message.preBlockNum);
    }
    if (message.allocPointTotal !== 0) {
      writer.uint32(24).int32(message.allocPointTotal);
    }
    if (message.MainPoolCount !== 0) {
      writer.uint32(32).int32(message.MainPoolCount);
    }
    if (message.miningSOPAmtPerBlock !== "") {
      writer.uint32(42).string(message.miningSOPAmtPerBlock);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SopBlockMiningInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSopBlockMiningInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockNum = reader.int64() as Long;
          break;
        case 2:
          message.preBlockNum = reader.int64() as Long;
          break;
        case 3:
          message.allocPointTotal = reader.int32();
          break;
        case 4:
          message.MainPoolCount = reader.int32();
          break;
        case 5:
          message.miningSOPAmtPerBlock = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SopBlockMiningInfo {
    return {
      blockNum: isSet(object.blockNum)
        ? Long.fromValue(object.blockNum)
        : Long.ZERO,
      preBlockNum: isSet(object.preBlockNum)
        ? Long.fromValue(object.preBlockNum)
        : Long.ZERO,
      allocPointTotal: isSet(object.allocPointTotal)
        ? Number(object.allocPointTotal)
        : 0,
      MainPoolCount: isSet(object.MainPoolCount)
        ? Number(object.MainPoolCount)
        : 0,
      miningSOPAmtPerBlock: isSet(object.miningSOPAmtPerBlock)
        ? String(object.miningSOPAmtPerBlock)
        : "",
    };
  },

  toJSON(message: SopBlockMiningInfo): unknown {
    const obj: any = {};
    message.blockNum !== undefined &&
      (obj.blockNum = (message.blockNum || Long.ZERO).toString());
    message.preBlockNum !== undefined &&
      (obj.preBlockNum = (message.preBlockNum || Long.ZERO).toString());
    message.allocPointTotal !== undefined &&
      (obj.allocPointTotal = Math.round(message.allocPointTotal));
    message.MainPoolCount !== undefined &&
      (obj.MainPoolCount = Math.round(message.MainPoolCount));
    message.miningSOPAmtPerBlock !== undefined &&
      (obj.miningSOPAmtPerBlock = message.miningSOPAmtPerBlock);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SopBlockMiningInfo>, I>>(
    object: I
  ): SopBlockMiningInfo {
    const message = createBaseSopBlockMiningInfo();
    message.blockNum =
      object.blockNum !== undefined && object.blockNum !== null
        ? Long.fromValue(object.blockNum)
        : Long.ZERO;
    message.preBlockNum =
      object.preBlockNum !== undefined && object.preBlockNum !== null
        ? Long.fromValue(object.preBlockNum)
        : Long.ZERO;
    message.allocPointTotal = object.allocPointTotal ?? 0;
    message.MainPoolCount = object.MainPoolCount ?? 0;
    message.miningSOPAmtPerBlock = object.miningSOPAmtPerBlock ?? "";
    return message;
  },
};

function createBaseGlobalMiningPoolRewards(): GlobalMiningPoolRewards {
  return {
    totalAllocPoint: Long.UZERO,
    lastBlock: Long.ZERO,
    accTokenPerShare: "",
  };
}

export const GlobalMiningPoolRewards = {
  encode(
    message: GlobalMiningPoolRewards,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.totalAllocPoint.isZero()) {
      writer.uint32(8).uint64(message.totalAllocPoint);
    }
    if (!message.lastBlock.isZero()) {
      writer.uint32(16).int64(message.lastBlock);
    }
    if (message.accTokenPerShare !== "") {
      writer.uint32(26).string(message.accTokenPerShare);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GlobalMiningPoolRewards {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGlobalMiningPoolRewards();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalAllocPoint = reader.uint64() as Long;
          break;
        case 2:
          message.lastBlock = reader.int64() as Long;
          break;
        case 3:
          message.accTokenPerShare = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GlobalMiningPoolRewards {
    return {
      totalAllocPoint: isSet(object.totalAllocPoint)
        ? Long.fromValue(object.totalAllocPoint)
        : Long.UZERO,
      lastBlock: isSet(object.lastBlock)
        ? Long.fromValue(object.lastBlock)
        : Long.ZERO,
      accTokenPerShare: isSet(object.accTokenPerShare)
        ? String(object.accTokenPerShare)
        : "",
    };
  },

  toJSON(message: GlobalMiningPoolRewards): unknown {
    const obj: any = {};
    message.totalAllocPoint !== undefined &&
      (obj.totalAllocPoint = (
        message.totalAllocPoint || Long.UZERO
      ).toString());
    message.lastBlock !== undefined &&
      (obj.lastBlock = (message.lastBlock || Long.ZERO).toString());
    message.accTokenPerShare !== undefined &&
      (obj.accTokenPerShare = message.accTokenPerShare);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GlobalMiningPoolRewards>, I>>(
    object: I
  ): GlobalMiningPoolRewards {
    const message = createBaseGlobalMiningPoolRewards();
    message.totalAllocPoint =
      object.totalAllocPoint !== undefined && object.totalAllocPoint !== null
        ? Long.fromValue(object.totalAllocPoint)
        : Long.UZERO;
    message.lastBlock =
      object.lastBlock !== undefined && object.lastBlock !== null
        ? Long.fromValue(object.lastBlock)
        : Long.ZERO;
    message.accTokenPerShare = object.accTokenPerShare ?? "";
    return message;
  },
};

function createBaseMiningPoolRewards(): MiningPoolRewards {
  return {
    poolId: "",
    allocPoint: Long.UZERO,
    lastAccTokenPerShare: "",
    remainingReward: "",
  };
}

export const MiningPoolRewards = {
  encode(
    message: MiningPoolRewards,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.poolId !== "") {
      writer.uint32(10).string(message.poolId);
    }
    if (!message.allocPoint.isZero()) {
      writer.uint32(16).uint64(message.allocPoint);
    }
    if (message.lastAccTokenPerShare !== "") {
      writer.uint32(26).string(message.lastAccTokenPerShare);
    }
    if (message.remainingReward !== "") {
      writer.uint32(34).string(message.remainingReward);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MiningPoolRewards {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMiningPoolRewards();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.string();
          break;
        case 2:
          message.allocPoint = reader.uint64() as Long;
          break;
        case 3:
          message.lastAccTokenPerShare = reader.string();
          break;
        case 4:
          message.remainingReward = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MiningPoolRewards {
    return {
      poolId: isSet(object.poolId) ? String(object.poolId) : "",
      allocPoint: isSet(object.allocPoint)
        ? Long.fromValue(object.allocPoint)
        : Long.UZERO,
      lastAccTokenPerShare: isSet(object.lastAccTokenPerShare)
        ? String(object.lastAccTokenPerShare)
        : "",
      remainingReward: isSet(object.remainingReward)
        ? String(object.remainingReward)
        : "",
    };
  },

  toJSON(message: MiningPoolRewards): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = message.poolId);
    message.allocPoint !== undefined &&
      (obj.allocPoint = (message.allocPoint || Long.UZERO).toString());
    message.lastAccTokenPerShare !== undefined &&
      (obj.lastAccTokenPerShare = message.lastAccTokenPerShare);
    message.remainingReward !== undefined &&
      (obj.remainingReward = message.remainingReward);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MiningPoolRewards>, I>>(
    object: I
  ): MiningPoolRewards {
    const message = createBaseMiningPoolRewards();
    message.poolId = object.poolId ?? "";
    message.allocPoint =
      object.allocPoint !== undefined && object.allocPoint !== null
        ? Long.fromValue(object.allocPoint)
        : Long.UZERO;
    message.lastAccTokenPerShare = object.lastAccTokenPerShare ?? "";
    message.remainingReward = object.remainingReward ?? "";
    return message;
  },
};

function createBaseLiquidityMiningPoolRewards(): LiquidityMiningPoolRewards {
  return { poolId: "", accTokenPerShare: "" };
}

export const LiquidityMiningPoolRewards = {
  encode(
    message: LiquidityMiningPoolRewards,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.poolId !== "") {
      writer.uint32(10).string(message.poolId);
    }
    if (message.accTokenPerShare !== "") {
      writer.uint32(18).string(message.accTokenPerShare);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): LiquidityMiningPoolRewards {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLiquidityMiningPoolRewards();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.string();
          break;
        case 2:
          message.accTokenPerShare = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LiquidityMiningPoolRewards {
    return {
      poolId: isSet(object.poolId) ? String(object.poolId) : "",
      accTokenPerShare: isSet(object.accTokenPerShare)
        ? String(object.accTokenPerShare)
        : "",
    };
  },

  toJSON(message: LiquidityMiningPoolRewards): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = message.poolId);
    message.accTokenPerShare !== undefined &&
      (obj.accTokenPerShare = message.accTokenPerShare);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LiquidityMiningPoolRewards>, I>>(
    object: I
  ): LiquidityMiningPoolRewards {
    const message = createBaseLiquidityMiningPoolRewards();
    message.poolId = object.poolId ?? "";
    message.accTokenPerShare = object.accTokenPerShare ?? "";
    return message;
  },
};

function createBaseLiquidityProviderMiningPoolRewards(): LiquidityProviderMiningPoolRewards {
  return { account: "", lastAccTokenPerShare: "", remainingReward: "" };
}

export const LiquidityProviderMiningPoolRewards = {
  encode(
    message: LiquidityProviderMiningPoolRewards,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    if (message.lastAccTokenPerShare !== "") {
      writer.uint32(18).string(message.lastAccTokenPerShare);
    }
    if (message.remainingReward !== "") {
      writer.uint32(26).string(message.remainingReward);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): LiquidityProviderMiningPoolRewards {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLiquidityProviderMiningPoolRewards();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
          break;
        case 2:
          message.lastAccTokenPerShare = reader.string();
          break;
        case 3:
          message.remainingReward = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LiquidityProviderMiningPoolRewards {
    return {
      account: isSet(object.account) ? String(object.account) : "",
      lastAccTokenPerShare: isSet(object.lastAccTokenPerShare)
        ? String(object.lastAccTokenPerShare)
        : "",
      remainingReward: isSet(object.remainingReward)
        ? String(object.remainingReward)
        : "",
    };
  },

  toJSON(message: LiquidityProviderMiningPoolRewards): unknown {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account);
    message.lastAccTokenPerShare !== undefined &&
      (obj.lastAccTokenPerShare = message.lastAccTokenPerShare);
    message.remainingReward !== undefined &&
      (obj.remainingReward = message.remainingReward);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<LiquidityProviderMiningPoolRewards>, I>
  >(object: I): LiquidityProviderMiningPoolRewards {
    const message = createBaseLiquidityProviderMiningPoolRewards();
    message.account = object.account ?? "";
    message.lastAccTokenPerShare = object.lastAccTokenPerShare ?? "";
    message.remainingReward = object.remainingReward ?? "";
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
