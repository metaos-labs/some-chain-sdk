/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Params } from "./params";
import {
  NonfungiblePositionPool,
  LiquidityPosition,
} from "./nonfungible_position";
import {
  Pool,
  PoolFee,
  PoolSlot0,
  PoolObservation,
  PoolPosition,
  PoolTick,
  PoolWord,
} from "./pool";
import { ActivatingPool } from "./reward";

export const protobufPackage = "sophonlabs.sophon.swap";

/** GenesisState defines the swap module's genesis state. */
export interface GenesisState {
  params?: Params;
  nonfungiblePositionPool?: NonfungiblePositionPool;
  liquidityPositions: LiquidityPosition[];
  pools: Pool[];
  poolFees: PoolFee[];
  poolSlot0s: PoolSlot0[];
  poolObservations: PoolObservation[];
  poolPositions: PoolPosition[];
  poolTicks: PoolTick[];
  poolWords: PoolWord[];
  /** this line is used by starport scaffolding # genesis/proto/state */
  activatingPools: ActivatingPool[];
}

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    nonfungiblePositionPool: undefined,
    liquidityPositions: [],
    pools: [],
    poolFees: [],
    poolSlot0s: [],
    poolObservations: [],
    poolPositions: [],
    poolTicks: [],
    poolWords: [],
    activatingPools: [],
  };
}

