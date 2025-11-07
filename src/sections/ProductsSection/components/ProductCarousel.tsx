import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Product = {
  name: string;
  description: string;
  image: string;
};

type ProductCarouselProps = {
  products: Product[];
};

export const ProductCarousel = ({ products }: ProductCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
  });

  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback((emblaApi: any) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="relative" ref={emblaRef}>
      <div className="flex gap-x-4 md:gap-x-[22.4px] overflow-hidden">
        {products.map((product, index) => (
          <div
            key={index}
            className="flex-[0_0_85%] sm:flex-[0_0_45%] md:flex-[0_0_48%] lg:flex-[0_0_31%] min-w-0"
          >
            <div className="group cursor-pointer">
              <div className="aspect-[4/3] overflow-hidden mb-4 rounded-lg bg-stone-200">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h4 className="text-xl leading-[24px] font-pp_neue_montreal mb-2 md:text-[21.3333px] md:leading-[25.6px]">
                {product.name}
              </h4>
              <p className="text-sm leading-[18.2px] text-stone-600 md:text-[13.3333px] md:leading-[18.6667px]">
                {product.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {products.length > 1 && (
        <>
          <button
            onClick={scrollPrev}
            disabled={prevBtnDisabled}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-opacity disabled:opacity-50 disabled:cursor-not-allowed z-10"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={scrollNext}
            disabled={nextBtnDisabled}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-opacity disabled:opacity-50 disabled:cursor-not-allowed z-10"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </>
      )}
    </div>
  );
};
