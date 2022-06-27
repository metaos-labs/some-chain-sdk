import { IToken } from "../types";

export function sortsBefore(baseToken: IToken, quoteToken: IToken) {
  return baseToken.denom.toLowerCase() < quoteToken.denom.toLowerCase();
}
