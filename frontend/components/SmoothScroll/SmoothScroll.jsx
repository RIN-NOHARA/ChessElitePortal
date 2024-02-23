// SmoothScroll.jsx
import React, { useEffect, useRef } from "react";

import "../../styles/SmoothScroll.css";
import useWindowSize from "../hooks/useWindowSize";

const SmoothScroll = ({ children }) => {
  const scrollingContainerRef = useRef();

  const data = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0,
  };

  useEffect(() => {
    requestAnimationFrame(() => smoothScrollingHandler());
  }, []);

  const smoothScrollingHandler = () => {
    data.current = window.scrollY;
    data.previous += (data.current - data.previous) * data.ease;
    data.rounded = Math.round(data.previous * 100) / 100;

    scrollingContainerRef.current.style.transform = `translateY(-${data.previous}px)`;

    // Recursive call
    requestAnimationFrame(() => smoothScrollingHandler());
  };

  return (
    <div className="parent">
      {/* Assign the ref to the container */}
      <div ref={scrollingContainerRef} className="scroll-container">
        {children}
      </div>
    </div>
  );
};

export default SmoothScroll;
