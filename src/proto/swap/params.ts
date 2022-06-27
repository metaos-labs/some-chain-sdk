/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "sophonlabs.sophon.swap";

/** Params defines the parameters for the module. */
export interface Params {
  /** the protocol fee for all pools in hundredths of a bip, i.e. 1e-6 */
  feeProtocol: number;
  /** the super operator */
  superOperator: string;
  /** the gov burn denom */
  govBurnDenom: string;
}

/** EnableFeeProposal defines the proposal to enable the fee amount. */
export interface EnableFeeProposal {
  /** the title of the enable fee proposal */
  title: string;
  /** the description of the enable fee proposal */
  description: string;
  /** the fee amount in hundredths of a bip, i.e. 1e-6 */
  fee: number;
  /** the minimum number of ticks between initialized ticks */
  tickSpacing: number;
}

function createBaseParams(): Params {
  return { feeProtocol: 0, superOperator: "", govBurnDenom: "" };
}

export const Params = {
  encode(
    message: Params,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.feeProtocol !== 0) {
      writer.uint32(8).int32(message.feeProtocol);
    }
    if (message.superOperator !== "") {
      writer.uint32(18).string(message.superOperator);
    }
    if (message.govBurnDenom !== "") {
      writer.uint32(26).string(message.govBurnDenom);
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
          message.feeProtocol = reader.int32();
          break;
        case 2:
          message.superOperator = reader.string();
          break;
        case 3:
          message.govBurnDenom = reader.string();
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
      feeProtocol: isSet(object.feeProtocol) ? Number(object.feeProtocol) : 0,
      superOperator: isSet(object.superOperator)
        ? String(object.superOperator)
        : "",
      govBurnDenom: isSet(object.govBurnDenom)
        ? String(object.govBurnDenom)
        : "",
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.feeProtocol !== undefined &&
      (obj.feeProtocol = Math.round(message.feeProtocol));
    message.superOperator !== undefined &&
      (obj.superOperator = message.superOperator);
    message.govBurnDenom !== undefined &&
      (obj.govBurnDenom = message.govBurnDenom);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.feeProtocol = object.feeProtocol ?? 0;
    message.superOperator = object.superOperator ?? "";
    message.govBurnDenom = object.govBurnDenom ?? "";
    return message;
  },
};

function createBaseEnableFeeProposal(): EnableFeeProposal {
  return { title: "", description: "", fee: 0, tickSpacing: 0 };
}

export const EnableFeeProposal = {
  encode(
    message: EnableFeeProposal,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.fee !== 0) {
      writer.uint32(24).int32(message.fee);
    }
    if (message.tickSpacing !== 0) {
      writer.uint32(32).int32(message.tickSpacing);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EnableFeeProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEnableFeeProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.fee = reader.int32();
          break;
        case 4:
          message.tickSpacing = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EnableFeeProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      fee: isSet(object.fee) ? Number(object.fee) : 0,
      tickSpacing: isSet(object.tickSpacing) ? Number(object.tickSpacing) : 0,
    };
  },

  toJSON(message: EnableFeeProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    message.fee !== undefined && (obj.fee = Math.round(message.fee));
    message.tickSpacing !== undefined &&
      (obj.tickSpacing = Math.round(message.tickSpacing));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EnableFeeProposal>, I>>(
    object: I
  ): EnableFeeProposal {
    const message = createBaseEnableFeeProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.fee = object.fee ?? 0;
    message.tickSpacing = object.tickSpacing ?? 0;
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
