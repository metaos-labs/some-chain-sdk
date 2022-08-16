import { BaseAPI } from "./BaseAPI";
import { Metadata } from "../proto/cosmos/bank/v1beta1/bank";
import { QueryGetMetadataResponse } from "../proto/token/query";
import {MetadataExt} from "../proto/token/token";

export interface QueryMetadataResponse {
  metadata: Metadata;
  metadataExt?: MetadataExt;
  supply: string;
}

export class TokenAPI extends BaseAPI {

  public async apiTokenMetadatasByDenom(
    denom: string
  ): Promise<QueryMetadataResponse> {
    return this.request.get<QueryMetadataResponse>(
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
