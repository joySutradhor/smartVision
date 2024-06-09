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
import GaroweMunicipality from "../../../assets/images/GaroweMunicipality.png";
import worldBankRegional from "../../../assets/images/worldBankRegional.png";
// import MoWDAFA from "../../../assets/images/MoWDAFA.png";
import sosChildren from "../../../assets/images/sosChildren.png";
import sos8 from "../../../assets/images/sos8.png";
import galleryOne from "../../../assets/images/mediaImg/galleryOne.jpg";
import grt from "../../../assets/images/grt.png"
import education from "../../../assets/images/education.png"
import coopi from "../../../assets/images/coopi.png"
import tass from "../../../assets/images/tass.png";
import MoWDAFA from "../../../assets/images/MoWDAFA.png";
import odeso from "../../../assets/images/odeso.png";
import paswe from "../../../assets/images/paswe.png";
import sobsLogo from "../../../assets/images/sobsLogo.png";

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


            {/* MIDTERM AND ENDLINE EVALUATIONS  */}
            <Accordion.Item eventKey="7">
              <Accordion.Header>
                <h5 className="acco-tittle">MIDTERM AND ENDLINE EVALUATIONS</h5>
              </Accordion.Header>

              <Accordion.Body className="bg-secondary p-0 rounded-2">
                <div>
                  <div className="row bg-primary text-white p-2 p-md-3  rounded w-100 mx-auto">
                    <div className="col-2 acco-sub-tittle">Status</div>
                    <div className="col-2 acco-sub-tittle">Date</div>
                    <div className="col-6 acco-sub-tittle">
                      Project Description
                    </div>
                    <div className="col-2 acco-sub-tittle client">Client</div>
                  </div>

                  <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto border-bottom border-2  border-black ">
                    <div className="col-2 text-primary acco-status">
                      <FaCheck className="CheckBtn" />
                    </div>
                    <div className="col-2 text-primary new-date  ps-md-0 acco-date">
                      Oct-Nov,<br />2023
                    </div>
                    <div className="col-6 acco-dec new-dec">
                      Final evaluation for HOA Project in Heliwa, Kahda, Baidoa,
                      Balcad and Hudur districts in Somalia.
                    </div>
                    <div className="col-2 ">
                      <img className="img-fluid " src={sosChildren} alt="" />


                    </div>
                  </div>

                  {/* item 2 */}
                  <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto border-bottom border-2  border-black">
                    <div className="col-2 text-primary acco-status">
                      <FaCheck className="CheckBtn" />
                    </div>
                    <div className="col-2 text-primary  new-date ps-md-0 acco-date">
                      May-Jun<br />2023
                    </div>
                    <div className="col-6 new-dec acco-dec">
                      Endline Evaluation for the project ‘Expanding Civic Space,
                      Empowering   Youth   and   Women   to   Contribute   to   the
                      Governance and Development processes in Somaliland’.
                    </div>
                    <div className="col-2 ">
                      <img className="img-fluid " src={SOYDAVO} alt="" />
                    </div>
                  </div>

                  {/* item 3*/}
                  <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto border-bottom border-2  border-black">
                    <div className="col-2 text-primary acco-status">
                      <FaCheck className="CheckBtn" />
                    </div>
                    <div className="col-2 text-primary  new-date ps-md-0 acco-date">
                      Mar-Apr<br />2023
                    </div>
                    <div className="col-6 new-dec acco-dec">
                      Endline evaluation for BHA Funded integrated project titled
                      Sustainable Opportunities for more Accessible Livelihoods and
                      Integrated Assistance project.
                    </div>
                    <div className="col-2 ">
                      <img className="img-fluid " src={saveTheClidren} alt="" />
                    </div>
                  </div>

                  {/* item 4*/}
                  <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto border-bottom border-2  border-black">
                    <div className="col-2 text-primary acco-status">
                      <FaCheck className="CheckBtn" />
                    </div>
                    <div className="col-2 text-primary  new-date ps-md-0 acco-date">
                      Mar-2022<br />Apr-2023
                    </div>
                    <div className="col-6 new-dec acco-dec">
                      Midterm Evaluation for the project FFO NEXUS Project
                    </div>
                    <div className="col-2 ">
                      <img className="img-fluid " src={saveTheClidren} alt="" />
                    </div>
                  </div>

                  {/* item 5*/}
                  <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto ">
                    <div className="col-2 text-primary acco-status">
                      <FaCheck className="CheckBtn" />
                    </div>
                    <div className="col-2 text-primary  new-date ps-md-0 acco-date">
                      Jun-Aug<br />2021
                    </div>
                    <div className="col-6 new-dec acco-dec">
                      End line Evaluation of Emergency Cash Transfer and Resilience
                      Building Project in Sool and Togdheer in Somaliland.
                    </div>
                    <div className="col-2 ">
                      <img className="img-fluid " src={candelight} alt="" />
                    </div>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>

            {/* ============ BASELINE SURVEY =========== */}
            <Accordion.Item eventKey="8">
              <Accordion.Header>
                <h5 className="acco-tittle"> BASELINE SURVEY</h5>
              </Accordion.Header>
              <Accordion.Body className="bg-secondary p-0 rounded-2">
                <div>
                  <div className="row bg-primary text-white p-2 p-md-3  rounded w-100 mx-auto">
                    <div className="col-2 acco-sub-tittle">Status</div>
                    <div className="col-2 acco-sub-tittle">Date</div>
                    <div className="col-6 acco-sub-tittle">
                      Project Description
                    </div>
                    <div className="col-2 acco-sub-tittle client">Client</div>
                  </div>

                  {/* item 1 */}
                  <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto border-bottom border-2  border-black">
                    <div className="col-2 text-primary acco-status">
                      <FaCheck className="CheckBtn" />
                    </div>
                    <div className="col-2 text-primary  new-date  ps-md-0 acco-date">
                      Sep-Nov, <br />
                      2023
                    </div>
                    <div className="col-6 new-dec acco-dec">
                      Baseline Evaluation for GFFO/BMZ Chapeau Nexus Project.
                    </div>
                    <div className="col-2 ">
                      {/* <img className="img-fluid " src={unicef} alt="" />
                      <img className="img-fluid " src={advisory} alt="" /> */}
                      <div>IRC</div>
                    </div>
                  </div>

                  {/* item 2 */}
                  <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto border-bottom border-2  border-black ">
                    <div className="col-2 text-primary acco-status">
                      <FaCheck className="CheckBtn" />
                    </div>
                    <div className="col-2 text-primary new-date  ps-md-0 acco-date">
                      Oct-Nov,<br />2022
                    </div>
                    <div className="col-6 new-dec acco-dec">
                      Drought Assessment and Baseline Survey in South West state
                      of Somalia.
                    </div>
                    <div className="col-2 ">
                      <img className="img-fluid " src={greedo} alt="" />
                    </div>
                  </div>

                  {/* item 3 */}
                  <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto border-bottom border-2  border-black">
                    <div className="col-2 text-primary acco-status">
                      <FaCheck className="CheckBtn" />
                    </div>
                    <div className="col-2 text-primary new-date  ps-md-0 acco-date">
                      Jan-Apr,<br />2023
                    </div>
                    <div className="col-6 new-dec acco-dec">
                      Baseline Assessment for UFSP in Luglow, Kismayo
                    </div>
                    <div className="col-2 ">
                      <img className="img-fluid " src={sos8} alt="" />
                    </div>
                  </div>

                  {/* item 4 */}
                  <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto border-bottom border-2  border-black">
                    <div className="col-2 text-primary acco-status">
                      <FaCheck className="CheckBtn" />
                    </div>
                    <div className="col-2 text-primary new-date  ps-md-0 acco-date">
                      Jul-Aug,<br />2020
                    </div>
                    <div className="col-6 new-dec acco-dec">
                      Baseline Survey of Health, Nutrition, WASH, Education and
                      Child Protection Services and Cash Transfers for Vulnerable
                      Children  and Families in Somalia/Somaliland (FFO NEXUS)
                      Project.
                    </div>
                    <div className="col-2 ">
                      <img className="img-fluid " src={saveTheClidren} alt="" />
                    </div>
                  </div>

                  {/* item 5 */}
                  <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto ">
                    <div className="col-2 text-primary acco-status">
                      <FaCheck className="CheckBtn" />
                    </div>
                    <div className="col-2 text-primary new-date  ps-md-0 acco-date">
                      Oct,<br />2019
                    </div>
                    <div className="col-6 new-dec acco-dec">
                      Monitoring   and   Evaluation   Baseline   Survey   for  the
                      Rehabilitation and Construction of Four Intra-City Roads in
                      Garowe Municipality for World Bank Road Project
                    </div>
                    <div className="col-2 ">
                      <img className="img-fluid " src={theWorldRank} alt="" />
                      <img className="img-fluid " src={GaroweMunicipality} alt="" />
                    </div>
                  </div>


                </div>
              </Accordion.Body>
            </Accordion.Item>


            {/* ============ THIRD PART MONITORING =========== */}
            <Accordion.Item eventKey="9">
              <Accordion.Header>
                <h5 className="acco-tittle"> THIRD PARTY MONITORING</h5>
              </Accordion.Header>
              <Accordion.Body className="bg-secondary p-0 rounded-2">
                <div>
                  <div className="row bg-primary text-white p-2 p-md-3  rounded w-100 mx-auto">
                    <div className="col-2 acco-sub-tittle">Status</div>
                    <div className="col-2 acco-sub-tittle">Date</div>
                    <div className="col-6 acco-sub-tittle">
                      Project Description
                    </div>
                    <div className="col-2 acco-sub-tittle client">Client</div>
                  </div>

                  {/* item 1 */}
                  <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto border-bottom border-2  border-black">
                    <div className="col-2 text-primary acco-status">
                      <FaCheck className="CheckBtn" />
                    </div>
                    <div className="col-2 text-primary  new-date  ps-md-0 acco-date">
                      Oct-Jan, <br />
                      2022
                    </div>
                    <div className="col-6 new-dec acco-dec">
                      Third part monitoring FFO Nexus project.
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
                    <div className="col-2 text-primary new-date  ps-md-0 acco-date">
                      May-Nov,<br />2021
                    </div>
                    <div className="col-6 new-dec acco-dec">
                      Third part monitoring, Kismaayo and Goobwayn to verify the
                      quality and the progress of infrastructure, compliance and
                      checklist
                    </div>
                    <div className="col-2 ">
                      <img className="img-fluid " src={sos8} alt="" />
                    </div>
                  </div>

                  {/* item 3 */}
                  <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto border-bottom border-2  border-black">
                    <div className="col-2 text-primary acco-status">
                      <FaCheck className="CheckBtn" />
                    </div>
                    <div className="col-2 text-primary new-date  ps-md-0 acco-date">
                      Jul-Aug,<br />2021
                    </div>
                    <div className="col-6 new-dec acco-dec">
                      Third part monitoring and verifications for REEVs program in
                      Sool and Sanaag regions
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
                    <div className="col-2 text-primary new-date  ps-md-0 acco-date">
                      Sep,<br />2019
                    </div>
                    <div className="col-6 new-dec acco-dec">
                      Independent Third-Party Monitoring of Family Strengthening
                      through Cash Transfer and Child Protection in Baidoa, Somalia
                    </div>
                    <div className="col-2 ">
                      <img className="img-fluid " src={saveTheClidren} alt="" />
                    </div>
                  </div>

                  {/* item 5 */}
                  <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto ">
                    <div className="col-2 text-primary acco-status">
                      <FaCheck className="CheckBtn" />
                    </div>
                    <div className="col-2 text-primary new-date  ps-md-0 acco-date">
                      Feb,<br />2018
                    </div>
                    <div className="col-6 new-dec acco-dec">
                      Third   Party   Monitoring   and   Verification   of   OFDA   Funded
                      WHAERIS Project in Berdale and Qansadhere Districts of Bay
                      Region of Somalia
                    </div>
                    <div className="col-2 ">
                      <img className="img-fluid " src={saveTheClidren} alt="" />

                    </div>
                  </div>


                </div>
              </Accordion.Body>
            </Accordion.Item>


            {/* ============ ASSESSTMENTS =========== */}
            <Accordion.Item eventKey="10">
              <Accordion.Header>
                <h5 className="acco-tittle"> ASSESSTMENTS </h5>
              </Accordion.Header>
              <Accordion.Body className="bg-secondary p-0 rounded-2">
                <div>
                  <div className="row bg-primary text-white p-2 p-md-3  rounded w-100 mx-auto">
                    <div className="col-2 acco-sub-tittle">Status</div>
                    <div className="col-2 acco-sub-tittle">Date</div>
                    <div className="col-6 acco-sub-tittle">
                      Project Description
                    </div>
                    <div className="col-2 acco-sub-tittle client">Client</div>
                  </div>

                  {/* item 1 */}
                  <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto border-bottom border-2  border-black">
                    <div className="col-2 text-primary acco-status">
                      <FaCheck className="CheckBtn" />
                    </div>
                    <div className="col-2 text-primary  new-date  ps-md-0 acco-date">
                      Aug-Sep, <br />
                      2023
                    </div>
                    <div className="col-6 new-dec acco-dec">
                      Local Economic Assessment in Southern regions of Somalia.
                    </div>
                    <div className="col-2 ">
                      <img className="img-fluid " src={ilo} alt="" />

                    </div>
                  </div>

                  {/* item 2 */}
                  <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto border-bottom border-2  border-black ">
                    <div className="col-2 text-primary acco-status">
                      <FaCheck className="CheckBtn" />
                    </div>
                    <div className="col-2 text-primary new-date  ps-md-0 acco-date">
                      Oct-21,<br />Jan-22
                    </div>
                    <div className="col-6 new-dec acco-dec">
                      WASH assessment in schools from 13 regions of Somalia in
                      December 2021
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
                    <div className="col-2 text-primary new-date  ps-md-0 acco-date">
                      Apr,<br />2021
                    </div>
                    <div className="col-6 new-dec acco-dec">
                      Rapid Needs Assessment conducted at Sool and Sanaag
                      regions of Somaliland
                    </div>
                    <div className="col-2 ">
                      <img className="img-fluid " src={finredcross} alt="" />
                    </div>
                  </div>

                  {/* item 4 */}
                  <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto border-bottom border-2  border-black">
                    <div className="col-2 text-primary acco-status">
                      <FaCheck className="CheckBtn" />
                    </div>
                    <div className="col-2 text-primary new-date  ps-md-0 acco-date">
                      Dec-20,<br />Feb-21
                    </div>
                    <div className="col-6 new-dec acco-dec">
                      Fragility Index and Maturity Model (FIMM) Assessment in 15
                      Districts of Somalia.
                    </div>
                    <div className="col-2 ">
                      <img className="img-fluid " src={diakonia} alt="" />
                    </div>
                  </div>

                  {/* item 5 */}
                  <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto ">
                    <div className="col-2 text-primary acco-status">
                      <FaCheck className="CheckBtn" />
                    </div>
                    <div className="col-2 text-primary new-date  ps-md-0 acco-date">
                      Mar,<br />2019
                    </div>
                    <div className="col-6 new-dec acco-dec">
                      Conflict Assessment and Political Feasibility of “Nabad iyo
                      Amni
                    </div>
                    <div className="col-2 ">
                      <img className="img-fluid " src={danishGroup} alt="" />

                    </div>
                  </div>


                </div>
              </Accordion.Body>
            </Accordion.Item>


            {/* ============ TRAININGS AND CAPACITY ASSESSTMENT /BUILDING =========== */}
            <Accordion.Item eventKey="11">
              <Accordion.Header>
                <h5 className="acco-tittle"> TRAININGS AND CAPACITY ASSESSTMENT /BUILDING </h5>
              </Accordion.Header>
              <Accordion.Body className="bg-secondary p-0 rounded-2">
                <div>
                  <div className="row bg-primary text-white p-2 p-md-3  rounded w-100 mx-auto">
                    <div className="col-2 acco-sub-tittle">Status</div>
                    <div className="col-2 acco-sub-tittle">Date</div>
                    <div className="col-6 acco-sub-tittle">
                      Project Description
                    </div>
                    <div className="col-2 acco-sub-tittle client">Client</div>
                  </div>

                  {/* item 1 */}
                  <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto border-bottom border-2  border-black">
                    <div className="col-2 text-primary acco-status">
                      <FaCheck className="CheckBtn" />
                    </div>
                    <div className="col-2 text-primary  new-date  ps-md-0 acco-date">
                      Nov-Dec, <br />
                      2022
                    </div>
                    <div className="col-6 new-dec acco-dec">
                      Capacity   building   and   training   for   10   partners   and   local
                      network.   (Gargaar   Rehabilitation   and   Development
                      Organization).
                    </div>
                    <div className="col-2 ">
                      <img className="img-fluid " src={greedo} alt="" />

                    </div>
                  </div>

                  {/* item 2 */}
                  <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto border-bottom border-2  border-black ">
                    <div className="col-2 text-primary acco-status">
                      <FaCheck className="CheckBtn" />
                    </div>
                    <div className="col-2 text-primary new-date  ps-md-0 acco-date">
                      2012
                    </div>
                    <div className="col-6 new-dec acco-dec">
                      Contracted to do small scale business management training in
                      Bari, Nugaal and Mudug regions of Somalia
                    </div>
                    <div className="col-2 ">
                      <img className="img-fluid " src={grt} alt="" />
                    </div>
                  </div>

                  {/* item 3 */}
                  <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto border-bottom border-2  border-black">
                    <div className="col-2 text-primary acco-status">
                      <FaCheck className="CheckBtn" />
                    </div>
                    <div className="col-2 text-primary new-date  ps-md-0 acco-date">
                      2011
                    </div>
                    <div className="col-6 new-dec acco-dec">
                      Advocacy, Leadership and governance training workshop for
                      IDP leaders in Bari region
                    </div>
                    <div className="col-2 ">
                      <img className="img-fluid " src={nrc} alt="" />
                    </div>
                  </div>

                  {/* item 4 */}
                  <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto border-bottom border-2  border-black">
                    <div className="col-2 text-primary acco-status">
                      <FaCheck className="CheckBtn" />
                    </div>
                    <div className="col-2 text-primary new-date  ps-md-0 acco-date">
                      2011
                    </div>
                    <div className="col-6 new-dec acco-dec">
                      Conducted corporal punishment trainings and forums
                    </div>
                    <div className="col-2 ">
                      <img className="img-fluid " src={education} alt="" />
                    </div>
                  </div>

                  {/* item 5 */}
                  <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto ">
                    <div className="col-2 text-primary acco-status">
                      <FaCheck className="CheckBtn" />
                    </div>
                    <div className="col-2 text-primary new-date  ps-md-0 acco-date">
                      2011
                    </div>
                    <div className="col-6 new-dec acco-dec">
                      Effective communication and counselling for Somaliland MCH
                      and health posts training in Somaliland
                    </div>
                    <div className="col-2 ">
                      <img className="img-fluid " src={coopi} alt="" />

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
                <h5 className="acco-tittle"> STRATEGY REVIEW/DEVELOPMENT AND ANNUAL REPORTS AND POLICIES </h5>
              </Accordion.Header>
              <Accordion.Body className="bg-secondary p-0 rounded-2">
                <div>
                  <div className="row bg-primary text-white p-2 p-md-3  rounded w-100 mx-auto">
                    <div className="col-2 acco-sub-tittle">Status</div>
                    <div className="col-2 acco-sub-tittle">Date</div>
                    <div className="col-6 acco-sub-tittle">
                      Project Description
                    </div>
                    <div className="col-2 acco-sub-tittle client">Client</div>
                  </div>

                  {/* item 1 */}
                  <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto border-bottom border-2  border-black">
                    <div className="col-2 text-primary acco-status">
                      <FaCheck className="CheckBtn" />
                    </div>
                    <div className="col-2 text-primary new-date  ps-md-0 acco-date">
                      Aug-Sep, <br />
                      2023
                    </div>
                    <div className="col-6 new-dec acco-dec">
                      Develop and review their strategy and policies.
                    </div>
                    <div className="col-2 ">
                      <img className="img-fluid " src={PunsaaWeblogo} alt="" />
                    </div>
                  </div>


                  {/* item 2 */}
                  <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto border-bottom border-2  border-black">
                    <div className="col-2 text-primary acco-status">
                      <FaCheck className="CheckBtn" />
                    </div>
                    <div className="col-2 text-primary new-date  ps-md-0 acco-date">
                      2014
                    </div>
                    <div className="col-6 new-dec acco-dec">
                      Preparing strategic plan for TASS in Puntland
                    </div>
                    <div className="col-2 ">
                      <img className="img-fluid " src={tass} alt="" />
                    </div>
                  </div>


                  {/* item 3 */}
                  <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto border-bottom border-2  border-black">
                    <div className="col-2 text-primary acco-status">
                      <FaCheck className="CheckBtn" />
                    </div>
                    <div className="col-2 text-primary new-date  ps-md-0 acco-date">
                      2014
                    </div>
                    <div className="col-6 new-dec acco-dec">
                      Compilation of annual report for TASS and PUNSAA in Puntland
                    </div>
                    <div className="col-2 ">
                      <img className="img-fluid " src={tass} alt="" />
                    </div>
                  </div>


                  {/* item 4 */}
                  <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto border-bottom border-2  border-black">
                    <div className="col-2 text-primary acco-status">
                      <FaCheck className="CheckBtn" />
                    </div>
                    <div className="col-2 text-primary new-date  ps-md-0 acco-date">
                      2012
                    </div>
                    <div className="col-6 new-dec acco-dec">
                      Contracted to prepare annual report for Ministry of Women
                      development and family affairs (Mawdafa)
                    </div>
                    <div className="col-2 ">
                      <img className="img-fluid " src={MoWDAFA} alt="" />
                    </div>
                  </div>

                  {/* item 5 */}
                  <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto ">
                    <div className="col-2 text-primary acco-status">
                      <FaCheck className="CheckBtn" />
                    </div>
                    <div className="col-2 text-primary new-date  ps-md-0 acco-date">
                      2013
                    </div>
                    <div className="col-6 new-dec acco-dec">
                      Translation of curriculum and training manuals of Gender,
                      Conflict, Peace building and political participation of women in
                      Somalia.
                    </div>
                    <div className="col-2 ">
                      <img className="img-fluid " src={odeso} alt="" />
                    </div>
                  </div>


                </div>
              </Accordion.Body>
            </Accordion.Item>

            {/* BUSINESS DEVELOPMENT SERVICES */}
            <Accordion.Item eventKey="50">
              <Accordion.Header>
                <h5 className="acco-tittle"> BUSINESS DEVELOPMENT SERVICES </h5>
              </Accordion.Header>
              <Accordion.Body className="bg-secondary p-0 rounded-2">
                <div>
                  <div className="row bg-primary text-white p-2 p-md-3  rounded w-100 mx-auto">
                    <div className="col-2 acco-sub-tittle">Status</div>
                    <div className="col-2 acco-sub-tittle">Date</div>
                    <div className="col-6 acco-sub-tittle">
                      Project Description
                    </div>
                    <div className="col-2 acco-sub-tittle client">Client</div>
                  </div>

                  {/* item 1 */}
                  <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto border-bottom border-2  border-black">
                    <div className="col-2 text-primary acco-status">
                      <FaCheck className="CheckBtn" />
                    </div>
                    <div className="col-2 text-primary new-date  ps-md-0 acco-date">
                      Mar-May, <br />
                      2022
                    </div>
                    <div className="col-6 new-dec acco-dec">
                      Business   Organizational   Capaccity   Assessment   for   8
                      companies in Somalia
                    </div>
                    <div className="col-2 ">
                      <img className="img-fluid " src={ACEF} alt="" />
                      <img className="img-fluid " src={advisory} alt="" />
                    </div>
                  </div>


                  {/* item 2*/}
                  <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto border-bottom border-2  border-black">
                    <div className="col-2 text-primary acco-status">
                      <FaCheck className="CheckBtn" />
                    </div>
                    <div className="col-2 text-primary new-date  ps-md-0 acco-date">
                      Mar-Apr, <br />
                      2021
                    </div>
                    <div className="col-6 new-dec acco-dec">
                      Business Assessment and review to pre-selected 25 Somali
                      businesses carried out by Smart Vision in Puntland, Gedo and
                      Bandir.
                    </div>
                    <div className="col-2 ">
                      <img className="img-fluid " src={ACEF} alt="" />
                      <img className="img-fluid " src={advisory} alt="" />
                    </div>
                  </div>

                  {/* item 3 */}
                  <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto border-bottom border-2  border-black">
                    <div className="col-2 text-primary acco-status">
                      <FaCheck className="CheckBtn" />
                    </div>
                    <div className="col-2 text-primary new-date  ps-md-0 acco-date">
                      2012
                    </div>
                    <div className="col-6 new-dec acco-dec">
                      Feasibility study for Asli Mills company – A Somali company
                      that produces Natural cosmetics, spices and edible oils such as
                      sesame, black seed and others in Somaliland
                    </div>
                    <div className="col-2 ">
                      {/* <img className="img-fluid " src={tass} alt="" /> */}
                    </div>
                  </div>


                  {/* item 4 */}
                  <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto border-bottom border-2  border-black">
                    <div className="col-2 text-primary acco-status">
                      <FaCheck className="CheckBtn" />
                    </div>
                    <div className="col-2 text-primary new-date  ps-md-0 acco-date">
                      2012
                    </div>
                    <div className="col-6 new-dec acco-dec">
                      Participatory market systems development study in Galkacyo
                      in Somalia
                    </div>
                    <div className="col-2 ">
                      <img className="img-fluid " src={ilo} alt="" />
                    </div>
                  </div>

                  {/* item 5 */}
                  <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto ">
                    <div className="col-2 text-primary acco-status">
                      <FaCheck className="CheckBtn" />
                    </div>
                    <div className="col-2 text-primary new-date  ps-md-0 acco-date">
                      2012
                    </div>
                    <div className="col-6 new-dec acco-dec">
                      Market assessment and Skill training assignment done in
                      Nugaal and Bari regions
                    </div>
                    <div className="col-2 ">
                      <img className="img-fluid " src={handicap} alt="" />
                    </div>
                  </div>


                </div>
              </Accordion.Body>
            </Accordion.Item>


            {/* SPECIAL STUDIES */}
            <Accordion.Item eventKey="49">
              <Accordion.Header>
                <h5 className="acco-tittle"> SPECIAL STUDIES </h5>
              </Accordion.Header>
              <Accordion.Body className="bg-secondary p-0 rounded-2">
                <div>
                  <div className="row bg-primary text-white p-2 p-md-3  rounded w-100 mx-auto">
                    <div className="col-2 acco-sub-tittle">Status</div>
                    <div className="col-2 acco-sub-tittle">Date</div>
                    <div className="col-6 acco-sub-tittle">
                      Project Description
                    </div>
                    <div className="col-2 acco-sub-tittle client">Client</div>
                  </div>

                  {/* item 1 */}
                  <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto border-bottom border-2  border-black">
                    <div className="col-2 text-primary acco-status">
                      <FaCheck className="CheckBtn" />
                    </div>
                    <div className="col-2 text-primary new-date  ps-md-0 acco-date">
                      Mar, <br />
                      2021
                    </div>
                    <div className="col-6 new-dec acco-dec">
                      Conflict Analysis and Covid-19; Peace Influence and Women
                      Protection Needs in Displacement Settings  in Baidoa and
                      Dollow.
                    </div>
                    <div className="col-2 ">
                      <img className="img-fluid " src={danishGroup} alt="" />
                    </div>
                  </div>


                  {/* item 2*/}
                  <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto border-bottom border-2  border-black">
                    <div className="col-2 text-primary acco-status">
                      <FaCheck className="CheckBtn" />
                    </div>
                    <div className="col-2 text-primary new-date  ps-md-0 acco-date">
                      Nov-Mar, <br />
                      2021
                    </div>
                    <div className="col-6 new-dec acco-dec">
                      Conflict Analysis Water Conflicts and Social Cohesion in
                      Displacement Settings and Conflict and Covid-19 in Baidoa
                      and Kismayo
                    </div>
                    <div className="col-2 ">
                      <img className="img-fluid " src={danishGroup} alt="" />
                    </div>
                  </div>

                  {/* item 3 */}
                  <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto border-bottom border-2  border-black">
                    <div className="col-2 text-primary acco-status">
                      <FaCheck className="CheckBtn" />
                    </div>
                    <div className="col-2 text-primary new-date  ps-md-0 acco-date">
                      Mar, <br /> 2018
                    </div>
                    <div className="col-6 new-dec acco-dec">
                      TVET- Tracer Study of Waxbarashadu Waa Iftiin-2 (WWI-2)
                      Project – Puntland.
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
                    <div className="col-2 text-primary new-date  ps-md-0 acco-date">
                      2013
                    </div>
                    <div className="col-6 new-dec acco-dec">
                      Quantitative study on orphans and other vulnerable children in
                      Puntland state of Somalia
                    </div>
                    <div className="col-2 ">
                      <img className="img-fluid " src={paswe} alt="" />
                    </div>
                  </div>

                  {/* item 5 */}
                  <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto ">
                    <div className="col-2 text-primary acco-status">
                      <FaCheck className="CheckBtn" />
                    </div>
                    <div className="col-2 text-primary new-date  ps-md-0 acco-date">
                      2013
                    </div>
                    <div className="col-6 new-dec acco-dec">
                      Humantarian Pastoral study in Somalia
                    </div>
                    <div className="col-2 ">
                      <img className="img-fluid " src={danishGroup} alt="" />
                    </div>
                  </div>


                </div>
              </Accordion.Body>
            </Accordion.Item>



            {/* TRANSILATIONS */}
            <Accordion.Item eventKey="48">
              <Accordion.Header>
                <h5 className="acco-tittle"> TRANSILATIONS </h5>
              </Accordion.Header>
              <Accordion.Body className="bg-secondary p-0 rounded-2">
                <div>
                  <div className="row bg-primary text-white p-2 p-md-3  rounded w-100 mx-auto">
                    <div className="col-2 acco-sub-tittle">Status</div>
                    <div className="col-2 acco-sub-tittle">Date</div>
                    <div className="col-6 acco-sub-tittle">
                      Project Description
                    </div>
                    <div className="col-2 acco-sub-tittle client">Client</div>
                  </div>

                  {/* item 1 */}
                  <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto border-bottom border-2  border-black">
                    <div className="col-2 text-primary acco-status">
                      <FaCheck className="CheckBtn" />
                    </div>
                    <div className="col-2 text-primary new-date  ps-md-0 acco-date">
                      2023
                    </div>
                    <div className="col-6 new-dec acco-dec">
                      Translated Customs quality control documents
                    </div>
                    <div className="col-2 ">
                      <img className="img-fluid " src={sobsLogo} alt="" />
                    </div>
                  </div>


                  {/* item 2*/}
                  <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto border-bottom border-2  border-black">
                    <div className="col-2 text-primary acco-status">
                      <FaCheck className="CheckBtn" />
                    </div>
                    <div className="col-2 text-primary new-date  ps-md-0 acco-date">
                      2011
                    </div>
                    <div className="col-6 new-dec acco-dec">
                      Translations of Cash guidelines from English to Somali for Horn
                      Relief Somalia
                    </div>
                    <div className="col-2 ">
                      <img className="img-fluid " src={odeso} alt="" />
                    </div>
                  </div>

                  {/* item 3 */}
                  <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto border-bottom border-2  border-black">
                    <div className="col-2 text-primary acco-status">
                      <FaCheck className="CheckBtn" />
                    </div>
                    <div className="col-2 text-primary new-date  ps-md-0 acco-date">
                      2011
                    </div>
                    <div className="col-6 new-dec acco-dec">
                      Translation of Disaster Risk Reduction manual for community
                      members from English to Somali
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
                    <div className="col-2 text-primary new-date  ps-md-0 acco-date">
                      2011
                    </div>
                    <div className="col-6 new-dec acco-dec">
                      Contracted   to   translate   Pastoral   Youth   Leadership   (PYL)
                      curriculum
                    </div>
                    <div className="col-2 ">
                      <img className="img-fluid " src={odeso} alt="" />
                    </div>
                  </div>



                </div>
              </Accordion.Body>
            </Accordion.Item>


            {/* OTHER ASSIGNMENTS/PROJECTS */}
            <Accordion.Item eventKey="47">
              <Accordion.Header>
                <h5 className="acco-tittle"> OTHER ASSIGNMENTS/PROJECTS </h5>
              </Accordion.Header>
              <Accordion.Body className="bg-secondary p-0 rounded-2">
                <div>
                  <div className="row bg-primary text-white p-2 p-md-3  rounded w-100 mx-auto">
                    <div className="col-2 acco-sub-tittle">Status</div>
                    <div className="col-2 acco-sub-tittle">Date</div>
                    <div className="col-6 acco-sub-tittle">
                      Project Description
                    </div>
                    <div className="col-2 acco-sub-tittle client">Client</div>
                  </div>

                  {/* item 1 */}
                  <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto border-bottom border-2  border-black">
                    <div className="col-2 text-primary acco-status">
                      <FaCheck className="CheckBtn" />
                    </div>
                    <div className="col-2 text-primary new-date  ps-md-0 acco-date">
                      Apr-2024 <br /> Mar-2024
                    </div>
                    <div className="col-6 new-dec acco-dec">
                      Support in the implementation of the Quality infrastructure for
                      agricultural production (DQIAP) – component of the Deutsche
                      Gesellschaft für Internationale Zusammenarbeit (GIZ) Project
                      ‘Support for Agricultural Production and Quality Assurance
                      (SPQA) in Somalia.
                    </div>
                    <div className="col-2 ">
                      <img className="img-fluid " src={sos8} alt="" />
                    </div>
                  </div>


                  {/* item 2*/}
                  <div className="row align-items-center px-md-3 py-4 py-md-5  w-100 mx-auto ">
                    <div className="col-2 text-primary acco-status">
                      <FaCheck className="CheckBtn" />
                    </div>
                    <div className="col-2 text-primary new-date  ps-md-0 acco-date">
                      Mar-Dec <br />2021
                    </div>
                    <div className="col-6 new-dec acco-dec">
                    Assist   in   institutionalization,   reorganization,   modernization
                    and change management in beneficiary institutions.
                    </div>
                    <div className="col-2 ">
                      <img className="img-fluid " src={worldRankSign} alt="" />
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
