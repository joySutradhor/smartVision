import React from "react";
import { Accordion } from "react-bootstrap";
import "./Records.css";
import sos from "../../../assets/images/sos.png";
// import sos1 from "../../../assets/images/sos1.png";
// import sos2 from "../../../assets/images/sos7.png";
// import sos3 from "../../../assets/images/sos3.png";
// import sos4 from "../../../assets/images/sos4.png";
// import sos5 from "../../../assets/images/sos5.png";
// import sos6 from "../../../assets/images/sos6.png";
// import sos7 from "../../../assets/images/sos7.png";
// import sos8 from "../../../assets/images/sos8.png";
import divider from "../../../assets/images/divider.png";

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
import theWorldRank from "../../../assets/images/theWorldRank.png";
import worldBankRegional from "../../../assets/images/worldBankRegional.png";
import GaroweMunicipality from "../../../assets/images/GaroweMunicipality.png";
import cooparazione  from "../../../assets/images/cooparazione .png";
import drc  from "../../../assets/images/drc.png";
import ACFf  from "../../../assets/images/ACFf.png";
import Lutheran  from "../../../assets/images/Lutheran.png";
import tass  from "../../../assets/images/tass.png";
import carelogo  from "../../../assets/images/carelogo.png";
import odeso  from "../../../assets/images/odeso.png";
import paswe  from "../../../assets/images/paswe.png";
import grt  from "../../../assets/images/grt.png";
import MoWDAFA  from "../../../assets/images/MoWDAFA.png";
import gavoImg  from "../../../assets/images/gavoImg.png";
import gecpd  from "../../../assets/images/gecpd.png";
import education  from "../../../assets/images/education.png";
import SIRC  from "../../../assets/images/SIRC.png";
import { FaCheck } from "react-icons/fa6";

// import oxfam from "../../../assets/images/2013/oxfam.webp";

