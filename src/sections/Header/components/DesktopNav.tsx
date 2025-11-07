import { NavDropdown } from "@/sections/Header/components/NavDropdown";
import { NavLink } from "@/sections/Header/components/NavLink";

type DesktopNavProps = {
  isMobileMenuOpen: boolean;
};

export const DesktopNav = ({ isMobileMenuOpen }: DesktopNavProps) => {
  return (
    <nav
      aria-label="Main navigation"
      className={`absolute text-base items-stretch bg-gray-200 box-border caret-transparent flex col-end-[span_6] col-start-[span_6] h-[515.25px] leading-6 max-h-[950px] min-h-0 min-w-0 w-full overflow-auto px-4 left-0 top-[calc(100%_+_1.008px)] md:static md:text-[14.2222px] md:bg-transparent md:h-auto md:leading-[21.3333px] md:max-h-none md:min-h-[auto] md:min-w-[auto] md:w-auto md:overflow-visible md:px-0 md:left-auto md:top-auto ${
        isMobileMenuOpen ? "block" : "hidden md:flex"
      }`}
    >
      <ul
        role="menubar"
        className="text-base items-stretch box-border caret-transparent flex flex-col h-fit justify-normal leading-6 list-none w-full pl-0 md:text-[14.2222px] md:flex-row md:h-auto md:justify-between md:leading-[21.3333px]"
      >
       <NavLink
  href="https://www.jonite.com/products/trench-grates"
  ariaLabel="View all trench grate products by Jonite"
  text="Products"
  liClassName="border-stone-950/20 border-b border-solid md:border-stone-950 md:border-b-0"
/>

        <NavLink
          href="https://www.jonite.com/specs"
          ariaLabel="Find all specifications for Jonite grating products"
          text="Specs"
          liClassName="border-stone-950/20 border-b border-solid md:border-stone-950 md:border-b-0"
        />
        <NavLink
          href="https://www.jonite.com/case-studies"
          ariaLabel="View some examples of our work"
          text="Case studies"
          liClassName="border-stone-950/20 border-b border-solid md:border-stone-950 md:border-b-0"
        />
        <NavLink
  href="https://www.jonite.com/our-story"
  ariaLabel="Learn more about Jonite's story"
  text="About"
  liClassName="border-stone-950/20 border-b border-solid md:border-stone-950 md:border-b-0"
/>

        <NavLink
          href="https://www.jonite.com/contact-us"
          ariaLabel="Get in touch with our customer service agents to learn more details"
          text="Contact"
          liClassName="border-stone-950/20 border-b border-solid md:border-stone-950 md:border-b-0"
        />
      </ul>
    </nav>
  );
};
