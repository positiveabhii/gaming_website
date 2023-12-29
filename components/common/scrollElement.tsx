// components/ScrollToElement.js
import { ReactNode } from "react";
import { Link as ScrollLink } from "react-scroll";

const ScrollToElement = ({
  to,
  children,
}: {
  to: string;
  children: ReactNode;
}) => (
  <ScrollLink to={to} smooth={true} offset={-100} duration={500}>
    {children}
  </ScrollLink>
);

export default ScrollToElement;
