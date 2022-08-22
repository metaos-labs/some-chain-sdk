import { BaseAPI } from "./BaseAPI";
import {APIParams, PaginationOptions} from "./APIRequester";
import {Pagination} from "sophon-sdk";

export interface IResGrants {
  "grants": [
    {
      "authorization": {
        "@type": string
      },
      "expiration": string
    }
  ],
  "pagination": Pagination
}

export class AuthzAPI extends BaseAPI {
  public async grants(
    granter: string,
    grantee: string,
    msgTypeUrl?: string,
    params?: PaginationOptions
  ): Promise<IResGrants> {
    return this.request.get<IResGrants>(
      `/cosmos/authz/v1beta1/grants`,
      {
        granter,
        grantee,
        msg_type_url: msgTypeUrl,
        ...params
      }
    );
  }
}
