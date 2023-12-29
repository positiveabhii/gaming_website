import { createContext, useContext } from "react";

interface ScrollContextType {
  scrollY: number;
}
export const ContextScrollProvider = createContext<ScrollContextType>({
  scrollY: 0,
});
export const UseScrollContext = () => useContext(ContextScrollProvider);

interface ScreenWidthContextType {
  height: number;
  width: number;
}
export const ContextSizeProvider = createContext<ScreenWidthContextType>({
  width: 0,
  height: 0,
});

export const UseSizeContext = () => useContext(ContextSizeProvider);
