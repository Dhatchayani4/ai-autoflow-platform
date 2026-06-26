import Container from "../layout/Container";
import Button from "../ui/Button";
import HeroDashboard from "../ui/HeroDashboard";
import hero from "../../data/hero";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center py-24">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT */}

          <div>

            <span className="inline-block bg-[#FFC801] text-[#172B36] px-4 py-2 rounded-full font-medium mb-6">
              {hero.badge}
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              {hero.title}
            </h1>

            <p className="text-lg text-gray-600 leading-8 mb-10">
              {hero.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">

              <Button>
                {hero.primaryButton}
              </Button>

              <Button variant="secondary">
                {hero.secondaryButton}
              </Button>

            </div>

          </div>

          {/* RIGHT */}

          <div>
            <HeroDashboard />
          </div>

        </div>
      </Container>
    </section>
  );
}