import { BaseAPI } from "./BaseAPI";
import { Metadata } from "../proto/cosmos/bank/v1beta1/bank";
export declare class TokenAPI extends BaseAPI {
    apiTokenMetadatasByDenom(denom: string): Promise<Metadata>;
    apiTokenMetadatas(): Promise<Array<Metadata>>;
}
