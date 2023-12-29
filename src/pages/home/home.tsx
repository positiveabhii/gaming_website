import React, { Fragment, useEffect, useState } from "react";
import { getSEOById, SEO } from "../../firebase/function";
import { Helmet } from "react-helmet";
import Section1 from "../../components/home/section1/section1";
import Section2 from "../../components/home/section2/section2";
import Section3 from "../../components/home/section3/section3";
import Section4 from "../../components/home/section4/section4";

const Home = () => {
  const [seoContent, setseoContent] = useState<SEO | null>(null);

  useEffect(() => {
    (async () => {
      const seo = await getSEOById({ id: "home" });
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
      <Helmet>
        <title>{seoContent?.title}</title>
        <meta name="description" content={seoContent?.description} />
        <meta name="keywords" content={seoContent?.metaTag}></meta>
      </Helmet>
      <section
        id="homePage"
        className="w-full flex min-h-screen flex-col justify-center"
      >
        <Section1 />
        {/* 2nd part */}
        <Section3 />
        <Section4 />
        <Section2 />
      </section>
    </Fragment>
  );
};

export default Home;
