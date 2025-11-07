export type FooterColumnProps = {
    title: string;
    ariaLabel: string;
    links: Array<{
      href: string;
      text: string;
    }>;
  };
  
  export const FooterColumn = (props: FooterColumnProps) => {
    return (
      <div className="text-base items-start box-border caret-transparent flex flex-col leading-6 w-full border-gray-200/20 border-b border-solid md:text-[14.2222px] md:leading-[21.3333px] md:w-[11.6%] md:border-gray-200 md:border-b-0">
        <h2
          aria-label={props.ariaLabel}
          className="relative text-base box-border caret-transparent leading-6 w-full mb-0 scroll-mt-14 md:text-[14.2222px] md:leading-[21.3333px] md:mb-[14.2222px] md:scroll-mt-[78.2222px]"
        >
          <button
            type="button"
            aria-label={`Open ${props.title} accordion`}
            className="text-[11.008px] bg-transparent caret-transparent leading-[12.1088px] text-left decoration-blue-500 decoration-2 uppercase underline-offset-[3.008px] w-full px-0 py-6 font-silka_mono md:text-[10.6667px] md:leading-[11.7333px] md:decoration-[1.77778px] md:underline-offset-[2.67378px] md:py-0"
          >
            {props.title}
          </button>
          <span className="absolute text-base box-border caret-transparent block h-4 leading-6 pointer-events-none translate-y-[-50.0%] w-4 right-0 top-2/4 md:text-[14.2222px] md:hidden md:h-[14.2222px] md:leading-[21.3333px] md:transform-none md:w-[14.2222px]">
            <span className="absolute text-base bg-gray-200 box-border caret-transparent block h-[1.008px] leading-6 translate-y-[-50.0%] w-full left-0 top-2/4 md:text-[14.2222px] md:h-[0.896px] md:leading-[21.3333px] md:transform-none"></span>
            <span className="absolute text-base bg-gray-200 box-border caret-transparent block h-[1.008px] leading-6 translate-y-[-0.5px] rotate-90 w-full left-0 top-2/4 md:text-[14.2222px] md:h-[0.896px] md:leading-[21.3333px] md:transform-none"></span>
          </span>
        </h2>
        <div className="text-base box-border caret-transparent hidden h-0 leading-6 min-h-0 min-w-0 w-full overflow-hidden md:text-[14.2222px] md:block md:h-auto md:leading-[21.3333px] md:min-h-[auto] md:min-w-[auto] md:overflow-visible">
          <ul className="text-[15.008px] items-start box-border caret-transparent flex flex-col leading-[16.5088px] list-none gap-y-3 text-nowrap pl-0 pb-6 font-pp_neue_montreal md:text-[13.3404px] md:leading-[14.6745px] md:gap-y-[10.6667px] md:pb-0">
            {props.links.map((link, index) => (
              <li
                key={index}
                className="text-[15.008px] box-border caret-transparent leading-[16.5088px] min-h-0 min-w-0 text-nowrap w-full md:text-[13.3404px] md:leading-[14.6745px] md:min-h-[auto] md:min-w-[auto]"
              >
                <a
                  href={link.href}
                  className="text-[15.008px] items-center box-border caret-transparent gap-x-1 inline-flex leading-[16.5088px] max-w-full outline-transparent outline-offset-2 outline outline-2 text-nowrap border-b-2 border-solid border-transparent md:text-[13.3404px] md:gap-x-[3.55556px] md:leading-[14.6745px] md:outline-offset-[1.76562px] md:outline-1 md:border-b"
                >
                  <span className="text-[15.008px] box-border caret-transparent block leading-[16.5088px] min-h-0 min-w-0 text-nowrap md:text-[13.3404px] md:leading-[14.6745px] md:min-h-[auto] md:min-w-[auto]">
                    {link.text}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };
  