/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Any } from "../../google/protobuf/any";

export const protobufPackage = "gravity.v1";

/**
 * EthereumEventVoteRecord is an event that is pending of confirmation by 2/3 of
 * the signer set. The event is then attested and executed in the state machine
 * once the required threshold is met.
 */
export interface EthereumEventVoteRecord {
  event?: Any;
  votes: string[];
  accepted: boolean;
}

/**
 * LatestEthereumBlockHeight defines the latest observed ethereum block height
 * and the corresponding timestamp value in nanoseconds.
 */
export interface LatestEthereumBlockHeight {
  ethereumHeight: Long;
  cosmosHeight: Long;
}

/**
 * EthereumSigner represents a cosmos validator with its corresponding bridge
 * operator ethereum address and its staking consensus power.
 */
export interface EthereumSigner {
  power: Long;
  ethereumAddress: string;
}

/**
 * SignerSetTx is the Ethereum Bridge multisig set that relays
 * transactions the two chains. The staking validators keep ethereum keys which
 * are used to check signatures on Ethereum in order to get significant gas
 * savings.
 */
export interface SignerSetTx {
  nonce: Long;
  height: Long;
  signers: EthereumSigner[];
}

/**
 * BatchTx represents a batch of transactions going from Cosmos to Ethereum.
 * Batch txs are are identified by a unique hash and the token contract that is
 * shared by all the SendToEthereum
 */
export interface BatchTx {
  batchNonce: Long;
  timeout: Long;
  transactions: SendToEthereum[];
  tokenContract: string;
  height: Long;
}

/**
 * SendToEthereum represents an individual SendToEthereum from Cosmos to
 * Ethereum
 */
export interface SendToEthereum {
  id: Long;
  sender: string;
  ethereumRecipient: string;
  erc20Token?: ERC20Token;
  erc20Fee?: ERC20Token;
}

/**
 * ContractCallTx represents an individual arbitrary logic call transaction
 * from Cosmos to Ethereum.
 */
export interface ContractCallTx {
  invalidationNonce: Long;
  invalidationScope: Uint8Array;
  address: string;
  payload: Uint8Array;
  timeout: Long;
  tokens: ERC20Token[];
  fees: ERC20Token[];
  height: Long;
}

export interface ERC20Token {
  contract: string;
  amount: string;
}

export interface IDSet {
  ids: Long[];
}

function createBaseEthereumEventVoteRecord(): EthereumEventVoteRecord {
  return { event: undefined, votes: [], accepted: false };
}

