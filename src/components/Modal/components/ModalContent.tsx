import { ModalForm } from "@/components/Modal/components/ModalForm";

export const ModalContent = () => {
  return (
    <div className="relative text-base items-stretch bg-gray-200 box-border caret-transparent flex flex-wrap leading-6 max-w-[min(1038px,100%)] md:text-[14.2222px] md:leading-[21.3333px] md:max-w-[min(922.667px,100%)]">
      <div className="relative text-base box-border caret-transparent leading-6 max-w-none w-full md:text-[14.2222px] md:leading-[21.3333px] md:max-w-[calc(100%_-_398.222px)]">
        <picture className="text-base box-border caret-transparent leading-6 md:text-[14.2222px] md:leading-[21.3333px]">
          <img
            src="https://c.animaapp.com/mhhesajdVjc9dV/assets/219.jpg"
            sizes="590px"
            alt=""
            className="text-base aspect-[auto_590_/_641.3] box-border caret-transparent h-full leading-6 max-h-[193.008px] max-w-full min-h-full object-cover w-full md:text-[14.2222px] md:leading-[21.3333px] md:max-h-full"
          />
        </picture>
      </div>
      <div className="relative text-base items-stretch box-border caret-transparent gap-x-6 flex flex-col shrink-0 leading-6 max-w-none gap-y-6 w-full p-6 md:text-[14.2222px] md:gap-x-[28.4444px] md:leading-[21.3333px] md:max-w-[398.222px] md:gap-y-[28.4444px] md:p-[28.4444px]">
        <button className="absolute text-base bg-transparent caret-transparent block leading-6 text-center w-6 z-10 p-0 right-2 top-2 md:text-[14.2222px] md:leading-[21.3333px] md:w-[21.3333px] md:right-[7.11111px] md:top-[7.11111px]">
          <img
            src="https://c.animaapp.com/mhhesajdVjc9dV/assets/icon-28.svg"
            alt="Icon"
            className="text-base box-border caret-transparent leading-6 w-6 md:text-[14.2222px] md:leading-[21.3333px] md:w-[21.3333px]"
          />
        </button>
        <div className="text-base items-stretch box-border caret-transparent gap-x-4 flex flex-col leading-6 gap-y-4 md:text-[14.2222px] md:gap-x-[14.2222px] md:leading-[21.3333px] md:gap-y-[14.2222px]">
          <h2 className="text-base box-border caret-transparent leading-6 scroll-mt-14 font-ui_sans_serif md:text-[28.4444px] md:leading-[34.1333px] md:scroll-mt-[78.2222px] md:font-pp_neue_montreal">
            Everything you need, in one place.
          </h2>
          <div className="text-stone-950/60 text-[15.008px] box-border caret-transparent leading-[22.512px] font-pp_neue_montreal md:text-[14.2222px] md:leading-[21.3333px]">
            <p className="text-stone-950/60 text-[15.008px] box-border caret-transparent leading-[22.512px] md:text-[14.2222px] md:leading-[21.3333px]">
              <span className="text-[15.008px] box-border caret-transparent leading-[22.512px] md:text-[14.2222px] md:leading-[21.3333px]">
                Download the full suite of technical files for seamless
                planning, modeling, and integration.
              </span>
            </p>
          </div>
        </div>
        <div className="text-base box-border caret-transparent leading-6 md:text-[14.2222px] md:leading-[21.3333px]"></div>
        <div className="text-base items-stretch box-border caret-transparent gap-x-4 flex flex-col leading-6 gap-y-4 md:text-[14.2222px] md:gap-x-[14.2222px] md:leading-[21.3333px] md:gap-y-[14.2222px]">
          <div className="text-base box-border caret-transparent leading-6 md:text-[14.2222px] md:leading-[21.3333px]">
            <ModalForm />
          </div>
          <div className="text-base box-border caret-transparent leading-6 md:text-[14.2222px] md:leading-[21.3333px]"></div>
        </div>
      </div>
    </div>
  );
};
