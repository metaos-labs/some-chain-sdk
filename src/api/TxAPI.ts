import { BaseAPI } from "./BaseAPI";
import { TxResponse } from "../proto/cosmos/base/abci/v1beta1/abci";
import {
  BroadcastMode,
  BroadcastTxRequest,
  BroadcastTxResponse,
} from "../proto/cosmos/tx/v1beta1/service";

export class TxAPI extends BaseAPI {
  public async txInfo(txHash: string): Promise<TxResponse> {
    return this.request.get<TxResponse>(`/cosmos/tx/v1beta1/txs/${txHash}`);
  }

  private async _broadcast<T>(
    tx: BroadcastTxRequest,
    mode: keyof typeof BroadcastMode
  ): Promise<T> {
    return this.request.post<any>(`/cosmos/tx/v1beta1/txs`);
  }

  public async broadcast(tx: BroadcastTxRequest): Promise<BroadcastTxResponse> {
    return this._broadcast<BroadcastTxResponse>(tx, "BROADCAST_MODE_BLOCK");
  }
}
