import { useState, useEffect } from "react";
import { colors } from "../../mockData";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

export const ColorsSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    skipSnaps: false,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <section className="py-20 bg-[#E8E6E4] overflow-x-hidden w-full">
      <div className="max-w-[1920px] mx-auto w-full">
        <div className="px-6 lg:px-12 text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-4">
            Colours
          </h2>
          <p className="text-xl text-black/70 max-w-3xl mx-auto">
            Crafted from natural aggregates. Available in a range of finishes.
          </p>
          <p className="text-base text-black/60 mt-4 max-w-3xl mx-auto">
            All our decorative stone grating is available in a range of colours,
            from paler shades like Silver Sand right through to bold Velvet
            Black.
          </p>
        </div>

        {/* Main Carousel */}
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {colors.map((color) => (
                <div key={color.id} className="flex-[0_0_100%] min-w-0 px-2">
                  <div className="aspect-[16/10] relative overflow-hidden">
                    <img
                      src={color.mainImage}
                      alt={color.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={scrollPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white flex items-center justify-center transition-all duration-300 shadow-lg"
            aria-label="Previous color"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white flex items-center justify-center transition-all duration-300 shadow-lg"
            aria-label="Next color"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {}
        <div className="text-center mt-8 px-6 lg:px-12">
          <h3 className="text-2xl font-light mb-8">
            {colors[selectedIndex]?.name}
          </h3>
        </div>

        {}
        <div className="px-6 lg:px-12 mt-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-sm text-black/60">
              Colours ({colors.length})
            </span>
          </div>
          <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-16 gap-2">
            {colors.map((color, index) => (
              <button
                key={color.id}
                onClick={() => emblaApi?.scrollTo(index)}
                className={`aspect-square overflow-hidden cursor-pointer transition-all duration-300 ${
                  selectedIndex === index
                    ? "ring-2 ring-black ring-offset-2"
                    : "opacity-60 hover:opacity-100"
                }`}
              >
                <img
                  src={color.texture}
                  alt={color.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
