import { BaseAPI } from "./BaseAPI";
import { Metadata } from "../proto/cosmos/bank/v1beta1/bank";
import { QueryGetMetadataResponse } from "../proto/token/query";

export class TokenAPI extends BaseAPI {

  public async apiTokenMetadatasByDenom(
    denom: string
  ): Promise<QueryGetMetadataResponse> {
    return this.request.get<QueryGetMetadataResponse>(
      `/metaos-labs/metaos/token/metadatas/by_denom`,
      {
        denom
      }
    );
  }

  public async apiTokenMetadatas(): Promise<Array<Metadata>> {
    return this.request.get<Array<Metadata>>(
      `/metaos-labs/metaos/token/metadatas`
    );
  }

}
