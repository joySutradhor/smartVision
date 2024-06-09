import React from "react";
import ismail from "../../../assets/images/ismail.png";
import david from "../../../assets/images/David.png";
import admmed from "../../../assets/images/ahmmed.png";
import yousuf from "../../../assets/images/yousuf.png";
import redCurcle from "../../../assets/images/redCurcle.png";
import marla from "../../../assets/images/marla.png";
import khalif from "../../../assets/images/khalif.jpeg";
import ahmedMM from "../../../assets/images/ahmedM.png";
import yousufAli from "../../../assets/images/yousufAli.png";
import willy from "../../../assets/images/williy.png";
import newOne from "../../../assets/images/newOne.png";
import newTwo from "../../../assets/images/newTwo.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import form react slick slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

import sliderBtnLeft from "../../../assets/images/sliderBtnLeft.png";
import sliderBtnRight from "../../../assets/images/sliderBtnRight.png";

import {
  faFacebook,
  faLinkedin,
  faTwitch,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "./OurManagement.css";
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";

const OurManagement = () => {
  // slider sttings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    speed: 1000,
    cssEase: "linear",
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div className="sectionSpace">
      <div className="text-center">
        <h1 className="">Our Management Team</h1>
        <p className="chooseUsSubHeading">
          Smart Vision for Consultancy and Development was incorporated in 2011
          in Somalia.
        </p>
      </div>
      {/* large device */}
      <div className="pt-1 d-none d-md-block  mt-3">
        <div className="row mt-5 pt-5">
          {/* card 1 start */}
          <div className="col-12 col-md-6  col-xl-3 space ">
            <div className="card text-center">
              <div className="team ">
                <img className="red-curcle" src={redCurcle} alt="" />
              </div>
              <img className="team-member" src={ismail} alt="" />

              <div className="team-des">
                <h3 className="mt-3">Ismail Aden Haibe</h3>
                <span className="fw-light fs-4">Cheif Executive Officer</span>
                <div className="mt-2 mb-3">
                  <FontAwesomeIcon
                    className="team-social"
                    icon={faFacebook}
                  ></FontAwesomeIcon>
                  <FontAwesomeIcon
                    className="team-social"
                    icon={faLinkedin}
                  ></FontAwesomeIcon>
                  <FontAwesomeIcon
                    className="team-social"
                    icon={faXTwitter}
                  ></FontAwesomeIcon>
                </div>
              </div>
            </div>
          </div>
          {/* card   2 start */}
          <div className="col-12 col-md-6  col-xl-3 space ">
            <div className="card  text-center">
              <div className="team ">
                <img className="red-curcle" src={redCurcle} alt="" />
              </div>
              <img className="team-member" src={david} alt="" />

              <div className="team-des">
                <h3 className="mt-3">David Ondijo (PhD)</h3>
                <span className="fw-light fs-4">Deputy Executive Director</span>
                <div className="mt-2 mb-3">
                  <FontAwesomeIcon
                    className="team-social"
                    icon={faFacebook}
                  ></FontAwesomeIcon>
                  <FontAwesomeIcon
                    className="team-social"
                    icon={faLinkedin}
                  ></FontAwesomeIcon>
                  <FontAwesomeIcon
                    className="team-social"
                    icon={faXTwitter}
                  ></FontAwesomeIcon>
                </div>
              </div>
            </div>
          </div>
          {/* card 3 start */}
          <div className="col-12 col-md-6  col-xl-3 space ">
            <div className="card text-center">
              <div className="team ">
                <img className="red-curcle" src={redCurcle} alt="" />
              </div>
              <img className="team-member" src={admmed} alt="" />

              <div className="team-des">
                <h3 className="mt-3">Ahmed Hersi Osman</h3>
                <span className="fw-light fs-4">Director of programmes</span>
                <div className="mt-2 mb-3">
                  <FontAwesomeIcon
                    className="team-social"
                    icon={faFacebook}
                  ></FontAwesomeIcon>
                  <FontAwesomeIcon
                    className="team-social"
                    icon={faLinkedin}
                  ></FontAwesomeIcon>
                  <FontAwesomeIcon
                    className="team-social"
                    icon={faXTwitter}
                  ></FontAwesomeIcon>
                </div>
              </div>
            </div>
          </div>
          {/* card 4 start */}
          <div className="col-12 col-md-6  col-xl-3 space ">
            <div className="card  text-center">
              <div className="team ">
                <img className="red-curcle" src={redCurcle} alt="" />
              </div>
              <img className="team-member" src={yousuf} alt="" />

              <div className="team-des">
                <h3 className="mt-3">Abdirahman Hassan Yusuf</h3>
                <span className="fw-light fs-4">Senior Research Director</span>
                <div className="mt-2 mb-3">
                  <FontAwesomeIcon
                    className="team-social"
                    icon={faFacebook}
                  ></FontAwesomeIcon>
                  <FontAwesomeIcon
                    className="team-social"
                    icon={faLinkedin}
                  ></FontAwesomeIcon>
                  <FontAwesomeIcon
                    className="team-social"
                    icon={faXTwitter}
                  ></FontAwesomeIcon>
                </div>
              </div>
            </div>
          </div>

          {/*--------------- card 5 start --------------- */}
          <div className="col-12 col-md-6  col-xl-3 space  manageTopSpaceGap">
            <div className="card  text-center">
              <div className="team ">
                <img className="red-curcle" src={redCurcle} alt="" />
              </div>
              <img className="team-member" src={marla} alt="" />

              <div className="team-des">
                <h3 className="mt-3">Dr. Marla Stone (EDD)</h3>
                <span className="fw-light fs-4">Contract Manager</span>
                <div className="mt-2 mb-3">
                  <FontAwesomeIcon
                    className="team-social"
                    icon={faFacebook}
                  ></FontAwesomeIcon>
                  <FontAwesomeIcon
                    className="team-social"
                    icon={faLinkedin}
                  ></FontAwesomeIcon>
                  <FontAwesomeIcon
                    className="team-social"
                    icon={faXTwitter}
                  ></FontAwesomeIcon>
                </div>
              </div>
            </div>
          </div>

          {/*--------------- card 6 start --------------- */}
          <div className="col-12 col-md-6  col-xl-3 space manageTopSpaceGap ">
            <div className="card  text-center">
              <div className="team ">
                <img className="red-curcle" src={redCurcle} alt="" />
              </div>
              <img className="team-member" src={newOne} alt="" />

              <div className="team-des">
                <h3 className="mt-3">Abdulkadir Khalif</h3>
                <span className="fw-light fs-4">
                  South Central Representative
                </span>
                <div className="mt-2 mb-3">
                  <FontAwesomeIcon
                    className="team-social"
                    icon={faFacebook}
                  ></FontAwesomeIcon>
                  <FontAwesomeIcon
                    className="team-social"
                    icon={faLinkedin}
                  ></FontAwesomeIcon>
                  <FontAwesomeIcon
                    className="team-social"
                    icon={faXTwitter}
                  ></FontAwesomeIcon>
                </div>
              </div>
            </div>
          </div>

          {/*--------------- card 7 start --------------- */}
          <div className="col-12 col-md-6  col-xl-3 space manageTopSpaceGap">
            <div className="card  text-center">
              <div className="team ">
                <img className="red-curcle" src={redCurcle} alt="" />
              </div>
              <img className="team-member" src={yousufAli} alt="" />

              <div className="team-des">
                <h3 className="mt-3">Ahmed Yusuf Ali</h3>
                <span className="fw-light fs-4">Ethiopia Representative</span>
                <div className="mt-2 mb-3">
                  <FontAwesomeIcon
                    className="team-social"
                    icon={faFacebook}
                  ></FontAwesomeIcon>
                  <FontAwesomeIcon
                    className="team-social"
                    icon={faLinkedin}
                  ></FontAwesomeIcon>
                  <FontAwesomeIcon
                    className="team-social"
                    icon={faXTwitter}
                  ></FontAwesomeIcon>
                </div>
              </div>
            </div>
          </div>

          {/*--------------- card 8 start --------------- */}
          <div className="col-12 col-md-6  col-xl-3 space manageTopSpaceGap">
            <div className="card  text-center">
              <div className="team ">
                <img className="red-curcle" src={redCurcle} alt="" />
              </div>
              <img className="team-member" src={willy} alt="" />

              <div className="team-des">
                <h3 className="mt-3">Prof. Willy Muturi</h3>
                <span className="fw-light fs-4">Socio-Economic Expert</span>
                <div className="mt-2 mb-3">
                  <FontAwesomeIcon
                    className="team-social"
                    icon={faFacebook}
                  ></FontAwesomeIcon>
                  <FontAwesomeIcon
                    className="team-social"
                    icon={faLinkedin}
                  ></FontAwesomeIcon>
                  <FontAwesomeIcon
                    className="team-social"
                    icon={faXTwitter}
                  ></FontAwesomeIcon>
                </div>
              </div>
            </div>
          </div>

          {/*--------------- card 9 start --------------- */}
          <div className="col-12 col-md-6  col-xl-3 space manageTopSpaceGap">
            <div className="card  text-center">
              <div className="team ">
                <img className="red-curcle" src={redCurcle} alt="" />
              </div>
              <img className="team-member" src={ahmedMM} alt="" />

              <div className="team-des">
                <h3 className="mt-3">Ahmed M. Mohamed</h3>
                <span className="fw-light fs-4">
                  Strategic Planning And Organizational Development Professional
                </span>
                <div className="mt-2 mb-3">
                  <FontAwesomeIcon
                    className="team-social"
                    icon={faFacebook}
                  ></FontAwesomeIcon>
                  <FontAwesomeIcon
                    className="team-social"
                    icon={faLinkedin}
                  ></FontAwesomeIcon>
                  <FontAwesomeIcon
                    className="team-social"
                    icon={faXTwitter}
                  ></FontAwesomeIcon>
                </div>
              </div>
            </div>
          </div>

          {/*--------------- card 10 start --------------- */}
          <div className="col-12 col-md-6  col-xl-3 space manageTopSpaceGap">
            <div className="card  text-center">
              <div className="team ">
                <img className="red-curcle" src={redCurcle} alt="" />
              </div>
              <img className="team-member" src={newTwo} alt="" />

              <div className="team-des">
                <h3 className="mt-3">Godfrey Bwanika</h3>
                <span className="fw-light fs-4">
                  Institutional And Programme Development Consultant
                </span>
                <div className="mt-2 mb-3">
                  <FontAwesomeIcon
                    className="team-social"
                    icon={faFacebook}
                  ></FontAwesomeIcon>
                  <FontAwesomeIcon
                    className="team-social"
                    icon={faLinkedin}
                  ></FontAwesomeIcon>
                  <FontAwesomeIcon
                    className="team-social"
                    icon={faXTwitter}
                  ></FontAwesomeIcon>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* slider only for mobile */}
      {/* slider */}
      <div className="d-md-none slider-container mx-3 mt-md-5 pt-md-5">
        <Slider {...settings}>
          {/* slider item one */}
          <div className="slider-parents">
            <div className="slider-card">
              <div className="main-box">
                <div className="box1">
                  <img className="img2" src={redCurcle} alt="" />
                </div>
                <div className="box2">
                  <img className="img1" src={ismail} alt="" />
                </div>
              </div>
              <div className="text-center text-div">
                <h6 className="slider-team-title ">Ismail Aden Haibea</h6>
                <p className="slider-team-des">Cheif Executive Officer</p>
                <div className="">
                  <FontAwesomeIcon
                    className="team-social"
                    icon={faFacebook}
                  ></FontAwesomeIcon>
                  <FontAwesomeIcon
                    className="team-social"
                    icon={faLinkedin}
                  ></FontAwesomeIcon>
                  <FontAwesomeIcon
                    className="team-social"
                    icon={faXTwitter}
                  ></FontAwesomeIcon>
                </div>
              </div>
            </div>
          </div>

          {/* slider item two */}
          <div className="slider-parents">
            <div className="slider-card">
              <div className="main-box">
                <div className="box1">
                  <img className="img2" src={redCurcle} alt="" />
                </div>
                <div className="box2">
                  <img className="img1" src={david} alt="" />
                </div>
              </div>
              <div className="text-center text-div">
                <h6 className="slider-team-title ">David Ondijo (PhD)</h6>
                <p className="slider-team-des">Deputy Executive Director</p>
                <div className="">
                  <FontAwesomeIcon
                    className="team-social"
                    icon={faFacebook}
                  ></FontAwesomeIcon>
                  <FontAwesomeIcon
                    className="team-social"
                    icon={faLinkedin}
                  ></FontAwesomeIcon>
                  <FontAwesomeIcon
                    className="team-social"
                    icon={faXTwitter}
                  ></FontAwesomeIcon>
                </div>
              </div>
            </div>
          </div>

          {/* slider item three */}
          <div className="slider-parents">
            <div className="slider-card">
              <div className="main-box">
                <div className="box1">
                  <img className="img2" src={redCurcle} alt="" />
                </div>
                <div className="box2">
                  <img className="img1" src={admmed} alt="" />
                </div>
              </div>
              <div className="text-center text-div">
                <h6 className="slider-team-title ">Ahmed Hersi Osman</h6>
                <p className="slider-team-des">Director of programmes</p>
                <div className="">
                  <FontAwesomeIcon
                    className="team-social"
                    icon={faFacebook}
                  ></FontAwesomeIcon>
                  <FontAwesomeIcon
                    className="team-social"
                    icon={faLinkedin}
                  ></FontAwesomeIcon>
                  <FontAwesomeIcon
                    className="team-social"
                    icon={faXTwitter}
                  ></FontAwesomeIcon>
                </div>
              </div>
            </div>
          </div>

          {/* slider item four */}
          <div className="slider-parents">
            <div className="slider-card">
              <div className="main-box">
                <div className="box1">
                  <img className="img2" src={redCurcle} alt="" />
                </div>
                <div className="box2">
                  <img className="img1" src={yousuf} alt="" />
                </div>
              </div>
              <div className="text-center text-div">
                <h6 className="slider-team-title ">Abdirahman Hassan Yusuf</h6>
                <p className="slider-team-des">Senior Research Director</p>
                <div className="">
                  <FontAwesomeIcon
                    className="team-social"
                    icon={faFacebook}
                  ></FontAwesomeIcon>
                  <FontAwesomeIcon
                    className="team-social"
                    icon={faLinkedin}
                  ></FontAwesomeIcon>
                  <FontAwesomeIcon
                    className="team-social"
                    icon={faXTwitter}
                  ></FontAwesomeIcon>
                </div>
              </div>
            </div>
          </div>

          {/* slider item five */}
          <div className="slider-parents">
            <div className="slider-card">
              <div className="main-box">
                <div className="box1">
                  <img className="img2" src={redCurcle} alt="" />
                </div>
                <div className="box2">
                  <img className="img1" src={marla} alt="" />
                </div>
              </div>
              <div className="text-center text-div">
                <h6 className="slider-team-title ">Dr. Marla Stone (EDD)</h6>
                <p className="slider-team-des">Contract Manager</p>
                <div className="">
                  <FontAwesomeIcon
                    className="team-social"
                    icon={faFacebook}
                  ></FontAwesomeIcon>
                  <FontAwesomeIcon
                    className="team-social"
                    icon={faLinkedin}
                  ></FontAwesomeIcon>
                  <FontAwesomeIcon
                    className="team-social"
                    icon={faXTwitter}
                  ></FontAwesomeIcon>
                </div>
              </div>
            </div>
          </div>

          {/* slider item six */}
          <div className="slider-parents">
            <div className="slider-card">
              <div className="main-box">
                <div className="box1">
                  <img className="img2" src={redCurcle} alt="" />
                </div>
                <div className="box2">
                  <img className="img1" src={newOne} alt="" />
                </div>
              </div>
              <div className="text-center text-div">
                <h6 className="slider-team-title ">Abdulkadir Khalif</h6>
                <p className="slider-team-des">South Central Representative</p>
                <div className="">
                  <FontAwesomeIcon
                    className="team-social"
                    icon={faFacebook}
                  ></FontAwesomeIcon>
                  <FontAwesomeIcon
                    className="team-social"
                    icon={faLinkedin}
                  ></FontAwesomeIcon>
                  <FontAwesomeIcon
                    className="team-social"
                    icon={faXTwitter}
                  ></FontAwesomeIcon>
                </div>
              </div>
            </div>
          </div>

          {/* slider item seven */}
          <div className="slider-parents">
            <div className="slider-card">
              <div className="main-box">
                <div className="box1">
                  <img className="img2" src={redCurcle} alt="" />
                </div>
                <div className="box2">
                  <img className="img1" src={yousufAli} alt="" />
                </div>
              </div>
              <div className="text-center text-div">
                <h6 className="slider-team-title ">Ahmed Yusuf Ali</h6>
                <p className="slider-team-des">Ethiopia Representative</p>
                <div className="">
                  <FontAwesomeIcon
                    className="team-social"
                    icon={faFacebook}
                  ></FontAwesomeIcon>
                  <FontAwesomeIcon
                    className="team-social"
                    icon={faLinkedin}
                  ></FontAwesomeIcon>
                  <FontAwesomeIcon
                    className="team-social"
                    icon={faXTwitter}
                  ></FontAwesomeIcon>
                </div>
              </div>
            </div>
          </div>

          {/* slider item eight */}
          <div className="slider-parents">
            <div className="slider-card">
              <div className="main-box">
                <div className="box1">
                  <img className="img2" src={redCurcle} alt="" />
                </div>
                <div className="box2">
                  <img className="img1" src={willy} alt="" />
                </div>
              </div>
              <div className="text-center text-div">
                <h6 className="slider-team-title ">Prof. Willy Muturi</h6>
                <p className="slider-team-des">Socio-Economic Expert</p>
                <div className="">
                  <FontAwesomeIcon
                    className="team-social"
                    icon={faFacebook}
                  ></FontAwesomeIcon>
                  <FontAwesomeIcon
                    className="team-social"
                    icon={faLinkedin}
                  ></FontAwesomeIcon>
                  <FontAwesomeIcon
                    className="team-social"
                    icon={faXTwitter}
                  ></FontAwesomeIcon>
                </div>
              </div>
            </div>
          </div>

          {/* slider item nine */}
          <div className="slider-parents">
            <div className="slider-card">
              <div className="main-box">
                <div className="box1">
                  <img className="img2" src={redCurcle} alt="" />
                </div>
                <div className="box2">
                  <img className="img1" src={ahmedMM} alt="" />
                </div>
              </div>
              <div className="text-center text-div">
                <h6 className="slider-team-title ">Ahmed M. Mohamed</h6>
                <p className="slider-team-des">
                  {" "}
                  Strategic Planning And Organizational Development Professional
                </p>
                <div className="">
                  <FontAwesomeIcon
                    className="team-social"
                    icon={faFacebook}
                  ></FontAwesomeIcon>
                  <FontAwesomeIcon
                    className="team-social"
                    icon={faLinkedin}
                  ></FontAwesomeIcon>
                  <FontAwesomeIcon
                    className="team-social"
                    icon={faXTwitter}
                  ></FontAwesomeIcon>
                </div>
              </div>
            </div>
          </div>

          {/* slider item ten */}
          <div className="slider-parents">
            <div className="slider-card">
              <div className="main-box">
                <div className="box1">
                  <img className="img2" src={redCurcle} alt="" />
                </div>
                <div className="box2">
                  <img className="img1" src={newTwo} alt="" />
                </div>
              </div>
              <div className="text-center text-div">
                <h6 className="slider-team-title ">Godfrey Bwanika</h6>
                <p className="slider-team-des">
                  {" "}
                  Institutional And Programme Development Consultant
                </p>
                <div className="">
                  <FontAwesomeIcon
                    className="team-social"
                    icon={faFacebook}
                  ></FontAwesomeIcon>
                  <FontAwesomeIcon
                    className="team-social"
                    icon={faLinkedin}
                  ></FontAwesomeIcon>
                  <FontAwesomeIcon
                    className="team-social"
                    icon={faXTwitter}
                  ></FontAwesomeIcon>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

const CustomPrevArrow = (props) => (
  <div
  {...props}
  className=""
  aria-label="Previous"
  type="button"
>
  <img className="arrow-button-management" src={sliderBtnLeft} alt="" />
</div>
);

const CustomNextArrow = (props) => (
 
  <div
  {...props}
  className=""
  aria-label="Previous"
  type="button"
>
  <img className="arrow-button-management2" src={sliderBtnRight} alt="" />
</div>

);

export default OurManagement;
