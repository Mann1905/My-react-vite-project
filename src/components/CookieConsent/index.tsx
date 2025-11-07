import { CookieConsentPanel } from "@/components/CookieConsent/components/CookieConsentPanel";

export const CookieConsent = () => {
  return (
    <div
      role="region"
      aria-label="cookie banner"
      className="fixed text-base box-border caret-transparent leading-6 pointer-events-none w-full z-[70] bottom-0 md:text-[14.2222px] md:leading-[21.3333px]"
    >
      <div className="relative text-gray-200 text-base bg-stone-950 box-border caret-transparent leading-6 max-w-none pointer-events-auto w-full ml-auto md:text-[14.2222px] md:leading-[21.3333px] md:max-w-[262.229px]">
        <CookieConsentPanel />
      </div>
    </div>
  );
};
