import React from "react";
// import { Link } from "react-router-dom";
import pic from "../../../image/asadullah.png";
import "./Header.css";
const Header = () => {
  return (
    <div className="page-header">
      <div className="header-info padding">
        <div className="row g-3 justify-content-center align-items-center">
          <div className="col-md-3 col-12 text-center">
            <img className="img-fluid image" src={pic} alt="" />
          </div>
          <div className="col-md-9 mt-5 col-12 text-center">
            <h1 className="home-title text-center">Asadullah Ahmed</h1>
            <h2 className="sub-title mb-2">Web Developer</h2>
            <div className="icon pt-3">
              <a
                className="icon-link"
                href="https://www.linkedin.com/in/asadullah-ahmed-462923216/"
                rel="noreferrer"
                target="_blank"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                className="icon-link"
                href="https://github.com/asadullah055"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
