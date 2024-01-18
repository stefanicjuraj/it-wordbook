import { useState, useEffect } from "react";

const useShowScrollToTop = (threshold: number = 256) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const scroll = () => {
      const visible = window.pageYOffset > threshold;
      if (visible !== isVisible) {
        setIsVisible(visible);
      }
    };

    window.addEventListener("scroll", scroll);

    return () => window.removeEventListener("scroll", scroll);
  }, [isVisible, threshold]);

  return isVisible;
};

export default useShowScrollToTop;
