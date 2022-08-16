import { BaseAPI } from "./BaseAPI";
import { IToken } from "../types";
export interface IResBalances {
    balance: {
        denom: string;
        amount: string;
    };
}
export declare class BankAPI extends BaseAPI {
    apiTokenBalance(token: IToken, accountAddress: string): Promise<IResBalances>;
    apiAccountBalance(accountAddress: string): Promise<IResBalances>;
    apiDenomMetadata(denom: string): Promise<IToken>;
}
