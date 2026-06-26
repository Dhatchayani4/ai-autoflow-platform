import { useEffect, useState } from "react";

import Container from "../layout/Container";

import features from "../../data/features";

import useBreakpoint from "../../hooks/useBreakpoint";
import { icons } from "../../assets/icons";
import BentoCard from "../ui/BentoCard";
import AccordionItem from "../ui/AccordionItem";

export default function Features() {

  const mobile = useBreakpoint();

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // We intentionally keep the same activeIndex.
    // This satisfies the "context persistence" requirement.
  }, [mobile]);

  return (

    <section id="features" className="py-32">

      <Container>

        <h2 className="text-5xl font-bold mb-14">
          AI Capabilities
        </h2>

        {!mobile ? (

          <div className="grid lg:grid-cols-2 gap-8">

            {features.map((feature, index) => (

              <BentoCard

                key={feature.id}

                title={feature.title}

                description={feature.description}

                icon={icons[feature.icon]}

                active={activeIndex === index}

                onHover={() => setActiveIndex(index)}

              />

            ))}

          </div>

        ) : (

          <div className="space-y-4">

            {features.map((feature, index) => (

              <AccordionItem

                key={feature.id}

                title={feature.title}

                description={feature.description}

                icon={icons[feature.icon]}

                open={activeIndex === index}

                onClick={() => setActiveIndex(index)}

              />

            ))}

          </div>

        )}

      </Container>

    </section>

  );
}