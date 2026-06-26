import { useEffect, useState } from "react";

import Container from "../layout/Container";

import testimonials from "../../data/testimonials";

import leftArrow from "../../assets/icons/chevron-left.svg";
import rightArrow from "../../assets/icons/chevron-right.svg";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const previous = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length);
  };

  const next = () => {
    setCurrent((current + 1) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, 5000);

    return () => clearInterval(timer);
  }, [current]);

  const review = testimonials[current];

  return (
    <section
      id="testimonials"
      className="py-32 bg-[#F1F6F4]"
    >
      <Container>

        <div className="text-center mb-16">

          <span className="inline-block bg-[#FFC801] text-[#172B36] px-5 py-2 rounded-full font-semibold mb-6">
            Success Stories
          </span>

          <h2 className="text-5xl font-bold font-mono text-[#172B36]">
            What Our Clients Say
          </h2>

        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-[32px] shadow-xl border border-[#D9E8E2] p-12 transition-all duration-500">

          <div className="flex justify-center mb-8">

            {[1,2,3,4,5].map((star)=>(
              <span
                key={star}
                className="text-3xl text-[#FFC801]"
              >
                ★
              </span>
            ))}

          </div>

          <p className="text-2xl text-center leading-10 text-gray-700 italic mb-12">
            "{review.review}"
          </p>

          <div className="text-center">

            <h3 className="text-2xl font-bold text-[#172B36]">
              {review.name}
            </h3>

            <p className="text-gray-500 mt-2">
              {review.role}
            </p>

            <p className="text-[#114C5A] font-semibold">
              {review.company}
            </p>

          </div>

        </div>

        <div className="flex justify-center gap-6 mt-12">

          <button
            onClick={previous}
            className="w-14 h-14 rounded-full bg-white border border-[#D9E8E2] hover:bg-[#172B36] transition duration-300 flex items-center justify-center"
          >
            <img
              src={leftArrow}
              alt="Previous"
              className="w-6"
            />
          </button>

          <button
            onClick={next}
            className="w-14 h-14 rounded-full bg-[#172B36] hover:bg-[#114C5A] transition duration-300 flex items-center justify-center"
          >
            <img
              src={rightArrow}
              alt="Next"
              className="w-6 invert"
            />
          </button>

        </div>

      </Container>
    </section>
  );
}