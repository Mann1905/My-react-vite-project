import { ClientLogos } from "@/sections/ClientsSection/components/ClientLogos";

export const ClientsSection = () => {
  return (
    <section className="text-base box-border caret-transparent leading-6 overflow-x-hidden w-full mt-12 md:text-[14.2222px] md:leading-[21.3333px] md:mt-[56.8889px]">
      <div className="text-base box-border caret-transparent gap-x-[normal] flex flex-col grid-cols-none leading-6 max-w-[2400px] mx-auto px-4 w-full md:text-[14.2222px] md:gap-x-[22.4px] md:grid md:flex-row md:grid-cols-[repeat(12,minmax(0px,1fr))] md:leading-[21.3333px] md:px-[22.7556px]">
        <div className="text-base box-border caret-transparent col-end-[-1] col-start-1 leading-6 border-stone-950/20 mb-12 border-t border-solid md:text-[14.2222px] md:leading-[21.3333px] md:mb-[56.8889px]"></div>
        <div className="text-base box-border caret-transparent col-end-[span_6] col-start-1 leading-6 md:text-[14.2222px] md:leading-[21.3333px]">
          <h2 className="text-base items-center box-border caret-transparent inline-flex leading-6 md:text-[14.2222px] md:leading-[21.3333px]">
            <span className="text-base bg-stone-950 box-border caret-transparent block shrink-0 h-2 leading-6 pointer-events-none w-2 mr-2 rounded-[9999.01px] md:text-[14.2222px] md:h-[8.00711px] md:leading-[21.3333px] md:w-[8.00711px] md:mr-[7.11111px] md:rounded-[8888.01px]"></span>
            <span className="text-[11.008px] box-border caret-transparent block leading-[12.1088px] uppercase font-silka_mono md:text-[10.6667px] md:leading-[11.7333px]">
              Clients
            </span>
          </h2>
        </div>
        <div className="text-base items-start box-border caret-transparent gap-x-[normal] flex flex-col col-end-[span_6] col-start-7 justify-between leading-6 order-last gap-y-6 w-9/12 mt-10 md:text-[14.2222px] md:gap-x-[63.1182px] md:flex-row md:leading-[21.3333px] md:order-none md:gap-y-[normal] md:w-auto md:mt-0">
          <div className="text-[11.008px] box-border caret-transparent basis-[0%] grow leading-[14.3104px] uppercase font-silka_mono md:text-[10.6667px] md:leading-[13.8667px]">
            For 30+ years, we’ve collaborated with award-winning architects,
            developers and global brands.
          </div>
          <div className="text-base box-border caret-transparent shrink-0 leading-6 md:text-[14.2222px] md:leading-[21.3333px]">
            <a
              href="https://www.jonite.com/samples"
              className="text-gray-200 text-sm items-center bg-stone-950 box-border caret-transparent gap-x-2 inline-flex leading-[15.4px] border pl-3.5 pr-2.5 py-1.5 rounded-[40px] border-solid border-transparent font-pp_neue_montreal md:text-[13.3404px] md:gap-x-[7.11111px] md:leading-[14.6745px] md:pl-[14.2222px] md:pr-[10.6667px] md:pt-[5.33333px] md:pb-[6.22933px] md:rounded-[35.5556px]"
            >
              <span className="text-sm box-border caret-transparent block leading-[15.4px] md:text-[13.3404px] md:leading-[14.6745px]">
                Request samples
              </span>
              <img
                src="https://c.animaapp.com/mhhesajdVjc9dV/assets/icon-13.svg"
                alt="Icon"
                className="text-sm box-border caret-transparent shrink-0 h-[18.24px] leading-[15.4px] -rotate-45 md:text-[13.3404px] md:h-[15.0756px] md:leading-[14.6745px]"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="text-base box-border caret-transparent col-end-[-1] col-start-1 leading-6 mt-10 md:text-[14.2222px] md:leading-[21.3333px] md:mt-[21.3333px]">
        <ClientLogos />
      </div>
    </section>
  );
};
