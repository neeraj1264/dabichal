"use client";
import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;

      setScrollPercent(scrolled);

      if (scrollTop > 200) setIsVisible(true);
      else setIsVisible(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Circle math
  const radius = 24; // circle radius
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (scrollPercent / 100) * circumference;

  return (
    isVisible && (
      <div
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 flex items-center justify-center cursor-pointer"
      >
        {/* Progress ring */}
        <svg className="absolute w-14 h-14 rotate-[-90deg]">
          <circle
            cx="28"
            cy="28"
            r={radius}
            strokeWidth="4"
            fill="none"
          />
          <circle
            cx="28"
            cy="28"
            r={radius}
            stroke="#f97316" // orange
            strokeWidth="4"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            className="transition-all duration-200"
          />
        </svg>

        {/* Button */}
        <div className="w-12 h-12 rounded-full  text-orange flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 relative z-10">
          <FaArrowUp size={18} />
        </div>
      </div>
    )
  );
}
