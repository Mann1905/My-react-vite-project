export const ClientLogos = () => {
  const logos = [
    {
      src: "https://c.animaapp.com/mhhesajdVjc9dV/assets/41.png",
      alt: "DPA DP ARCHITECTS",
    },
    { src: "https://c.animaapp.com/mhhesajdVjc9dV/assets/6.svg", alt: "EMAAR" },
    {
      src: "https://c.animaapp.com/mhhesajdVjc9dV/assets/7.svg",
      alt: "ST REGIS",
    },
    {
      src: "https://c.animaapp.com/mhhesajdVjc9dV/assets/8.svg",
      alt: "Disney",
    },
    {
      src: "https://c.animaapp.com/mhhesajdVjc9dV/assets/9.svg",
      alt: "PORSCHE",
    },
    {
      src: "https://c.animaapp.com/mhhesajdVjc9dV/assets/10.svg",
      alt: "Safdie Architects",
    },
    {
      src: "https://c.animaapp.com/mhhesajdVjc9dV/assets/11.svg",
      alt: "ARMANI Hotels & Resorts",
    },
    {
      src: "https://c.animaapp.com/mhhesajdVjc9dV/assets/12.svg",
      alt: "WOODS BAGOT",
    },
    {
      src: "https://c.animaapp.com/mhhesajdVjc9dV/assets/13.svg",
      alt: "Client 9",
    },
    {
      src: "https://c.animaapp.com/mhhesajdVjc9dV/assets/14.svg",
      alt: "Client 10",
    },
    {
      src: "https://c.animaapp.com/mhhesajdVjc9dV/assets/15.svg",
      alt: "Client 11",
    },
    {
      src: "https://c.animaapp.com/mhhesajdVjc9dV/assets/16.svg",
      alt: "Client 12",
    },
    {
      src: "https://c.animaapp.com/mhhesajdVjc9dV/assets/17.svg",
      alt: "Client 13",
    },
    {
      src: "https://c.animaapp.com/mhhesajdVjc9dV/assets/21.svg",
      alt: "Client 14",
    },
    {
      src: "https://c.animaapp.com/mhhesajdVjc9dV/assets/18.svg",
      alt: "Client 15",
    },
    {
      src: "https://c.animaapp.com/mhhesajdVjc9dV/assets/23.svg",
      alt: "Client 16",
    },
    {
      src: "https://c.animaapp.com/mhhesajdVjc9dV/assets/19.svg",
      alt: "Client 17",
    },
    {
      src: "https://c.animaapp.com/mhhesajdVjc9dV/assets/22.svg",
      alt: "Client 18",
    },
    {
      src: "https://c.animaapp.com/mhhesajdVjc9dV/assets/24.svg",
      alt: "Client 19",
    },
    {
      src: "https://c.animaapp.com/mhhesajdVjc9dV/assets/20.svg",
      alt: "Client 20",
    },
  ];

  return (
    <div className="text-base box-border caret-transparent leading-6 overflow-hidden relative md:text-[14.2222px] md:leading-[21.3333px]">
      <div className="text-base box-border caret-transparent gap-x-5 flex leading-6 animate-scroll-right-to-left md:text-[14.2222px] md:gap-x-[17.7778px] md:leading-[21.3333px]">
        {/* First set of logos */}scroll-right-to-left
        <ul className="text-base box-border caret-transparent gap-x-5 flex shrink-0 justify-around leading-6 list-none min-w-fit gap-y-5 pl-0 md:text-[14.2222px] md:gap-x-[17.7778px] md:leading-[21.3333px] md:gap-y-[17.7778px]">
          {logos.map((logo, index) => (
            <li
              key={index}
              className="text-base items-center box-border caret-transparent flex flex-col h-auto justify-center leading-6 w-auto px-[26px] md:text-[14.2222px] md:h-[145.778px] md:leading-[21.3333px] md:w-[204.444px] md:px-0"
            >
              <div className="text-base box-border caret-transparent h-full leading-6 max-h-[50px] max-w-20 w-full md:text-[14.2222px] md:leading-[21.3333px] md:max-h-[56.8889px] md:max-w-[90.6667px]">
                <picture className="text-base box-border caret-transparent leading-6 md:text-[14.2222px] md:leading-[21.3333px]">
                  <img
                    src={logo.src}
                    sizes="calc(102 / 16 * 1rem)"
                    alt={logo.alt}
                    className="text-base aspect-[auto_400_/_135.14] box-border caret-transparent h-full leading-6 max-w-full object-contain w-full md:text-[14.2222px] md:leading-[21.3333px]"
                  />
                </picture>
              </div>
            </li>
          ))}
        </ul>
        {}
        <ul className="text-base box-border caret-transparent gap-x-5 flex shrink-0 justify-around leading-6 list-none min-w-fit gap-y-5 pl-0 md:text-[14.2222px] md:gap-x-[17.7778px] md:leading-[21.3333px] md:gap-y-[17.7778px]">
          {logos.map((logo, index) => (
            <li
              key={`duplicate-${index}`}
              className="text-base items-center box-border caret-transparent flex flex-col h-auto justify-center leading-6 w-auto px-[26px] md:text-[14.2222px] md:h-[145.778px] md:leading-[21.3333px] md:w-[204.444px] md:px-0"
            >
              <div className="text-base box-border caret-transparent h-full leading-6 max-h-[50px] max-w-20 w-full md:text-[14.2222px] md:leading-[21.3333px] md:max-h-[56.8889px] md:max-w-[90.6667px]">
                <picture className="text-base box-border caret-transparent leading-6 md:text-[14.2222px] md:leading-[21.3333px]">
                  <img
                    src={logo.src}
                    sizes="calc(102 / 16 * 1rem)"
                    alt={logo.alt}
                    className="text-base aspect-[auto_400_/_135.14] box-border caret-transparent h-full leading-6 max-w-full object-contain w-full md:text-[14.2222px] md:leading-[21.3333px]"
                  />
                </picture>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
