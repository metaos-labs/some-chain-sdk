/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { PoolRewardConfig } from "./reward";

export const protobufPackage = "sophonlabs.sophon.swap";

export interface Pool {
  address: string;
  /** the first of the two tokens of the pool, sorted by denom */
  denom0: string;
  /** the second of the two tokens of the pool, sorted by denom */
  denom1: string;
  /** the precision of denom0 */
  decimal0: number;
  /** the precision of denom1 */
  decimal1: number;
  /** the pool's fee in hundredths of a bip, i.e. 1e-6 */
  fee: number;
  /** the pool tick spacing */
  tickSpacing: number;
  /** the maximum amount of position liquidity that can use any tick in the range */
  maxLiquidityPerTick: string;
}

export interface PoolFee {
  fee: number;
  tickSpacing: number;
}

export interface PoolSlot0 {
  /** the pool address */
  address: string;
  /** the current tick */
  tick: number;
  /** the current price */
  sqrtPrice: string;
  /** the current in range liquidity available to the pool */
  liquidity: string;
  /** the growth fees of denom0 collected per unit of liquidity for the entire life of the pool */
  feeGrowthGlobal0: string;
  /** the growth fees of denom1 collected per unit of liquidity for the entire life of the pool */
  feeGrowthGlobal1: string;
  /** the amounts of denom0 that are owed to the protocol */
  feeProtocolOwed0: string;
  /** the amounts of denom1 that are owed to the protocol */
  feeProtocolOwed1: string;
  /** the most-recently updated index of the observations array */
  observationIndex: number;
  /** the current maximum number of observations that are being stored */
  observationCardinality: number;
  /** the next maximum number of observations to store */
  observationCardinalityNext: number;
  /** the last update time of reward config */
  rewardUpdateTimeLast: Long;
  /** the reward configs */
  rewardConfigs: PoolRewardConfig[];
}

export interface PoolObservation {
  /** the pool address */
  address: string;
  /** the observation index */
  index: number;
  /** the block timestamp of the observation */
  blockTimestamp: Long;
  /** the tick accumulator, i.e tick * time elapsed since the pool wal first initialized */
  tickCumulative: Long;
  /** the seconds per liquidity, i.e seconds elapsed / max(1, liquidity) since the pool was first initialized */
  secondsPerLiquidityCumulative: string;
}

export interface PoolPosition {
  /** the pool address */
  address: string;
  /** the position owner */
  owner: string;
  tickLower: number;
  tickUpper: number;
  liquidity: string;
  feeGrowthInside0: string;
  feeGrowthInside1: string;
  tokensOwed0: string;
  tokensOwed1: string;
  rewardGrowthInsides: string[];
  rewardOweds: string[];
}

export interface PoolWord {
  address: string;
  index: number;
  word: string;
}

export interface PoolTick {
  address: string;
  index: number;
  liquidityGross: string;
  liquidityNet: string;
  feeGrowthOutside0: string;
  feeGrowthOutside1: string;
  tickCumulativeOutside: Long;
  secondsPerLiquidityOutside: string;
  secondsOutside: Long;
  rewardGrowthOutsides: string[];
}

function createBasePool(): Pool {
  return {
    address: "",
    denom0: "",
    denom1: "",
    decimal0: 0,
    decimal1: 0,
    fee: 0,
    tickSpacing: 0,
    maxLiquidityPerTick: "",
  };
}

