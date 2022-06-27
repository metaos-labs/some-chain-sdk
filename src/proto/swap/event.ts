/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "sophonlabs.sophon.swap";

export interface EventPoolCreated {
  /** the denom of token0 in the pool */
  denom0: string;
  /** the denom of token1 in the pool */
  denom1: string;
  fee: number;
  tickSpacing: number;
  /** the pool address */
  address: string;
}

export interface EventPoolInitialized {
  /** the pool address */
  address: string;
  /** the initial tick of the pool */
  tick: number;
  /** the initial sqrt price of the pool */
  sqrtPrice: string;
}

/** EventMint is the event emitted when liquidity is minted for a given position */
export interface EventMint {
  /** the pool address */
  address: string;
  /** the address that minted the liquidity */
  creator: string;
  /** the owner of the position and recipient of any minted liquidity */
  owner: string;
  /** the lower tick of the position */
  tickLower: number;
  /** the upper tick of the position */
  tickUpper: number;
  /** the amount of liquidity minted to the position range */
  amount: string;
  /** the amount of denom0 was required for the minted liquidity */
  amount0: string;
  /** the amount of denom1 was required for the minted liquidity */
  amount1: string;
}

/**
 * EventMint is the event emitted when a position's liquidity is removed.
 * Does not withdraw any fees earned by the liquidity position, which must be withdraw via #collect.
 */
export interface EventBurn {
  /** the pool address */
  address: string;
  /** the owner of the position for which liquidity is removed */
  owner: string;
  /** the lower tick of the position */
  tickLower: number;
  /** the upper tick of the position */
  tickUpper: number;
  /** the amount of liquidity to remove */
  amount: string;
  /** the amount of denom0 withdrawn */
  amount0: string;
  /** the amount of denom1 withdrawn */
  amount1: string;
}

export interface EventIncreaseLiquidity {
  /** the pool address */
  address: string;
  /** the id of the NFT for which liquidity was increased */
  tokenId: string;
  /** the amount of liquidity for the NFT position was increased */
  liquidity: string;
  /** the amount of denom0 that was paid for the increase in liquidity */
  amount0: string;
  /** the amount of denom1 that was paid for the increase in liquidity */
  amount1: string;
}

export interface EventDecreaseLiquidity {
  /** the pool address */
  address: string;
  /** the id of the NFT for which liquidity was decreased */
  tokenId: string;
  /** the amount of liquidity for the NFT position was decreased */
  liquidity: string;
  /** the amount of denom0 that was accounted for the decrease in liquidity */
  amount0: string;
  /** the amount of denom1 that was accounted for the decrease in liquidity */
  amount1: string;
}

export interface EventCollect {
  /** the pool address */
  address: string;
  /** the id of the NFT for which underlying tokens were collected */
  tokenId: string;
  /** the address of the account that received the collected tokens */
  recipient: string;
  /** the amount of denom0 owed to the position that was collected */
  amount0: string;
  /** the amount of denom1 owed to the position that was collected */
  amount1: string;
}

export interface EventSwap {
  /** the pool address */
  address: string;
  /** the address of message creator */
  creator: string;
  /** the address of swapped out receiver */
  recipient: string;
  /** the delta of the denom0 balance of the pool */
  amount0: string;
  /** the delta of the denom1 balance of the pool */
  amount1: string;
  /** the sqrt price of the pool after the swap */
  sqrtPrice: string;
  /** the liquidity of the pool after the swap */
  liquidity: string;
  /** the log base 1.0001 of price of the pool after the swap */
  tick: number;
}

export interface EventFeeEnabled {
  /** the fee amount in hundredths of a bip, i.e. 1e-6 */
  fee: number;
  /** the minimum number of ticks between initialized ticks */
  tickSpacing: number;
}

export interface EventSetReward {
  /** the pool address */
  address: string;
  /** the pool reward config index */
  index: number;
  /** reward denom */
  denom: string;
  rewardPerSecond: string;
  /** the reward config effective time */
  triggerTime: Long;
}

