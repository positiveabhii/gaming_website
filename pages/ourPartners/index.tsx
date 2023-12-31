import ReactCardFlip from "react-card-flip";
import { useState, Fragment, useEffect } from "react";
import Carousel from "react-multi-carousel";
import { UseSizeContext } from "../../state/context";
import {
  partnerContent,
  partnerTopContent,
} from "../../content/partnerContent";
import TitleText from "../../components/common/titleText";
import { getSEOById, SEO } from "../../firebase/function";
import Head from "next/head";

const Partner = () => {
  const [isFlipped, setisFlipped] = useState(-1);

  const responsive = {
    mobile: {
      breakpoint: { max: 1024, min: 350 },
      items: 1,
    },
  };

  const { width } = UseSizeContext();

  const [seoContent, setseoContent] = useState<SEO | null>(null);

  useEffect(() => {
    (async () => {
      const seo = await getSEOById({ id: "our-partners" });
      if (seo === null) {
        setseoContent({
          title: "Platform Play Venture",
          description:
            "In a world where consumers are adopting technology at an exponential pace, the success of your business depends on how effective your digital presence is. At Platform Play Venture, we undertake end-to-end consulting for your brand's digital platforms enablement as well as growth hacking in a digitally disrupted ecosystem with bespoke marketing strategy creation and solutions implementation",
          metaTag:
            "Marketing, branding and holistic growth for organizations and businesses who want amazing customer experiences and high conversion rates in multi-channel environments in a digitally disrupted ecosystem",
        });
      } else {
        setseoContent(seo as SEO);
      }
    })();
  }, []);

  return (
    <Fragment>
      <Head>
        <title>{seoContent?.title}</title>
        <meta name="description" content={seoContent?.description} />
        <meta name="keywords" content={seoContent?.metaTag}></meta>
      </Head>
      <div
        id="homePage"
        className="w-full flex min-h-screen flex-col justify-center"
      >
        <div className="max-w-[1300px] mx-auto py-16">
          <TitleText isAbsolute={false} text="Our Partners" />
          <div className="w-[90%] mx-auto">
            {partnerTopContent.map((text, index) => (
              <h3
                key={index}
                style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
                className="text-white rajdhani  max-w-[820px] mt-3 font-semibold text-md leading-[150.5%]"
              >
                {text}
              </h3>
            ))}
          </div>
          <div className="mt-12 flex w-full flex-wrap items-center justify-center gap-4">
            {width < 820 ? (
              <Carousel
                swipeable={false}
                draggable={false}
                containerClass="h-[500px] w-[100%] max-w-[300px] items-center"
                showDots={true}
                dotListClass="myCarouselDots"
                responsive={responsive}
              >
                {[...partnerContent].map((itm, ind) => (
                  <div className="flex flex-col items-center justify-center gap-4">
                    <ReactCardFlip
                      key={ind}
                      isFlipped={isFlipped === ind}
                      flipDirection="horizontal"
                    >
                      <div
                        onClick={() => setisFlipped(ind)}
                        className={`bg-[#232323] border-2 border-solid border-[#FFA927] cursor-pointer flex flex-col items-center justify-evenly rounded-[25px] h-[400px] w-[250px]`}
                        style={{
                          boxShadow:
                            "0px 6px 4px 0px rgba(0, 0, 0, 0.25) inset, 0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                        }}
                      >
                        <img
                          alt="startup"
                          src={itm.img}
                          width={150}
                          height={150}
                        />
                      </div>
                      <div
                        onClick={() => setisFlipped(-1)}
                        className={`bg-[#232323] border-2 border-solid border-[#FFA927] cursor-pointer flex flex-col items-center justify-evenly rounded-[25px] h-[400px] w-[250px]`}
                        style={{
                          boxShadow:
                            "0px 6px 4px 0px rgba(0, 0, 0, 0.25) inset, 0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                        }}
                      >
                        <h3 className="rajdhani font-medium text-[#dadada] text-center px-[0.95rem] leading-[137.5%]">
                          {itm.para}
                        </h3>
                      </div>
                    </ReactCardFlip>
                    <h3
                      style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
                      className="text-white rajdhani  max-w-[820px] mt-3 font-semibold text-md leading-[150.5%]"
                    >
                      {itm.outsideContent}
                    </h3>
                  </div>
                ))}
              </Carousel>
            ) : (
              [...partnerContent].map((itm, ind) => (
                <div className="flex flex-col items-center justify-center gap-4">
                  <ReactCardFlip
                    key={ind}
                    isFlipped={isFlipped === ind}
                    flipDirection="horizontal"
                  >
                    <div
                      onClick={() => setisFlipped(ind)}
                      className={`bg-[#232323] border-2 border-solid border-[#FFA927] cursor-pointer flex flex-col items-center justify-evenly rounded-[25px] h-[400px] w-[250px]`}
                      style={{
                        boxShadow:
                          "0px 6px 4px 0px rgba(0, 0, 0, 0.25) inset, 0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                      }}
                    >
                      <img
                        alt="startup"
                        src={itm.img}
                        width={150}
                        height={150}
                      />
                    </div>
                    <div
                      onClick={() => setisFlipped(-1)}
                      className={`bg-[#232323] border-2 border-solid border-[#FFA927] cursor-pointer flex flex-col items-center justify-evenly rounded-[25px] h-[400px] w-[250px]`}
                      style={{
                        boxShadow:
                          "0px 6px 4px 0px rgba(0, 0, 0, 0.25) inset, 0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                      }}
                    >
                      <h3 className="rajdhani font-medium text-[#dadada] text-center px-[0.95rem] leading-[137.5%]">
                        {itm.para}
                      </h3>
                    </div>
                  </ReactCardFlip>
                  <h3
                    style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
                    className="text-white rajdhani  max-w-[820px] mt-3 font-semibold text-md leading-[150.5%]"
                  >
                    {itm.outsideContent}
                  </h3>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Partner;
