import { useEffect, useRef } from "react";
import { features } from "../../mockData";

export const WhyJoniteSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.3;

    const animate = () => {
      scrollPosition += scrollSpeed;
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, []);

  const doubleFeatures = [...features, ...features];

  return (
    <section className="py-20 bg-white overflow-x-hidden w-full">
      <div className="max-w-[1920px] mx-auto px-6 lg:px-12 w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-4">
            Why Jonite?
          </h2>
          <p className="text-lg text-black/70 max-w-4xl mx-auto">
            We're changing the way the world sees engineered stone architectural
            products.
            <br />
            And we're building a more sustainable future in the process.
          </p>
        </div>

        <div className="mb-12">
          <p className="text-base text-black/80 max-w-5xl mx-auto leading-relaxed">
            Over the years, we've evolved and enhanced the way we work with
            composite materials, architects and urban designers—creating
            decorative stone grates, covers and blocks that don't just stand up
            to natural stone and steel, but stand above them.
          </p>
        </div>

        {/* Scrolling Features */}
        <div className="overflow-hidden w-full">
          <div
            ref={scrollRef}
            className="flex gap-8 overflow-x-hidden"
            style={{ scrollBehavior: "auto" }}
          >
            {doubleFeatures.map((feature, index) => (
              <div
                key={`${feature.id}-${index}`}
                className="flex-shrink-0 flex flex-col items-center justify-center text-center gap-4 w-32 min-w-[128px]"
              >
                <div className="w-16 h-16 flex items-center justify-center">
                  <img
                    src={feature.icon}
                    alt={feature.name}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
                <div className="text-sm">{feature.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
