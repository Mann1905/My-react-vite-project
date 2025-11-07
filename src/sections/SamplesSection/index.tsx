import { colors } from "../../mockData";

export const SamplesSection = () => {
  return (
    <section className="py-20 bg-white overflow-x-hidden w-full">
      <div className="max-w-[1920px] mx-auto px-6 lg:px-12 w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-4">
            Samples
          </h2>
          <p className="text-xl text-black/70">
            See for yourself. Request a sample box.
          </p>
        </div>

        {}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-12">
          {colors.slice(0, 8).map((color) => (
            <div
              key={color.id}
              className="aspect-[3/4] overflow-hidden group cursor-pointer"
            >
              <img
                src={color.texture}
                alt={color.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#"
            className="inline-block px-8 py-3 bg-black text-white text-sm tracking-wide hover:bg-black/80 transition-all duration-300"
          >
            Order a sample pack
          </a>
        </div>
      </div>
    </section>
  );
};
