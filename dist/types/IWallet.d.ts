import { DeliverTxResponse } from "@cosmjs/stargate";
import { Transaction_Status } from "./ICommon";
export declare type DeepPartial<T> = T extends object ? {
    [P in keyof T]?: DeepPartial<T[P]>;
} : T;
export declare type BroadcastResult = DeliverTxResponse;
export interface ITransaction {
    transactionHash: string;
    description: string;
    status: Transaction_Status;
}
export declare function longToNumber(long: Long): number;
