import React from 'react';
import useShowScrollToTop from '../hooks/useShowScrollToTop';

const ScrollToTop: React.FC = () => {
    const isShown = useShowScrollToTop();

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    if (!isShown) {
        return null;
    }

    return (
        <button className="w-10 h-10 mr-3 mb-3 text-black bg-gray-100 rounded-lg flex justify-center items-center fixed bottom-0 right-0 z-10"
            aria-label="Back to top"
            onClick={scrollToTop}
        >
        </button>
    );
};

export default ScrollToTop;
