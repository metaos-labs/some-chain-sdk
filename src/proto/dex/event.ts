/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "sophonlabs.sophon.dex";

export interface CreateSwapPoolEvent {
  poolId: string;
  token1Addr: string;
  token2Addr: string;
}

export interface AddLiquidityEvent {
  poolId: string;
  token1Addr: string;
  token1Amount: string;
  token2Addr: string;
  token2Amount: string;
  liquidity: string;
  creator: string;
}

export interface RemoveLiquidityEvent {
  poolId: string;
  token1Addr: string;
  token1Amount: string;
  token2Addr: string;
  token2Amount: string;
  liquidity: string;
  creator: string;
}

export interface SwapEvent {
  poolId: string;
  token1InAmount: string;
  token1OutAmount: string;
  token2InAmount: string;
  token2OutAmount: string;
  to: string;
  creator: string;
}

export interface SyncEvent {
  poolId: string;
  token1Reserve: string;
  token2Reserve: string;
}

export interface WithdrawRewardEvent {
  poolId: string;
  accountAddr: string;
  withdrawReward: string;
}

function createBaseCreateSwapPoolEvent(): CreateSwapPoolEvent {
  return { poolId: "", token1Addr: "", token2Addr: "" };
}

export const CreateSwapPoolEvent = {
  encode(
    message: CreateSwapPoolEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.poolId !== "") {
      writer.uint32(10).string(message.poolId);
    }
    if (message.token1Addr !== "") {
      writer.uint32(18).string(message.token1Addr);
    }
    if (message.token2Addr !== "") {
      writer.uint32(26).string(message.token2Addr);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateSwapPoolEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateSwapPoolEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.string();
          break;
        case 2:
          message.token1Addr = reader.string();
          break;
        case 3:
          message.token2Addr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateSwapPoolEvent {
    return {
      poolId: isSet(object.poolId) ? String(object.poolId) : "",
      token1Addr: isSet(object.token1Addr) ? String(object.token1Addr) : "",
      token2Addr: isSet(object.token2Addr) ? String(object.token2Addr) : "",
    };
  },

  toJSON(message: CreateSwapPoolEvent): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = message.poolId);
    message.token1Addr !== undefined && (obj.token1Addr = message.token1Addr);
    message.token2Addr !== undefined && (obj.token2Addr = message.token2Addr);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateSwapPoolEvent>, I>>(
    object: I
  ): CreateSwapPoolEvent {
    const message = createBaseCreateSwapPoolEvent();
    message.poolId = object.poolId ?? "";
    message.token1Addr = object.token1Addr ?? "";
    message.token2Addr = object.token2Addr ?? "";
    return message;
  },
};

function createBaseAddLiquidityEvent(): AddLiquidityEvent {
  return {
    poolId: "",
    token1Addr: "",
    token1Amount: "",
    token2Addr: "",
    token2Amount: "",
    liquidity: "",
    creator: "",
  };
}

