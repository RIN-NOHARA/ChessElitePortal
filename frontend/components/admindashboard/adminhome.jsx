import React from 'react';
import ReactDOM from 'react-dom';

class Toggle extends React.Component {
  render() {
    return (
      <div className="start adminhome">
        <header>
          <nav className="navigation adminhome navbar navbar-default navbar-fixed-top">
            <div className="container-fluid">
              <div className="navbar-header">
                <a className="navbar-brand adminhome" href="#">
                  <h1 className="brand-title adminhome"> Country Home </h1>
                </a>
              </div>
              <a href="#">
                <p id="menuText" className="navbar-text navbar-right adminhome">Our Story</p>
              </a>
              <a href="#">
                <p id="menuText" className="navbar-text navbar-right adminhome">Agents</p>
              </a>
              <a href="#">
                <p id="menuText" className="navbar-text navbar-right adminhome">Listings</p>
              </a>
              <i id="search" className="navbar-text navbar-right adminhome fa fa-search fa-2x"></i>
            </div>
          </nav>
        </header>
        <body>
          <div className="intro-header adminhome">
            <div className="container">
              <div className="row">
                <div className="col-lg-8">
                  <div className="intro-message adminhome">
                    <h1 className="animated slideInLeft adminhome">Finding the perfect home, made <span className="highlight adminhome">simple</span>.</h1>
                    <h3 className="animated slideInRight adminhome">Explore your options.</h3>
                    <ul className="list-inline intro-social-buttons adminhome">
                      <li>
                        <a href="#"><button className="button animated bounceInUp btn btn-info btn-lg adminhome"> <span className="network-name adminhome">View Nearby Listings</span></button></a>
                      </li>
                      <li>
                        <a href="#"><button className="button2 animated bounceInUp btn btn-info btn-lg adminhome"> <span className="network-name adminhome">Contact an Agent</span></button></a>
                      </li>
                    </ul>
                    <h4 className="learn animated bounceInUp adminhome">About Our Agency</h4>
                    <i className="arrow animated infinite pulse fa fa-angle-down icon fa-5x adminhome"></i>
                  </div>
                </div>
                <div className="col-lg-4"></div>
              </div>
            </div>
          </div>
        </body>
      </div>
    );
  } 
}

export default Toggle;
