import React, { useState, useEffect } from "react";
import "./Testimonial.css";
import quote from "../../../assets/images/quote.png";
import dg from "../../../assets/images/testimionial/dg.webp";
import nrc from "../../../assets/images/testimionial/nrc.webp";
import unisefTes from "../../../assets/images/testimionial/unisefTes.png";
import daiTes from "../../../assets/images/testimionial/daiTes.jpeg";
import danishTes from "../../../assets/images/testimionial/danishTes.png";
import diakonia from "../../../assets/images/testimionial/daikoniTes.jpeg";
import Slider from "react-slick";

const testimonialsData = [
  {
    img: unisefTes,
    topText:
      "Kindly do not hesitate to enter into collaboration with Smart Vision for similar activities, as UNICEF was very pleased and satisfied by their work",
    bottomText: "Hanna Yoshimoto",
    company: "UNICEF",
  },
  {
    img: diakonia,
    topText:
      "We are glad to provide this letter which doubles, as their reference, in support of similar contracts. I can clearly guarantee for this firm, as having, the right manpower and professional ethos",
    bottomText: "Jaylani Farah",
    company: "Daikonia",
  },
  {
    img: daiTes,
    topText:
      "We believe that partnership with Smart Vision will help any development organization working in Somalia to generate quality information that is critical for Monitoring, Evaluation and Learning from work in the country",
    bottomText: "LIEF Doerring",
    company: "DAI",
  },
  {
    img: danishTes,
    topText:
      "It is our conviction that the services offered by Smart Vision will go a long way in helping organizations working in Somalia get quality information that will add good value to their programming and advocacy work in the country",
    bottomText: "Trust Makhurane",
    company: "DRC",
  },
  {
    img: nrc,
    topText:
      "We found Smart Vision capacity and professionalism in organizing and delivering the said training to a good standard and satisfactory outcome, we convey our highest appreciation and recommendation and welcome their participation in similar future collaborations",
    bottomText: "Osman Yusuf",
    company: "NRC",
  },
  {
    img: dg,
    topText:
      "“It is on this account that I highly commend Smart Vision for their brilliant services it has provided Somaliland Ministry of Education",
    bottomText: "Mohamed Hassan",
    company: "DG, MoEHS",
  },
  {
    img: unisefTes,
    topText:
      "Kindly do not hesitate to enter into collaboration with Smart Vision for similar activities, as UNICEF was very pleased and satisfied by their work",
    bottomText: "Hanna Yoshimoto",
    company: "UNICEF",
  },
  {
    img: diakonia,
    topText:
      "We are glad to provide this letter which doubles, as their reference, in support of similar contracts. I can clearly guarantee for this firm, as having, the right manpower and professional ethos",
    bottomText: "Jaylani Farah",
    company: "Daikonia",
  },
  {
    img: daiTes,
    topText:
      "We believe that partnership with Smart Vision will help any development organization working in Somalia to generate quality information that is critical for Monitoring, Evaluation and Learning from work in the country",
    bottomText: "LIEF Doerring",
    company: "DAI",
  },
];

// testimonial mobile data
const testimonialsDataMobile = [
  {
    img: unisefTes,
    topText:
      "Kindly do not hesitate to enter into collaboration with Smart Vision for similar activities, as UNICEF was very pleased and satisfied by their work",
    bottomText: "Hanna Yoshimoto",
    company: "UNICEF",
  },
  {
    img: diakonia,
    topText:
      "We are glad to provide this letter which doubles, as their reference, in support of similar contracts. I can clearly guarantee for this firm, as having, the right manpower and professional ethos",
    bottomText: "Jaylani Farah",
    company: "Daikonia",
  },
  {
    img: daiTes,
    topText:
      "We believe that partnership with Smart Vision will help any development organization working in Somalia to generate quality information that is critical for Monitoring, Evaluation and Learning from work in the country",
    bottomText: "LIEF Doerring",
    company: "DAI",
  },
  {
    img: danishTes,
    topText:
      "It is our conviction that the services offered by Smart Vision will go a long way in helping organizations working in Somalia get quality information that will add good value to their programming and advocacy work in the country",
    bottomText: "Trust Makhurane",
    company: "DRC",
  },
  {
    img: nrc,
    topText:
      "We found Smart Vision capacity and professionalism in organizing and delivering the said training to a good standard and satisfactory outcome, we convey our highest appreciation and recommendation and welcome their participation in similar future collaborations",
    bottomText: "Osman Yusuf",
    company: "NRC",
  },
  {
    img: dg,
    topText:
      "“It is on this account that I highly commend Smart Vision for their brilliant services it has provided Somaliland Ministry of Education",
    bottomText: "Mohamed Hassan",
    company: "DG, MoEHS",
  },
  {
    img: unisefTes,
    topText:
      "Kindly do not hesitate to enter into collaboration with Smart Vision for similar activities, as UNICEF was very pleased and satisfied by their work",
    bottomText: "Hanna Yoshimoto",
    company: "UNICEF",
  },
  {
    img: diakonia,
    topText:
      "We are glad to provide this letter which doubles, as their reference, in support of similar contracts. I can clearly guarantee for this firm, as having, the right manpower and professional ethos",
    bottomText: "Jaylani Farah",
    company: "Daikonia",
  },
  {
    img: daiTes,
    topText:
      "We believe that partnership with Smart Vision will help any development organization working in Somalia to generate quality information that is critical for Monitoring, Evaluation and Learning from work in the country",
    bottomText: "LIEF Doerring",
    company: "DAI",
  },
];

