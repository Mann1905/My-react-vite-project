export type ContentSectionProps = {
    variant: string;
    hasContainer?: boolean;
    containerVariant?: string;
    hasInnerDiv?: boolean;
    innerDivVariant?: string;
    hasSecondInnerDiv?: boolean;
  };
  
  export const ContentSection = (props: ContentSectionProps) => {
    return (
      <section
        className={`text-base box-border caret-transparent leading-6 md:text-[14.2222px] md:leading-[21.3333px] ${props.variant}`}
      >
        {props.hasContainer && (
          <div
            className={`text-base box-border caret-transparent leading-6 md:text-[14.2222px] md:leading-[21.3333px] ${props.containerVariant}`}
          >
            {props.hasInnerDiv && (
              <div
                className={`text-base items-start box-border caret-transparent flex flex-col col-end-[-1] col-start-1 leading-6 gap-y-6 md:text-[14.2222px] md:leading-[21.3333px] ${props.innerDivVariant}`}
              ></div>
            )}
            {props.hasSecondInnerDiv && (
              <div className="text-base box-border caret-transparent col-end-[-1] col-start-1 leading-6 md:text-[14.2222px] md:col-end-[span_6] md:leading-[21.3333px]"></div>
            )}
          </div>
        )}
      </section>
    );
  };
  