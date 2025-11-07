import { FooterColumn } from "@/sections/Footer/components/FooterColumn";

export const FooterNav = () => {
  return (
    <nav
      aria-label="Primary footer menu"
      className="text-base items-stretch box-border caret-transparent flex flex-col col-end-[-1] col-start-1 justify-normal leading-6 border-gray-200/20 mt-10 border-t border-solid md:text-[14.2222px] md:items-start md:flex-row md:col-end-[span_8] md:col-start-5 md:justify-between md:leading-[21.3333px] md:border-gray-200 md:mt-0 md:border-t-0"
    >
      <FooterColumn
        title="Products"
        ariaLabel="Products"
        links={[
          {
            href: "https://www.jonite.com/products/trench-grates",
            text: "Trench grates",
          },
          {
            href: "https://www.jonite.com/products/pool-grates",
            text: "Pool grates",
          },
          {
            href: "https://www.jonite.com/products/tree-grates",
            text: "Tree grates",
          },
          {
            href: "https://www.jonite.com/products/bathroom-grates",
            text: "Bathroom grates",
          },
          {
            href: "https://www.jonite.com/products/floor-drains",
            text: "Floor drains",
          },
          {
            href: "https://www.jonite.com/products/sump-covers",
            text: "Sump covers",
          },
          {
            href: "https://www.jonite.com/products/breeze-blocks",
            text: "Breeze blocks",
          },
        ]}
      />
      <FooterColumn
        title="Information"
        ariaLabel="Information"
        links={[
          { href: "https://www.jonite.com/specs", text: "Product specs" },
          {
            href: "https://www.jonite.com/custom-solutions",
            text: "Custom solutions",
          },
          {
            href: "https://www.jonite.com/sustainability",
            text: "Sustainability",
          },
          { href: "https://www.jonite.com/our-story", text: "Our story" },
          { href: "https://www.jonite.com/insights", text: "Insights" },
        ]}
      />
      <FooterColumn
        title="Case studies"
        ariaLabel="Case studies"
        links={[
          {
            href: "https://www.jonite.com/case-studies?types=9865",
            text: "Commercial",
          },
          {
            href: "https://www.jonite.com/case-studies?types=9956",
            text: "Residential",
          },
          {
            href: "https://www.jonite.com/case-studies?types=10134",
            text: "Hospitality",
          },
          {
            href: "https://www.jonite.com/case-studies?types=10213",
            text: "Public Housing",
          },
          {
            href: "https://www.jonite.com/case-studies?types=10419",
            text: "Urban Development",
          },
          {
            href: "https://www.jonite.com/case-studies?types=10425",
            text: "Institutional",
          },
        ]}
      />
      <FooterColumn
        title="Get in touch"
        ariaLabel="Get in touch"
        links={[
          { href: "https://www.jonite.com/contact-us", text: "Contact us" },
          { href: "https://www.jonite.com/samples", text: "Request samples" },
          {
            href: "https://www.jonite.com/become-a-distributor",
            text: "Become a distributor",
          },
        ]}
      />
      <FooterColumn
        title="Social media"
        ariaLabel="Social media"
        links={[
          { href: "https://www.facebook.com/JoniteStone/", text: "Facebook" },
          { href: "https://www.instagram.com/jonitestone/", text: "Instagram" },
          { href: "https://www.pinterest.com/jonitestone/", text: "Pinterest" },
          {
            href: "https://www.linkedin.com/company/jonitestone/",
            text: "LinkedIn",
          },
        ]}
      />
    </nav>
  );
};