export interface EventUpdateReward {
  /** the pool address */
  address: string;
  /** the pool reward config index */
  index: number;
  /** reward denom */
  denom: string;
  rewardPerSecond: string;
  /** the reward config effective time */
  triggerTime: Long;
}

export interface EventGovBurn {
  burner: string;
  amount: string;
}

export interface EventGovSwapExactIn {
  denom: string;
}

function createBaseEventPoolCreated(): EventPoolCreated {
  return { denom0: "", denom1: "", fee: 0, tickSpacing: 0, address: "" };
}

export const EventPoolCreated = {
  encode(
    message: EventPoolCreated,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.denom0 !== "") {
      writer.uint32(10).string(message.denom0);
    }
    if (message.denom1 !== "") {
      writer.uint32(18).string(message.denom1);
    }
    if (message.fee !== 0) {
      writer.uint32(24).int32(message.fee);
    }
    if (message.tickSpacing !== 0) {
      writer.uint32(32).int32(message.tickSpacing);
    }
    if (message.address !== "") {
      writer.uint32(42).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventPoolCreated {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventPoolCreated();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom0 = reader.string();
          break;
        case 2:
          message.denom1 = reader.string();
          break;
        case 3:
          message.fee = reader.int32();
          break;
        case 4:
          message.tickSpacing = reader.int32();
          break;
        case 5:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventPoolCreated {
    return {
      denom0: isSet(object.denom0) ? String(object.denom0) : "",
      denom1: isSet(object.denom1) ? String(object.denom1) : "",
      fee: isSet(object.fee) ? Number(object.fee) : 0,
      tickSpacing: isSet(object.tickSpacing) ? Number(object.tickSpacing) : 0,
      address: isSet(object.address) ? String(object.address) : "",
    };
  },

  toJSON(message: EventPoolCreated): unknown {
    const obj: any = {};
    message.denom0 !== undefined && (obj.denom0 = message.denom0);
    message.denom1 !== undefined && (obj.denom1 = message.denom1);
    message.fee !== undefined && (obj.fee = Math.round(message.fee));
    message.tickSpacing !== undefined &&
      (obj.tickSpacing = Math.round(message.tickSpacing));
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventPoolCreated>, I>>(
    object: I
  ): EventPoolCreated {
    const message = createBaseEventPoolCreated();
    message.denom0 = object.denom0 ?? "";
    message.denom1 = object.denom1 ?? "";
    message.fee = object.fee ?? 0;
    message.tickSpacing = object.tickSpacing ?? 0;
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseEventPoolInitialized(): EventPoolInitialized {
  return { address: "", tick: 0, sqrtPrice: "" };
}

export const EventPoolInitialized = {
  encode(
    message: EventPoolInitialized,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.tick !== 0) {
      writer.uint32(16).int32(message.tick);
    }
    if (message.sqrtPrice !== "") {
      writer.uint32(26).string(message.sqrtPrice);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): EventPoolInitialized {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventPoolInitialized();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.tick = reader.int32();
          break;
        case 3:
          message.sqrtPrice = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventPoolInitialized {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      tick: isSet(object.tick) ? Number(object.tick) : 0,
      sqrtPrice: isSet(object.sqrtPrice) ? String(object.sqrtPrice) : "",
    };
  },

  toJSON(message: EventPoolInitialized): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.tick !== undefined && (obj.tick = Math.round(message.tick));
    message.sqrtPrice !== undefined && (obj.sqrtPrice = message.sqrtPrice);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventPoolInitialized>, I>>(
    object: I
  ): EventPoolInitialized {
    const message = createBaseEventPoolInitialized();
    message.address = object.address ?? "";
    message.tick = object.tick ?? 0;
    message.sqrtPrice = object.sqrtPrice ?? "";
    return message;
  },
};

function createBaseEventMint(): EventMint {
  return {
    address: "",
    creator: "",
    owner: "",
    tickLower: 0,
    tickUpper: 0,
    amount: "",
    amount0: "",
    amount1: "",
  };
}

export const EventMint = {
  encode(
    message: EventMint,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }
    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }
    if (message.tickLower !== 0) {
      writer.uint32(32).int32(message.tickLower);
    }
    if (message.tickUpper !== 0) {
      writer.uint32(40).int32(message.tickUpper);
    }
    if (message.amount !== "") {
      writer.uint32(50).string(message.amount);
    }
    if (message.amount0 !== "") {
      writer.uint32(58).string(message.amount0);
    }
    if (message.amount1 !== "") {
      writer.uint32(66).string(message.amount1);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventMint {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventMint();
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
          message.owner = reader.string();
          break;
        case 4:
          message.tickLower = reader.int32();
          break;
        case 5:
          message.tickUpper = reader.int32();
          break;
        case 6:
          message.amount = reader.string();
          break;
        case 7:
          message.amount0 = reader.string();
          break;
        case 8:
          message.amount1 = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventMint {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      creator: isSet(object.creator) ? String(object.creator) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
      tickLower: isSet(object.tickLower) ? Number(object.tickLower) : 0,
      tickUpper: isSet(object.tickUpper) ? Number(object.tickUpper) : 0,
      amount: isSet(object.amount) ? String(object.amount) : "",
      amount0: isSet(object.amount0) ? String(object.amount0) : "",
      amount1: isSet(object.amount1) ? String(object.amount1) : "",
    };
  },

  toJSON(message: EventMint): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.creator !== undefined && (obj.creator = message.creator);
    message.owner !== undefined && (obj.owner = message.owner);
    message.tickLower !== undefined &&
      (obj.tickLower = Math.round(message.tickLower));
    message.tickUpper !== undefined &&
      (obj.tickUpper = Math.round(message.tickUpper));
    message.amount !== undefined && (obj.amount = message.amount);
    message.amount0 !== undefined && (obj.amount0 = message.amount0);
    message.amount1 !== undefined && (obj.amount1 = message.amount1);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventMint>, I>>(
    object: I
  ): EventMint {
    const message = createBaseEventMint();
    message.address = object.address ?? "";
    message.creator = object.creator ?? "";
    message.owner = object.owner ?? "";
    message.tickLower = object.tickLower ?? 0;
    message.tickUpper = object.tickUpper ?? 0;
    message.amount = object.amount ?? "";
    message.amount0 = object.amount0 ?? "";
    message.amount1 = object.amount1 ?? "";
    return message;
  },
};

function createBaseEventBurn(): EventBurn {
  return {
    address: "",
    owner: "",
    tickLower: 0,
    tickUpper: 0,
    amount: "",
    amount0: "",
    amount1: "",
  };
}

export const EventBurn = {
  encode(
    message: EventBurn,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.tickLower !== 0) {
      writer.uint32(24).int32(message.tickLower);
    }
    if (message.tickUpper !== 0) {
      writer.uint32(32).int32(message.tickUpper);
    }
    if (message.amount !== "") {
      writer.uint32(42).string(message.amount);
    }
    if (message.amount0 !== "") {
      writer.uint32(50).string(message.amount0);
    }
    if (message.amount1 !== "") {
      writer.uint32(58).string(message.amount1);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventBurn {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventBurn();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.owner = reader.string();
          break;
        case 3:
          message.tickLower = reader.int32();
          break;
        case 4:
          message.tickUpper = reader.int32();
          break;
        case 5:
          message.amount = reader.string();
          break;
        case 6:
          message.amount0 = reader.string();
          break;
        case 7:
          message.amount1 = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventBurn {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
      tickLower: isSet(object.tickLower) ? Number(object.tickLower) : 0,
      tickUpper: isSet(object.tickUpper) ? Number(object.tickUpper) : 0,
      amount: isSet(object.amount) ? String(object.amount) : "",
      amount0: isSet(object.amount0) ? String(object.amount0) : "",
      amount1: isSet(object.amount1) ? String(object.amount1) : "",
    };
  },

  toJSON(message: EventBurn): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.owner !== undefined && (obj.owner = message.owner);
    message.tickLower !== undefined &&
      (obj.tickLower = Math.round(message.tickLower));
    message.tickUpper !== undefined &&
      (obj.tickUpper = Math.round(message.tickUpper));
    message.amount !== undefined && (obj.amount = message.amount);
    message.amount0 !== undefined && (obj.amount0 = message.amount0);
    message.amount1 !== undefined && (obj.amount1 = message.amount1);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventBurn>, I>>(
    object: I
  ): EventBurn {
    const message = createBaseEventBurn();
    message.address = object.address ?? "";
    message.owner = object.owner ?? "";
    message.tickLower = object.tickLower ?? 0;
    message.tickUpper = object.tickUpper ?? 0;
    message.amount = object.amount ?? "";
    message.amount0 = object.amount0 ?? "";
    message.amount1 = object.amount1 ?? "";
    return message;
  },
};

function createBaseEventIncreaseLiquidity(): EventIncreaseLiquidity {
  return { address: "", tokenId: "", liquidity: "", amount0: "", amount1: "" };
}

export const EventIncreaseLiquidity = {
  encode(
    message: EventIncreaseLiquidity,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.tokenId !== "") {
      writer.uint32(18).string(message.tokenId);
    }
    if (message.liquidity !== "") {
      writer.uint32(26).string(message.liquidity);
    }
    if (message.amount0 !== "") {
      writer.uint32(34).string(message.amount0);
    }
    if (message.amount1 !== "") {
      writer.uint32(42).string(message.amount1);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): EventIncreaseLiquidity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventIncreaseLiquidity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.tokenId = reader.string();
          break;
        case 3:
          message.liquidity = reader.string();
          break;
        case 4:
          message.amount0 = reader.string();
          break;
        case 5:
          message.amount1 = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventIncreaseLiquidity {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      tokenId: isSet(object.tokenId) ? String(object.tokenId) : "",
      liquidity: isSet(object.liquidity) ? String(object.liquidity) : "",
      amount0: isSet(object.amount0) ? String(object.amount0) : "",
      amount1: isSet(object.amount1) ? String(object.amount1) : "",
    };
  },

  toJSON(message: EventIncreaseLiquidity): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.tokenId !== undefined && (obj.tokenId = message.tokenId);
    message.liquidity !== undefined && (obj.liquidity = message.liquidity);
    message.amount0 !== undefined && (obj.amount0 = message.amount0);
    message.amount1 !== undefined && (obj.amount1 = message.amount1);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventIncreaseLiquidity>, I>>(
    object: I
  ): EventIncreaseLiquidity {
    const message = createBaseEventIncreaseLiquidity();
    message.address = object.address ?? "";
    message.tokenId = object.tokenId ?? "";
    message.liquidity = object.liquidity ?? "";
    message.amount0 = object.amount0 ?? "";
    message.amount1 = object.amount1 ?? "";
    return message;
  },
};

function createBaseEventDecreaseLiquidity(): EventDecreaseLiquidity {
  return { address: "", tokenId: "", liquidity: "", amount0: "", amount1: "" };
}

export const EventDecreaseLiquidity = {
  encode(
    message: EventDecreaseLiquidity,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.tokenId !== "") {
      writer.uint32(18).string(message.tokenId);
    }
    if (message.liquidity !== "") {
      writer.uint32(26).string(message.liquidity);
    }
    if (message.amount0 !== "") {
      writer.uint32(34).string(message.amount0);
    }
    if (message.amount1 !== "") {
      writer.uint32(42).string(message.amount1);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): EventDecreaseLiquidity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventDecreaseLiquidity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.tokenId = reader.string();
          break;
        case 3:
          message.liquidity = reader.string();
          break;
        case 4:
          message.amount0 = reader.string();
          break;
        case 5:
          message.amount1 = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventDecreaseLiquidity {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      tokenId: isSet(object.tokenId) ? String(object.tokenId) : "",
      liquidity: isSet(object.liquidity) ? String(object.liquidity) : "",
      amount0: isSet(object.amount0) ? String(object.amount0) : "",
      amount1: isSet(object.amount1) ? String(object.amount1) : "",
    };
  },

  toJSON(message: EventDecreaseLiquidity): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.tokenId !== undefined && (obj.tokenId = message.tokenId);
    message.liquidity !== undefined && (obj.liquidity = message.liquidity);
    message.amount0 !== undefined && (obj.amount0 = message.amount0);
    message.amount1 !== undefined && (obj.amount1 = message.amount1);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventDecreaseLiquidity>, I>>(
    object: I
  ): EventDecreaseLiquidity {
    const message = createBaseEventDecreaseLiquidity();
    message.address = object.address ?? "";
    message.tokenId = object.tokenId ?? "";
    message.liquidity = object.liquidity ?? "";
    message.amount0 = object.amount0 ?? "";
    message.amount1 = object.amount1 ?? "";
    return message;
  },
};

function createBaseEventCollect(): EventCollect {
  return { address: "", tokenId: "", recipient: "", amount0: "", amount1: "" };
}

export const EventCollect = {
  encode(
    message: EventCollect,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.tokenId !== "") {
      writer.uint32(18).string(message.tokenId);
    }
    if (message.recipient !== "") {
      writer.uint32(26).string(message.recipient);
    }
    if (message.amount0 !== "") {
      writer.uint32(34).string(message.amount0);
    }
    if (message.amount1 !== "") {
      writer.uint32(42).string(message.amount1);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventCollect {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCollect();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.tokenId = reader.string();
          break;
        case 3:
          message.recipient = reader.string();
          break;
        case 4:
          message.amount0 = reader.string();
          break;
        case 5:
          message.amount1 = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventCollect {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      tokenId: isSet(object.tokenId) ? String(object.tokenId) : "",
      recipient: isSet(object.recipient) ? String(object.recipient) : "",
      amount0: isSet(object.amount0) ? String(object.amount0) : "",
      amount1: isSet(object.amount1) ? String(object.amount1) : "",
    };
  },

  toJSON(message: EventCollect): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.tokenId !== undefined && (obj.tokenId = message.tokenId);
    message.recipient !== undefined && (obj.recipient = message.recipient);
    message.amount0 !== undefined && (obj.amount0 = message.amount0);
    message.amount1 !== undefined && (obj.amount1 = message.amount1);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventCollect>, I>>(
    object: I
  ): EventCollect {
    const message = createBaseEventCollect();
    message.address = object.address ?? "";
    message.tokenId = object.tokenId ?? "";
    message.recipient = object.recipient ?? "";
    message.amount0 = object.amount0 ?? "";
    message.amount1 = object.amount1 ?? "";
    return message;
  },
};

function createBaseEventSwap(): EventSwap {
  return {
    address: "",
    creator: "",
    recipient: "",
    amount0: "",
    amount1: "",
    sqrtPrice: "",
    liquidity: "",
    tick: 0,
  };
}

export const EventSwap = {
  encode(
    message: EventSwap,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }
    if (message.recipient !== "") {
      writer.uint32(26).string(message.recipient);
    }
    if (message.amount0 !== "") {
      writer.uint32(34).string(message.amount0);
    }
    if (message.amount1 !== "") {
      writer.uint32(42).string(message.amount1);
    }
    if (message.sqrtPrice !== "") {
      writer.uint32(50).string(message.sqrtPrice);
    }
    if (message.liquidity !== "") {
      writer.uint32(58).string(message.liquidity);
    }
    if (message.tick !== 0) {
      writer.uint32(64).int32(message.tick);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventSwap {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSwap();
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
          message.recipient = reader.string();
          break;
        case 4:
          message.amount0 = reader.string();
          break;
        case 5:
          message.amount1 = reader.string();
          break;
        case 6:
          message.sqrtPrice = reader.string();
          break;
        case 7:
          message.liquidity = reader.string();
          break;
        case 8:
          message.tick = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventSwap {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      creator: isSet(object.creator) ? String(object.creator) : "",
      recipient: isSet(object.recipient) ? String(object.recipient) : "",
      amount0: isSet(object.amount0) ? String(object.amount0) : "",
      amount1: isSet(object.amount1) ? String(object.amount1) : "",
      sqrtPrice: isSet(object.sqrtPrice) ? String(object.sqrtPrice) : "",
      liquidity: isSet(object.liquidity) ? String(object.liquidity) : "",
      tick: isSet(object.tick) ? Number(object.tick) : 0,
    };
  },

  toJSON(message: EventSwap): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.creator !== undefined && (obj.creator = message.creator);
    message.recipient !== undefined && (obj.recipient = message.recipient);
    message.amount0 !== undefined && (obj.amount0 = message.amount0);
    message.amount1 !== undefined && (obj.amount1 = message.amount1);
    message.sqrtPrice !== undefined && (obj.sqrtPrice = message.sqrtPrice);
    message.liquidity !== undefined && (obj.liquidity = message.liquidity);
    message.tick !== undefined && (obj.tick = Math.round(message.tick));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventSwap>, I>>(
    object: I
  ): EventSwap {
    const message = createBaseEventSwap();
    message.address = object.address ?? "";
    message.creator = object.creator ?? "";
    message.recipient = object.recipient ?? "";
    message.amount0 = object.amount0 ?? "";
    message.amount1 = object.amount1 ?? "";
    message.sqrtPrice = object.sqrtPrice ?? "";
    message.liquidity = object.liquidity ?? "";
    message.tick = object.tick ?? 0;
    return message;
  },
};

function createBaseEventFeeEnabled(): EventFeeEnabled {
  return { fee: 0, tickSpacing: 0 };
}

export const EventFeeEnabled = {
  encode(
    message: EventFeeEnabled,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.fee !== 0) {
      writer.uint32(8).int32(message.fee);
    }
    if (message.tickSpacing !== 0) {
      writer.uint32(16).int32(message.tickSpacing);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventFeeEnabled {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventFeeEnabled();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fee = reader.int32();
          break;
        case 2:
          message.tickSpacing = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventFeeEnabled {
    return {
      fee: isSet(object.fee) ? Number(object.fee) : 0,
      tickSpacing: isSet(object.tickSpacing) ? Number(object.tickSpacing) : 0,
    };
  },

  toJSON(message: EventFeeEnabled): unknown {
    const obj: any = {};
    message.fee !== undefined && (obj.fee = Math.round(message.fee));
    message.tickSpacing !== undefined &&
      (obj.tickSpacing = Math.round(message.tickSpacing));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventFeeEnabled>, I>>(
    object: I
  ): EventFeeEnabled {
    const message = createBaseEventFeeEnabled();
    message.fee = object.fee ?? 0;
    message.tickSpacing = object.tickSpacing ?? 0;
    return message;
  },
};

function createBaseEventSetReward(): EventSetReward {
  return {
    address: "",
    index: 0,
    denom: "",
    rewardPerSecond: "",
    triggerTime: Long.ZERO,
  };
}

export const EventSetReward = {
  encode(
    message: EventSetReward,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.index !== 0) {
      writer.uint32(16).uint32(message.index);
    }
    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }
    if (message.rewardPerSecond !== "") {
      writer.uint32(34).string(message.rewardPerSecond);
    }
    if (!message.triggerTime.isZero()) {
      writer.uint32(40).int64(message.triggerTime);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventSetReward {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSetReward();
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
          message.denom = reader.string();
          break;
        case 4:
          message.rewardPerSecond = reader.string();
          break;
        case 5:
          message.triggerTime = reader.int64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventSetReward {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      index: isSet(object.index) ? Number(object.index) : 0,
      denom: isSet(object.denom) ? String(object.denom) : "",
      rewardPerSecond: isSet(object.rewardPerSecond)
        ? String(object.rewardPerSecond)
        : "",
      triggerTime: isSet(object.triggerTime)
        ? Long.fromValue(object.triggerTime)
        : Long.ZERO,
    };
  },

  toJSON(message: EventSetReward): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.index !== undefined && (obj.index = Math.round(message.index));
    message.denom !== undefined && (obj.denom = message.denom);
    message.rewardPerSecond !== undefined &&
      (obj.rewardPerSecond = message.rewardPerSecond);
    message.triggerTime !== undefined &&
      (obj.triggerTime = (message.triggerTime || Long.ZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventSetReward>, I>>(
    object: I
  ): EventSetReward {
    const message = createBaseEventSetReward();
    message.address = object.address ?? "";
    message.index = object.index ?? 0;
    message.denom = object.denom ?? "";
    message.rewardPerSecond = object.rewardPerSecond ?? "";
    message.triggerTime =
      object.triggerTime !== undefined && object.triggerTime !== null
        ? Long.fromValue(object.triggerTime)
        : Long.ZERO;
    return message;
  },
};

function createBaseEventUpdateReward(): EventUpdateReward {
  return {
    address: "",
    index: 0,
    denom: "",
    rewardPerSecond: "",
    triggerTime: Long.ZERO,
  };
}

export const EventUpdateReward = {
  encode(
    message: EventUpdateReward,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.index !== 0) {
      writer.uint32(16).uint32(message.index);
    }
    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }
    if (message.rewardPerSecond !== "") {
      writer.uint32(34).string(message.rewardPerSecond);
    }
    if (!message.triggerTime.isZero()) {
      writer.uint32(40).int64(message.triggerTime);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateReward {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventUpdateReward();
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
          message.denom = reader.string();
          break;
        case 4:
          message.rewardPerSecond = reader.string();
          break;
        case 5:
          message.triggerTime = reader.int64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventUpdateReward {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      index: isSet(object.index) ? Number(object.index) : 0,
      denom: isSet(object.denom) ? String(object.denom) : "",
      rewardPerSecond: isSet(object.rewardPerSecond)
        ? String(object.rewardPerSecond)
        : "",
      triggerTime: isSet(object.triggerTime)
        ? Long.fromValue(object.triggerTime)
        : Long.ZERO,
    };
  },

  toJSON(message: EventUpdateReward): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.index !== undefined && (obj.index = Math.round(message.index));
    message.denom !== undefined && (obj.denom = message.denom);
    message.rewardPerSecond !== undefined &&
      (obj.rewardPerSecond = message.rewardPerSecond);
    message.triggerTime !== undefined &&
      (obj.triggerTime = (message.triggerTime || Long.ZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventUpdateReward>, I>>(
    object: I
  ): EventUpdateReward {
    const message = createBaseEventUpdateReward();
    message.address = object.address ?? "";
    message.index = object.index ?? 0;
    message.denom = object.denom ?? "";
    message.rewardPerSecond = object.rewardPerSecond ?? "";
    message.triggerTime =
      object.triggerTime !== undefined && object.triggerTime !== null
        ? Long.fromValue(object.triggerTime)
        : Long.ZERO;
    return message;
  },
};

function createBaseEventGovBurn(): EventGovBurn {
  return { burner: "", amount: "" };
}

export const EventGovBurn = {
  encode(
    message: EventGovBurn,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.burner !== "") {
      writer.uint32(10).string(message.burner);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventGovBurn {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventGovBurn();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.burner = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventGovBurn {
    return {
      burner: isSet(object.burner) ? String(object.burner) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
    };
  },

  toJSON(message: EventGovBurn): unknown {
    const obj: any = {};
    message.burner !== undefined && (obj.burner = message.burner);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventGovBurn>, I>>(
    object: I
  ): EventGovBurn {
    const message = createBaseEventGovBurn();
    message.burner = object.burner ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
};

function createBaseEventGovSwapExactIn(): EventGovSwapExactIn {
  return { denom: "" };
}

export const EventGovSwapExactIn = {
  encode(
    message: EventGovSwapExactIn,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventGovSwapExactIn {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventGovSwapExactIn();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventGovSwapExactIn {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
    };
  },

  toJSON(message: EventGovSwapExactIn): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventGovSwapExactIn>, I>>(
    object: I
  ): EventGovSwapExactIn {
    const message = createBaseEventGovSwapExactIn();
    message.denom = object.denom ?? "";
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
