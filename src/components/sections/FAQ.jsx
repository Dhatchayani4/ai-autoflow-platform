import { useState } from "react";

import Container from "../layout/Container";

import faqs from "../../data/faqs";

import down from "../../assets/icons/chevron-down.svg";
import up from "../../assets/icons/chevron-up.svg";

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section
      id="faq"
      className="py-32 bg-[#F1F6F4]"
    >
      <Container>
        <div className="text-center mb-16">
          <span className="inline-block bg-[#FFC801] text-[#172B36] px-5 py-2 rounded-full font-semibold mb-6">
            Frequently Asked Questions
          </span>

          <h2 className="text-5xl font-bold font-mono text-[#172B36]">
            Everything You Need To Know
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className="bg-white rounded-3xl border border-[#D9E8E2] overflow-hidden shadow-lg"
            >
              <button
                onClick={() =>
                  setOpen(open === index ? -1 : index)
                }
                className="w-full flex items-center justify-between px-8 py-7"
              >
                <h3 className="text-xl font-bold text-left text-[#172B36]">
                  {faq.question}
                </h3>

                <img
                src={open === index ? up : down}
                alt=""
                className={`w-6 transition-transform duration-300 ${
                  open === index ? "rotate-180" : ""
                }`}
              />
              </button>

              <div
                className={`transition-all duration-300 overflow-hidden ${
                  open === index
                    ? "max-h-96 pb-8 px-8"
                    : "max-h-0 px-8"
                }`}
              >
                <p className="text-gray-600 leading-8">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}