import { APIRequester, TokenAPI, TxAPI, BankAPI, AuthAPI, SwapAPI } from "../api";
export declare class APIClient {
    apiRequester: APIRequester;
    bankAPI: BankAPI;
    authAPI: AuthAPI;
    swapAPI: SwapAPI;
    txAPI: TxAPI;
    tokenAPI: TokenAPI;
    nodeUrl: string;
    constructor(URL: string, chainId?: string);
}
