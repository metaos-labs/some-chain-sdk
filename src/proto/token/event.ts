/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "sophonlabs.sophon.token";

export interface CreateTokenEvent {
  tokenDenom: string;
  tokenName: string;
  tokenSymbol: string;
  tokenDecimal: number;
  tokenCreator: string;
}

export interface MintEvent {
  denom: string;
  minter: string;
  value: string;
}

export interface BurnEvent {
  denom: string;
  burner: string;
  value: string;
}

function createBaseCreateTokenEvent(): CreateTokenEvent {
  return {
    tokenDenom: "",
    tokenName: "",
    tokenSymbol: "",
    tokenDecimal: 0,
    tokenCreator: "",
  };
}

export const CreateTokenEvent = {
  encode(
    message: CreateTokenEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.tokenDenom !== "") {
      writer.uint32(10).string(message.tokenDenom);
    }
    if (message.tokenName !== "") {
      writer.uint32(18).string(message.tokenName);
    }
    if (message.tokenSymbol !== "") {
      writer.uint32(26).string(message.tokenSymbol);
    }
    if (message.tokenDecimal !== 0) {
      writer.uint32(32).int32(message.tokenDecimal);
    }
    if (message.tokenCreator !== "") {
      writer.uint32(42).string(message.tokenCreator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateTokenEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateTokenEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenDenom = reader.string();
          break;
        case 2:
          message.tokenName = reader.string();
          break;
        case 3:
          message.tokenSymbol = reader.string();
          break;
        case 4:
          message.tokenDecimal = reader.int32();
          break;
        case 5:
          message.tokenCreator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateTokenEvent {
    return {
      tokenDenom: isSet(object.tokenDenom) ? String(object.tokenDenom) : "",
      tokenName: isSet(object.tokenName) ? String(object.tokenName) : "",
      tokenSymbol: isSet(object.tokenSymbol) ? String(object.tokenSymbol) : "",
      tokenDecimal: isSet(object.tokenDecimal)
        ? Number(object.tokenDecimal)
        : 0,
      tokenCreator: isSet(object.tokenCreator)
        ? String(object.tokenCreator)
        : "",
    };
  },

  toJSON(message: CreateTokenEvent): unknown {
    const obj: any = {};
    message.tokenDenom !== undefined && (obj.tokenDenom = message.tokenDenom);
    message.tokenName !== undefined && (obj.tokenName = message.tokenName);
    message.tokenSymbol !== undefined &&
      (obj.tokenSymbol = message.tokenSymbol);
    message.tokenDecimal !== undefined &&
      (obj.tokenDecimal = Math.round(message.tokenDecimal));
    message.tokenCreator !== undefined &&
      (obj.tokenCreator = message.tokenCreator);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateTokenEvent>, I>>(
    object: I
  ): CreateTokenEvent {
    const message = createBaseCreateTokenEvent();
    message.tokenDenom = object.tokenDenom ?? "";
    message.tokenName = object.tokenName ?? "";
    message.tokenSymbol = object.tokenSymbol ?? "";
    message.tokenDecimal = object.tokenDecimal ?? 0;
    message.tokenCreator = object.tokenCreator ?? "";
    return message;
  },
};

function createBaseMintEvent(): MintEvent {
  return { denom: "", minter: "", value: "" };
}

export const MintEvent = {
  encode(
    message: MintEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.minter !== "") {
      writer.uint32(18).string(message.minter);
    }
    if (message.value !== "") {
      writer.uint32(26).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MintEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMintEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.minter = reader.string();
          break;
        case 3:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MintEvent {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      minter: isSet(object.minter) ? String(object.minter) : "",
      value: isSet(object.value) ? String(object.value) : "",
    };
  },

  toJSON(message: MintEvent): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.minter !== undefined && (obj.minter = message.minter);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MintEvent>, I>>(
    object: I
  ): MintEvent {
    const message = createBaseMintEvent();
    message.denom = object.denom ?? "";
    message.minter = object.minter ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseBurnEvent(): BurnEvent {
  return { denom: "", burner: "", value: "" };
}

export const BurnEvent = {
  encode(
    message: BurnEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.burner !== "") {
      writer.uint32(18).string(message.burner);
    }
    if (message.value !== "") {
      writer.uint32(26).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BurnEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBurnEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.burner = reader.string();
          break;
        case 3:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BurnEvent {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      burner: isSet(object.burner) ? String(object.burner) : "",
      value: isSet(object.value) ? String(object.value) : "",
    };
  },

  toJSON(message: BurnEvent): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.burner !== undefined && (obj.burner = message.burner);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BurnEvent>, I>>(
    object: I
  ): BurnEvent {
    const message = createBaseBurnEvent();
    message.denom = object.denom ?? "";
    message.burner = object.burner ?? "";
    message.value = object.value ?? "";
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
