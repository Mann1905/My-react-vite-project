import { ChevronDown } from "lucide-react";

export type NavDropdownProps = {
    label: string;
    hasProductsLayout?: boolean;
    productCategories?: Array<{
      title: string;
      items: Array<{
        iconUrl: string;
        iconClassName?: string;
        title: string;
        href: string;
        description: string;
        itemClassName?: string;
      }>;
      className?: string;
    }>;
    ctaCards?: Array<{
      imageUrl: string;
      imageClassName?: string;
      title: string;
      description: string;
      linkText: string;
      linkHref: string;
      linkAriaLabel: string;
      cardClassName?: string;
    }>;
    simpleCards?: Array<{
      imageUrl: string;
      imageClassName?: string;
      imageSizes: string;
      title: string;
      description: string;
      linkText: string;
      linkHref: string;
      linkTitle: string;
      cardClassName?: string;
    }>;
  };
  
  export const NavDropdown = (props: NavDropdownProps) => {
    return (
      <li
        role="none"
        className="text-base box-border caret-transparent flex flex-col justify-center leading-6 border-stone-950/20 border-b border-solid md:text-[14.2222px] md:leading-[21.3333px] md:border-stone-950 md:border-b-0"
      >
        <button
          onClick={() => {}}
          role="menuitem"
          className="relative text-base items-center bg-transparent caret-transparent gap-x-1 flex justify-between leading-[18.24px] text-center decoration-blue-500 decoration-2 uppercase underline-offset-[3.008px] px-0 py-6 font-silka_mono md:text-[12.4444px] md:gap-x-[3.55556px] md:justify-normal md:leading-[14.1867px] md:decoration-[1.77778px] md:underline-offset-[2.67378px] md:py-0"
        >
          <span className="text-base box-border caret-transparent block leading-[18.24px] underline-offset-[3.008px] md:text-[12.4444px] md:leading-[14.1867px] md:underline-offset-[2.67378px]">
            {props.label}
          </span>
          <span className="text-base box-border caret-transparent block h-0 leading-[0px] underline-offset-[3.008px] md:text-[12.4444px] md:h-auto md:leading-[12.4444px] md:underline-offset-[2.67378px]">
            <ChevronDown className="w-4 h-4 md:w-[14.2222px] md:h-[14.2222px]" />
          </span>
        </button>
        <div className="fixed text-base bg-gray-200 box-border caret-transparent hidden h-[515.25px] leading-6 opacity-[0.999999] w-full z-10 overflow-hidden pt-[1.008px] left-0 top-[55.008px] md:absolute md:text-[14.2222px] md:leading-[21.3333px] md:pt-[0.896px] md:top-full">
          <div className="absolute text-base bg-stone-900/20 box-border caret-transparent h-[1.008px] leading-6 pointer-events-none w-full left-0 top-[1.008px] md:text-[14.2222px] md:h-[0.896px] md:leading-[21.3333px] md:top-[0.896px]"></div>
          <div className="text-base bg-gray-200 box-border caret-transparent flex flex-col h-fit leading-6 max-h-[944px] w-full overflow-auto md:text-[14.2222px] md:bg-transparent md:block md:flex-row md:leading-[21.3333px] md:max-h-[921.778px]">
            <button 
              onClick={(e) => {
                e.stopPropagation();
                // Close the dropdown by clicking the parent button
                const parentButton = e.currentTarget.closest('li')?.querySelector('button[role="menuitem"]');
                if (parentButton) {
                  (parentButton as HTMLButtonElement).click();
                }
              }}
              type="button"
              className="text-base items-center bg-transparent caret-transparent gap-x-4 flex shrink-0 leading-[18.24px] text-left uppercase w-full border-stone-950/20 px-4 py-6 border-t-0 border-x-0 border-b border-solid font-silka_mono cursor-pointer z-50 md:text-[14.2222px] md:gap-x-[14.2222px] md:hidden md:leading-[16.2133px] md:px-[22.7556px] md:py-[17.7778px]"
            >
              <span className="absolute text-base box-border caret-transparent block leading-[18.24px] left-4 md:text-[14.2222px] md:leading-[16.2133px] md:left-[22.7556px]">
                <img
                  src="https://c.animaapp.com/mhhesajdVjc9dV/assets/icon-2.svg"
                  alt="Icon"
                  className="text-base box-border caret-transparent leading-[18.24px] w-4 md:text-[14.2222px] md:leading-[16.2133px] md:w-[14.2222px]"
                />
              </span>
              <span className="text-base box-border caret-transparent block leading-[18.24px] pl-8 md:text-[14.2222px] md:inline md:leading-[16.2133px] md:pl-[28.4444px]">
                {props.label}
              </span>
            </button>
            <div className="text-base box-border caret-transparent gap-x-2 grid grid-cols-[repeat(4,minmax(0px,1fr))] leading-6 max-w-[2400px] w-full overflow-auto mx-auto px-4 md:text-[14.2222px] md:gap-x-[22.4px] md:grid-cols-[repeat(12,minmax(0px,1fr))] md:leading-[21.3333px] md:overflow-visible md:px-[22.7556px]">
              <div
                className={`text-base box-border caret-transparent leading-6 md:text-[14.2222px] md:col-end-[span_12] md:col-start-[span_12] md:leading-[21.3333px] ${props.hasProductsLayout ? "col-end-[span_4] col-start-[span_4] pt-0 pb-6 md:py-[28.4444px]" : "items-stretch gap-x-[27.008px] flex flex-col col-end-[-1] col-start-1 pb-8 md:gap-x-[24.0071px] md:flex-row md:pb-[28.4444px]"}`}
              >
                {props.hasProductsLayout && props.productCategories ? (
                  <div className="text-base box-border caret-transparent leading-6 md:text-[14.2222px] md:gap-x-[22.4px] md:leading-[21.3333px] gap-x-2 grid grid-cols-[repeat(4,minmax(0px,1fr))]">
                    {props.productCategories.map((category, categoryIndex) => (
                      <div
                        key={categoryIndex}
                        className={`text-base box-border caret-transparent leading-6 md:text-[14.2222px] md:leading-[21.3333px] ${category.className || "col-end-[span_4] col-start-[span_4] mt-6 md:col-end-[span_2] md:col-start-[span_2] md:mt-0"}`}
                      >
                        <span className="text-stone-950/60 text-sm box-border caret-transparent block leading-[15.96px] uppercase border-stone-950/20 mb-4 pb-4 border-b border-solid font-silka_mono md:text-[12.4444px] md:leading-[14.1867px] md:mb-[14.2222px] md:pb-[14.2222px]">
                          {category.title}
                        </span>
                        <ul
                          className={
                            categoryIndex === 0
                              ? "text-base box-border caret-transparent gap-x-2 grid grid-cols-[repeat(1,minmax(0px,1fr))] leading-6 gap-y-4 pl-0 md:text-[14.2222px] md:gap-x-[22.4px] md:grid-cols-[repeat(2,minmax(0px,1fr))] md:leading-[21.3333px] md:gap-y-[28.4444px]"
                              : "text-base box-border caret-transparent gap-x-2 grid grid-cols-[repeat(1,minmax(0px,1fr))] leading-6 gap-y-4 pl-0 md:text-[14.2222px] md:gap-x-[22.4px] md:leading-[21.3333px] md:gap-y-[28.4444px]"
                          }
                        >
                          {category.items.map((item, itemIndex) => (
                            <li
                              key={itemIndex}
                              className={
                                item.itemClassName ||
                                "relative text-base items-start box-border caret-transparent flex flex-col col-end-[span_1] col-start-[span_1] leading-6 gap-y-2.5 border-stone-950/20 pb-4 border-b border-solid md:text-[14.2222px] md:leading-[21.3333px] md:gap-y-[8.88889px] md:border-stone-950 md:pb-0 md:border-b-0"
                              }
                            >
                              <div className="text-base items-center box-border caret-transparent flex leading-6 md:text-[14.2222px] md:leading-[21.3333px]">
                                <div className="text-base items-center box-border caret-transparent flex shrink-0 leading-6 w-[25.008px] md:text-[14.2222px] md:leading-[21.3333px] md:w-[22.2293px]">
                                  <picture className="text-base box-border caret-transparent block leading-6 w-full md:text-[14.2222px] md:leading-[21.3333px]">
                                    <img
                                      src={item.iconUrl}
                                      sizes="calc(16 / 16 * 1rem)"
                                      alt=""
                                      className={
                                        item.iconClassName ||
                                        "text-base aspect-[auto_200_/_200] box-border caret-transparent h-full leading-6 max-h-[15.008px] max-w-[15.008px] object-contain object-[0%_50%] w-full md:text-[14.2222px] md:leading-[21.3333px] md:max-h-[14.2222px] md:max-w-[14.2222px]"
                                      }
                                    />
                                  </picture>
                                </div>
                                <a
                                  href={item.href}
                                  className="text-base items-center box-border caret-transparent gap-x-1 flex leading-[17.6px] border-b-2 border-solid border-transparent font-pp_neue_montreal md:text-[14.2222px] md:gap-x-[3.55556px] md:leading-[15.6444px] md:border-b before:accent-auto before:box-border before:caret-transparent before:text-stone-950 before:block before:text-base before:not-italic before:normal-nums before:font-normal before:h-full before:tracking-[normal] before:leading-[17.6px] before:list-outside before:list-none before:pointer-events-auto before:absolute before:text-start before:indent-[0px] before:normal-case before:visible before:w-full before:z-[1] before:border-separate before:left-0 before:top-0 before:font-pp_neue_montreal before:md:text-[14.2222px] before:md:leading-[15.6444px]"
                                >
                                  <span className="text-base box-border caret-transparent block leading-[17.6px] md:text-[14.2222px] md:leading-[15.6444px]">
                                    {item.title}
                                  </span>
                                  <img
                                    src="https://c.animaapp.com/mhhesajdVjc9dV/assets/icon-3.svg"
                                    alt="Icon"
                                    className="text-base box-border caret-transparent leading-[17.6px] opacity-100 w-4 md:text-[14.2222px] md:leading-[15.6444px] md:opacity-0 md:w-[14.2222px]"
                                  />
                                </a>
                              </div>
                              <div className="text-stone-950/50 text-sm box-border caret-transparent tracking-[0.14px] leading-[19.6px] pl-[25.008px] font-pp_neue_montreal md:text-[12.4444px] md:tracking-[0.124444px] md:leading-[17.4222px] md:pl-[22.2293px]">
                                {item.description}
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ) : null}
  
                {props.hasProductsLayout && props.ctaCards ? (
                  <div className="text-base items-stretch box-border caret-transparent leading-6 border-stone-950/20 mt-6 border-t border-solid md:text-[14.2222px] md:leading-[21.3333px] hidden flex-col md:flex md:flex-row md:mt-[28.4444px]">
                    {props.ctaCards.map((card, cardIndex) => (
                      <div
                        key={cardIndex}
                        className={
                          card.cardClassName ||
                          "text-base box-border caret-transparent flex basis-[0%] grow leading-6 md:text-[14.2222px] md:leading-[21.3333px] relative items-stretch gap-x-4 border-stone-950/20 mr-0 pt-6 border-r-0 border-solid md:gap-x-[22.4px] md:mr-[21.3333px] md:pt-[28.4444px] md:border-r"
                        }
                      >
                        <div className="text-base aspect-[332_/_209] box-border caret-transparent shrink-0 leading-6 w-[23.33%] overflow-hidden mb-6 md:text-[14.2222px] md:leading-[21.3333px] md:w-[calc(50%_-_7.11111px)] md:mb-0">
                          <picture className="text-base box-border caret-transparent leading-6 md:text-[14.2222px] md:leading-[21.3333px]">
                            <img
                              src={card.imageUrl}
                              sizes="calc((332 / 16 * 1rem) * 1.15)"
                              alt=""
                              className={
                                card.imageClassName ||
                                "text-base aspect-[auto_1000_/_800] box-border caret-transparent h-full leading-6 max-w-full object-cover w-full md:text-[14.2222px] md:leading-[21.3333px]"
                              }
                            />
                          </picture>
                        </div>
                        <div
                          className={
                            cardIndex < 2
                              ? "text-base items-start box-border caret-transparent flex basis-[0%] flex-col grow justify-start leading-6 gap-y-2 pr-0 md:text-[14.2222px] md:leading-[21.3333px] md:gap-y-[14.2222px] md:pr-[24.0071px]"
                              : "text-base items-start box-border caret-transparent flex basis-[0%] flex-col grow justify-start leading-6 gap-y-2 md:text-[14.2222px] md:leading-[21.3333px] md:gap-y-[14.2222px]"
                          }
                        >
                          <span className="text-base box-border caret-transparent block leading-[17.6px] font-pp_neue_montreal md:text-[14.2222px] md:leading-[15.6444px]">
                            {card.title}
                          </span>
                          <div className="text-stone-950/50 text-sm box-border caret-transparent tracking-[0.14px] leading-[19.6px] font-pp_neue_montreal md:text-[12.4444px] md:tracking-[0.124444px] md:leading-[17.4222px]">
                            {card.description}
                          </div>
                          <a
                            href={card.linkHref}
                            aria-label={card.linkAriaLabel}
                            className="text-gray-200 text-sm items-center bg-stone-950 box-border caret-transparent gap-x-2 flex leading-[15.4px] border pl-3.5 pr-2.5 py-1.5 rounded-[40px] border-solid border-transparent font-pp_neue_montreal md:text-[13.3404px] md:gap-x-[7.11111px] md:leading-[14.6745px] md:pl-[14.2222px] md:pr-[10.6667px] md:pt-[5.33333px] md:pb-[6.22933px] md:rounded-[35.5556px] before:accent-auto before:box-border before:caret-transparent before:text-gray-200 before:block before:text-sm before:not-italic before:normal-nums before:font-normal before:h-full before:tracking-[normal] before:leading-[15.4px] before:list-outside before:list-none before:pointer-events-auto before:absolute before:text-start before:indent-[0px] before:normal-case before:visible before:w-full before:z-[1] before:border-separate before:left-0 before:top-0 before:font-pp_neue_montreal before:md:text-[13.3404px] before:md:leading-[14.6745px]"
                          >
                            <span className="text-sm box-border caret-transparent block leading-[15.4px] md:text-[13.3404px] md:leading-[14.6745px]">
                              {card.linkText}
                            </span>
                            <img
                              src="https://c.animaapp.com/mhhesajdVjc9dV/assets/icon-4.svg"
                              alt="Icon"
                              className="text-sm box-border caret-transparent shrink-0 h-[18.24px] leading-[15.4px] md:text-[13.3404px] md:h-[15.0756px] md:leading-[14.6745px]"
                            />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : null}
  
                {!props.hasProductsLayout && props.simpleCards ? (
                  <div className="text-base box-border caret-transparent leading-6 md:text-[14.2222px] md:gap-x-[22.4px] md:leading-[21.3333px] relative items-stretch gap-x-4 flex basis-[0%] grow border-stone-950/20 pr-0 pt-6 border-r-0 border-solid md:pr-[24.0071px] md:pt-[28.4444px] md:border-r">
                    {props.simpleCards.map((card, cardIndex) => (
                      <div
                        key={cardIndex}
                        className={
                          card.cardClassName ||
                          "relative text-base items-stretch box-border caret-transparent gap-x-4 flex basis-[0%] grow leading-6 border-stone-950/20 mt-6 pt-6 border-t border-solid md:text-[14.2222px] md:gap-x-[22.4px] md:leading-[21.3333px] md:mt-0 md:pt-[28.4444px] md:border-t-0"
                        }
                      >
                        <div className="text-base aspect-[198_/_317] box-border caret-transparent shrink-0 leading-6 w-[23.33%] overflow-hidden md:text-[14.2222px] md:leading-[21.3333px] md:w-[46%]">
                          <picture className="text-base box-border caret-transparent leading-6 md:text-[14.2222px] md:leading-[21.3333px]">
                            <img
                              src={card.imageUrl}
                              sizes={card.imageSizes}
                              alt=""
                              className={
                                card.imageClassName ||
                                "text-base aspect-[auto_1000_/_1428.57] box-border caret-transparent h-full leading-6 max-w-full object-cover w-full md:text-[14.2222px] md:leading-[21.3333px]"
                              }
                            />
                          </picture>
                        </div>
                        <div className="text-base items-start box-border caret-transparent flex basis-[0%] flex-col grow justify-end leading-6 gap-y-2 md:text-[14.2222px] md:leading-[21.3333px] md:gap-y-[14.2222px]">
                          <span className="text-base box-border caret-transparent block leading-[17.6px] font-pp_neue_montreal md:text-[14.2222px] md:leading-[15.6444px]">
                            {card.title}
                          </span>
                          <div className="text-stone-950/50 text-sm box-border caret-transparent tracking-[0.14px] leading-[19.6px] font-pp_neue_montreal md:text-[12.4444px] md:tracking-[0.124444px] md:leading-[17.4222px]">
                            {card.description}
                          </div>
                          <a
                            href={card.linkHref}
                            title={card.linkTitle}
                            className="text-gray-200 text-sm items-center bg-stone-950 box-border caret-transparent gap-x-2 flex leading-[15.4px] border pl-3.5 pr-2.5 py-1.5 rounded-[40px] border-solid border-transparent font-pp_neue_montreal md:text-[13.3404px] md:gap-x-[7.11111px] md:leading-[14.6745px] md:pl-[14.2222px] md:pr-[10.6667px] md:pt-[5.33333px] md:pb-[6.22933px] md:rounded-[35.5556px] before:accent-auto before:box-border before:caret-transparent before:text-gray-200 before:block before:text-sm before:not-italic before:normal-nums before:font-normal before:h-full before:tracking-[normal] before:leading-[15.4px] before:list-outside before:list-none before:pointer-events-auto before:absolute before:text-start before:indent-[0px] before:normal-case before:visible before:w-full before:z-[1] before:border-separate before:left-0 before:top-0 before:font-pp_neue_montreal before:md:text-[13.3404px] before:md:leading-[14.6745px]"
                          >
                            <span className="text-sm box-border caret-transparent block leading-[15.4px] md:text-[13.3404px] md:leading-[14.6745px]">
                              {card.linkText}
                            </span>
                            <img
                              src="https://c.animaapp.com/mhhesajdVjc9dV/assets/icon-4.svg"
                              alt="Icon"
                              className="text-sm box-border caret-transparent shrink-0 h-[18.24px] leading-[15.4px] md:text-[13.3404px] md:h-[15.0756px] md:leading-[14.6745px]"
                            />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </li>
    );
  };
  