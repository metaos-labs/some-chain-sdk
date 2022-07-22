import { BaseAPI } from "./BaseAPI";
import { TxResponse } from "../proto/cosmos/base/abci/v1beta1/abci";
import { BroadcastTxRequest, BroadcastTxResponse } from "../proto/cosmos/tx/v1beta1/service";
export interface IResEstimateGas {
    gas_info: {
        gas_wanted: string;
        gas_used: string;
    };
    result: {
        data: string;
        log: string;
        events: {
            type: string;
            attributes: {
                key: string;
                value: string;
            }[];
        }[];
    };
}
export declare class TxAPI extends BaseAPI {
    estimateGas(txBytes: string): Promise<IResEstimateGas>;
    private _broadcast;
    broadcast(tx: BroadcastTxRequest): Promise<BroadcastTxResponse>;
    txInfo(txHash: string): Promise<TxResponse>;
}
