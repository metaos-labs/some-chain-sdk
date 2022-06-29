import { APIClient } from "../index";
import { OfflineSigner, Registry, TxBodyEncodeObject } from "@cosmjs/proto-signing";
import { BaseMsg } from "../msgs";
import { AuthInfo, SignDoc } from "../proto/cosmos/tx/v1beta1/tx";
import { SignMode } from "../proto/cosmos/tx/signing/v1beta1/signing";
export interface ISender {
    address: string;
    pubkey: string;
    accountNumber: number;
    sequence: number;
}
export interface TxGenerated {
    signDirect: {
        body: TxBodyEncodeObject;
        authInfo: AuthInfo;
        signBytes: string;
    };
}
export declare const SIGN_DIRECT = SignMode.SIGN_MODE_DIRECT;
export declare class TxClient {
    apiClient: APIClient;
    rpcUrl: string;
    accountAddress: string;
    signer: OfflineSigner;
    registry: Registry;
    constructor(apiClient: APIClient, rpcUrl: string, signer: OfflineSigner, accountAddress: string);
    getSender(): Promise<ISender>;
    sendTransaction(messages: BaseMsg | Array<BaseMsg>, memo?: string): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
}
export declare function createTxBodyEncodeObject(messages: Array<BaseMsg>, memo: string): TxBodyEncodeObject;
export declare function createSigDoc(bodyBytes: Uint8Array, authInfoBytes: Uint8Array, chainId: string, accountNumber: number): SignDoc;
