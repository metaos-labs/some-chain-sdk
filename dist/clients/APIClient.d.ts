import { APIRequester, TxAPI } from "../api";
import { BankAPI, AuthAPI, SwapAPI } from "../api";
export declare class APIClient {
    apiRequester: APIRequester;
    bankAPI: BankAPI;
    authAPI: AuthAPI;
    swapAPI: SwapAPI;
    txAPI: TxAPI;
    nodeUrl: string;
    constructor(URL: string, chainId?: string);
}
