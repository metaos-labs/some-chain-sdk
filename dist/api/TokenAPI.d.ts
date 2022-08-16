import { BaseAPI } from "./BaseAPI";
import { Metadata } from "../proto/cosmos/bank/v1beta1/bank";
import { MetadataExt } from "../proto/token/token";
export interface QueryMetadataResponse {
    metadata: Metadata;
    metadataExt?: MetadataExt;
    supply: string;
}
export declare class TokenAPI extends BaseAPI {
    apiTokenMetadatasByDenom(denom: string): Promise<QueryMetadataResponse>;
    apiTokenMetadatas(): Promise<Array<Metadata>>;
}
