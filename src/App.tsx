import "./App.css";
import { useState } from "react";
import Navbar from "./components/navbar/navbar";
import Founder from "./pages/founders/founder";
import Home from "./pages/home/home";
import Gaming from "./pages/game/gaming";
import { Routes, Route, Navigate } from "react-router-dom";
import Partner from "./pages/partners/partner";
import Contact from "./pages/contact/contact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Insights from "./pages/insights/insights";
import BlogComponent from "./pages/blog/blog";
import CS from "./pages/cs/cs";

function App() {
  const [hoveringOnContact, sethoveringOnContact] = useState(false);

  return (
    <div className="App relative">
      <Navbar />
      <div
        className="fixed z-[1000] flex items-center gap-3 rounded-full cursor-pointer"
        style={{
          bottom: "200px",
          right: "2px",
          backgroundColor: hoveringOnContact ? "#4a4a4a" : "#ffa115",
          padding: "10px",
        }}
        onMouseEnter={() => sethoveringOnContact(true)}
        onMouseLeave={() => sethoveringOnContact(false)}
      >
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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/founder" element={<Founder />} />
        <Route path="/solution/:category" element={<Gaming />} />
        <Route path="/our-partners" element={<Partner />} />
        <Route path="/contactus" element={<Contact />} />
        <Route path="/insights" element={<Insights />} />
        <Route element={<CS />} path="/insights/case-studies/:id" />
        <Route path="/insights/blog/:id" element={<BlogComponent />} />
        {/* Catch-all route for handling incorrect routes */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
