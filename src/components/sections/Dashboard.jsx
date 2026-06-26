import Container from "../layout/Container";

import chart from "../../assets/icons/chart-pie.svg";
import trend from "../../assets/icons/arrow-trending-up.svg";
import cog from "../../assets/icons/cog-8-tooth.svg";

export default function Dashboard() {
  return (
    <section className="py-32 bg-[#F1F6F4]">
      <Container>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <span className="bg-[#FFC801] px-5 py-2 rounded-full font-semibold">
              Dashboard
            </span>

            <h2 className="text-5xl font-bold mt-8">
              Monitor Every Automation
            </h2>

            <p className="mt-8 text-gray-600 leading-8">
              Get real-time analytics, automation insights,
              workflow tracking and AI recommendations in one place.
            </p>

          </div>

          <div className="bg-white rounded-[32px] border border-[#D9E8E2] p-10 shadow-xl">

            <div className="space-y-8">

              <div className="flex items-center gap-4">
                <img src={chart} alt="" className="w-8" />
                <span>Analytics Dashboard</span>
              </div>

              <div className="flex items-center gap-4">
                <img src={trend} alt="" className="w-8" />
                <span>Performance Insights</span>
              </div>

              <div className="flex items-center gap-4">
                <img src={cog} alt="" className="w-8" />
                <span>Workflow Management</span>
              </div>

            </div>

            <div className="mt-10 bg-[#172B36] rounded-3xl p-8 text-white">

              <p>Automation Accuracy</p>

              <h2 className="text-6xl font-bold mt-4">
                99.8%
              </h2>

            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}