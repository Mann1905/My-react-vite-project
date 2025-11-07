import { NavbarLogo } from "@/sections/Header/components/NavbarLogo";
import { MobileMenuButton } from "@/sections/Header/components/MobileMenuButton";
import { DesktopNav } from "@/sections/Header/components/DesktopNav";

type NavbarProps = {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (value: boolean) => void;
};

export const Navbar = ({ isMobileMenuOpen, setIsMobileMenuOpen }: NavbarProps) => {
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="relative text-base bg-gray-200 box-border caret-transparent h-14 leading-6 pointer-events-auto z-10 border-stone-900/20 border-b border-solid md:text-[14.2222px] md:h-[78.2222px] md:leading-[21.3333px] md:border-stone-900/20">
      <div className="text-base items-stretch box-border caret-transparent gap-x-2 grid grid-cols-[repeat(4,minmax(0px,1fr))] h-full justify-between leading-6 max-w-[2400px] mx-auto px-4 md:text-[14.2222px] md:gap-x-[22.4px] md:grid-cols-[repeat(12,minmax(0px,1fr))] md:leading-[21.3333px] md:px-[22.7556px]">
        <NavbarLogo />
        <MobileMenuButton 
          isOpen={isMobileMenuOpen} 
          onClick={toggleMobileMenu} 
        />
        <DesktopNav isMobileMenuOpen={isMobileMenuOpen} />
      </div>
    </div>
  );
};
