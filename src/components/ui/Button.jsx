export default function Button({
  children,
  variant = "primary",
}) {
  const base =
    "px-6 py-3 rounded-full font-medium transition-all duration-200";

  const styles = {
    primary:
      "bg-[#172B36] text-white hover:bg-[#114C5A] hover:scale-105 transition-all duration-200",

    secondary:
      "bg-white border border-[#D9E8E2] text-[#172B36] hover:bg-[#172B36] hover:text-white transition-all duration-200",
  };

  return (
    <button className={`${base} ${styles[variant]}`}>
      {children}
    </button>
  );
}