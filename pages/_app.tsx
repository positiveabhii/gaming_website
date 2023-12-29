import "@/styles/globals.css";
import { Fragment, useState } from "react";
import type { AppProps } from "next/app";
import SizeContextProvider from "../state/sizeContext";
import "react-multi-carousel/lib/styles.css";
import { Toaster } from "react-hot-toast";
import ScrollContextProvider from "../state/scrollContext";
import Navbar from "@/components/navbar/navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Head from "next/head";
import Footer from "@/components/footer/footer";

export default function App({ Component, pageProps }: AppProps) {
  const [hoveringOnContact, sethoveringOnContact] = useState(false);
  return (
    <Fragment>
      <Head>
        <head>
          <meta charSet="utf-8" />
          <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="use-credentials"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Commissioner:wght@300;400;500;600&family=Poppins:wght@300;400;500&family=Rajdhani:wght@400;500;600&family=Raleway:wght@300;400;500&display=swap"
            rel="stylesheet"
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta
            name="description"
            content="Web site created using create-react-app"
          />
          <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />

          <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />

          <title>Platform Play Venture</title>
        </head>
      </Head>
      <ScrollContextProvider>
        <SizeContextProvider>
          <Toaster />
          <Navbar />
          <div
            className="fixed z-[1000] rounded-lg cursor-pointer"
            style={{
              bottom: "200px",
              right: "2px",
              backgroundColor: hoveringOnContact ? "#4a4a4a" : "#ffa115",
              padding: "6px",
            }}
            onMouseEnter={() => sethoveringOnContact(true)}
            onMouseLeave={() => sethoveringOnContact(false)}
          >
            {hoveringOnContact && (
              <div>
                <h1 className="text-[#dadada]">Connect with us</h1>
              </div>
            )}
            <div className="flex items-center gap-3 ">
              {hoveringOnContact && (
                <>
                  <a
                    href="http://wa.me/919830601360"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faWhatsapp}
                      color={hoveringOnContact ? "#ffa115" : "#232323"}
                      size="2x"
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/p-p-v/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      color={hoveringOnContact ? "#ffa115" : "#232323"}
                      size="2x"
                    />
                  </a>
                </>
              )}
              {hoveringOnContact ? (
                <a href="mailto:contact@platformplay.in">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    color={hoveringOnContact ? "#ffa115" : "#232323"}
                    size="2x"
                  />
                </a>
              ) : (
                <FontAwesomeIcon
                  icon={faEnvelope}
                  color={hoveringOnContact ? "#ffa115" : "#232323"}
                  size="2x"
                />
              )}
            </div>
          </div>
          <Component {...pageProps} />
          <Footer />
        </SizeContextProvider>
      </ScrollContextProvider>
    </Fragment>
  );
}
