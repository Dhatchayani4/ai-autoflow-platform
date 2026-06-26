export default function BillingToggle({
  annual,
  setAnnual,
}) {
  return (
    <button
      onClick={() => setAnnual(!annual)}
      className="px-5 py-2 rounded-full bg-[#172B36] text-white"
    >
      {annual ? "Annual (-20%)" : "Monthly"}
    </button>
  );
}