export const AddLiquidityEvent = {
  encode(
    message: AddLiquidityEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.poolId !== "") {
      writer.uint32(10).string(message.poolId);
    }
    if (message.token1Addr !== "") {
      writer.uint32(18).string(message.token1Addr);
    }
    if (message.token1Amount !== "") {
      writer.uint32(26).string(message.token1Amount);
    }
    if (message.token2Addr !== "") {
      writer.uint32(34).string(message.token2Addr);
    }
    if (message.token2Amount !== "") {
      writer.uint32(42).string(message.token2Amount);
    }
    if (message.liquidity !== "") {
      writer.uint32(50).string(message.liquidity);
    }
    if (message.creator !== "") {
      writer.uint32(58).string(message.creator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddLiquidityEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddLiquidityEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.string();
          break;
        case 2:
          message.token1Addr = reader.string();
          break;
        case 3:
          message.token1Amount = reader.string();
          break;
        case 4:
          message.token2Addr = reader.string();
          break;
        case 5:
          message.token2Amount = reader.string();
          break;
        case 6:
          message.liquidity = reader.string();
          break;
        case 7:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AddLiquidityEvent {
    return {
      poolId: isSet(object.poolId) ? String(object.poolId) : "",
      token1Addr: isSet(object.token1Addr) ? String(object.token1Addr) : "",
      token1Amount: isSet(object.token1Amount)
        ? String(object.token1Amount)
        : "",
      token2Addr: isSet(object.token2Addr) ? String(object.token2Addr) : "",
      token2Amount: isSet(object.token2Amount)
        ? String(object.token2Amount)
        : "",
      liquidity: isSet(object.liquidity) ? String(object.liquidity) : "",
      creator: isSet(object.creator) ? String(object.creator) : "",
    };
  },

  toJSON(message: AddLiquidityEvent): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = message.poolId);
    message.token1Addr !== undefined && (obj.token1Addr = message.token1Addr);
    message.token1Amount !== undefined &&
      (obj.token1Amount = message.token1Amount);
    message.token2Addr !== undefined && (obj.token2Addr = message.token2Addr);
    message.token2Amount !== undefined &&
      (obj.token2Amount = message.token2Amount);
    message.liquidity !== undefined && (obj.liquidity = message.liquidity);
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AddLiquidityEvent>, I>>(
    object: I
  ): AddLiquidityEvent {
    const message = createBaseAddLiquidityEvent();
    message.poolId = object.poolId ?? "";
    message.token1Addr = object.token1Addr ?? "";
    message.token1Amount = object.token1Amount ?? "";
    message.token2Addr = object.token2Addr ?? "";
    message.token2Amount = object.token2Amount ?? "";
    message.liquidity = object.liquidity ?? "";
    message.creator = object.creator ?? "";
    return message;
  },
};

function createBaseRemoveLiquidityEvent(): RemoveLiquidityEvent {
  return {
    poolId: "",
    token1Addr: "",
    token1Amount: "",
    token2Addr: "",
    token2Amount: "",
    liquidity: "",
    creator: "",
  };
}

export const RemoveLiquidityEvent = {
  encode(
    message: RemoveLiquidityEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.poolId !== "") {
      writer.uint32(10).string(message.poolId);
    }
    if (message.token1Addr !== "") {
      writer.uint32(18).string(message.token1Addr);
    }
    if (message.token1Amount !== "") {
      writer.uint32(26).string(message.token1Amount);
    }
    if (message.token2Addr !== "") {
      writer.uint32(34).string(message.token2Addr);
    }
    if (message.token2Amount !== "") {
      writer.uint32(42).string(message.token2Amount);
    }
    if (message.liquidity !== "") {
      writer.uint32(50).string(message.liquidity);
    }
    if (message.creator !== "") {
      writer.uint32(58).string(message.creator);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RemoveLiquidityEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRemoveLiquidityEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.string();
          break;
        case 2:
          message.token1Addr = reader.string();
          break;
        case 3:
          message.token1Amount = reader.string();
          break;
        case 4:
          message.token2Addr = reader.string();
          break;
        case 5:
          message.token2Amount = reader.string();
          break;
        case 6:
          message.liquidity = reader.string();
          break;
        case 7:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RemoveLiquidityEvent {
    return {
      poolId: isSet(object.poolId) ? String(object.poolId) : "",
      token1Addr: isSet(object.token1Addr) ? String(object.token1Addr) : "",
      token1Amount: isSet(object.token1Amount)
        ? String(object.token1Amount)
        : "",
      token2Addr: isSet(object.token2Addr) ? String(object.token2Addr) : "",
      token2Amount: isSet(object.token2Amount)
        ? String(object.token2Amount)
        : "",
      liquidity: isSet(object.liquidity) ? String(object.liquidity) : "",
      creator: isSet(object.creator) ? String(object.creator) : "",
    };
  },

  toJSON(message: RemoveLiquidityEvent): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = message.poolId);
    message.token1Addr !== undefined && (obj.token1Addr = message.token1Addr);
    message.token1Amount !== undefined &&
      (obj.token1Amount = message.token1Amount);
    message.token2Addr !== undefined && (obj.token2Addr = message.token2Addr);
    message.token2Amount !== undefined &&
      (obj.token2Amount = message.token2Amount);
    message.liquidity !== undefined && (obj.liquidity = message.liquidity);
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RemoveLiquidityEvent>, I>>(
    object: I
  ): RemoveLiquidityEvent {
    const message = createBaseRemoveLiquidityEvent();
    message.poolId = object.poolId ?? "";
    message.token1Addr = object.token1Addr ?? "";
    message.token1Amount = object.token1Amount ?? "";
    message.token2Addr = object.token2Addr ?? "";
    message.token2Amount = object.token2Amount ?? "";
    message.liquidity = object.liquidity ?? "";
    message.creator = object.creator ?? "";
    return message;
  },
};

function createBaseSwapEvent(): SwapEvent {
  return {
    poolId: "",
    token1InAmount: "",
    token1OutAmount: "",
    token2InAmount: "",
    token2OutAmount: "",
    to: "",
    creator: "",
  };
}

export const SwapEvent = {
  encode(
    message: SwapEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.poolId !== "") {
      writer.uint32(10).string(message.poolId);
    }
    if (message.token1InAmount !== "") {
      writer.uint32(18).string(message.token1InAmount);
    }
    if (message.token1OutAmount !== "") {
      writer.uint32(26).string(message.token1OutAmount);
    }
    if (message.token2InAmount !== "") {
      writer.uint32(34).string(message.token2InAmount);
    }
    if (message.token2OutAmount !== "") {
      writer.uint32(42).string(message.token2OutAmount);
    }
    if (message.to !== "") {
      writer.uint32(50).string(message.to);
    }
    if (message.creator !== "") {
      writer.uint32(58).string(message.creator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SwapEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSwapEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.string();
          break;
        case 2:
          message.token1InAmount = reader.string();
          break;
        case 3:
          message.token1OutAmount = reader.string();
          break;
        case 4:
          message.token2InAmount = reader.string();
          break;
        case 5:
          message.token2OutAmount = reader.string();
          break;
        case 6:
          message.to = reader.string();
          break;
        case 7:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SwapEvent {
    return {
      poolId: isSet(object.poolId) ? String(object.poolId) : "",
      token1InAmount: isSet(object.token1InAmount)
        ? String(object.token1InAmount)
        : "",
      token1OutAmount: isSet(object.token1OutAmount)
        ? String(object.token1OutAmount)
        : "",
      token2InAmount: isSet(object.token2InAmount)
        ? String(object.token2InAmount)
        : "",
      token2OutAmount: isSet(object.token2OutAmount)
        ? String(object.token2OutAmount)
        : "",
      to: isSet(object.to) ? String(object.to) : "",
      creator: isSet(object.creator) ? String(object.creator) : "",
    };
  },

  toJSON(message: SwapEvent): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = message.poolId);
    message.token1InAmount !== undefined &&
      (obj.token1InAmount = message.token1InAmount);
    message.token1OutAmount !== undefined &&
      (obj.token1OutAmount = message.token1OutAmount);
    message.token2InAmount !== undefined &&
      (obj.token2InAmount = message.token2InAmount);
    message.token2OutAmount !== undefined &&
      (obj.token2OutAmount = message.token2OutAmount);
    message.to !== undefined && (obj.to = message.to);
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SwapEvent>, I>>(
    object: I
  ): SwapEvent {
    const message = createBaseSwapEvent();
    message.poolId = object.poolId ?? "";
    message.token1InAmount = object.token1InAmount ?? "";
    message.token1OutAmount = object.token1OutAmount ?? "";
    message.token2InAmount = object.token2InAmount ?? "";
    message.token2OutAmount = object.token2OutAmount ?? "";
    message.to = object.to ?? "";
    message.creator = object.creator ?? "";
    return message;
  },
};

function createBaseSyncEvent(): SyncEvent {
  return { poolId: "", token1Reserve: "", token2Reserve: "" };
}

export const SyncEvent = {
  encode(
    message: SyncEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.poolId !== "") {
      writer.uint32(10).string(message.poolId);
    }
    if (message.token1Reserve !== "") {
      writer.uint32(18).string(message.token1Reserve);
    }
    if (message.token2Reserve !== "") {
      writer.uint32(26).string(message.token2Reserve);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SyncEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSyncEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.string();
          break;
        case 2:
          message.token1Reserve = reader.string();
          break;
        case 3:
          message.token2Reserve = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SyncEvent {
    return {
      poolId: isSet(object.poolId) ? String(object.poolId) : "",
      token1Reserve: isSet(object.token1Reserve)
        ? String(object.token1Reserve)
        : "",
      token2Reserve: isSet(object.token2Reserve)
        ? String(object.token2Reserve)
        : "",
    };
  },

  toJSON(message: SyncEvent): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = message.poolId);
    message.token1Reserve !== undefined &&
      (obj.token1Reserve = message.token1Reserve);
    message.token2Reserve !== undefined &&
      (obj.token2Reserve = message.token2Reserve);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SyncEvent>, I>>(
    object: I
  ): SyncEvent {
    const message = createBaseSyncEvent();
    message.poolId = object.poolId ?? "";
    message.token1Reserve = object.token1Reserve ?? "";
    message.token2Reserve = object.token2Reserve ?? "";
    return message;
  },
};

function createBaseWithdrawRewardEvent(): WithdrawRewardEvent {
  return { poolId: "", accountAddr: "", withdrawReward: "" };
}

export const WithdrawRewardEvent = {
  encode(
    message: WithdrawRewardEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.poolId !== "") {
      writer.uint32(10).string(message.poolId);
    }
    if (message.accountAddr !== "") {
      writer.uint32(18).string(message.accountAddr);
    }
    if (message.withdrawReward !== "") {
      writer.uint32(26).string(message.withdrawReward);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WithdrawRewardEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWithdrawRewardEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.string();
          break;
        case 2:
          message.accountAddr = reader.string();
          break;
        case 3:
          message.withdrawReward = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): WithdrawRewardEvent {
    return {
      poolId: isSet(object.poolId) ? String(object.poolId) : "",
      accountAddr: isSet(object.accountAddr) ? String(object.accountAddr) : "",
      withdrawReward: isSet(object.withdrawReward)
        ? String(object.withdrawReward)
        : "",
    };
  },

  toJSON(message: WithdrawRewardEvent): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = message.poolId);
    message.accountAddr !== undefined &&
      (obj.accountAddr = message.accountAddr);
    message.withdrawReward !== undefined &&
      (obj.withdrawReward = message.withdrawReward);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<WithdrawRewardEvent>, I>>(
    object: I
  ): WithdrawRewardEvent {
    const message = createBaseWithdrawRewardEvent();
    message.poolId = object.poolId ?? "";
    message.accountAddr = object.accountAddr ?? "";
    message.withdrawReward = object.withdrawReward ?? "";
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
