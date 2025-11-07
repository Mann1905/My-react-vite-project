import { Navbar } from "@/sections/Header/components/Navbar";
import { useState } from "react";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed text-base box-border caret-transparent leading-6 pointer-events-none w-full z-[60] left-0 top-0 md:text-[14.2222px] md:leading-[21.3333px]">
      <div className={`fixed text-base backdrop-blur-[15.008px] bg-stone-900/10 box-border caret-transparent h-[calc(100%_+_1000px)] leading-6 transition-opacity duration-300 w-full top-0 md:text-[14.2222px] md:backdrop-blur-[13.3404px] md:leading-[21.3333px] ${
        isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none md:opacity-0 md:pointer-events-none"
      }`} onClick={() => setIsMobileMenuOpen(false)}></div>
      <div className="text-base box-border caret-transparent h-14 leading-6 pointer-events-auto md:text-[14.2222px] md:h-[78.2222px] md:leading-[21.3333px]">
        <Navbar isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
      </div>
    </header>
  );
};
