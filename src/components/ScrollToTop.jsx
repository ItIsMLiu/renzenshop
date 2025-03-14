import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      // Only scroll to top if there's NO hash in the URL
      window.scrollTo(0, 0);
    } else {
      // If there's a hash, scroll to that section
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]); // Re-run when the route changes

  return null;
};

export default ScrollToTop;