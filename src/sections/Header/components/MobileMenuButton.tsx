type MobileMenuButtonProps = {
  isOpen: boolean;
  onClick: () => void;
};

export const MobileMenuButton = ({ isOpen, onClick }: MobileMenuButtonProps) => {
    return (
      <div className="text-base items-center box-border caret-transparent flex col-end-[span_2] col-start-[span_2] justify-end leading-6 min-h-[auto] min-w-[auto] md:text-[14.2222px] md:hidden md:leading-[21.3333px] md:min-h-0 md:min-w-0">
        <button
          onClick={onClick}
          type="button"
          aria-label={isOpen ? "Close mobile menu" : "Open mobile menu"}
          className="relative text-base bg-transparent caret-transparent block h-[30px] leading-6 min-h-[auto] min-w-[auto] outline-blue-500 text-center w-[27.008px] p-0 cursor-pointer z-50 md:text-[14.2222px] md:inline-block md:h-[26.6667px] md:leading-[21.3333px] md:min-h-0 md:min-w-0 md:w-[24.0071px]"
        >
          <span className="absolute text-base bg-stone-950 box-border caret-transparent block h-[1.008px] leading-6 translate-x-[-13.5px] -rotate-45 w-full left-2/4 top-2/4 md:text-[14.2222px] md:h-[0.896px] md:leading-[21.3333px] md:transform-none"></span>
          <span className="absolute text-base bg-stone-950 box-border caret-transparent block h-[1.008px] leading-6 translate-x-[-13.5px] rotate-45 w-full left-2/4 top-2/4 md:text-[14.2222px] md:h-[0.896px] md:leading-[21.3333px] md:transform-none"></span>
        </button>
      </div>
    );
  };
  