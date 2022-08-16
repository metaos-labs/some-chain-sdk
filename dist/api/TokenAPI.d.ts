import { BaseAPI } from "./BaseAPI";
import { DenomUnit, Metadata } from "../proto/cosmos/bank/v1beta1/bank";
import { MetadataExt } from "../proto/token/token";
export interface IMetadata extends Metadata {
    denom_units: DenomUnit[];
}
export interface IMetadataExt extends MetadataExt {
    max_supply: string;
}
interface QueryMetadataResponse {
    metadata?: IMetadata;
    metadata_ext?: IMetadataExt;
    supply: string;
}
export declare class TokenAPI extends BaseAPI {
    apiTokenMetadatasByDenom(denom: string): Promise<QueryMetadataResponse>;
    apiTokenMetadatas(): Promise<Array<Metadata>>;
}
export {};
