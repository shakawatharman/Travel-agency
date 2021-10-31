import React from "react";
import {
  FaGoogle,
  FaFacebookSquare,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import './Footer.css';

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-5">
      <div className="container py-3">
        <div className="row align-items-center">
          <div className="col-md-6 col-sm-12">
            
            <div className="d-flex justify-content-center">
              <span className="ps-2">
                <FaGoogle></FaGoogle>
              </span>{" "}
              <span className="px-2">
                <FaFacebookSquare></FaFacebookSquare>
              </span>{" "}
              <span className="px-2">
                <FaLinkedinIn></FaLinkedinIn>
              </span>{" "}
              <span>
                <FaTwitter></FaTwitter>
              </span>
              <p className="ms-2">Find Us </p>
            </div>
          </div>

          <div className="col-md-6 col-sm-12 text-right">
            <small className="m-0">
              Copyright © 2021 | All Rights Reserved by Travel Agency
            </small>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
