import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

// images here

import aboutUsSliderImgOne from "../../../assets/images/aboutUsSliderImgOne.png";
import aboutUsSliderImgTwo from "../../../assets/images/aboutUsSliderImgTwo.png";
import aboutUsSliderImgThree from "../../../assets/images/aboutUsSliderImgThree.png";

import sliderBtnLeft from "../../../assets/images/sliderBtnLeft.png";
import sliderBtnRight from "../../../assets/images/sliderBtnRight.png";


import "./AboutUsSlider.css";

const AboutUsSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: true,
    speed: 1000,
    cssEase: "linear",
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  // settings for mobile devices
  const settingsMobile = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    speed: 700,
    cssEase: "linear",
    prevArrow: <CustomMobilePrevArrow />,
    nextArrow: <CustomMobileNextArrow />,
  };

  return (
    <div>
      {/* =================== large devices slider ================== */}
      <div className="slider-container aboutUsSliderParent mt-3 bootomSpaceAboutUsSlider d-none d-lg-block ">
        <Slider {...settings}>
          <div className=" ">
            <img
              className=" ourWorkImgOne  "
              src={aboutUsSliderImgOne}
              alt="aboutUsSliderImgOne"
            />
          </div>

          <div className=" ">
            <img
              className=" ourWorkImgOne"
              src={aboutUsSliderImgTwo}
              alt="aboutUsSliderImgTwo"
            />
          </div>

          <div className=" ">
            <img
              className="ourWorkImgOne "
              src={aboutUsSliderImgThree}
              alt="aboutUsSliderImgThree"
            />
          </div>
        </Slider>
      </div>

      {/* ================ mobile devices slider ================ */}
      <div className="slider-container aboutUsSliderParent my-5 d-block d-lg-none ">
        <Slider {...settingsMobile}>
          <div className=" ">
            <img
              className=" ourWorkImgOne  "
              src={aboutUsSliderImgOne}
              alt="aboutUsSliderImgOne"
            />
          </div>

          <div className=" ">
            <img
              className=" ourWorkImgOne"
              src={aboutUsSliderImgTwo}
              alt="aboutUsSliderImgTwo"
            />
          </div>

          <div className=" ">
            <img
              className="ourWorkImgOne "
              src={aboutUsSliderImgThree}
              alt="aboutUsSliderImgThree"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

// for large devices
const CustomPrevArrow = (props) => (
  <div
    {...props}
    className=""
    aria-label="Previous"
    type="button"
  >
    <img className="arrow-button-aboutSlider-Large" src={sliderBtnLeft} alt="" />
  </div>
);

const CustomNextArrow = (props) => (
  <div
    {...props}
    className=""
    aria-label="Previous"
    type="button"
  >
    <img className="arrow-button-aboutSlider-Large2" src={sliderBtnRight} alt="" />
  </div>
);

// for mobile deivices
const CustomMobilePrevArrow = (props) => (
  <div
    {...props}
    className=""
    aria-label="Previous"
    type="button"
  >
    <img className="arrow-button-aboutSlider-mobile" src={sliderBtnRight} alt="" />
  </div>
);

const CustomMobileNextArrow = (props) => (
  <div
    {...props}
    className=""
    aria-label="Previous"
    type="button"
  >
    <img className="arrow-button-aboutSlider-mobile2" src={sliderBtnLeft} alt="" />
  </div>
);

export default AboutUsSlider;
