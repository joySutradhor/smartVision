import React from "react";
import "./Footer.css";
import whiteLogo from "../../../assets/images/whiteLogo.png";
import facebook from "../../../assets/images/facebook.png";
import xphoto from "../../../assets/images/x.png";
import youtube from "../../../assets/images/youtube.png";
import linkdin from "../../../assets/images/in.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-black pt-5 pb-4 pb-md-5 mt-5 text-white">
      <div className="containe">
        <div className="row align-items-center">
          <div className="col-6">
            <img className="footer-logo img-fluid" src={whiteLogo} alt="" />
          </div>
          <div className="col-6  d-none d-lg-block">
            <div className="d-flex justify-content-end">
              <div className="footer-socila">
                <Link to="https://www.facebook.com/profile.php?id=100055362620077" target="_blank">
                  <img className="img-fluid ms-3" src={facebook} alt="" />
                </Link>
                <Link to="/">
                  <img className="img-fluid ms-3" src={xphoto} alt="" />
                </Link>
                <Link to="https://www.youtube.com/watch?v=9H8WUjLwFKM" target="_blank">
                  <img className="img-fluid ms-3" src={youtube} alt="" />
                </Link>
                <Link to="/">
                  <img className="img-fluid ms-3" src={linkdin} alt="" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* footer nav item */}
        <div className="row justify-content-between">
          <div className="col-12 col-md-6 col-lg-4">
            <h6 className="footer-title">Contact</h6>
            <p className="footer-item">Adress: Horn of Africa - Somalia</p>
            <p className="footer-item">
              Email: info@smartvisionconsultancy.org
            </p>
            <p className="footer-item">Call Us: +252 90 7797395</p>
          </div>
          <div className="col-12 col-md-4 col-lg-2">
            <h6 className="footer-title">Information</h6>
            <Link to="/" className="footer-item">
              Home
            </Link>

            <Link to="/about" className="footer-item">
              About us
            </Link>
            <Link to="/services" className="footer-item">
              Service
            </Link>

            <Link to="/track-record" className="footer-item">
              Track record
            </Link>
            <Link to="/media" className="footer-item">
              Media
            </Link>
           
          </div>
          <div className="col-12 col-md-4 col-lg-2">
            <h6 className="footer-title">Help Center</h6>
            <Link to="/contact-us" className="footer-item">
              Supports
            </Link>
            <Link to="/" className="footer-item">
              Terms & Condition
            </Link>
            <Link to="/" className="footer-item">
              Privacy Policty
            </Link>
          </div>
          <div className="col-12 col-md-12 col-lg-3">
            <h6 className="footer-title"></h6>

            <div className="footer-socila mb-3 d-lg-none">
              <Link to="/">
                <img className="img-fluid" src={facebook} alt="" />
              </Link>
              <Link to="/">
                <img className="img-fluid ms-3" src={xphoto} alt="" />
              </Link>
              <Link to="/">
                <img className="img-fluid ms-3" src={youtube} alt="" />
              </Link>
              <Link to="/">
                <img className="img-fluid ms-3" src={linkdin} alt="" />
              </Link>
            </div>

            <p className="footer-message">
              TOGETHER WE ARE STRONGER. JOIN THE CONVERSATION.
            </p>
          </div>
        </div>
      </div>
      {/* ========== footer botton ========== */}
      <div className="copy-write mt-3 mt-md-5 pt-3  pt-md-5">
        <p className="mx-1">
          Copyright © 2024 Smart Vision Powered by Fowzi Media
        </p>
      </div>
    </div>
  );
};

export default Footer;