export const EthereumEventVoteRecord = {
  encode(
    message: EthereumEventVoteRecord,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.event !== undefined) {
      Any.encode(message.event, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.votes) {
      writer.uint32(18).string(v!);
    }
    if (message.accepted === true) {
      writer.uint32(24).bool(message.accepted);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): EthereumEventVoteRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEthereumEventVoteRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.event = Any.decode(reader, reader.uint32());
          break;
        case 2:
          message.votes.push(reader.string());
          break;
        case 3:
          message.accepted = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EthereumEventVoteRecord {
    return {
      event: isSet(object.event) ? Any.fromJSON(object.event) : undefined,
      votes: Array.isArray(object?.votes)
        ? object.votes.map((e: any) => String(e))
        : [],
      accepted: isSet(object.accepted) ? Boolean(object.accepted) : false,
    };
  },

  toJSON(message: EthereumEventVoteRecord): unknown {
    const obj: any = {};
    message.event !== undefined &&
      (obj.event = message.event ? Any.toJSON(message.event) : undefined);
    if (message.votes) {
      obj.votes = message.votes.map((e) => e);
    } else {
      obj.votes = [];
    }
    message.accepted !== undefined && (obj.accepted = message.accepted);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EthereumEventVoteRecord>, I>>(
    object: I
  ): EthereumEventVoteRecord {
    const message = createBaseEthereumEventVoteRecord();
    message.event =
      object.event !== undefined && object.event !== null
        ? Any.fromPartial(object.event)
        : undefined;
    message.votes = object.votes?.map((e) => e) || [];
    message.accepted = object.accepted ?? false;
    return message;
  },
};

function createBaseLatestEthereumBlockHeight(): LatestEthereumBlockHeight {
  return { ethereumHeight: Long.UZERO, cosmosHeight: Long.UZERO };
}

export const LatestEthereumBlockHeight = {
  encode(
    message: LatestEthereumBlockHeight,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.ethereumHeight.isZero()) {
      writer.uint32(8).uint64(message.ethereumHeight);
    }
    if (!message.cosmosHeight.isZero()) {
      writer.uint32(16).uint64(message.cosmosHeight);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): LatestEthereumBlockHeight {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLatestEthereumBlockHeight();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ethereumHeight = reader.uint64() as Long;
          break;
        case 2:
          message.cosmosHeight = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LatestEthereumBlockHeight {
    return {
      ethereumHeight: isSet(object.ethereumHeight)
        ? Long.fromValue(object.ethereumHeight)
        : Long.UZERO,
      cosmosHeight: isSet(object.cosmosHeight)
        ? Long.fromValue(object.cosmosHeight)
        : Long.UZERO,
    };
  },

  toJSON(message: LatestEthereumBlockHeight): unknown {
    const obj: any = {};
    message.ethereumHeight !== undefined &&
      (obj.ethereumHeight = (message.ethereumHeight || Long.UZERO).toString());
    message.cosmosHeight !== undefined &&
      (obj.cosmosHeight = (message.cosmosHeight || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LatestEthereumBlockHeight>, I>>(
    object: I
  ): LatestEthereumBlockHeight {
    const message = createBaseLatestEthereumBlockHeight();
    message.ethereumHeight =
      object.ethereumHeight !== undefined && object.ethereumHeight !== null
        ? Long.fromValue(object.ethereumHeight)
        : Long.UZERO;
    message.cosmosHeight =
      object.cosmosHeight !== undefined && object.cosmosHeight !== null
        ? Long.fromValue(object.cosmosHeight)
        : Long.UZERO;
    return message;
  },
};

function createBaseEthereumSigner(): EthereumSigner {
  return { power: Long.UZERO, ethereumAddress: "" };
}

export const EthereumSigner = {
  encode(
    message: EthereumSigner,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.power.isZero()) {
      writer.uint32(8).uint64(message.power);
    }
    if (message.ethereumAddress !== "") {
      writer.uint32(18).string(message.ethereumAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EthereumSigner {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEthereumSigner();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.power = reader.uint64() as Long;
          break;
        case 2:
          message.ethereumAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EthereumSigner {
    return {
      power: isSet(object.power) ? Long.fromValue(object.power) : Long.UZERO,
      ethereumAddress: isSet(object.ethereumAddress)
        ? String(object.ethereumAddress)
        : "",
    };
  },

  toJSON(message: EthereumSigner): unknown {
    const obj: any = {};
    message.power !== undefined &&
      (obj.power = (message.power || Long.UZERO).toString());
    message.ethereumAddress !== undefined &&
      (obj.ethereumAddress = message.ethereumAddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EthereumSigner>, I>>(
    object: I
  ): EthereumSigner {
    const message = createBaseEthereumSigner();
    message.power =
      object.power !== undefined && object.power !== null
        ? Long.fromValue(object.power)
        : Long.UZERO;
    message.ethereumAddress = object.ethereumAddress ?? "";
    return message;
  },
};

function createBaseSignerSetTx(): SignerSetTx {
  return { nonce: Long.UZERO, height: Long.UZERO, signers: [] };
}

export const SignerSetTx = {
  encode(
    message: SignerSetTx,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.nonce.isZero()) {
      writer.uint32(8).uint64(message.nonce);
    }
    if (!message.height.isZero()) {
      writer.uint32(16).uint64(message.height);
    }
    for (const v of message.signers) {
      EthereumSigner.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SignerSetTx {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignerSetTx();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nonce = reader.uint64() as Long;
          break;
        case 2:
          message.height = reader.uint64() as Long;
          break;
        case 3:
          message.signers.push(EthereumSigner.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SignerSetTx {
    return {
      nonce: isSet(object.nonce) ? Long.fromValue(object.nonce) : Long.UZERO,
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.UZERO,
      signers: Array.isArray(object?.signers)
        ? object.signers.map((e: any) => EthereumSigner.fromJSON(e))
        : [],
    };
  },

  toJSON(message: SignerSetTx): unknown {
    const obj: any = {};
    message.nonce !== undefined &&
      (obj.nonce = (message.nonce || Long.UZERO).toString());
    message.height !== undefined &&
      (obj.height = (message.height || Long.UZERO).toString());
    if (message.signers) {
      obj.signers = message.signers.map((e) =>
        e ? EthereumSigner.toJSON(e) : undefined
      );
    } else {
      obj.signers = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SignerSetTx>, I>>(
    object: I
  ): SignerSetTx {
    const message = createBaseSignerSetTx();
    message.nonce =
      object.nonce !== undefined && object.nonce !== null
        ? Long.fromValue(object.nonce)
        : Long.UZERO;
    message.height =
      object.height !== undefined && object.height !== null
        ? Long.fromValue(object.height)
        : Long.UZERO;
    message.signers =
      object.signers?.map((e) => EthereumSigner.fromPartial(e)) || [];
    return message;
  },
};

function createBaseBatchTx(): BatchTx {
  return {
    batchNonce: Long.UZERO,
    timeout: Long.UZERO,
    transactions: [],
    tokenContract: "",
    height: Long.UZERO,
  };
}

export const BatchTx = {
  encode(
    message: BatchTx,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.batchNonce.isZero()) {
      writer.uint32(8).uint64(message.batchNonce);
    }
    if (!message.timeout.isZero()) {
      writer.uint32(16).uint64(message.timeout);
    }
    for (const v of message.transactions) {
      SendToEthereum.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.tokenContract !== "") {
      writer.uint32(34).string(message.tokenContract);
    }
    if (!message.height.isZero()) {
      writer.uint32(40).uint64(message.height);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BatchTx {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBatchTx();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.batchNonce = reader.uint64() as Long;
          break;
        case 2:
          message.timeout = reader.uint64() as Long;
          break;
        case 3:
          message.transactions.push(
            SendToEthereum.decode(reader, reader.uint32())
          );
          break;
        case 4:
          message.tokenContract = reader.string();
          break;
        case 5:
          message.height = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BatchTx {
    return {
      batchNonce: isSet(object.batchNonce)
        ? Long.fromValue(object.batchNonce)
        : Long.UZERO,
      timeout: isSet(object.timeout)
        ? Long.fromValue(object.timeout)
        : Long.UZERO,
      transactions: Array.isArray(object?.transactions)
        ? object.transactions.map((e: any) => SendToEthereum.fromJSON(e))
        : [],
      tokenContract: isSet(object.tokenContract)
        ? String(object.tokenContract)
        : "",
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.UZERO,
    };
  },

  toJSON(message: BatchTx): unknown {
    const obj: any = {};
    message.batchNonce !== undefined &&
      (obj.batchNonce = (message.batchNonce || Long.UZERO).toString());
    message.timeout !== undefined &&
      (obj.timeout = (message.timeout || Long.UZERO).toString());
    if (message.transactions) {
      obj.transactions = message.transactions.map((e) =>
        e ? SendToEthereum.toJSON(e) : undefined
      );
    } else {
      obj.transactions = [];
    }
    message.tokenContract !== undefined &&
      (obj.tokenContract = message.tokenContract);
    message.height !== undefined &&
      (obj.height = (message.height || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BatchTx>, I>>(object: I): BatchTx {
    const message = createBaseBatchTx();
    message.batchNonce =
      object.batchNonce !== undefined && object.batchNonce !== null
        ? Long.fromValue(object.batchNonce)
        : Long.UZERO;
    message.timeout =
      object.timeout !== undefined && object.timeout !== null
        ? Long.fromValue(object.timeout)
        : Long.UZERO;
    message.transactions =
      object.transactions?.map((e) => SendToEthereum.fromPartial(e)) || [];
    message.tokenContract = object.tokenContract ?? "";
    message.height =
      object.height !== undefined && object.height !== null
        ? Long.fromValue(object.height)
        : Long.UZERO;
    return message;
  },
};

function createBaseSendToEthereum(): SendToEthereum {
  return {
    id: Long.UZERO,
    sender: "",
    ethereumRecipient: "",
    erc20Token: undefined,
    erc20Fee: undefined,
  };
}

export const SendToEthereum = {
  encode(
    message: SendToEthereum,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    if (message.ethereumRecipient !== "") {
      writer.uint32(26).string(message.ethereumRecipient);
    }
    if (message.erc20Token !== undefined) {
      ERC20Token.encode(message.erc20Token, writer.uint32(34).fork()).ldelim();
    }
    if (message.erc20Fee !== undefined) {
      ERC20Token.encode(message.erc20Fee, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SendToEthereum {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSendToEthereum();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64() as Long;
          break;
        case 2:
          message.sender = reader.string();
          break;
        case 3:
          message.ethereumRecipient = reader.string();
          break;
        case 4:
          message.erc20Token = ERC20Token.decode(reader, reader.uint32());
          break;
        case 5:
          message.erc20Fee = ERC20Token.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SendToEthereum {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      sender: isSet(object.sender) ? String(object.sender) : "",
      ethereumRecipient: isSet(object.ethereumRecipient)
        ? String(object.ethereumRecipient)
        : "",
      erc20Token: isSet(object.erc20Token)
        ? ERC20Token.fromJSON(object.erc20Token)
        : undefined,
      erc20Fee: isSet(object.erc20Fee)
        ? ERC20Token.fromJSON(object.erc20Fee)
        : undefined,
    };
  },

  toJSON(message: SendToEthereum): unknown {
    const obj: any = {};
    message.id !== undefined &&
      (obj.id = (message.id || Long.UZERO).toString());
    message.sender !== undefined && (obj.sender = message.sender);
    message.ethereumRecipient !== undefined &&
      (obj.ethereumRecipient = message.ethereumRecipient);
    message.erc20Token !== undefined &&
      (obj.erc20Token = message.erc20Token
        ? ERC20Token.toJSON(message.erc20Token)
        : undefined);
    message.erc20Fee !== undefined &&
      (obj.erc20Fee = message.erc20Fee
        ? ERC20Token.toJSON(message.erc20Fee)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SendToEthereum>, I>>(
    object: I
  ): SendToEthereum {
    const message = createBaseSendToEthereum();
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromValue(object.id)
        : Long.UZERO;
    message.sender = object.sender ?? "";
    message.ethereumRecipient = object.ethereumRecipient ?? "";
    message.erc20Token =
      object.erc20Token !== undefined && object.erc20Token !== null
        ? ERC20Token.fromPartial(object.erc20Token)
        : undefined;
    message.erc20Fee =
      object.erc20Fee !== undefined && object.erc20Fee !== null
        ? ERC20Token.fromPartial(object.erc20Fee)
        : undefined;
    return message;
  },
};

function createBaseContractCallTx(): ContractCallTx {
  return {
    invalidationNonce: Long.UZERO,
    invalidationScope: new Uint8Array(),
    address: "",
    payload: new Uint8Array(),
    timeout: Long.UZERO,
    tokens: [],
    fees: [],
    height: Long.UZERO,
  };
}

export const ContractCallTx = {
  encode(
    message: ContractCallTx,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.invalidationNonce.isZero()) {
      writer.uint32(8).uint64(message.invalidationNonce);
    }
    if (message.invalidationScope.length !== 0) {
      writer.uint32(18).bytes(message.invalidationScope);
    }
    if (message.address !== "") {
      writer.uint32(26).string(message.address);
    }
    if (message.payload.length !== 0) {
      writer.uint32(34).bytes(message.payload);
    }
    if (!message.timeout.isZero()) {
      writer.uint32(40).uint64(message.timeout);
    }
    for (const v of message.tokens) {
      ERC20Token.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.fees) {
      ERC20Token.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (!message.height.isZero()) {
      writer.uint32(64).uint64(message.height);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ContractCallTx {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContractCallTx();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.invalidationNonce = reader.uint64() as Long;
          break;
        case 2:
          message.invalidationScope = reader.bytes();
          break;
        case 3:
          message.address = reader.string();
          break;
        case 4:
          message.payload = reader.bytes();
          break;
        case 5:
          message.timeout = reader.uint64() as Long;
          break;
        case 6:
          message.tokens.push(ERC20Token.decode(reader, reader.uint32()));
          break;
        case 7:
          message.fees.push(ERC20Token.decode(reader, reader.uint32()));
          break;
        case 8:
          message.height = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ContractCallTx {
    return {
      invalidationNonce: isSet(object.invalidationNonce)
        ? Long.fromValue(object.invalidationNonce)
        : Long.UZERO,
      invalidationScope: isSet(object.invalidationScope)
        ? bytesFromBase64(object.invalidationScope)
        : new Uint8Array(),
      address: isSet(object.address) ? String(object.address) : "",
      payload: isSet(object.payload)
        ? bytesFromBase64(object.payload)
        : new Uint8Array(),
      timeout: isSet(object.timeout)
        ? Long.fromValue(object.timeout)
        : Long.UZERO,
      tokens: Array.isArray(object?.tokens)
        ? object.tokens.map((e: any) => ERC20Token.fromJSON(e))
        : [],
      fees: Array.isArray(object?.fees)
        ? object.fees.map((e: any) => ERC20Token.fromJSON(e))
        : [],
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.UZERO,
    };
  },

  toJSON(message: ContractCallTx): unknown {
    const obj: any = {};
    message.invalidationNonce !== undefined &&
      (obj.invalidationNonce = (
        message.invalidationNonce || Long.UZERO
      ).toString());
    message.invalidationScope !== undefined &&
      (obj.invalidationScope = base64FromBytes(
        message.invalidationScope !== undefined
          ? message.invalidationScope
          : new Uint8Array()
      ));
    message.address !== undefined && (obj.address = message.address);
    message.payload !== undefined &&
      (obj.payload = base64FromBytes(
        message.payload !== undefined ? message.payload : new Uint8Array()
      ));
    message.timeout !== undefined &&
      (obj.timeout = (message.timeout || Long.UZERO).toString());
    if (message.tokens) {
      obj.tokens = message.tokens.map((e) =>
        e ? ERC20Token.toJSON(e) : undefined
      );
    } else {
      obj.tokens = [];
    }
    if (message.fees) {
      obj.fees = message.fees.map((e) =>
        e ? ERC20Token.toJSON(e) : undefined
      );
    } else {
      obj.fees = [];
    }
    message.height !== undefined &&
      (obj.height = (message.height || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ContractCallTx>, I>>(
    object: I
  ): ContractCallTx {
    const message = createBaseContractCallTx();
    message.invalidationNonce =
      object.invalidationNonce !== undefined &&
      object.invalidationNonce !== null
        ? Long.fromValue(object.invalidationNonce)
        : Long.UZERO;
    message.invalidationScope = object.invalidationScope ?? new Uint8Array();
    message.address = object.address ?? "";
    message.payload = object.payload ?? new Uint8Array();
    message.timeout =
      object.timeout !== undefined && object.timeout !== null
        ? Long.fromValue(object.timeout)
        : Long.UZERO;
    message.tokens = object.tokens?.map((e) => ERC20Token.fromPartial(e)) || [];
    message.fees = object.fees?.map((e) => ERC20Token.fromPartial(e)) || [];
    message.height =
      object.height !== undefined && object.height !== null
        ? Long.fromValue(object.height)
        : Long.UZERO;
    return message;
  },
};

function createBaseERC20Token(): ERC20Token {
  return { contract: "", amount: "" };
}

export const ERC20Token = {
  encode(
    message: ERC20Token,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contract !== "") {
      writer.uint32(10).string(message.contract);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ERC20Token {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseERC20Token();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contract = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ERC20Token {
    return {
      contract: isSet(object.contract) ? String(object.contract) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
    };
  },

  toJSON(message: ERC20Token): unknown {
    const obj: any = {};
    message.contract !== undefined && (obj.contract = message.contract);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ERC20Token>, I>>(
    object: I
  ): ERC20Token {
    const message = createBaseERC20Token();
    message.contract = object.contract ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
};

function createBaseIDSet(): IDSet {
  return { ids: [] };
}

export const IDSet = {
  encode(message: IDSet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.ids) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IDSet {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIDSet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.ids.push(reader.uint64() as Long);
            }
          } else {
            message.ids.push(reader.uint64() as Long);
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): IDSet {
    return {
      ids: Array.isArray(object?.ids)
        ? object.ids.map((e: any) => Long.fromValue(e))
        : [],
    };
  },

  toJSON(message: IDSet): unknown {
    const obj: any = {};
    if (message.ids) {
      obj.ids = message.ids.map((e) => (e || Long.UZERO).toString());
    } else {
      obj.ids = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<IDSet>, I>>(object: I): IDSet {
    const message = createBaseIDSet();
    message.ids = object.ids?.map((e) => Long.fromValue(e)) || [];
    return message;
  },
};

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
