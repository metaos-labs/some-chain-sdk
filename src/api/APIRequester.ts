import Axios, { AxiosInstance } from "axios";
import { OrderBy } from "../proto/cosmos/tx/v1beta1/service";

export type APIParams = Record<string, string | number | null | undefined | boolean | Array<string>>;

export interface PaginationOptions {
  "pagination.limit": string;
  "pagination.offset": string;
  "pagination.key": string;
  "pagination.count_total": "true" | "false";
  "pagination.reverse": "true" | "false";
  order_by: keyof typeof OrderBy;
}

export interface Pagination {
  next_key: string | null;
  total: number;
}

export class APIRequester {
  private axios: AxiosInstance;

  constructor(baseURL: string) {
    this.axios = Axios.create({
      baseURL,
      headers: {
        Accept: "application/json",
      },
      timeout: 60000,
    });
  }

  public async get<T>(
    endpoint: string,
    params: URLSearchParams | APIParams = {}
  ): Promise<T> {
    return this.axios.get(endpoint, { params }).then((d) => d.data);
  }

  public async post<T>(endpoint: string, data?: APIParams): Promise<T> {
    return this.axios.post(endpoint, data).then((d) => d.data);
  }
}
