/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "sophonlabs.sophon.swap";

export interface NonfungiblePositionPool {
  /** Next nonfungible token id to be used. */
  nextTokenId: string;
}

export interface LiquidityPosition {
  tokenId: string;
  liquidity: string;
  feeGrowthInside0Last: string;
  feeGrowthInside1Last: string;
  tokensOwed0: string;
  tokensOwed1: string;
  tickLower: number;
  tickUpper: number;
  address: string;
  rewardGrowthInsideLasts: string[];
  rewardOweds: string[];
}

function createBaseNonfungiblePositionPool(): NonfungiblePositionPool {
  return { nextTokenId: "" };
}

export const NonfungiblePositionPool = {
  encode(
    message: NonfungiblePositionPool,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.nextTokenId !== "") {
      writer.uint32(10).string(message.nextTokenId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): NonfungiblePositionPool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNonfungiblePositionPool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nextTokenId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): NonfungiblePositionPool {
    return {
      nextTokenId: isSet(object.nextTokenId) ? String(object.nextTokenId) : "",
    };
  },

  toJSON(message: NonfungiblePositionPool): unknown {
    const obj: any = {};
    message.nextTokenId !== undefined &&
      (obj.nextTokenId = message.nextTokenId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<NonfungiblePositionPool>, I>>(
    object: I
  ): NonfungiblePositionPool {
    const message = createBaseNonfungiblePositionPool();
    message.nextTokenId = object.nextTokenId ?? "";
    return message;
  },
};

function createBaseLiquidityPosition(): LiquidityPosition {
  return {
    tokenId: "",
    liquidity: "",
    feeGrowthInside0Last: "",
    feeGrowthInside1Last: "",
    tokensOwed0: "",
    tokensOwed1: "",
    tickLower: 0,
    tickUpper: 0,
    address: "",
    rewardGrowthInsideLasts: [],
    rewardOweds: [],
  };
}

export const LiquidityPosition = {
  encode(
    message: LiquidityPosition,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.tokenId !== "") {
      writer.uint32(10).string(message.tokenId);
    }
    if (message.liquidity !== "") {
      writer.uint32(18).string(message.liquidity);
    }
    if (message.feeGrowthInside0Last !== "") {
      writer.uint32(26).string(message.feeGrowthInside0Last);
    }
    if (message.feeGrowthInside1Last !== "") {
      writer.uint32(34).string(message.feeGrowthInside1Last);
    }
    if (message.tokensOwed0 !== "") {
      writer.uint32(42).string(message.tokensOwed0);
    }
    if (message.tokensOwed1 !== "") {
      writer.uint32(50).string(message.tokensOwed1);
    }
    if (message.tickLower !== 0) {
      writer.uint32(56).int32(message.tickLower);
    }
    if (message.tickUpper !== 0) {
      writer.uint32(64).int32(message.tickUpper);
    }
    if (message.address !== "") {
      writer.uint32(74).string(message.address);
    }
    for (const v of message.rewardGrowthInsideLasts) {
      writer.uint32(82).string(v!);
    }
    for (const v of message.rewardOweds) {
      writer.uint32(90).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LiquidityPosition {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLiquidityPosition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenId = reader.string();
          break;
        case 2:
          message.liquidity = reader.string();
          break;
        case 3:
          message.feeGrowthInside0Last = reader.string();
          break;
        case 4:
          message.feeGrowthInside1Last = reader.string();
          break;
        case 5:
          message.tokensOwed0 = reader.string();
          break;
        case 6:
          message.tokensOwed1 = reader.string();
          break;
        case 7:
          message.tickLower = reader.int32();
          break;
        case 8:
          message.tickUpper = reader.int32();
          break;
        case 9:
          message.address = reader.string();
          break;
        case 10:
          message.rewardGrowthInsideLasts.push(reader.string());
          break;
        case 11:
          message.rewardOweds.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LiquidityPosition {
    return {
      tokenId: isSet(object.tokenId) ? String(object.tokenId) : "",
      liquidity: isSet(object.liquidity) ? String(object.liquidity) : "",
      feeGrowthInside0Last: isSet(object.feeGrowthInside0Last)
        ? String(object.feeGrowthInside0Last)
        : "",
      feeGrowthInside1Last: isSet(object.feeGrowthInside1Last)
        ? String(object.feeGrowthInside1Last)
        : "",
      tokensOwed0: isSet(object.tokensOwed0) ? String(object.tokensOwed0) : "",
      tokensOwed1: isSet(object.tokensOwed1) ? String(object.tokensOwed1) : "",
      tickLower: isSet(object.tickLower) ? Number(object.tickLower) : 0,
      tickUpper: isSet(object.tickUpper) ? Number(object.tickUpper) : 0,
      address: isSet(object.address) ? String(object.address) : "",
      rewardGrowthInsideLasts: Array.isArray(object?.rewardGrowthInsideLasts)
        ? object.rewardGrowthInsideLasts.map((e: any) => String(e))
        : [],
      rewardOweds: Array.isArray(object?.rewardOweds)
        ? object.rewardOweds.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: LiquidityPosition): unknown {
    const obj: any = {};
    message.tokenId !== undefined && (obj.tokenId = message.tokenId);
    message.liquidity !== undefined && (obj.liquidity = message.liquidity);
    message.feeGrowthInside0Last !== undefined &&
      (obj.feeGrowthInside0Last = message.feeGrowthInside0Last);
    message.feeGrowthInside1Last !== undefined &&
      (obj.feeGrowthInside1Last = message.feeGrowthInside1Last);
    message.tokensOwed0 !== undefined &&
      (obj.tokensOwed0 = message.tokensOwed0);
    message.tokensOwed1 !== undefined &&
      (obj.tokensOwed1 = message.tokensOwed1);
    message.tickLower !== undefined &&
      (obj.tickLower = Math.round(message.tickLower));
    message.tickUpper !== undefined &&
      (obj.tickUpper = Math.round(message.tickUpper));
    message.address !== undefined && (obj.address = message.address);
    if (message.rewardGrowthInsideLasts) {
      obj.rewardGrowthInsideLasts = message.rewardGrowthInsideLasts.map(
        (e) => e
      );
    } else {
      obj.rewardGrowthInsideLasts = [];
    }
    if (message.rewardOweds) {
      obj.rewardOweds = message.rewardOweds.map((e) => e);
    } else {
      obj.rewardOweds = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LiquidityPosition>, I>>(
    object: I
  ): LiquidityPosition {
    const message = createBaseLiquidityPosition();
    message.tokenId = object.tokenId ?? "";
    message.liquidity = object.liquidity ?? "";
    message.feeGrowthInside0Last = object.feeGrowthInside0Last ?? "";
    message.feeGrowthInside1Last = object.feeGrowthInside1Last ?? "";
    message.tokensOwed0 = object.tokensOwed0 ?? "";
    message.tokensOwed1 = object.tokensOwed1 ?? "";
    message.tickLower = object.tickLower ?? 0;
    message.tickUpper = object.tickUpper ?? 0;
    message.address = object.address ?? "";
    message.rewardGrowthInsideLasts =
      object.rewardGrowthInsideLasts?.map((e) => e) || [];
    message.rewardOweds = object.rewardOweds?.map((e) => e) || [];
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
