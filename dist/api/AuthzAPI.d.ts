import { BaseAPI } from "./BaseAPI";
import { PaginationOptions } from "./APIRequester";
import { Pagination } from "./APIRequester";
export interface IResGrants {
    "grants": [{
        "authorization": {
            "@type": string;
        };
        "expiration": string;
    }];
    "pagination": Pagination;
}
export declare class AuthzAPI extends BaseAPI {
    grants(granter: string, grantee: string, msgTypeUrl?: string, params?: PaginationOptions): Promise<IResGrants>;
}
