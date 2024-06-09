import React from "react";
import mediaNew2 from "../../../assets/images/mediaImg/mediaNew2.png";

const MediaBanner = () => {
  return (
    <div>
      <div className="sectionParent d-flex  mt-md-5 align-items-center justify-content-between ">
        <div className="col-md-6 col-12  pe-md-4 pe-lg-5">
          <h1 className="d-none d-md-block pb-0 pb-md-4">Media</h1>

          <p className="justify py-4 py-md-0">
            Smart Vision for Consultancy and Development was incorporated in
            2011 in Somalia. We focus majorly on monitoring, evaluation,
            research and learning (MERL), institutional capacity development
            services, private sector development, quality infrastructure and
            trade facilitation, mainly in Somalia and across the greater Horn of
            Africa region.
          </p>
        </div>
        <div className="col-md-6 col-12 ps-md-4 ps-lg-5">
          <div className="">
            <h1 className="d-md-none d-block aboutTitleMobile mt-4">Media</h1>
            <img
              className="img-fluid small-device"
              src={mediaNew2}
              alt="aboutSectionRightImg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaBanner;
