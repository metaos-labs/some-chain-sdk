/* eslint-disable */
import Long from "long";
import { grpc } from "@improbable-eng/grpc-web";
import * as _m0 from "protobufjs/minimal";
import { Any } from "../../google/protobuf/any";
import { BrowserHeaders } from "browser-headers";
import { EthereumSigner } from "./gravity";

export const protobufPackage = "gravity.v1";

/**
 * MsgSendToEthereum submits a SendToEthereum attempt to bridge an asset over to
 * Ethereum. The SendToEthereum will be stored and then included in a batch and
 * then submitted to Ethereum.
 */
export interface MsgSendToEthereum {
  sender: string;
  ethereumRecipient: string;
  amountToken: string;
  amount: string;
  bridgeFeeToken: string;
  bridgeFeeAmount: string;
}

/**
 * MsgSendToEthereumResponse returns the SendToEthereum transaction ID which
 * will be included in the batch tx.
 */
export interface MsgSendToEthereumResponse {
  id: Long;
}

/**
 * MsgCancelSendToEthereum allows the sender to cancel its own outgoing
 * SendToEthereum tx and recieve a refund of the tokens and bridge fees. This tx
 * will only succeed if the SendToEthereum tx hasn't been batched to be
 * processed and relayed to Ethereum.
 */
export interface MsgCancelSendToEthereum {
  id: Long;
  sender: string;
}

export interface MsgCancelSendToEthereumResponse {}

/**
 * MsgRequestBatchTx requests a batch of transactions with a given coin
 * denomination to send across the bridge to Ethereum.
 */
export interface MsgRequestBatchTx {
  token: string;
  signer: string;
}

export interface MsgRequestBatchTxResponse {}

/**
 * MsgSubmitEthereumTxConfirmation submits an ethereum signature for a given
 * validator
 */
export interface MsgSubmitEthereumTxConfirmation {
  /** TODO: can we make this take an array? */
  confirmation?: Any;
  signer: string;
}

/**
 * ContractCallTxConfirmation is a signature on behalf of a validator for a
 * ContractCallTx.
 */
export interface ContractCallTxConfirmation {
  invalidationScope: Uint8Array;
  invalidationNonce: Long;
  ethereumSigner: string;
  signature: Uint8Array;
}

/** BatchTxConfirmation is a signature on behalf of a validator for a BatchTx. */
export interface BatchTxConfirmation {
  tokenContract: string;
  batchNonce: Long;
  ethereumSigner: string;
  signature: Uint8Array;
}

/**
 * SignerSetTxConfirmation is a signature on behalf of a validator for a
 * SignerSetTx
 */
export interface SignerSetTxConfirmation {
  signerSetNonce: Long;
  ethereumSigner: string;
  signature: Uint8Array;
}

export interface MsgSubmitEthereumTxConfirmationResponse {}

/** MsgSubmitEthereumEvent */
export interface MsgSubmitEthereumEvent {
  event?: Any;
  signer: string;
}

export interface MsgSubmitEthereumEventResponse {}

/**
 * MsgDelegateKey allows validators to delegate their voting responsibilities
 * to a given orchestrator address. This key is then used as an optional
 * authentication method for attesting events from Ethereum.
 */
export interface MsgDelegateKeys {
  validatorAddress: string;
  orchestratorAddress: string;
  ethereumAddress: string;
  ethSignature: Uint8Array;
}

export interface MsgDelegateKeysResponse {}

/**
 * DelegateKeysSignMsg defines the message structure an operator is expected to
 * sign when submitting a MsgDelegateKeys message. The resulting signature should
 * populate the eth_signature field.
 */
export interface DelegateKeysSignMsg {
  validatorAddress: string;
  nonce: Long;
}

/**
 * SendToCosmosEvent is submitted when the SendToCosmosEvent is emitted by they
 * gravity contract. ERC20 representation coins are minted to the cosmos-receiver
 * address.
 */
export interface SendToCosmosEvent {
  eventNonce: Long;
  tokenContract: string;
  tokenName: string;
  tokenSymbol: string;
  tokenDecimals: Long;
  sophonToken: string;
  amount: string;
  ethereumSender: string;
  cosmosReceiver: string;
  ethereumHeight: Long;
}

/**
 * BatchExecutedEvent claims that a batch of BatchTxExecuted operations on the
 * bridge contract was executed successfully on ETH
 */
export interface BatchExecutedEvent {
  tokenContract: string;
  eventNonce: Long;
  ethereumHeight: Long;
  batchNonce: Long;
}

/**
 * NOTE: bytes.HexBytes is supposed to "help" with json encoding/decoding
 * investigate?
 */
export interface ContractCallExecutedEvent {
  eventNonce: Long;
  invalidationScope: Uint8Array;
  invalidationNonce: Long;
  ethereumHeight: Long;
}

/**
 * ERC20DeployedEvent is submitted when an ERC20 contract
 * for a Cosmos SDK coin has been deployed on Ethereum.
 */
export interface ERC20DeployedEvent {
  eventNonce: Long;
  tokenContract: string;
  erc20Name: string;
  erc20Symbol: string;
  erc20Decimals: Long;
  ethereumHeight: Long;
}

/**
 * This informs the Cosmos module that a validator
 * set has been updated.
 */
export interface SignerSetTxExecutedEvent {
  eventNonce: Long;
  signerSetTxNonce: Long;
  ethereumHeight: Long;
  members: EthereumSigner[];
}

function createBaseMsgSendToEthereum(): MsgSendToEthereum {
  return {
    sender: "",
    ethereumRecipient: "",
    amountToken: "",
    amount: "",
    bridgeFeeToken: "",
    bridgeFeeAmount: "",
  };
}

