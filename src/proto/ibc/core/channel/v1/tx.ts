/* eslint-disable */
import Long from "long";
import { grpc } from "@improbable-eng/grpc-web";
import * as _m0 from "protobufjs/minimal";
import { Channel, Packet } from "./channel";
import { Height } from "../../client/v1/client";
import { BrowserHeaders } from "browser-headers";

export const protobufPackage = "ibc.core.channel.v1";

/**
 * MsgChannelOpenInit defines an sdk.Msg to initialize a channel handshake. It
 * is called by a relayer on Chain A.
 */
export interface MsgChannelOpenInit {
  portId: string;
  channel?: Channel;
  signer: string;
}

/** MsgChannelOpenInitResponse defines the Msg/ChannelOpenInit response type. */
export interface MsgChannelOpenInitResponse {
  channelId: string;
}

/**
 * MsgChannelOpenInit defines a msg sent by a Relayer to try to open a channel
 * on Chain B. The version field within the Channel field has been deprecated. Its
 * value will be ignored by core IBC.
 */
export interface MsgChannelOpenTry {
  portId: string;
  /**
   * in the case of crossing hello's, when both chains call OpenInit, we need
   * the channel identifier of the previous channel in state INIT
   */
  previousChannelId: string;
  /** NOTE: the version field within the channel has been deprecated. Its value will be ignored by core IBC. */
  channel?: Channel;
  counterpartyVersion: string;
  proofInit: Uint8Array;
  proofHeight?: Height;
  signer: string;
}

/** MsgChannelOpenTryResponse defines the Msg/ChannelOpenTry response type. */
export interface MsgChannelOpenTryResponse {}

/**
 * MsgChannelOpenAck defines a msg sent by a Relayer to Chain A to acknowledge
 * the change of channel state to TRYOPEN on Chain B.
 */
export interface MsgChannelOpenAck {
  portId: string;
  channelId: string;
  counterpartyChannelId: string;
  counterpartyVersion: string;
  proofTry: Uint8Array;
  proofHeight?: Height;
  signer: string;
}

/** MsgChannelOpenAckResponse defines the Msg/ChannelOpenAck response type. */
export interface MsgChannelOpenAckResponse {}

/**
 * MsgChannelOpenConfirm defines a msg sent by a Relayer to Chain B to
 * acknowledge the change of channel state to OPEN on Chain A.
 */
export interface MsgChannelOpenConfirm {
  portId: string;
  channelId: string;
  proofAck: Uint8Array;
  proofHeight?: Height;
  signer: string;
}

/**
 * MsgChannelOpenConfirmResponse defines the Msg/ChannelOpenConfirm response
 * type.
 */
export interface MsgChannelOpenConfirmResponse {}

/**
 * MsgChannelCloseInit defines a msg sent by a Relayer to Chain A
 * to close a channel with Chain B.
 */
export interface MsgChannelCloseInit {
  portId: string;
  channelId: string;
  signer: string;
}

/** MsgChannelCloseInitResponse defines the Msg/ChannelCloseInit response type. */
export interface MsgChannelCloseInitResponse {}

/**
 * MsgChannelCloseConfirm defines a msg sent by a Relayer to Chain B
 * to acknowledge the change of channel state to CLOSED on Chain A.
 */
export interface MsgChannelCloseConfirm {
  portId: string;
  channelId: string;
  proofInit: Uint8Array;
  proofHeight?: Height;
  signer: string;
}

/**
 * MsgChannelCloseConfirmResponse defines the Msg/ChannelCloseConfirm response
 * type.
 */
export interface MsgChannelCloseConfirmResponse {}

/** MsgRecvPacket receives incoming IBC packet */
export interface MsgRecvPacket {
  packet?: Packet;
  proofCommitment: Uint8Array;
  proofHeight?: Height;
  signer: string;
}

/** MsgRecvPacketResponse defines the Msg/RecvPacket response type. */
export interface MsgRecvPacketResponse {}

/** MsgTimeout receives timed-out packet */
export interface MsgTimeout {
  packet?: Packet;
  proofUnreceived: Uint8Array;
  proofHeight?: Height;
  nextSequenceRecv: Long;
  signer: string;
}

/** MsgTimeoutResponse defines the Msg/Timeout response type. */
export interface MsgTimeoutResponse {}

/** MsgTimeoutOnClose timed-out packet upon counterparty channel closure. */
export interface MsgTimeoutOnClose {
  packet?: Packet;
  proofUnreceived: Uint8Array;
  proofClose: Uint8Array;
  proofHeight?: Height;
  nextSequenceRecv: Long;
  signer: string;
}

/** MsgTimeoutOnCloseResponse defines the Msg/TimeoutOnClose response type. */
export interface MsgTimeoutOnCloseResponse {}

/** MsgAcknowledgement receives incoming IBC acknowledgement */
export interface MsgAcknowledgement {
  packet?: Packet;
  acknowledgement: Uint8Array;
  proofAcked: Uint8Array;
  proofHeight?: Height;
  signer: string;
}

/** MsgAcknowledgementResponse defines the Msg/Acknowledgement response type. */
export interface MsgAcknowledgementResponse {}

function createBaseMsgChannelOpenInit(): MsgChannelOpenInit {
  return { portId: "", channel: undefined, signer: "" };
}

