/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "sophonlabs.sophon.swap";

export interface PoolRewardConfig {
  /** the source of the reward, when true, it represents the reward obtained through mint, otherwise the reward is obtained from the vault */
  mintable: boolean;
  /** the vault address */
  vault: string;
  /** the operator address */
  operator: string;
  /** the denom of reward */
  denom: string;
  /** the amount of rewards collected per second are earned per unit of liquidity */
  rewardPerSecond: string;
  /** the growth rewards collected per unit of liquidity for the entire life of the pool */
  rewardGrowthGlobal: string;
}

export interface ActivatingPool {
  /** the pool address */
  address: string;
}

function createBasePoolRewardConfig(): PoolRewardConfig {
  return {
    mintable: false,
    vault: "",
    operator: "",
    denom: "",
    rewardPerSecond: "",
    rewardGrowthGlobal: "",
  };
}

export const PoolRewardConfig = {
  encode(
    message: PoolRewardConfig,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.mintable === true) {
      writer.uint32(8).bool(message.mintable);
    }
    if (message.vault !== "") {
      writer.uint32(18).string(message.vault);
    }
    if (message.operator !== "") {
      writer.uint32(26).string(message.operator);
    }
    if (message.denom !== "") {
      writer.uint32(34).string(message.denom);
    }
    if (message.rewardPerSecond !== "") {
      writer.uint32(42).string(message.rewardPerSecond);
    }
    if (message.rewardGrowthGlobal !== "") {
      writer.uint32(50).string(message.rewardGrowthGlobal);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PoolRewardConfig {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolRewardConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mintable = reader.bool();
          break;
        case 2:
          message.vault = reader.string();
          break;
        case 3:
          message.operator = reader.string();
          break;
        case 4:
          message.denom = reader.string();
          break;
        case 5:
          message.rewardPerSecond = reader.string();
          break;
        case 6:
          message.rewardGrowthGlobal = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PoolRewardConfig {
    return {
      mintable: isSet(object.mintable) ? Boolean(object.mintable) : false,
      vault: isSet(object.vault) ? String(object.vault) : "",
      operator: isSet(object.operator) ? String(object.operator) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      rewardPerSecond: isSet(object.rewardPerSecond)
        ? String(object.rewardPerSecond)
        : "",
      rewardGrowthGlobal: isSet(object.rewardGrowthGlobal)
        ? String(object.rewardGrowthGlobal)
        : "",
    };
  },

  toJSON(message: PoolRewardConfig): unknown {
    const obj: any = {};
    message.mintable !== undefined && (obj.mintable = message.mintable);
    message.vault !== undefined && (obj.vault = message.vault);
    message.operator !== undefined && (obj.operator = message.operator);
    message.denom !== undefined && (obj.denom = message.denom);
    message.rewardPerSecond !== undefined &&
      (obj.rewardPerSecond = message.rewardPerSecond);
    message.rewardGrowthGlobal !== undefined &&
      (obj.rewardGrowthGlobal = message.rewardGrowthGlobal);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PoolRewardConfig>, I>>(
    object: I
  ): PoolRewardConfig {
    const message = createBasePoolRewardConfig();
    message.mintable = object.mintable ?? false;
    message.vault = object.vault ?? "";
    message.operator = object.operator ?? "";
    message.denom = object.denom ?? "";
    message.rewardPerSecond = object.rewardPerSecond ?? "";
    message.rewardGrowthGlobal = object.rewardGrowthGlobal ?? "";
    return message;
  },
};

function createBaseActivatingPool(): ActivatingPool {
  return { address: "" };
}

export const ActivatingPool = {
  encode(
    message: ActivatingPool,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ActivatingPool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActivatingPool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ActivatingPool {
    return {
      address: isSet(object.address) ? String(object.address) : "",
    };
  },

  toJSON(message: ActivatingPool): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ActivatingPool>, I>>(
    object: I
  ): ActivatingPool {
    const message = createBaseActivatingPool();
    message.address = object.address ?? "";
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
