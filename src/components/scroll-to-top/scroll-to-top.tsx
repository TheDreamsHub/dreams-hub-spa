import { useEffect } from "react";

import { useLocation } from "react-router-dom";

/* eslint-disable-next-line */
export interface ScrollToTopProps {}

export function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default ScrollToTop;
