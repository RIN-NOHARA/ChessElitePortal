// Section.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../../styles/Section.css';

const Section = ({ flexDirection }) => {
  return (
    <div className='bodysection12'>
    <div className="section12">
      <div className="leftsection12-container">
        <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br><br></br><br></br><br></br><br></br>
        <div className="block"></div>
      </div>

      <div className="rightsection12-container">
        <div className="container">
        <br></br> <br></br> <br></br> <br></br> <br></br>
          <pre>
            <div className='psection12'>
          <p>               Chess is not just a game;</p>
          </div>
          </pre>

          <center>
            <pre>
            <div className='psection12'>
              <p> it is a journey of strategy, intellect, and continuous learning.</p>
              </div>
            </pre>
          </center>
          {/* Other lines of text */}
          <center>
            <pre>
            <div className='psection12'>
              <p> The pride of a chess player is not just about winning matches.</p>
            </div>
            </pre>
          </center>
          <center>
            <pre>
            <div className='psection12'>
              <p> but encompasses a range of virtues and qualities</p>
              </div>
            </pre>
          </center>
          <br></br><br></br><br></br>
          <center>
            <pre>
              {/* Use Link instead of link */}
              <Link to="/signin">
                <button className="glow-on-hover" type="button">
                  START YOUR JOURNEY NOW!
                </button>
              </Link>
            </pre>
          </center>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Section;
