export type NavLinkProps = {
    href: string;
    ariaLabel: string;
    text: string;
    liClassName?: string;
    aClassName?: string;
    spanClassName?: string;
  };
  
  export const NavLink = (props: NavLinkProps) => {
    return (
      <li
        role="none"
        className={`text-base box-border caret-transparent flex flex-col justify-center leading-6 md:text-[14.2222px] md:leading-[21.3333px] ${props.liClassName || ""}`}
      >
        <a
          href={props.href}
          aria-label={props.ariaLabel}
          role="menuitem"
          className={`relative text-base items-center box-border caret-transparent gap-x-1 flex justify-between leading-[18.24px] decoration-blue-500 decoration-2 uppercase underline-offset-[3.008px] py-6 font-silka_mono md:text-[12.4444px] md:gap-x-[3.55556px] md:justify-normal md:leading-[14.1867px] md:decoration-[1.77778px] md:underline-offset-[2.67378px] md:py-0 ${props.aClassName || ""}`}
        >
          <span
            className={`text-base box-border caret-transparent block leading-[18.24px] underline-offset-[3.008px] md:text-[12.4444px] md:leading-[14.1867px] md:underline-offset-[2.67378px] ${props.spanClassName || ""}`}
          >
            {props.text}
          </span>
        </a>
      </li>
    );
  };
  