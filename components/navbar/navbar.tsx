import React, { useState } from "react";

const Navbar = () => {
  const [showMobileMenu, setshowMobileMenu] = useState(false);
  const toggleMobileMenu = () => {
    setshowMobileMenu(!showMobileMenu);
  };
  const [toggleOptionInMobile, settoggleOptionInMobile] = useState<
    "" | "Insights" | "Solutions"
  >("");

  return (
    <div id="navbar" className="commissioner">
      <nav className="flex max-w-[1300px] mx-auto items-center justify-between px-6 lg:px-10">
        <a href="/" className="relative">
          <img
            className="cursor-pointer"
            alt="logo"
            src="/logo.png"
            width={200}
            height={100}
          />
          <p className="font-bold rajdhani absolute bottom-4 right-[0px] text-[12px]">
            Brand Growth Game On!
          </p>
        </a>
        <button
          onClick={toggleMobileMenu}
          className={`block md:hidden hamburger p-2 hamburger--elastic ${
            showMobileMenu ? "is-active" : ""
          }`}
          type="button"
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
        <ul className="hidden md:flex items-center justify-center gap-x-10 text-[#FFB545] text-[16px] font-semibold">
          <li className="cursor-pointer">
            <a href="/">Home</a>
          </li>
          <li className="cursor-pointer">
            <a href="/founder">About Us</a>
          </li>
          <li className="cursor-pointer group relative">
            <div className="flex group items-center justify-center gap-1">
              <span>Solutions</span>
              <img
                alt="chevron"
                className="transform transition-transform group-hover:rotate-180"
                src="/chevron.svg"
                width={20}
                height={20}
              />
            </div>
            <ul className="hidden group-hover:block absolute z-[1000] bg-[#FFB545] rounded-md p-4 gap-y-2">
              <li className="whitespace-nowrap mt-2 text-black cursor-pointer hover:opacity-70">
                <a href="/solution/Enterprises">Solutions for Enterprises</a>
              </li>
              <li className="whitespace-nowrap mt-2 text-black cursor-pointer hover:opacity-70">
                <a href="/solution/Startup">Solutions for Startups</a>
              </li>
              <li className="whitespace-nowrap mt-2 text-black cursor-pointer hover:opacity-70">
                <a href="/solution/Innovators">Solutions for Innovators</a>
              </li>
            </ul>
          </li>
          <li className="cursor-pointer group relative">
            <div className="flex items-center justify-center gap-1">
              <span>Insights</span>
              <img
                alt="chevron"
                className="transform transition-transform group-hover:rotate-180"
                src="/chevron.svg"
                width={20}
                height={20}
              />
            </div>
            <ul className="hidden group-hover:block absolute z-[1000] bg-[#FFB545] rounded-md p-4 gap-y-2">
              <li className="whitespace-nowrap mt-2 text-black cursor-pointer hover:opacity-70">
                <a href="/insights#blogs">Blogs</a>
              </li>
              <li className="whitespace-nowrap mt-2 text-black cursor-pointer hover:opacity-70">
                <a href="/insights#case-studies">Case Studies</a>
              </li>
              <li className="whitespace-nowrap mt-2 text-black cursor-pointer hover:opacity-70">
                <a href="/insights#e-books">E-books</a>
              </li>
              <li className="whitespace-nowrap mt-2 text-black cursor-pointer hover:opacity-70">
                <a href="/insights#white-papers">White Papers</a>
              </li>
            </ul>
          </li>
          <li className="cursor-pointer">
            <a href="/ourPartners">Our Partner Network</a>
          </li>
          <li className="cursor-pointer">
            <a href="/contactus">Contact Us</a>
          </li>
        </ul>
      </nav>
      {showMobileMenu && (
        <nav
          //  id="navbar"
          className="bg-[#FFB545] absolute z-[1000] w-full md:hidden flex"
        >
          <ul className="flex flex-col p-3 w-full justify-center gap-y-4 text-[#242424] text-[16px] font-semibold">
            <li className="cursor-pointer">
              <a href="/">Home</a>
            </li>
            <li className="cursor-pointer">
              <a href="/founder">About Us</a>
            </li>
            <li className="cursor-pointer w-full">
              <div
                onClick={() => {
                  if (toggleOptionInMobile === "Solutions") {
                    settoggleOptionInMobile("");
                  } else {
                    settoggleOptionInMobile("Solutions");
                  }
                }}
                className="flex items-center w-full justify-between gap-1"
              >
                <span>Solutions</span>
                <img
                  alt="chevron"
                  className={`transform transition-transform ${
                    toggleOptionInMobile === "Solutions"
                      ? "rotate-180"
                      : "rotate-0"
                  }`}
                  src="/chevron.svg"
                  width={20}
                  height={20}
                />
              </div>{" "}
              {toggleOptionInMobile === "Solutions" && (
                <ul className="block  bg-[#FFB545] rounded-md px-4">
                  <li className="whitespace-nowrap mt-2 text-black cursor-pointer hover:opacity-70">
                    <a href="/solution/Enterprises">
                      Solutions for Enterprises
                    </a>
                  </li>
                  <li className="whitespace-nowrap mt-2 text-black cursor-pointer hover:opacity-70">
                    <a href="/solution/Startup">Solutions for Startups</a>
                  </li>
                  <li className="whitespace-nowrap mt-2 text-black cursor-pointer hover:opacity-70">
                    <a href="/solution/Innovators"> Solutions for Innovators</a>
                  </li>
                </ul>
              )}
            </li>
            <li className="cursor-pointer w-full">
              <div
                onClick={() => {
                  if (toggleOptionInMobile === "Insights") {
                    settoggleOptionInMobile("");
                  } else {
                    settoggleOptionInMobile("Insights");
                  }
                }}
                className="flex items-center w-full justify-between gap-1"
              >
                <span>Insights</span>
                <img
                  alt="chevron"
                  className={`transform transition-transform ${
                    toggleOptionInMobile === "Insights"
                      ? "rotate-180"
                      : "rotate-0"
                  }`}
                  src="/chevron.svg"
                  width={20}
                  height={20}
                />
              </div>
              {toggleOptionInMobile === "Insights" && (
                <ul className="block  bg-[#FFB545] rounded-md px-4">
                  <li className="whitespace-nowrap mt-2 text-black cursor-pointer hover:opacity-70">
                    <a href="/insights#blogs">Blogs</a>
                  </li>
                  <li className="whitespace-nowrap mt-2 text-black cursor-pointer hover:opacity-70">
                    <a href="/insights#case-studies">Case Studies</a>
                  </li>
                  <li className="whitespace-nowrap mt-2 text-black cursor-pointer hover:opacity-70">
                    <a href="/insights#white-papers">White Papers</a>
                  </li>
                  <li className="whitespace-nowrap mt-2 text-black cursor-pointer hover:opacity-70">
                    <a href="/insights#e-books">E-books</a>
                  </li>
                </ul>
              )}
            </li>
            <li className="cursor-pointer">
              <a href="/ourPartners">Our Partner Network</a>
            </li>
            <li className="cursor-pointer">
              <a href="/contactus">Contact Us</a>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Navbar;
