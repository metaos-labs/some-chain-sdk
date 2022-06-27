import Decimal from "decimal.js";
import { isNumeric } from "./isNumberic";

// export function toPercent(percent: number, balance: string) {
//   return new Decimal(percent).div(100).mul(balance).toFixed(2);
// }

export function percentage(value: string): string {
  if (isNumeric(value)) {
    return `${new Decimal(value).toFixed(2)}%`;
  } else {
    return value;
  }
}

export function toPercent(value: Decimal.Value): string {
  try {
    return `${new Decimal(value).mul(100).toFixed(2)}%`;
  } catch (e) {
    return value.toString();
  }
}
