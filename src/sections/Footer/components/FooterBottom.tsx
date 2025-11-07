export type FooterBottomProps = {
    variant: string;
    logoUrl?: string;
    logoAlt?: string;
    contactUsUrl?: string;
    contactUsIconUrl?: string;
    scrollIconUrl?: string;
    usTime?: string;
    sgTime?: string;
    usPhone?: string;
    sgPhone?: string;
    copyrightText?: string;
    siteByText?: string;
    siteByUrl?: string;
    privacyPolicyUrl?: string;
    cookiePolicyUrl?: string;
    termsConditionsUrl?: string;
  };
  
  export const FooterBottom = (props: FooterBottomProps) => {
    if (props.variant === "desktop") {
      return (
        <div className="text-base box-border caret-transparent col-end-[-1] col-start-1 leading-6 md:text-[14.2222px] md:leading-[21.3333px] items-end hidden flex-wrap justify-between min-h-0 min-w-0 md:flex md:col-end-[span_12] md:col-start-[span_12] md:min-h-[auto] md:min-w-[auto]">
          <div className="text-base box-border caret-transparent leading-6 md:text-[14.2222px] md:leading-[21.3333px] hidden shrink-0 min-h-0 min-w-0 w-[40.6%] mr-[106px] md:block md:min-h-[auto] md:min-w-[auto] md:mr-[94.2222px]">
            <div className="relative text-base box-border caret-transparent leading-6 md:text-[14.2222px] md:leading-[21.3333px] mt-[200px] md:mt-[177.778px]">
              <img
                src={props.logoUrl}
                alt={props.logoAlt}
                className="text-base box-border caret-transparent leading-6 w-full md:text-[14.2222px] md:leading-[21.3333px] aspect-[auto_566_/_89] max-w-full"
              />
              <a
                href="/"
                className="text-base box-border caret-transparent leading-6 md:text-[14.2222px] md:leading-[21.3333px] before:accent-auto before:box-border before:caret-transparent before:text-gray-200 before:block before:text-base before:not-italic before:normal-nums before:font-normal before:h-full before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:pointer-events-auto before:absolute before:text-start before:indent-[0px] before:normal-case before:visible before:w-full before:z-[1] before:border-separate before:left-0 before:top-0 before:font-ui_sans_serif before:md:text-[14.2222px] before:md:leading-[21.3333px]"
              ></a>
            </div>
          </div>
          <div className="box-border caret-transparent flex text-base items-end basis-[0%] grow leading-6 min-h-0 min-w-0 mt-10 md:text-[14.2222px] md:leading-[21.3333px] md:min-h-[auto] md:min-w-[auto] md:mt-[35.5556px]">
            <div className="box-border caret-transparent flex text-base items-end basis-[0%] grow justify-between leading-6 min-h-0 min-w-0 md:text-[14.2222px] md:leading-[21.3333px] md:min-h-[auto] md:min-w-[auto]">
              <a
                href={props.contactUsUrl}
                className="caret-transparent border-solid text-sm items-center box-border gap-x-2 flex leading-[15.4px] min-h-0 min-w-0 border border-gray-200/20 pl-3.5 pr-2.5 py-1.5 rounded-[40px] font-pp_neue_montreal md:text-[13.3404px] md:gap-x-[7.11111px] md:leading-[14.6745px] md:min-h-[auto] md:min-w-[auto] md:pl-[14.2222px] md:pr-[10.6667px] md:pt-[5.33333px] md:pb-[6.22933px] md:rounded-[35.5556px]"
              >
                <span className="text-sm box-border caret-transparent block leading-[15.4px] min-h-0 min-w-0 md:text-[13.3404px] md:leading-[14.6745px] md:min-h-[auto] md:min-w-[auto]">
                  Contact us
                </span>
                <img
                  src={props.contactUsIconUrl}
                  alt="Icon"
                  className="text-sm box-border caret-transparent shrink-0 h-[18.24px] leading-[15.4px] transform-none md:text-[13.3404px] md:h-[15.0756px] md:leading-[14.6745px] md:-rotate-45"
                />
              </a>
              <div className="text-xs items-start box-border caret-transparent flex flex-col leading-[15.6px] min-h-0 min-w-0 uppercase font-silka_mono md:text-[10.6667px] md:leading-[13.8667px] md:min-h-[auto] md:min-w-[auto]">
                <span className="text-xs box-border caret-transparent block leading-[15.6px] min-h-0 min-w-0 md:text-[10.6667px] md:leading-[13.8667px] md:min-h-[auto] md:min-w-[auto]">
                  United States
                </span>
                
                <a
                  href={`tel://${props.usPhone}`}
                  className="text-xs caret-transparent block leading-[15.6px] min-h-0 min-w-0 outline-transparent outline-offset-2 outline outline-2 border-b-2 border-solid border-transparent md:text-[10.6667px] md:leading-[13.8667px] md:min-h-[auto] md:min-w-[auto] md:outline-offset-[1.76562px] md:outline-1 md:border-b"
                >
                  {props.usPhone}
                </a>
              </div>
              <div className="text-xs items-start box-border caret-transparent flex flex-col leading-[15.6px] min-h-0 min-w-0 uppercase font-silka_mono md:text-[10.6667px] md:leading-[13.8667px] md:min-h-[auto] md:min-w-[auto]">
                <span className="text-xs box-border caret-transparent block leading-[15.6px] min-h-0 min-w-0 md:text-[10.6667px] md:leading-[13.8667px] md:min-h-[auto] md:min-w-[auto]">
                  Singapore
                </span>
                
                <a
                  href={`tel://${props.sgPhone}`}
                  className="text-xs caret-transparent block leading-[15.6px] min-h-0 min-w-0 outline-transparent outline-offset-2 outline outline-2 border-b-2 border-solid border-transparent md:text-[10.6667px] md:leading-[13.8667px] md:min-h-[auto] md:min-w-[auto] md:outline-offset-[1.76562px] md:outline-1 md:border-b"
                >
                  {props.sgPhone}
                </a>
              </div>
            </div>
            <div className="box-border caret-transparent relative text-base shrink-0 leading-6 min-h-0 min-w-0 w-[58px] ml-[140px] md:text-[14.2222px] md:leading-[21.3333px] md:min-h-[auto] md:min-w-[auto] md:w-[51.5556px] md:ml-[124.444px]">
              <img
                src={props.scrollIconUrl}
                alt="Icon"
                className="text-base box-border caret-transparent leading-6 w-full md:text-[14.2222px] md:leading-[21.3333px]"
              />
            </div>
          </div>
        </div>
      );
    }
  
    if (props.variant === "tablet") {
      return (
        <div className="text-base box-border caret-transparent col-end-[-1] col-start-1 leading-6 md:text-[14.2222px] md:leading-[21.3333px] items-stretch gap-x-2 grid grid-cols-[repeat(4,minmax(0px,1fr))] min-h-[auto] min-w-[auto] gap-y-8 mt-16 md:gap-x-[22.4px] md:hidden md:grid-cols-[repeat(12,minmax(0px,1fr))] md:min-h-0 md:min-w-0 md:gap-y-[28.4444px] md:mt-[56.8889px]">
          <div className="text-base box-border caret-transparent leading-6 md:text-[14.2222px] md:leading-[21.3333px] items-start flex flex-col col-end-[span_2] col-start-1 justify-between min-h-[auto] min-w-[auto] gap-y-4 md:min-h-0 md:min-w-0 md:gap-y-[14.2222px]">
            <a
              href={props.contactUsUrl}
              className="text-sm items-center box-border caret-transparent gap-x-2 flex leading-[15.4px] min-h-[auto] min-w-[auto] border border-gray-200/20 pl-3.5 pr-2.5 py-1.5 rounded-[40px] border-solid font-pp_neue_montreal md:text-[13.3404px] md:gap-x-[7.11111px] md:leading-[14.6745px] md:min-h-0 md:min-w-0 md:pl-[14.2222px] md:pr-[10.6667px] md:pt-[5.33333px] md:pb-[6.22933px] md:rounded-[35.5556px]"
            >
              <span className="text-sm box-border caret-transparent block leading-[15.4px] min-h-[auto] min-w-[auto] md:text-[13.3404px] md:leading-[14.6745px] md:min-h-0 md:min-w-0">
                Contact us
              </span>
              <img
                src={props.contactUsIconUrl}
                alt="Icon"
                className="text-sm box-border caret-transparent shrink-0 h-[18.24px] leading-[15.4px] -rotate-45 md:text-[13.3404px] md:h-[15.0756px] md:leading-[14.6745px] md:transform-none"
              />
            </a>
            <div className="relative text-base box-border caret-transparent leading-6 md:text-[14.2222px] md:leading-[21.3333px] shrink-0 min-h-[auto] min-w-[auto] w-[38px] md:min-h-0 md:min-w-0 md:w-[33.7778px]">
              <img
                src={props.scrollIconUrl}
                alt="Icon"
                className="text-base box-border caret-transparent leading-6 w-full md:text-[14.2222px] md:leading-[21.3333px]"
              />
            </div>
          </div>
          <div className="box-border caret-transparent flex text-[11.008px] items-start flex-col col-end-[span_2] col-start-3 leading-[14.3104px] min-h-[auto] min-w-[auto] gap-y-6 uppercase font-silka_mono md:text-[9.78489px] md:leading-[12.7204px] md:min-h-0 md:min-w-0 md:gap-y-[21.3333px]">
            <div className="box-border caret-transparent text-[11.008px] items-start flex flex-col leading-[14.3104px] min-h-[auto] min-w-[auto] md:text-[9.78489px] md:leading-[12.7204px] md:min-h-0 md:min-w-0">
              <span className="text-[11.008px] box-border caret-transparent block leading-[14.3104px] min-h-[auto] min-w-[auto] md:text-[9.78489px] md:leading-[12.7204px] md:min-h-0 md:min-w-0">
                United States
              </span>
            
              <a
                href={`tel://${props.usPhone}`}
                className="text-[11.008px] caret-transparent block leading-[14.3104px] min-h-[auto] min-w-[auto] outline-transparent outline-offset-2 outline outline-2 border-b-2 border-solid border-transparent md:text-[9.78489px] md:leading-[12.7204px] md:min-h-0 md:min-w-0 md:outline-offset-[1.76562px] md:outline-1 md:border-b"
              >
                {props.usPhone}
              </a>
            </div>
            <div className="box-border caret-transparent text-[11.008px] items-start flex flex-col leading-[14.3104px] min-h-[auto] min-w-[auto] md:text-[9.78489px] md:leading-[12.7204px] md:min-h-0 md:min-w-0">
              <span className="text-[11.008px] box-border caret-transparent block leading-[14.3104px] min-h-[auto] min-w-[auto] md:text-[9.78489px] md:leading-[12.7204px] md:min-h-0 md:min-w-0">
                Singapore
              </span>
              
              <a
                href={`tel://${props.sgPhone}`}
                className="text-[11.008px] caret-transparent block leading-[14.3104px] min-h-[auto] min-w-[auto] outline-transparent outline-offset-2 outline outline-2 border-b-2 border-solid border-transparent md:text-[9.78489px] md:leading-[12.7204px] md:min-h-0 md:min-w-0 md:outline-offset-[1.76562px] md:outline-1 md:border-b"
              >
                {props.sgPhone}
              </a>
            </div>
          </div>
          <div className="text-[11.008px] box-border caret-transparent col-end-[span_2] col-start-[span_2] leading-[14.3104px] min-h-[auto] min-w-[auto] uppercase font-silka_mono md:text-[9.78489px] md:leading-[12.7204px] md:min-h-0 md:min-w-0">
            <span className="text-[11.008px] box-border caret-transparent leading-[14.3104px] md:text-[9.78489px] md:leading-[12.7204px]">
              {props.copyrightText}
            </span>
          </div>
          <div className="text-[11.008px] box-border caret-transparent col-end-[span_2] col-start-[span_2] leading-[14.3104px] min-h-[auto] min-w-[auto] uppercase font-silka_mono md:text-[9.78489px] md:leading-[12.7204px] md:min-h-0 md:min-w-0">
            <span className="text-[11.008px] box-border caret-transparent leading-[14.3104px] md:text-[9.78489px] md:leading-[12.7204px]">
              {props.siteByText}
              <a
                href={props.siteByUrl}
                className="text-[11.008px] box-border caret-transparent leading-[14.3104px] outline-transparent outline-offset-2 outline outline-2 underline underline-offset-[3.008px] border-b-2 border-solid border-transparent md:text-[9.78489px] md:leading-[12.7204px] md:outline-offset-[1.76562px] md:outline-1 md:underline-offset-[2.67378px] md:border-b"
              >
                Series Eight
              </a>
            </span>
          </div>
        </div>
      );
    }
  
    return (
      <nav
        aria-label="Secondary footer menu"
        className="text-base box-border caret-transparent leading-6 max-w-[2400px] text-center border-gray-200/10 mt-10 mx-auto pt-0 px-4 border-t-0 border-solid md:text-[14.2222px] md:leading-[21.3333px] md:mt-[28.4444px] md:pt-4 md:px-[22.7556px] md:border-t"
      >
        <ul className="text-[11.008px] items-center box-border caret-transparent gap-x-4 flex flex-wrap justify-center leading-[12.1088px] list-none gap-y-4 uppercase text-nowrap pl-0 font-silka_mono md:text-[10.6667px] md:gap-x-[normal] md:leading-[11.7333px] md:gap-y-[14.2222px]">
          <li className="text-[11.008px] box-border caret-transparent hidden leading-[12.1088px] min-h-0 min-w-0 text-nowrap md:text-[10.6667px] md:list-item md:leading-[11.7333px] md:min-h-[auto] md:min-w-[auto]">
            <span className="text-[11.008px] box-border caret-transparent leading-[12.1088px] text-nowrap md:text-[10.6667px] md:leading-[11.7333px]">
              {props.copyrightText}
            </span>
          </li>
          <li className="text-[11.008px] box-border caret-transparent hidden basis-[0%] grow leading-[12.1088px] min-h-0 min-w-0 opacity-60 pointer-events-none text-nowrap md:text-[10.6667px] md:list-item md:leading-[11.7333px] md:min-h-[auto] md:min-w-[auto] after:accent-auto after:box-border after:caret-transparent after:text-gray-200 after:text-[11.008px] after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[12.1088px] after:list-outside after:list-none after:pointer-events-none after:text-center after:indent-[0px] after:uppercase after:text-nowrap after:visible after:border-separate after:font-silka_mono after:md:text-[10.6667px] after:md:leading-[11.7333px]"></li>
          <li className="text-[11.008px] box-border caret-transparent leading-[12.1088px] text-nowrap md:text-[10.6667px] md:leading-[11.7333px]">
            <a
              href={props.privacyPolicyUrl}
              title="Read our privacy policy"
              className="text-[11.008px] box-border caret-transparent leading-[12.1088px] outline-transparent outline-offset-2 outline outline-2 underline underline-offset-[3.008px] text-nowrap border-b-2 border-solid border-transparent md:text-[10.6667px] md:leading-[11.7333px] md:outline-offset-[1.76562px] md:outline-1 md:underline-offset-[2.67378px] md:border-b"
            >
              <span className="text-[11.008px] box-border caret-transparent hidden leading-[12.1088px] underline-offset-[3.008px] text-nowrap md:text-[10.6667px] md:inline md:leading-[11.7333px] md:underline-offset-[2.67378px]">
                Privacy policy
              </span>
              <span className="text-[11.008px] box-border caret-transparent inline leading-[12.1088px] underline-offset-[3.008px] text-nowrap md:text-[10.6667px] md:hidden md:leading-[11.7333px] md:underline-offset-[2.67378px]">
                Privacy
              </span>
            </a>
          </li>
          <li className="text-[11.008px] box-border caret-transparent basis-[0%] grow leading-[12.1088px] opacity-60 pointer-events-none text-nowrap md:text-[10.6667px] md:leading-[11.7333px] after:accent-auto after:box-border after:caret-transparent after:text-gray-200 after:text-[11.008px] after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[12.1088px] after:list-outside after:list-none after:pointer-events-none after:text-center after:indent-[0px] after:uppercase after:text-nowrap after:visible after:border-separate after:font-silka_mono after:md:text-[10.6667px] after:md:leading-[11.7333px]"></li>
          <li className="text-[11.008px] box-border caret-transparent leading-[12.1088px] text-nowrap md:text-[10.6667px] md:leading-[11.7333px]">
            <a
              href={props.cookiePolicyUrl}
              title="Read our cookie policy"
              className="text-[11.008px] box-border caret-transparent leading-[12.1088px] outline-transparent outline-offset-2 outline outline-2 underline underline-offset-[3.008px] text-nowrap border-b-2 border-solid border-transparent md:text-[10.6667px] md:leading-[11.7333px] md:outline-offset-[1.76562px] md:outline-1 md:underline-offset-[2.67378px] md:border-b"
            >
              <span className="text-[11.008px] box-border caret-transparent hidden leading-[12.1088px] underline-offset-[3.008px] text-nowrap md:text-[10.6667px] md:inline md:leading-[11.7333px] md:underline-offset-[2.67378px]">
                Cookie policy
              </span>
              <span className="text-[11.008px] box-border caret-transparent inline leading-[12.1088px] underline-offset-[3.008px] text-nowrap md:text-[10.6667px] md:hidden md:leading-[11.7333px] md:underline-offset-[2.67378px]">
                Cookies
              </span>
            </a>
          </li>
          <li className="text-[11.008px] box-border caret-transparent basis-[0%] grow leading-[12.1088px] opacity-60 pointer-events-none text-nowrap md:text-[10.6667px] md:leading-[11.7333px] after:accent-auto after:box-border after:caret-transparent after:text-gray-200 after:text-[11.008px] after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[12.1088px] after:list-outside after:list-none after:pointer-events-none after:text-center after:indent-[0px] after:uppercase after:text-nowrap after:visible after:border-separate after:font-silka_mono after:md:text-[10.6667px] after:md:leading-[11.7333px]"></li>
          <li className="text-[11.008px] box-border caret-transparent leading-[12.1088px] text-nowrap md:text-[10.6667px] md:leading-[11.7333px]">
            <a
              href={props.termsConditionsUrl}
              title="Read our terms & conditions"
              className="text-[11.008px] box-border caret-transparent leading-[12.1088px] outline-transparent outline-offset-2 outline outline-2 underline underline-offset-[3.008px] text-nowrap border-b-2 border-solid border-transparent md:text-[10.6667px] md:leading-[11.7333px] md:outline-offset-[1.76562px] md:outline-1 md:underline-offset-[2.67378px] md:border-b"
            >
              <span className="text-[11.008px] box-border caret-transparent hidden leading-[12.1088px] underline-offset-[3.008px] text-nowrap md:text-[10.6667px] md:inline md:leading-[11.7333px] md:underline-offset-[2.67378px]">
                Terms &amp; conditions
              </span>
              <span className="text-[11.008px] box-border caret-transparent inline leading-[12.1088px] underline-offset-[3.008px] text-nowrap md:text-[10.6667px] md:hidden md:leading-[11.7333px] md:underline-offset-[2.67378px]">
                Terms
              </span>
            </a>
          </li>
          <li className="text-[11.008px] box-border caret-transparent hidden basis-[0%] grow leading-[12.1088px] min-h-0 min-w-0 opacity-60 pointer-events-none text-nowrap md:text-[10.6667px] md:list-item md:leading-[11.7333px] md:min-h-[auto] md:min-w-[auto] after:accent-auto after:box-border after:caret-transparent after:text-gray-200 after:text-[11.008px] after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[12.1088px] after:list-outside after:list-none after:pointer-events-none after:text-center after:indent-[0px] after:uppercase after:text-nowrap after:visible after:border-separate after:font-silka_mono after:md:text-[10.6667px] after:md:leading-[11.7333px]"></li>
          <li className="text-[11.008px] box-border caret-transparent hidden leading-[12.1088px] min-h-0 min-w-0 text-nowrap md:text-[10.6667px] md:list-item md:leading-[11.7333px] md:min-h-[auto] md:min-w-[auto]">
            <span className="text-[11.008px] box-border caret-transparent leading-[12.1088px] text-nowrap md:text-[10.6667px] md:leading-[11.7333px]">
              {props.siteByText}
              <a
                href={props.siteByUrl}
                className="text-[11.008px] box-border caret-transparent leading-[12.1088px] outline-transparent outline-offset-2 outline outline-2 underline underline-offset-[3.008px] text-nowrap border-b-2 border-solid border-transparent md:text-[10.6667px] md:leading-[11.7333px] md:outline-offset-[1.76562px] md:outline-1 md:underline-offset-[2.67378px] md:border-b"
              >
                Series Eight
              </a>
            </span>
          </li>
        </ul>
      </nav>
    );
  };
  