import { useMemo } from "react";
import pricing from "../data/pricing";

export default function usePricing(currency, annual) {
  return useMemo(() => {
    const info = pricing.currencies[currency];

    return Object.entries(pricing.base).map(([name, base]) => {

      let price = base * info.multiplier * info.tariff;

      if (annual) {
        price = price * 12 * pricing.annualDiscount;
      }

      return {
        name,
        symbol: info.symbol,
        price: Math.round(price),
      };

    });

  }, [currency, annual]);
}