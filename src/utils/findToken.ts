import { IToken } from "../types";
import DEFAULT_TOKEN_LIST from "../constants/tokenlist.default";

export function findTokenByDenom(tokenDenom?: string): IToken {
  const tokens: Array<IToken> = DEFAULT_TOKEN_LIST;
  const result = tokens.find((item) => item.denom === tokenDenom);
  if (result) {
    return result;
  } else {
    return DEFAULT_TOKEN_LIST[0];
  }
}

export function findTokenBySymbol(symbol: string): IToken {
  const tokens: Array<IToken> = DEFAULT_TOKEN_LIST;
  const result = tokens.find(
    (item) => item.symbol.toUpperCase() === symbol.toUpperCase()
  );
  if (result) {
    return result;
  } else {
    return DEFAULT_TOKEN_LIST[0];
  }
}
