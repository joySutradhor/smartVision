// aboutSectionRightImg
// import rightArrow from "../../../assets/images/rightarrow.png";

import aboutSectionRightImg from "../../assets/images/aboutSectionRightImg.jpeg";
import "./AboutPageSection.css";

const AboutUsPageSection = () => {
  return (
    <div>
      <div className="mt-5 sectionParent d-md-flex align-items-center justify-content-between ">
        <div className="col-md-6 col-12 textSpace pe-md-4 pe-lg-5 pe-xl-1">
          <h1 className="d-none d-md-block pb-0 pb-md-4">About Us</h1>
          <p className="justify heroSubText">
            Smart Vision for Consultancy and Development was incorporated in
            2011 in Somalia. We focus majorly on monitoring, evaluation,
            research and learning (MERL), institutional capacity development
            services, private sector development, quality infrastructure and
            trade facilitation, mainly in Somalia and across the greater Horn of
            Africa region.
          </p>
        </div>
        <div className="col-md-6 col-12 ps-md-4 ps-lg-5">
          <div className="ps-xl-5">
            <h1 className="d-md-none d-block aboutTitleMobile pb-0 pb-md-4">
              About Us
            </h1>
            <img
              className="aboutHeroImg small-device my-1 my-md-0"
              src={aboutSectionRightImg}
              alt="aboutSectionRightImg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPageSection;
