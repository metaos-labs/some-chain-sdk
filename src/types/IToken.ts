import { ILiquidityPosition, IPool, IPoolPrice, IV3Reward } from "./ICommon";

export interface IToken {
  denom: string;
  creator: string;
  name: string;
  symbol: string;
  totalSupply: string;
  decimal: number;
  logoURI: string;

  selected?: boolean;
  balance?: number;
  lineData?: Array<number>;
}

export interface ILiquidityTokenRender extends ILiquidityPosition {
  lpTokenName: string;
  price: string;
  priceLower: string;
  priceUpper: string;
  token0: IToken;
  token1: IToken;
  amount0: string;
  amount1: string;
  pool?: IPool;
  poolPrice: IPoolPrice;
  inRange: boolean;

  hasUnclaimedTokens: boolean;
  closed: boolean;
  priceFromSqrt?: string;

  rewards?: Array<IV3Reward>;
}
