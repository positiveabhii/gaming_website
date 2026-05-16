import Section1 from "../components/home/section1/section1";
import Section2 from "../components/home/section2/section2";
import Section3 from "../components/home/section3/section3";
import Section4 from "../components/home/section4/section4";
import React, { useEffect, useState } from "react";
import Head from "next/head";
import { getSEOById, SEO } from "../firebase/function";
import { UseScrollContext } from "@/state/context";

export default function Home() {
  const { scrollY } = UseScrollContext();

  const [seoContent, setseoContent] = useState<SEO | null>(null);
  const [showCookieNotice, setShowCookieNotice] = useState(false);

  useEffect(() => {
    // Check if the user has already accepted the cookie notice
    const hasAcceptedCookies = localStorage.getItem("hasAcceptedCookies");

    // If not, show the cookie notice
    if (!hasAcceptedCookies) {
      setShowCookieNotice(true);
    }
  }, []); // Empty dependency array ensures this runs only once on component mount

  const handleAcceptCookies = () => {
    // Set the flag in localStorage to indicate that the user has accepted cookies
    localStorage.setItem("hasAcceptedCookies", "true");

    // Hide the cookie notice
    setShowCookieNotice(false);
  };

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
    <main>
      website is inaccessible 
    </main>
  );
}
