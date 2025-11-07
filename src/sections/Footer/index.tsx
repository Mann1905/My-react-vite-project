import { FooterNav } from "@/sections/Footer/components/FooterNav";
import { FooterBottom } from "@/sections/Footer/components/FooterBottom";

export const Footer = () => {
  return (
    <footer className="relative text-gray-200 text-base bg-stone-500 box-border caret-transparent leading-6 z-50 overflow-hidden mt-16 pt-12 pb-6 md:text-[14.2222px] md:leading-[21.3333px] md:mt-[56.8889px] md:pt-[56.8889px] md:pb-4">
      <div className="text-base box-border caret-transparent gap-x-2 grid grid-cols-[repeat(4,minmax(0px,1fr))] leading-6 max-w-[2400px] mx-auto px-4 md:text-[14.2222px] md:gap-x-[22.4px] md:grid-cols-[repeat(12,minmax(0px,1fr))] md:leading-[21.3333px] md:px-[22.7556px]">
        <div className="text-lg box-border caret-transparent col-end-[-1] col-start-1 leading-[23.4px] font-pp_neue_montreal md:text-[17.7778px] md:col-end-[span_3] md:col-start-[span_3] md:leading-[24.8889px]">
          We empower architects, landscape designers, and developers to build
          better places. Places that don’t just enrich everyday lives, but are
          part of them; built with people and the planet in mind, from the
          ground up.
        </div>
        <FooterNav />
        <FooterBottom
          variant="desktop"
          logoUrl="https://c.animaapp.com/mhhesajdVjc9dV/assets/38.svg"
          logoAlt="Jonite Logo (light)"
          contactUsUrl="https://www.jonite.com/contact-us"
          contactUsIconUrl="https://c.animaapp.com/mhhesajdVjc9dV/assets/icon-13.svg"
          scrollIconUrl="https://c.animaapp.com/mhhesajdVjc9dV/assets/icon-25.svg"
          usTime="02:50:27"
          sgTime="15:50:27"
          usPhone="+1-484-224-2972"
          sgPhone="+65-6383-3788"
        />
        <FooterBottom
          variant="tablet"
          contactUsUrl="https://www.jonite.com/contact-us"
          contactUsIconUrl="https://c.animaapp.com/mhhesajdVjc9dV/assets/icon-26.svg"
          scrollIconUrl="https://c.animaapp.com/mhhesajdVjc9dV/assets/icon-27.svg"
          usTime="02:50:28"
          usPhone="+1-484-224-2972"
          sgTime="15:50:29"
          sgPhone="+65-6383-3788"
          copyrightText="Jonite © 2025"
          siteByText="Site by"
          siteByUrl="https://serieseight.com/"
        />
        <div className="relative text-base box-border caret-transparent block col-end-[-1] col-start-1 leading-6 min-h-[auto] min-w-[auto] mt-10 md:text-[14.2222px] md:hidden md:leading-[21.3333px] md:min-h-0 md:min-w-0 md:mt-[35.5556px]">
          <img
            src="https://c.animaapp.com/mhhesajdVjc9dV/assets/38.svg"
            alt="Jonite Logo (light)"
            className="text-base aspect-[auto_343_/_54] box-border caret-transparent leading-6 max-w-full w-full md:text-[14.2222px] md:leading-[21.3333px]"
          />
          <a
            href="/"
            className="text-base box-border caret-transparent leading-6 md:text-[14.2222px] md:leading-[21.3333px] before:accent-auto before:box-border before:caret-transparent before:text-gray-200 before:block before:text-base before:not-italic before:normal-nums before:font-normal before:h-full before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:pointer-events-auto before:absolute before:text-start before:indent-[0px] before:normal-case before:visible before:w-full before:z-[1] before:border-separate before:left-0 before:top-0 before:font-ui_sans_serif before:md:text-[14.2222px] before:md:leading-[21.3333px]"
          ></a>
        </div>
      </div>
      <FooterBottom
        variant=""
        copyrightText="Jonite © 2025"
        privacyPolicyUrl="https://www.jonite.com/privacy-policy"
        cookiePolicyUrl="https://www.jonite.com/cookie-policy"
        termsConditionsUrl="https://www.jonite.com/terms-conditions"
        siteByText="Site by"
        siteByUrl="https://serieseight.com/"
      />
    </footer>
  );
};
