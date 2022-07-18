import {
  APIRequester,
  TokenAPI,
  TxAPI,
  BankAPI,
  AuthAPI,
  SwapAPI
} from "../api";
import { CONFIG_CHAIN_SOPHON } from "../constants";

export class APIClient {
  public apiRequester: APIRequester;

  // API access
  public bankAPI: BankAPI;
  public authAPI: AuthAPI;
  public swapAPI: SwapAPI;
  public txAPI: TxAPI;
  public tokenAPI: TokenAPI;
  public nodeUrl: string;

  constructor(URL: string, chainId: string = CONFIG_CHAIN_SOPHON.CHAIN_ID) {
    this.nodeUrl = URL;
    this.apiRequester = new APIRequester(URL);

    // instantiate APIs
    this.bankAPI = new BankAPI(this.apiRequester);
    this.authAPI = new AuthAPI(this.apiRequester);
    this.tokenAPI = new TokenAPI(this.apiRequester);
    this.swapAPI = new SwapAPI(this.apiRequester);
    this.txAPI = new TxAPI(this.apiRequester);
  }
}
