import React from "react";
import ImageGallery from "react-image-gallery";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import "./styles/text1.css";
import images from "./images";
import "react-image-gallery/styles/css/image-gallery.css";
import "./styles/t.css";
export default function App() {
  function renderLeftNav(onClick, disabled) {
    return (
     




      <div className="lp">
      <button
        type="button"
        className="image-gallery-left-nav"
        aria-label="Prev Slide"
        disabled={disabled}
        onClick={onClick}
      >
        <FaArrowLeft size={30} color="#000" />
      </button>
      </div>
      
    );
  }

  return (
    <>
    <div className="bodytournaments">
    <br></br><br></br><br></br><br></br>
    <center>
      <div className="tournament-heading">
      <div className="text-effect">
        <h1 className="neon" data-text="TOURNAMENTS" contentEditable>
          
        </h1>
        <div className="gradient"></div>
        <div className="spotlight"></div>
      </div>
      </div>
    </center>
    </div>
    
    <div className="App">
      <div className="lp">
       
      <ImageGallery items={images} />
     
    </div>
    </div>
</>
  );


  function renderRightNav(onClick, disabled) {
    return (
      <div className="lp">
        <br></br>
      <button
        type="button"
        className="image-gallery-right-nav"
        aria-label="Next Slide"
        disabled={disabled}
        onClick={onClick}
      >
        <FaArrowRight size={30} color="white" />
      </button>
      </div>
    );
  }

  return (
    <div className="lp">
      <br></br><br></br><br></br><br></br>
    <div className="App">
      <link to="/reg23">
      <ImageGallery
        items={images}
       
      />
      </link>
    </div>
    </div>
  );
  }
