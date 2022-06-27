/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "ethermint.feemarket.v1";

/** Params defines the EVM module parameters */
export interface Params {
  /** no base fee forces the EIP-1559 base fee to 0 (needed for 0 price calls) */
  noBaseFee: boolean;
  /**
   * base fee change denominator bounds the amount the base fee can change
   * between blocks.
   */
  baseFeeChangeDenominator: number;
  /**
   * elasticity multiplier bounds the maximum gas limit an EIP-1559 block may
   * have.
   */
  elasticityMultiplier: number;
  /** initial base fee for EIP-1559 blocks. */
  initialBaseFee: Long;
  /** height at which the base fee calculation is enabled. */
  enableHeight: Long;
}

function createBaseParams(): Params {
  return {
    noBaseFee: false,
    baseFeeChangeDenominator: 0,
    elasticityMultiplier: 0,
    initialBaseFee: Long.ZERO,
    enableHeight: Long.ZERO,
  };
}

export const Params = {
  encode(
    message: Params,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.noBaseFee === true) {
      writer.uint32(8).bool(message.noBaseFee);
    }
    if (message.baseFeeChangeDenominator !== 0) {
      writer.uint32(16).uint32(message.baseFeeChangeDenominator);
    }
    if (message.elasticityMultiplier !== 0) {
      writer.uint32(24).uint32(message.elasticityMultiplier);
    }
    if (!message.initialBaseFee.isZero()) {
      writer.uint32(32).int64(message.initialBaseFee);
    }
    if (!message.enableHeight.isZero()) {
      writer.uint32(40).int64(message.enableHeight);
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
          message.noBaseFee = reader.bool();
          break;
        case 2:
          message.baseFeeChangeDenominator = reader.uint32();
          break;
        case 3:
          message.elasticityMultiplier = reader.uint32();
          break;
        case 4:
          message.initialBaseFee = reader.int64() as Long;
          break;
        case 5:
          message.enableHeight = reader.int64() as Long;
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
      noBaseFee: isSet(object.noBaseFee) ? Boolean(object.noBaseFee) : false,
      baseFeeChangeDenominator: isSet(object.baseFeeChangeDenominator)
        ? Number(object.baseFeeChangeDenominator)
        : 0,
      elasticityMultiplier: isSet(object.elasticityMultiplier)
        ? Number(object.elasticityMultiplier)
        : 0,
      initialBaseFee: isSet(object.initialBaseFee)
        ? Long.fromValue(object.initialBaseFee)
        : Long.ZERO,
      enableHeight: isSet(object.enableHeight)
        ? Long.fromValue(object.enableHeight)
        : Long.ZERO,
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.noBaseFee !== undefined && (obj.noBaseFee = message.noBaseFee);
    message.baseFeeChangeDenominator !== undefined &&
      (obj.baseFeeChangeDenominator = Math.round(
        message.baseFeeChangeDenominator
      ));
    message.elasticityMultiplier !== undefined &&
      (obj.elasticityMultiplier = Math.round(message.elasticityMultiplier));
    message.initialBaseFee !== undefined &&
      (obj.initialBaseFee = (message.initialBaseFee || Long.ZERO).toString());
    message.enableHeight !== undefined &&
      (obj.enableHeight = (message.enableHeight || Long.ZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.noBaseFee = object.noBaseFee ?? false;
    message.baseFeeChangeDenominator = object.baseFeeChangeDenominator ?? 0;
    message.elasticityMultiplier = object.elasticityMultiplier ?? 0;
    message.initialBaseFee =
      object.initialBaseFee !== undefined && object.initialBaseFee !== null
        ? Long.fromValue(object.initialBaseFee)
        : Long.ZERO;
    message.enableHeight =
      object.enableHeight !== undefined && object.enableHeight !== null
        ? Long.fromValue(object.enableHeight)
        : Long.ZERO;
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
