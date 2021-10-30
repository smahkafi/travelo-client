import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  faFacebookSquare,
  faTwitterSquare,
  faYoutubeSquare,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import logo from "../../../images/logo.webp";

const Footer = () => {
  return (
    <div className="bg-dark">
      <div className="container">
        <div className="row mt-5">
          <div className="col-sm-12 col-md-12 col-lg-4 justify-content-center py-5">
            <div>
              <div>
                <img src={logo} alt="icon" />
              </div>
              <p className="text-light">Your sefty is our first priority.</p>
            </div>
            <div>
              <Link to="/home" className="ps-2">
                <FontAwesomeIcon
                  className="icon fs-3 text-info"
                  icon={faTwitterSquare}
                />
              </Link>
              <Link to="/home" className="ps-2">
                <FontAwesomeIcon
                  className="icon fs-3 text-primary"
                  icon={faFacebookSquare}
                />
              </Link>
              <Link to="/home" className="ps-2">
                <FontAwesomeIcon
                  className="icon fs-3 text-danger"
                  icon={faYoutubeSquare}
                />
              </Link>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-4 align-self-center py-5">
            <h6 className="text-light ">
              Copyright &copy; 2021 All rights reserved <span className="text-warning">Travel O</span>
            </h6>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-4 justify-content-center text-light py-5">
            <h2>Address</h2>
            <p>1212, D-block, Green lane, Dhanmondi 32</p>
            <p>+880 1703 075837</p>
            <p>contact@travelo.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