export const GenesisState = {
  encode(
    message: GenesisState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.nonfungiblePositionPool !== undefined) {
      NonfungiblePositionPool.encode(
        message.nonfungiblePositionPool,
        writer.uint32(18).fork()
      ).ldelim();
    }
    for (const v of message.liquidityPositions) {
      LiquidityPosition.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.pools) {
      Pool.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.poolFees) {
      PoolFee.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.poolSlot0s) {
      PoolSlot0.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.poolObservations) {
      PoolObservation.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.poolPositions) {
      PoolPosition.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.poolTicks) {
      PoolTick.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.poolWords) {
      PoolWord.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    for (const v of message.activatingPools) {
      ActivatingPool.encode(v!, writer.uint32(90).fork()).ldelim();
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
          message.nonfungiblePositionPool = NonfungiblePositionPool.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.liquidityPositions.push(
            LiquidityPosition.decode(reader, reader.uint32())
          );
          break;
        case 4:
          message.pools.push(Pool.decode(reader, reader.uint32()));
          break;
        case 5:
          message.poolFees.push(PoolFee.decode(reader, reader.uint32()));
          break;
        case 6:
          message.poolSlot0s.push(PoolSlot0.decode(reader, reader.uint32()));
          break;
        case 7:
          message.poolObservations.push(
            PoolObservation.decode(reader, reader.uint32())
          );
          break;
        case 8:
          message.poolPositions.push(
            PoolPosition.decode(reader, reader.uint32())
          );
          break;
        case 9:
          message.poolTicks.push(PoolTick.decode(reader, reader.uint32()));
          break;
        case 10:
          message.poolWords.push(PoolWord.decode(reader, reader.uint32()));
          break;
        case 11:
          message.activatingPools.push(
            ActivatingPool.decode(reader, reader.uint32())
          );
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
      nonfungiblePositionPool: isSet(object.nonfungiblePositionPool)
        ? NonfungiblePositionPool.fromJSON(object.nonfungiblePositionPool)
        : undefined,
      liquidityPositions: Array.isArray(object?.liquidityPositions)
        ? object.liquidityPositions.map((e: any) =>
            LiquidityPosition.fromJSON(e)
          )
        : [],
      pools: Array.isArray(object?.pools)
        ? object.pools.map((e: any) => Pool.fromJSON(e))
        : [],
      poolFees: Array.isArray(object?.poolFees)
        ? object.poolFees.map((e: any) => PoolFee.fromJSON(e))
        : [],
      poolSlot0s: Array.isArray(object?.poolSlot0s)
        ? object.poolSlot0s.map((e: any) => PoolSlot0.fromJSON(e))
        : [],
      poolObservations: Array.isArray(object?.poolObservations)
        ? object.poolObservations.map((e: any) => PoolObservation.fromJSON(e))
        : [],
      poolPositions: Array.isArray(object?.poolPositions)
        ? object.poolPositions.map((e: any) => PoolPosition.fromJSON(e))
        : [],
      poolTicks: Array.isArray(object?.poolTicks)
        ? object.poolTicks.map((e: any) => PoolTick.fromJSON(e))
        : [],
      poolWords: Array.isArray(object?.poolWords)
        ? object.poolWords.map((e: any) => PoolWord.fromJSON(e))
        : [],
      activatingPools: Array.isArray(object?.activatingPools)
        ? object.activatingPools.map((e: any) => ActivatingPool.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    message.nonfungiblePositionPool !== undefined &&
      (obj.nonfungiblePositionPool = message.nonfungiblePositionPool
        ? NonfungiblePositionPool.toJSON(message.nonfungiblePositionPool)
        : undefined);
    if (message.liquidityPositions) {
      obj.liquidityPositions = message.liquidityPositions.map((e) =>
        e ? LiquidityPosition.toJSON(e) : undefined
      );
    } else {
      obj.liquidityPositions = [];
    }
    if (message.pools) {
      obj.pools = message.pools.map((e) => (e ? Pool.toJSON(e) : undefined));
    } else {
      obj.pools = [];
    }
    if (message.poolFees) {
      obj.poolFees = message.poolFees.map((e) =>
        e ? PoolFee.toJSON(e) : undefined
      );
    } else {
      obj.poolFees = [];
    }
    if (message.poolSlot0s) {
      obj.poolSlot0s = message.poolSlot0s.map((e) =>
        e ? PoolSlot0.toJSON(e) : undefined
      );
    } else {
      obj.poolSlot0s = [];
    }
    if (message.poolObservations) {
      obj.poolObservations = message.poolObservations.map((e) =>
        e ? PoolObservation.toJSON(e) : undefined
      );
    } else {
      obj.poolObservations = [];
    }
    if (message.poolPositions) {
      obj.poolPositions = message.poolPositions.map((e) =>
        e ? PoolPosition.toJSON(e) : undefined
      );
    } else {
      obj.poolPositions = [];
    }
    if (message.poolTicks) {
      obj.poolTicks = message.poolTicks.map((e) =>
        e ? PoolTick.toJSON(e) : undefined
      );
    } else {
      obj.poolTicks = [];
    }
    if (message.poolWords) {
      obj.poolWords = message.poolWords.map((e) =>
        e ? PoolWord.toJSON(e) : undefined
      );
    } else {
      obj.poolWords = [];
    }
    if (message.activatingPools) {
      obj.activatingPools = message.activatingPools.map((e) =>
        e ? ActivatingPool.toJSON(e) : undefined
      );
    } else {
      obj.activatingPools = [];
    }
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
    message.nonfungiblePositionPool =
      object.nonfungiblePositionPool !== undefined &&
      object.nonfungiblePositionPool !== null
        ? NonfungiblePositionPool.fromPartial(object.nonfungiblePositionPool)
        : undefined;
    message.liquidityPositions =
      object.liquidityPositions?.map((e) => LiquidityPosition.fromPartial(e)) ||
      [];
    message.pools = object.pools?.map((e) => Pool.fromPartial(e)) || [];
    message.poolFees =
      object.poolFees?.map((e) => PoolFee.fromPartial(e)) || [];
    message.poolSlot0s =
      object.poolSlot0s?.map((e) => PoolSlot0.fromPartial(e)) || [];
    message.poolObservations =
      object.poolObservations?.map((e) => PoolObservation.fromPartial(e)) || [];
    message.poolPositions =
      object.poolPositions?.map((e) => PoolPosition.fromPartial(e)) || [];
    message.poolTicks =
      object.poolTicks?.map((e) => PoolTick.fromPartial(e)) || [];
    message.poolWords =
      object.poolWords?.map((e) => PoolWord.fromPartial(e)) || [];
    message.activatingPools =
      object.activatingPools?.map((e) => ActivatingPool.fromPartial(e)) || [];
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
