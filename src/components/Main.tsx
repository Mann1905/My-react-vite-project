import { HeroSection } from "../sections/HeroSection";
import { ClientsSection } from "../sections/ClientsSection";
import { ImageGallerySection } from "../sections/ImageGallerySection";
import { ProductsSection } from "../sections/ProductsSection";
import { WhyJoniteSection } from "../sections/WhyJoniteSection";
import { ColorsSection } from "../sections/ColorsSection";
import { SamplesSection } from "../sections/SamplesSection";
import { CustomSolutionsSection } from "../sections/CustomSolutionsSection";
import { CaseStudiesSection } from "../sections/CaseStudiesSection";
import { InsightsSection } from "../sections/InsightsSection";

export const Main = () => {
  return (
    <main className="text-base box-border caret-transparent leading-6 overflow-x-hidden w-full md:text-[14.2222px] md:leading-[21.3333px]">
      <div className="text-base box-border caret-transparent leading-6 scroll-mt-14 md:text-[14.2222px] md:leading-[21.3333px] md:scroll-mt-[78.2222px]"></div>
      <HeroSection />
      <ClientsSection />
      <ImageGallerySection />
      <ProductsSection />
      <WhyJoniteSection />
      <ColorsSection />
      <SamplesSection />
      <CustomSolutionsSection />
      <CaseStudiesSection />
      <InsightsSection />
    </main>
  );
};
