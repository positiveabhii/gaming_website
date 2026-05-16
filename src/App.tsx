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
       website in accessible 
    </div>
  );
}

export default App;
