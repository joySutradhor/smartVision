import thirdParty from "..//../../assets/images/Vector111.png";
import "./WhatWeOffer.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

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

const WhatWeOffer = () => {
  const settingsOfferLarge = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    speed: 700,
    cssEase: "linear",
    prevArrow: <CustomPrevArrowOfferLarge />,
    nextArrow: <CustomNextArrowOfferLarge />,
  };

  // mobile slider
  const offerMobilesettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    speed: 1000,
    cssEase: "linear",
    prevArrow: <CustomPrevArrowOffer />,
    nextArrow: <CustomNextArrowOffer />,
  };
  return (
    <div className="sectionGap containe">
      <div className="col-11 col-md-8 m-auto text-center">
        <h1 className="pb-0 pb-md-4"> What We Offer</h1>
        <p className="d-none d-md-block">
          We provide specialized support services and expertise aimed at adding
          value and filling gaps in existing capacity. Our main areas of
          expertise are outlined below
        </p>
      </div>

      {/* ========== show slider in larger divices ================= */}

      <div className="slider-container mx-2 mx-md-4 d-none d-md-block">
        <Slider className="slider" {...settingsOfferLarge}>
          <div className="d-lg-flex  gap-4  offer-slider-items">
            <div className="col-11 col-md-12 col-lg-3  box d-flex flex-column justify-content-center align-items-center">
              <div className="d-flex justify-content-center align-items-center">
                <img
                  className="d-inline-block img-fluid mb-4 service-sliderImg"
                  src={thirdParty}
                  alt=""
                />
              </div>
              <h2 className="text-center">Third Party Monitoring</h2>
            </div>

            <div className="col-12 col-lg-9 col-md-12 box">
              <p>
                Given the fluid security situation and the difficult terrain of
                Somalia, international staff is often too encumbered to travel
                to project locations. With our presence across the various
                regions in the country, we have access to project sites, however
                rural or urban, and carry out designated assignments. We are
                able to update on location and support clients to track changes
                in program outputs and performance over time, thereby providing
                regular feedback and early indications of progress or lack of
                it. This helps our clients to make informed decisions regarding
                the design and effectiveness of on-going projects in good time.
                We have adequate capacity to collect data with the aid of paper
                tools or Open Data Kit (ODK) platform. We ensure that the
                client’s project team has up to date data in hard and soft
                copies or as per the ODK system, continuously reviewing MEL data
                to enable management make informed decisions for achieving the
                project targets. We also visit projects to document and report
                case studies and success stories as the clients’ need may
                necessitate.
              </p>
            </div>
          </div>

          {/* card two */}
          <div className="d-lg-flex  gap-4  offer-slider-items">
            <div className="col-11 col-md-12 col-lg-3  box d-flex flex-column justify-content-center align-items-center">
              <div className="d-flex justify-content-center align-items-center">
                <img
                  className="d-inline-block img-fluid mb-4 service-sliderImg"
                  src={verctor2}
                  alt=""
                />
              </div>
              <h2 className="text-center">Midterm and endline Evaluations</h2>
            </div>

            <div className="col-12 col-lg-9 col-md-12 box">
              <p>
                At Smart Vision, we provide quality Midterm and endline
                evaluation services. Meticulously selected professionals in our
                team give the organization an international outlook and
                expertise to handle emerging clients’ needs in regard to
                evaluations. Our team is always ready to analyze the performance
                of projects/programmes given any agreed criteria.
              </p>
            </div>
          </div>

          {/* card three */}
          <div className="d-lg-flex  gap-4  offer-slider-items">
            <div className="col-11 col-md-12 col-lg-3  box d-flex flex-column justify-content-center align-items-center">
              <div className="d-flex justify-content-center align-items-center">
                <img
                  className="d-inline-block img-fluid mb-4 service-sliderImg"
                  src={verctor3}
                  alt=""
                />
              </div>
              <h2 className="text-center">Baseline surveys</h2>
            </div>

            <div className="col-12 col-lg-9 col-md-12 box">
              <p>
                We plan and execute high quality baseline surveys to provide
                reliable data that reflects accurate pre-project conditions in
                line with project verifiable indicators. This enables clients to
                understand the starting point, and set benchmarks upon which
                projects’ progress and impact are later measured. Further, we
                are able to conduct situational analyses and offer clients
                insightful reports on the ground scenarios.
              </p>
            </div>
          </div>

          {/* Environmental and social impact Assessment */}
          <div className="d-lg-flex  gap-4  offer-slider-items">
            <div className="col-11 col-md-12 col-lg-3  box d-flex flex-column justify-content-center align-items-center">
              <div className="d-flex justify-content-center align-items-center">
                <img
                  className="d-inline-block img-fluid mb-4 service-sliderImg"
                  src={verctor4}
                  alt=""
                />
              </div>
              <h2 className="text-center">
                Environmental and social impact Assessment
              </h2>
            </div>

            <div className="col-12 col-lg-9 col-md-12 box">
              <p>
                Smart Vision is privy to the climatic changes happening around
                the world. We look for opportunities to reduce the harmful
                environmental effects of human operations, and support
                activities that promote the protection of human health and a
                sustainable global environment. We conduct Environmental and
                Social Impact Assessments for various development projects in
                different sectors including infrastructure, energy, mining,
                industry, and built environment, and develop management plans
                for appropriate mitigation measures. Our team comprises highly
                qualified and experienced staff‑ ranging across the
                Environmental, Health and Safety disciplines, who are on the
                ready to provide legislative/regulatory and technical support to
                clients.
              </p>
            </div>
          </div>

          {/* Special studies and research */}
          <div className="d-lg-flex  gap-4  offer-slider-items">
            <div className="col-11 col-md-12 col-lg-3  box d-flex flex-column justify-content-center align-items-center">
              <div className="d-flex justify-content-center align-items-center">
                <img
                  className="d-inline-block img-fluid mb-4 service-sliderImg"
                  src={verctor5}
                  alt=""
                />
              </div>
              <h2 className="text-center">Special studies and research</h2>
            </div>

            <div className="col-12 col-lg-9 col-md-12 box">
              <p>
                Smart Vision carries out special studies and assessments on
                demand to gather necessary evidence to ensure that decisions are
                taken and programs implemented based on sound information from
                the ground. In addition, we carry out general research to bridge
                the knowledge gap on topical issues relevant to humanitarian
                work and contemporary issues within Somalia and beyond.
              </p>
            </div>
          </div>

          {/* Setting up MEAL systems and training */}
          <div className="d-lg-flex  gap-4  offer-slider-items">
            <div className="col-11 col-md-12 col-lg-3  box d-flex flex-column justify-content-center align-items-center">
              <div className="d-flex justify-content-center align-items-center">
                <img
                  className="d-inline-block img-fluid mb-4 service-sliderImg"
                  src={verctor6}
                  alt=""
                />
              </div>
              <h2 className="text-center">
                Setting up MEAL systems and training
              </h2>
            </div>

            <div className="col-12 col-lg-9 col-md-12 box">
              <p>
                Strong Monitoring, Evaluation, Accountability and Learning are
                critical to program/project success including those operating in
                fragile contexts. With an effective MEAL system, we are able to
                track progress and make necessary adjustments. Besides
                conducting different kinds of research-based assignments, Smart
                Vision also sets up, evaluates and trains the project team. MEAL
                training introduces the M&E processes that strengthen
                accountability and learning, and so promote project/program and
                strategy effectiveness.
              </p>
            </div>
          </div>

          {/* Quality infrastructure and trade facilitation (Training and capacity building) */}
          <div className="d-lg-flex  gap-4  offer-slider-items">
            <div className="col-11 col-md-12 col-lg-3  box d-flex flex-column justify-content-center align-items-center">
              <div className="d-flex justify-content-center align-items-center">
                <img
                  className="d-inline-block img-fluid mb-4 service-sliderImg"
                  src={verctor7}
                  alt=""
                />
              </div>
              <h2 className="text-center">
                Quality infrastructure and trade facilitation (Training and
                capacity building)
              </h2>
            </div>

            <div className="col-12 col-lg-9 col-md-12 box">
              <p>
                Quality infrastructure is the system put in place to ensure
                products and services are safe and of set standards. We have
                adequate capacity- in well trained and experienced staff- in
                metrology, measurement for legal and industrial conception
                calibration, Conformity assessment, quality assurance,
                inspection, testing, certification, quality infrastructure
                concept, WTO/TBT requirement in trade and quality infrastructure
                contribution, SPS and trade facilitation. Indeed, we set the
                standards in provision of professional advice in the respective
                industry and on ISO certification.
              </p>
            </div>
          </div>

          {/* Institutional capacity development */}
          <div className="d-lg-flex  gap-4  offer-slider-items">
            <div className="col-11 col-md-12 col-lg-3  box d-flex flex-column justify-content-center align-items-center">
              <div className="d-flex justify-content-center align-items-center">
                <img
                  className="d-inline-block img-fluid mb-4 service-sliderImg"
                  src={verctor8}
                  alt=""
                />
              </div>
              <h2 className="text-center">
                Institutional capacity development
              </h2>
            </div>

            <div className="col-12 col-lg-9 col-md-12 box">
              <p>
                Smart Vision sets up strong strategic foundation for long term
                goal or roadmap for its clients. We undertake the necessary
                steps for successful business strategy, e.g. conducting SWOT
                analyses, clarifying and setting out mission, vision and values.
                We follow this up with a selection of an appropriate strategic
                management framework and develop envisaged five-year plans
                replete with SMART objectives. Further, Smart Vision is a leader
                in policy formulation process and guides in development of new
                policies and improvement of existing ones. We also conduct
                institutional capacity assessments and capacity building in
                professional manner.
              </p>
            </div>
          </div>

          {/* Business Development Services (BDS) */}
          <div className="d-lg-flex  gap-4  offer-slider-items">
            <div className="col-11 col-md-12 col-lg-3  box d-flex flex-column justify-content-center align-items-center">
              <div className="d-flex justify-content-center align-items-center">
                <img
                  className="d-inline-block img-fluid mb-4 service-sliderImg"
                  src={verctor9}
                  alt=""
                />
              </div>
              <h2 className="text-center">
                Business Development Services (BDS)
              </h2>
            </div>

            <div className="col-12 col-lg-9 col-md-12 box">
              <p>
                We support clients by offering Business Development Services
                (BDS) to improve performance of the enterprise, its access to
                markets and their ability to compete. We also assess and develop
                and/or improve business strategies and business operations
                through capacity building in planning, organizing, directing,
                coordinating and controlling of the various aspects of
                production, such as procurement, manufacturing, distributions
                and marketing. We also train and capacitate enterprises.
              </p>
            </div>
          </div>
        </Slider>
      </div>

      {/* =========== for mobile devices ============= */}
      <div className="slider-container offerSliderParent mx-2 mx-md-4 d-block d-md-none">
        <Slider className="slider" {...offerMobilesettings}>
          <div className="d-md-flex  offer-slider-items">
            <div className="col-12  w-100 flex-column  box d-flex justify-content-center align-items-center">
              <div className="d-flex  justify-content-center align-items-center">
                <img
                  className="d-inline-block img-fluid mb-4 mobile-box-img"
                  src={thirdParty}
                  alt=""
                />
              </div>
              <h2 className="text-center">Third Party Monitoring</h2>
            </div>

            <div className="col-12 mt-3 col-md-9 box">
              <p>
                Given the fluid security situation and the difficult terrain of
                Somalia, international staff is often too encumbered to travel
                to project locations. With our presence across the various
                regions in the country, we have access to project sites, however
                rural or urban, and carry out designated assignments. We are
                able to update on location and support clients to track changes
                in program outputs and performance over time, thereby providing
                regular feedback and early indications of progress or lack of
                it. This helps our clients to make informed decisions regarding
                the design and effectiveness of on-going projects in good time.
                We have adequate capacity to collect data with the aid of paper
                tools or Open Data Kit (ODK) platform. We ensure that the
                client’s project team has up to date data in hard and soft
                copies or as per the ODK system, continuously reviewing MEL data
                to enable management make informed decisions for achieving the
                project targets. We also visit projects to document and report
                case studies and success stories as the clients’ need may
                necessitate.
              </p>
            </div>
          </div>

          {/* card two */}
          <div className="d-md-flex  offer-slider-items">
            <div className="col-12  w-100 flex-column  box d-flex justify-content-center align-items-center">
              <div className="d-flex  justify-content-center align-items-center">
                <img
                  className="d-inline-block img-fluid mb-4 mobile-box-img"
                  src={verctor2}
                  alt=""
                />
              </div>
              <h2 className="text-center">Midterm and endline Evaluations</h2>
            </div>

            <div className="col-12 mt-3 col-md-9 box">
              <p>
                At Smart Vision, we provide quality Midterm and endline
                evaluation services. Meticulously selected professionals in our
                team give the organization an international outlook and
                expertise to handle emerging clients’ needs in regard to
                evaluations. Our team is always ready to analyze the performance
                of projects/programmes given any agreed criteria.
              </p>
            </div>
          </div>

          {/* card three */}
          <div className="d-md-flex   offer-slider-items">
            <div className="col-12 w-100 flex-column box d-flex justify-content-center align-items-center">
              <div className="d-flex justify-content-center align-items-center">
                <img
                  className="d-inline-block img-fluid mb-4 mobile-box-img"
                  src={verctor3}
                  alt=""
                />
              </div>
              <h2 className="text-center">Baseline surveys</h2>
            </div>

            <div className="col-12 mt-3 col-md-9 box">
              <p>
                We plan and execute high quality baseline surveys to provide
                reliable data that reflects accurate pre-project conditions in
                line with project verifiable indicators. This enables clients to
                understand the starting point, and set benchmarks upon which
                projects’ progress and impact are later measured. Further, we
                are able to conduct situational analyses and offer clients
                insightful reports on the ground scenarios.
              </p>
            </div>
          </div>

          {/* Environmental and social impact Assessment */}
          <div className="d-md-flex   offer-slider-items">
            <div className="col-12 w-100 flex-column box d-flex justify-content-center align-items-center">
              <div className="d-flex justify-content-center align-items-center">
                <img
                  className="d-inline-block img-fluid mb-4 mobile-box-img"
                  src={verctor4}
                  alt=""
                />
              </div>
              <h2 className="text-center">
                Environmental and social impact Assessment
              </h2>
            </div>

            <div className="col-12 mt-3 col-md-9 box">
              <p>
                Smart Vision is privy to the climatic changes happening around
                the world. We look for opportunities to reduce the harmful
                environmental effects of human operations, and support
                activities that promote the protection of human health and a
                sustainable global environment. We conduct Environmental and
                Social Impact Assessments for various development projects in
                different sectors including infrastructure, energy, mining,
                industry, and built environment, and develop management plans
                for appropriate mitigation measures. Our team comprises highly
                qualified and experienced staff‑ ranging across the
                Environmental, Health and Safety disciplines, who are on the
                ready to provide legislative/regulatory and technical support to
                clients.
              </p>
            </div>
          </div>

          {/* Special studies and research */}
          <div className="d-md-flex   offer-slider-items">
            <div className="col-12 w-100 flex-column box d-flex justify-content-center align-items-center">
              <div className="d-flex justify-content-center align-items-center">
                <img
                  className="d-inline-block img-fluid mb-4 mobile-box-img"
                  src={verctor5}
                  alt=""
                />
              </div>
              <h2 className="text-center">Special studies and research</h2>
            </div>

            <div className="col-12 mt-3 col-md-9 box">
              <p>
                Smart Vision carries out special studies and assessments on
                demand to gather necessary evidence to ensure that decisions are
                taken and programs implemented based on sound information from
                the ground. In addition, we carry out general research to bridge
                the knowledge gap on topical issues relevant to humanitarian
                work and contemporary issues within Somalia and beyond.
              </p>
            </div>
          </div>

          {/* Setting up MEAL systems and training */}
          <div className="d-md-flex   offer-slider-items">
            <div className="col-12 w-100 flex-column box d-flex justify-content-center align-items-center">
              <div className="d-flex justify-content-center align-items-center">
                <img
                  className="d-inline-block img-fluid mb-4 mobile-box-img"
                  src={verctor6}
                  alt=""
                />
              </div>
              <h2 className="text-center">
                Setting up MEAL systems and training
              </h2>
            </div>

            <div className="col-12 mt-3 col-md-9 box">
              <p>
                Strong Monitoring, Evaluation, Accountability and Learning are
                critical to program/project success including those operating in
                fragile contexts. With an effective MEAL system, we are able to
                track progress and make necessary adjustments. Besides
                conducting different kinds of research-based assignments, Smart
                Vision also sets up, evaluates and trains the project team. MEAL
                training introduces the M&E processes that strengthen
                accountability and learning, and so promote project/program and
                strategy effectiveness.
              </p>
            </div>
          </div>

          {/* Quality infrastructure and trade facilitation (Training and capacity building) */}
          <div className="d-md-flex   offer-slider-items">
            <div className="col-12 w-100 flex-column box d-flex justify-content-center align-items-center">
              <div className="d-flex justify-content-center align-items-center">
                <img
                  className="d-inline-block img-fluid mb-4 mobile-box-img"
                  src={verctor7}
                  alt=""
                />
              </div>
              <h2 className="text-center">
                Quality infrastructure and trade facilitation (Training and
                capacity building)
              </h2>
            </div>

            <div className="col-12 mt-3 col-md-9 box">
              <p>
                Quality infrastructure is the system put in place to ensure
                products and services are safe and of set standards. We have
                adequate capacity- in well trained and experienced staff- in
                metrology, measurement for legal and industrial conception
                calibration, Conformity assessment, quality assurance,
                inspection, testing, certification, quality infrastructure
                concept, WTO/TBT requirement in trade and quality infrastructure
                contribution, SPS and trade facilitation. Indeed, we set the
                standards in provision of professional advice in the respective
                industry and on ISO certification.
              </p>
            </div>
          </div>

          {/* Institutional capacity development */}
          <div className="d-md-flex   offer-slider-items">
            <div className="col-12 w-100 flex-column box d-flex justify-content-center align-items-center">
              <div className="d-flex justify-content-center align-items-center">
                <img
                  className="d-inline-block img-fluid mb-4 mobile-box-img"
                  src={verctor8}
                  alt=""
                />
              </div>
              <h2 className="text-center">
                Institutional capacity development
              </h2>
            </div>

            <div className="col-12 mt-3 col-md-9 box">
              <p>
                Smart Vision sets up strong strategic foundation for long term
                goal or roadmap for its clients. We undertake the necessary
                steps for successful business strategy, e.g. conducting SWOT
                analyses, clarifying and setting out mission, vision and values.
                We follow this up with a selection of an appropriate strategic
                management framework and develop envisaged five-year plans
                replete with SMART objectives. Further, Smart Vision is a leader
                in policy formulation process and guides in development of new
                policies and improvement of existing ones. We also conduct
                institutional capacity assessments and capacity building in
                professional manner.
              </p>
            </div>
          </div>

          {/* Business Development Services (BDS) */}
          <div className="d-md-flex   offer-slider-items">
            <div className="col-12 w-100 flex-column box d-flex justify-content-center align-items-center">
              <div className="d-flex justify-content-center align-items-center">
                <img
                  className="d-inline-block img-fluid mb-4 mobile-box-img"
                  src={verctor9}
                  alt=""
                />
              </div>
              <h2 className="text-center">
                Business Development Services (BDS)
              </h2>
            </div>

            <div className="col-12 mt-3 col-md-9 box">
              <p>
                We support clients by offering Business Development Services
                (BDS) to improve performance of the enterprise, its access to
                markets and their ability to compete. We also assess and develop
                and/or improve business strategies and business operations
                through capacity building in planning, organizing, directing,
                coordinating and controlling of the various aspects of
                production, such as procurement, manufacturing, distributions
                and marketing. We also train and capacitate enterprises.
              </p>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

// for mobile devices
const CustomPrevArrowOffer = (props) => (

  <div
    {...props}
    className=""
    aria-label="Previous"
    type="button"
  >
    <img className="arrow-button-offerMobile" src={sliderBtnLeft} alt="" />
  </div>


);

const CustomNextArrowOffer = (props) => (
  <div
    {...props}
    className=""
    aria-label="Previous"
    type="button"
  >

    <img className="arrow-button-offerMobile2" src={sliderBtnRight} alt="" />
  </div>
);

// for large devices
const CustomPrevArrowOfferLarge = (props) => (
  <div
    {...props}
    className=""
    aria-label="Previous"
    type="button"
  >
    <img className="arrow-button-offerLarge" src={sliderBtnLeft} alt="" />
  </div>

);

const CustomNextArrowOfferLarge = (props) => (

  <div
    {...props}
    className=""
    aria-label="Previous"
    type="button"
  >

    <img className="arrow-button-offerLarge2" src={sliderBtnRight} alt="" />
  </div>

);

export default WhatWeOffer;