export const Pool = {
  encode(message: Pool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.denom0 !== "") {
      writer.uint32(18).string(message.denom0);
    }
    if (message.denom1 !== "") {
      writer.uint32(26).string(message.denom1);
    }
    if (message.decimal0 !== 0) {
      writer.uint32(32).int32(message.decimal0);
    }
    if (message.decimal1 !== 0) {
      writer.uint32(40).int32(message.decimal1);
    }
    if (message.fee !== 0) {
      writer.uint32(48).int32(message.fee);
    }
    if (message.tickSpacing !== 0) {
      writer.uint32(56).int32(message.tickSpacing);
    }
    if (message.maxLiquidityPerTick !== "") {
      writer.uint32(66).string(message.maxLiquidityPerTick);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Pool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.denom0 = reader.string();
          break;
        case 3:
          message.denom1 = reader.string();
          break;
        case 4:
          message.decimal0 = reader.int32();
          break;
        case 5:
          message.decimal1 = reader.int32();
          break;
        case 6:
          message.fee = reader.int32();
          break;
        case 7:
          message.tickSpacing = reader.int32();
          break;
        case 8:
          message.maxLiquidityPerTick = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Pool {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      denom0: isSet(object.denom0) ? String(object.denom0) : "",
      denom1: isSet(object.denom1) ? String(object.denom1) : "",
      decimal0: isSet(object.decimal0) ? Number(object.decimal0) : 0,
      decimal1: isSet(object.decimal1) ? Number(object.decimal1) : 0,
      fee: isSet(object.fee) ? Number(object.fee) : 0,
      tickSpacing: isSet(object.tickSpacing) ? Number(object.tickSpacing) : 0,
      maxLiquidityPerTick: isSet(object.maxLiquidityPerTick)
        ? String(object.maxLiquidityPerTick)
        : "",
    };
  },

  toJSON(message: Pool): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.denom0 !== undefined && (obj.denom0 = message.denom0);
    message.denom1 !== undefined && (obj.denom1 = message.denom1);
    message.decimal0 !== undefined &&
      (obj.decimal0 = Math.round(message.decimal0));
    message.decimal1 !== undefined &&
      (obj.decimal1 = Math.round(message.decimal1));
    message.fee !== undefined && (obj.fee = Math.round(message.fee));
    message.tickSpacing !== undefined &&
      (obj.tickSpacing = Math.round(message.tickSpacing));
    message.maxLiquidityPerTick !== undefined &&
      (obj.maxLiquidityPerTick = message.maxLiquidityPerTick);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Pool>, I>>(object: I): Pool {
    const message = createBasePool();
    message.address = object.address ?? "";
    message.denom0 = object.denom0 ?? "";
    message.denom1 = object.denom1 ?? "";
    message.decimal0 = object.decimal0 ?? 0;
    message.decimal1 = object.decimal1 ?? 0;
    message.fee = object.fee ?? 0;
    message.tickSpacing = object.tickSpacing ?? 0;
    message.maxLiquidityPerTick = object.maxLiquidityPerTick ?? "";
    return message;
  },
};

function createBasePoolFee(): PoolFee {
  return { fee: 0, tickSpacing: 0 };
}

