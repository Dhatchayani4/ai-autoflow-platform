const pricing = {
  base: {
    Starter: 20,
    Pro: 45,
    Enterprise: 90,
  },

  currencies: {
    INR: {
      symbol: "₹",
      multiplier: 83,
      tariff: 1.0,
    },

    USD: {
      symbol: "$",
      multiplier: 1,
      tariff: 1.0,
    },

    EUR: {
      symbol: "€",
      multiplier: 0.93,
      tariff: 1.05,
    },
  },

  annualDiscount: 0.8,
};

export default pricing;