import { ModalContent } from "@/components/Modal/components/ModalContent";

export const Modal = () => {
  return (
    <span className="text-base box-border caret-transparent leading-6 scroll-mt-14 md:text-[14.2222px] md:leading-[21.3333px] md:scroll-mt-[78.2222px]">
      <div className="text-base box-border caret-transparent flex justify-center leading-6 md:text-[14.2222px] md:leading-[21.3333px]">
        <div
          role="dialog"
          className="fixed text-base box-border caret-transparent hidden leading-6 z-[61] overflow-auto inset-0 md:text-[14.2222px] md:leading-[21.3333px]"
        >
          <div className="fixed text-base backdrop-blur-[15.008px] bg-stone-900/40 box-border caret-transparent hidden leading-6 inset-0 md:text-[14.2222px] md:backdrop-blur-[13.3404px] md:leading-[21.3333px]"></div>
          <div className="relative text-base items-center box-border caret-transparent hidden justify-center leading-6 min-h-[1000px] p-5 md:text-[14.2222px] md:leading-[21.3333px] md:p-[17.7778px]">
            <ModalContent />
          </div>
        </div>
      </div>
    </span>
  );
};
