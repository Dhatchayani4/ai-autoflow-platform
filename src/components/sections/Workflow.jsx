import Container from "../layout/Container";

import search from "../../assets/icons/search.svg";
import cog from "../../assets/icons/cog-8-tooth.svg";
import trend from "../../assets/icons/arrow-trending-up.svg";

export default function Workflow() {
  const steps = [
    {
      title: "Collect",
      text: "Gather data from multiple business sources.",
      icon: search,
    },
    {
      title: "Automate",
      text: "AI processes repetitive tasks instantly.",
      icon: cog,
    },
    {
      title: "Optimize",
      text: "Monitor performance using AI insights.",
      icon: trend,
    },
  ];

  return (
    <section className="py-32">
      <Container>

        <div className="text-center mb-16">

          <span className="bg-[#FFC801] px-5 py-2 rounded-full font-semibold">
            Workflow
          </span>

          <h2 className="text-5xl font-bold mt-6">
            How AutoAI Works
          </h2>

        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {steps.map((step) => (

            <article
              key={step.title}
              className="bg-white rounded-3xl border border-[#D9E8E2] p-10 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >

              <img
                src={step.icon}
                alt=""
                className="w-10 mb-6"
              />

              <h3 className="text-3xl font-bold mb-4">
                {step.title}
              </h3>

              <p className="text-gray-600 leading-8">
                {step.text}
              </p>

            </article>

          ))}

        </div>

      </Container>
    </section>
  );
}