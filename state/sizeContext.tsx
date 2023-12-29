import React, { useEffect, useState, ReactNode } from "react";
import { ContextSizeProvider } from "./context";

interface IProp {
  children: ReactNode;
}

const SizeContextProvider = ({ children }: IProp) => {
  const [width, setWidth] = useState<number>(0);
  const [height, setheight] = useState<number>(0);

  const handleResize = () => {
    if (typeof window !== "undefined") {
      setWidth(window.innerWidth);
      setheight(window.innerHeight);
    }
  };
  useEffect(() => {
    handleResize();
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWidth(window.innerWidth);

      window.addEventListener("resize", handleResize);
    }
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <ContextSizeProvider.Provider value={{ width, height }}>
      {children}
    </ContextSizeProvider.Provider>
  );
};

export default SizeContextProvider;
