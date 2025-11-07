import { useState } from "react";

export const CookieConsentPanel = () => {
  const [isPreferencesOpen, setIsPreferencesOpen] = useState(false);
  const [isAccepted, setIsAccepted] = useState(false);

  const handleAccept = () => {
    setIsAccepted(true);
    // Store preference in localStorage
    localStorage.setItem("cookieConsent", "accepted");
  };

  const handleDecline = () => {
    setIsAccepted(true);
    localStorage.setItem("cookieConsent", "declined");
  };

  const handlePreferences = () => {
    setIsPreferencesOpen(true);
  };

  if (isAccepted && !isPreferencesOpen) {
    return null;
  }

  return (
    <div className="text-base items-start box-border caret-transparent flex flex-col leading-6 max-h-[1000px] overflow-auto md:text-[14.2222px] md:leading-[21.3333px]">
      <div className="text-base items-start box-border caret-transparent flex flex-col leading-6 p-4 md:text-[14.2222px] md:leading-[21.3333px] md:p-[21.3333px]">
        <span className="text-sm box-border caret-transparent block leading-[15.4px] mb-[9.008px] scroll-mt-14 font-pp_neue_montreal md:text-[14.2222px] md:leading-[15.6444px] md:mb-[10.6667px] md:scroll-mt-[78.2222px]">
          We value your privacy
        </span>
        <div className="text-gray-200/60 text-xs box-border caret-transparent tracking-[normal] leading-[18px] mb-4 font-ui_sans_serif md:text-[12.4444px] md:tracking-[0.124444px] md:leading-[17.4222px] md:mb-[14.2222px] md:font-pp_neue_montreal">
          <p className="text-xs box-border caret-transparent tracking-[normal] leading-[18px] font-ui_sans_serif md:text-[12.4444px] md:tracking-[0.124444px] md:leading-[17.4222px] md:font-pp_neue_montreal">
            <span className="text-xs box-border caret-transparent tracking-[normal] leading-[18px] font-ui_sans_serif md:text-[12.4444px] md:tracking-[0.124444px] md:leading-[17.4222px] md:font-pp_neue_montreal">
              We use cookies and other technologies to personalize your
              experience, perform marketing, and collect analytics. Learn more
              in our{" "}
            </span>
            <a
              href="https://www.jonite.com/cookie-policy"
              className="text-white text-xs box-border caret-transparent tracking-[normal] leading-[18px] underline font-ui_sans_serif md:text-[12.4444px] md:tracking-[0.124444px] md:leading-[17.4222px] md:font-pp_neue_montreal hover:no-underline"
            >
              <span className="text-xs box-border caret-transparent tracking-[normal] leading-[18px] font-ui_sans_serif md:text-[12.4444px] md:tracking-[0.124444px] md:leading-[17.4222px] md:font-pp_neue_montreal">
                Cookie Policy
              </span>
            </a>
            <span className="text-xs box-border caret-transparent tracking-[normal] leading-[18px] font-ui_sans_serif md:text-[12.4444px] md:tracking-[0.124444px] md:leading-[17.4222px] md:font-pp_neue_montreal">
              .
            </span>
          </p>
        </div>
        <div className="text-base items-center box-border caret-transparent gap-x-2 flex justify-between leading-6 gap-y-2 w-full md:text-[14.2222px] md:gap-x-[7.11111px] md:leading-[21.3333px] md:gap-y-[7.11111px]">
          <button 
            onClick={handleAccept}
            type="button"
            className="text-sm items-center bg-transparent caret-transparent gap-x-2 flex basis-[0%] grow justify-center leading-[15.4px] text-center border border-gray-200/20 pl-3.5 pr-2.5 py-2.5 rounded-[40px] border-solid font-pp_neue_montreal cursor-pointer z-50 md:text-[12.4444px] md:gap-x-[7.11111px] md:leading-[13.6889px] md:pt-[5.33333px] md:pb-[6.22933px] md:px-[14.2222px] md:rounded-[35.5556px]"
          >
            <span className="text-sm box-border caret-transparent block leading-[15.4px] md:text-[12.4444px] md:leading-[13.6889px]">
              Accept
            </span>
          </button>
          <button 
            onClick={handleDecline}
            type="button"
            className="text-sm items-center bg-transparent caret-transparent gap-x-2 flex basis-[0%] grow justify-center leading-[15.4px] text-center border border-gray-200/20 pl-3.5 pr-2.5 py-2.5 rounded-[40px] border-solid font-pp_neue_montreal cursor-pointer z-50 md:text-[12.4444px] md:gap-x-[7.11111px] md:leading-[13.6889px] md:pt-[5.33333px] md:pb-[6.22933px] md:px-[14.2222px] md:rounded-[35.5556px]"
          >
            <span className="text-sm box-border caret-transparent block leading-[15.4px] md:text-[12.4444px] md:leading-[13.6889px]">
              Decline
            </span>
          </button>
          <button 
            onClick={handlePreferences}
            type="button"
            className="text-white text-sm bg-transparent caret-transparent block basis-[0%] grow leading-[15.4px] text-center underline p-0 font-pp_neue_montreal cursor-pointer z-50 md:text-[12.4444px] md:leading-[13.6889px]"
          >
            <span className="text-sm box-border caret-transparent leading-[15.4px] md:text-[12.4444px] md:leading-[13.6889px]">
              Preferences
            </span>
          </button>
        </div>
      </div>
        <div className={`text-base box-border caret-transparent leading-6 w-full scroll-mt-14 md:text-[14.2222px] md:leading-[21.3333px] md:scroll-mt-[78.2222px] ${
          isPreferencesOpen ? "block" : "hidden"
        }`}>
          <div className="text-base items-center box-border caret-transparent flex justify-between leading-6 border-gray-200/20 px-6 py-4 border-b border-solid md:text-[14.2222px] md:leading-[21.3333px] md:px-[21.3333px] md:py-[25.7849px]">
            <span className="text-base box-border caret-transparent block leading-[17.6px] font-pp_neue_montreal md:text-[14.2222px] md:leading-[15.6444px]">
              Cookie preferences
            </span>
            <div className="text-base items-center box-border caret-transparent gap-x-2 flex leading-6 gap-y-2 md:text-[14.2222px] md:gap-x-[7.11111px] md:hidden md:leading-[21.3333px] md:gap-y-[7.11111px]">
              <button 
                onClick={() => setIsPreferencesOpen(false)}
                type="button"
                className="text-base bg-transparent caret-transparent block h-6 leading-6 text-center w-6 p-0 cursor-pointer z-50 md:text-[14.2222px] md:inline-block md:h-[21.3333px] md:leading-[21.3333px] md:w-[21.3333px]"
              >
                <img
                  src="https://c.animaapp.com/mhhesajdVjc9dV/assets/2.svg"
                  alt="Close preferences"
                  className="text-base aspect-[auto_24_/_24] box-border caret-transparent leading-6 max-w-full w-full md:text-[14.2222px] md:leading-[21.3333px]"
                />
              </button>
            </div>
            <div className="text-base items-center box-border caret-transparent gap-x-2 hidden leading-6 gap-y-2 md:text-[14.2222px] md:gap-x-[7.11111px] md:flex md:leading-[21.3333px] md:gap-y-[7.11111px]">
              <button 
                onClick={handleAccept}
                type="button"
                className="text-sm items-center bg-transparent caret-transparent gap-x-2 inline-flex leading-[15.4px] text-center border border-gray-200/20 pl-3.5 pr-2.5 py-2.5 rounded-[40px] border-solid font-pp_neue_montreal cursor-pointer z-50 md:text-[12.4444px] md:gap-x-[7.11111px] md:flex md:leading-[13.6889px] md:pt-[5.33333px] md:pb-[6.22933px] md:px-[14.2222px] md:rounded-[35.5556px]"
              >
                <span className="text-sm box-border caret-transparent block leading-[15.4px] md:text-[12.4444px] md:leading-[13.6889px]">
                  Accept all
                </span>
              </button>
              <button 
                onClick={handleDecline}
                type="button"
                className="text-sm items-center bg-transparent caret-transparent gap-x-2 inline-flex leading-[15.4px] text-center border border-gray-200/20 pl-3.5 pr-2.5 py-2.5 rounded-[40px] border-solid font-pp_neue_montreal cursor-pointer z-50 md:text-[12.4444px] md:gap-x-[7.11111px] md:flex md:leading-[13.6889px] md:pt-[5.33333px] md:pb-[6.22933px] md:px-[14.2222px] md:rounded-[35.5556px]"
              >
                <span className="text-sm box-border caret-transparent block leading-[15.4px] md:text-[12.4444px] md:leading-[13.6889px]">
                  Decline all
                </span>
              </button>
              <button 
                onClick={() => {
                  setIsAccepted(true);
                  setIsPreferencesOpen(false);
                  localStorage.setItem("cookieConsent", "custom");
                }}
                type="button"
                className="text-sm items-center bg-transparent caret-transparent gap-x-2 inline-flex leading-[15.4px] text-center border border-gray-200/20 pl-3.5 pr-2.5 py-2.5 rounded-[40px] border-solid font-pp_neue_montreal cursor-pointer z-50 md:text-[12.4444px] md:gap-x-[7.11111px] md:flex md:leading-[13.6889px] md:pt-[5.33333px] md:pb-[6.22933px] md:px-[14.2222px] md:rounded-[35.5556px]"
              >
                <span className="text-sm box-border caret-transparent block leading-[15.4px] md:text-[12.4444px] md:leading-[13.6889px]">
                  Save my choices
                </span>
              </button>
              <button 
                onClick={() => setIsPreferencesOpen(false)}
                type="button"
                className="text-base bg-transparent caret-transparent inline-block h-6 leading-6 text-center w-6 ml-4 p-0 cursor-pointer z-50 md:text-[14.2222px] md:block md:h-[21.3333px] md:leading-[21.3333px] md:w-[21.3333px] md:ml-[14.2222px]"
              >
                <img
                  src="https://c.animaapp.com/mhhesajdVjc9dV/assets/2.svg"
                  alt="Close preferences"
                  className="text-base aspect-[auto_24_/_24] box-border caret-transparent leading-6 max-w-full w-full md:text-[14.2222px] md:leading-[21.3333px]"
                />
              </button>
            </div>
          </div>
          <div className="text-base items-stretch box-border caret-transparent flex flex-col leading-6 p-6 md:text-[14.2222px] md:leading-[21.3333px] md:p-[21.3333px]">
            <span className="text-sm box-border caret-transparent block leading-[15.4px] mb-2 font-pp_neue_montreal md:text-[14.2222px] md:leading-[15.6444px] md:mb-[7.11111px]">
              You control your data
            </span>
            <p className="text-gray-200/60 text-xs box-border caret-transparent tracking-[normal] leading-[18px] border-gray-200/20 mb-6 pb-6 border-b border-solid font-ui_sans_serif md:text-[12.4444px] md:tracking-[0.124444px] md:leading-[17.4222px] md:mb-[21.3333px] md:pb-[21.3333px] md:font-pp_neue_montreal">
              Learn more about the cookies we use, and choose which cookies to
              allow.
            </p>
            <div className="text-base items-stretch box-border caret-transparent gap-x-2 flex flex-col leading-6 gap-y-2 md:text-[14.2222px] md:gap-x-4 md:leading-[21.3333px] md:gap-y-4">
              <div className="text-xs box-border caret-transparent leading-[15.6px] font-pp_neue_montreal md:text-[12.4444px] md:leading-[16.1778px]">
                <label className="text-xs items-center box-border caret-transparent gap-x-3 flex h-[26px] leading-[15.6px] gap-y-3 w-full md:text-[12.4444px] md:gap-x-[10.6667px] md:h-[23.1111px] md:leading-[16.1778px] md:gap-y-[10.6667px]">
                  Required
                  <span className="text-xs box-border caret-transparent block leading-[15.6px] -order-last md:text-[12.4444px] md:leading-[16.1778px]">
                    <img
                      src="https://c.animaapp.com/mhhesajdVjc9dV/assets/3.svg"
                      alt=""
                      className="text-xs aspect-[auto_16_/_16] box-border caret-transparent leading-[15.6px] max-w-full w-4 md:text-[12.4444px] md:leading-[16.1778px] md:w-[14.2222px]"
                    />
                  </span>
                </label>
                <p className="text-gray-200/60 text-xs box-border caret-transparent leading-[15.6px] pl-7 md:text-[12.4444px] md:leading-[16.1778px] md:pl-[24.8889px]">
                  These cookies are necessary for the site to function properly,
                  including capabilities like being able to contact us, using
                  metric or imperial systems, and more.
                </p>
              </div>
              <div className="text-xs box-border caret-transparent leading-[15.6px] font-pp_neue_montreal md:text-[12.4444px] md:leading-[16.1778px]">
                <label className="text-xs items-center box-border caret-transparent gap-x-3 flex h-[26px] leading-[15.6px] gap-y-3 w-full md:text-[12.4444px] md:gap-x-[10.6667px] md:h-[23.1111px] md:leading-[16.1778px] md:gap-y-[10.6667px]">
                  Personalisation
                  <span className="text-xs box-border caret-transparent block leading-[15.6px] -order-last md:text-[12.4444px] md:leading-[16.1778px]">
                    <img
                      src="https://c.animaapp.com/mhhesajdVjc9dV/assets/4.svg"
                      alt=""
                      className="text-xs aspect-[auto_16_/_16] box-border caret-transparent leading-[15.6px] max-w-full w-4 md:text-[12.4444px] md:leading-[16.1778px] md:w-[14.2222px]"
                    />
                    <img
                      src="https://c.animaapp.com/mhhesajdVjc9dV/assets/3.svg"
                      alt=""
                      className="text-xs aspect-[auto_16_/_16] box-border caret-transparent hidden leading-[15.6px] max-w-full w-4 md:text-[12.4444px] md:leading-[16.1778px] md:w-[14.2222px]"
                    />
                  </span>
                </label>
                <p className="text-gray-200/60 text-xs box-border caret-transparent leading-[15.6px] pl-7 md:text-[12.4444px] md:leading-[16.1778px] md:pl-[24.8889px]">
                  These cookies store details about your actions to personalize
                  your next visit to the website.
                </p>
              </div>
              <div className="text-xs box-border caret-transparent leading-[15.6px] font-pp_neue_montreal md:text-[12.4444px] md:leading-[16.1778px]">
                <label className="text-xs items-center box-border caret-transparent gap-x-3 flex h-[26px] leading-[15.6px] gap-y-3 w-full md:text-[12.4444px] md:gap-x-[10.6667px] md:h-[23.1111px] md:leading-[16.1778px] md:gap-y-[10.6667px]">
                  Marketing
                  <span className="text-xs box-border caret-transparent block leading-[15.6px] -order-last md:text-[12.4444px] md:leading-[16.1778px]">
                    <img
                      src="https://c.animaapp.com/mhhesajdVjc9dV/assets/4.svg"
                      alt=""
                      className="text-xs aspect-[auto_16_/_16] box-border caret-transparent leading-[15.6px] max-w-full w-4 md:text-[12.4444px] md:leading-[16.1778px] md:w-[14.2222px]"
                    />
                    <img
                      src="https://c.animaapp.com/mhhesajdVjc9dV/assets/3.svg"
                      alt=""
                      className="text-xs aspect-[auto_16_/_16] box-border caret-transparent hidden leading-[15.6px] max-w-full w-4 md:text-[12.4444px] md:leading-[16.1778px] md:w-[14.2222px]"
                    />
                  </span>
                </label>
                <p className="text-gray-200/60 text-xs box-border caret-transparent leading-[15.6px] pl-7 md:text-[12.4444px] md:leading-[16.1778px] md:pl-[24.8889px]">
                  These cookies are used to optimise marketing communications and
                  show you ads on other sites.
                </p>
              </div>
              <div className="text-xs box-border caret-transparent leading-[15.6px] font-pp_neue_montreal md:text-[12.4444px] md:leading-[16.1778px]">
                <label className="text-xs items-center box-border caret-transparent gap-x-3 flex h-[26px] leading-[15.6px] gap-y-3 w-full md:text-[12.4444px] md:gap-x-[10.6667px] md:h-[23.1111px] md:leading-[16.1778px] md:gap-y-[10.6667px]">
                  Analytics
                  <span className="text-xs box-border caret-transparent block leading-[15.6px] -order-last md:text-[12.4444px] md:leading-[16.1778px]">
                    <img
                      src="https://c.animaapp.com/mhhesajdVjc9dV/assets/4.svg"
                      alt=""
                      className="text-xs aspect-[auto_16_/_16] box-border caret-transparent leading-[15.6px] max-w-full w-4 md:text-[12.4444px] md:leading-[16.1778px] md:w-[14.2222px]"
                    />
                    <img
                      src="https://c.animaapp.com/mhhesajdVjc9dV/assets/3.svg"
                      alt=""
                      className="text-xs aspect-[auto_16_/_16] box-border caret-transparent hidden leading-[15.6px] max-w-full w-4 md:text-[12.4444px] md:leading-[16.1778px] md:w-[14.2222px]"
                    />
                  </span>
                </label>
                <p className="text-gray-200/60 text-xs box-border caret-transparent leading-[15.6px] pl-7 md:text-[12.4444px] md:leading-[16.1778px] md:pl-[24.8889px]">
                  These cookies help us understand how you interact with the site.
                  We use this data to identify areas to improve.
                </p>
              </div>
            </div>
            <div className="text-base items-center box-border caret-transparent gap-x-2 flex flex-wrap leading-6 gap-y-2 mt-4 md:text-[14.2222px] md:gap-x-[7.11111px] md:hidden md:leading-[21.3333px] md:gap-y-[7.11111px] md:mt-[14.2222px]">
              <button 
                onClick={handleAccept}
                type="button"
                className="text-sm items-center bg-transparent caret-transparent gap-x-2 flex basis-[0%] grow justify-center leading-[15.4px] text-center border border-gray-200/20 pl-3.5 pr-2.5 py-2.5 rounded-[40px] border-solid font-pp_neue_montreal cursor-pointer z-50 md:text-[12.4444px] md:gap-x-[7.11111px] md:inline-flex md:leading-[13.6889px] md:pt-[5.33333px] md:pb-[6.22933px] md:px-[14.2222px] md:rounded-[35.5556px]"
              >
                <span className="text-sm box-border caret-transparent block leading-[15.4px] md:text-[12.4444px] md:leading-[13.6889px]">
                  Accept all
                </span>
              </button>
              <button 
                onClick={handleDecline}
                type="button"
                className="text-sm items-center bg-transparent caret-transparent gap-x-2 flex basis-[0%] grow justify-center leading-[15.4px] text-center border border-gray-200/20 pl-3.5 pr-2.5 py-2.5 rounded-[40px] border-solid font-pp_neue_montreal cursor-pointer z-50 md:text-[12.4444px] md:gap-x-[7.11111px] md:inline-flex md:leading-[13.6889px] md:pt-[5.33333px] md:pb-[6.22933px] md:px-[14.2222px] md:rounded-[35.5556px]"
              >
                <span className="text-sm box-border caret-transparent block leading-[15.4px] md:text-[12.4444px] md:leading-[13.6889px]">
                  Decline all
                </span>
              </button>
              <button 
                onClick={() => {
                  setIsAccepted(true);
                  setIsPreferencesOpen(false);
                  localStorage.setItem("cookieConsent", "custom");
                }}
                type="button"
                className="text-sm items-center bg-transparent caret-transparent gap-x-2 flex justify-center leading-[15.4px] text-center w-full border border-gray-200/20 pl-3.5 pr-2.5 py-2.5 rounded-[40px] border-solid font-pp_neue_montreal cursor-pointer z-50 md:text-[12.4444px] md:gap-x-[7.11111px] md:inline-flex md:leading-[13.6889px] md:pt-[5.33333px] md:pb-[6.22933px] md:px-[14.2222px] md:rounded-[35.5556px]"
              >
                <span className="text-sm box-border caret-transparent block leading-[15.4px] md:text-[12.4444px] md:leading-[13.6889px]">
                  Save my choices
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  