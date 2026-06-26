import Container from "../layout/Container";

import cube from "../../assets/icons/cube-16-solid.svg";

export default function Trusted() {
  const companies = [
    "TechNova",
    "CloudCore",
    "NextGen",
    "VisionX",
    "ScaleFlow",
  ];

  return (
    <section className="py-24 bg-[#F1F6F4]">
      <Container>

        <h2 className="text-center text-2xl font-bold text-[#172B36] mb-12">
          Trusted by Innovative Teams Worldwide
        </h2>

        <div className="grid md:grid-cols-5 gap-6">

          {companies.map((company) => (

            <div
              key={company}
              className="bg-white rounded-3xl border border-[#D9E8E2] p-8 flex flex-col items-center hover:shadow-xl transition-all duration-300"
            >

              <img
                src={cube}
                alt=""
                className="w-10 mb-4"
              />

              <p className="font-semibold">
                {company}
              </p>

            </div>

          ))}

        </div>

      </Container>
    </section>
  );
}