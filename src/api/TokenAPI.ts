import { BaseAPI } from "./BaseAPI";
import { Metadata } from "../proto/cosmos/bank/v1beta1/bank";

export class TokenAPI extends BaseAPI {

  public async apiTokenMetadatasByDenom(
    denom: string
  ): Promise<Metadata> {
    return this.request.get<Metadata>(
      `/sophon-labs/sophon/token/metadatas/by_denom`,
      {
        denom
      }
    );
  }

  public async apiTokenMetadatas(): Promise<Array<Metadata>> {
    return this.request.get<Array<Metadata>>(
      `/sophon-labs/sophon/token/metadatas`
    );
  }

}
