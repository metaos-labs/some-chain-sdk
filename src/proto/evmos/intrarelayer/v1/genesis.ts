/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Duration } from "../../../google/protobuf/duration";
import { TokenPair } from "./intrarelayer";

export const protobufPackage = "evmos.intrarelayer.v1";

/** GenesisState defines the module's genesis state. */
export interface GenesisState {
  /** module parameters */
  params?: Params;
  /** registered token pairs */
  tokenPairs: TokenPair[];
}

/** Params defines the intrarelayer module params */
export interface Params {
  /** parameter to enable the intrarelaying of Cosmos coins <--> ERC20 tokens. */
  enableIntrarelayer: boolean;
  /** overrides the governance voting period for token pairs proposals */
  tokenPairVotingPeriod?: Duration;
  /**
   * parameter to enable the EVM hook to convert an ERC20 token to a Cosmos
   * Coin by transferring the Tokens through a MsgEthereumTx to the
   * ModuleAddress Ethereum address.
   */
  enableEvmHook: boolean;
}

function createBaseGenesisState(): GenesisState {
  return { params: undefined, tokenPairs: [] };
}

export const GenesisState = {
  encode(
    message: GenesisState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.tokenPairs) {
      TokenPair.encode(v!, writer.uint32(18).fork()).ldelim();
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
          message.tokenPairs.push(TokenPair.decode(reader, reader.uint32()));
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
      tokenPairs: Array.isArray(object?.tokenPairs)
        ? object.tokenPairs.map((e: any) => TokenPair.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.tokenPairs) {
      obj.tokenPairs = message.tokenPairs.map((e) =>
        e ? TokenPair.toJSON(e) : undefined
      );
    } else {
      obj.tokenPairs = [];
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
    message.tokenPairs =
      object.tokenPairs?.map((e) => TokenPair.fromPartial(e)) || [];
    return message;
  },
};

function createBaseParams(): Params {
  return {
    enableIntrarelayer: false,
    tokenPairVotingPeriod: undefined,
    enableEvmHook: false,
  };
}

export const Params = {
  encode(
    message: Params,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.enableIntrarelayer === true) {
      writer.uint32(8).bool(message.enableIntrarelayer);
    }
    if (message.tokenPairVotingPeriod !== undefined) {
      Duration.encode(
        message.tokenPairVotingPeriod,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.enableEvmHook === true) {
      writer.uint32(24).bool(message.enableEvmHook);
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
          message.enableIntrarelayer = reader.bool();
          break;
        case 2:
          message.tokenPairVotingPeriod = Duration.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.enableEvmHook = reader.bool();
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
      enableIntrarelayer: isSet(object.enableIntrarelayer)
        ? Boolean(object.enableIntrarelayer)
        : false,
      tokenPairVotingPeriod: isSet(object.tokenPairVotingPeriod)
        ? Duration.fromJSON(object.tokenPairVotingPeriod)
        : undefined,
      enableEvmHook: isSet(object.enableEvmHook)
        ? Boolean(object.enableEvmHook)
        : false,
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.enableIntrarelayer !== undefined &&
      (obj.enableIntrarelayer = message.enableIntrarelayer);
    message.tokenPairVotingPeriod !== undefined &&
      (obj.tokenPairVotingPeriod = message.tokenPairVotingPeriod
        ? Duration.toJSON(message.tokenPairVotingPeriod)
        : undefined);
    message.enableEvmHook !== undefined &&
      (obj.enableEvmHook = message.enableEvmHook);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.enableIntrarelayer = object.enableIntrarelayer ?? false;
    message.tokenPairVotingPeriod =
      object.tokenPairVotingPeriod !== undefined &&
      object.tokenPairVotingPeriod !== null
        ? Duration.fromPartial(object.tokenPairVotingPeriod)
        : undefined;
    message.enableEvmHook = object.enableEvmHook ?? false;
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
