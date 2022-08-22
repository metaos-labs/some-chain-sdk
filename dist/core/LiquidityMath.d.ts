import { IToken } from "../types";
import Decimal from "decimal.js";
export declare class LiquidityMath {
    private static getRightSideLiquidity;
    private static getLeftSideLiquidity;
    static getLiquidityFromAmount0(leftRangeValue: number, // pa
    rightRangeValue: number, // pb
    priceValue: number, amount0: string): Decimal;
    private static _getDiverForDeltaX;
    private static _getDiverForDeltaY;
    static getLiquidityFromAmount1(leftRangeValue: number, // pa
    rightRangeValue: number, // pb
    priceValue: number, amount1: string): Decimal;
    static getAmount1FromAmount0(leftRangeValue: number, // pa
    rightRangeValue: number, // pb
    priceValue: number, amount0: string, token0: IToken): string;
    static getAmount0FromAmount1(leftRangeValue: number, // pa
    rightRangeValue: number, // pb
    priceValue: number, amount1: string, token1: IToken): string;
    static getAmountByLiquidity(leftRangeValue: Decimal.Value, rightRangeValue: Decimal.Value, priceValue: Decimal.Value, liquidity: string, token0: IToken, token1: IToken): {
        amount0: Decimal.Value;
        amount1: Decimal.Value;
    };
}
