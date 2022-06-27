import { Keccak } from "sha3";
import invariant from "tiny-invariant";
import { APIClient } from "../index";
import { Buffer } from "buffer";
import { CONFIG_CHAIN_SOPHON } from "../constants";
import {
  EncodeObject,
  GeneratedType,
  OfflineSigner,
  Registry,
  TxBodyEncodeObject,
} from "@cosmjs/proto-signing";
import { Any } from "cosmjs-types/google/protobuf/any";
import {
  BaseMsg,
  MsgCollect,
  MsgCollectReward,
  MsgCreatePool,
  MsgCreatePosition,
  MsgDecreaseLiquidity,
  MsgIncreaseLiquidity,
  MsgSwapExactIn,
  MsgSwapExactOut,
} from "../msgs";
import { SigningStargateClient } from "@cosmjs/stargate";
import { PubKey } from "../proto/cosmos/crypto/secp256k1/keys";
import {
  SignerInfo,
  ModeInfo,
  ModeInfo_Single,
  TxBody,
  Fee,
  AuthInfo,
  SignDoc,
  TxRaw,
} from "../proto/cosmos/tx/v1beta1/tx";
import { SignMode } from "../proto/cosmos/tx/signing/v1beta1/signing";
import { Coin } from "../proto/cosmos/base/v1beta1/coin";
import { fromBase64 } from "@cosmjs/encoding";

export interface ISender {
  address: string;
  pubkey: string;
  accountNumber: number;
  sequence: number;
}

// FIXME
export interface TxGenerated {
  signDirect: {
    body: TxBodyEncodeObject;
    authInfo: AuthInfo;
    signBytes: string;
  };
}

export const SIGN_DIRECT = SignMode.SIGN_MODE_DIRECT;

// const defaultFee: StdFee = {
//   amount: [],
//   gas: CONFIG_CHAIN_SOPHON.DEFAULT_GAS,
// };

const defaultFee = {
  amount: "",
  denom: CONFIG_CHAIN_SOPHON.COIN_DENOM,
  gas: CONFIG_CHAIN_SOPHON.DEFAULT_GAS as number,
};

export class TxClient {
  public apiClient: APIClient;
  public rpcUrl: string;
  public accountAddress: string;
  public signer: OfflineSigner;
  public registry: Registry;

  // public walletClient: SigningStargateClient | null = null;
  // public sender: ISender | null = null;

  constructor(
    apiClient: APIClient,
    rpcUrl: string,
    signer: OfflineSigner,
    accountAddress: string
  ) {
    invariant(!!signer, "wallet is required!");

    this.apiClient = apiClient;
    this.rpcUrl = rpcUrl;
    this.signer = signer;
    this.accountAddress = accountAddress;

    const registryTypes = new Map<string, GeneratedType>();
    registryTypes.set(MsgCollect.typeUrl, MsgCollect.Proto);
    registryTypes.set(MsgCollectReward.typeUrl, MsgCollectReward.Proto);
    registryTypes.set(MsgCreatePool.typeUrl, MsgCreatePool.Proto);
    registryTypes.set(MsgCreatePosition.typeUrl, MsgCreatePosition.Proto);
    registryTypes.set(MsgDecreaseLiquidity.typeUrl, MsgDecreaseLiquidity.Proto);
    registryTypes.set(MsgIncreaseLiquidity.typeUrl, MsgIncreaseLiquidity.Proto);
    registryTypes.set(MsgSwapExactIn.typeUrl, MsgSwapExactIn.Proto);
    registryTypes.set(MsgSwapExactOut.typeUrl, MsgSwapExactOut.Proto);

    this.registry = new Registry(registryTypes);
  }

  public async getSender(): Promise<ISender> {
    const { authAPI } = this.apiClient;
    const {
      account: {
        base_account: {
          pub_key: { key },
          account_number,
          sequence,
        },
      },
    } = await authAPI.apiAccountInfo(this.accountAddress);
    return {
      address: this.accountAddress,
      pubkey: key,
      accountNumber: parseInt(account_number),
      sequence: parseInt(sequence),
    } as ISender;
  }

