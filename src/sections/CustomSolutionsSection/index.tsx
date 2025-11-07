import { useState } from "react";
import { customSolutions } from "../../mockData";

export const CustomSolutionsSection = () => {
  const [activeLevel, setActiveLevel] = useState(0);

  return (
    <section className="py-20 bg-[#E8E6E4] overflow-x-hidden w-full">
      <div className="max-w-[1920px] mx-auto px-6 lg:px-12 w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-4">
            Custom solutions
          </h2>
          <p className="text-lg text-black/70 max-w-4xl mx-auto">
            We're here to inspire architects to push the boundaries of urban
            design, and continuously challenge what it means to build better
            places for people and the planet.
          </p>
          <div className="mt-8">
            <a
              href="#"
              className="inline-block px-8 py-3 bg-black text-white text-sm tracking-wide hover:bg-black/80 transition-all duration-300"
            >
              Collaborate with us
            </a>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {}
          <div className="relative aspect-[4/3] overflow-hidden">
            <img
              src={customSolutions[activeLevel].image}
              alt={customSolutions[activeLevel].title}
              className="w-full h-full object-cover transition-all duration-500"
              loading="lazy"
            />
          </div>

          {}
          <div className="space-y-8">
            {customSolutions.map((solution, index) => (
              <div
                key={solution.id}
                className={`cursor-pointer transition-all duration-300 ${
                  activeLevel === index
                    ? "opacity-100"
                    : "opacity-40 hover:opacity-70"
                }`}
                onClick={() => setActiveLevel(index)}
              >
                <div className="text-xs tracking-widest text-black/60 mb-2">
                  Level {solution.level} / 03
                </div>
                <h3 className="text-2xl md:text-3xl font-light mb-3">
                  {solution.title}
                </h3>
                <p className="text-black/70 leading-relaxed">
                  {solution.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
