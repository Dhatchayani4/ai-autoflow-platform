import Container from "../layout/Container";

export default function Stats() {
  const stats = [
    { value: "50K+", label: "Automated Workflows" },
    { value: "98%", label: "Customer Satisfaction" },
    { value: "24/7", label: "AI Monitoring" },
    { value: "120+", label: "Enterprise Clients" },
  ];

  return (
    <section className="py-24 bg-[#172B36]">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((item) => (
            <div
              key={item.label}
              className="bg-[#114C5A] rounded-3xl p-8 text-center hover:-translate-y-2 transition-all duration-300"
            >
              <h2 className="text-5xl font-bold text-[#FFC801]">
                {item.value}
              </h2>

              <p className="mt-4 text-white">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}