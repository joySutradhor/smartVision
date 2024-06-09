import React from "react";
import homeAbout from "../../../assets/images/homeAbout.png";
import rightArrow from "../../../assets/images/rightarrow.png";
import "./About.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="sectionGap">
      <div className="d-md-flex align-items-center justify-content-between about-column-gap">
        <div className="col-12 col-md-6 ">
          <img className="img-fluid" src={homeAbout} alt="" />
        </div>
        <div className="col-12 col-md-6  mt-5 mt-md-0  px-md-3 px-xl-0">
          <h1 className="pb-0 pb-md-3">About Us</h1>
          <p className="my-3 ">
            Smart Vision for Consultancy and Development was incorporated in
            2011 in Somalia. We focus majorly on monitoring, evaluation,
            research and learning (MERL), institutional capacity development
            services, private sector development, quality infrastructure and
            trade facilitation, mainly in Somalia and across the greater Horn
            of Africa region. At Smart Vision, we are committed to
            professionalism and timely and quality service delivery. Smart
            Vision for Consultancy and Development was incorporated in 2011 in
            Somalia.At Smart Vision
          </p>
          <Link to="/about">
            <button className=" mt-3 mt-md-5 custom-button" href="">
              Read More <img src={rightArrow} alt="" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
