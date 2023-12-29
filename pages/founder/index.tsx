import React, { Fragment, useState, useEffect } from "react";
import {
  founder1DataObject,
  founder2DataObject,
  topPageContent,
  businessTexts,
} from "../../content/founderContent";
import { UseSizeContext } from "../../state/context";
import FounderCard from "../../components/founder/founderCard";
// import Title from "../../components/founder/title";
import TitleText from "../../components/common/titleText";
import BackCircles from "../../components/common/backCircles";
import { useInView } from "react-intersection-observer";
import dynamic from "next/dynamic";
import Carousel from "react-multi-carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faHandPointRight } from "@fortawesome/free-solid-svg-icons";
import { getSEOById, SEO } from "../../firebase/function";
import Head from "next/head";

const CardDeck = dynamic(import("../../components/founder/cardDeck"), {
  ssr: false,
});
const Founder = () => {
  const responsive = {
    mobile: {
      breakpoint: { max: 1024, min: 350 },
      items: 1,
    },
  };

  const { width } = UseSizeContext();
  const [startAnimation1, setstartAnimation1] = useState(false);

  function clickOnImage1() {
    setstartAnimation1(true);
  }

  const [startAnimation2, setstartAnimation2] = useState(false);

  function clickOnImage2() {
    setstartAnimation2(true);
  }
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.2,
  });

  const [seoContent, setseoContent] = useState<SEO | null>(null);

  useEffect(() => {
    (async () => {
      const seo = await getSEOById({ id: "founder" });
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
      <div className="w-full relative min-h-screen" id="homePage">
        <div
          ref={ref}
          className={`flex absolute z-0 w-full p-0 ${"min-h-[90vh] max-h-[100vh]"}`}
        >
          <BackCircles whichPage="Founder" direction="top" inView={inView} />
        </div>

        <div className="relative w-[90%] mx-auto z-[100] flex flex-col items-center gap-4 py-12">
          <h1
            style={{
              textShadow: "0px 4px 4px rgba(0, 0, 0, 0.91)",
              flexShrink: 0,
            }}
            className={`text-[#F2F2F2] uppercase rajdhani font-semibold mt-3 ${
              width > 906 ? "text-[50px]" : "text-[40px]"
            } leading-[137.5%]`}
          >
            a word from our founders
          </h1>
          <h3
            style={{ textShadow: " 0px 4px 4px rgba(0, 0, 0, 0.25)" }}
            className={`text-[#FFA115] rajdhani font-normal leading-[137.5%]`}
          >
            The PPV Vision
          </h3>
          <div className="text-left">
            {topPageContent.map((content, index) => (
              <div className="flex items-center gap-3">
                {/* <FontAwesomeIcon icon={faHandPointRight} color="#dadada" /> */}
                <h3
                  key={index}
                  style={{
                    textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                    whiteSpace: "pre-line",
                  }}
                  className="text-[#dadada] rajdhani max-w-[1000px] w-[90%] mt-2 font-semibold text-sm leading-[150.5%]"
                >
                  {content}
                </h3>
              </div>
            ))}
          </div>
          <h3
            style={{ textShadow: " 0px 4px 4px rgba(0, 0, 0, 0.25)" }}
            className={`text-[#FFA115] rajdhani font-normal leading-[137.5%]`}
          >
            The PPV Consulting and Project Management Method
          </h3>
          <div className="w-full">
            {width > 550 ? (
              <div className="grid w-full max-w-[1000px] mx-auto grid-cols-2 md:grid-cols-3 my-4">
                {businessTexts.map((info, index) => (
                  <div
                    style={{
                      boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                    }}
                    className="w-[257px] relative h-[246px] my-3 mx-auto px-3 pt-6 pb-1 flex flex-col items-start justify-between rounded-[22px] border-[#FFA927] bg-[#3B3B3B] border-solid border-2"
                    key={index}
                  >
                    <p className="rajdhani text-[14px] text-[#dadada]">
                      {info.text}
                    </p>
                    <div className="flex relative">
                      <img alt={info.img} width={50} src={info.img} />
                      {(index === 0 || index === 4) && (
                        <img
                          alt={info.img}
                          style={
                            index === 0 || index === 4
                              ? { transform: "rotate" }
                              : {}
                          }
                          className={
                            index === 4
                              ? "absolute bottom-[45px] left-[40px]"
                              : ""
                          }
                          src={info.img}
                        />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div>
                <Carousel
                  swipeable={false}
                  draggable={false}
                  containerClass="myCarouselForHome"
                  showDots={true}
                  dotListClass="myCarouselDots"
                  responsive={responsive}
                >
                  {businessTexts.map((info, index) => (
                    <div
                      style={{
                        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                      }}
                      className="w-[257px] h-[246px] my-3 mx-auto px-3 pt-6 pb-1 flex flex-col items-start justify-between rounded-[22px] border-[#FFA927] bg-[#3B3B3B] border-solid border-2"
                      key={index}
                    >
                      <p className="rajdhani text-[14px] text-[#dadada]">
                        {info.text}
                      </p>
                      <div className="flex relative">
                        <img alt={info.img} width={50} src={info.img} />
                        {(index === 0 || index === 4) && (
                          <img
                            alt={info.img}
                            style={
                              index === 0 || index === 4
                                ? { transform: "rotate" }
                                : {}
                            }
                            className={
                              index === 4
                                ? "absolute bottom-[45px] left-[40px]"
                                : ""
                            }
                            src={info.img}
                          />
                        )}
                      </div>
                    </div>
                  ))}
                </Carousel>
              </div>
            )}
          </div>
        </div>

        <div
          className={`w-[100%] z-[10000] relative flex flex-col mt-20 items-center justify-center max-w-[1400px] mx-auto`}
        >
          <TitleText isAbsolute={false} text="Our Founders" />

          {width > 1103 ? (
            <>
              <div className="flex items-start gap-2 my-4">
                <div className="flex flex-col items-center justify-center">
                  <h1 className="text-[#dadada] font-bold">
                    KAUSTUV MUKHERJEE
                  </h1>
                  <h4 className="text-[#F89E19]">Managing Partner</h4>
                </div>
                <a
                  href="https://www.linkedin.com/in/kaustuv-mukherjee-00128916/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon
                    color="#dadada"
                    size="2x"
                    icon={faLinkedin}
                  />
                </a>
              </div>
              <FounderCard
                founderData={founder1DataObject}
                img={"/kaustuv.png"}
                startAnimation={startAnimation1}
                onClickImage={clickOnImage1}
              />
              <div className="flex items-start gap-2 my-4">
                <div className="flex flex-col items-center justify-center">
                  <h1 className="text-[#dadada] font-bold">MITUL DAS</h1>
                  <h4 className="text-[#F89E19]">Partner</h4>
                </div>
                <a
                  href="https://www.linkedin.com/in/mituld/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon
                    color="#dadada"
                    size="2x"
                    icon={faLinkedin}
                  />
                </a>
              </div>
              <FounderCard
                founderData={founder2DataObject}
                startAnimation={startAnimation2}
                onClickImage={clickOnImage2}
                img={"/mitul.png"}
              />
            </>
          ) : (
            <>
              <div className="flex flex-col items-center justify-center my-4">
                <h1 className="text-[#dadada] font-bold">KAUSTUV MUKHERJEE</h1>
                <h4 className="text-[#F89E19]">Managing Partner</h4>
              </div>
              <CardDeck img={"/kaustuv.png"} founderData={founder1DataObject} />
              <div className="flex flex-col items-center justify-center my-4">
                <h1 className="text-[#dadada] font-bold">MITUL DAS</h1>
                <h4 className="text-[#F89E19]">Partner</h4>
              </div>
              <CardDeck img={"/mitul.png"} founderData={founder2DataObject} />
            </>
          )}
        </div>

        {/* <div id="homePage" className="absolute min-h-screen z-[100] w-full">
          
          
        </div> */}
      </div>
    </Fragment>
  );
};

export default Founder;
