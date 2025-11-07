import { HeroContent } from "@/sections/HeroSection/components/HeroContent";
import { HeroMedia } from "@/sections/HeroSection/components/HeroMedia";

export const HeroSection = () => {
  return (
    <section className="text-base box-border caret-transparent gap-x-2 grid grid-cols-[repeat(4,minmax(0px,1fr))] h-[912px] leading-6 max-h-[709.008px] max-w-[2400px] min-h-[657.008px] mt-[88px] mx-auto pb-0 px-4 w-full overflow-x-hidden md:text-[14.2222px] md:gap-x-[22.4px] md:grid-cols-[repeat(12,minmax(0px,1fr))] md:h-[906.66px] md:leading-[21.3333px] md:max-h-[630.229px] md:min-h-[533.333px] md:mt-[93.3404px] md:pb-0 md:px-[22.7556px]">
      <HeroContent />
      <HeroMedia
        variant="items-stretch hidden flex-col col-end-[-1] col-start-1 justify-end min-h-0 min-w-0 md:flex md:col-end-[span_6] md:col-start-7 md:min-h-[auto] md:min-w-[auto]"
        topIconSrc="https://c.animaapp.com/mhhesajdVjc9dV/assets/icon-8.svg"
        topIconAlt="Icon"
        mediaType="video"
        videoSrc="/ASMR_Video_Generation_With_Website.mp4"
        linkHref="/#our-products"
        linkText="Explore products"
        linkIconSrc="https://c.animaapp.com/mhhesajdVjc9dV/assets/icon-11.svg"
        linkIconAlt="Icon"
      />
    </section>
  );
};
