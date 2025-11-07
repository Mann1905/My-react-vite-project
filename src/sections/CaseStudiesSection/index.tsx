import { useState } from "react";
import { caseStudies } from "../../mockData";

export const CaseStudiesSection = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const types = ["all", ...new Set(caseStudies.map((study) => study.type))];

  const filteredStudies =
    activeFilter === "all"
      ? caseStudies
      : caseStudies.filter((study) => study.type === activeFilter);

  return (
    <section className="py-20 bg-white overflow-x-hidden w-full">
      <div className="max-w-[1920px] mx-auto px-6 lg:px-12 w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-4">
            Case studies
          </h2>
          <p className="text-xl text-black/70 mb-8">
            Explore our project portfolio
          </p>
          <a
            href="#"
            className="inline-block text-sm tracking-wide hover:opacity-70 transition-opacity underline"
          >
            View all
          </a>
        </div>

        <p className="text-base text-black/70 max-w-5xl mx-auto mb-12 leading-relaxed">
          Decorative trench grates in iconic landmarks, sump covers and tree
          grates surrounding skyscrapers, and custom pool grate designs for
          leading hotels and resorts. Our stone grating has played a part in
          some of the world's most innovative urban design projects.
        </p>

        {}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          {types.map((type) => (
            <button
              key={type}
              onClick={() => setActiveFilter(type)}
              className={`px-6 py-2 text-sm tracking-wide transition-all duration-300 ${
                activeFilter === type
                  ? "bg-black text-white"
                  : "bg-white border border-black/20 hover:border-black/40"
              }`}
            >
              {type === "all" ? "All" : type}
            </button>
          ))}
        </div>

        {}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredStudies.map((study) => (
            <a
              key={study.id}
              href="#"
              className="group relative overflow-hidden"
            >
              <div className="aspect-square overflow-hidden bg-gray-100">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="mt-4">
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="text-xs tracking-wide text-black/60">
                    {study.type}
                  </span>
                  {study.categories.map((cat, idx) => (
                    <span
                      key={idx}
                      className="text-xs tracking-wide text-black/60"
                    >
                      • {cat}
                    </span>
                  ))}
                </div>
                <h3 className="text-lg font-light group-hover:opacity-70 transition-opacity">
                  {study.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
