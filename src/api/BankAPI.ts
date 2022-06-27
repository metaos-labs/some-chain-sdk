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
        denom: token.denom,
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
}
