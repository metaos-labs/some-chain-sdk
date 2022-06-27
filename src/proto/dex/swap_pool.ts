/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "sophonlabs.sophon.dex";

export interface SwapPoolInfo {
  poolId: string;
  poolName: string;
  token1Addr: string;
  token2Addr: string;
  reserveAddr: string;
  /** 1, it's LP Token Address in LP Token Store; */
  liquidityTokenAddr: string;
  token1Reserve: string;
  token2Reserve: string;
  kLast: string;
}

function createBaseSwapPoolInfo(): SwapPoolInfo {
  return {
    poolId: "",
    poolName: "",
    token1Addr: "",
    token2Addr: "",
    reserveAddr: "",
    liquidityTokenAddr: "",
    token1Reserve: "",
    token2Reserve: "",
    kLast: "",
  };
}

export const SwapPoolInfo = {
  encode(
    message: SwapPoolInfo,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.poolId !== "") {
      writer.uint32(10).string(message.poolId);
    }
    if (message.poolName !== "") {
      writer.uint32(18).string(message.poolName);
    }
    if (message.token1Addr !== "") {
      writer.uint32(26).string(message.token1Addr);
    }
    if (message.token2Addr !== "") {
      writer.uint32(34).string(message.token2Addr);
    }
    if (message.reserveAddr !== "") {
      writer.uint32(42).string(message.reserveAddr);
    }
    if (message.liquidityTokenAddr !== "") {
      writer.uint32(50).string(message.liquidityTokenAddr);
    }
    if (message.token1Reserve !== "") {
      writer.uint32(58).string(message.token1Reserve);
    }
    if (message.token2Reserve !== "") {
      writer.uint32(66).string(message.token2Reserve);
    }
    if (message.kLast !== "") {
      writer.uint32(74).string(message.kLast);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SwapPoolInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSwapPoolInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.string();
          break;
        case 2:
          message.poolName = reader.string();
          break;
        case 3:
          message.token1Addr = reader.string();
          break;
        case 4:
          message.token2Addr = reader.string();
          break;
        case 5:
          message.reserveAddr = reader.string();
          break;
        case 6:
          message.liquidityTokenAddr = reader.string();
          break;
        case 7:
          message.token1Reserve = reader.string();
          break;
        case 8:
          message.token2Reserve = reader.string();
          break;
        case 9:
          message.kLast = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SwapPoolInfo {
    return {
      poolId: isSet(object.poolId) ? String(object.poolId) : "",
      poolName: isSet(object.poolName) ? String(object.poolName) : "",
      token1Addr: isSet(object.token1Addr) ? String(object.token1Addr) : "",
      token2Addr: isSet(object.token2Addr) ? String(object.token2Addr) : "",
      reserveAddr: isSet(object.reserveAddr) ? String(object.reserveAddr) : "",
      liquidityTokenAddr: isSet(object.liquidityTokenAddr)
        ? String(object.liquidityTokenAddr)
        : "",
      token1Reserve: isSet(object.token1Reserve)
        ? String(object.token1Reserve)
        : "",
      token2Reserve: isSet(object.token2Reserve)
        ? String(object.token2Reserve)
        : "",
      kLast: isSet(object.kLast) ? String(object.kLast) : "",
    };
  },

  toJSON(message: SwapPoolInfo): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = message.poolId);
    message.poolName !== undefined && (obj.poolName = message.poolName);
    message.token1Addr !== undefined && (obj.token1Addr = message.token1Addr);
    message.token2Addr !== undefined && (obj.token2Addr = message.token2Addr);
    message.reserveAddr !== undefined &&
      (obj.reserveAddr = message.reserveAddr);
    message.liquidityTokenAddr !== undefined &&
      (obj.liquidityTokenAddr = message.liquidityTokenAddr);
    message.token1Reserve !== undefined &&
      (obj.token1Reserve = message.token1Reserve);
    message.token2Reserve !== undefined &&
      (obj.token2Reserve = message.token2Reserve);
    message.kLast !== undefined && (obj.kLast = message.kLast);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SwapPoolInfo>, I>>(
    object: I
  ): SwapPoolInfo {
    const message = createBaseSwapPoolInfo();
    message.poolId = object.poolId ?? "";
    message.poolName = object.poolName ?? "";
    message.token1Addr = object.token1Addr ?? "";
    message.token2Addr = object.token2Addr ?? "";
    message.reserveAddr = object.reserveAddr ?? "";
    message.liquidityTokenAddr = object.liquidityTokenAddr ?? "";
    message.token1Reserve = object.token1Reserve ?? "";
    message.token2Reserve = object.token2Reserve ?? "";
    message.kLast = object.kLast ?? "";
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
