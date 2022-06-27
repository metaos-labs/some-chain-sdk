export enum Fee_Amount {
  LOW = 500,
  MEDIUM = 3000,
  HIGH = 10000,
}

export const FEE_AMOUNT_DETAIL: Record<
  Fee_Amount,
  { label: string; value: Fee_Amount; description: string }
> = {
  [Fee_Amount.LOW]: {
    label: "0.05",
    value: Fee_Amount.LOW,
    description: "Best for stable pairs.",
  },
  [Fee_Amount.MEDIUM]: {
    label: "0.3",
    value: Fee_Amount.MEDIUM,
    description: "Best for most pairs.",
  },
  [Fee_Amount.HIGH]: {
    label: "1",
    value: Fee_Amount.HIGH,
    description: "Best for exotic pairs.",
  },
};