export const MsgSendToEthereum = {
  encode(
    message: MsgSendToEthereum,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.ethereumRecipient !== "") {
      writer.uint32(18).string(message.ethereumRecipient);
    }
    if (message.amountToken !== "") {
      writer.uint32(26).string(message.amountToken);
    }
    if (message.amount !== "") {
      writer.uint32(34).string(message.amount);
    }
    if (message.bridgeFeeToken !== "") {
      writer.uint32(42).string(message.bridgeFeeToken);
    }
    if (message.bridgeFeeAmount !== "") {
      writer.uint32(50).string(message.bridgeFeeAmount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSendToEthereum {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSendToEthereum();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.ethereumRecipient = reader.string();
          break;
        case 3:
          message.amountToken = reader.string();
          break;
        case 4:
          message.amount = reader.string();
          break;
        case 5:
          message.bridgeFeeToken = reader.string();
          break;
        case 6:
          message.bridgeFeeAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSendToEthereum {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      ethereumRecipient: isSet(object.ethereumRecipient)
        ? String(object.ethereumRecipient)
        : "",
      amountToken: isSet(object.amountToken) ? String(object.amountToken) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      bridgeFeeToken: isSet(object.bridgeFeeToken)
        ? String(object.bridgeFeeToken)
        : "",
      bridgeFeeAmount: isSet(object.bridgeFeeAmount)
        ? String(object.bridgeFeeAmount)
        : "",
    };
  },

  toJSON(message: MsgSendToEthereum): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.ethereumRecipient !== undefined &&
      (obj.ethereumRecipient = message.ethereumRecipient);
    message.amountToken !== undefined &&
      (obj.amountToken = message.amountToken);
    message.amount !== undefined && (obj.amount = message.amount);
    message.bridgeFeeToken !== undefined &&
      (obj.bridgeFeeToken = message.bridgeFeeToken);
    message.bridgeFeeAmount !== undefined &&
      (obj.bridgeFeeAmount = message.bridgeFeeAmount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSendToEthereum>, I>>(
    object: I
  ): MsgSendToEthereum {
    const message = createBaseMsgSendToEthereum();
    message.sender = object.sender ?? "";
    message.ethereumRecipient = object.ethereumRecipient ?? "";
    message.amountToken = object.amountToken ?? "";
    message.amount = object.amount ?? "";
    message.bridgeFeeToken = object.bridgeFeeToken ?? "";
    message.bridgeFeeAmount = object.bridgeFeeAmount ?? "";
    return message;
  },
};

function createBaseMsgSendToEthereumResponse(): MsgSendToEthereumResponse {
  return { id: Long.UZERO };
}

export const MsgSendToEthereumResponse = {
  encode(
    message: MsgSendToEthereumResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSendToEthereumResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSendToEthereumResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSendToEthereumResponse {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
    };
  },

  toJSON(message: MsgSendToEthereumResponse): unknown {
    const obj: any = {};
    message.id !== undefined &&
      (obj.id = (message.id || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSendToEthereumResponse>, I>>(
    object: I
  ): MsgSendToEthereumResponse {
    const message = createBaseMsgSendToEthereumResponse();
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromValue(object.id)
        : Long.UZERO;
    return message;
  },
};

function createBaseMsgCancelSendToEthereum(): MsgCancelSendToEthereum {
  return { id: Long.UZERO, sender: "" };
}

export const MsgCancelSendToEthereum = {
  encode(
    message: MsgCancelSendToEthereum,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCancelSendToEthereum {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelSendToEthereum();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64() as Long;
          break;
        case 2:
          message.sender = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCancelSendToEthereum {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      sender: isSet(object.sender) ? String(object.sender) : "",
    };
  },

  toJSON(message: MsgCancelSendToEthereum): unknown {
    const obj: any = {};
    message.id !== undefined &&
      (obj.id = (message.id || Long.UZERO).toString());
    message.sender !== undefined && (obj.sender = message.sender);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCancelSendToEthereum>, I>>(
    object: I
  ): MsgCancelSendToEthereum {
    const message = createBaseMsgCancelSendToEthereum();
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromValue(object.id)
        : Long.UZERO;
    message.sender = object.sender ?? "";
    return message;
  },
};

function createBaseMsgCancelSendToEthereumResponse(): MsgCancelSendToEthereumResponse {
  return {};
}

export const MsgCancelSendToEthereumResponse = {
  encode(
    _: MsgCancelSendToEthereumResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCancelSendToEthereumResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelSendToEthereumResponse();
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

  fromJSON(_: any): MsgCancelSendToEthereumResponse {
    return {};
  },

  toJSON(_: MsgCancelSendToEthereumResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCancelSendToEthereumResponse>, I>>(
    _: I
  ): MsgCancelSendToEthereumResponse {
    const message = createBaseMsgCancelSendToEthereumResponse();
    return message;
  },
};

function createBaseMsgRequestBatchTx(): MsgRequestBatchTx {
  return { token: "", signer: "" };
}

export const MsgRequestBatchTx = {
  encode(
    message: MsgRequestBatchTx,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.token !== "") {
      writer.uint32(10).string(message.token);
    }
    if (message.signer !== "") {
      writer.uint32(18).string(message.signer);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRequestBatchTx {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRequestBatchTx();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.token = reader.string();
          break;
        case 2:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRequestBatchTx {
    return {
      token: isSet(object.token) ? String(object.token) : "",
      signer: isSet(object.signer) ? String(object.signer) : "",
    };
  },

  toJSON(message: MsgRequestBatchTx): unknown {
    const obj: any = {};
    message.token !== undefined && (obj.token = message.token);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRequestBatchTx>, I>>(
    object: I
  ): MsgRequestBatchTx {
    const message = createBaseMsgRequestBatchTx();
    message.token = object.token ?? "";
    message.signer = object.signer ?? "";
    return message;
  },
};

function createBaseMsgRequestBatchTxResponse(): MsgRequestBatchTxResponse {
  return {};
}

export const MsgRequestBatchTxResponse = {
  encode(
    _: MsgRequestBatchTxResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgRequestBatchTxResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRequestBatchTxResponse();
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

  fromJSON(_: any): MsgRequestBatchTxResponse {
    return {};
  },

  toJSON(_: MsgRequestBatchTxResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRequestBatchTxResponse>, I>>(
    _: I
  ): MsgRequestBatchTxResponse {
    const message = createBaseMsgRequestBatchTxResponse();
    return message;
  },
};

function createBaseMsgSubmitEthereumTxConfirmation(): MsgSubmitEthereumTxConfirmation {
  return { confirmation: undefined, signer: "" };
}

export const MsgSubmitEthereumTxConfirmation = {
  encode(
    message: MsgSubmitEthereumTxConfirmation,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.confirmation !== undefined) {
      Any.encode(message.confirmation, writer.uint32(10).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(18).string(message.signer);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSubmitEthereumTxConfirmation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitEthereumTxConfirmation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.confirmation = Any.decode(reader, reader.uint32());
          break;
        case 2:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSubmitEthereumTxConfirmation {
    return {
      confirmation: isSet(object.confirmation)
        ? Any.fromJSON(object.confirmation)
        : undefined,
      signer: isSet(object.signer) ? String(object.signer) : "",
    };
  },

  toJSON(message: MsgSubmitEthereumTxConfirmation): unknown {
    const obj: any = {};
    message.confirmation !== undefined &&
      (obj.confirmation = message.confirmation
        ? Any.toJSON(message.confirmation)
        : undefined);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSubmitEthereumTxConfirmation>, I>>(
    object: I
  ): MsgSubmitEthereumTxConfirmation {
    const message = createBaseMsgSubmitEthereumTxConfirmation();
    message.confirmation =
      object.confirmation !== undefined && object.confirmation !== null
        ? Any.fromPartial(object.confirmation)
        : undefined;
    message.signer = object.signer ?? "";
    return message;
  },
};

function createBaseContractCallTxConfirmation(): ContractCallTxConfirmation {
  return {
    invalidationScope: new Uint8Array(),
    invalidationNonce: Long.UZERO,
    ethereumSigner: "",
    signature: new Uint8Array(),
  };
}

export const ContractCallTxConfirmation = {
  encode(
    message: ContractCallTxConfirmation,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.invalidationScope.length !== 0) {
      writer.uint32(10).bytes(message.invalidationScope);
    }
    if (!message.invalidationNonce.isZero()) {
      writer.uint32(16).uint64(message.invalidationNonce);
    }
    if (message.ethereumSigner !== "") {
      writer.uint32(26).string(message.ethereumSigner);
    }
    if (message.signature.length !== 0) {
      writer.uint32(34).bytes(message.signature);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ContractCallTxConfirmation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContractCallTxConfirmation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.invalidationScope = reader.bytes();
          break;
        case 2:
          message.invalidationNonce = reader.uint64() as Long;
          break;
        case 3:
          message.ethereumSigner = reader.string();
          break;
        case 4:
          message.signature = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ContractCallTxConfirmation {
    return {
      invalidationScope: isSet(object.invalidationScope)
        ? bytesFromBase64(object.invalidationScope)
        : new Uint8Array(),
      invalidationNonce: isSet(object.invalidationNonce)
        ? Long.fromValue(object.invalidationNonce)
        : Long.UZERO,
      ethereumSigner: isSet(object.ethereumSigner)
        ? String(object.ethereumSigner)
        : "",
      signature: isSet(object.signature)
        ? bytesFromBase64(object.signature)
        : new Uint8Array(),
    };
  },

  toJSON(message: ContractCallTxConfirmation): unknown {
    const obj: any = {};
    message.invalidationScope !== undefined &&
      (obj.invalidationScope = base64FromBytes(
        message.invalidationScope !== undefined
          ? message.invalidationScope
          : new Uint8Array()
      ));
    message.invalidationNonce !== undefined &&
      (obj.invalidationNonce = (
        message.invalidationNonce || Long.UZERO
      ).toString());
    message.ethereumSigner !== undefined &&
      (obj.ethereumSigner = message.ethereumSigner);
    message.signature !== undefined &&
      (obj.signature = base64FromBytes(
        message.signature !== undefined ? message.signature : new Uint8Array()
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ContractCallTxConfirmation>, I>>(
    object: I
  ): ContractCallTxConfirmation {
    const message = createBaseContractCallTxConfirmation();
    message.invalidationScope = object.invalidationScope ?? new Uint8Array();
    message.invalidationNonce =
      object.invalidationNonce !== undefined &&
      object.invalidationNonce !== null
        ? Long.fromValue(object.invalidationNonce)
        : Long.UZERO;
    message.ethereumSigner = object.ethereumSigner ?? "";
    message.signature = object.signature ?? new Uint8Array();
    return message;
  },
};

function createBaseBatchTxConfirmation(): BatchTxConfirmation {
  return {
    tokenContract: "",
    batchNonce: Long.UZERO,
    ethereumSigner: "",
    signature: new Uint8Array(),
  };
}

export const BatchTxConfirmation = {
  encode(
    message: BatchTxConfirmation,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.tokenContract !== "") {
      writer.uint32(10).string(message.tokenContract);
    }
    if (!message.batchNonce.isZero()) {
      writer.uint32(16).uint64(message.batchNonce);
    }
    if (message.ethereumSigner !== "") {
      writer.uint32(26).string(message.ethereumSigner);
    }
    if (message.signature.length !== 0) {
      writer.uint32(34).bytes(message.signature);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BatchTxConfirmation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBatchTxConfirmation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenContract = reader.string();
          break;
        case 2:
          message.batchNonce = reader.uint64() as Long;
          break;
        case 3:
          message.ethereumSigner = reader.string();
          break;
        case 4:
          message.signature = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BatchTxConfirmation {
    return {
      tokenContract: isSet(object.tokenContract)
        ? String(object.tokenContract)
        : "",
      batchNonce: isSet(object.batchNonce)
        ? Long.fromValue(object.batchNonce)
        : Long.UZERO,
      ethereumSigner: isSet(object.ethereumSigner)
        ? String(object.ethereumSigner)
        : "",
      signature: isSet(object.signature)
        ? bytesFromBase64(object.signature)
        : new Uint8Array(),
    };
  },

  toJSON(message: BatchTxConfirmation): unknown {
    const obj: any = {};
    message.tokenContract !== undefined &&
      (obj.tokenContract = message.tokenContract);
    message.batchNonce !== undefined &&
      (obj.batchNonce = (message.batchNonce || Long.UZERO).toString());
    message.ethereumSigner !== undefined &&
      (obj.ethereumSigner = message.ethereumSigner);
    message.signature !== undefined &&
      (obj.signature = base64FromBytes(
        message.signature !== undefined ? message.signature : new Uint8Array()
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BatchTxConfirmation>, I>>(
    object: I
  ): BatchTxConfirmation {
    const message = createBaseBatchTxConfirmation();
    message.tokenContract = object.tokenContract ?? "";
    message.batchNonce =
      object.batchNonce !== undefined && object.batchNonce !== null
        ? Long.fromValue(object.batchNonce)
        : Long.UZERO;
    message.ethereumSigner = object.ethereumSigner ?? "";
    message.signature = object.signature ?? new Uint8Array();
    return message;
  },
};

function createBaseSignerSetTxConfirmation(): SignerSetTxConfirmation {
  return {
    signerSetNonce: Long.UZERO,
    ethereumSigner: "",
    signature: new Uint8Array(),
  };
}

export const SignerSetTxConfirmation = {
  encode(
    message: SignerSetTxConfirmation,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.signerSetNonce.isZero()) {
      writer.uint32(8).uint64(message.signerSetNonce);
    }
    if (message.ethereumSigner !== "") {
      writer.uint32(18).string(message.ethereumSigner);
    }
    if (message.signature.length !== 0) {
      writer.uint32(26).bytes(message.signature);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SignerSetTxConfirmation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignerSetTxConfirmation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signerSetNonce = reader.uint64() as Long;
          break;
        case 2:
          message.ethereumSigner = reader.string();
          break;
        case 3:
          message.signature = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SignerSetTxConfirmation {
    return {
      signerSetNonce: isSet(object.signerSetNonce)
        ? Long.fromValue(object.signerSetNonce)
        : Long.UZERO,
      ethereumSigner: isSet(object.ethereumSigner)
        ? String(object.ethereumSigner)
        : "",
      signature: isSet(object.signature)
        ? bytesFromBase64(object.signature)
        : new Uint8Array(),
    };
  },

  toJSON(message: SignerSetTxConfirmation): unknown {
    const obj: any = {};
    message.signerSetNonce !== undefined &&
      (obj.signerSetNonce = (message.signerSetNonce || Long.UZERO).toString());
    message.ethereumSigner !== undefined &&
      (obj.ethereumSigner = message.ethereumSigner);
    message.signature !== undefined &&
      (obj.signature = base64FromBytes(
        message.signature !== undefined ? message.signature : new Uint8Array()
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SignerSetTxConfirmation>, I>>(
    object: I
  ): SignerSetTxConfirmation {
    const message = createBaseSignerSetTxConfirmation();
    message.signerSetNonce =
      object.signerSetNonce !== undefined && object.signerSetNonce !== null
        ? Long.fromValue(object.signerSetNonce)
        : Long.UZERO;
    message.ethereumSigner = object.ethereumSigner ?? "";
    message.signature = object.signature ?? new Uint8Array();
    return message;
  },
};

function createBaseMsgSubmitEthereumTxConfirmationResponse(): MsgSubmitEthereumTxConfirmationResponse {
  return {};
}

export const MsgSubmitEthereumTxConfirmationResponse = {
  encode(
    _: MsgSubmitEthereumTxConfirmationResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSubmitEthereumTxConfirmationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitEthereumTxConfirmationResponse();
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

  fromJSON(_: any): MsgSubmitEthereumTxConfirmationResponse {
    return {};
  },

  toJSON(_: MsgSubmitEthereumTxConfirmationResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<MsgSubmitEthereumTxConfirmationResponse>, I>
  >(_: I): MsgSubmitEthereumTxConfirmationResponse {
    const message = createBaseMsgSubmitEthereumTxConfirmationResponse();
    return message;
  },
};

function createBaseMsgSubmitEthereumEvent(): MsgSubmitEthereumEvent {
  return { event: undefined, signer: "" };
}

export const MsgSubmitEthereumEvent = {
  encode(
    message: MsgSubmitEthereumEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.event !== undefined) {
      Any.encode(message.event, writer.uint32(10).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(18).string(message.signer);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSubmitEthereumEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitEthereumEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.event = Any.decode(reader, reader.uint32());
          break;
        case 2:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSubmitEthereumEvent {
    return {
      event: isSet(object.event) ? Any.fromJSON(object.event) : undefined,
      signer: isSet(object.signer) ? String(object.signer) : "",
    };
  },

  toJSON(message: MsgSubmitEthereumEvent): unknown {
    const obj: any = {};
    message.event !== undefined &&
      (obj.event = message.event ? Any.toJSON(message.event) : undefined);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSubmitEthereumEvent>, I>>(
    object: I
  ): MsgSubmitEthereumEvent {
    const message = createBaseMsgSubmitEthereumEvent();
    message.event =
      object.event !== undefined && object.event !== null
        ? Any.fromPartial(object.event)
        : undefined;
    message.signer = object.signer ?? "";
    return message;
  },
};

function createBaseMsgSubmitEthereumEventResponse(): MsgSubmitEthereumEventResponse {
  return {};
}

export const MsgSubmitEthereumEventResponse = {
  encode(
    _: MsgSubmitEthereumEventResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSubmitEthereumEventResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitEthereumEventResponse();
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

  fromJSON(_: any): MsgSubmitEthereumEventResponse {
    return {};
  },

  toJSON(_: MsgSubmitEthereumEventResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSubmitEthereumEventResponse>, I>>(
    _: I
  ): MsgSubmitEthereumEventResponse {
    const message = createBaseMsgSubmitEthereumEventResponse();
    return message;
  },
};

function createBaseMsgDelegateKeys(): MsgDelegateKeys {
  return {
    validatorAddress: "",
    orchestratorAddress: "",
    ethereumAddress: "",
    ethSignature: new Uint8Array(),
  };
}

export const MsgDelegateKeys = {
  encode(
    message: MsgDelegateKeys,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    if (message.orchestratorAddress !== "") {
      writer.uint32(18).string(message.orchestratorAddress);
    }
    if (message.ethereumAddress !== "") {
      writer.uint32(26).string(message.ethereumAddress);
    }
    if (message.ethSignature.length !== 0) {
      writer.uint32(34).bytes(message.ethSignature);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDelegateKeys {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDelegateKeys();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
          break;
        case 2:
          message.orchestratorAddress = reader.string();
          break;
        case 3:
          message.ethereumAddress = reader.string();
          break;
        case 4:
          message.ethSignature = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDelegateKeys {
    return {
      validatorAddress: isSet(object.validatorAddress)
        ? String(object.validatorAddress)
        : "",
      orchestratorAddress: isSet(object.orchestratorAddress)
        ? String(object.orchestratorAddress)
        : "",
      ethereumAddress: isSet(object.ethereumAddress)
        ? String(object.ethereumAddress)
        : "",
      ethSignature: isSet(object.ethSignature)
        ? bytesFromBase64(object.ethSignature)
        : new Uint8Array(),
    };
  },

  toJSON(message: MsgDelegateKeys): unknown {
    const obj: any = {};
    message.validatorAddress !== undefined &&
      (obj.validatorAddress = message.validatorAddress);
    message.orchestratorAddress !== undefined &&
      (obj.orchestratorAddress = message.orchestratorAddress);
    message.ethereumAddress !== undefined &&
      (obj.ethereumAddress = message.ethereumAddress);
    message.ethSignature !== undefined &&
      (obj.ethSignature = base64FromBytes(
        message.ethSignature !== undefined
          ? message.ethSignature
          : new Uint8Array()
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDelegateKeys>, I>>(
    object: I
  ): MsgDelegateKeys {
    const message = createBaseMsgDelegateKeys();
    message.validatorAddress = object.validatorAddress ?? "";
    message.orchestratorAddress = object.orchestratorAddress ?? "";
    message.ethereumAddress = object.ethereumAddress ?? "";
    message.ethSignature = object.ethSignature ?? new Uint8Array();
    return message;
  },
};

function createBaseMsgDelegateKeysResponse(): MsgDelegateKeysResponse {
  return {};
}

export const MsgDelegateKeysResponse = {
  encode(
    _: MsgDelegateKeysResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgDelegateKeysResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDelegateKeysResponse();
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

  fromJSON(_: any): MsgDelegateKeysResponse {
    return {};
  },

  toJSON(_: MsgDelegateKeysResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDelegateKeysResponse>, I>>(
    _: I
  ): MsgDelegateKeysResponse {
    const message = createBaseMsgDelegateKeysResponse();
    return message;
  },
};

function createBaseDelegateKeysSignMsg(): DelegateKeysSignMsg {
  return { validatorAddress: "", nonce: Long.UZERO };
}

export const DelegateKeysSignMsg = {
  encode(
    message: DelegateKeysSignMsg,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    if (!message.nonce.isZero()) {
      writer.uint32(16).uint64(message.nonce);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DelegateKeysSignMsg {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegateKeysSignMsg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
          break;
        case 2:
          message.nonce = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DelegateKeysSignMsg {
    return {
      validatorAddress: isSet(object.validatorAddress)
        ? String(object.validatorAddress)
        : "",
      nonce: isSet(object.nonce) ? Long.fromValue(object.nonce) : Long.UZERO,
    };
  },

  toJSON(message: DelegateKeysSignMsg): unknown {
    const obj: any = {};
    message.validatorAddress !== undefined &&
      (obj.validatorAddress = message.validatorAddress);
    message.nonce !== undefined &&
      (obj.nonce = (message.nonce || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DelegateKeysSignMsg>, I>>(
    object: I
  ): DelegateKeysSignMsg {
    const message = createBaseDelegateKeysSignMsg();
    message.validatorAddress = object.validatorAddress ?? "";
    message.nonce =
      object.nonce !== undefined && object.nonce !== null
        ? Long.fromValue(object.nonce)
        : Long.UZERO;
    return message;
  },
};

function createBaseSendToCosmosEvent(): SendToCosmosEvent {
  return {
    eventNonce: Long.UZERO,
    tokenContract: "",
    tokenName: "",
    tokenSymbol: "",
    tokenDecimals: Long.UZERO,
    sophonToken: "",
    amount: "",
    ethereumSender: "",
    cosmosReceiver: "",
    ethereumHeight: Long.UZERO,
  };
}

export const SendToCosmosEvent = {
  encode(
    message: SendToCosmosEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.eventNonce.isZero()) {
      writer.uint32(8).uint64(message.eventNonce);
    }
    if (message.tokenContract !== "") {
      writer.uint32(18).string(message.tokenContract);
    }
    if (message.tokenName !== "") {
      writer.uint32(26).string(message.tokenName);
    }
    if (message.tokenSymbol !== "") {
      writer.uint32(34).string(message.tokenSymbol);
    }
    if (!message.tokenDecimals.isZero()) {
      writer.uint32(40).uint64(message.tokenDecimals);
    }
    if (message.sophonToken !== "") {
      writer.uint32(50).string(message.sophonToken);
    }
    if (message.amount !== "") {
      writer.uint32(58).string(message.amount);
    }
    if (message.ethereumSender !== "") {
      writer.uint32(66).string(message.ethereumSender);
    }
    if (message.cosmosReceiver !== "") {
      writer.uint32(74).string(message.cosmosReceiver);
    }
    if (!message.ethereumHeight.isZero()) {
      writer.uint32(80).uint64(message.ethereumHeight);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SendToCosmosEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSendToCosmosEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eventNonce = reader.uint64() as Long;
          break;
        case 2:
          message.tokenContract = reader.string();
          break;
        case 3:
          message.tokenName = reader.string();
          break;
        case 4:
          message.tokenSymbol = reader.string();
          break;
        case 5:
          message.tokenDecimals = reader.uint64() as Long;
          break;
        case 6:
          message.sophonToken = reader.string();
          break;
        case 7:
          message.amount = reader.string();
          break;
        case 8:
          message.ethereumSender = reader.string();
          break;
        case 9:
          message.cosmosReceiver = reader.string();
          break;
        case 10:
          message.ethereumHeight = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SendToCosmosEvent {
    return {
      eventNonce: isSet(object.eventNonce)
        ? Long.fromValue(object.eventNonce)
        : Long.UZERO,
      tokenContract: isSet(object.tokenContract)
        ? String(object.tokenContract)
        : "",
      tokenName: isSet(object.tokenName) ? String(object.tokenName) : "",
      tokenSymbol: isSet(object.tokenSymbol) ? String(object.tokenSymbol) : "",
      tokenDecimals: isSet(object.tokenDecimals)
        ? Long.fromValue(object.tokenDecimals)
        : Long.UZERO,
      sophonToken: isSet(object.sophonToken) ? String(object.sophonToken) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      ethereumSender: isSet(object.ethereumSender)
        ? String(object.ethereumSender)
        : "",
      cosmosReceiver: isSet(object.cosmosReceiver)
        ? String(object.cosmosReceiver)
        : "",
      ethereumHeight: isSet(object.ethereumHeight)
        ? Long.fromValue(object.ethereumHeight)
        : Long.UZERO,
    };
  },

  toJSON(message: SendToCosmosEvent): unknown {
    const obj: any = {};
    message.eventNonce !== undefined &&
      (obj.eventNonce = (message.eventNonce || Long.UZERO).toString());
    message.tokenContract !== undefined &&
      (obj.tokenContract = message.tokenContract);
    message.tokenName !== undefined && (obj.tokenName = message.tokenName);
    message.tokenSymbol !== undefined &&
      (obj.tokenSymbol = message.tokenSymbol);
    message.tokenDecimals !== undefined &&
      (obj.tokenDecimals = (message.tokenDecimals || Long.UZERO).toString());
    message.sophonToken !== undefined &&
      (obj.sophonToken = message.sophonToken);
    message.amount !== undefined && (obj.amount = message.amount);
    message.ethereumSender !== undefined &&
      (obj.ethereumSender = message.ethereumSender);
    message.cosmosReceiver !== undefined &&
      (obj.cosmosReceiver = message.cosmosReceiver);
    message.ethereumHeight !== undefined &&
      (obj.ethereumHeight = (message.ethereumHeight || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SendToCosmosEvent>, I>>(
    object: I
  ): SendToCosmosEvent {
    const message = createBaseSendToCosmosEvent();
    message.eventNonce =
      object.eventNonce !== undefined && object.eventNonce !== null
        ? Long.fromValue(object.eventNonce)
        : Long.UZERO;
    message.tokenContract = object.tokenContract ?? "";
    message.tokenName = object.tokenName ?? "";
    message.tokenSymbol = object.tokenSymbol ?? "";
    message.tokenDecimals =
      object.tokenDecimals !== undefined && object.tokenDecimals !== null
        ? Long.fromValue(object.tokenDecimals)
        : Long.UZERO;
    message.sophonToken = object.sophonToken ?? "";
    message.amount = object.amount ?? "";
    message.ethereumSender = object.ethereumSender ?? "";
    message.cosmosReceiver = object.cosmosReceiver ?? "";
    message.ethereumHeight =
      object.ethereumHeight !== undefined && object.ethereumHeight !== null
        ? Long.fromValue(object.ethereumHeight)
        : Long.UZERO;
    return message;
  },
};

function createBaseBatchExecutedEvent(): BatchExecutedEvent {
  return {
    tokenContract: "",
    eventNonce: Long.UZERO,
    ethereumHeight: Long.UZERO,
    batchNonce: Long.UZERO,
  };
}

export const BatchExecutedEvent = {
  encode(
    message: BatchExecutedEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.tokenContract !== "") {
      writer.uint32(10).string(message.tokenContract);
    }
    if (!message.eventNonce.isZero()) {
      writer.uint32(16).uint64(message.eventNonce);
    }
    if (!message.ethereumHeight.isZero()) {
      writer.uint32(24).uint64(message.ethereumHeight);
    }
    if (!message.batchNonce.isZero()) {
      writer.uint32(32).uint64(message.batchNonce);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BatchExecutedEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBatchExecutedEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenContract = reader.string();
          break;
        case 2:
          message.eventNonce = reader.uint64() as Long;
          break;
        case 3:
          message.ethereumHeight = reader.uint64() as Long;
          break;
        case 4:
          message.batchNonce = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BatchExecutedEvent {
    return {
      tokenContract: isSet(object.tokenContract)
        ? String(object.tokenContract)
        : "",
      eventNonce: isSet(object.eventNonce)
        ? Long.fromValue(object.eventNonce)
        : Long.UZERO,
      ethereumHeight: isSet(object.ethereumHeight)
        ? Long.fromValue(object.ethereumHeight)
        : Long.UZERO,
      batchNonce: isSet(object.batchNonce)
        ? Long.fromValue(object.batchNonce)
        : Long.UZERO,
    };
  },

  toJSON(message: BatchExecutedEvent): unknown {
    const obj: any = {};
    message.tokenContract !== undefined &&
      (obj.tokenContract = message.tokenContract);
    message.eventNonce !== undefined &&
      (obj.eventNonce = (message.eventNonce || Long.UZERO).toString());
    message.ethereumHeight !== undefined &&
      (obj.ethereumHeight = (message.ethereumHeight || Long.UZERO).toString());
    message.batchNonce !== undefined &&
      (obj.batchNonce = (message.batchNonce || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BatchExecutedEvent>, I>>(
    object: I
  ): BatchExecutedEvent {
    const message = createBaseBatchExecutedEvent();
    message.tokenContract = object.tokenContract ?? "";
    message.eventNonce =
      object.eventNonce !== undefined && object.eventNonce !== null
        ? Long.fromValue(object.eventNonce)
        : Long.UZERO;
    message.ethereumHeight =
      object.ethereumHeight !== undefined && object.ethereumHeight !== null
        ? Long.fromValue(object.ethereumHeight)
        : Long.UZERO;
    message.batchNonce =
      object.batchNonce !== undefined && object.batchNonce !== null
        ? Long.fromValue(object.batchNonce)
        : Long.UZERO;
    return message;
  },
};

function createBaseContractCallExecutedEvent(): ContractCallExecutedEvent {
  return {
    eventNonce: Long.UZERO,
    invalidationScope: new Uint8Array(),
    invalidationNonce: Long.UZERO,
    ethereumHeight: Long.UZERO,
  };
}

export const ContractCallExecutedEvent = {
  encode(
    message: ContractCallExecutedEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.eventNonce.isZero()) {
      writer.uint32(8).uint64(message.eventNonce);
    }
    if (message.invalidationScope.length !== 0) {
      writer.uint32(18).bytes(message.invalidationScope);
    }
    if (!message.invalidationNonce.isZero()) {
      writer.uint32(24).uint64(message.invalidationNonce);
    }
    if (!message.ethereumHeight.isZero()) {
      writer.uint32(32).uint64(message.ethereumHeight);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ContractCallExecutedEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContractCallExecutedEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eventNonce = reader.uint64() as Long;
          break;
        case 2:
          message.invalidationScope = reader.bytes();
          break;
        case 3:
          message.invalidationNonce = reader.uint64() as Long;
          break;
        case 4:
          message.ethereumHeight = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ContractCallExecutedEvent {
    return {
      eventNonce: isSet(object.eventNonce)
        ? Long.fromValue(object.eventNonce)
        : Long.UZERO,
      invalidationScope: isSet(object.invalidationScope)
        ? bytesFromBase64(object.invalidationScope)
        : new Uint8Array(),
      invalidationNonce: isSet(object.invalidationNonce)
        ? Long.fromValue(object.invalidationNonce)
        : Long.UZERO,
      ethereumHeight: isSet(object.ethereumHeight)
        ? Long.fromValue(object.ethereumHeight)
        : Long.UZERO,
    };
  },

  toJSON(message: ContractCallExecutedEvent): unknown {
    const obj: any = {};
    message.eventNonce !== undefined &&
      (obj.eventNonce = (message.eventNonce || Long.UZERO).toString());
    message.invalidationScope !== undefined &&
      (obj.invalidationScope = base64FromBytes(
        message.invalidationScope !== undefined
          ? message.invalidationScope
          : new Uint8Array()
      ));
    message.invalidationNonce !== undefined &&
      (obj.invalidationNonce = (
        message.invalidationNonce || Long.UZERO
      ).toString());
    message.ethereumHeight !== undefined &&
      (obj.ethereumHeight = (message.ethereumHeight || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ContractCallExecutedEvent>, I>>(
    object: I
  ): ContractCallExecutedEvent {
    const message = createBaseContractCallExecutedEvent();
    message.eventNonce =
      object.eventNonce !== undefined && object.eventNonce !== null
        ? Long.fromValue(object.eventNonce)
        : Long.UZERO;
    message.invalidationScope = object.invalidationScope ?? new Uint8Array();
    message.invalidationNonce =
      object.invalidationNonce !== undefined &&
      object.invalidationNonce !== null
        ? Long.fromValue(object.invalidationNonce)
        : Long.UZERO;
    message.ethereumHeight =
      object.ethereumHeight !== undefined && object.ethereumHeight !== null
        ? Long.fromValue(object.ethereumHeight)
        : Long.UZERO;
    return message;
  },
};

function createBaseERC20DeployedEvent(): ERC20DeployedEvent {
  return {
    eventNonce: Long.UZERO,
    tokenContract: "",
    erc20Name: "",
    erc20Symbol: "",
    erc20Decimals: Long.UZERO,
    ethereumHeight: Long.UZERO,
  };
}

export const ERC20DeployedEvent = {
  encode(
    message: ERC20DeployedEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.eventNonce.isZero()) {
      writer.uint32(8).uint64(message.eventNonce);
    }
    if (message.tokenContract !== "") {
      writer.uint32(18).string(message.tokenContract);
    }
    if (message.erc20Name !== "") {
      writer.uint32(26).string(message.erc20Name);
    }
    if (message.erc20Symbol !== "") {
      writer.uint32(34).string(message.erc20Symbol);
    }
    if (!message.erc20Decimals.isZero()) {
      writer.uint32(40).uint64(message.erc20Decimals);
    }
    if (!message.ethereumHeight.isZero()) {
      writer.uint32(48).uint64(message.ethereumHeight);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ERC20DeployedEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseERC20DeployedEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eventNonce = reader.uint64() as Long;
          break;
        case 2:
          message.tokenContract = reader.string();
          break;
        case 3:
          message.erc20Name = reader.string();
          break;
        case 4:
          message.erc20Symbol = reader.string();
          break;
        case 5:
          message.erc20Decimals = reader.uint64() as Long;
          break;
        case 6:
          message.ethereumHeight = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ERC20DeployedEvent {
    return {
      eventNonce: isSet(object.eventNonce)
        ? Long.fromValue(object.eventNonce)
        : Long.UZERO,
      tokenContract: isSet(object.tokenContract)
        ? String(object.tokenContract)
        : "",
      erc20Name: isSet(object.erc20Name) ? String(object.erc20Name) : "",
      erc20Symbol: isSet(object.erc20Symbol) ? String(object.erc20Symbol) : "",
      erc20Decimals: isSet(object.erc20Decimals)
        ? Long.fromValue(object.erc20Decimals)
        : Long.UZERO,
      ethereumHeight: isSet(object.ethereumHeight)
        ? Long.fromValue(object.ethereumHeight)
        : Long.UZERO,
    };
  },

  toJSON(message: ERC20DeployedEvent): unknown {
    const obj: any = {};
    message.eventNonce !== undefined &&
      (obj.eventNonce = (message.eventNonce || Long.UZERO).toString());
    message.tokenContract !== undefined &&
      (obj.tokenContract = message.tokenContract);
    message.erc20Name !== undefined && (obj.erc20Name = message.erc20Name);
    message.erc20Symbol !== undefined &&
      (obj.erc20Symbol = message.erc20Symbol);
    message.erc20Decimals !== undefined &&
      (obj.erc20Decimals = (message.erc20Decimals || Long.UZERO).toString());
    message.ethereumHeight !== undefined &&
      (obj.ethereumHeight = (message.ethereumHeight || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ERC20DeployedEvent>, I>>(
    object: I
  ): ERC20DeployedEvent {
    const message = createBaseERC20DeployedEvent();
    message.eventNonce =
      object.eventNonce !== undefined && object.eventNonce !== null
        ? Long.fromValue(object.eventNonce)
        : Long.UZERO;
    message.tokenContract = object.tokenContract ?? "";
    message.erc20Name = object.erc20Name ?? "";
    message.erc20Symbol = object.erc20Symbol ?? "";
    message.erc20Decimals =
      object.erc20Decimals !== undefined && object.erc20Decimals !== null
        ? Long.fromValue(object.erc20Decimals)
        : Long.UZERO;
    message.ethereumHeight =
      object.ethereumHeight !== undefined && object.ethereumHeight !== null
        ? Long.fromValue(object.ethereumHeight)
        : Long.UZERO;
    return message;
  },
};

function createBaseSignerSetTxExecutedEvent(): SignerSetTxExecutedEvent {
  return {
    eventNonce: Long.UZERO,
    signerSetTxNonce: Long.UZERO,
    ethereumHeight: Long.UZERO,
    members: [],
  };
}

export const SignerSetTxExecutedEvent = {
  encode(
    message: SignerSetTxExecutedEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.eventNonce.isZero()) {
      writer.uint32(8).uint64(message.eventNonce);
    }
    if (!message.signerSetTxNonce.isZero()) {
      writer.uint32(16).uint64(message.signerSetTxNonce);
    }
    if (!message.ethereumHeight.isZero()) {
      writer.uint32(24).uint64(message.ethereumHeight);
    }
    for (const v of message.members) {
      EthereumSigner.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SignerSetTxExecutedEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignerSetTxExecutedEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eventNonce = reader.uint64() as Long;
          break;
        case 2:
          message.signerSetTxNonce = reader.uint64() as Long;
          break;
        case 3:
          message.ethereumHeight = reader.uint64() as Long;
          break;
        case 4:
          message.members.push(EthereumSigner.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SignerSetTxExecutedEvent {
    return {
      eventNonce: isSet(object.eventNonce)
        ? Long.fromValue(object.eventNonce)
        : Long.UZERO,
      signerSetTxNonce: isSet(object.signerSetTxNonce)
        ? Long.fromValue(object.signerSetTxNonce)
        : Long.UZERO,
      ethereumHeight: isSet(object.ethereumHeight)
        ? Long.fromValue(object.ethereumHeight)
        : Long.UZERO,
      members: Array.isArray(object?.members)
        ? object.members.map((e: any) => EthereumSigner.fromJSON(e))
        : [],
    };
  },

  toJSON(message: SignerSetTxExecutedEvent): unknown {
    const obj: any = {};
    message.eventNonce !== undefined &&
      (obj.eventNonce = (message.eventNonce || Long.UZERO).toString());
    message.signerSetTxNonce !== undefined &&
      (obj.signerSetTxNonce = (
        message.signerSetTxNonce || Long.UZERO
      ).toString());
    message.ethereumHeight !== undefined &&
      (obj.ethereumHeight = (message.ethereumHeight || Long.UZERO).toString());
    if (message.members) {
      obj.members = message.members.map((e) =>
        e ? EthereumSigner.toJSON(e) : undefined
      );
    } else {
      obj.members = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SignerSetTxExecutedEvent>, I>>(
    object: I
  ): SignerSetTxExecutedEvent {
    const message = createBaseSignerSetTxExecutedEvent();
    message.eventNonce =
      object.eventNonce !== undefined && object.eventNonce !== null
        ? Long.fromValue(object.eventNonce)
        : Long.UZERO;
    message.signerSetTxNonce =
      object.signerSetTxNonce !== undefined && object.signerSetTxNonce !== null
        ? Long.fromValue(object.signerSetTxNonce)
        : Long.UZERO;
    message.ethereumHeight =
      object.ethereumHeight !== undefined && object.ethereumHeight !== null
        ? Long.fromValue(object.ethereumHeight)
        : Long.UZERO;
    message.members =
      object.members?.map((e) => EthereumSigner.fromPartial(e)) || [];
    return message;
  },
};

/** Msg defines the state transitions possible within gravity */
export interface Msg {
  /** option (google.api.http).post = "/gravity/v1/send_to_ethereum"; */
  SendToEthereum(
    request: DeepPartial<MsgSendToEthereum>,
    metadata?: grpc.Metadata
  ): Promise<MsgSendToEthereumResponse>;
  /** option (google.api.http).post = "/gravity/v1/send_to_ethereum/cancel"; */
  CancelSendToEthereum(
    request: DeepPartial<MsgCancelSendToEthereum>,
    metadata?: grpc.Metadata
  ): Promise<MsgCancelSendToEthereumResponse>;
  /** option (google.api.http).post = "/gravity/v1/batchtx/request"; */
  RequestBatchTx(
    request: DeepPartial<MsgRequestBatchTx>,
    metadata?: grpc.Metadata
  ): Promise<MsgRequestBatchTxResponse>;
  /** option (google.api.http).post = "/gravity/v1/ethereum_signature"; */
  SubmitEthereumTxConfirmation(
    request: DeepPartial<MsgSubmitEthereumTxConfirmation>,
    metadata?: grpc.Metadata
  ): Promise<MsgSubmitEthereumTxConfirmationResponse>;
  /** option (google.api.http).post = "/gravity/v1/ethereum_event"; */
  SubmitEthereumEvent(
    request: DeepPartial<MsgSubmitEthereumEvent>,
    metadata?: grpc.Metadata
  ): Promise<MsgSubmitEthereumEventResponse>;
  /** option (google.api.http).post = "/gravity/v1/delegate_keys"; */
  SetDelegateKeys(
    request: DeepPartial<MsgDelegateKeys>,
    metadata?: grpc.Metadata
  ): Promise<MsgDelegateKeysResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.SendToEthereum = this.SendToEthereum.bind(this);
    this.CancelSendToEthereum = this.CancelSendToEthereum.bind(this);
    this.RequestBatchTx = this.RequestBatchTx.bind(this);
    this.SubmitEthereumTxConfirmation =
      this.SubmitEthereumTxConfirmation.bind(this);
    this.SubmitEthereumEvent = this.SubmitEthereumEvent.bind(this);
    this.SetDelegateKeys = this.SetDelegateKeys.bind(this);
  }

  SendToEthereum(
    request: DeepPartial<MsgSendToEthereum>,
    metadata?: grpc.Metadata
  ): Promise<MsgSendToEthereumResponse> {
    return this.rpc.unary(
      MsgSendToEthereumDesc,
      MsgSendToEthereum.fromPartial(request),
      metadata
    );
  }

  CancelSendToEthereum(
    request: DeepPartial<MsgCancelSendToEthereum>,
    metadata?: grpc.Metadata
  ): Promise<MsgCancelSendToEthereumResponse> {
    return this.rpc.unary(
      MsgCancelSendToEthereumDesc,
      MsgCancelSendToEthereum.fromPartial(request),
      metadata
    );
  }

  RequestBatchTx(
    request: DeepPartial<MsgRequestBatchTx>,
    metadata?: grpc.Metadata
  ): Promise<MsgRequestBatchTxResponse> {
    return this.rpc.unary(
      MsgRequestBatchTxDesc,
      MsgRequestBatchTx.fromPartial(request),
      metadata
    );
  }

  SubmitEthereumTxConfirmation(
    request: DeepPartial<MsgSubmitEthereumTxConfirmation>,
    metadata?: grpc.Metadata
  ): Promise<MsgSubmitEthereumTxConfirmationResponse> {
    return this.rpc.unary(
      MsgSubmitEthereumTxConfirmationDesc,
      MsgSubmitEthereumTxConfirmation.fromPartial(request),
      metadata
    );
  }

  SubmitEthereumEvent(
    request: DeepPartial<MsgSubmitEthereumEvent>,
    metadata?: grpc.Metadata
  ): Promise<MsgSubmitEthereumEventResponse> {
    return this.rpc.unary(
      MsgSubmitEthereumEventDesc,
      MsgSubmitEthereumEvent.fromPartial(request),
      metadata
    );
  }

  SetDelegateKeys(
    request: DeepPartial<MsgDelegateKeys>,
    metadata?: grpc.Metadata
  ): Promise<MsgDelegateKeysResponse> {
    return this.rpc.unary(
      MsgSetDelegateKeysDesc,
      MsgDelegateKeys.fromPartial(request),
      metadata
    );
  }
}

export const MsgDesc = {
  serviceName: "gravity.v1.Msg",
};

export const MsgSendToEthereumDesc: UnaryMethodDefinitionish = {
  methodName: "SendToEthereum",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgSendToEthereum.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgSendToEthereumResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const MsgCancelSendToEthereumDesc: UnaryMethodDefinitionish = {
  methodName: "CancelSendToEthereum",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgCancelSendToEthereum.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgCancelSendToEthereumResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const MsgRequestBatchTxDesc: UnaryMethodDefinitionish = {
  methodName: "RequestBatchTx",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgRequestBatchTx.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgRequestBatchTxResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const MsgSubmitEthereumTxConfirmationDesc: UnaryMethodDefinitionish = {
  methodName: "SubmitEthereumTxConfirmation",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgSubmitEthereumTxConfirmation.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgSubmitEthereumTxConfirmationResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const MsgSubmitEthereumEventDesc: UnaryMethodDefinitionish = {
  methodName: "SubmitEthereumEvent",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgSubmitEthereumEvent.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgSubmitEthereumEventResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const MsgSetDelegateKeysDesc: UnaryMethodDefinitionish = {
  methodName: "SetDelegateKeys",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgDelegateKeys.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgDelegateKeysResponse.decode(data),
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