  public async sendTransaction(
    messages: BaseMsg | Array<BaseMsg>,
    memo: string = ""
    // fee: string,
    // denom: string,
    // gasLimit: number,
  ) {
    const sender = await this.getSender();
    const pubKeyDecoded = Buffer.from(sender.pubkey, "base64");

    // 1. SignDirect
    const signInfoDirect = createSignerInfo(
      new Uint8Array(pubKeyDecoded),
      sender.sequence,
      SIGN_DIRECT
    );

    // 2. Fee
    const feeMessage = createFee(
      defaultFee.amount,
      defaultFee.denom,
      defaultFee.gas
    );

    // 3. authInfo
    const authInfoDirect = createAuthInfo(signInfoDirect, feeMessage);

    // console.log(AuthInfo.encode(authInfoDirect).finish());

    // 4. txbody
    // const body = createBodyWithMultipleMessages(messages, memo);
    const _messages = messages instanceof Array ? messages : [messages];
    const body = createTxBodyEncodeObject(_messages, memo);

    // 5. signDoc
    const signDocDirect = createSigDoc(
      this.registry.encode(body),
      AuthInfo.encode(authInfoDirect).finish(),
      CONFIG_CHAIN_SOPHON.CHAIN_ID,
      sender.accountNumber
    );

    let walletClient;
    walletClient = await SigningStargateClient.connectWithSigner(
      this.rpcUrl,
      this.signer,
      {
        registry: this.registry,
        prefix: CONFIG_CHAIN_SOPHON.COIN_MINIMAL_DENOM.toLowerCase(),
      }
    );
    // @ts-ignore
    const { signed, signature } = await walletClient.signer.signDirect(
      this.accountAddress,
      signDocDirect
    );

    const txRaw = TxRaw.fromPartial({
      bodyBytes: signed.bodyBytes,
      authInfoBytes: signed.authInfoBytes,
      signatures: [fromBase64(signature.signature)],
    });
    const txBytes = TxRaw.encode(txRaw).finish();

    return walletClient.broadcastTx(txBytes);
  }

  // public async signTransaction(
  //   tx: TxGenerated,
  //   broadcastMode: string = 'BROADCAST_MODE_BLOCK',
  // ) {
  //   const dataToSign = `0x${Buffer.from(
  //     tx.signDirect.signBytes,
  //     'base64',
  //   ).toString('hex')}`
  //
  //   /* eslint-disable no-underscore-dangle */
  //   const signatureRaw = wallet._signingKey().signDigest(dataToSign)
  //   const splitedSignature = splitSignature(signatureRaw)
  //   const signature = arrayify(concat([splitedSignature.r, splitedSignature.s]))
  //
  //   const signedTx = createTxRaw(
  //     tx.signDirect.body.serializeBinary(),
  //     tx.signDirect.authInfo.serializeBinary(),
  //     [signature],
  //   )
  //   const body = `{ "tx_bytes": [${signedTx.message
  //     .serializeBinary()
  //     .toString()}], "mode": "${broadcastMode}" }`
  //
  //   return body
  // }
}

export function createTxBodyEncodeObject(
  messages: Array<BaseMsg>,
  memo: string
): TxBodyEncodeObject {
  const results = messages.map((item) => {
    return item.generateMessage();
  });
  return {
    typeUrl: "/cosmos.tx.v1beta1.TxBody",
    value: {
      messages: results,
      memo: memo,
    },
  };
}

export function createSigDoc(
  bodyBytes: Uint8Array,
  authInfoBytes: Uint8Array,
  chainId: string,
  accountNumber: number
) {
  return SignDoc.fromPartial({
    bodyBytes,
    authInfoBytes,
    chainId,
    accountNumber,
  });
}

function createAuthInfo(signerInfo: SignerInfo, fee: Fee) {
  return AuthInfo.fromPartial({
    signerInfos: [signerInfo],
    fee,
  });
}

function createFee(fee: string, denom: string, gasLimit: number) {
  return Fee.fromPartial({
    amount: [
      Coin.fromPartial({
        denom,
        amount: fee,
      }),
    ],
    gasLimit,
  });
}

function createSignerInfo(
  publicKey: Uint8Array,
  sequence: number,
  mode: number
) {
  const pubkey = Any.fromPartial({
    typeUrl: "/ethermint.crypto.v1.ethsecp256k1.PubKey",
    value: PubKey.encode({
      key: publicKey,
    }).finish(),
  });
  const signerInfo = SignerInfo.fromPartial({
    publicKey: pubkey,
    modeInfo: ModeInfo.fromPartial({
      single: ModeInfo_Single.fromPartial({
        mode,
      }),
    }),
    sequence,
  });

  return signerInfo;
}
