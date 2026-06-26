import Container from "../layout/Container";

import rightArrow from "../../assets/icons/chevron-right.svg";
import arrowPath from "../../assets/icons/arrow-path.svg";

export default function CTA() {
  return (
    <section
      id="cta"
      className="py-32 bg-[#172B36] overflow-hidden relative"
    >
      <Container>

        <div className="absolute top-10 left-10 opacity-10">
          <img
            src={arrowPath}
            alt=""
            className="w-40 animate-spin"
            style={{ animationDuration: "20s" }}
          />
        </div>

        <div className="absolute bottom-10 right-10 opacity-10">
          <img
            src={arrowPath}
            alt=""
            className="w-40 animate-spin"
            style={{
              animationDirection: "reverse",
              animationDuration: "20s",
            }}
          />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">

          <span className="bg-[#FFC801] text-[#172B36] px-5 py-2 rounded-full font-semibold">
            Get Started
          </span>

          <h2 className="mt-8 text-6xl font-bold font-mono text-white leading-tight">
            Build AI Workflows
            <br />
            Without Limits
          </h2>

          <p className="mt-8 text-lg text-gray-300 leading-8">
            Empower your team with intelligent automation,
            AI-powered insights, and seamless workflow
            management built for modern businesses.
          </p>

          <button
            className="
              mt-12
              inline-flex
              items-center
              gap-3
              px-8
              py-5
              rounded-full
              bg-[#FFC801]
              text-[#172B36]
              font-bold
              hover:scale-105
              transition-all
              duration-300
            "
          >
            Start Free Trial

            <img
              src={rightArrow}
              alt=""
              className="w-5"
            />
          </button>

        </div>

      </Container>
    </section>
  );
}