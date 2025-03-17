"use client";

import { useScrollToTop } from "../hooks/useScrollToTop";

export const ScrollToTop: React.FC = () => {
  const isShown = useScrollToTop();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isShown) {
    return null;
  }

  return (
    <button
      className="fixed bottom-0 right-0 z-10 flex items-center justify-center w-12 h-12 mb-3 mr-3 text-black bg-gray-100 border border-b-4 border-r-4 border-black rounded-lg cursor-pointer"
      aria-label="Back to top"
      onClick={scrollToTop}
    >
      <img
        src="/assets/icons/arrow.svg"
        alt="scroll to top"
        className="w-5 h-5"
      />
    </button>
  );
};
