import React from "react";
import "./Banner.css";
import bannerImage from "../../../assets/images/banner.png";
import { Link } from "react-router-dom";


const Banner = () => {
  return (
    <div className="sectionGap banner">
      <div className="d-md-flex d-none d-md-block banner align-items-center justify-content-between">
        <div className="col-12 col-md-6">
          <h1 className="pb-0 pb-md-3 pt-0 pt-md-5 pt-lg-0">
            A new frontier in research and development
          </h1>
          <p className="my-3">
            Smart Vision for Consultancy and Development was incorporated in
            2011 in Somalia. We focus majorly on monitoring, evaluation,
            research and learning (MERL), institutional capacity development
            services, private sector development, quality infrastructure and
            trade facilitation, mainly in Somalia and across the greater Horn
            of Africa region.
          </p>
          <Link className="text-black" to="/about"> See More</Link>
        </div>
        <div className="col-12 col-md-5 mt-5 mt-md-0">
          <img className="img-fluid" src={bannerImage} alt="" />
        </div>
      </div>

      {/* mobile  */}
      <div className="d-md-flex d-block d-md-none banner align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <h5 className="col-6 mobileHeader">
            A new frontier in research and development
          </h5>
          <div className="col-6">
            <img className="img-fluid" src={bannerImage} alt="" />
          </div>
        </div>

        <p className="my-3">
          Smart Vision for Consultancy and Development was incorporated in 2011
          in Somalia. We focus majorly on monitoring, evaluation, research and
          learning (MERL), institutional capacity development services, private
          sector development, quality infrastructure and trade facilitation,
          mainly in Somalia and across the greater Horn of Africa region.
        </p>
        <Link className="text-black" to="/about"> See More</Link>
      </div>
    </div>
  );
};

export default Banner;
