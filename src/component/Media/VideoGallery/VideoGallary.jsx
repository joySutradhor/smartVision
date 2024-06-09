import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";

import offerLargeImgSlider from "../../../assets/images/offerLargeImgSlider.png";
import offermobileImgSlider from "../../../assets/images/offermobileImgSlider.png";
import sliderBtnLeft from "../../../assets/images/sliderBtnLeft.png";
import sliderBtnRight from "../../../assets/images/sliderBtnRight.png";
import "./VideoGallery.css";


const VideoGallary = () => {
  // settings for mobile devices
  const settingsLargeGallary = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    speed: 500,
    cssEase: "linear",
    prevArrow: <CustomLargePrevArrowGallary />,
    nextArrow: <CustomLargeNextArrowGallary />,
  };

  // settings for mobile devices
  const settingsMobileGallary = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    speed: 700,
    cssEase: "linear",
    prevArrow: <CustomMobilePrevArrowGallary />,
    nextArrow: <CustomMobileNextArrowGallary />,
  };

  return (
    <div className="sectionSpace">
      <h1 className="text-center">Video Gallary</h1>

      {/* ================ large devices slider ================ */}

      <div className="slider-container   d-md-block d-none  ">
        <Slider {...settingsLargeGallary}>
          <div className="col-12 ">
            {/* <img
                className=" gallarysliderImg  "
                src={offerLargeImgSlider}
                alt="offerLargeImgSlider"
              /> */}
            <iframe className="gallarysliderImg" src="https://www.youtube.com/embed/9H8WUjLwFKM?autoplay=1&mute=1&si=3v8fqIM-P21f-fVE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


          </div>
          <div className="col-12 ">
            {/* <img
                className=" gallarysliderImg  "
                src={offerLargeImgSlider}
                alt="offerLargeImgSlider"
              /> */}
            <iframe className=" gallarysliderImg  " src="https://www.youtube.com/embed/9H8WUjLwFKM?si=3v8fqIM-P21f-fVE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
          <div className="col-12 ">
            {/* <img
                className=" gallarysliderImg  "
                src={offerLargeImgSlider}
                alt="offerLargeImgSlider"
              /> */}
            <iframe className=" gallarysliderImg  " src="https://www.youtube.com/embed/9H8WUjLwFKM?si=3v8fqIM-P21f-fVE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>

        </Slider>
      </div>

      {/* ================ mobile devices slider ================ */}
      <div className="slider-container   d-md-none d-block  ">
        <Slider {...settingsMobileGallary} className="gallaryParentSlider">

          <div className="col-12 ">

            <iframe className="gallarysliderImg" src="https://www.youtube.com/embed/9H8WUjLwFKM?autoplay=1&mute=1&si=3v8fqIM-P21f-fVE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

          </div>

          <div className="col-12 ">

            <iframe className="gallarysliderImg" src="https://www.youtube.com/embed/9H8WUjLwFKM?autoplay=1&mute=1&si=3v8fqIM-P21f-fVE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

          </div>

          <div className="col-12 ">

            <iframe className="gallarysliderImg" src="https://www.youtube.com/embed/9H8WUjLwFKM?autoplay=1&mute=1&si=3v8fqIM-P21f-fVE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

          </div>
        </Slider>
      </div>
    </div>
  );
};

// large devices custom button
const CustomLargePrevArrowGallary = (props) => (
  <div
    {...props}
    className=""
    aria-label="Previous"
    type="button"
  >
    <img className="arrow-button-large-gallary" src={sliderBtnLeft} alt="" />
  </div>
);

const CustomLargeNextArrowGallary = (props) => (

  <div
    {...props}
    className=""
    aria-label="Previous"
    type="button"
  >
    <img className="arrow-button-large-gallary2" src={sliderBtnRight} alt="" />
  </div>

);

// mobile devices custom button
const CustomMobilePrevArrowGallary = (props) => (
  <div
    {...props}
    className=""
    aria-label="Previous"
    type="button"
  >
    <img className="arrow-button-mobile-gallary" src={sliderBtnLeft} alt="" />
  </div>
);

const CustomMobileNextArrowGallary = (props) => (
  <div
    {...props}
    className=""
    aria-label="Previous"
    type="button"
  >
    <img className="arrow-button-mobile-gallary2" src={sliderBtnRight} alt="" />
  </div>
);

export default VideoGallary;