const Records = () => {
  return (
    <div>
      {/* ================= accordion section ================= */}
      <div className="mt-md-5 py-5 containe record">
        <Accordion defaultActiveKey="1">

          <Accordion.Item eventKey="1">
            <Accordion.Header className="">
              <h5 className="trac-tittle">2024</h5>
            </Accordion.Header>
            <Accordion.Body className="bg-secondary p-0">
              <div className="d-lg-flex">
                {/* =========== left section =========== */}
                <div className="bg-secondary col-12 col-lg-5">
                  <div>
                    <div className="row bg-primary text-white p-2 p-md-3  rounded w-100 mx-auto">
                      <div className="col-2 acco-sub-tittle">Status</div>
                      <div className="col-2  acco-sub-tittle">Date</div>
                      <div className="col-6 acco-sub-tittle">
                        Project Description
                      </div>
                      <div className="col-2 acco-sub-tittle-page">Client</div>
                    </div>

                    {/* item 1 */}
                    <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto border-bottom border-2  border-black ">
                      <div className="col-2 text-primary acco-status">
                        <FaCheck className="CheckBtn" />
                      </div>
                      <div className="col-2 text-primary   ps-md-0 acco-date">
                        Jun, <br />2024
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
                    <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto">
                      <div className="col-2 text-primary acco-status">
                        <FaCheck className="CheckBtn" />
                      </div>
                      <div className="col-2 text-primary   ps-md-0 acco-date">
                        May, <br />2024
                      </div>
                      <div className="col-6 acco-dec">
                        Climate and health vulnerability and adaptation assessment
                      </div>
                      <div className="col-2 ">
                        <img className="img-fluid " src={iqarus} alt="" />
                      </div>
                    </div>
                  </div>
                </div>



                {/* ====== middle section ====== */}
                <div className="bg-white d-flex justify-content-center col-lg-2 ">
                  <div className="d-none d-lg-block divider"></div>
                </div>
                {/* ====== right section ========= */}
                <div className="bg-secondary col-12 col-lg-5">
                  <div>
                    <div className="d-none d-lg-block">
                      <div className="row bg-primary text-white p-2 p-md-3  rounded w-100 mx-auto ">
                        <div className="col-2 acco-sub-tittle">Status</div>
                        <div className="col-2 acco-sub-tittle">Date</div>
                        <div className="col-6 acco-sub-tittle">
                          Project Description
                        </div>
                        <div className="col-2 acco-sub-tittle">Client</div>
                      </div>
                    </div>
                    {/* ====== right item 1========== */}
                    <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto border-bottom border-2  border-black">
                      <div className="col-2 text-primary acco-status">
                        <FaCheck className="CheckBtn" />
                      </div>
                      <div className="col-2 text-primary   ps-md-0 acco-date">Jan,<br /> 2024</div>
                      <div className="col-6 acco-dec">
                        Final Evaluation of BHA-3
                      </div>
                      <div className="col-2 ">
                        {/* <img className="img-fluid " src={unicef} alt="" />
                        <img className="img-fluid " src={advisory} alt="" /> */}
                        {/* SCI International */}
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>


          {/* ============= 2023 ================= */}
          <Accordion.Item eventKey="2">
            <Accordion.Header className="">
              <h5 className="trac-tittle">2023</h5>
            </Accordion.Header>
            <Accordion.Body className="bg-secondary p-0">
              <div className="d-lg-flex">
                {/* =========== left section =========== */}
                <div className="bg-secondary col-12 col-lg-5">
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
                        Nov, <br />2023
                      </div>
                      <div className="col-6 acco-dec">National WASH assessment
                      </div>
                      <div className="col-2 ">
                        <img className="img-fluid " src={unicef} alt="" />
                        <img className="img-fluid " src={advisory} alt="" />
                        
                      </div>
                    </div>

                    {/* item 2 */}
                    <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto border-bottom border-2  border-black">
                      <div className="col-2 text-primary acco-status">
                        <FaCheck className="CheckBtn" />
                      </div>
                      <div className="col-2 text-primary   ps-md-0 acco-date">
                        Oct,<br />2023
                      </div>
                      <div className="col-6 acco-dec">

                        Final Evaluation for HoA program
                      </div>
                      <div className="col-2 ">
                        <img className="img-fluid " src={sos} alt="" />
                      </div>
                    </div>

                    {/* item 3 */}
                    <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto border-bottom border-2  border-black">
                      <div className="col-2 text-primary acco-status">
                        <FaCheck className="CheckBtn" />
                      </div>
                      <div className="col-2 text-primary   ps-md-0 acco-date">
                        Aug,<br />2023
                      </div>
                      <div className="col-6 acco-dec">
                        Local Economic Development Assessment
                      </div>
                      <div className="col-2 ">
                        <img className="img-fluid " src={ilo} alt="" />
                      
                      </div>
                    </div>

                    {/* item 4 */}
                    <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto ">
                      <div className="col-2 text-primary acco-status">
                        <FaCheck className="CheckBtn" />
                      </div>
                      <div className="col-2 text-primary   ps-md-0 acco-date">
                        Aug,<br />2023
                      </div>
                      <div className="col-6 acco-dec">
                        Policy and Strategy review (2023-2025)
                      </div>
                      <div className="col-2 ">
                        <img className="img-fluid " src={PunsaaWeblogo} alt="" />
                      </div>
                    </div>
                  </div>
                </div>


                {/* ====== middle section ====== */}
                <div className="bg-white d-flex justify-content-center col-lg-2 ">
                  <div className="d-none d-lg-block divider"></div>
                </div>

                {/* ====== right section ========= */}
                <div className="bg-secondary col-12 col-lg-5 ">
                  <div>
                    <div className="d-none d-lg-block">
                      <div className="row bg-primary text-white p-2 p-md-3  rounded w-100 mx-auto ">
                        <div className="col-2 acco-sub-tittle">Status</div>
                        <div className="col-2 acco-sub-tittle">Date</div>
                        <div className="col-6 acco-sub-tittle">
                          Project Description
                        </div>
                        <div className="col-2 acco-sub-tittle">Client</div>
                      </div>
                    </div>

                    {/* ====== right item 1========== */}
                    <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto border-bottom border-2  border-black">
                      <div className="col-2 text-primary acco-status">
                        <FaCheck className="CheckBtn" />
                      </div>
                      <div className="col-2 text-primary   ps-md-0 acco-date">June,<br />2023</div>
                      <div className="col-6 acco-dec">
                        Mid Term Review Democracy, Human Rights and Resilience
                        (DHRR)
                      </div>
                      <div className="col-2 ">
                        <img className="img-fluid " src={diakonia} alt="" />
                      </div>
                    </div>

                    {/* ========= right 2 =========== */}
                    <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto border-bottom border-2  border-black">
                      <div className="col-2 text-primary acco-status">
                        <FaCheck className="CheckBtn" />
                      </div>
                      <div className="col-2 text-primary   ps-md-0 acco-date">May,<br />2023</div>
                      <div className="col-6 acco-dec">
                        Final Evaluation Expanding Civic Space, Empowering Youth and
                        Women to Contribute to the Governance and Development
                        processes.
                      </div>
                      <div className="col-2 ">
                        <img className="img-fluid " src={SOYDAVO} alt="" />
                      </div>
                    </div>

                    {/* ========= right 3 =========== */}
                    <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto border-bottom border-2  border-black">
                      <div className="col-2 text-primary acco-status">
                        <FaCheck className="CheckBtn" />
                      </div>
                      <div className="col-2 text-primary   ps-md-0 acco-date">Mar,<br />2023</div>
                      <div className="col-6 acco-dec">
                        Endline evaluation of BHA-II
                      </div>
                      <div className="col-2 ">
                        <img className="img-fluid " src={saveTheClidren} alt="" />
                      </div>
                    </div>


                    {/* ========= right 4 =========== */}
                    <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto ">
                      <div className="col-2 text-primary acco-status">
                        <FaCheck className="CheckBtn" />
                      </div>
                      <div className="col-2 text-primary   ps-md-0 acco-date">Jan,<br />2023</div>
                      <div className="col-6 acco-dec">
                        Baseline Assessment of Urban Food Security Project
                      </div>
                      <div className="col-2 ">
                        <img className="img-fluid " src={DeutscheGesellschaftfurInternationaleZusammenarbeit} alt="" />
                      </div>
                    </div>


                  </div>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>


          {/* =========================== 2022 ================ */}
          <Accordion.Item eventKey="3">
            <Accordion.Header className="">
              <h5 className="trac-tittle">2022</h5>
            </Accordion.Header>
            <Accordion.Body className="bg-secondary p-0">
              <div className="d-lg-flex">
                {/* =========== left section =========== */}
                <div className="bg-secondary col-12 col-lg-5">
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
                        Nov <br />2022
                      </div>
                      <div className="col-6 acco-dec">
                        Midterm evaluation of FFO NEXUS Project
                      </div>
                      <div className="col-2 ">
                        <img className="img-fluid " src={saveTheClidren} alt="" />
                      </div>
                    </div>

                    {/* greedo */}
                    {/* item 2 */}
                    <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto border-bottom border-2  border-black">
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

                    {/* item 3 */}
                    <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto ">
                      <div className="col-2 text-primary acco-status">
                        <FaCheck className="CheckBtn" />
                      </div>
                      <div className="col-2 text-primary   ps-md-0 acco-date">
                        Oct,<br />2022
                      </div>
                      <div className="col-6 acco-dec">
                        Baseline Survey (Drought Assessment)
                      </div>
                      <div className="col-2 ">
                        <img className="img-fluid " src={greedo} alt="" />
                        {/* <img className="img-fluid mt-1" src={ACEF} alt="" /> */}
                      </div>
                    </div>
                  </div>
                </div>


                {/* ====== middle section ====== */}
                <div className="bg-white d-flex justify-content-center col-lg-2 ">
                  <div className="d-none d-lg-block divider"></div>
                </div>

                {/* ====== right section ========= */}
                <div className="bg-secondary col-12 col-lg-5 ">
                  <div>
                    <div className="d-none d-lg-block">
                      <div className="row bg-primary text-white p-2 p-md-3  rounded w-100 mx-auto ">
                        <div className="col-2 acco-sub-tittle">Status</div>
                        <div className="col-2 acco-sub-tittle">Date</div>
                        <div className="col-6 acco-sub-tittle">
                          Project Description
                        </div>
                        <div className="col-2 acco-sub-tittle">Client</div>
                      </div>
                    </div>
                    {/* ====== right item 1========== */}
                    <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto border-bottom border-2  border-black">
                      <div className="col-2 text-primary acco-status">
                        <FaCheck className="CheckBtn" />
                      </div>
                      <div className="col-2 text-primary   ps-md-0 acco-date">Apr,<br /> 2022</div>
                      <div className="col-6 acco-dec">
                        Long Term project (2.3 years) Of Agricultural production and
                        quality Assurance (SPQA)
                      </div>
                      <div className="col-2 ">
                        <img className="img-fluid " src={DeutscheGesellschaftfurInternationaleZusammenarbeit} alt="" />
                        
                      </div>
                    </div>

                    {/* ========= right 2 =========== */}
                    <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto border-bottom border-2  border-black">
                      <div className="col-2 text-primary acco-status">
                        <FaCheck className="CheckBtn" />
                      </div>
                      <div className="col-2 text-primary   ps-md-0 acco-date">Mar,<br />2022</div>
                      <div className="col-6 acco-dec">
                        Due Diligence (Batch 3 assessed 8 companies) of REACT
                        program
                      </div>
                      <div className="col-2 ">
                        <img className="img-fluid mt-1" src={ACEF} alt="" />
                        <img className="img-fluid " src={advisory} alt="" />
                        
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>


          {/* =========================== 2021 ================ */}
          <Accordion.Item eventKey="4">
            <Accordion.Header className="">
              <h5 className="trac-tittle">2021</h5>
            </Accordion.Header>
            <Accordion.Body className="bg-secondary p-0">
              <div className="d-lg-flex">
                {/* =========== left section =========== */}
                <div className="bg-secondary col-12 col-lg-5">
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
                        Nov, <br />2021
                      </div>
                      <div className="col-6 acco-dec">
                        Due Diligence (Batch 2 assessed 8 companies) Of REACT
                        program
                      </div>
                      <div className="col-2 ">
                        <img className="img-fluid " src={advisory} alt="" />
                        {/* <img className="img-fluid " src={download} alt="" /> */}
                        {/* <div>EED / ECF</div> */}
                      </div>
                    </div>

                    {/* item 2 */}
                    <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto border-bottom border-2  border-black">
                      <div className="col-2 text-primary acco-status">
                        <FaCheck className="CheckBtn" />
                      </div>
                      <div className="col-2 text-primary   ps-md-0 acco-date">
                        Oct, <br />2021
                      </div>
                      <div className="col-6 acco-dec">
                        Wash in schools Assessment
                      </div>
                      <div className="col-2 ">
                        <img className="img-fluid " src={saveTheClidren} alt="" />
                      </div>
                    </div>

                    {/* item 3 */}
                    <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto  border-bottom border-2  border-black">
                      <div className="col-2 text-primary acco-status">
                        <FaCheck className="CheckBtn" />
                      </div>
                      <div className="col-2 text-primary   ps-md-0 acco-date">
                        Oct,<br />2021
                      </div>
                      <div className="col-6 acco-dec">
                        Third part monitoring   of FFO Nexus
                      </div>
                      <div className="col-2 ">
                        <img className="img-fluid " src={saveTheClidren} alt="" />

                      </div>
                    </div>


                    {/* item 4 */}
                    <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto  border-bottom border-2  border-black">
                      <div className="col-2 text-primary acco-status">
                        <FaCheck className="CheckBtn" />
                      </div>
                      <div className="col-2 text-primary   ps-md-0 acco-date">
                        July,<br />2021
                      </div>
                      <div className="col-6 acco-dec">
                        Third part monitoring for REEVs program
                      </div>
                      <div className="col-2 ">
                        <img className="img-fluid " src={saveTheClidren} alt="" />

                      </div>
                    </div>

                    {/* candelight */}
                    {/* item 5 */}
                    <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto ">
                      <div className="col-2 text-primary acco-status">
                        <FaCheck className="CheckBtn" />
                      </div>
                      <div className="col-2 text-primary   ps-md-0 acco-date">
                        June,<br />2021
                      </div>
                      <div className="col-6 acco-dec">

                        Endline Evaluation of Emergency Cash Transfer and Resilience
                        building project
                      </div>
                      <div className="col-2 ">
                        <img className="img-fluid " src={candelight} alt="" />


                      </div>
                    </div>

                  </div>
                </div>


                {/* ====== middle section ====== */}
                <div className="bg-white d-flex justify-content-center col-lg-2 ">
                  <div className="d-none d-lg-block divider"></div>
                </div>

                {/* ====== right section ========= */}
                <div className="bg-secondary col-12 col-lg-5 ">
                  <div>
                    <div className="d-none d-lg-block">
                      <div className="row bg-primary text-white p-2 p-md-3  rounded w-100 mx-auto ">
                        <div className="col-2 acco-sub-tittle">Status</div>
                        <div className="col-2 acco-sub-tittle">Date</div>
                        <div className="col-6 acco-sub-tittle">
                          Project Description
                        </div>
                        <div className="col-2 acco-sub-tittle">Client</div>
                      </div>
                    </div>
                    {/* ====== right item 1========== */}
                    <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto border-bottom border-2  border-black">
                      <div className="col-2 text-primary acco-status">
                        <FaCheck className="CheckBtn" />
                      </div>
                      <div className="col-2 text-primary   ps-md-0 acco-date">May,<br />2021</div>
                      <div className="col-6 acco-dec">
                        Third part monitoring Of Luglow project
                      </div>
                      <div className="col-2 ">
                        <img className="img-fluid " src={DeutscheGesellschaftfurInternationaleZusammenarbeit} alt="" />
                      </div>
                    </div>

                    {/* ========= right 2 =========== */}
                    <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto border-bottom border-2  border-black">
                      <div className="col-2 text-primary acco-status">
                        <FaCheck className="CheckBtn" />
                      </div>
                      <div className="col-2 text-primary   ps-md-0 acco-date">Apr,<br />2021</div>
                      <div className="col-6 acco-dec">
                        Rapid Needs Assessment
                      </div>
                      <div className="col-2 ">
                        <img className="img-fluid " src={finredcross} alt="" />
                        
                      </div>
                    </div>

                    {/* ========= right 3 =========== */}
                    <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto border-bottom border-2  border-black">
                      <div className="col-2 text-primary acco-status">
                        <FaCheck className="CheckBtn" />
                      </div>
                      <div className="col-2 text-primary   ps-md-0 acco-date">Mar,<br />2021</div>
                      <div className="col-6 acco-dec">
                        Institutionalization, reorganization, modernization and change Of
                        Puntland office of the president under World Bank funded
                        capacity injection project
                      </div>
                      <div className="col-2 ">
                        <img className="img-fluid " src={danishGroup} alt="" />
                        <img className="img-fluid " src={theWorldRank} alt="" />
                      </div>
                    </div>

                    {/* ========= right 4 =========== */}
                    <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto border-bottom border-2  border-black">
                      <div className="col-2 text-primary acco-status">
                        <FaCheck className="CheckBtn" />
                      </div>
                      <div className="col-2 text-primary   ps-md-0 acco-date">Mar,<br />2021</div>
                      <div className="col-6 acco-dec">
                        Due Diligence (25 Somali Companies) Of REACT SSA
                      </div>
                      <div className="col-2 ">
                        <img className="img-fluid " src={advisory} alt="" />
                        
                      </div>
                    </div>


                    {/* ========= right 5 =========== */}
                    <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto ">
                      <div className="col-2 text-primary acco-status">
                        <FaCheck className="CheckBtn" />
                      </div>
                      <div className="col-2 text-primary   ps-md-0 acco-date">Mar,<br />2021</div>
                      <div className="col-6 acco-dec">
                        Conflict Analysis and Covid 19 Peace influence and Women
                        Protection Needs
                      </div>
                      <div className="col-2 ">
                        <img className="img-fluid " src={danishGroup} alt="" />
                        
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>



          {/* =========================== 2020 ================ */}
          <Accordion.Item eventKey="5">
            <Accordion.Header className="">
              <h5 className="trac-tittle">2020</h5>
            </Accordion.Header>
            <Accordion.Body className="bg-secondary p-0">
              <div className="d-lg-flex">
                {/* =========== left section =========== */}
                <div className="bg-secondary col-12 col-lg-5">
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

                    {/* item 3 */}
                    <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto ">
                      <div className="col-2 text-primary acco-status">
                        <FaCheck className="CheckBtn" />
                      </div>
                      <div className="col-2 text-primary   ps-md-0 acco-date">
                        Nov, <br /> 2020
                      </div>
                      <div className="col-6 acco-dec">
                        Conflict Analysis Water Conflict and Social Cohesion of DRC
                        water projects
                      </div>
                      <div className="col-2 ">
                        <img className="img-fluid " src={danishGroup} alt="" />
                        
                      </div>
                    </div>

                  </div>
                </div>


                {/* ====== middle section ====== */}
                <div className="bg-white d-flex justify-content-center col-lg-2 ">
                  <div className="d-none d-lg-block divider"></div>
                </div>

                {/* ====== right section ========= */}
                <div className="bg-secondary col-12 col-lg-5 ">
                  <div>
                    <div className="d-none d-lg-block">
                      <div className="row bg-primary text-white p-2 p-md-3  rounded w-100 mx-auto ">
                        <div className="col-2 acco-sub-tittle">Status</div>
                        <div className="col-2 acco-sub-tittle">Date</div>
                        <div className="col-6 acco-sub-tittle">
                          Project Description
                        </div>
                        <div className="col-2 acco-sub-tittle">Client</div>
                      </div>
                    </div>
                    {/* ====== right item 1========== */}
                    <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto border-bottom border-2  border-black">
                      <div className="col-2 text-primary acco-status">
                        <FaCheck className="CheckBtn" />
                      </div>
                      <div className="col-2 text-primary   ps-md-0 acco-date">Oct,<br />2020</div>
                      <div className="col-6 acco-dec">
                        Final Evaluation of Althani Project
                      </div>
                      <div className="col-2 ">
                        <img className="img-fluid " src={saveTheClidren} alt="" />
                      </div>
                    </div>

                    {/* ====== right item 2========== */}
                    <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto border-bottom border-2  border-black">
                      <div className="col-2 text-primary acco-status">
                        <FaCheck className="CheckBtn" />
                      </div>
                      <div className="col-2 text-primary   ps-md-0 acco-date">Sep,<br />2020</div>
                      <div className="col-6 acco-dec">
                        Fragility Index and Maturity (FIMM) Of Not specific project
                      </div>
                      <div className="col-2 ">
                        <img className="img-fluid " src={diakonia} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>


          {/* =========================== 2019 ================ */}
          <Accordion.Item eventKey="6">
            <Accordion.Header className="">
              <h5 className="trac-tittle">2019</h5>
            </Accordion.Header>
            <Accordion.Body className="bg-secondary p-0">
              <div className="d-lg-flex">
                {/* =========== left section =========== */}
                <div className="bg-secondary col-12 col-lg-5">
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
                    <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto border-bottom border-2  border-black ">
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

                    {/* item 3 */}
                    <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto border-bottom border-2  border-black">
                      <div className="col-2 text-primary acco-status">
                        <FaCheck className="CheckBtn" />
                      </div>
                      <div className="col-2 text-primary   ps-md-0 acco-date">
                        Oct <br /> 2019
                      </div>
                      <div className="col-6 acco-dec">
                        Baseline Survey of SURP Project
                      </div>
                      <div className="col-2 ">
                        {/* <img className="img-fluid " src={saveTheClidren} alt="" /> */}
                        <img className="img-fluid " src={GaroweMunicipality} alt="" />
                        <img className="img-fluid " src={theWorldRank} alt="" />
                        
                      </div>
                    </div>

                    {/* item 4 */}
                    <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto border-bottom border-2  border-black">
                      <div className="col-2 text-primary acco-status">
                        <FaCheck className="CheckBtn" />
                      </div>
                      <div className="col-2 text-primary   ps-md-0 acco-date">
                        Oct, <br /> 2019
                      </div>
                      <div className="col-6 acco-dec">
                        Baseline Survey of SURP Banaadir
                      </div>
                      <div className="col-2 ">
                        <img className="img-fluid " src={theWorlRank} alt="" />
                        {/* <div>World Bank/ BRA</div> */}
                      </div>
                    </div>

                    {/* item 5 */}
                    <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto ">
                      <div className="col-2 text-primary acco-status">
                        <FaCheck className="CheckBtn" />
                      </div>
                      <div className="col-2 text-primary   ps-md-0 acco-date">
                        Sep, <br /> 2019
                      </div>
                      <div className="col-6 acco-dec">

                        Third Part Monitoring of Family Strengthening through Cash
                        Transfer and Child Protection
                      </div>
                      <div className="col-2 ">
                        <img className="img-fluid " src={saveTheClidren} alt="" />
                      </div>
                    </div>
                  </div>
                </div>


                {/* ====== middle section ====== */}
                <div className="bg-white d-flex justify-content-center col-lg-2 ">
                  <div className="d-none d-lg-block divider"></div>
                </div>

                {/* ====== right section ========= */}
                <div className="bg-secondary col-12 col-lg-5 ">
                  <div>
                    <div className="d-none d-lg-block">
                      <div className="row bg-primary text-white p-2 p-md-3  rounded w-100 mx-auto ">
                        <div className="col-2 acco-sub-tittle">Status</div>
                        <div className="col-2 acco-sub-tittle">Date</div>
                        <div className="col-6 acco-sub-tittle">
                          Project Description
                        </div>
                        <div className="col-2 acco-sub-tittle">Client</div>
                      </div>
                    </div>
                    {/* ====== right item 1========== */}
                    <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto border-bottom border-2  border-black">
                      <div className="col-2 text-primary acco-status">
                        <FaCheck className="CheckBtn" />
                      </div>
                      <div className="col-2 text-primary   ps-md-0 acco-date">June, <br />2019</div>
                      <div className="col-6 acco-dec">
                        Endline Evaluation of Integrated Humanitarian Assistance
                      </div>
                      <div className="col-2 ">
                        <img className="img-fluid " src={saveTheClidren} alt="" />
                      </div>
                    </div>


                    {/* ====== right item 2========== */}
                    <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto border-bottom border-2  border-black">
                      <div className="col-2 text-primary acco-status">
                        <FaCheck className="CheckBtn" />
                      </div>
                      <div className="col-2 text-primary   ps-md-0 acco-date">Apr, <br />2019</div>
                      <div className="col-6 acco-dec">
                        Final Evaluation of Democratic Governance Program
                      </div>
                      <div className="col-2 ">
                        <img className="img-fluid " src={diakonia} alt="" />
                      </div>
                    </div>


                    {/* ====== right item 3========== */}
                    <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto border-bottom border-2  border-black">
                      <div className="col-2 text-primary acco-status">
                        <FaCheck className="CheckBtn" />
                      </div>
                      <div className="col-2 text-primary   ps-md-0 acco-date">Mar, <br /> 2019</div>
                      <div className="col-6 acco-dec">
                        Conflict Assessment and Political Feasibility of Nabad iyo Amin
                      </div>
                      <div className="col-2 ">
                        <img className="img-fluid " src={danishGroup} alt="" />
                        
                      </div>
                    </div>

                    {/* ====== right item 4========== */}
                    <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto border-bottom border-2  border-black">
                      <div className="col-2 text-primary acco-status">
                        <FaCheck className="CheckBtn" />
                      </div>
                      <div className="col-2 text-primary   ps-md-0 acco-date">Mar, <br />2019</div>
                      <div className="col-6 acco-dec">
                        Final Evaluation of DIALOGUE project
                      </div>
                      <div className="col-2 ">
                        <img className="img-fluid " src={danishGroup} alt="" />
                        
                      </div>
                    </div>


                    {/* ====== right item 5========== */}
                    <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto ">
                      <div className="col-2 text-primary acco-status">
                        <FaCheck className="CheckBtn" />
                      </div>
                      <div className="col-2 text-primary   ps-md-0 acco-date">Jan, <br /> 2019</div>
                      <div className="col-6 acco-dec">
                        External Evaluation Of Integrated Health, Nutrition, WASH and
                        Agriculture and Food Security Program
                      </div>
                      <div className="col-2 ">
                        <img className="img-fluid " src={MercyUSA} alt="" />
                      </div>
                    </div>



                  </div>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>



          {/* =========================== 2018 ================ */}
          <Accordion.Item eventKey="7">
            <Accordion.Header className="">
              <h5 className="trac-tittle">2018</h5>
            </Accordion.Header>
            <Accordion.Body className="bg-secondary p-0">
              <div className="d-lg-flex">
                {/* =========== left section =========== */}
                <div className="bg-secondary col-12 col-lg-5">
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
                    <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto border-bottom border-2  border-black ">
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

                    {/* item 3 */}
                    <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto border-bottom border-2  border-black">
                      <div className="col-2 text-primary acco-status">
                        <FaCheck className="CheckBtn" />
                      </div>
                      <div className="col-2 text-primary   ps-md-0 acco-date">
                        June, <br />2018
                      </div>
                      <div className="col-6 acco-dec">
                        Midterm Evaluation of Democratic Governance Project
                      </div>
                      <div className="col-2 ">
                        <img className="img-fluid " src={diakonia} alt="" />
                      </div>
                    </div>

                    {/* item 4 */}
                    <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto">
                      <div className="col-2 text-primary acco-status">
                        <FaCheck className="CheckBtn" />
                      </div>
                      <div className="col-2 text-primary   ps-md-0 acco-date">
                        May, <br /> 2018
                      </div>
                      <div className="col-6 acco-dec">
                        Final Evaluation Of  OFDA
                      </div>
                      <div className="col-2 ">
                        <img className="img-fluid " src={worldVison} alt="" />
                      </div>
                    </div>


                  </div>
                </div>


                {/* ====== middle section ====== */}
                <div className="bg-white d-flex justify-content-center col-lg-2 ">
                  <div className="d-none d-lg-block divider"></div>
                </div>

                {/* ====== right section ========= */}
                <div className="bg-secondary col-12 col-lg-5 ">
                  <div>
                    <div className="d-none d-lg-block">
                      <div className="row bg-primary text-white p-2 p-md-3  rounded w-100 mx-auto ">
                        <div className="col-2 acco-sub-tittle">Status</div>
                        <div className="col-2 acco-sub-tittle">Date</div>
                        <div className="col-6 acco-sub-tittle">
                          Project Description
                        </div>
                        <div className="col-2 acco-sub-tittle">Client</div>
                      </div>
                    </div>

                    {/* Right one */}
                    <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto border-bottom border-2  border-black ">
                      <div className="col-2 text-primary acco-status">
                        <FaCheck className="CheckBtn" />
                      </div>
                      <div className="col-2 text-primary   ps-md-0 acco-date">
                        Mar, <br /> 2018
                      </div>
                      <div className="col-6 acco-dec">
                        TVET Tracer Study Of Waxbarashadu waa Iftiin
                      </div>
                      <div className="col-2 ">
                        <img className="img-fluid " src={saveTheClidren} alt="" />
                      </div>
                    </div>


                    {/* ====== right item 2========== */}
                    <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto border-bottom border-2  border-black">
                      <div className="col-2 text-primary acco-status">
                        <FaCheck className="CheckBtn" />
                      </div>
                      <div className="col-2 text-primary   ps-md-0 acco-date">Feb, <br /> 2018</div>
                      <div className="col-6 acco-dec">
                        Endline Evaluation Of KAP
                      </div>
                      <div className="col-2 ">
                        <img className="img-fluid " src={danishGroup} alt="" />
                      </div>
                    </div>


                    {/* ====== right item 3========== */}
                    <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto border-bottom border-2  border-black">
                      <div className="col-2 text-primary acco-status">
                        <FaCheck className="CheckBtn" />
                      </div>
                      <div className="col-2 text-primary   ps-md-0 acco-date">Feb, <br /> 2018</div>
                      <div className="col-6 acco-dec">
                        Third Party Monitoring Of OFDA
                      </div>
                      <div className="col-2 ">
                        <img className="img-fluid " src={worldVison} alt="" />
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>


          {/* =========================== 2017 ================ */}
          <Accordion.Item eventKey="8">
            <Accordion.Header className="">
              <h5 className="trac-tittle">2017</h5>
            </Accordion.Header>
            <Accordion.Body className="bg-secondary p-0">
              <div className="d-lg-flex">
                {/* =========== left section =========== */}
                <div className="bg-secondary col-12 col-lg-5">
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
                        Dec, <br />2017
                      </div>
                      <div className="col-6 acco-dec">
                        Prospective Positive Deviance Analysis
                      </div>
                      <div className="col-2 ">
                        <img className="img-fluid " src={saveTheClidren} alt="" />
                      </div>
                    </div>

                    {/* item 2 */}
                    <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto border-bottom border-2  border-black ">
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

                    {/* item 3 */}
                    <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto">
                      <div className="col-2 text-primary acco-status">
                        <FaCheck className="CheckBtn" />
                      </div>
                      <div className="col-2 text-primary   ps-md-0 acco-date">
                        Aug, <br />2017
                      </div>
                      <div className="col-6 acco-dec">
                        Impact assessment of SomRep Phase I
                      </div>
                      <div className="col-2 ">
                        <img className="img-fluid " src={worldVison} alt="" />
                        <img className="img-fluid " src={drc} alt="" />
                        <img className="img-fluid " src={cooparazione} alt="" />
                 

                      </div>
                    </div>
                  </div>
                </div>


                {/* ====== middle section ====== */}
                <div className="bg-white d-flex justify-content-center col-lg-2 ">
                  <div className="d-none d-lg-block divider"></div>
                </div>

                {/* ====== right section ========= */}
                <div className="bg-secondary col-12 col-lg-5 ">
                  <div>
                    <div className="d-none d-lg-block">
                      <div className="row bg-primary text-white p-2 p-md-3  rounded w-100 mx-auto ">
                        <div className="col-2 acco-sub-tittle">Status</div>
                        <div className="col-2 acco-sub-tittle">Date</div>
                        <div className="col-6 acco-sub-tittle">
                          Project Description
                        </div>
                        <div className="col-2 acco-sub-tittle">Client</div>
                      </div>
                    </div>

                    {/* Right one */}
                    <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto border-bottom border-2  border-black ">
                      <div className="col-2 text-primary acco-status">
                        <FaCheck className="CheckBtn" />
                      </div>
                      <div className="col-2 text-primary   ps-md-0 acco-date">
                        July, <br /> 2017
                      </div>
                      <div className="col-6 acco-dec">
                        Third part Monitoring of SCI integrated project
                      </div>
                      <div className="col-2 ">
                        <img className="img-fluid " src={saveTheClidren} alt="" />
                      </div>
                    </div>


                    {/* ====== right item 2========== */}
                    <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto border-bottom border-2  border-black">
                      <div className="col-2 text-primary acco-status">
                        <FaCheck className="CheckBtn" />
                      </div>
                      <div className="col-2 text-primary   ps-md-0 acco-date">
                        May,<br />2017</div>
                      <div className="col-6 acco-dec">
                        WASH Assessment
                      </div>
                      <div className="col-2 ">
                        <img className="img-fluid " src={saveTheClidren} alt="" />
                      </div>
                    </div>


                    {/* ====== right item 3========== */}
                    <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto ">
                      <div className="col-2 text-primary acco-status">
                        <FaCheck className="CheckBtn" />
                      </div>
                      <div className="col-2 text-primary   ps-md-0 acco-date">Apr, <br /> 2017</div>
                      <div className="col-6 acco-dec">
                        KAP Assessment of IYCF Wash project
                      </div>
                      <div className="col-2 ">
                        <img className="img-fluid " src={saveTheClidren} alt="" />
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>


          {/* =========================== 2016 ================ */}
          <Accordion.Item eventKey="9">
            <Accordion.Header className="">
              <h5 className="trac-tittle">2016</h5>
            </Accordion.Header>
            <Accordion.Body className="bg-secondary p-0">
              <div className="d-lg-flex">
                {/* =========== left section =========== */}
                <div className="bg-secondary col-12 col-lg-5">
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
                    <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto border-bottom border-2  border-black ">
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

                    {/* item 3 */}
                    <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto">
                      <div className="col-2 text-primary acco-status">
                        <FaCheck className="CheckBtn" />
                      </div>
                      <div className="col-2 text-primary   ps-md-0 acco-date">
                        Oct, <br />2016
                      </div>
                      <div className="col-6 acco-dec">
                        Final Evaluation of Youth Enterprise Initiation in Somalia
                      </div>
                      <div className="col-2 ">
                        <img className="img-fluid " src={shaqadoon} alt="" />

                      </div>
                    </div>
                  </div>
                </div>


                {/* ====== middle section ====== */}
                <div className="bg-white d-flex justify-content-center col-lg-2 ">
                  <div className="d-none d-lg-block divider"></div>
                </div>

                {/* ====== right section ========= */}
                <div className="bg-secondary col-12 col-lg-5 ">
                  <div>
                    <div className="d-none d-lg-block">
                      <div className="row bg-primary text-white p-2 p-md-3  rounded w-100 mx-auto ">
                        <div className="col-2 acco-sub-tittle">Status</div>
                        <div className="col-2 acco-sub-tittle">Date</div>
                        <div className="col-6 acco-sub-tittle">
                          Project Description
                        </div>
                        <div className="col-2 acco-sub-tittle">Client</div>
                      </div>
                    </div>

                    {/* Right one */}
                    <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto border-bottom border-2  border-black ">
                      <div className="col-2 text-primary acco-status">
                        <FaCheck className="CheckBtn" />
                      </div>
                      <div className="col-2 text-primary   ps-md-0 acco-date">
                        Aug, <br />2016
                      </div>
                      <div className="col-6 acco-dec">
                        Final Evaluation of WASH project UNICEF
                      </div>
                      <div className="col-2 ">
                        <img className="img-fluid " src={unicef} alt="" />
                      </div>
                    </div>


                    {/* ====== right item 2========== */}
                    <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto border-bottom border-2  border-black">
                      <div className="col-2 text-primary acco-status">
                        <FaCheck className="CheckBtn" />
                      </div>
                      <div className="col-2 text-primary   ps-md-0 acco-date">
                        Jun, <br />2016</div>
                      <div className="col-6 acco-dec">
                        Final evaluation of WASH and protection project
                      </div>
                      <div className="col-2 ">
                        <img className="img-fluid " src={danishGroup} alt="" />
                      </div>
                    </div>


                    {/* ====== right item 3========== */}
                    <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto ">
                      <div className="col-2 text-primary acco-status">
                        <FaCheck className="CheckBtn" />
                      </div>
                      <div className="col-2 text-primary   ps-md-0 acco-date">May,<br /> 2016</div>
                      <div className="col-6 acco-dec">
                        Accountability Assessment of Acute Malnutrition
                      </div>
                      <div className="col-2 ">
                        <img className="img-fluid " src={ACFf} alt="" />
                        
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>

          {/* =========================== 2015 ================ */}
          <Accordion.Item eventKey="10">
            <Accordion.Header className="">
              <h5 className="trac-tittle">2015</h5>
            </Accordion.Header>
            <Accordion.Body className="bg-secondary p-0">
              <div className="d-lg-flex">
                {/* =========== left section =========== */}
                <div className="bg-secondary col-12 col-lg-5">
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
                    <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto border-bottom border-2  border-black">
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

                    {/* item 3 */}
                    <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto border-bottom border-2  border-black ">
                      <div className="col-2 text-primary acco-status">
                        <FaCheck className="CheckBtn" />
                      </div>
                      <div className="col-2 text-primary   ps-md-0 acco-date">
                        2015
                      </div>
                      <div className="col-6 acco-dec">
                        Independent Monitoring of WFP Voucher project
                      </div>
                      <div className="col-2 ">
                        <img className="img-fluid " src={saveTheClidren} alt="" />
                      </div>
                    </div>

                    {/* item 4 */}
                    <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto">
                      <div className="col-2 text-primary acco-status">
                        <FaCheck className="CheckBtn" />
                      </div>
                      <div className="col-2 text-primary   ps-md-0 acco-date">
                        2015
                      </div>
                      <div className="col-6 acco-dec">
                        Evaluation Survey of Partnership for Economic Growth
                      </div>
                      <div className="col-2 ">
                        <img className="img-fluid " src={DAIUSAid} alt="" />

                      </div>
                    </div>


                  </div>
                </div>


                {/* ====== middle section ====== */}
                <div className="bg-white d-flex justify-content-center col-lg-2 ">
                  <div className="d-none d-lg-block divider"></div>
                </div>

                {/* ====== right section ========= */}
                <div className="bg-secondary col-12 col-lg-5 ">
                  <div>
                    <div className="d-none d-lg-block">
                      <div className="row bg-primary text-white p-2 p-md-3  rounded w-100 mx-auto ">
                        <div className="col-2 acco-sub-tittle">Status</div>
                        <div className="col-2 acco-sub-tittle">Date</div>
                        <div className="col-6 acco-sub-tittle">
                          Project Description
                        </div>
                        <div className="col-2 acco-sub-tittle">Client</div>
                      </div>
                    </div>

                    {/* Right one */}
                    <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto border-bottom border-2  border-black ">
                      <div className="col-2 text-primary acco-status">
                        <FaCheck className="CheckBtn" />
                      </div>
                      <div className="col-2 text-primary   ps-md-0 acco-date">
                        2015
                      </div>
                      <div className="col-6 acco-dec">
                        Drought impact Assessment
                      </div>
                      <div className="col-2 ">
                        <img className="img-fluid " src={saveTheClidren} alt="" />
                      </div>
                    </div>


                    {/* ====== right item 2========== */}
                    <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto border-bottom border-2  border-black">
                      <div className="col-2 text-primary acco-status">
                        <FaCheck className="CheckBtn" />
                      </div>
                      <div className="col-2 text-primary   ps-md-0 acco-date">
                        2015</div>
                      <div className="col-6 acco-dec">
                        Independent Monitoring of SCI nutrition program
                      </div>
                      <div className="col-2 ">
                        <img className="img-fluid " src={saveTheClidren} alt="" />

                      </div>
                    </div>


                    {/* ====== right item 3========== */}
                    <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto border-bottom border-2  border-black">
                      <div className="col-2 text-primary acco-status">
                        <FaCheck className="CheckBtn" />
                      </div>
                      <div className="col-2 text-primary   ps-md-0 acco-date">2015</div>
                      <div className="col-6 acco-dec">
                        Drought Impact Assessment of Not for specific project
                      </div>
                      <div className="col-2 ">
                        <img className="img-fluid " src={saveTheClidren} alt="" />
                      </div>
                    </div>

                    {/* ====== right item 4========== */}
                    <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto ">
                      <div className="col-2 text-primary acco-status">
                        <FaCheck className="CheckBtn" />
                      </div>
                      <div className="col-2 text-primary   ps-md-0 acco-date">2015</div>
                      <div className="col-6 acco-dec">
                        Independent Monitoring of ECHO II and IRFII
                      </div>
                      <div className="col-2 ">
                        <img className="img-fluid " src={saveTheClidren} alt="" />
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>


          {/* =========================== 2014 ================ */}
          <Accordion.Item eventKey="11">
            <Accordion.Header className="">
              <h5 className="trac-tittle">2014</h5>
            </Accordion.Header>
            <Accordion.Body className="bg-secondary p-0">
              <div className="d-lg-flex">
                {/* =========== left section =========== */}
                <div className="bg-secondary col-12 col-lg-5">
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
                    <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto border-bottom border-2  border-black">
                      <div className="col-2 text-primary acco-status">
                        <FaCheck className="CheckBtn" />
                      </div>
                      <div className="col-2 text-primary   ps-md-0 acco-date">
                        2014
                      </div>
                      <div className="col-6 acco-dec">

                        Final Evaluation
                      </div>
                      <div className="col-2 ">
                        <img className="img-fluid " src={nisfoundationn} alt="" />
                      </div>
                    </div>

                    {/* item 3 */}
                    <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto border-bottom border-2  border-black ">
                      <div className="col-2 text-primary acco-status">
                        <FaCheck className="CheckBtn" />
                      </div>
                      <div className="col-2 text-primary   ps-md-0 acco-date">
                        2014
                      </div>
                      <div className="col-6 acco-dec">
                        Independent Monitoring of Transforming Livelihoods of IDP
                        Families project
                      </div>
                      <div className="col-2 ">
                        <img className="img-fluid " src={saveTheClidren} alt="" />
                      </div>
                    </div>

                    {/* item 4 */}
                    <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto border-bottom border-2  border-black">
                      <div className="col-2 text-primary acco-status">
                        <FaCheck className="CheckBtn" />
                      </div>
                      <div className="col-2 text-primary   ps-md-0 acco-date">
                        2014
                      </div>
                      <div className="col-6 acco-dec">
                        Final Evaluation of Kismayo Solar Stadium Solar Power
                      </div>
                      <div className="col-2 ">
                        <img className="img-fluid " src={nisfoundationn} alt="" />

                      </div>
                    </div>


                    {/* item 5 */}
                    <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto">
                      <div className="col-2 text-primary acco-status">
                        <FaCheck className="CheckBtn" />
                      </div>
                      <div className="col-2 text-primary   ps-md-0 acco-date">
                        2014
                      </div>
                      <div className="col-6 acco-dec">
                        Final Evaluation of LED ECHO
                      </div>
                      <div className="col-2 ">
                        <img className="img-fluid " src={saveTheClidren} alt="" />

                      </div>
                    </div>


                  </div>
                </div>


                {/* ====== middle section ====== */}
                <div className="bg-white d-flex justify-content-center col-lg-2 ">
                  <div className="d-none d-lg-block divider"></div>
                </div>

                {/* ====== right section ========= */}
                <div className="bg-secondary col-12 col-lg-5 ">
                  <div>
                    <div className="d-none d-lg-block">
                      <div className="row bg-primary text-white p-2 p-md-3  rounded w-100 mx-auto ">
                        <div className="col-2 acco-sub-tittle">Status</div>
                        <div className="col-2 acco-sub-tittle">Date</div>
                        <div className="col-6 acco-sub-tittle">
                          Project Description
                        </div>
                        <div className="col-2 acco-sub-tittle">Client</div>
                      </div>
                    </div>

                    {/* Right one */}
                    <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto border-bottom border-2  border-black ">
                      <div className="col-2 text-primary acco-status">
                        <FaCheck className="CheckBtn" />
                      </div>
                      <div className="col-2 text-primary   ps-md-0 acco-date">
                        2014
                      </div>
                      <div className="col-6 acco-dec">
                        Needs Assessment
                      </div>
                      <div className="col-2 ">
                      <img className="img-fluid " src={Lutheran} alt="" />
                      
                      </div>
                    </div>


                    {/* ====== right item 2========== */}
                    <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto border-bottom border-2  border-black">
                      <div className="col-2 text-primary acco-status">
                        <FaCheck className="CheckBtn" />
                      </div>
                      <div className="col-2 text-primary   ps-md-0 acco-date">
                        2014</div>
                      <div className="col-6 acco-dec">
                        Independent Monitoring of Cash for Work project
                      </div>
                      <div className="col-2 ">
                        <img className="img-fluid " src={saveTheClidren} alt="" />

                      </div>
                    </div>


                    {/* ====== right item 3========== */}
                    <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto border-bottom border-2  border-black">
                      <div className="col-2 text-primary acco-status">
                        <FaCheck className="CheckBtn" />
                      </div>
                      <div className="col-2 text-primary   ps-md-0 acco-date">2014</div>
                      <div className="col-6 acco-dec">
                        TASS strategy Of Tass general strategy
                      </div>
                      <div className="col-2 ">
                      <img className="img-fluid " src={tass} alt="" />
                      
                      </div>
                    </div>

                    {/* ====== right item 4========== */}
                    <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto border-bottom border-2  border-black">
                      <div className="col-2 text-primary acco-status">
                        <FaCheck className="CheckBtn" />
                      </div>
                      <div className="col-2 text-primary   ps-md-0 acco-date">2014</div>
                      <div className="col-6 acco-dec">
                        Annual Report of PUNZAA annual report
                      </div>
                      <div className="col-2 ">
                        <img className="img-fluid " src={PunsaaWeblogo} alt="" />
                      </div>
                    </div>


                    {/* ====== right item 5========== */}
                    <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto ">
                      <div className="col-2 text-primary acco-status">
                        <FaCheck className="CheckBtn" />
                      </div>
                      <div className="col-2 text-primary   ps-md-0 acco-date">2014</div>
                      <div className="col-6 acco-dec">
                        Baseline survey Of SOMGEP project
                      </div>
                      <div className="col-2 ">
                      <img className="img-fluid " src={carelogo} alt="" />
                      
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>

          {/* =========================== 2013 ================ */}
          <Accordion.Item eventKey="12">
            <Accordion.Header className="">
              <h5 className="trac-tittle">2013</h5>
            </Accordion.Header>
            <Accordion.Body className="bg-secondary p-0">
              <div className="d-lg-flex">
                {/* =========== left section =========== */}
                <div className="bg-secondary col-12 col-lg-5">
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
                      <div className="col-6 acco-dec">
                        Evaluation Of ECHO
                      </div>
                      <div className="col-2 ">
                        <img className="img-fluid " src={oxfam} alt="" />
                      </div>
                    </div>

                    {/* item 2 */}
                    <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto border-bottom border-2  border-black">
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

                    {/* item 3 */}
                    <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto border-bottom border-2  border-black ">
                      <div className="col-2 text-primary acco-status">
                        <FaCheck className="CheckBtn" />
                      </div>
                      <div className="col-2 text-primary   ps-md-0 acco-date">
                        2013
                      </div>
                      <div className="col-6 acco-dec">
                        Mobile Cash Transfer project of ECHO
                      </div>
                      <div className="col-2 ">
                        <img className="img-fluid " src={saveTheClidren} alt="" />
                      </div>
                    </div>

                    {/* item 4 */}
                    <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto border-bottom border-2  border-black">
                      <div className="col-2 text-primary acco-status">
                        <FaCheck className="CheckBtn" />
                      </div>
                      <div className="col-2 text-primary   ps-md-0 acco-date">
                        2013
                      </div>
                      <div className="col-6 acco-dec">
                        Multi Sectoral Baseline Survey of Multi sector
                      </div>
                      <div className="col-2 ">
                        <img className="img-fluid " src={saveTheClidren} alt="" />

                      </div>
                    </div>


                    {/* item 5 */}
                    <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto border-bottom border-2  border-black">
                      <div className="col-2 text-primary acco-status">
                        <FaCheck className="CheckBtn" />
                      </div>
                      <div className="col-2 text-primary   ps-md-0 acco-date">
                        2013
                      </div>
                      <div className="col-6 acco-dec">

                        Evaluation Of  N/A
                      </div>
                      <div className="col-2 ">
                        <img className="img-fluid " src={oxfam} alt="" />

                      </div>
                    </div>

                    {/* item 6 */}
                    <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto border-bottom border-2  border-black">
                      <div className="col-2 text-primary acco-status">
                        <FaCheck className="CheckBtn" />
                      </div>
                      <div className="col-2 text-primary   ps-md-0 acco-date">
                        2013
                      </div>
                      <div className="col-6 acco-dec">
                        Quantitative Study of orphans and other vulnerable Children in
                        Puntland
                      </div>
                      <div className="col-2 ">
                        <img className="img-fluid " src={paswe} alt="" />
                  
                      </div>
                    </div>

                    {/* item 7 */}
                    <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto ">
                      <div className="col-2 text-primary acco-status">
                        <FaCheck className="CheckBtn" />
                      </div>
                      <div className="col-2 text-primary   ps-md-0 acco-date">
                        2013
                      </div>
                      <div className="col-6 acco-dec">
                        Evaluation of Livelihood project
                      </div>
                      <div className="col-2 ">
                        <img className="img-fluid " src={saveTheClidren} alt="" />
                      </div>
                    </div>
                  </div>
                </div>


                {/* ====== middle section ====== */}
                <div className="bg-white d-flex justify-content-center col-lg-2 ">
                  <div className="d-none d-lg-block divider"></div>
                </div>

                {/* ====== right section ========= */}
                <div className="bg-secondary col-12 col-lg-5 ">
                  <div>
                    <div className="d-none d-lg-block">
                      <div className="row bg-primary text-white p-2 p-md-3  rounded w-100 mx-auto ">
                        <div className="col-2 acco-sub-tittle">Status</div>
                        <div className="col-2 acco-sub-tittle">Date</div>
                        <div className="col-6 acco-sub-tittle">
                          Project Description
                        </div>
                        <div className="col-2 acco-sub-tittle">Client</div>
                      </div>
                    </div>

                    {/* Right one */}
                    <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto border-bottom border-2  border-black ">
                      <div className="col-2 text-primary acco-status">
                        <FaCheck className="CheckBtn" />
                      </div>
                      <div className="col-2 text-primary   ps-md-0 acco-date">
                        2013
                      </div>
                      <div className="col-6 acco-dec">
                        Pastoral study of Humanitarian pastoral Project
                      </div>
                      <div className="col-2 ">
                        <img className="img-fluid " src={danishGroup} alt="" />
                      </div>
                    </div>


                    {/* ====== right item 2========== */}
                    <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto border-bottom border-2  border-black">
                      <div className="col-2 text-primary acco-status">
                        <FaCheck className="CheckBtn" />
                      </div>
                      <div className="col-2 text-primary   ps-md-0 acco-date">
                        2013</div>
                      <div className="col-6 acco-dec">
                        Monitoring canal rehabilitation of Canal rehabilitation project
                      </div>
                      <div className="col-2 ">
                        <img className="img-fluid " src={saveTheClidren} alt="" />

                      </div>
                    </div>


                    {/* ====== right item 3========== */}
                    <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto border-bottom border-2  border-black">
                      <div className="col-2 text-primary acco-status">
                        <FaCheck className="CheckBtn" />
                      </div>
                      <div className="col-2 text-primary   ps-md-0 acco-date">2013</div>
                      <div className="col-6 acco-dec">
                        Translations (English to Somali) of Gender conflict, peace
                        building and political participation
                      </div>
                      <div className="col-2 ">
                      
                      <img className="img-fluid " src={odeso} alt="" />
                      </div>
                    </div>

                    {/* ====== right item 4========== */}
                    <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto border-bottom border-2  border-black">
                      <div className="col-2 text-primary acco-status">
                        <FaCheck className="CheckBtn" />
                      </div>
                      <div className="col-2 text-primary   ps-md-0 acco-date">2013</div>
                      <div className="col-6 acco-dec">
                        Ethnographic study of Community child protection
                      </div>
                      <div className="col-2 ">
                        <img className="img-fluid " src={unicef} alt="" />
                      </div>
                    </div>


                    {/* ====== right item 5========== */}
                    <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto border-bottom border-2  border-black">
                      <div className="col-2 text-primary acco-status">
                        <FaCheck className="CheckBtn" />
                      </div>
                      <div className="col-2 text-primary   ps-md-0 acco-date">2013</div>
                      <div className="col-6 acco-dec">
                        Needs assessment of Employment and Social protection
                      </div>
                      <div className="col-2 ">
                        <img className="img-fluid " src={ilo} alt="" />
                      </div>
                    </div>

                    {/* ====== right item 6========== */}
                    <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto border-bottom border-2  border-black">
                      <div className="col-2 text-primary acco-status">
                        <FaCheck className="CheckBtn" />
                      </div>
                      <div className="col-2 text-primary   ps-md-0 acco-date">2013</div>
                      <div className="col-6 acco-dec">
                        Quantitative study of Orphans and other vulnerable Children
                      </div>
                      <div className="col-2 ">
                        <img className="img-fluid " src={unicef} alt="" />
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>


          {/* =========================== 2012 ================ */}
          <Accordion.Item eventKey="13">
            <Accordion.Header className="">
              <h5 className="trac-tittle">2012</h5>
            </Accordion.Header>
            <Accordion.Body className="bg-secondary p-0">
              <div className="d-lg-flex">
                {/* =========== left section =========== */}
                <div className="bg-secondary col-12 col-lg-5">
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
                        {/* <div>VETERINAIRES</div> */}
                      </div>
                    </div>

                    {/* item 2 */}
                    <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto border-bottom border-2  border-black">
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

                    {/* item 3 */}
                    <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto border-bottom border-2  border-black ">
                      <div className="col-2 text-primary acco-status">
                        <FaCheck className="CheckBtn" />
                      </div>
                      <div className="col-2 text-primary   ps-md-0 acco-date">
                        2012
                      </div>
                      <div className="col-6 acco-dec">

                        Assessment of Orphanage
                      </div>
                      <div className="col-2 ">
                        <img className="img-fluid " src={paswe} alt="" />
                       
                      </div>
                    </div>

                    {/* item 4 */}
                    <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto border-bottom border-2  border-black">
                      <div className="col-2 text-primary acco-status">
                        <FaCheck className="CheckBtn" />
                      </div>
                      <div className="col-2 text-primary   ps-md-0 acco-date">
                        2012
                      </div>
                      <div className="col-6 acco-dec">
                        MIS data audit of Primary School census
                      </div>
                      <div className="col-2 ">
                        <img className="img-fluid " src={unicef} alt="" />

                      </div>
                    </div>

                    {/* item 5 */}
                    <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto border-bottom border-2  border-black">
                      <div className="col-2 text-primary acco-status">
                        <FaCheck className="CheckBtn" />
                      </div>
                      <div className="col-2 text-primary   ps-md-0 acco-date">
                        2012
                      </div>
                      <div className="col-6 acco-dec">
                        Capacity Assessment of Capacity injection project
                      </div>
                      <div className="col-2 ">
                        <img className="img-fluid " src={unfpa} alt="" />

                      </div>
                    </div>

                    {/* item 6 */}
                    <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto ">
                      <div className="col-2 text-primary acco-status">
                        <FaCheck className="CheckBtn" />
                      </div>
                      <div className="col-2 text-primary   ps-md-0 acco-date">
                        2012
                      </div>
                      <div className="col-6 acco-dec">
                        Community Dialogue organizing Of FGM/C project
                      </div>
                      <div className="col-2 ">
                        <img className="img-fluid " src={unicef} alt="" />

                      </div>
                    </div>
                  </div>
                </div>


                {/* ====== middle section ====== */}
                <div className="bg-white d-flex justify-content-center col-lg-2 ">
                  <div className="d-none d-lg-block divider"></div>
                </div>

                {/* ====== right section ========= */}
                <div className="bg-secondary col-12 col-lg-5 ">
                  <div>
                    <div className="d-none d-lg-block">
                      <div className="row bg-primary text-white p-2 p-md-3  rounded w-100 mx-auto ">
                        <div className="col-2 acco-sub-tittle">Status</div>
                        <div className="col-2 acco-sub-tittle">Date</div>
                        <div className="col-6 acco-sub-tittle">
                          Project Description
                        </div>
                        <div className="col-2 acco-sub-tittle">Client</div>
                      </div>
                    </div>

                    {/* Right one */}
                    <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto border-bottom border-2  border-black ">
                      <div className="col-2 text-primary acco-status">
                        <FaCheck className="CheckBtn" />
                      </div>
                      <div className="col-2 text-primary   ps-md-0 acco-date">
                        2012
                      </div>
                      <div className="col-6 acco-dec">
                        Evaluation Of Cash Grants and livelihood Assets
                      </div>
                      <div className="col-2 ">
                        <img className="img-fluid " src={saveTheClidren} alt="" />
                      </div>
                    </div>

                    {/* ====== right item 2========== */}
                    <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto border-bottom border-2  border-black">
                      <div className="col-2 text-primary acco-status">
                        <FaCheck className="CheckBtn" />
                      </div>
                      <div className="col-2 text-primary   ps-md-0 acco-date">
                        2012</div>
                      <div className="col-6 acco-dec">
                        Market Assessment and skill training assessment
                      </div>
                      <div className="col-2 ">
                        <img className="img-fluid " src={handicap} alt="" />

                      </div>
                    </div>


                    {/* ====== right item 3========== */}
                    <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto border-bottom border-2  border-black">
                      <div className="col-2 text-primary acco-status">
                        <FaCheck className="CheckBtn" />
                      </div>
                      <div className="col-2 text-primary   ps-md-0 acco-date">2012</div>
                      <div className="col-6 acco-dec">
                        Market Systems development Study
                      </div>
                      <div className="col-2 ">
                        <img className="img-fluid " src={ilo} alt="" />
                      </div>
                    </div>

                    {/* ====== right item 4========== */}
                    <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto border-bottom border-2  border-black">
                      <div className="col-2 text-primary acco-status">
                        <FaCheck className="CheckBtn" />
                      </div>
                      <div className="col-2 text-primary   ps-md-0 acco-date">2012</div>
                      <div className="col-6 acco-dec">
                        Annual report preparation of  Ministry of Women Development
                        and Family Affairs (Mawdafa)
                      </div>
                      <div className="col-2 ">
                        <img className="img-fluid " src={MoWDAFA} alt="" />
                      </div>
                    </div>


                    {/* ====== right item 5========== */}
                    <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto border-bottom border-2  border-black">
                      <div className="col-2 text-primary acco-status">
                        <FaCheck className="CheckBtn" />
                      </div>
                      <div className="col-2 text-primary   ps-md-0 acco-date">2012</div>
                      <div className="col-6 acco-dec">
                        Business management training Of  Not for Specific project
                      </div>
                      <div className="col-2 ">
                        <img className="img-fluid " src={grt} alt="" />
                       
                      </div>
                    </div>

                    {/* ====== right item 6========== */}
                    <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto ">
                      <div className="col-2 text-primary acco-status">
                        <FaCheck className="CheckBtn" />
                      </div>
                      <div className="col-2 text-primary   ps-md-0 acco-date">2012</div>
                      <div className="col-6 acco-dec">
                        Feasibility study for Asli Mills A Somali natural Cosmetic      and
                        spices production company
                      </div>
                      <div className="col-2 ">
                        {/* <img className="img-fluid " src={saveTheClidren} alt="" /> */}
                        {/* <div>Asli Mills</div> */}
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>


          {/* =========================== 2011 ================ */}
          <Accordion.Item eventKey="14">
            <Accordion.Header className="">
              <h5 className="trac-tittle">2011</h5>
            </Accordion.Header>
            <Accordion.Body className="bg-secondary p-0">
              <div className="d-lg-flex">
                {/* =========== left section =========== */}
                <div className="bg-secondary col-12 col-lg-5">
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
                    <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto border-bottom border-2  border-black">
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

                    {/* item 3 */}
                    <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto border-bottom border-2  border-black ">
                      <div className="col-2 text-primary acco-status">
                        <FaCheck className="CheckBtn" />
                      </div>
                      <div className="col-2 text-primary   ps-md-0 acco-date">
                        2011
                      </div>
                      <div className="col-6 acco-dec">
                        Translations (English to Somali) Of  Disaster Risk reduction
                        manual
                      </div>
                      <div className="col-2 ">
                        <img className="img-fluid " src={odeso} alt="" />
                    
                      </div>
                    </div>

                    {/* item 4 */}
                    <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto border-bottom border-2  border-black">
                      <div className="col-2 text-primary acco-status">
                        <FaCheck className="CheckBtn" />
                      </div>
                      <div className="col-2 text-primary   ps-md-0 acco-date">
                        2011
                      </div>
                      <div className="col-6 acco-dec">
                        Evaluation Of  NA
                      </div>
                      <div className="col-2 ">
                        <img className="img-fluid " src={unicef} alt="" />

                      </div>
                    </div>


                    {/* item 5 */}
                    <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto border-bottom border-2  border-black">
                      <div className="col-2 text-primary acco-status">
                        <FaCheck className="CheckBtn" />
                      </div>
                      <div className="col-2 text-primary   ps-md-0 acco-date">
                        2011
                      </div>
                      <div className="col-6 acco-dec">
                        Capacity gap identifications of Democracy and Human Rights
                      </div>
                      <div className="col-2 ">
                        <img className="img-fluid " src={SIRC} alt="" />
                       

                      </div>
                    </div>

                    {/* item 6 */}
                    <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto border-bottom border-2  border-black">
                      <div className="col-2 text-primary acco-status">
                        <FaCheck className="CheckBtn" />
                      </div>
                      <div className="col-2 text-primary   ps-md-0 acco-date">
                        2011
                      </div>
                      <div className="col-6 acco-dec">
                        Annual report preparation Of Organizational annual report
                        TASS
                      </div>
                      <div className="col-2 ">
                        <img className="img-fluid " src={tass} alt="" />
                        

                      </div>
                    </div>

                    {/* item 7 */}
                    <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto border-bottom border-2  border-black">
                      <div className="col-2 text-primary acco-status">
                        <FaCheck className="CheckBtn" />
                      </div>
                      <div className="col-2 text-primary   ps-md-0 acco-date">
                        2011
                      </div>
                      <div className="col-6 acco-dec">
                        Training (Effective Communication and Counseling)
                        Of MCH and health post capacitation
                      </div>
                      <div className="col-2 ">
                        <img className="img-fluid " src={cooparazione} alt="" />
                      

                      </div>
                    </div>

                    {/* item 8 */}
                    <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto ">
                      <div className="col-2 text-primary acco-status">
                        <FaCheck className="CheckBtn" />
                      </div>
                      <div className="col-2 text-primary   ps-md-0 acco-date">
                        2011
                      </div>
                      <div className="col-6 acco-dec">
                        Annual report preparation of Annual report for SFS WAWA,
                        Kaalo, GECPD, YES, GTEC, PSU and SDO
                      </div>
                      <div className="col-2 ">
                        <img className="img-fluid " src={diakonia} alt="" />

                      </div>
                    </div>

                  </div>
                </div>


                {/* ====== middle section ====== */}
                <div className="bg-white d-flex justify-content-center col-lg-2 ">
                  <div className="d-none d-lg-block divider"></div>
                </div>

                {/* ====== right section ========= */}
                <div className="bg-secondary col-12 col-lg-5 ">
                  <div>
                    <div className="d-none d-lg-block">
                      <div className="row bg-primary text-white p-2 p-md-3  rounded w-100 mx-auto ">
                        <div className="col-2 acco-sub-tittle">Status</div>
                        <div className="col-2 acco-sub-tittle">Date</div>
                        <div className="col-6 acco-sub-tittle">
                          Project Description
                        </div>
                        <div className="col-2 acco-sub-tittle">Client</div>
                      </div>
                    </div>

                    {/* Right one */}
                    <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto border-bottom border-2  border-black ">
                      <div className="col-2 text-primary acco-status">
                        <FaCheck className="CheckBtn" />
                      </div>
                      <div className="col-2 text-primary   ps-md-0 acco-date">
                        2011
                      </div>
                      <div className="col-6 acco-dec">
                        Baseline Assessment of Fisheries project
                      </div>
                      <div className="col-2 ">
                        <img className="img-fluid " src={gavoImg} alt="" />
                        
                      </div>
                    </div>

                    {/* ====== right item 2========== */}
                    <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto border-bottom border-2  border-black">
                      <div className="col-2 text-primary acco-status">
                        <FaCheck className="CheckBtn" />
                      </div>
                      <div className="col-2 text-primary   ps-md-0 acco-date">
                        2011</div>
                      <div className="col-6 acco-dec">
                        Annual report (2012) drafting
                      </div>
                      <div className="col-2 ">
                        {/* <img className="img-fluid " src={ilo} alt="" /> */}
                        {/* <div>MoPIC</div> */}

                      </div>
                    </div>

                    {/* ====== right item 3========== */}
                    <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto border-bottom border-2  border-black">
                      <div className="col-2 text-primary acco-status">
                        <FaCheck className="CheckBtn" />
                      </div>
                      <div className="col-2 text-primary   ps-md-0 acco-date">2011</div>
                      <div className="col-6 acco-dec">
                        Evaluation of Management maturation Process (MMP)
                      </div>
                      <div className="col-2 ">
                      
                      <img className="img-fluid " src={gecpd} alt="" />
                      </div>
                    </div>

                    {/* ====== right item 4========== */}
                    <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto border-bottom border-2  border-black">
                      <div className="col-2 text-primary acco-status">
                        <FaCheck className="CheckBtn" />
                      </div>
                      <div className="col-2 text-primary   ps-md-0 acco-date">2011</div>
                      <div className="col-6 acco-dec">
                        5 Year progressive report (MOWDAFA) of General report
                      </div>
                      <div className="col-2 ">
                        <img className="img-fluid " src={MoWDAFA} alt="" />
                       
                      </div>
                    </div>

                    {/* ====== right item 5========== */}
                    <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto border-bottom border-2  border-black">
                      <div className="col-2 text-primary acco-status">
                        <FaCheck className="CheckBtn" />
                      </div>
                      <div className="col-2 text-primary   ps-md-0 acco-date">2011</div>
                      <div className="col-6 acco-dec">
                        Gender Policy preparation (MOWDAFA) Of   General report
                      </div>
                      <div className="col-2 ">
                        <img className="img-fluid " src={MoWDAFA} alt="" />
                        
                      </div>
                    </div>

                    {/* ====== right item 6========== */}
                    <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto border-bottom border-2  border-black">
                      <div className="col-2 text-primary acco-status">
                        <FaCheck className="CheckBtn" />
                      </div>
                      <div className="col-2 text-primary   ps-md-0 acco-date">2011</div>
                      <div className="col-6 acco-dec">
                        Document Translations (English to Somali)
                      </div>
                      <div className="col-2 ">
                        <img className="img-fluid " src={odeso} alt="" />
                        
                      </div>
                    </div>

                    {/* ====== right item 7========== */}
                    <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto border-bottom border-2  border-black ">
                      <div className="col-2 text-primary acco-status">
                        <FaCheck className="CheckBtn" />
                      </div>
                      <div className="col-2 text-primary   ps-md-0 acco-date">2011</div>
                      <div className="col-6 acco-dec">
                        Training (Corporal Punishment Training)
                      </div>
                      <div className="col-2 ">
                        <img className="img-fluid " src={education} alt="" />
                        
                      </div>
                    </div>

                    {/* ====== right item 8========== */}
                    <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto ">
                      <div className="col-2 text-primary acco-status">
                        <FaCheck className="CheckBtn" />
                      </div>
                      <div className="col-2 text-primary   ps-md-0 acco-date">2011</div>
                      <div className="col-6 acco-dec">
                        Translations (English to Somali) of Pastoral Youth Leadership
                      </div>
                      <div className="col-2 ">
                        <img className="img-fluid " src={odeso} alt="" />
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>






        </Accordion>
      </div>
    </div>
  );
};

export default Records;
