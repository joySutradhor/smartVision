import "./WhyChooseUs.css";
import { FaRegBuilding } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";
import { GoProjectSymlink } from "react-icons/go";
import { FaRegHandshake } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
import { FaChalkboardUser } from "react-icons/fa6";
import { FaMobileAlt } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";

import sliderBtnLeft from "../../../assets/images/sliderBtnLeft.png";
import sliderBtnRight from "../../../assets/images/sliderBtnRight.png";

import {
  faFacebook,
  faLinkedin,
  faTwitch,
} from "@fortawesome/free-brands-svg-icons";

import "../../Home/Team/Team.css";


const WhyChooseUs = () => {
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
        <h1 className="pb-0 pb-md-4">Why Choose Us</h1>
        <p className="chooseUsSubHeading">
          We provide specialized support services and expertise aimed at
          adding value and filling gaps in existing capacity. Our main areas
          of expertise are outlined below
        </p>
      </div>

      {/* =================== large devices cards and hidden it from mobile devices ================ */}
      <div className="d-none d-md-block ">
        <div className="row  justify-content-between chooseUsParentTop ">
          {/* card 1 start */}
          <div className="col-12 col-md-2  cardWidth ">
            <div className="card  text-center">
              <div className="d-flex justify-content-center align-items-center  cardParentIcon ">
                <div className="cardTopIcon d-flex justify-content-center align-items-center">
                  <FaRegBuilding className="firstIcon"></FaRegBuilding>
                </div>
              </div>

              <div className="text-center">
                <h3 className="chooseUsInnerCardHeading">6 Offices</h3>
                <p className="chooseUsInnerCardPara1">
                  Locations in Somalia, Somaliland and Kenya
                </p>
              </div>
            </div>
          </div>

          {/* ===================== card two shart here ========================== */}
          <div className="col-12 col-md-2  cardWidth ">
            <div className="card  text-center ">
              <div className="d-flex justify-content-center align-items-center  cardParentIcon ">
                <div className="cardTopIcon d-flex justify-content-center align-items-center">
                  <FaPeopleGroup className="firstIcon"></FaPeopleGroup>
                </div>
              </div>

              <div className="text-center">
                <h3 className="chooseUsInnerCardHeading">13+ years</h3>
                <p className="chooseUsInnerCardPara2">
                  we have more than 10 years of Experience
                </p>
              </div>
            </div>
          </div>
          {/* ===================== card three shart here ========================== */}
          <div className="col-12 col-md-2  cardWidth ">
            <div className="card  text-center">
              <div className="d-flex justify-content-center align-items-center  cardParentIcon ">
                <div className="cardTopIcon d-flex justify-content-center align-items-center">
                  <GoProjectSymlink className="firstIcon"></GoProjectSymlink>
                </div>
              </div>

              <div className="text-center">
                <h3 className="chooseUsInnerCardHeading">194 Projects</h3>
                <p className="chooseUsInnerCardPara3">
                  About 184 projects successfully done!
                </p>
              </div>
            </div>
          </div>
          {/* ===================== card four shart here ========================== */}
          <div className="col-12 col-md-2  cardWidth topSpaceCard ">
            <div className="card  text-center">
              <div className="d-flex justify-content-center align-items-center  cardParentIcon ">
                <div className="cardTopIcon d-flex justify-content-center align-items-center">
                  <FaRegHandshake className="firstIcon"></FaRegHandshake>
                </div>
              </div>

              <div className="text-center">
                <h3 className="chooseUsInnerCardHeading">70+ Clients</h3>
                <p className="chooseUsInnerCardPara4">
                  Over 70 happy clients
                </p>
              </div>
            </div>
          </div>
          {/* ===================== card five shart here ========================== */}
          <div className="col-12 col-md-2  cardWidth topSpaceCard ">
            <div className="card  text-center">
              <div className="d-flex justify-content-center align-items-center  cardParentIcon ">
                <div className="cardTopIcon d-flex justify-content-center align-items-center">
                  <FaHome className="firstIcon"></FaHome>
                </div>
              </div>

              <div className="text-center">
                <h3 className="chooseUsInnerCardHeading">256k HH Surveys</h3>
                <p className="chooseUsInnerCardPara5">
                  256,000 household surveys conducted and still counting
                </p>
              </div>
            </div>
          </div>

          {/* card six start */}
          <div className="col-12 col-md-2 topSpaceCard  cardWidth d-md-block d-none d-xl-none">
            <div className="card  text-center">
              <div className="d-flex justify-content-center align-items-center  cardParentIcon ">
                <div className="cardTopIcon d-flex justify-content-center align-items-center">
                  <FaUserTie className="firstIcon"></FaUserTie>
                </div>
              </div>

              <div className="text-center">
                <h3 className="chooseUsInnerCardHeading">13.5k interviews</h3>
                <p className="chooseUsInnerCardPara6">
                  13500 Keys Informant interviews undertaken
                </p>
              </div>
            </div>
          </div>

          {/* ===================== card seven shart here ========================== */}
          <div className="col-12 col-md-2 topSpaceCard cardWidth d-md-block d-none d-xl-none">
            <div className="card  text-center ">
              <div className="d-flex justify-content-center align-items-center  cardParentIcon ">
                <div className="cardTopIcon d-flex justify-content-center align-items-center">
                  <FaChalkboardUser className="firstIcon"></FaChalkboardUser>
                </div>
              </div>

              <div className="text-center">
                <h3 className="chooseUsInnerCardHeading">
                  9.5k Facilitations
                </h3>
                <p className="chooseUsInnerCardPara7">
                  9,500 Focus Group Discussions facilitated in Somalia/Land
                </p>
              </div>
            </div>
          </div>
          {/* ===================== card eight shart here ========================== */}
          <div className="col-12 col-md-2  topSpaceCard cardWidth d-md-block d-none d-xl-none">
            <div className="card  text-center">
              <div className="d-flex justify-content-center align-items-center  cardParentIcon ">
                <div className="cardTopIcon d-flex justify-content-center align-items-center">
                  <FaMobileAlt className="firstIcon"></FaMobileAlt>
                </div>
              </div>

              <div className="text-center">
                <h3 className="chooseUsInnerCardHeading">350+ Equipment</h3>
                <p className="chooseUsInnerCardPara8">
                  350+ pieces of smart phones and tablets with updated
                  programs
                </p>
              </div>
            </div>
          </div>
          {/* ===================== card nine shart here ========================== */}
          <div className="col-12 col-md-2 topSpaceCard cardWidth d-md-block d-none d-xl-none">
            <div className="card  text-center">
              <div className="d-flex justify-content-center align-items-center  cardParentIcon ">
                <div className="cardTopIcon d-flex justify-content-center align-items-center">
                  <FaUserTie className="firstIcon"></FaUserTie>
                </div>
              </div>

              <div className="text-center">
                <h3 className="chooseUsInnerCardHeading">
                  Over 250 Professionals
                </h3>
                <p className="chooseUsInnerCardPara9">
                  Over 250 enumerators, supervisors and managers
                </p>
              </div>
            </div>
          </div>

          {/* ===================== card ten shart here ========================== */}
          <div className="col-12 col-md-2 topSpaceCard  cardWidth  d-md-block d-none d-xl-none">
            <div className="card  text-center">
              <div className="d-flex justify-content-center align-items-center  cardParentIcon ">
                <div className="cardTopIcon d-flex justify-content-center align-items-center">
                  <IoDocumentTextOutline className="firstIcon"></IoDocumentTextOutline>
                </div>
              </div>

              <div className="text-center">
                <h3 className="chooseUsInnerCardHeading">
                  Presence & Licensed
                </h3>
                <p className="chooseUsInnerCardPara10">
                  Presence and Licensed by Somalia/land
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* d-block d-md-none d-lg-none d-xl-block */}

        <div className="d-block d-md-none d-lg-none d-xl-block">
          {/* ================ second row here ========== */}
          <div className="row  justify-content-between secondRowTopSpace ">
            {/* card six start */}
            <div className="col-12 col-md-2  cardWidth ">
              <div className="card  text-center">
                <div className="d-flex justify-content-center align-items-center  cardParentIcon ">
                  <div className="cardTopIcon d-flex justify-content-center align-items-center">
                    <FaUserTie className="firstIcon"></FaUserTie>
                  </div>
                </div>

                <div className="text-center">
                  <h3 className="chooseUsInnerCardHeading">
                    13.5k interviews
                  </h3>
                  <p className="chooseUsInnerCardPara6">
                    13500 Keys Informant interviews undertaken
                  </p>
                </div>
              </div>
            </div>

            {/* ===================== card seven shart here ========================== */}
            <div className="col-12 col-md-2  cardWidth ">
              <div className="card  text-center ">
                <div className="d-flex justify-content-center align-items-center  cardParentIcon ">
                  <div className="cardTopIcon d-flex justify-content-center align-items-center">
                    <FaChalkboardUser className="firstIcon"></FaChalkboardUser>
                  </div>
                </div>

                <div className="text-center">
                  <h3 className="chooseUsInnerCardHeading">
                    9.5k Facilitations
                  </h3>
                  <p className="chooseUsInnerCardPara7">
                    9,500 Focus Group Discussions facilitated in Somalia/Land
                  </p>
                </div>
              </div>
            </div>
            {/* ===================== card eight shart here ========================== */}
            <div className="col-12 col-md-2  cardWidth ">
              <div className="card  text-center">
                <div className="d-flex justify-content-center align-items-center  cardParentIcon ">
                  <div className="cardTopIcon d-flex justify-content-center align-items-center">
                    <FaMobileAlt className="firstIcon"></FaMobileAlt>
                  </div>
                </div>

                <div className="text-center">
                  <h3 className="chooseUsInnerCardHeading">350+ Equipment</h3>
                  <p className="chooseUsInnerCardPara8">
                    350+ pieces of smart phones and tablets with updated
                    programs
                  </p>
                </div>
              </div>
            </div>
            {/* ===================== card nine shart here ========================== */}
            <div className="col-12 col-md-2  cardWidth ">
              <div className="card  text-center">
                <div className="d-flex justify-content-center align-items-center  cardParentIcon ">
                  <div className="cardTopIcon d-flex justify-content-center align-items-center">
                    <FaUserTie className="firstIcon"></FaUserTie>
                  </div>
                </div>

                <div className="text-center">
                  <h3 className="chooseUsInnerCardHeading">
                    Over 250 Professionals
                  </h3>
                  <p className="chooseUsInnerCardPara9">
                    Over 250 enumerators, supervisors and managers
                  </p>
                </div>
              </div>
            </div>

            {/* ===================== card ten shart here ========================== */}
            <div className="col-12 col-md-2  cardWidth ">
              <div className="card  text-center">
                <div className="d-flex justify-content-center align-items-center  cardParentIcon ">
                  <div className="cardTopIcon d-flex justify-content-center align-items-center">
                    <IoDocumentTextOutline className="firstIcon"></IoDocumentTextOutline>
                  </div>
                </div>

                <div className="text-center">
                  <h3 className="chooseUsInnerCardHeading">
                    Presence & Licensed
                  </h3>
                  <p className="chooseUsInnerCardPara10">
                    Presence and Licensed by Somalia/land
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =================== mobile  devices cards ==============  */}

      <div className="slider-container d-md-none d-block ">
        <Slider {...settings}>
          {/* card 1 start */}
          <div className="col-12 col-md-2  cardWidth ">
            <div className="card  text-center">
              <div className="d-flex justify-content-center align-items-center  cardParentIcon ">
                <div className="cardTopIcon d-flex justify-content-center align-items-center">
                  <FaRegBuilding className="firstIcon"></FaRegBuilding>
                </div>
              </div>

              <div className="text-center">
                <h3 className="chooseUsInnerCardHeading">6 Offices</h3>
                <p className="chooseUsInnerCardPara1">
                  Locations in Somalia, Somaliland and Kenya
                </p>
              </div>
            </div>
          </div>

          {/* ===================== card two shart here ========================== */}
          <div className="col-12 col-md-2  cardWidth ">
            <div className="card  text-center ">
              <div className="d-flex justify-content-center align-items-center  cardParentIcon ">
                <div className="cardTopIcon d-flex justify-content-center align-items-center">
                  <FaPeopleGroup className="firstIcon"></FaPeopleGroup>
                </div>
              </div>

              <div className="text-center">
                <h3 className="chooseUsInnerCardHeading">13+ years</h3>
                <p className="chooseUsInnerCardPara2">
                  we have more than 10 years of Experience
                </p>
              </div>
            </div>
          </div>

          {/* ===================== card three shart here ========================== */}
          <div className="col-12 col-md-2  cardWidth ">
            <div className="card  text-center">
              <div className="d-flex justify-content-center align-items-center  cardParentIcon ">
                <div className="cardTopIcon d-flex justify-content-center align-items-center">
                  <GoProjectSymlink className="firstIcon"></GoProjectSymlink>
                </div>
              </div>

              <div className="text-center">
                <h3 className="chooseUsInnerCardHeading">194 Projects</h3>
                <p className="chooseUsInnerCardPara3">
                  About 184 projects successfully done!
                </p>
              </div>
            </div>
          </div>

          {/* ===================== card four shart here ========================== */}
          <div className="col-12 col-md-2  cardWidth ">
            <div className="card  text-center">
              <div className="d-flex justify-content-center align-items-center  cardParentIcon ">
                <div className="cardTopIcon d-flex justify-content-center align-items-center">
                  <FaRegHandshake className="firstIcon"></FaRegHandshake>
                </div>
              </div>

              <div className="text-center">
                <h3 className="chooseUsInnerCardHeading">70+ Clients</h3>
                <p className="chooseUsInnerCardPara4">
                  Over 70 happy clients
                </p>
              </div>
            </div>
          </div>

          {/* ===================== card five shart here ========================== */}
          <div className="col-12 col-md-2  cardWidth ">
            <div className="card  text-center">
              <div className="d-flex justify-content-center align-items-center  cardParentIcon ">
                <div className="cardTopIcon d-flex justify-content-center align-items-center">
                  <FaHome className="firstIcon"></FaHome>
                </div>
              </div>

              <div className="text-center">
                <h3 className="chooseUsInnerCardHeading">256k HH Surveys</h3>
                <p className="chooseUsInnerCardPara5">
                  256,000 household surveys conducted and still counting
                </p>
              </div>
            </div>
          </div>

          {/* card six start */}
          <div className="col-12 col-md-2  cardWidth ">
            <div className="card  text-center">
              <div className="d-flex justify-content-center align-items-center  cardParentIcon ">
                <div className="cardTopIcon d-flex justify-content-center align-items-center">
                  <FaUserTie className="firstIcon"></FaUserTie>
                </div>
              </div>

              <div className="text-center">
                <h3 className="chooseUsInnerCardHeading">13.5k interviews</h3>
                <p className="chooseUsInnerCardPara6">
                  13500 Keys Informant interviews undertaken
                </p>
              </div>
            </div>
          </div>

          {/* ===================== card seven shart here ========================== */}
          <div className="col-12 col-md-2  cardWidth ">
            <div className="card  text-center ">
              <div className="d-flex justify-content-center align-items-center  cardParentIcon ">
                <div className="cardTopIcon d-flex justify-content-center align-items-center">
                  <FaChalkboardUser className="firstIcon"></FaChalkboardUser>
                </div>
              </div>

              <div className="text-center">
                <h3 className="chooseUsInnerCardHeading">
                  9.5k Facilitations
                </h3>
                <p className="chooseUsInnerCardPara7">
                  9,500 Focus Group Discussions facilitated in Somalia/Land
                </p>
              </div>
            </div>
          </div>

          {/* ===================== card eight shart here ========================== */}
          <div className="col-12 col-md-2  cardWidth ">
            <div className="card  text-center">
              <div className="d-flex justify-content-center align-items-center  cardParentIcon ">
                <div className="cardTopIcon d-flex justify-content-center align-items-center">
                  <FaMobileAlt className="firstIcon"></FaMobileAlt>
                </div>
              </div>

              <div className="text-center">
                <h3 className="chooseUsInnerCardHeading">350+ Equipment</h3>
                <p className="chooseUsInnerCardPara8">
                  350+ pieces of smart phones and tablets with updated
                  programs
                </p>
              </div>
            </div>
          </div>

          {/* ===================== card nine shart here ========================== */}
          <div className="col-12 col-md-2  cardWidth ">
            <div className="card  text-center">
              <div className="d-flex justify-content-center align-items-center  cardParentIcon ">
                <div className="cardTopIcon d-flex justify-content-center align-items-center">
                  <FaUserTie className="firstIcon"></FaUserTie>
                </div>
              </div>

              <div className="text-center">
                <h3 className="chooseUsInnerCardHeading">
                  Over 250 Professionals
                </h3>
                <p className="chooseUsInnerCardPara9">
                  Over 250 enumerators, supervisors and managers
                </p>
              </div>
            </div>
          </div>

          {/* ===================== card ten shart here ========================== */}
          <div className="col-12 col-md-2  cardWidth ">
            <div className="card  text-center">
              <div className="d-flex justify-content-center align-items-center  cardParentIcon ">
                <div className="cardTopIcon d-flex justify-content-center align-items-center">
                  <IoDocumentTextOutline className="firstIcon"></IoDocumentTextOutline>
                </div>
              </div>

              <div className="text-center">
                <h3 className="chooseUsInnerCardHeading">
                  Presence & Licensed
                </h3>
                <p className="chooseUsInnerCardPara10">
                  Presence and Licensed by Somalia/land
                </p>
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
    <img className="arrow-button-chooseUs" src={sliderBtnLeft} alt="" />
  </div>
);

const CustomNextArrow = (props) => (
  <div
    {...props}
    className=""
    aria-label="Previous"
    type="button"
  >
    <img className="arrow-button-chooseUs2" src={sliderBtnRight} alt="" />
  </div>
);

export default WhyChooseUs;
