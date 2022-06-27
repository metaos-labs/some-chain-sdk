import Decimal from "decimal.js";

export function toUsd(value: string | undefined): string | number {
  if (!value) {
    return 0;
  }
  return "$" + new Decimal(value).toFixed(2);
}
