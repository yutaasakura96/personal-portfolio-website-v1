import React, { useEffect, useState } from "react";

export default function CallToAction() {
  // State to track whether the page has been scrolled
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Handler to check scroll position and update `isScrolled`
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
       // Set true if scrolled, false if at top
      setIsScrolled(scrollTop > 0);
    };

    // Add scroll event listener to the window
    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Display scroll-to-top button only when `isScrolled` is true */}
      {isScrolled ? (
        <button
          className="bg-[#48afde] p-4 w-fit rounded-xl fixed bottom-8 right-8 cursor-pointer z-50 animate-bounce"
          onClick={() => window.scrollTo(0, 0)}
          aria-label="Scroll to top"
          title="Scroll to top"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={5}
            stroke="currentColor"
            className="w-6 h-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 15.75l7.5-7.5 7.5 7.5"
            />
          </svg>
        </button>
      ) : (
        "" // Render nothing if `isScrolled` is false
      )}
    </div>
  );
}
