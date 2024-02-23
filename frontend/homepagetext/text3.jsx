// HomepageText.jsx
import React from 'react';
import "../../src/styles/homepagetext.css"
import logoImage from "../../src/images/logo.jpg";
const HomepageText = () => {
  return (
    <>
    <div className='hi'>
        <br></br>
    <div className="homepage-text-container">
      <h1 className="homepage-title">
        <span>Hi, nice</span>
        <span>to see</span>
        <span>you here</span>
      </h1>

      <h2 className="homepage-subtitle">
        <span>Learn Chess Online, 
</span>
        <span>with</span>
        <span>structured  guidance</span>
      </h2>
      <center><img className="logo1" src={logoImage} alt="Logo" /></center>

     
    </div>
    <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
   
    <div className="academy-container">
      <h1 className="academy-title">Chess Gaja Pvt. Ltd.</h1>
        <pre>
      <p className="academy-description">
        A global online academy offering personalized chess lessons for all levels and ages, led by <div></div>
                GrandMaster and FIDE Trainer
         Kannappan (USCF rating - 2632, FIDE rating - 2553).
      </p>
        </pre>
      <p className="academy-description">
        Coach of Brazil National Team for 2022 Chess Olympiad and Coach of
        Indian Sub Junior Team for 2019 Chess Olympiad.
      </p>
    </div>
    </div>
    </>
  );
};

export default HomepageText;
