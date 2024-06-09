import React from "react";
import "./Team.css";
import ismail from "../../../assets/images/ismail.png";
import david from "../../../assets/images/David.png";
import ahmed from "../../../assets/images/ahmmed.png";
import admmed from "../../../assets/images/ahmmed.png";
import yousuf from "../../../assets/images/yousuf.png";
import redCurcle from "../../../assets/images/redCurcle.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faTwitch,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sliderBtnLeft from "../../../assets/images/sliderBtnLeft.png";
import sliderBtnRight from "../../../assets/images/sliderBtnRight.png";

const Team = () => {
  const teams = [
    {
      id: 1,
      name: "Ahmed Hersi Osman",
      img: ismail,
      designation: "Cheif Executive Officer",
      facebook: "https://www.facebook.com/",
      linkdin: "https://www.linkedin.com/",
      facebook: "https://www.facebook.com/",
      twitter: "https://twitter.com/",
    },

    {
      id: 2,
      name: "David Ondijo (PhD)",
      img: david,
      designation: "Deputy Executive Director",
      facebook: "https://www.facebook.com/",
      linkdin: "https://www.linkedin.com/",
      facebook: "https://www.facebook.com/",
      twitter: "https://twitter.com/",
    },
    {
      id: 3,
      name: "Ahmed Hersi Osman",
      img: ahmed,
      designation: "Director of programmes",
      facebook: "https://www.facebook.com/",
      linkdin: "https://www.linkedin.com/",
      facebook: "https://www.facebook.com/",
      twitter: "https://twitter.com/",
    },
    {
      id: 4,
      name: "Abdirahman Hassan Yusuf",
      img: yousuf,
      designation: "Senior Research Director",
      facebook: "https://www.facebook.com/",
      linkdin: "https://www.linkedin.com/",
      facebook: "https://www.facebook.com/",
      twitter: "https://twitter.com/",
    },
  ];

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    speed: 700,
    cssEase: "linear",
    prevArrow: <CustomMobilePrevArrowOurTeam />,
    nextArrow: <CustomMobileNextArrowOurTeam />,
  };

  return (
    <div className="sectionGap our-team">
      <div className="">
        <div className="col-12 col-lg-6 m-auto text-center">
          <h1 className="pb-0 pb-md-3">Our Team</h1>
          <p className="text-center">
            Smart Vision for Consultancy and Development was incorporated in
            2011 in Somalia.
          </p>
        </div>

        {/* large device */}
        <div className="pt-3 d-none d-md-block  mt-5">
          <div className="row mt-5 pt-5">
            {teams.map((team) => (
              <div className="col-12 col-md-6  col-xl-3 space ">
                <div className="card text-center">
                  <div className="team ">
                    <img className="red-curcle" src={redCurcle} alt="" />
                  </div>
                  <img className="team-member" src={team.img} alt="" />

                  <div className="team-des">
                    <h3 className="mt-3">{team.name}</h3>
                    <span className="fw-light fs-4">{team.designation}</span>
                    <div className="mt-2 mb-3">
                      <a href={team.facebook} target="_blank">
                        {" "}
                        <FontAwesomeIcon
                          className="team-social"
                          icon={faFacebook}
                        ></FontAwesomeIcon>
                      </a>
                      <a href={team.linkdin} target="_blank">
                        <FontAwesomeIcon
                          className="team-social"
                          icon={faLinkedin}
                        ></FontAwesomeIcon>
                      </a>
                      <a href={team.twitter}>
                        <FontAwesomeIcon
                          className="team-social"
                          icon={faTwitter}
                        ></FontAwesomeIcon>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* slider only for mobile */}
        <div className="d-md-none slider-container mx-3 mt-md-5 pt-md-5">
          <Slider {...settings}>
            {teams.map((team) => (
              <div className="slider-parents">
                <div className="slider-card">
                  <div className="main-box">
                    <div className="box1">
                      <img className="img2" src={redCurcle} alt="" />
                    </div>
                    <div className="box2">
                      <img className="img1" src={team.img} alt="" />
                    </div>
                  </div>
                  <div className="text-center text-div">
                    <h6 className="slider-team-title ">{team.name}</h6>
                    <p className="slider-team-des">{team.designation}</p>
                    <div className="">
                      <a href={team.facebook} target="_blank">
                        {" "}
                        <FontAwesomeIcon
                          className="team-social"
                          icon={faFacebook}
                        ></FontAwesomeIcon>
                      </a>
                      <a href={team.linkdin} target="_blank">
                        <FontAwesomeIcon
                          className="team-social"
                          icon={faLinkedin}
                        ></FontAwesomeIcon>
                      </a>
                      <a href={team.twitter}>
                        <FontAwesomeIcon
                          className="team-social"
                          icon={faTwitter}
                        ></FontAwesomeIcon>
                      </a>
                    </div>
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

// slider custom button here

const CustomMobilePrevArrowOurTeam = (props) => (

  <div
    {...props}
    className=""
    aria-label="Previous"
    type="button"
  >
    <img className="arrow-button-ourTeam" src={sliderBtnRight} alt="" />
  </div>
);

const CustomMobileNextArrowOurTeam = (props) => (
  <div
    {...props}
    className=""
    aria-label="Previous"
    type="button"
  >
    <img className="arrow-button-ourTeam2" src={sliderBtnLeft} alt="" />
  </div>
);

export default Team;
