import { useEffect, useRef, useState } from "react";

export const ImageGallerySection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Once visible, we don't need to observe anymore
            if (sectionRef.current) {
              observer.unobserve(sectionRef.current);
            }
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="text-base box-border caret-transparent gap-x-2 grid grid-cols-[repeat(4,minmax(0px,1fr))] leading-6 max-w-[2400px] mt-12 mx-auto px-4 relative w-full overflow-x-hidden md:text-[14.2222px] md:gap-x-[22.4px] md:grid-cols-[repeat(12,minmax(0px,1fr))] md:leading-[21.3333px] md:mt-[82.6738px] md:px-[22.7556px]"
    >
      <div
        className={`text-base items-center box-border caret-transparent flex col-end-[-1] col-start-1 justify-between leading-6 pt-36 transition-all duration-[1200ms] ease-out relative md:text-[14.2222px] md:leading-[21.3333px] md:pt-32 ${
          isVisible ? "opacity-100" : "opacity-80"
        }`}
      >
        <div
          className={`text-base aspect-[154_/_205] box-border caret-transparent leading-6 w-[44.89%] transition-all duration-[1200ms] ease-out delay-[200ms] relative md:text-[14.2222px] md:aspect-[387_/_512] md:leading-[21.3333px] md:w-[27.8%] ${
            isVisible
              ? "opacity-100 scale-100 z-20"
              : "opacity-70 scale-[0.85] z-0"
          }`}
        >
          <div className="text-base box-border caret-transparent h-full leading-6 w-full overflow-hidden md:text-[14.2222px] md:leading-[21.3333px]">
            <picture className="text-base box-border caret-transparent leading-6 md:text-[14.2222px] md:leading-[21.3333px]">
              <img
                src="https://c.animaapp.com/mhhesajdVjc9dV/assets/53.jpg"
                sizes="(min-width: 992px) calc(((min(100vw, 2400px) - (1.5rem * 2)) * 0.278) * 1.2), calc(((min(100vw, 2400px) - (1.5rem * 2)) * 0.4489) * 1.2)"
                alt=""
                className="text-base aspect-[auto_1200_/_1578.95] box-border caret-transparent h-full leading-6 max-w-full object-cover origin-[50%_100%] w-full scale-[1.2px] md:text-[14.2222px] md:leading-[21.3333px]"
              />
            </picture>
          </div>
        </div>
        <div
          className={`text-base aspect-[73_/_101] box-border caret-transparent leading-6 w-[21.28%] transition-all duration-[1200ms] ease-out delay-[300ms] relative md:text-[14.2222px] md:aspect-[181_/_252] md:leading-[21.3333px] md:w-[13.03%] ${
            isVisible
              ? "opacity-100 scale-100 z-20"
              : "opacity-70 scale-[0.85] z-0"
          }`}
        >
          <div className="text-base box-border caret-transparent h-full leading-6 w-full overflow-hidden md:text-[14.2222px] md:leading-[21.3333px]">
            <picture className="text-base box-border caret-transparent leading-6 md:text-[14.2222px] md:leading-[21.3333px]">
              <img
                src="https://c.animaapp.com/mhhesajdVjc9dV/assets/59.jpg"
                sizes="(min-width: 992px) calc(((min(100vw, 2400px) - (1.5rem * 2)) * 0.1303) * 1.2), calc(((min(100vw, 2400px) - (1.5rem * 2)) * 0.2128) * 1.2)"
                alt=""
                className="text-base aspect-[auto_1200_/_1666.67] box-border caret-transparent h-full leading-6 max-w-full object-cover origin-[50%_100%] w-full scale-[1.2px] md:text-[14.2222px] md:leading-[21.3333px]"
              />
            </picture>
          </div>
        </div>
        <div
          className={`text-base aspect-[445_/_552] box-border caret-transparent block leading-6 min-h-0 min-w-0 transform-none w-[31.96%] transition-all duration-[1200ms] ease-out delay-[400ms] relative md:text-[14.2222px] md:leading-[21.3333px] md:min-h-[auto] md:min-w-[auto] ${
            isVisible
              ? "opacity-100 scale-100 z-10"
              : "opacity-70 scale-[0.85] z-0"
          }`}
        >
          <div className="text-base box-border caret-transparent h-full leading-6 w-full overflow-hidden md:text-[14.2222px] md:leading-[21.3333px]">
            <picture className="text-base box-border caret-transparent leading-6 md:text-[14.2222px] md:leading-[21.3333px]">
              <img
                src="https://c.animaapp.com/mhhesajdVjc9dV/assets/43.jpg"
                sizes="(min-width: 992px) calc(((min(100vw, 2400px) - (1.5rem * 2)) * 0.3196) * 1.2), calc(((min(100vw, 2400px) - (1.5rem * 2)) * 0.3196) * 1.2)"
                alt=""
                className="text-base aspect-[auto_1200_/_1481.48] box-border caret-transparent h-full leading-6 max-w-full object-cover transform-none origin-[50%_100%] w-full md:text-[14.2222px] md:leading-[21.3333px] md:scale-[1.2px]"
              />
            </picture>
          </div>
        </div>
        <div
          className={`text-base aspect-[100_/_158] box-border caret-transparent leading-6 w-[29.15%] transition-all duration-[1200ms] ease-out delay-[500ms] relative md:text-[14.2222px] md:aspect-[250_/_396] md:leading-[21.3333px] md:w-[17.95%] ${
            isVisible
              ? "opacity-100 scale-100 z-30"
              : "opacity-70 scale-[0.85] z-0"
          }`}
        >
          <div className="text-base box-border caret-transparent h-full leading-6 w-full overflow-hidden md:text-[14.2222px] md:leading-[21.3333px]">
            <picture className="text-base box-border caret-transparent leading-6 md:text-[14.2222px] md:leading-[21.3333px]">
              <img
                src="https://c.animaapp.com/mhhesajdVjc9dV/assets/76.jpg"
                sizes="(min-width: 992px) calc(((min(100vw, 2400px) - (1.5rem * 2)) * 0.1795) * 1.2), calc(((min(100vw, 2400px) - (1.5rem * 2)) * 0.2915) * 1.2)"
                alt=""
                className="text-base aspect-[auto_1200_/_1904.76] box-border caret-transparent h-full leading-6 max-w-full object-cover origin-[50%_100%] w-full scale-[1.2px] md:text-[14.2222px] md:leading-[21.3333px]"
              />
            </picture>
          </div>
        </div>
      </div>
      <div
        className={`text-base items-start box-border caret-transparent gap-x-6 flex flex-row col-end-[-1] col-start-1 justify-between leading-6 mt-10 pb-16 transition-all duration-[1200ms] ease-out delay-[600ms] relative z-40 md:text-[14.2222px] md:gap-x-[21.3333px] md:leading-[21.3333px] md:mt-[71.1111px] md:pb-[56.8889px] ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="text-5xl items-start box-border caret-transparent gap-x-[15.008px] flex flex-row leading-[48px] font-pp_neue_montreal md:text-[133.333px] md:gap-x-[52.4516px] md:leading-[160px]">
          <span
            className={`text-5xl box-border caret-transparent inline leading-[48px] transition-all duration-[1200ms] ease-out delay-[700ms] md:text-[133.333px] md:leading-[160px] ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            Made
          </span>
          <span
            className={`text-5xl box-border caret-transparent inline leading-[48px] transition-all duration-[1200ms] ease-out delay-[800ms] md:text-[133.333px] md:leading-[160px] ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            to
          </span>
          <span
            className={`text-5xl box-border caret-transparent inline leading-[48px] transition-all duration-[1200ms] ease-out delay-[900ms] md:text-[133.333px] md:leading-[160px] ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            matter
          </span>
        </h2>
        <p
          className={`text-lg box-border caret-transparent shrink-0 leading-[23.4px] w-[280px] font-pp_neue_montreal transition-all duration-[1200ms] ease-out delay-[1000ms] md:text-[17.7778px] md:leading-[23.1111px] md:w-[222.222px] ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          Contemporary engineered stonework solutions. Built for everyday
          living, from the ground up.
        </p>
      </div>
    </section>
  );
};
