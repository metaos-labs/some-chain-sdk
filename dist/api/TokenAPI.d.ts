import { BaseAPI } from "./BaseAPI";
import { Metadata } from "../proto/cosmos/bank/v1beta1/bank";
import { QueryGetMetadataResponse } from "../proto/token/query";
export declare class TokenAPI extends BaseAPI {
    apiTokenMetadatasByDenom(denom: string): Promise<QueryGetMetadataResponse>;
    apiTokenMetadatas(): Promise<Array<Metadata>>;
}
