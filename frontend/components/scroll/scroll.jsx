import React, { useRef } from "react";
import "../../styles/scroll.css";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export default function Scroll() {
  const sliderRef = useRef(null);
  const scrollAmount = 100;
  const images = [
    {
      id: 1,
      url: "https://source.unsplash.com/300x300/?perth,australia"
    },
    {
      id: 2,
      url: "https://source.unsplash.com/300x300/?west-australia"
    },
    {
      id: 3,
      url: "https://source.unsplash.com/300x300/?perth"
    },
    {
      id: 4,
      url: "https://source.unsplash.com/300x300/?quokka,perth"
    },
    {
      id: 5,
      url: "https://source.unsplash.com/300x300/?margaretriver,australia"
    },
    {
      id: 6,
      url:
        "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
    }
  ];

  return (
    <div className="Appscroll">
      <button
        className="navscroll-btn"
        onClick={() => {
          const container = sliderRef.current;
          container.scrollLeft -= scrollAmount;
        }}
      >
        <ChevronLeftIcon />
      </button>
      <div className="imagesscroll-container" ref={sliderRef}>
        {images.map((image) => {
          return (
            <img
              className="imagescroll"
              alt="sliderImage"
              key={image?.id}
              src={image?.url}
            />
          );
        })}
      </div>
      <button
        className="navscroll-btn"
        onClick={() => {
          const container = sliderRef.current;
          container.scrollLeft += scrollAmount;
        }}
      >
        <ChevronRightIcon />
      </button>
    </div>
  );
}
