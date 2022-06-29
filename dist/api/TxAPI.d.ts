import { BaseAPI } from "./BaseAPI";
import { TxResponse } from "../proto/cosmos/base/abci/v1beta1/abci";
import { BroadcastTxRequest, BroadcastTxResponse } from "../proto/cosmos/tx/v1beta1/service";
export declare class TxAPI extends BaseAPI {
    txInfo(txHash: string): Promise<TxResponse>;
    private _broadcast;
    broadcast(tx: BroadcastTxRequest): Promise<BroadcastTxResponse>;
}
