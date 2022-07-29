import { APIRequester, TokenAPI, TxAPI, BankAPI, AuthAPI, SwapAPI } from "../api";
import { Chain_Id } from "../constants";
export declare class APIClient {
    apiRequester: APIRequester;
    bankAPI: BankAPI;
    authAPI: AuthAPI;
    swapAPI: SwapAPI;
    txAPI: TxAPI;
    tokenAPI: TokenAPI;
    nodeUrl: string;
    constructor(URL: string, chainId?: Chain_Id);
}
