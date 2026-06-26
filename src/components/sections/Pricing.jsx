import { useState } from "react";

import Container from "../layout/Container";
import CurrencySelector from "../ui/CurrencySelector";
import BillingToggle from "../ui/BillingToggle";

import usePricing from "../../hooks/usePricing";

export default function Pricing() {
  const [currency, setCurrency] = useState("USD");
  const [annual, setAnnual] = useState(false);

  const plans = usePricing(currency, annual);

  return (
    <section id="pricing" className="py-32 bg-[#F8FBFA]">
      <Container>
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-[#FF9932] font-semibold uppercase tracking-[4px]">
            Pricing
          </p>

          <h2 className="text-5xl font-bold mt-3 text-[#172B36]">
            Choose the perfect plan
          </h2>

          <p className="mt-4 text-gray-600">
            Flexible pricing for individuals, growing teams and enterprises.
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-14">
          <CurrencySelector
            currency={currency}
            setCurrency={setCurrency}
          />

          <BillingToggle
            annual={annual}
            setAnnual={setAnnual}
          />
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`
                relative
                bg-white
                rounded-3xl
                p-10
                text-center
                shadow-lg
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-2xl
                ${
                  plan.name === "Pro"
                    ? "border-2 border-[#FFC801] scale-105"
                    : "border border-[#D9E8E2]"
                }
              `}
            >
              {/* Badge */}
              {plan.name === "Pro" && (
                <span className="absolute top-5 right-5 bg-[#FFC801] text-[#172B36] text-xs font-bold px-3 py-1 rounded-full">
                  Most Popular
                </span>
              )}

              {/* Plan */}
              <h3 className="text-2xl font-bold text-[#172B36]">
                {plan.name}
              </h3>

              {/* Price */}
              <div className="mt-8">
                <p className="text-5xl font-bold text-[#172B36]">
                  {plan.symbol}
                  {plan.price}
                </p>

                <span className="text-gray-500">
                  / {annual ? "year" : "month"}
                </span>
              </div>

              {/* Features */}
              <ul className="mt-10 space-y-4 text-left text-gray-600 inline-block">
                <li>✔ AI Analytics Dashboard</li>

                <li>✔ Workflow Automation</li>

                <li>✔ 24/7 Customer Support</li>

                {plan.name !== "Starter" && (
                  <li>✔ Team Collaboration</li>
                )}

                {plan.name === "Enterprise" && (
                  <>
                    <li>✔ Dedicated Account Manager</li>

                    <li>✔ Unlimited API Requests</li>
                  </>
                )}
              </ul>

              {/* Button */}
              <button
                className="
                  mt-10
                  w-full
                  py-4
                  rounded-2xl
                  bg-[#172B36]
                  text-white
                  font-semibold
                  hover:bg-[#114C5A]
                  hover:scale-105
                  transition-all
                  duration-300
                "
              >
                Get Started
              </button>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}