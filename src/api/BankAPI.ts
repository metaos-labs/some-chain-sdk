import { BaseAPI } from "./BaseAPI";
import { IToken } from "../types";

export interface IResBalances {
  balance: {
    denom: string;
    amount: string;
  };
}

export class BankAPI extends BaseAPI {
  public async apiTokenBalance(
    token: IToken,
    accountAddress: string
  ): Promise<IResBalances> {
    return this.request.get<IResBalances>(
      `/cosmos/bank/v1beta1/balances/${accountAddress}/by_denom`,
      {
        denom: token.base,
      }
    );
  }

  public async apiAccountBalance(
    accountAddress: string
  ): Promise<IResBalances> {
    return this.request.get<IResBalances>(
      `/cosmos/bank/v1beta1/balances/${accountAddress}`
    );
  }

  public async apiDenomMetadata(
    denom: string
  ): Promise<IToken> {
    return this.request.get<IToken>(
      `/cosmos/bank/v1beta1/denom_metadata/${denom}`
    );
  }
}
