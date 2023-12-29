import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import SizeContextProvider from "./state/sizeContext";
import { BrowserRouter } from "react-router-dom";
import "react-multi-carousel/lib/styles.css";
import { Toaster } from "react-hot-toast";
import ScrollContextProvider from "./state/scrollContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollContextProvider>
        <SizeContextProvider>
          <Toaster />
          <App />
        </SizeContextProvider>
      </ScrollContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