const Testimonial = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(
    testimonialsData[0]
  );
  const [currentTestimonialMobile, setCurrentTestimonialMobile] = useState(
    testimonialsDataMobile[0]
  );
  const [fade, setFade] = useState(true);
  const [fadeMobile, setFadeMobile] = useState(true);
  // const [currenttestimonialsDataMobile, setCurrentestimonialsDataMobile] = useState(testimonialsDataMobile[0]);

  const settingsTes = {
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: 6,
    speed: 1000,
    autoplay: true,
    beforeChange: (current, next) => {
      setFade(false);
      setTimeout(() => {
        setCurrentTestimonial(testimonialsData[next]);
        setFade(true);
      }, 1000);
    },
  };

  // mobile settings
  const settingsTesMobile = {
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: 2,
    speed: 1000,
    autoplay: true,
    beforeChange: (current, next) => {
      setFadeMobile(false);
      setTimeout(() => {
        setCurrentTestimonialMobile(testimonialsDataMobile[next]);
        setFadeMobile(true);
      }, 1000);
    },
  };

  return (
    <div className="sectionGap containe">
      <div className="pb-lg-4">
        <div className="text-center border-bottom border-3">
          <h1 className="pb-0 pb-md-3">Testimonial</h1>
          <div className="my-md-5 my-4 d-flex align-items-center">
            <span className="w-75  border-bottom border-3"></span>
            <img className="mx-3 quote" src={quote} alt="quote" />
            <span className="w-75  border-bottom border-3"></span>
          </div>

          <div className="d-none d-sm-block">
            <div>
              {" "}
              <p className="testimonial-top-text">
                {currentTestimonial.topText}
              </p>
            </div>

            <div className="slider-container">
              <Slider className="slider-parent" {...settingsTes}>
                {testimonialsData.map((testimonial, index) => (
                  <div key={index}>
                    <img
                      className="testimonial-img"
                      src={testimonial.img}
                      alt={`testimonial-${index}`}
                    />
                  </div>
                ))}
              </Slider>
            </div>

            <div className="bottom-content">
              <div className="testimonial-bottom-text">
                {currentTestimonial.bottomText}
              </div>
              <div className="testimonial-bottom-company">
                {currentTestimonial.company}
              </div>
            </div>
          </div>

          {/* mobile slider  */}
          <div className="d-block d-sm-none">
            <div>
              {" "}
              <p className="testimonial-top-text">
                {currentTestimonialMobile.topText}
              </p>
            </div>

            <div className="slider-container">
              <Slider className="slider-parent" {...settingsTesMobile}>
                {testimonialsDataMobile.map((testimonial, index) => (
                  <div key={index}>
                    <img
                      className="testimonial-img"
                      src={testimonial.img}
                      alt={`testimonial-${index}`}
                    />
                  </div>
                ))}
              </Slider>
            </div>

            <div className="bottom-content">
              <div className="testimonial-bottom-text">
                {currentTestimonialMobile.bottomText}
              </div>
              <div className="testimonial-bottom-company">
                {currentTestimonialMobile.company}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
