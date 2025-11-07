export type HeroMediaProps = {
  variant: string;
  topIconSrc?: string;
  topIconAlt?: string;
  mediaType: "video" | "image";
  videoSrc?: string;
  videoBlobSrc?: string;
  imageSrc?: string;
  imageSizes?: string;
  imageAlt?: string;
  playIconSrc?: string;
  playIconAlt?: string;
  linkHref: string;
  linkText: string;
  linkIconSrc: string;
  linkIconAlt: string;
};

export const HeroMedia = (props: HeroMediaProps) => {
  return (
    <div
      className={`text-base box-border caret-transparent leading-6 overflow-hidden md:text-[14.2222px] md:leading-[21.3333px] ${props.variant}`}
    >
      <div
        className={
          props.variant ===
          "relative block grow min-h-[auto] min-w-[auto] w-full md:hidden md:min-h-0 md:min-w-0"
            ? "absolute text-base box-border caret-transparent leading-6 inset-0 md:text-[14.2222px] md:leading-[21.3333px]"
            : props.variant === "relative h-[185px] w-full mt-2"
            ? "text-base box-border caret-transparent leading-6 md:text-[14.2222px] md:leading-[21.3333px] aspect-[676_/_365]"
            : "text-base box-border caret-transparent leading-6 md:text-[14.2222px] md:leading-[21.3333px] relative h-full min-h-0 min-w-0 w-full overflow-hidden md:min-h-[auto] md:min-w-[auto]"
        }
      >
        {props.topIconSrc && (
          <div
            className={
              props.variant ===
              "items-stretch hidden flex-col col-end-[-1] col-start-1 justify-end min-h-0 min-w-0 md:flex md:col-end-[span_6] md:col-start-7 md:min-h-[auto] md:min-w-[auto]"
                ? "text-base box-border caret-transparent leading-6 md:text-[14.2222px] md:leading-[21.3333px] aspect-square"
                : "text-base box-border caret-transparent leading-6 md:text-[14.2222px] md:leading-[21.3333px] absolute items-center bg-stone-300 flex justify-center pointer-events-none inset-0"
            }
          >
            <img
              src={props.topIconSrc}
              alt={props.topIconAlt}
              className="text-base box-border caret-transparent h-3/6 leading-6 w-6/12 md:text-[14.2222px] md:leading-[21.3333px]"
            />
          </div>
        )}
        <div className="absolute text-base box-border caret-transparent leading-6 overflow-hidden inset-0 md:text-[14.2222px] md:leading-[21.3333px]">
          <div className="absolute text-base box-border caret-transparent leading-6 inset-0 md:text-[14.2222px] md:leading-[21.3333px]">
            {props.mediaType === "video" ? (
              <div className="relative text-base box-border caret-transparent h-full leading-6 w-full md:text-[14.2222px] md:leading-[21.3333px]">
                {props.playIconSrc && (
                  <div className="absolute text-base items-center box-border caret-transparent flex justify-center leading-6 pointer-events-none inset-0 z-10 md:text-[14.2222px] md:leading-[21.3333px]">
                    <img
                      src={props.playIconSrc}
                      alt={props.playIconAlt}
                      className="text-base box-border caret-transparent h-3/6 leading-6 w-6/12 md:text-[14.2222px] md:leading-[21.3333px]"
                    />
                  </div>
                )}
                <div className="text-base items-center box-border caret-transparent flex h-full justify-center leading-6 w-full md:text-[14.2222px] md:leading-[21.3333px]">
                  <div
                    role="region"
                    aria-label="video player"
                    className={
                      props.variant ===
                      "items-stretch hidden flex-col col-end-[-1] col-start-1 justify-end min-h-0 min-w-0 md:flex md:col-end-[span_6] md:col-start-7 md:min-h-[auto] md:min-w-[auto]"
                        ? "relative text-base box-border caret-transparent block h-full leading-[0px] min-h-0 min-w-0 w-full md:text-[14.2222px] md:min-h-[auto] md:min-w-[auto]"
                        : "relative text-base box-border caret-transparent block h-full leading-[0px] min-h-[auto] min-w-[auto] w-full md:text-[14.2222px] md:min-h-0 md:min-w-0"
                    }
                  >
                    <div className="text-base box-border caret-transparent block h-full w-full md:text-[14.2222px]">
                      <video
                        autoPlay={true}
                        loop={true}
                        playsInline={true}
                        preload="auto"
                        muted={true}
                        src={props.videoSrc || props.videoBlobSrc}
                        className="text-base caret-transparent w-full h-full object-cover md:text-[14.2222px]"
                        style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover' }}
                        onError={(e) => {
                          const video = e.target as HTMLVideoElement;
                          console.error('Video loading error:', {
                            error: video.error,
                            networkState: video.networkState,
                            readyState: video.readyState,
                            src: video.src,
                            currentSrc: video.currentSrc
                          });
                        }}
                        onLoadedData={() => {
                          console.log('Video loaded successfully');
                        }}
                        onCanPlay={() => {
                          console.log('Video can play');
                        }}
                      >
                        <source src={props.videoSrc || props.videoBlobSrc} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                    <div
                      className={
                        props.variant ===
                        "items-stretch hidden flex-col col-end-[-1] col-start-1 justify-end min-h-0 min-w-0 md:flex md:col-end-[span_6] md:col-start-7 md:min-h-[auto] md:min-w-[auto]"
                          ? "text-base self-stretch box-border caret-transparent block grow min-h-0 min-w-0 md:text-[14.2222px] md:min-h-[auto] md:min-w-[auto]"
                          : "text-base self-stretch box-border caret-transparent block grow min-h-[auto] min-w-[auto] md:text-[14.2222px] md:min-h-0 md:min-w-0"
                      }
                    ></div>
                    <span className="absolute text-base items-start caret-transparent flex flex-col inset-0 md:text-[14.2222px]">
                      <div
                        className={
                          props.variant ===
                          "items-stretch hidden flex-col col-end-[-1] col-start-1 justify-end min-h-0 min-w-0 md:flex md:col-end-[span_6] md:col-start-7 md:min-h-[auto] md:min-w-[auto]"
                            ? "text-base box-border caret-transparent block min-h-0 min-w-0 align-middle md:text-[14.2222px] md:min-h-[auto] md:min-w-[auto]"
                            : "text-base box-border caret-transparent block min-h-[auto] min-w-[auto] align-middle md:text-[14.2222px] md:min-h-0 md:min-w-0"
                        }
                      ></div>
                    </span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-base box-border caret-transparent h-full leading-6 w-full md:text-[14.2222px] md:leading-[21.3333px] overflow-hidden">
                <picture className="text-base box-border caret-transparent block h-full leading-6 object-cover w-full md:text-[14.2222px] md:leading-[21.3333px]">
                  <img
                    src={props.imageSrc}
                    sizes={props.imageSizes}
                    alt={props.imageAlt}
                    className="text-base aspect-[auto_2000_/_1081.08] box-border caret-transparent h-full leading-6 max-w-full object-cover translate-y-[6.29148px] origin-[50%_100%] w-full scale-[1.2px] md:text-[14.2222px] md:leading-[21.3333px] md:translate-y-[9.91341px] md:scale-[1.2px]"
                  />
                </picture>
              </div>
            )}
          </div>
        </div>
        <div className="absolute text-base shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.3)_0px_0px_150px_150px] box-border caret-transparent leading-6 pointer-events-none left-0 bottom-0 md:text-[14.2222px] md:shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.3)_0px_0px_133.333px_133.333px] md:leading-[21.3333px]"></div>
        <div className="absolute text-base items-start box-border caret-transparent flex flex-col justify-end leading-6 p-6 inset-0 md:text-[14.2222px] md:leading-[21.3333px] md:p-[21.3333px]">
          <a
            href={props.linkHref}
            className={
              props.variant ===
              "relative block grow min-h-[auto] min-w-[auto] w-full md:hidden md:min-h-0 md:min-w-0"
                ? "text-sm items-center bg-gray-200 box-border caret-transparent gap-x-2 flex leading-[15.4px] border pl-3.5 pr-2.5 py-1.5 rounded-[40px] border-solid border-transparent font-pp_neue_montreal animate-slide-up-from-bottom md:text-[13.3404px] md:gap-x-[7.11111px] md:leading-[14.6745px] md:pl-[14.2222px] md:pr-[10.6667px] md:pt-[5.33333px] md:pb-[6.22933px] md:rounded-[35.5556px] before:accent-auto before:box-border before:caret-transparent before:text-stone-950 before:block before:text-sm before:not-italic before:normal-nums before:font-normal before:h-full before:tracking-[normal] before:leading-[15.4px] before:list-outside before:list-disc before:pointer-events-auto before:absolute before:text-start before:indent-[0px] before:normal-case before:visible before:w-full before:z-[1] before:border-separate before:left-0 before:top-0 before:font-pp_neue_montreal before:md:text-[13.3404px] before:md:leading-[14.6745px] min-h-[auto] min-w-[auto] md:min-h-0 md:min-w-0"
                : props.variant === "relative h-[185px] w-full mt-2"
                ? "text-sm items-center bg-gray-200 box-border caret-transparent gap-x-2 flex leading-[15.4px] border pl-3.5 pr-2.5 py-1.5 rounded-[40px] border-solid border-transparent font-pp_neue_montreal animate-slide-up-from-bottom md:text-[13.3404px] md:gap-x-[7.11111px] md:leading-[14.6745px] md:pl-[14.2222px] md:pr-[10.6667px] md:pt-[5.33333px] md:pb-[6.22933px] md:rounded-[35.5556px] before:accent-auto before:box-border before:caret-transparent before:text-stone-950 before:block before:text-sm before:not-italic before:normal-nums before:font-normal before:h-full before:tracking-[normal] before:leading-[15.4px] before:list-outside before:list-disc before:pointer-events-auto before:absolute before:text-start before:indent-[0px] before:normal-case before:visible before:w-full before:z-[1] before:border-separate before:left-0 before:top-0 before:font-pp_neue_montreal before:md:text-[13.3404px] before:md:leading-[14.6745px]"
                : "text-sm items-center bg-gray-200 box-border caret-transparent gap-x-2 flex leading-[15.4px] min-h-0 min-w-0 border pl-3.5 pr-2.5 py-1.5 rounded-[40px] border-solid border-transparent font-pp_neue_montreal animate-slide-up-from-bottom md:text-[13.3404px] md:gap-x-[7.11111px] md:leading-[14.6745px] md:min-h-[auto] md:min-w-[auto] md:pl-[14.2222px] md:pr-[10.6667px] md:pt-[5.33333px] md:pb-[6.22933px] md:rounded-[35.5556px] before:accent-auto before:box-border before:caret-transparent before:text-stone-950 before:block before:text-sm before:not-italic before:normal-nums before:font-normal before:h-full before:tracking-[normal] before:leading-[15.4px] before:list-outside before:list-disc before:pointer-events-auto before:absolute before:text-start before:indent-[0px] before:normal-case before:visible before:w-full before:z-[1] before:border-separate before:left-0 before:top-0 before:font-pp_neue_montreal before:md:text-[13.3404px] before:md:leading-[14.6745px]"
            }
            style={{ animationDelay: "0.3s", animationFillMode: "both" }}
          >
            <span
              className={
                props.variant ===
                "relative block grow min-h-[auto] min-w-[auto] w-full md:hidden md:min-h-0 md:min-w-0"
                  ? "text-sm box-border caret-transparent block leading-[15.4px] md:text-[13.3404px] md:leading-[14.6745px] min-h-[auto] min-w-[auto] md:min-h-0 md:min-w-0"
                  : props.variant === "relative h-[185px] w-full mt-2"
                  ? "text-sm box-border caret-transparent block leading-[15.4px] md:text-[13.3404px] md:leading-[14.6745px]"
                  : "text-sm box-border caret-transparent block leading-[15.4px] min-h-0 min-w-0 md:text-[13.3404px] md:leading-[14.6745px] md:min-h-[auto] md:min-w-[auto]"
              }
            >
              {props.linkText}
            </span>
            <img
              src={props.linkIconSrc}
              alt={props.linkIconAlt}
              className={
                props.variant ===
                "relative block grow min-h-[auto] min-w-[auto] w-full md:hidden md:min-h-0 md:min-w-0"
                  ? "text-sm box-border caret-transparent shrink-0 h-[18.24px] leading-[15.4px] -rotate-45 md:text-[13.3404px] md:h-[15.0756px] md:leading-[14.6745px] md:transform-none"
                  : props.variant === "relative h-[185px] w-full mt-2"
                  ? "text-sm box-border caret-transparent shrink-0 h-[18.24px] leading-[15.4px] -rotate-45 md:text-[13.3404px] md:h-[15.0756px] md:leading-[14.6745px]"
                  : "text-sm box-border caret-transparent shrink-0 h-[18.24px] leading-[15.4px] transform-none md:text-[13.3404px] md:h-[15.0756px] md:leading-[14.6745px] md:-rotate-45"
              }
            />
          </a>
        </div>
      </div>
    </div>
  );
};