export const PoolFee = {
  encode(
    message: PoolFee,
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

  decode(input: _m0.Reader | Uint8Array, length?: number): PoolFee {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolFee();
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

  fromJSON(object: any): PoolFee {
    return {
      fee: isSet(object.fee) ? Number(object.fee) : 0,
      tickSpacing: isSet(object.tickSpacing) ? Number(object.tickSpacing) : 0,
    };
  },

  toJSON(message: PoolFee): unknown {
    const obj: any = {};
    message.fee !== undefined && (obj.fee = Math.round(message.fee));
    message.tickSpacing !== undefined &&
      (obj.tickSpacing = Math.round(message.tickSpacing));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PoolFee>, I>>(object: I): PoolFee {
    const message = createBasePoolFee();
    message.fee = object.fee ?? 0;
    message.tickSpacing = object.tickSpacing ?? 0;
    return message;
  },
};

function createBasePoolSlot0(): PoolSlot0 {
  return {
    address: "",
    tick: 0,
    sqrtPrice: "",
    liquidity: "",
    feeGrowthGlobal0: "",
    feeGrowthGlobal1: "",
    feeProtocolOwed0: "",
    feeProtocolOwed1: "",
    observationIndex: 0,
    observationCardinality: 0,
    observationCardinalityNext: 0,
    rewardUpdateTimeLast: Long.ZERO,
    rewardConfigs: [],
  };
}

export const PoolSlot0 = {
  encode(
    message: PoolSlot0,
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
    if (message.liquidity !== "") {
      writer.uint32(34).string(message.liquidity);
    }
    if (message.feeGrowthGlobal0 !== "") {
      writer.uint32(42).string(message.feeGrowthGlobal0);
    }
    if (message.feeGrowthGlobal1 !== "") {
      writer.uint32(50).string(message.feeGrowthGlobal1);
    }
    if (message.feeProtocolOwed0 !== "") {
      writer.uint32(58).string(message.feeProtocolOwed0);
    }
    if (message.feeProtocolOwed1 !== "") {
      writer.uint32(66).string(message.feeProtocolOwed1);
    }
    if (message.observationIndex !== 0) {
      writer.uint32(72).uint32(message.observationIndex);
    }
    if (message.observationCardinality !== 0) {
      writer.uint32(80).uint32(message.observationCardinality);
    }
    if (message.observationCardinalityNext !== 0) {
      writer.uint32(88).uint32(message.observationCardinalityNext);
    }
    if (!message.rewardUpdateTimeLast.isZero()) {
      writer.uint32(96).int64(message.rewardUpdateTimeLast);
    }
    for (const v of message.rewardConfigs) {
      PoolRewardConfig.encode(v!, writer.uint32(106).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PoolSlot0 {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolSlot0();
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
        case 4:
          message.liquidity = reader.string();
          break;
        case 5:
          message.feeGrowthGlobal0 = reader.string();
          break;
        case 6:
          message.feeGrowthGlobal1 = reader.string();
          break;
        case 7:
          message.feeProtocolOwed0 = reader.string();
          break;
        case 8:
          message.feeProtocolOwed1 = reader.string();
          break;
        case 9:
          message.observationIndex = reader.uint32();
          break;
        case 10:
          message.observationCardinality = reader.uint32();
          break;
        case 11:
          message.observationCardinalityNext = reader.uint32();
          break;
        case 12:
          message.rewardUpdateTimeLast = reader.int64() as Long;
          break;
        case 13:
          message.rewardConfigs.push(
            PoolRewardConfig.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PoolSlot0 {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      tick: isSet(object.tick) ? Number(object.tick) : 0,
      sqrtPrice: isSet(object.sqrtPrice) ? String(object.sqrtPrice) : "",
      liquidity: isSet(object.liquidity) ? String(object.liquidity) : "",
      feeGrowthGlobal0: isSet(object.feeGrowthGlobal0)
        ? String(object.feeGrowthGlobal0)
        : "",
      feeGrowthGlobal1: isSet(object.feeGrowthGlobal1)
        ? String(object.feeGrowthGlobal1)
        : "",
      feeProtocolOwed0: isSet(object.feeProtocolOwed0)
        ? String(object.feeProtocolOwed0)
        : "",
      feeProtocolOwed1: isSet(object.feeProtocolOwed1)
        ? String(object.feeProtocolOwed1)
        : "",
      observationIndex: isSet(object.observationIndex)
        ? Number(object.observationIndex)
        : 0,
      observationCardinality: isSet(object.observationCardinality)
        ? Number(object.observationCardinality)
        : 0,
      observationCardinalityNext: isSet(object.observationCardinalityNext)
        ? Number(object.observationCardinalityNext)
        : 0,
      rewardUpdateTimeLast: isSet(object.rewardUpdateTimeLast)
        ? Long.fromValue(object.rewardUpdateTimeLast)
        : Long.ZERO,
      rewardConfigs: Array.isArray(object?.rewardConfigs)
        ? object.rewardConfigs.map((e: any) => PoolRewardConfig.fromJSON(e))
        : [],
    };
  },

  toJSON(message: PoolSlot0): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.tick !== undefined && (obj.tick = Math.round(message.tick));
    message.sqrtPrice !== undefined && (obj.sqrtPrice = message.sqrtPrice);
    message.liquidity !== undefined && (obj.liquidity = message.liquidity);
    message.feeGrowthGlobal0 !== undefined &&
      (obj.feeGrowthGlobal0 = message.feeGrowthGlobal0);
    message.feeGrowthGlobal1 !== undefined &&
      (obj.feeGrowthGlobal1 = message.feeGrowthGlobal1);
    message.feeProtocolOwed0 !== undefined &&
      (obj.feeProtocolOwed0 = message.feeProtocolOwed0);
    message.feeProtocolOwed1 !== undefined &&
      (obj.feeProtocolOwed1 = message.feeProtocolOwed1);
    message.observationIndex !== undefined &&
      (obj.observationIndex = Math.round(message.observationIndex));
    message.observationCardinality !== undefined &&
      (obj.observationCardinality = Math.round(message.observationCardinality));
    message.observationCardinalityNext !== undefined &&
      (obj.observationCardinalityNext = Math.round(
        message.observationCardinalityNext
      ));
    message.rewardUpdateTimeLast !== undefined &&
      (obj.rewardUpdateTimeLast = (
        message.rewardUpdateTimeLast || Long.ZERO
      ).toString());
    if (message.rewardConfigs) {
      obj.rewardConfigs = message.rewardConfigs.map((e) =>
        e ? PoolRewardConfig.toJSON(e) : undefined
      );
    } else {
      obj.rewardConfigs = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PoolSlot0>, I>>(
    object: I
  ): PoolSlot0 {
    const message = createBasePoolSlot0();
    message.address = object.address ?? "";
    message.tick = object.tick ?? 0;
    message.sqrtPrice = object.sqrtPrice ?? "";
    message.liquidity = object.liquidity ?? "";
    message.feeGrowthGlobal0 = object.feeGrowthGlobal0 ?? "";
    message.feeGrowthGlobal1 = object.feeGrowthGlobal1 ?? "";
    message.feeProtocolOwed0 = object.feeProtocolOwed0 ?? "";
    message.feeProtocolOwed1 = object.feeProtocolOwed1 ?? "";
    message.observationIndex = object.observationIndex ?? 0;
    message.observationCardinality = object.observationCardinality ?? 0;
    message.observationCardinalityNext = object.observationCardinalityNext ?? 0;
    message.rewardUpdateTimeLast =
      object.rewardUpdateTimeLast !== undefined &&
      object.rewardUpdateTimeLast !== null
        ? Long.fromValue(object.rewardUpdateTimeLast)
        : Long.ZERO;
    message.rewardConfigs =
      object.rewardConfigs?.map((e) => PoolRewardConfig.fromPartial(e)) || [];
    return message;
  },
};

function createBasePoolObservation(): PoolObservation {
  return {
    address: "",
    index: 0,
    blockTimestamp: Long.ZERO,
    tickCumulative: Long.ZERO,
    secondsPerLiquidityCumulative: "",
  };
}

export const PoolObservation = {
  encode(
    message: PoolObservation,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.index !== 0) {
      writer.uint32(16).uint32(message.index);
    }
    if (!message.blockTimestamp.isZero()) {
      writer.uint32(24).int64(message.blockTimestamp);
    }
    if (!message.tickCumulative.isZero()) {
      writer.uint32(32).int64(message.tickCumulative);
    }
    if (message.secondsPerLiquidityCumulative !== "") {
      writer.uint32(42).string(message.secondsPerLiquidityCumulative);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PoolObservation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolObservation();
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
          message.blockTimestamp = reader.int64() as Long;
          break;
        case 4:
          message.tickCumulative = reader.int64() as Long;
          break;
        case 5:
          message.secondsPerLiquidityCumulative = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PoolObservation {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      index: isSet(object.index) ? Number(object.index) : 0,
      blockTimestamp: isSet(object.blockTimestamp)
        ? Long.fromValue(object.blockTimestamp)
        : Long.ZERO,
      tickCumulative: isSet(object.tickCumulative)
        ? Long.fromValue(object.tickCumulative)
        : Long.ZERO,
      secondsPerLiquidityCumulative: isSet(object.secondsPerLiquidityCumulative)
        ? String(object.secondsPerLiquidityCumulative)
        : "",
    };
  },

  toJSON(message: PoolObservation): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.index !== undefined && (obj.index = Math.round(message.index));
    message.blockTimestamp !== undefined &&
      (obj.blockTimestamp = (message.blockTimestamp || Long.ZERO).toString());
    message.tickCumulative !== undefined &&
      (obj.tickCumulative = (message.tickCumulative || Long.ZERO).toString());
    message.secondsPerLiquidityCumulative !== undefined &&
      (obj.secondsPerLiquidityCumulative =
        message.secondsPerLiquidityCumulative);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PoolObservation>, I>>(
    object: I
  ): PoolObservation {
    const message = createBasePoolObservation();
    message.address = object.address ?? "";
    message.index = object.index ?? 0;
    message.blockTimestamp =
      object.blockTimestamp !== undefined && object.blockTimestamp !== null
        ? Long.fromValue(object.blockTimestamp)
        : Long.ZERO;
    message.tickCumulative =
      object.tickCumulative !== undefined && object.tickCumulative !== null
        ? Long.fromValue(object.tickCumulative)
        : Long.ZERO;
    message.secondsPerLiquidityCumulative =
      object.secondsPerLiquidityCumulative ?? "";
    return message;
  },
};

function createBasePoolPosition(): PoolPosition {
  return {
    address: "",
    owner: "",
    tickLower: 0,
    tickUpper: 0,
    liquidity: "",
    feeGrowthInside0: "",
    feeGrowthInside1: "",
    tokensOwed0: "",
    tokensOwed1: "",
    rewardGrowthInsides: [],
    rewardOweds: [],
  };
}

export const PoolPosition = {
  encode(
    message: PoolPosition,
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
    if (message.liquidity !== "") {
      writer.uint32(42).string(message.liquidity);
    }
    if (message.feeGrowthInside0 !== "") {
      writer.uint32(50).string(message.feeGrowthInside0);
    }
    if (message.feeGrowthInside1 !== "") {
      writer.uint32(58).string(message.feeGrowthInside1);
    }
    if (message.tokensOwed0 !== "") {
      writer.uint32(66).string(message.tokensOwed0);
    }
    if (message.tokensOwed1 !== "") {
      writer.uint32(74).string(message.tokensOwed1);
    }
    for (const v of message.rewardGrowthInsides) {
      writer.uint32(82).string(v!);
    }
    for (const v of message.rewardOweds) {
      writer.uint32(90).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PoolPosition {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolPosition();
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
          message.liquidity = reader.string();
          break;
        case 6:
          message.feeGrowthInside0 = reader.string();
          break;
        case 7:
          message.feeGrowthInside1 = reader.string();
          break;
        case 8:
          message.tokensOwed0 = reader.string();
          break;
        case 9:
          message.tokensOwed1 = reader.string();
          break;
        case 10:
          message.rewardGrowthInsides.push(reader.string());
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

  fromJSON(object: any): PoolPosition {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
      tickLower: isSet(object.tickLower) ? Number(object.tickLower) : 0,
      tickUpper: isSet(object.tickUpper) ? Number(object.tickUpper) : 0,
      liquidity: isSet(object.liquidity) ? String(object.liquidity) : "",
      feeGrowthInside0: isSet(object.feeGrowthInside0)
        ? String(object.feeGrowthInside0)
        : "",
      feeGrowthInside1: isSet(object.feeGrowthInside1)
        ? String(object.feeGrowthInside1)
        : "",
      tokensOwed0: isSet(object.tokensOwed0) ? String(object.tokensOwed0) : "",
      tokensOwed1: isSet(object.tokensOwed1) ? String(object.tokensOwed1) : "",
      rewardGrowthInsides: Array.isArray(object?.rewardGrowthInsides)
        ? object.rewardGrowthInsides.map((e: any) => String(e))
        : [],
      rewardOweds: Array.isArray(object?.rewardOweds)
        ? object.rewardOweds.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: PoolPosition): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.owner !== undefined && (obj.owner = message.owner);
    message.tickLower !== undefined &&
      (obj.tickLower = Math.round(message.tickLower));
    message.tickUpper !== undefined &&
      (obj.tickUpper = Math.round(message.tickUpper));
    message.liquidity !== undefined && (obj.liquidity = message.liquidity);
    message.feeGrowthInside0 !== undefined &&
      (obj.feeGrowthInside0 = message.feeGrowthInside0);
    message.feeGrowthInside1 !== undefined &&
      (obj.feeGrowthInside1 = message.feeGrowthInside1);
    message.tokensOwed0 !== undefined &&
      (obj.tokensOwed0 = message.tokensOwed0);
    message.tokensOwed1 !== undefined &&
      (obj.tokensOwed1 = message.tokensOwed1);
    if (message.rewardGrowthInsides) {
      obj.rewardGrowthInsides = message.rewardGrowthInsides.map((e) => e);
    } else {
      obj.rewardGrowthInsides = [];
    }
    if (message.rewardOweds) {
      obj.rewardOweds = message.rewardOweds.map((e) => e);
    } else {
      obj.rewardOweds = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PoolPosition>, I>>(
    object: I
  ): PoolPosition {
    const message = createBasePoolPosition();
    message.address = object.address ?? "";
    message.owner = object.owner ?? "";
    message.tickLower = object.tickLower ?? 0;
    message.tickUpper = object.tickUpper ?? 0;
    message.liquidity = object.liquidity ?? "";
    message.feeGrowthInside0 = object.feeGrowthInside0 ?? "";
    message.feeGrowthInside1 = object.feeGrowthInside1 ?? "";
    message.tokensOwed0 = object.tokensOwed0 ?? "";
    message.tokensOwed1 = object.tokensOwed1 ?? "";
    message.rewardGrowthInsides =
      object.rewardGrowthInsides?.map((e) => e) || [];
    message.rewardOweds = object.rewardOweds?.map((e) => e) || [];
    return message;
  },
};

function createBasePoolWord(): PoolWord {
  return { address: "", index: 0, word: "" };
}

export const PoolWord = {
  encode(
    message: PoolWord,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.index !== 0) {
      writer.uint32(16).int32(message.index);
    }
    if (message.word !== "") {
      writer.uint32(26).string(message.word);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PoolWord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolWord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.index = reader.int32();
          break;
        case 3:
          message.word = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PoolWord {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      index: isSet(object.index) ? Number(object.index) : 0,
      word: isSet(object.word) ? String(object.word) : "",
    };
  },

  toJSON(message: PoolWord): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.index !== undefined && (obj.index = Math.round(message.index));
    message.word !== undefined && (obj.word = message.word);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PoolWord>, I>>(object: I): PoolWord {
    const message = createBasePoolWord();
    message.address = object.address ?? "";
    message.index = object.index ?? 0;
    message.word = object.word ?? "";
    return message;
  },
};

function createBasePoolTick(): PoolTick {
  return {
    address: "",
    index: 0,
    liquidityGross: "",
    liquidityNet: "",
    feeGrowthOutside0: "",
    feeGrowthOutside1: "",
    tickCumulativeOutside: Long.ZERO,
    secondsPerLiquidityOutside: "",
    secondsOutside: Long.ZERO,
    rewardGrowthOutsides: [],
  };
}

export const PoolTick = {
  encode(
    message: PoolTick,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.index !== 0) {
      writer.uint32(16).int32(message.index);
    }
    if (message.liquidityGross !== "") {
      writer.uint32(26).string(message.liquidityGross);
    }
    if (message.liquidityNet !== "") {
      writer.uint32(34).string(message.liquidityNet);
    }
    if (message.feeGrowthOutside0 !== "") {
      writer.uint32(42).string(message.feeGrowthOutside0);
    }
    if (message.feeGrowthOutside1 !== "") {
      writer.uint32(50).string(message.feeGrowthOutside1);
    }
    if (!message.tickCumulativeOutside.isZero()) {
      writer.uint32(56).int64(message.tickCumulativeOutside);
    }
    if (message.secondsPerLiquidityOutside !== "") {
      writer.uint32(66).string(message.secondsPerLiquidityOutside);
    }
    if (!message.secondsOutside.isZero()) {
      writer.uint32(72).int64(message.secondsOutside);
    }
    for (const v of message.rewardGrowthOutsides) {
      writer.uint32(82).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PoolTick {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolTick();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.index = reader.int32();
          break;
        case 3:
          message.liquidityGross = reader.string();
          break;
        case 4:
          message.liquidityNet = reader.string();
          break;
        case 5:
          message.feeGrowthOutside0 = reader.string();
          break;
        case 6:
          message.feeGrowthOutside1 = reader.string();
          break;
        case 7:
          message.tickCumulativeOutside = reader.int64() as Long;
          break;
        case 8:
          message.secondsPerLiquidityOutside = reader.string();
          break;
        case 9:
          message.secondsOutside = reader.int64() as Long;
          break;
        case 10:
          message.rewardGrowthOutsides.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PoolTick {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      index: isSet(object.index) ? Number(object.index) : 0,
      liquidityGross: isSet(object.liquidityGross)
        ? String(object.liquidityGross)
        : "",
      liquidityNet: isSet(object.liquidityNet)
        ? String(object.liquidityNet)
        : "",
      feeGrowthOutside0: isSet(object.feeGrowthOutside0)
        ? String(object.feeGrowthOutside0)
        : "",
      feeGrowthOutside1: isSet(object.feeGrowthOutside1)
        ? String(object.feeGrowthOutside1)
        : "",
      tickCumulativeOutside: isSet(object.tickCumulativeOutside)
        ? Long.fromValue(object.tickCumulativeOutside)
        : Long.ZERO,
      secondsPerLiquidityOutside: isSet(object.secondsPerLiquidityOutside)
        ? String(object.secondsPerLiquidityOutside)
        : "",
      secondsOutside: isSet(object.secondsOutside)
        ? Long.fromValue(object.secondsOutside)
        : Long.ZERO,
      rewardGrowthOutsides: Array.isArray(object?.rewardGrowthOutsides)
        ? object.rewardGrowthOutsides.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: PoolTick): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.index !== undefined && (obj.index = Math.round(message.index));
    message.liquidityGross !== undefined &&
      (obj.liquidityGross = message.liquidityGross);
    message.liquidityNet !== undefined &&
      (obj.liquidityNet = message.liquidityNet);
    message.feeGrowthOutside0 !== undefined &&
      (obj.feeGrowthOutside0 = message.feeGrowthOutside0);
    message.feeGrowthOutside1 !== undefined &&
      (obj.feeGrowthOutside1 = message.feeGrowthOutside1);
    message.tickCumulativeOutside !== undefined &&
      (obj.tickCumulativeOutside = (
        message.tickCumulativeOutside || Long.ZERO
      ).toString());
    message.secondsPerLiquidityOutside !== undefined &&
      (obj.secondsPerLiquidityOutside = message.secondsPerLiquidityOutside);
    message.secondsOutside !== undefined &&
      (obj.secondsOutside = (message.secondsOutside || Long.ZERO).toString());
    if (message.rewardGrowthOutsides) {
      obj.rewardGrowthOutsides = message.rewardGrowthOutsides.map((e) => e);
    } else {
      obj.rewardGrowthOutsides = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PoolTick>, I>>(object: I): PoolTick {
    const message = createBasePoolTick();
    message.address = object.address ?? "";
    message.index = object.index ?? 0;
    message.liquidityGross = object.liquidityGross ?? "";
    message.liquidityNet = object.liquidityNet ?? "";
    message.feeGrowthOutside0 = object.feeGrowthOutside0 ?? "";
    message.feeGrowthOutside1 = object.feeGrowthOutside1 ?? "";
    message.tickCumulativeOutside =
      object.tickCumulativeOutside !== undefined &&
      object.tickCumulativeOutside !== null
        ? Long.fromValue(object.tickCumulativeOutside)
        : Long.ZERO;
    message.secondsPerLiquidityOutside =
      object.secondsPerLiquidityOutside ?? "";
    message.secondsOutside =
      object.secondsOutside !== undefined && object.secondsOutside !== null
        ? Long.fromValue(object.secondsOutside)
        : Long.ZERO;
    message.rewardGrowthOutsides =
      object.rewardGrowthOutsides?.map((e) => e) || [];
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
