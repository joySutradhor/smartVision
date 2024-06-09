import React from "react";
import "./TrackRecords.css";
import trackRecords from "../../../assets/images/tranckrRecodrd.png";
import arrow from "../../../assets/images/rightarrow.png";
import { Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";
import sosLogo from "../../../assets/images/sosLogo.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FaCheck } from "react-icons/fa6";
import unicef from "../../../assets/images/UNICEF-logo.png";
import iqarus from "../../../assets/images/iqarus.png";
import SOYDAVO from "../../../assets/images/SOYDAVO.webp";
import saveTheClidren from "../../../assets/images/saveTheClidren.webp";
import candelight from "../../../assets/images/candelight.webp";
import theWorlRank from "../../../assets/images/theWorlRank.webp";
import relifInternational from "../../../assets/images/relifInternational.webp";
import diakonia from "../../../assets/images/diakonia.webp";
import shaqadoon from "../../../assets/images/shaqadoon.webp";
import FCA from "../../../assets/images/FCA.webp";
import nisfoundation from "../../../assets/images/nisfoundation.webp";
import oxfam from "../../../assets/images/oxfam.webp";
import ilo from "../../../assets/images/ilo.webp";
import greedo from "../../../assets/images/greedo.webp";
import PunsaaWeblogo from "../../../assets/images/2023/Punsaa-Web-logo.webp";
import DeutscheGesellschaftfurInternationaleZusammenarbeit from "../../../assets/images/2023/Deutsche-Gesellschaft-fur-Internationale-Zusammenarbeit.webp";
import advisory from "../../../assets/images/2022/advisory.webp";
import ACEF from "../../../assets/images/2022/Aecf.svg";
import download from "../../../assets/images/2021/download.png";
import finredcross from "../../../assets/images/2021/finredcross.svg";
import worldRankSign from "../../../assets/images/2021/worldRankSign.webp";
import danishGroup from "../../../assets/images/2021/danishGroup.webp";
import timelinereliefinternational from "../../../assets/images/2020/timelinereliefinternational.webp";
import MercyUSA from "../../../assets/images/2019/MercyUSA.webp";
import worldVison from "../../../assets/images/2019/worldVision.jpg";
import three from "../../../assets/images/2017/3.webp";
import DAIUSAid from "../../../assets/images/2015/DAIUSAid.webp";
import finn from "../../../assets/images/2015/finn.png";
import nisfoundationn from "../../../assets/images/2014/nisfoundation.webp";
import unfpa from "../../../assets/images/2012/unfpa.webp";
import handicap from "../../../assets/images/2012/handicap.png";
import nrc from "../../../assets/images/2011/nrc.png";
import sos from "../../../assets/images/sos.png";
import theWorldRank from "../../../assets/images/theWorldRank.png";
import worldBankRegional from "../../../assets/images/worldBankRegional.png";
import MoWDAFA  from "../../../assets/images/MoWDAFA.png";
import galleryOne from "../../../assets/images/mediaImg/galleryOne.jpg";
const TrackRecords = () => {
  return (
    <div className="sectionGap">
      <div className=" row justify-content-between align-items-start">
        <div className="col-12 col-xl-6 trac-left">
          <h1 className="">
            Recent Track <br /> Records
          </h1>
          <p className="">
            Smart Vision for Consultancy and Development was incorporated in
            2011 in Somalia. We focus majorly on monitoring, evaluation,
            research and learning <br /> (MERL).
          </p>
          <Accordion className="home-accordion" defaultActiveKey="7">
            <Accordion.Item eventKey="7">
              <Accordion.Header>
                <h5 className="acco-tittle">2024 Track Record</h5>
              </Accordion.Header>

              <Accordion.Body className="bg-secondary p-0 rounded-2">
                <div>
                  <div className="row bg-primary text-white p-2 p-md-3  rounded w-100 mx-auto">
                    <div className="col-2 acco-sub-tittle">Status</div>
                    <div className="col-2 acco-sub-tittle">Date</div>
                    <div className="col-6 acco-sub-tittle">
                      Project Description
                    </div>
                    <div className="col-2 acco-sub-tittle">Client</div>
                  </div>

                  <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto border-bottom border-2  border-black ">
                    <div className="col-2 text-primary acco-status">
                      <FaCheck className="CheckBtn" />
                    </div>
                    <div className="col-2 text-primary   ps-md-0 acco-date">
                      June 2024
                    </div>
                    <div className="col-6 acco-dec">
                      Assessment of Sanitation Marketing in Eastern Africa
                    </div>
                    <div className="col-2 ">
                      <img className="img-fluid " src={unicef} alt="" />
                      <img className="img-fluid " src={advisory} alt="" />

                    </div>
                  </div>

                  {/* item 2 */}
                  <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto ">
                    <div className="col-2 text-primary acco-status">
                      <FaCheck className="CheckBtn" />
                    </div>
                    <div className="col-2 text-primary   ps-md-0 acco-date">
                      May 2024
                    </div>
                    <div className="col-6 acco-dec">
                      Climate and health vulnerability and adaptation assessment
                    </div>
                    <div className="col-2 ">
                      <img className="img-fluid " src={iqarus} alt="" />
                    </div>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>

            {/* ============ accordion 2 =========== */}
            <Accordion.Item eventKey="8">
              <Accordion.Header>
                <h5 className="acco-tittle"> 2023 Track Record</h5>
              </Accordion.Header>
              <Accordion.Body className="bg-secondary p-0 rounded-2">
                <div>
                  <div className="row bg-primary text-white p-2 p-md-3  rounded w-100 mx-auto">
                    <div className="col-2 acco-sub-tittle">Status</div>
                    <div className="col-2 acco-sub-tittle">Date</div>
                    <div className="col-6 acco-sub-tittle">
                      Project Description
                    </div>
                    <div className="col-2 acco-sub-tittle">Client</div>
                  </div>
                  {/* item 1 */}
                  <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto border-bottom border-2  border-black">
                    <div className="col-2 text-primary acco-status">
                      <FaCheck className="CheckBtn" />
                    </div>
                    <div className="col-2 text-primary   ps-md-0 acco-date">
                      November, <br />
                      2023
                    </div>
                    <div className="col-6 acco-dec">
                      National WASH assessment
                    </div>
                    <div className="col-2 ">
                      <img className="img-fluid " src={unicef} alt="" />
                      <img className="img-fluid " src={advisory} alt="" />
                    </div>
                  </div>

                  {/* item 2 */}
                  <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto ">
                    <div className="col-2 text-primary acco-status">
                      <FaCheck className="CheckBtn" />
                    </div>
                    <div className="col-2 text-primary   ps-md-0 acco-date">
                      October,
                      <br />
                      2023
                    </div>
                    <div className="col-6 acco-dec">
                      Final Evaluation for HoA program
                    </div>
                    <div className="col-2 ">
                      <img className="img-fluid " src={sos} alt="" />
                    </div>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>

            {/* ============ accordion 3 =========== */}
            <Accordion.Item eventKey="9">
              <Accordion.Header>
                <h5 className="acco-tittle"> 2022 Track Record</h5>
              </Accordion.Header>
              <Accordion.Body className="bg-secondary p-0 rounded-2">
                <div>
                  <div className="row bg-primary text-white p-2 p-md-3  rounded w-100 mx-auto">
                    <div className="col-2 acco-sub-tittle">Status</div>
                    <div className="col-2 acco-sub-tittle">Date</div>
                    <div className="col-6 acco-sub-tittle">
                      Project Description
                    </div>
                    <div className="col-2 acco-sub-tittle">Client</div>
                  </div>

                  {/* item 1 */}
                  <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto border-bottom border-2  border-black">
                    <div className="col-2 text-primary acco-status">
                      <FaCheck className="CheckBtn" />
                    </div>
                    <div className="col-2 text-primary   ps-md-0 acco-date">
                      Nov <br />
                      2022
                    </div>
                    <div className="col-6 acco-dec">
                      Midterm evaluation of FFO NEXUS Project
                    </div>
                    <div className="col-2 ">
                      <img className="img-fluid " src={saveTheClidren} alt="" />
                    </div>
                  </div>

                  {/* item 2 */}
                  <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto ">
                    <div className="col-2 text-primary acco-status">
                      <FaCheck className="CheckBtn" />
                    </div>
                    <div className="col-2 text-primary   ps-md-0 acco-date">
                      Nov <br /> 2022
                    </div>
                    <div className="col-6 acco-dec">
                      Training and Capacity Building (10 LNGOs)
                    </div>
                    <div className="col-2 ">
                      <img className="img-fluid " src={greedo} alt="" />
                    </div>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>

            {/* ============ accordion 2021 =========== */}
            <Accordion.Item eventKey="10">
              <Accordion.Header>
                <h5 className="acco-tittle"> 2021 Track Record</h5>
              </Accordion.Header>
              <Accordion.Body className="bg-secondary p-0 rounded-2">
                <div>
                  <div className="row bg-primary text-white p-2 p-md-3  rounded w-100 mx-auto">
                    <div className="col-2 acco-sub-tittle">Status</div>
                    <div className="col-2 acco-sub-tittle">Date</div>
                    <div className="col-6 acco-sub-tittle">
                      Project Description
                    </div>
                    <div className="col-2 acco-sub-tittle">Client</div>
                  </div>

                  {/* item 1 */}
                  <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto border-bottom border-2  border-black">
                    <div className="col-2 text-primary acco-status">
                      <FaCheck className="CheckBtn" />
                    </div>
                    <div className="col-2 text-primary   ps-md-0 acco-date">
                      Nov, <br />
                      2021
                    </div>
                    <div className="col-6 acco-dec">
                      Due Diligence (Batch 2 assessed 8 companies) Of REACT
                      program
                    </div>
                    <div className="col-2 ">
                      {/* <img className="img-fluid " src={theWorlRank} alt="" />
                        <img className="img-fluid " src={download} alt="" /> */}
                      <img className="img-fluid " src={advisory} alt="" />
                    </div>
                  </div>

                  {/* item 2 */}
                  <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto">
                    <div className="col-2 text-primary acco-status">
                      <FaCheck className="CheckBtn" />
                    </div>
                    <div className="col-2 text-primary   ps-md-0 acco-date">
                      October, <br />
                      2021
                    </div>
                    <div className="col-6 acco-dec">
                      Wash in schools Assessment
                    </div>
                    <div className="col-2 ">
                      <img className="img-fluid " src={saveTheClidren} alt="" />
                    </div>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>

            {/* ============ accordion 2020 =========== */}
            <Accordion.Item eventKey="11">
              <Accordion.Header>
                <h5 className="acco-tittle"> 2020 Track Record</h5>
              </Accordion.Header>
              <Accordion.Body className="bg-secondary p-0 rounded-2">
                <div>
                  <div className="row bg-primary text-white p-2 p-md-3  rounded w-100 mx-auto">
                    <div className="col-2 acco-sub-tittle">Status</div>
                    <div className="col-2 acco-sub-tittle">Date</div>
                    <div className="col-6 acco-sub-tittle">
                      Project Description
                    </div>
                    <div className="col-2 acco-sub-tittle">Client</div>
                  </div>
                  {/* item 1 */}
                  <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto border-bottom border-2  border-black">
                    <div className="col-2 text-primary acco-status">
                      <FaCheck className="CheckBtn" />
                    </div>
                    <div className="col-2 text-primary   ps-md-0 acco-date">
                      Dec, <br />2020
                    </div>
                    <div className="col-6 acco-dec">

                      Endline EvaluationOf  SURP project
                    </div>
                    <div className="col-2 ">
                      <img className="img-fluid " src={worldBankRegional} alt="" />

                    </div>
                  </div>

                  {/* item 2 */}
                  <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto border-bottom border-2  border-black">
                    <div className="col-2 text-primary acco-status">
                      <FaCheck className="CheckBtn" />
                    </div>
                    <div className="col-2 text-primary   ps-md-0 acco-date">
                      Dec, <br /> 2020
                    </div>
                    <div className="col-6 acco-dec">
                      Endline Evaluation Of  SURP’s World Bank project
                    </div>
                    <div className="col-2 ">
                      <img className="img-fluid " src={theWorldRank} alt="" />

                    </div>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header>
                <h5 className="acco-tittle">2019 Track Record</h5>
              </Accordion.Header>
              <Accordion.Body className="bg-secondary p-0 rounded-2">
                <div>
                  <div className="row bg-primary text-white p-2 p-md-3  rounded w-100 mx-auto">
                    <div className="col-2 acco-sub-tittle">Status</div>
                    <div className="col-2 acco-sub-tittle">Date</div>
                    <div className="col-6 acco-sub-tittle">
                      Project Description
                    </div>
                    <div className="col-2 acco-sub-tittle">Client</div>
                  </div>

                  {/* item 1 */}
                  <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto border-bottom border-2  border-black">
                    <div className="col-2 text-primary acco-status">
                      <FaCheck className="CheckBtn" />
                    </div>
                    <div className="col-2 text-primary   ps-md-0 acco-date">
                      Dec <br /> 2019
                    </div>
                    <div className="col-6 acco-dec">
                      Sanitation Marketing Strategy
                    </div>
                    <div className="col-2 ">
                      <img className="img-fluid " src={saveTheClidren} alt="" />
                    </div>
                  </div>

                  {/* item 2 */}
                  <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto">
                    <div className="col-2 text-primary acco-status">
                      <FaCheck className="CheckBtn" />
                    </div>
                    <div className="col-2 text-primary   ps-md-0 acco-date">
                      Nov <br /> 2019
                    </div>
                    <div className="col-6 acco-dec">
                      Framework for management of Strategic Water points (Earth
                      Dams)
                    </div>
                    <div className="col-2 ">
                      <img className="img-fluid " src={saveTheClidren} alt="" />
                    </div>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>

            {/* ============ accordion 2018 =========== */}
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                <h5 className="acco-tittle"> 2018 Track Record</h5>
              </Accordion.Header>
              <Accordion.Body className="bg-secondary p-0 rounded-2">
                <div>
                  <div className="row bg-primary text-white p-2 p-md-3  rounded w-100 mx-auto">
                    <div className="col-2 acco-sub-tittle">Status</div>
                    <div className="col-2 acco-sub-tittle">Date</div>
                    <div className="col-6 acco-sub-tittle">
                      Project Description
                    </div>
                    <div className="col-2 acco-sub-tittle">Client</div>
                  </div>

                  {/* item 1 */}
                  <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto border-bottom border-2  border-black">
                    <div className="col-2 text-primary acco-status">
                      <FaCheck className="CheckBtn" />
                    </div>
                    <div className="col-2 text-primary   ps-md-0 acco-date">
                      Dec, <br /> 2018
                    </div>
                    <div className="col-6 acco-dec">
                      Baseline Survey of Response to Drought
                    </div>
                    <div className="col-2 ">
                      <img className="img-fluid " src={worldVison} alt="" />
                    </div>
                  </div>

                  {/* item 2 */}
                  <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto ">
                    <div className="col-2 text-primary acco-status">
                      <FaCheck className="CheckBtn" />
                    </div>
                    <div className="col-2 text-primary   ps-md-0 acco-date">
                      Sep, <br /> 2018
                    </div>
                    <div className="col-6 acco-dec">
                      Final Evaluation of OFDA Program
                    </div>
                    <div className="col-2 ">
                      <img className="img-fluid " src={saveTheClidren} alt="" />
                    </div>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>

          <div className="mt-5 d-none d-xl-block">
            <Link
              to="/track-record"
              className="custom-button d-none d-xl-inline  w-auto text-decoration-none"
            >
              View More <img src={arrow} alt="" />
            </Link>
          </div>
        </div>

        {/*  ========== right section ========== */}
        <div className="col-12 col-xl-6 trac-right">
          <img
            className="img-fluid w-100 rounded-2 trac-top-image"
            src={galleryOne}
            alt="trac records"
          />
          <Accordion defaultActiveKey="51">
            {/* ============ accordion 2017 =========== */}
            <Accordion.Item eventKey="51">
              <Accordion.Header>
                <h5 className="acco-tittle"> 2017 Track Record</h5>
              </Accordion.Header>
              <Accordion.Body className="bg-secondary p-0 rounded-2">
                <div>
                  <div className="row bg-primary text-white p-2 p-md-3  rounded w-100 mx-auto">
                    <div className="col-2 acco-sub-tittle">Status</div>
                    <div className="col-2 acco-sub-tittle">Date</div>
                    <div className="col-6 acco-sub-tittle">
                      Project Description
                    </div>
                    <div className="col-2 acco-sub-tittle">Client</div>
                  </div>

                  {/* item 1 */}
                  <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto border-bottom border-2  border-black">
                    <div className="col-2 text-primary acco-status">
                      <FaCheck className="CheckBtn" />
                    </div>
                    <div className="col-2 text-primary   ps-md-0 acco-date">
                      Dec, <br />
                      2017
                    </div>
                    <div className="col-6 acco-dec">
                      Prospective Positive Deviance Analysis
                    </div>
                    <div className="col-2 ">
                      <img className="img-fluid " src={saveTheClidren} alt="" />
                    </div>
                  </div>

                  {/* item 2 */}
                  <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto ">
                    <div className="col-2 text-primary acco-status">
                      <FaCheck className="CheckBtn" />
                    </div>
                    <div className="col-2 text-primary   ps-md-0 acco-date">
                      Nov 2017
                    </div>
                    <div className="col-6 acco-dec">
                      Assessment of Knowledge Attitude and Practice
                    </div>
                    <div className="col-2 ">
                      <img className="img-fluid " src={danishGroup} alt="" />
                    </div>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>

            {/* ============ accordion 2016 =========== */}
            <Accordion.Item eventKey="4">
              <Accordion.Header>
                <h5 className="acco-tittle"> 2016 Track Record</h5>
              </Accordion.Header>
              <Accordion.Body className="bg-secondary p-0 rounded-2">
                <div>
                  <div className="row bg-primary text-white p-2 p-md-3  rounded w-100 mx-auto">
                    <div className="col-2 acco-sub-tittle">Status</div>
                    <div className="col-2 acco-sub-tittle">Date</div>
                    <div className="col-6 acco-sub-tittle">
                      Project Description
                    </div>
                    <div className="col-2 acco-sub-tittle">Client</div>
                  </div>

                  {/* item 1 */}
                  <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto border-bottom border-2  border-black">
                    <div className="col-2 text-primary acco-status">
                      <FaCheck className="CheckBtn" />
                    </div>
                    <div className="col-2 text-primary   ps-md-0 acco-date">
                      Dec, <br /> 2016
                    </div>
                    <div className="col-6 acco-dec">
                      Assessment Of Peaceful Coexistence Mechanism for Somali
                      returnees
                    </div>
                    <div className="col-2 ">
                      <img className="img-fluid " src={danishGroup} alt="" />
                    </div>
                  </div>

                  {/* item 2 */}
                  <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto  ">
                    <div className="col-2 text-primary acco-status">
                      <FaCheck className="CheckBtn" />
                    </div>
                    <div className="col-2 text-primary   ps-md-0 acco-date">
                      Nov, <br /> 2016
                    </div>
                    <div className="col-6 acco-dec">
                      Third Part Monitoring of SCI MFA project
                    </div>
                    <div className="col-2 ">
                      <img className="img-fluid " src={saveTheClidren} alt="" />
                    </div>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>

            {/* ============ accordion 2015 =========== */}
            <Accordion.Item eventKey="5">
              <Accordion.Header>
                <h5 className="acco-tittle"> 2015 Track Record</h5>
              </Accordion.Header>
              <Accordion.Body className="bg-secondary p-0 rounded-2">
                <div>
                  <div className="row bg-primary text-white p-2 p-md-3  rounded w-100 mx-auto">
                    <div className="col-2 acco-sub-tittle">Status</div>
                    <div className="col-2 acco-sub-tittle">Date</div>
                    <div className="col-6 acco-sub-tittle">
                      Project Description
                    </div>
                    <div className="col-2 acco-sub-tittle">Client</div>
                  </div>

                  {/* item 1 */}
                  <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto border-bottom border-2  border-black">
                    <div className="col-2 text-primary acco-status">
                      <FaCheck className="CheckBtn" />
                    </div>
                    <div className="col-2 text-primary   ps-md-0 acco-date">
                      2015
                    </div>
                    <div className="col-6 acco-dec">
                      Final evaluation Of HCAP project
                    </div>
                    <div className="col-2 ">
                      <img className="img-fluid " src={finn} alt="" />
                    </div>
                  </div>

                  {/* item 2 */}
                  <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto ">
                    <div className="col-2 text-primary acco-status">
                      <FaCheck className="CheckBtn" />
                    </div>
                    <div className="col-2 text-primary   ps-md-0 acco-date">
                      2015
                    </div>
                    <div className="col-6 acco-dec">
                      Tracer study Of TVET program
                    </div>
                    <div className="col-2 ">
                      <img className="img-fluid " src={saveTheClidren} alt="" />
                    </div>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>

            {/* ============ accordion 2014 =========== */}
            <Accordion.Item eventKey="6">
              <Accordion.Header>
                <h5 className="acco-tittle"> 2014 Track Record</h5>
              </Accordion.Header>
              <Accordion.Body className="bg-secondary p-0 rounded-2">
                <div>
                  <div className="row bg-primary text-white p-2 p-md-3  rounded w-100 mx-auto">
                    <div className="col-2 acco-sub-tittle">Status</div>
                    <div className="col-2 acco-sub-tittle">Date</div>
                    <div className="col-6 acco-sub-tittle">
                      Project Description
                    </div>
                    <div className="col-2 acco-sub-tittle">Client</div>
                  </div>

                  {/* item 1 */}
                  <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto border-bottom border-2  border-black">
                    <div className="col-2 text-primary acco-status">
                      <FaCheck className="CheckBtn" />
                    </div>
                    <div className="col-2 text-primary   ps-md-0 acco-date">
                      2014
                    </div>
                    <div className="col-6 acco-dec">
                      Final Evaluation of Integrated Basic Education support
                    </div>
                    <div className="col-2 ">
                      <img className="img-fluid " src={saveTheClidren} alt="" />
                    </div>
                  </div>

                  {/* item 2 */}
                  <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto ">
                    <div className="col-2 text-primary acco-status">
                      <FaCheck className="CheckBtn" />
                    </div>
                    <div className="col-2 text-primary   ps-md-0 acco-date">
                      2014
                    </div>
                    <div className="col-6 acco-dec">Final Evaluation</div>
                    <div className="col-2 ">
                      <img className="img-fluid " src={nisfoundationn} alt="" />
                    </div>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>

            {/* ============ accordion 2013 =========== */}
            <Accordion.Item eventKey="7">
              <Accordion.Header>
                <h5 className="acco-tittle"> 2013 Track Record</h5>
              </Accordion.Header>
              <Accordion.Body className="bg-secondary p-0 rounded-2">
                <div>
                  <div className="row bg-primary text-white p-2 p-md-3  rounded w-100 mx-auto">
                    <div className="col-2 acco-sub-tittle">Status</div>
                    <div className="col-2 acco-sub-tittle">Date</div>
                    <div className="col-6 acco-sub-tittle">
                      Project Description
                    </div>
                    <div className="col-2 acco-sub-tittle">Client</div>
                  </div>

                  {/* item 1 */}
                  <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto border-bottom border-2  border-black">
                    <div className="col-2 text-primary acco-status">
                      <FaCheck className="CheckBtn" />
                    </div>
                    <div className="col-2 text-primary   ps-md-0 acco-date">
                      2013
                    </div>
                    <div className="col-6 acco-dec">Evaluation Of ECHO</div>
                    <div className="col-2 ">
                      <img className="img-fluid " src={oxfam} alt="" />
                    </div>
                  </div>

                  {/* item 2 */}
                  <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto ">
                    <div className="col-2 text-primary acco-status">
                      <FaCheck className="CheckBtn" />
                    </div>
                    <div className="col-2 text-primary   ps-md-0 acco-date">
                      2013
                    </div>
                    <div className="col-6 acco-dec">
                      Endline Evaluation of Children’s project funded by Care
                    </div>
                    <div className="col-2 ">
                      <img className="img-fluid " src={saveTheClidren} alt="" />
                    </div>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>

            {/* ============ accordion 2012 =========== */}
            <Accordion.Item eventKey="8">
              <Accordion.Header>
                <h5 className="acco-tittle"> 2012 Track Record</h5>
              </Accordion.Header>
              <Accordion.Body className="bg-secondary p-0 rounded-2">
                <div>
                  <div className="row bg-primary text-white p-2 p-md-3  rounded w-100 mx-auto">
                    <div className="col-2 acco-sub-tittle">Status</div>
                    <div className="col-2 acco-sub-tittle">Date</div>
                    <div className="col-6 acco-sub-tittle">
                      Project Description
                    </div>
                    <div className="col-2 acco-sub-tittle">Client</div>
                  </div>
                  {/* item 1 */}
                  <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto border-bottom border-2  border-black">
                    <div className="col-2 text-primary acco-status">
                      <FaCheck className="CheckBtn" />
                    </div>
                    <div className="col-2 text-primary   ps-md-0 acco-date">
                      2012
                    </div>
                    <div className="col-6 acco-dec">
                      Training of Small-scale business management training
                    </div>
                    <div className="col-2 ">
                      {/* <img className="img-fluid " src={oxfam} alt="" /> */}
                      <div>VETERINAIRES</div>
                    </div>
                  </div>

                  {/* item 2 */}
                  <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto ">
                    <div className="col-2 text-primary acco-status">
                      <FaCheck className="CheckBtn" />
                    </div>
                    <div className="col-2 text-primary   ps-md-0 acco-date">
                      2012
                    </div>
                    <div className="col-6 acco-dec">
                      Endline project Evaluation Of FGM/C project
                    </div>
                    <div className="col-2 ">
                      <img className="img-fluid " src={candelight} alt="" />
                    </div>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>

            {/* ============ accordion 2011 =========== */}
            <Accordion.Item eventKey="9">
              <Accordion.Header>
                <h5 className="acco-tittle"> 2011 Track Record</h5>
              </Accordion.Header>
              <Accordion.Body className="bg-secondary p-0 rounded-2">
                <div>
                  <div className="row bg-primary text-white p-2 p-md-3  rounded w-100 mx-auto">
                    <div className="col-2 acco-sub-tittle">Status</div>
                    <div className="col-2 acco-sub-tittle">Date</div>
                    <div className="col-6 acco-sub-tittle">
                      Project Description
                    </div>
                    <div className="col-2 acco-sub-tittle">Client</div>
                  </div>

                  {/* item 1 */}
                  <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto border-bottom border-2  border-black">
                    <div className="col-2 text-primary acco-status">
                      <FaCheck className="CheckBtn" />
                    </div>
                    <div className="col-2 text-primary   ps-md-0 acco-date">
                      2011
                    </div>
                    <div className="col-6 acco-dec">
                      Training (Advocacy, Leadership and Governance) Of IDP and
                      Leadership training
                    </div>
                    <div className="col-2 ">
                      <img className="img-fluid " src={nrc} alt="" />
                    </div>
                  </div>

                  {/* item 2 */}
                  <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto ">
                    <div className="col-2 text-primary acco-status">
                      <FaCheck className="CheckBtn" />
                    </div>
                    <div className="col-2 text-primary   ps-md-0 acco-date">
                      2011
                    </div>
                    <div className="col-6 acco-dec">
                      Moderating Conference Organization
                    </div>
                    <div className="col-2 ">
                      <img className="img-fluid " src={MoWDAFA} alt="" />
                    
                    </div>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <Link
          to="/"
          className="ms-3 mt-3 custom-button d-inline w-auto d-lg-none text-decoration-none"
        >
          View Moree <img className="img-fluid ms-2" src={arrow} alt="" />
        </Link>
      </div>
    </div>
  );
};

export default TrackRecords;
