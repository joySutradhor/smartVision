import unicef from "../../../assets/images/unicef.png";
import coopy from "../../../assets/images/coopi.png";
import dai from "../../../assets/images/dai.png";
import diakonia from "../../../assets/images/diakonia.png";
import dra from "../../../assets/images/drc.png";
import eed from "../../../assets/images/eed_advisory.png";
import gavo from "../../../assets/images/gavo.png";
import gecpd from "../../../assets/images/gecpd.png";
import grt from "../../../assets/images/grt.png";
import hwa from "../../../assets/images/hwa.png";
import ilo from "../../../assets/images/ilo.png";
import islamic from "../../../assets/images/islamic_relief.png";
import kaalo from "../../../assets/images/kaalo.png";
import koonfur from "../../../assets/images/koonfur_galbeed1.png";
import mawdafa from "../../../assets/images/mawdafa.png";
import nisfoundation from "../../../assets/images/nisfoundation.png";
import odeso from "../../../assets/images/odeso.png";
import oxfan from "../../../assets/images/oxfam.png";
import practical_action from "../../../assets/images/practical_action.png";
import punsaal from "../../../assets/images/punsaa1.png";
import puntland from "../../../assets/images/puntland_state_unversity.png";
import safer from "../../../assets/images/safer_world.png";
import samo from "../../../assets/images/samo_development_809x170.png";
import somali from "../../../assets/images/somali_family.png";
import somaliland from "../../../assets/images/somaliland_ministry_of_education.png";
import tadamun from "../../../assets/images/tadamun.png";
import unfpa from "../../../assets/images/unfpa.png";
import handicap from "../../../assets/images/handicap_international.png";
import ACFf  from "../../../assets/images/ACFf.png";

import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sliderBtnLeft from "../../../assets/images/sliderBtnLeft.png";
import sliderBtnRight from "../../../assets/images/sliderBtnRight.png";

import "./OurClients.css";

const OurClients = () => {
  const clients = [
    { id: 1, img: unicef },
    { id: 2, img: ACFf },
    { id: 3, img: coopy },
    { id: 4, img: dai },
    { id: 5, img: diakonia },
    { id: 6, img: dra },
    { id: 7, img: eed },
    { id: 8, img: gavo },
    { id: 9, img: gecpd },
    { id: 10, img: grt },
    { id: 11, img: handicap },
    { id: 12, img: hwa },
    { id: 13, img: ilo },
    { id: 14, img: islamic },
    { id: 16, img: kaalo },
    { id: 17, img: koonfur },
    { id: 18, img: mawdafa },
    { id: 19, img: nisfoundation },
    { id: 20, img: odeso },
    { id: 21, img: oxfan },
    { id: 22, img: practical_action },
    { id: 223, img: punsaal },
    { id: 24, img: safer },
    { id: 25, img: samo },
    { id: 26, img: puntland },
    { id: 27, img: somaliland },
    { id: 28, img: somali },
    { id: 29, img: unfpa },
    { id: 23, img: tadamun },
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
    prevArrow: <CustomMobilePrevArrowOurClients />,
    nextArrow: <CustomMobileNextArrowOurClients />,
  };

  return (
    <div className="ourClientTopGap">
      <div className="">
        <div className="w-75 m-auto mb-md-4 text-center">
          <h1 className="pb-0 pb-md-3">Our Clients</h1>
        </div>

        <div className="d-none d-lg-block">
          <div className="d-flex flex-wrap justify-content-center mx-auto">
            {clients.map((client) => (
              <div className="m-3 " key={client?.id}>
                <img className="" src={client?.img} alt="" />
              </div>
            ))}
          </div>
        </div>

        {/* mobile slider */}
        <div className="mx-3 d-lg-none">
          <Slider className="slider" {...settings}>
            {clients.map((client) => (
              <div
                key={client.id}
                className="d-flex jsutify-content-center align-items-center"
              >
                <img
                  className="client-slider-image img-fluid"
                  src={client.img}
                  alt=""
                />
              </div>
            ))}
          </Slider>
        </div>
        {/* mobile slider end*/}
      </div>
    </div>
  );
};

// slider custom button here

const CustomMobilePrevArrowOurClients = (props) => (
  
  <div
  {...props}
  className=""
  aria-label="Previous"
  type="button"
>

  <img className="arrow-button-ourClients" src={sliderBtnRight} alt="" />
</div>
);

const CustomMobileNextArrowOurClients = (props) => (
  
  <div
  {...props}
  className=""
  aria-label="Previous"
  type="button"
>

  <img className="arrow-button-ourClients2" src={sliderBtnLeft} alt="" />
</div>
);

export default OurClients;
