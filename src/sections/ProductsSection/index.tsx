import { products } from "../../mockData";

export const ProductsSection = () => {
  return (
    <section
      id="our-products"
      className="py-20 bg-[#E8E6E4] overflow-x-hidden w-full"
    >
      <div className="max-w-[1920px] mx-auto px-6 lg:px-12 w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-4">
            Our products
          </h2>
          <p className="text-xl text-black/70 max-w-3xl mx-auto">
            High-performance hardscaping. Consciously crafted + fully
            customisable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <a
              key={product.id}
              href="#"
              className="group relative overflow-hidden bg-white"
            >
              <div className="aspect-[3/5] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <div className="text-xs tracking-widest text-black/60 mb-2">
                  {product.category}
                </div>
                <h3 className="text-xl font-light">{product.name}</h3>
              </div>
              <div className="absolute inset-0 border border-black/0 group-hover:border-black/20 transition-all duration-300" />
            </a>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-block px-8 py-3 bg-black text-white text-sm tracking-wide hover:bg-black/80 transition-all duration-300"
          >
            Explore custom solutions
          </a>
        </div>
      </div>
    </section>
  );
};
