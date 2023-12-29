import React, { useEffect, useState, ReactNode } from "react";
import { ContextSizeProvider } from "./context";

interface IProp {
  children: ReactNode;
}

const SizeContextProvider = ({ children }: IProp) => {
  const [width, setWidth] = useState<number>(window.innerWidth);
  const [height, setheight] = useState(window.innerHeight);

  useEffect(() => {
    setWidth(window.innerWidth);
    const handleResize = () => {
      console.log(window.innerHeight, "vfedw");

      setWidth(window.innerWidth);
      setheight(window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

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
