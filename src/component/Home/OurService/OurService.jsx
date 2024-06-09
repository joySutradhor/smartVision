import React from "react";
import "./OurService.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import verctor1 from "../../../assets/images/Vector1.png";
import verctor2 from "../../../assets/images/vector2.png";
import verctor3 from "../../../assets/images/Vector3.png";
import verctor4 from "../../../assets/images/Vector4.png";
import verctor5 from "../../../assets/images/Vector5.png";
import verctor6 from "../../../assets/images/Vector6.png";
import verctor7 from "../../../assets/images/Vector7.png";
import verctor8 from "../../../assets/images/Vector8.png";
import verctor9 from "../../../assets/images/Vector9.png";
import sliderBtnLeft from "../../../assets/images/sliderBtnLeft.png";
import sliderBtnRight from "../../../assets/images/sliderBtnRight.png";


import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

const OurService = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    speed: 700,
    cssEase: "linear",
    prevArrow: <CustomMobilePrevArrowOurService />,
    nextArrow: <CustomMobileNextArrowOurService />,
  };

  // large devices settings
  var settingsLargeOurService = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: true,
    speed: 700,
    cssEase: "linear",
    prevArrow: <CustomLargePrevArrowOurService />,
    nextArrow: <CustomLargeNextArrowOurService />,
  };

  const services = [
    {
      id: 1,
      img: verctor1,
      name: "Third Party Monitoring",
    },
    {
      id: 2,
      img: verctor2,
      name: "Midterm and endline Evaluations",
    },
    {
      id: 3,
      img: verctor3,
      name: "Baseline surveys",
    },
    {
      id: 4,
      img: verctor4,
      name: "Environmental and social impact Assessment",
    },
    {
      id: 5,
      img: verctor5,
      name: "Special stadies and research",
    },
    {
      id: 6,
      img: verctor6,
      name: "Setting up MEAL systems and training",
    },
    {
      id: 7,
      img: verctor7,
      name: "Quality infrastructure and trade facilitation ( Training and capacity building)",
    },
    {
      id: 8,
      img: verctor8,
      name: "Instituonal capacity development",
    },
    {
      id: 9,
      img: verctor9,
      name: "Bussiness Development Services (BDS)",
    },
  ];

  return (
    <div className="mx-3 mx-md-0 sectionGap">
      <div className="">
        <div className="col-12 col-md-9 m-auto  text-md-center">
          <h1 className="pb-0 pb-md-3">Our Services</h1>
          <p className="">
            Smart Vision for Consultancy and Development was incorporated in
            2011 in Somalia. We focus majorly on monitoring, evaluation,
            research and learning (MERL).
          </p>
        </div>

        {/* slider  for mobile */}
        <div className="slider-container d-block d-lg-none">
          <Slider className="slider" {...settings}>
            {services.map((service) => (
              <div
                key={service.id}
                className="slider-item text-center px-2 px-md-5 text-black"
              >
                <div className="slider-inner px-1">
                  <div className="d-flex justify-content-center ">
                    <img className="our-service-img" src={service.img} alt="vector" />
                  </div>
                  <div className="our-service-card-heading">
                    <h5 className="service-card-title">{service.name}</h5>
                    <Link to="/services" className="text-black">
                      See More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* ========== large devices slider ========= */}
        <div className="slider-container d-none d-lg-block">
          <Slider className="slider " {...settingsLargeOurService}>
            {services.map((service) => (
              <div
                key={service.id}
                className=" our-service-parent-btn slider-item text-center px-2 px-lg-2 px-xxl-5 card-left-right-space text-black"
              >
                <div className="slider-inner px-1 ">
                  <div className="d-flex justify-content-center">
                    <img
                      className="our-service-img"
                      src={service.img}
                      alt="vector"
                    />
                  </div>
                  <div className="our-service-card-heading">
                    <h5 className="service-card-title">{service.name}</h5>
                    <Link
                      to="/services"
                      className="text-black see-more-service"
                    >
                      See More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

const CustomMobilePrevArrowOurService = (props) => (
  <div
    {...props}
    className=""
    aria-label="Previous"
    type="button"
  >

    <img className="sliderBtnHomeOurServiceMobile" src={sliderBtnLeft} alt="" />
  </div>
);

const CustomMobileNextArrowOurService = (props) => (
  <div
    {...props}
    className=""
    aria-label="Previous"
    type="button"
  >

    <img className="sliderBtnHomeOurServiceMobile2" src={sliderBtnRight} alt="" />
  </div>
);

// larger devices custom button slider
const CustomLargePrevArrowOurService = (props) => (
  <div
    {...props}
    className=""
    aria-label="Previous"
    type="button"
  >

    <img className="sliderBtnHomeOurServiceLarge" src={sliderBtnLeft} alt="" />
  </div>
);

const CustomLargeNextArrowOurService = (props) => (
  <div
    {...props}
    className=""
    aria-label="Previous"
    type="button"
  >

    <img className="sliderBtnHomeOurServiceLarge2" src={sliderBtnRight} alt="" />
  </div>
);

export default OurService;
