import chart from "../../assets/icons/chart-pie.svg";
import search from "../../assets/icons/search.svg";
import settings from "../../assets/icons/cog-8-tooth.svg";
import trend from "../../assets/icons/arrow-trending-up.svg";

export default function HeroDashboard() {
  return (
    <div className="bg-white rounded-3xl shadow-xl border border-[#D9E8E2] p-8 animate-[float_6s_ease-in-out_infinite]">

      <h3 className="font-bold text-xl mb-8">
        Automation Overview
      </h3>

      <div className="space-y-6">

        <div className="flex items-center gap-4">
          <img src={chart} alt="Analytics" className="w-6" />
          <span>Analytics</span>
        </div>

        <div className="flex items-center gap-4">
          <img src={search} alt="Search" className="w-6" />
          <span>AI Search</span>
        </div>

        <div className="flex items-center gap-4">
          <img src={settings} alt="Automation" className="w-6" />
          <span>Workflow Engine</span>
        </div>

        <div className="flex items-center gap-4">
          <img src={trend} alt="Growth" className="w-6" />
          <span>Performance +24%</span>
        </div>

      </div>

      <div className="mt-10 bg-[#172B36] rounded-2xl text-white p-6">

        <p className="text-sm">
          Automation Score
        </p>

        <h2 className="text-5xl font-bold">
          97%
        </h2>

      </div>

    </div>
  );
}