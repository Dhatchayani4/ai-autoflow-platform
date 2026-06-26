export default function CurrencySelector({
  currency,
  setCurrency,
}) {
  return (
    <select
      value={currency}
      onChange={(e) => setCurrency(e.target.value)}
      className="border rounded-xl px-4 py-2"
    >
      <option>INR</option>
      <option>USD</option>
      <option>EUR</option>
    </select>
  );
}