export const MsgChannelOpenInit = {
  encode(
    message: MsgChannelOpenInit,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channel !== undefined) {
      Channel.encode(message.channel, writer.uint32(18).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(26).string(message.signer);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelOpenInit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelOpenInit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;
        case 2:
          message.channel = Channel.decode(reader, reader.uint32());
          break;
        case 3:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgChannelOpenInit {
    return {
      portId: isSet(object.portId) ? String(object.portId) : "",
      channel: isSet(object.channel)
        ? Channel.fromJSON(object.channel)
        : undefined,
      signer: isSet(object.signer) ? String(object.signer) : "",
    };
  },

  toJSON(message: MsgChannelOpenInit): unknown {
    const obj: any = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.channel !== undefined &&
      (obj.channel = message.channel
        ? Channel.toJSON(message.channel)
        : undefined);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgChannelOpenInit>, I>>(
    object: I
  ): MsgChannelOpenInit {
    const message = createBaseMsgChannelOpenInit();
    message.portId = object.portId ?? "";
    message.channel =
      object.channel !== undefined && object.channel !== null
        ? Channel.fromPartial(object.channel)
        : undefined;
    message.signer = object.signer ?? "";
    return message;
  },
};

function createBaseMsgChannelOpenInitResponse(): MsgChannelOpenInitResponse {
  return { channelId: "" };
}

export const MsgChannelOpenInitResponse = {
  encode(
    message: MsgChannelOpenInitResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.channelId !== "") {
      writer.uint32(10).string(message.channelId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgChannelOpenInitResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelOpenInitResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channelId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgChannelOpenInitResponse {
    return {
      channelId: isSet(object.channelId) ? String(object.channelId) : "",
    };
  },

  toJSON(message: MsgChannelOpenInitResponse): unknown {
    const obj: any = {};
    message.channelId !== undefined && (obj.channelId = message.channelId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgChannelOpenInitResponse>, I>>(
    object: I
  ): MsgChannelOpenInitResponse {
    const message = createBaseMsgChannelOpenInitResponse();
    message.channelId = object.channelId ?? "";
    return message;
  },
};

function createBaseMsgChannelOpenTry(): MsgChannelOpenTry {
  return {
    portId: "",
    previousChannelId: "",
    channel: undefined,
    counterpartyVersion: "",
    proofInit: new Uint8Array(),
    proofHeight: undefined,
    signer: "",
  };
}

export const MsgChannelOpenTry = {
  encode(
    message: MsgChannelOpenTry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.previousChannelId !== "") {
      writer.uint32(18).string(message.previousChannelId);
    }
    if (message.channel !== undefined) {
      Channel.encode(message.channel, writer.uint32(26).fork()).ldelim();
    }
    if (message.counterpartyVersion !== "") {
      writer.uint32(34).string(message.counterpartyVersion);
    }
    if (message.proofInit.length !== 0) {
      writer.uint32(42).bytes(message.proofInit);
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(50).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(58).string(message.signer);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelOpenTry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelOpenTry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;
        case 2:
          message.previousChannelId = reader.string();
          break;
        case 3:
          message.channel = Channel.decode(reader, reader.uint32());
          break;
        case 4:
          message.counterpartyVersion = reader.string();
          break;
        case 5:
          message.proofInit = reader.bytes();
          break;
        case 6:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        case 7:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgChannelOpenTry {
    return {
      portId: isSet(object.portId) ? String(object.portId) : "",
      previousChannelId: isSet(object.previousChannelId)
        ? String(object.previousChannelId)
        : "",
      channel: isSet(object.channel)
        ? Channel.fromJSON(object.channel)
        : undefined,
      counterpartyVersion: isSet(object.counterpartyVersion)
        ? String(object.counterpartyVersion)
        : "",
      proofInit: isSet(object.proofInit)
        ? bytesFromBase64(object.proofInit)
        : new Uint8Array(),
      proofHeight: isSet(object.proofHeight)
        ? Height.fromJSON(object.proofHeight)
        : undefined,
      signer: isSet(object.signer) ? String(object.signer) : "",
    };
  },

  toJSON(message: MsgChannelOpenTry): unknown {
    const obj: any = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.previousChannelId !== undefined &&
      (obj.previousChannelId = message.previousChannelId);
    message.channel !== undefined &&
      (obj.channel = message.channel
        ? Channel.toJSON(message.channel)
        : undefined);
    message.counterpartyVersion !== undefined &&
      (obj.counterpartyVersion = message.counterpartyVersion);
    message.proofInit !== undefined &&
      (obj.proofInit = base64FromBytes(
        message.proofInit !== undefined ? message.proofInit : new Uint8Array()
      ));
    message.proofHeight !== undefined &&
      (obj.proofHeight = message.proofHeight
        ? Height.toJSON(message.proofHeight)
        : undefined);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgChannelOpenTry>, I>>(
    object: I
  ): MsgChannelOpenTry {
    const message = createBaseMsgChannelOpenTry();
    message.portId = object.portId ?? "";
    message.previousChannelId = object.previousChannelId ?? "";
    message.channel =
      object.channel !== undefined && object.channel !== null
        ? Channel.fromPartial(object.channel)
        : undefined;
    message.counterpartyVersion = object.counterpartyVersion ?? "";
    message.proofInit = object.proofInit ?? new Uint8Array();
    message.proofHeight =
      object.proofHeight !== undefined && object.proofHeight !== null
        ? Height.fromPartial(object.proofHeight)
        : undefined;
    message.signer = object.signer ?? "";
    return message;
  },
};

function createBaseMsgChannelOpenTryResponse(): MsgChannelOpenTryResponse {
  return {};
}

export const MsgChannelOpenTryResponse = {
  encode(
    _: MsgChannelOpenTryResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgChannelOpenTryResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelOpenTryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgChannelOpenTryResponse {
    return {};
  },

  toJSON(_: MsgChannelOpenTryResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgChannelOpenTryResponse>, I>>(
    _: I
  ): MsgChannelOpenTryResponse {
    const message = createBaseMsgChannelOpenTryResponse();
    return message;
  },
};

function createBaseMsgChannelOpenAck(): MsgChannelOpenAck {
  return {
    portId: "",
    channelId: "",
    counterpartyChannelId: "",
    counterpartyVersion: "",
    proofTry: new Uint8Array(),
    proofHeight: undefined,
    signer: "",
  };
}

export const MsgChannelOpenAck = {
  encode(
    message: MsgChannelOpenAck,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    if (message.counterpartyChannelId !== "") {
      writer.uint32(26).string(message.counterpartyChannelId);
    }
    if (message.counterpartyVersion !== "") {
      writer.uint32(34).string(message.counterpartyVersion);
    }
    if (message.proofTry.length !== 0) {
      writer.uint32(42).bytes(message.proofTry);
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(50).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(58).string(message.signer);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelOpenAck {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelOpenAck();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;
        case 2:
          message.channelId = reader.string();
          break;
        case 3:
          message.counterpartyChannelId = reader.string();
          break;
        case 4:
          message.counterpartyVersion = reader.string();
          break;
        case 5:
          message.proofTry = reader.bytes();
          break;
        case 6:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        case 7:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgChannelOpenAck {
    return {
      portId: isSet(object.portId) ? String(object.portId) : "",
      channelId: isSet(object.channelId) ? String(object.channelId) : "",
      counterpartyChannelId: isSet(object.counterpartyChannelId)
        ? String(object.counterpartyChannelId)
        : "",
      counterpartyVersion: isSet(object.counterpartyVersion)
        ? String(object.counterpartyVersion)
        : "",
      proofTry: isSet(object.proofTry)
        ? bytesFromBase64(object.proofTry)
        : new Uint8Array(),
      proofHeight: isSet(object.proofHeight)
        ? Height.fromJSON(object.proofHeight)
        : undefined,
      signer: isSet(object.signer) ? String(object.signer) : "",
    };
  },

  toJSON(message: MsgChannelOpenAck): unknown {
    const obj: any = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.counterpartyChannelId !== undefined &&
      (obj.counterpartyChannelId = message.counterpartyChannelId);
    message.counterpartyVersion !== undefined &&
      (obj.counterpartyVersion = message.counterpartyVersion);
    message.proofTry !== undefined &&
      (obj.proofTry = base64FromBytes(
        message.proofTry !== undefined ? message.proofTry : new Uint8Array()
      ));
    message.proofHeight !== undefined &&
      (obj.proofHeight = message.proofHeight
        ? Height.toJSON(message.proofHeight)
        : undefined);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgChannelOpenAck>, I>>(
    object: I
  ): MsgChannelOpenAck {
    const message = createBaseMsgChannelOpenAck();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.counterpartyChannelId = object.counterpartyChannelId ?? "";
    message.counterpartyVersion = object.counterpartyVersion ?? "";
    message.proofTry = object.proofTry ?? new Uint8Array();
    message.proofHeight =
      object.proofHeight !== undefined && object.proofHeight !== null
        ? Height.fromPartial(object.proofHeight)
        : undefined;
    message.signer = object.signer ?? "";
    return message;
  },
};

function createBaseMsgChannelOpenAckResponse(): MsgChannelOpenAckResponse {
  return {};
}

export const MsgChannelOpenAckResponse = {
  encode(
    _: MsgChannelOpenAckResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgChannelOpenAckResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelOpenAckResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgChannelOpenAckResponse {
    return {};
  },

  toJSON(_: MsgChannelOpenAckResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgChannelOpenAckResponse>, I>>(
    _: I
  ): MsgChannelOpenAckResponse {
    const message = createBaseMsgChannelOpenAckResponse();
    return message;
  },
};

function createBaseMsgChannelOpenConfirm(): MsgChannelOpenConfirm {
  return {
    portId: "",
    channelId: "",
    proofAck: new Uint8Array(),
    proofHeight: undefined,
    signer: "",
  };
}

export const MsgChannelOpenConfirm = {
  encode(
    message: MsgChannelOpenConfirm,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    if (message.proofAck.length !== 0) {
      writer.uint32(26).bytes(message.proofAck);
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(34).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(42).string(message.signer);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgChannelOpenConfirm {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelOpenConfirm();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;
        case 2:
          message.channelId = reader.string();
          break;
        case 3:
          message.proofAck = reader.bytes();
          break;
        case 4:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        case 5:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgChannelOpenConfirm {
    return {
      portId: isSet(object.portId) ? String(object.portId) : "",
      channelId: isSet(object.channelId) ? String(object.channelId) : "",
      proofAck: isSet(object.proofAck)
        ? bytesFromBase64(object.proofAck)
        : new Uint8Array(),
      proofHeight: isSet(object.proofHeight)
        ? Height.fromJSON(object.proofHeight)
        : undefined,
      signer: isSet(object.signer) ? String(object.signer) : "",
    };
  },

  toJSON(message: MsgChannelOpenConfirm): unknown {
    const obj: any = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.proofAck !== undefined &&
      (obj.proofAck = base64FromBytes(
        message.proofAck !== undefined ? message.proofAck : new Uint8Array()
      ));
    message.proofHeight !== undefined &&
      (obj.proofHeight = message.proofHeight
        ? Height.toJSON(message.proofHeight)
        : undefined);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgChannelOpenConfirm>, I>>(
    object: I
  ): MsgChannelOpenConfirm {
    const message = createBaseMsgChannelOpenConfirm();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.proofAck = object.proofAck ?? new Uint8Array();
    message.proofHeight =
      object.proofHeight !== undefined && object.proofHeight !== null
        ? Height.fromPartial(object.proofHeight)
        : undefined;
    message.signer = object.signer ?? "";
    return message;
  },
};

function createBaseMsgChannelOpenConfirmResponse(): MsgChannelOpenConfirmResponse {
  return {};
}

export const MsgChannelOpenConfirmResponse = {
  encode(
    _: MsgChannelOpenConfirmResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgChannelOpenConfirmResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelOpenConfirmResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgChannelOpenConfirmResponse {
    return {};
  },

  toJSON(_: MsgChannelOpenConfirmResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgChannelOpenConfirmResponse>, I>>(
    _: I
  ): MsgChannelOpenConfirmResponse {
    const message = createBaseMsgChannelOpenConfirmResponse();
    return message;
  },
};

function createBaseMsgChannelCloseInit(): MsgChannelCloseInit {
  return { portId: "", channelId: "", signer: "" };
}

export const MsgChannelCloseInit = {
  encode(
    message: MsgChannelCloseInit,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    if (message.signer !== "") {
      writer.uint32(26).string(message.signer);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelCloseInit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelCloseInit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;
        case 2:
          message.channelId = reader.string();
          break;
        case 3:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgChannelCloseInit {
    return {
      portId: isSet(object.portId) ? String(object.portId) : "",
      channelId: isSet(object.channelId) ? String(object.channelId) : "",
      signer: isSet(object.signer) ? String(object.signer) : "",
    };
  },

  toJSON(message: MsgChannelCloseInit): unknown {
    const obj: any = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgChannelCloseInit>, I>>(
    object: I
  ): MsgChannelCloseInit {
    const message = createBaseMsgChannelCloseInit();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.signer = object.signer ?? "";
    return message;
  },
};

function createBaseMsgChannelCloseInitResponse(): MsgChannelCloseInitResponse {
  return {};
}

export const MsgChannelCloseInitResponse = {
  encode(
    _: MsgChannelCloseInitResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgChannelCloseInitResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelCloseInitResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgChannelCloseInitResponse {
    return {};
  },

  toJSON(_: MsgChannelCloseInitResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgChannelCloseInitResponse>, I>>(
    _: I
  ): MsgChannelCloseInitResponse {
    const message = createBaseMsgChannelCloseInitResponse();
    return message;
  },
};

function createBaseMsgChannelCloseConfirm(): MsgChannelCloseConfirm {
  return {
    portId: "",
    channelId: "",
    proofInit: new Uint8Array(),
    proofHeight: undefined,
    signer: "",
  };
}

export const MsgChannelCloseConfirm = {
  encode(
    message: MsgChannelCloseConfirm,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    if (message.proofInit.length !== 0) {
      writer.uint32(26).bytes(message.proofInit);
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(34).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(42).string(message.signer);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgChannelCloseConfirm {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelCloseConfirm();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;
        case 2:
          message.channelId = reader.string();
          break;
        case 3:
          message.proofInit = reader.bytes();
          break;
        case 4:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        case 5:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgChannelCloseConfirm {
    return {
      portId: isSet(object.portId) ? String(object.portId) : "",
      channelId: isSet(object.channelId) ? String(object.channelId) : "",
      proofInit: isSet(object.proofInit)
        ? bytesFromBase64(object.proofInit)
        : new Uint8Array(),
      proofHeight: isSet(object.proofHeight)
        ? Height.fromJSON(object.proofHeight)
        : undefined,
      signer: isSet(object.signer) ? String(object.signer) : "",
    };
  },

  toJSON(message: MsgChannelCloseConfirm): unknown {
    const obj: any = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.proofInit !== undefined &&
      (obj.proofInit = base64FromBytes(
        message.proofInit !== undefined ? message.proofInit : new Uint8Array()
      ));
    message.proofHeight !== undefined &&
      (obj.proofHeight = message.proofHeight
        ? Height.toJSON(message.proofHeight)
        : undefined);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgChannelCloseConfirm>, I>>(
    object: I
  ): MsgChannelCloseConfirm {
    const message = createBaseMsgChannelCloseConfirm();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.proofInit = object.proofInit ?? new Uint8Array();
    message.proofHeight =
      object.proofHeight !== undefined && object.proofHeight !== null
        ? Height.fromPartial(object.proofHeight)
        : undefined;
    message.signer = object.signer ?? "";
    return message;
  },
};

function createBaseMsgChannelCloseConfirmResponse(): MsgChannelCloseConfirmResponse {
  return {};
}

export const MsgChannelCloseConfirmResponse = {
  encode(
    _: MsgChannelCloseConfirmResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgChannelCloseConfirmResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelCloseConfirmResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgChannelCloseConfirmResponse {
    return {};
  },

  toJSON(_: MsgChannelCloseConfirmResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgChannelCloseConfirmResponse>, I>>(
    _: I
  ): MsgChannelCloseConfirmResponse {
    const message = createBaseMsgChannelCloseConfirmResponse();
    return message;
  },
};

function createBaseMsgRecvPacket(): MsgRecvPacket {
  return {
    packet: undefined,
    proofCommitment: new Uint8Array(),
    proofHeight: undefined,
    signer: "",
  };
}

export const MsgRecvPacket = {
  encode(
    message: MsgRecvPacket,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.packet !== undefined) {
      Packet.encode(message.packet, writer.uint32(10).fork()).ldelim();
    }
    if (message.proofCommitment.length !== 0) {
      writer.uint32(18).bytes(message.proofCommitment);
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(34).string(message.signer);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRecvPacket {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRecvPacket();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packet = Packet.decode(reader, reader.uint32());
          break;
        case 2:
          message.proofCommitment = reader.bytes();
          break;
        case 3:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        case 4:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRecvPacket {
    return {
      packet: isSet(object.packet) ? Packet.fromJSON(object.packet) : undefined,
      proofCommitment: isSet(object.proofCommitment)
        ? bytesFromBase64(object.proofCommitment)
        : new Uint8Array(),
      proofHeight: isSet(object.proofHeight)
        ? Height.fromJSON(object.proofHeight)
        : undefined,
      signer: isSet(object.signer) ? String(object.signer) : "",
    };
  },

  toJSON(message: MsgRecvPacket): unknown {
    const obj: any = {};
    message.packet !== undefined &&
      (obj.packet = message.packet ? Packet.toJSON(message.packet) : undefined);
    message.proofCommitment !== undefined &&
      (obj.proofCommitment = base64FromBytes(
        message.proofCommitment !== undefined
          ? message.proofCommitment
          : new Uint8Array()
      ));
    message.proofHeight !== undefined &&
      (obj.proofHeight = message.proofHeight
        ? Height.toJSON(message.proofHeight)
        : undefined);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRecvPacket>, I>>(
    object: I
  ): MsgRecvPacket {
    const message = createBaseMsgRecvPacket();
    message.packet =
      object.packet !== undefined && object.packet !== null
        ? Packet.fromPartial(object.packet)
        : undefined;
    message.proofCommitment = object.proofCommitment ?? new Uint8Array();
    message.proofHeight =
      object.proofHeight !== undefined && object.proofHeight !== null
        ? Height.fromPartial(object.proofHeight)
        : undefined;
    message.signer = object.signer ?? "";
    return message;
  },
};

function createBaseMsgRecvPacketResponse(): MsgRecvPacketResponse {
  return {};
}

export const MsgRecvPacketResponse = {
  encode(
    _: MsgRecvPacketResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgRecvPacketResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRecvPacketResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgRecvPacketResponse {
    return {};
  },

  toJSON(_: MsgRecvPacketResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRecvPacketResponse>, I>>(
    _: I
  ): MsgRecvPacketResponse {
    const message = createBaseMsgRecvPacketResponse();
    return message;
  },
};

function createBaseMsgTimeout(): MsgTimeout {
  return {
    packet: undefined,
    proofUnreceived: new Uint8Array(),
    proofHeight: undefined,
    nextSequenceRecv: Long.UZERO,
    signer: "",
  };
}

export const MsgTimeout = {
  encode(
    message: MsgTimeout,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.packet !== undefined) {
      Packet.encode(message.packet, writer.uint32(10).fork()).ldelim();
    }
    if (message.proofUnreceived.length !== 0) {
      writer.uint32(18).bytes(message.proofUnreceived);
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
    }
    if (!message.nextSequenceRecv.isZero()) {
      writer.uint32(32).uint64(message.nextSequenceRecv);
    }
    if (message.signer !== "") {
      writer.uint32(42).string(message.signer);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTimeout {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTimeout();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packet = Packet.decode(reader, reader.uint32());
          break;
        case 2:
          message.proofUnreceived = reader.bytes();
          break;
        case 3:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        case 4:
          message.nextSequenceRecv = reader.uint64() as Long;
          break;
        case 5:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgTimeout {
    return {
      packet: isSet(object.packet) ? Packet.fromJSON(object.packet) : undefined,
      proofUnreceived: isSet(object.proofUnreceived)
        ? bytesFromBase64(object.proofUnreceived)
        : new Uint8Array(),
      proofHeight: isSet(object.proofHeight)
        ? Height.fromJSON(object.proofHeight)
        : undefined,
      nextSequenceRecv: isSet(object.nextSequenceRecv)
        ? Long.fromValue(object.nextSequenceRecv)
        : Long.UZERO,
      signer: isSet(object.signer) ? String(object.signer) : "",
    };
  },

  toJSON(message: MsgTimeout): unknown {
    const obj: any = {};
    message.packet !== undefined &&
      (obj.packet = message.packet ? Packet.toJSON(message.packet) : undefined);
    message.proofUnreceived !== undefined &&
      (obj.proofUnreceived = base64FromBytes(
        message.proofUnreceived !== undefined
          ? message.proofUnreceived
          : new Uint8Array()
      ));
    message.proofHeight !== undefined &&
      (obj.proofHeight = message.proofHeight
        ? Height.toJSON(message.proofHeight)
        : undefined);
    message.nextSequenceRecv !== undefined &&
      (obj.nextSequenceRecv = (
        message.nextSequenceRecv || Long.UZERO
      ).toString());
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgTimeout>, I>>(
    object: I
  ): MsgTimeout {
    const message = createBaseMsgTimeout();
    message.packet =
      object.packet !== undefined && object.packet !== null
        ? Packet.fromPartial(object.packet)
        : undefined;
    message.proofUnreceived = object.proofUnreceived ?? new Uint8Array();
    message.proofHeight =
      object.proofHeight !== undefined && object.proofHeight !== null
        ? Height.fromPartial(object.proofHeight)
        : undefined;
    message.nextSequenceRecv =
      object.nextSequenceRecv !== undefined && object.nextSequenceRecv !== null
        ? Long.fromValue(object.nextSequenceRecv)
        : Long.UZERO;
    message.signer = object.signer ?? "";
    return message;
  },
};

function createBaseMsgTimeoutResponse(): MsgTimeoutResponse {
  return {};
}

export const MsgTimeoutResponse = {
  encode(
    _: MsgTimeoutResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTimeoutResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTimeoutResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgTimeoutResponse {
    return {};
  },

  toJSON(_: MsgTimeoutResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgTimeoutResponse>, I>>(
    _: I
  ): MsgTimeoutResponse {
    const message = createBaseMsgTimeoutResponse();
    return message;
  },
};

function createBaseMsgTimeoutOnClose(): MsgTimeoutOnClose {
  return {
    packet: undefined,
    proofUnreceived: new Uint8Array(),
    proofClose: new Uint8Array(),
    proofHeight: undefined,
    nextSequenceRecv: Long.UZERO,
    signer: "",
  };
}

export const MsgTimeoutOnClose = {
  encode(
    message: MsgTimeoutOnClose,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.packet !== undefined) {
      Packet.encode(message.packet, writer.uint32(10).fork()).ldelim();
    }
    if (message.proofUnreceived.length !== 0) {
      writer.uint32(18).bytes(message.proofUnreceived);
    }
    if (message.proofClose.length !== 0) {
      writer.uint32(26).bytes(message.proofClose);
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(34).fork()).ldelim();
    }
    if (!message.nextSequenceRecv.isZero()) {
      writer.uint32(40).uint64(message.nextSequenceRecv);
    }
    if (message.signer !== "") {
      writer.uint32(50).string(message.signer);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTimeoutOnClose {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTimeoutOnClose();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packet = Packet.decode(reader, reader.uint32());
          break;
        case 2:
          message.proofUnreceived = reader.bytes();
          break;
        case 3:
          message.proofClose = reader.bytes();
          break;
        case 4:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        case 5:
          message.nextSequenceRecv = reader.uint64() as Long;
          break;
        case 6:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgTimeoutOnClose {
    return {
      packet: isSet(object.packet) ? Packet.fromJSON(object.packet) : undefined,
      proofUnreceived: isSet(object.proofUnreceived)
        ? bytesFromBase64(object.proofUnreceived)
        : new Uint8Array(),
      proofClose: isSet(object.proofClose)
        ? bytesFromBase64(object.proofClose)
        : new Uint8Array(),
      proofHeight: isSet(object.proofHeight)
        ? Height.fromJSON(object.proofHeight)
        : undefined,
      nextSequenceRecv: isSet(object.nextSequenceRecv)
        ? Long.fromValue(object.nextSequenceRecv)
        : Long.UZERO,
      signer: isSet(object.signer) ? String(object.signer) : "",
    };
  },

  toJSON(message: MsgTimeoutOnClose): unknown {
    const obj: any = {};
    message.packet !== undefined &&
      (obj.packet = message.packet ? Packet.toJSON(message.packet) : undefined);
    message.proofUnreceived !== undefined &&
      (obj.proofUnreceived = base64FromBytes(
        message.proofUnreceived !== undefined
          ? message.proofUnreceived
          : new Uint8Array()
      ));
    message.proofClose !== undefined &&
      (obj.proofClose = base64FromBytes(
        message.proofClose !== undefined ? message.proofClose : new Uint8Array()
      ));
    message.proofHeight !== undefined &&
      (obj.proofHeight = message.proofHeight
        ? Height.toJSON(message.proofHeight)
        : undefined);
    message.nextSequenceRecv !== undefined &&
      (obj.nextSequenceRecv = (
        message.nextSequenceRecv || Long.UZERO
      ).toString());
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgTimeoutOnClose>, I>>(
    object: I
  ): MsgTimeoutOnClose {
    const message = createBaseMsgTimeoutOnClose();
    message.packet =
      object.packet !== undefined && object.packet !== null
        ? Packet.fromPartial(object.packet)
        : undefined;
    message.proofUnreceived = object.proofUnreceived ?? new Uint8Array();
    message.proofClose = object.proofClose ?? new Uint8Array();
    message.proofHeight =
      object.proofHeight !== undefined && object.proofHeight !== null
        ? Height.fromPartial(object.proofHeight)
        : undefined;
    message.nextSequenceRecv =
      object.nextSequenceRecv !== undefined && object.nextSequenceRecv !== null
        ? Long.fromValue(object.nextSequenceRecv)
        : Long.UZERO;
    message.signer = object.signer ?? "";
    return message;
  },
};

function createBaseMsgTimeoutOnCloseResponse(): MsgTimeoutOnCloseResponse {
  return {};
}

export const MsgTimeoutOnCloseResponse = {
  encode(
    _: MsgTimeoutOnCloseResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgTimeoutOnCloseResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTimeoutOnCloseResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgTimeoutOnCloseResponse {
    return {};
  },

  toJSON(_: MsgTimeoutOnCloseResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgTimeoutOnCloseResponse>, I>>(
    _: I
  ): MsgTimeoutOnCloseResponse {
    const message = createBaseMsgTimeoutOnCloseResponse();
    return message;
  },
};

function createBaseMsgAcknowledgement(): MsgAcknowledgement {
  return {
    packet: undefined,
    acknowledgement: new Uint8Array(),
    proofAcked: new Uint8Array(),
    proofHeight: undefined,
    signer: "",
  };
}

export const MsgAcknowledgement = {
  encode(
    message: MsgAcknowledgement,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.packet !== undefined) {
      Packet.encode(message.packet, writer.uint32(10).fork()).ldelim();
    }
    if (message.acknowledgement.length !== 0) {
      writer.uint32(18).bytes(message.acknowledgement);
    }
    if (message.proofAcked.length !== 0) {
      writer.uint32(26).bytes(message.proofAcked);
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(34).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(42).string(message.signer);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAcknowledgement {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAcknowledgement();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packet = Packet.decode(reader, reader.uint32());
          break;
        case 2:
          message.acknowledgement = reader.bytes();
          break;
        case 3:
          message.proofAcked = reader.bytes();
          break;
        case 4:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        case 5:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAcknowledgement {
    return {
      packet: isSet(object.packet) ? Packet.fromJSON(object.packet) : undefined,
      acknowledgement: isSet(object.acknowledgement)
        ? bytesFromBase64(object.acknowledgement)
        : new Uint8Array(),
      proofAcked: isSet(object.proofAcked)
        ? bytesFromBase64(object.proofAcked)
        : new Uint8Array(),
      proofHeight: isSet(object.proofHeight)
        ? Height.fromJSON(object.proofHeight)
        : undefined,
      signer: isSet(object.signer) ? String(object.signer) : "",
    };
  },

  toJSON(message: MsgAcknowledgement): unknown {
    const obj: any = {};
    message.packet !== undefined &&
      (obj.packet = message.packet ? Packet.toJSON(message.packet) : undefined);
    message.acknowledgement !== undefined &&
      (obj.acknowledgement = base64FromBytes(
        message.acknowledgement !== undefined
          ? message.acknowledgement
          : new Uint8Array()
      ));
    message.proofAcked !== undefined &&
      (obj.proofAcked = base64FromBytes(
        message.proofAcked !== undefined ? message.proofAcked : new Uint8Array()
      ));
    message.proofHeight !== undefined &&
      (obj.proofHeight = message.proofHeight
        ? Height.toJSON(message.proofHeight)
        : undefined);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgAcknowledgement>, I>>(
    object: I
  ): MsgAcknowledgement {
    const message = createBaseMsgAcknowledgement();
    message.packet =
      object.packet !== undefined && object.packet !== null
        ? Packet.fromPartial(object.packet)
        : undefined;
    message.acknowledgement = object.acknowledgement ?? new Uint8Array();
    message.proofAcked = object.proofAcked ?? new Uint8Array();
    message.proofHeight =
      object.proofHeight !== undefined && object.proofHeight !== null
        ? Height.fromPartial(object.proofHeight)
        : undefined;
    message.signer = object.signer ?? "";
    return message;
  },
};

function createBaseMsgAcknowledgementResponse(): MsgAcknowledgementResponse {
  return {};
}

export const MsgAcknowledgementResponse = {
  encode(
    _: MsgAcknowledgementResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgAcknowledgementResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAcknowledgementResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgAcknowledgementResponse {
    return {};
  },

  toJSON(_: MsgAcknowledgementResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgAcknowledgementResponse>, I>>(
    _: I
  ): MsgAcknowledgementResponse {
    const message = createBaseMsgAcknowledgementResponse();
    return message;
  },
};

/** Msg defines the ibc/channel Msg service. */
export interface Msg {
  /** ChannelOpenInit defines a rpc handler method for MsgChannelOpenInit. */
  ChannelOpenInit(
    request: DeepPartial<MsgChannelOpenInit>,
    metadata?: grpc.Metadata
  ): Promise<MsgChannelOpenInitResponse>;
  /** ChannelOpenTry defines a rpc handler method for MsgChannelOpenTry. */
  ChannelOpenTry(
    request: DeepPartial<MsgChannelOpenTry>,
    metadata?: grpc.Metadata
  ): Promise<MsgChannelOpenTryResponse>;
  /** ChannelOpenAck defines a rpc handler method for MsgChannelOpenAck. */
  ChannelOpenAck(
    request: DeepPartial<MsgChannelOpenAck>,
    metadata?: grpc.Metadata
  ): Promise<MsgChannelOpenAckResponse>;
  /** ChannelOpenConfirm defines a rpc handler method for MsgChannelOpenConfirm. */
  ChannelOpenConfirm(
    request: DeepPartial<MsgChannelOpenConfirm>,
    metadata?: grpc.Metadata
  ): Promise<MsgChannelOpenConfirmResponse>;
  /** ChannelCloseInit defines a rpc handler method for MsgChannelCloseInit. */
  ChannelCloseInit(
    request: DeepPartial<MsgChannelCloseInit>,
    metadata?: grpc.Metadata
  ): Promise<MsgChannelCloseInitResponse>;
  /**
   * ChannelCloseConfirm defines a rpc handler method for
   * MsgChannelCloseConfirm.
   */
  ChannelCloseConfirm(
    request: DeepPartial<MsgChannelCloseConfirm>,
    metadata?: grpc.Metadata
  ): Promise<MsgChannelCloseConfirmResponse>;
  /** RecvPacket defines a rpc handler method for MsgRecvPacket. */
  RecvPacket(
    request: DeepPartial<MsgRecvPacket>,
    metadata?: grpc.Metadata
  ): Promise<MsgRecvPacketResponse>;
  /** Timeout defines a rpc handler method for MsgTimeout. */
  Timeout(
    request: DeepPartial<MsgTimeout>,
    metadata?: grpc.Metadata
  ): Promise<MsgTimeoutResponse>;
  /** TimeoutOnClose defines a rpc handler method for MsgTimeoutOnClose. */
  TimeoutOnClose(
    request: DeepPartial<MsgTimeoutOnClose>,
    metadata?: grpc.Metadata
  ): Promise<MsgTimeoutOnCloseResponse>;
  /** Acknowledgement defines a rpc handler method for MsgAcknowledgement. */
  Acknowledgement(
    request: DeepPartial<MsgAcknowledgement>,
    metadata?: grpc.Metadata
  ): Promise<MsgAcknowledgementResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.ChannelOpenInit = this.ChannelOpenInit.bind(this);
    this.ChannelOpenTry = this.ChannelOpenTry.bind(this);
    this.ChannelOpenAck = this.ChannelOpenAck.bind(this);
    this.ChannelOpenConfirm = this.ChannelOpenConfirm.bind(this);
    this.ChannelCloseInit = this.ChannelCloseInit.bind(this);
    this.ChannelCloseConfirm = this.ChannelCloseConfirm.bind(this);
    this.RecvPacket = this.RecvPacket.bind(this);
    this.Timeout = this.Timeout.bind(this);
    this.TimeoutOnClose = this.TimeoutOnClose.bind(this);
    this.Acknowledgement = this.Acknowledgement.bind(this);
  }

  ChannelOpenInit(
    request: DeepPartial<MsgChannelOpenInit>,
    metadata?: grpc.Metadata
  ): Promise<MsgChannelOpenInitResponse> {
    return this.rpc.unary(
      MsgChannelOpenInitDesc,
      MsgChannelOpenInit.fromPartial(request),
      metadata
    );
  }

  ChannelOpenTry(
    request: DeepPartial<MsgChannelOpenTry>,
    metadata?: grpc.Metadata
  ): Promise<MsgChannelOpenTryResponse> {
    return this.rpc.unary(
      MsgChannelOpenTryDesc,
      MsgChannelOpenTry.fromPartial(request),
      metadata
    );
  }

  ChannelOpenAck(
    request: DeepPartial<MsgChannelOpenAck>,
    metadata?: grpc.Metadata
  ): Promise<MsgChannelOpenAckResponse> {
    return this.rpc.unary(
      MsgChannelOpenAckDesc,
      MsgChannelOpenAck.fromPartial(request),
      metadata
    );
  }

  ChannelOpenConfirm(
    request: DeepPartial<MsgChannelOpenConfirm>,
    metadata?: grpc.Metadata
  ): Promise<MsgChannelOpenConfirmResponse> {
    return this.rpc.unary(
      MsgChannelOpenConfirmDesc,
      MsgChannelOpenConfirm.fromPartial(request),
      metadata
    );
  }

  ChannelCloseInit(
    request: DeepPartial<MsgChannelCloseInit>,
    metadata?: grpc.Metadata
  ): Promise<MsgChannelCloseInitResponse> {
    return this.rpc.unary(
      MsgChannelCloseInitDesc,
      MsgChannelCloseInit.fromPartial(request),
      metadata
    );
  }

  ChannelCloseConfirm(
    request: DeepPartial<MsgChannelCloseConfirm>,
    metadata?: grpc.Metadata
  ): Promise<MsgChannelCloseConfirmResponse> {
    return this.rpc.unary(
      MsgChannelCloseConfirmDesc,
      MsgChannelCloseConfirm.fromPartial(request),
      metadata
    );
  }

  RecvPacket(
    request: DeepPartial<MsgRecvPacket>,
    metadata?: grpc.Metadata
  ): Promise<MsgRecvPacketResponse> {
    return this.rpc.unary(
      MsgRecvPacketDesc,
      MsgRecvPacket.fromPartial(request),
      metadata
    );
  }

  Timeout(
    request: DeepPartial<MsgTimeout>,
    metadata?: grpc.Metadata
  ): Promise<MsgTimeoutResponse> {
    return this.rpc.unary(
      MsgTimeoutDesc,
      MsgTimeout.fromPartial(request),
      metadata
    );
  }

  TimeoutOnClose(
    request: DeepPartial<MsgTimeoutOnClose>,
    metadata?: grpc.Metadata
  ): Promise<MsgTimeoutOnCloseResponse> {
    return this.rpc.unary(
      MsgTimeoutOnCloseDesc,
      MsgTimeoutOnClose.fromPartial(request),
      metadata
    );
  }

  Acknowledgement(
    request: DeepPartial<MsgAcknowledgement>,
    metadata?: grpc.Metadata
  ): Promise<MsgAcknowledgementResponse> {
    return this.rpc.unary(
      MsgAcknowledgementDesc,
      MsgAcknowledgement.fromPartial(request),
      metadata
    );
  }
}

export const MsgDesc = {
  serviceName: "ibc.core.channel.v1.Msg",
};

export const MsgChannelOpenInitDesc: UnaryMethodDefinitionish = {
  methodName: "ChannelOpenInit",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgChannelOpenInit.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgChannelOpenInitResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const MsgChannelOpenTryDesc: UnaryMethodDefinitionish = {
  methodName: "ChannelOpenTry",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgChannelOpenTry.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgChannelOpenTryResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const MsgChannelOpenAckDesc: UnaryMethodDefinitionish = {
  methodName: "ChannelOpenAck",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgChannelOpenAck.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgChannelOpenAckResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const MsgChannelOpenConfirmDesc: UnaryMethodDefinitionish = {
  methodName: "ChannelOpenConfirm",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgChannelOpenConfirm.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgChannelOpenConfirmResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const MsgChannelCloseInitDesc: UnaryMethodDefinitionish = {
  methodName: "ChannelCloseInit",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgChannelCloseInit.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgChannelCloseInitResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const MsgChannelCloseConfirmDesc: UnaryMethodDefinitionish = {
  methodName: "ChannelCloseConfirm",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgChannelCloseConfirm.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgChannelCloseConfirmResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const MsgRecvPacketDesc: UnaryMethodDefinitionish = {
  methodName: "RecvPacket",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgRecvPacket.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgRecvPacketResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const MsgTimeoutDesc: UnaryMethodDefinitionish = {
  methodName: "Timeout",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgTimeout.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgTimeoutResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const MsgTimeoutOnCloseDesc: UnaryMethodDefinitionish = {
  methodName: "TimeoutOnClose",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgTimeoutOnClose.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgTimeoutOnCloseResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const MsgAcknowledgementDesc: UnaryMethodDefinitionish = {
  methodName: "Acknowledgement",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgAcknowledgement.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgAcknowledgementResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

interface UnaryMethodDefinitionishR
  extends grpc.UnaryMethodDefinition<any, any> {
  requestStream: any;
  responseStream: any;
}

type UnaryMethodDefinitionish = UnaryMethodDefinitionishR;

interface Rpc {
  unary<T extends UnaryMethodDefinitionish>(
    methodDesc: T,
    request: any,
    metadata: grpc.Metadata | undefined
  ): Promise<any>;
}

export class GrpcWebImpl {
  private host: string;
  private options: {
    transport?: grpc.TransportFactory;

    debug?: boolean;
    metadata?: grpc.Metadata;
  };

  constructor(
    host: string,
    options: {
      transport?: grpc.TransportFactory;

      debug?: boolean;
      metadata?: grpc.Metadata;
    }
  ) {
    this.host = host;
    this.options = options;
  }

  unary<T extends UnaryMethodDefinitionish>(
    methodDesc: T,
    _request: any,
    metadata: grpc.Metadata | undefined
  ): Promise<any> {
    const request = { ..._request, ...methodDesc.requestType };
    const maybeCombinedMetadata =
      metadata && this.options.metadata
        ? new BrowserHeaders({
            ...this.options?.metadata.headersMap,
            ...metadata?.headersMap,
          })
        : metadata || this.options.metadata;
    return new Promise((resolve, reject) => {
      grpc.unary(methodDesc, {
        request,
        host: this.host,
        metadata: maybeCombinedMetadata,
        transport: this.options.transport,
        debug: this.options.debug,
        onEnd: function (response) {
          if (response.status === grpc.Code.OK) {
            resolve(response.message);
          } else {
            const err = new Error(response.statusMessage) as any;
            err.code = response.status;
            err.metadata = response.trailers;
            reject(err);
          }
        },
      });
    });
  }
}

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

const atob: (b64: string) => string =
  globalThis.atob ||
  ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i);
  }
  return arr;
}

const btoa: (bin: string) => string =
  globalThis.btoa ||
  ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = [];
  arr.forEach((byte) => {
    bin.push(String.fromCharCode(byte));
  });
  return btoa(bin.join(""));
}

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
