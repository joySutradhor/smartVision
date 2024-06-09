import ourBackgroundImg from "../../../assets/images/ourBackground.png";
import "./OurBackground.css";

const OurBackground = () => {
  return (
    <div className="sectionGap ">
      <div className="ourBgParent d-md-flex  justify-content-between ">
        <div className="col-md-6 col-12 pe-md-4 pe-lg-5">
          <h1 className="d-block d-md-none pb-3 pb-md-4">Our Background</h1>
          <img
            className="aboutOurBackgoundImg img-fluid"
            src={ourBackgroundImg}
            alt="aboutSectionRightImg"
          />
        </div>

        <div className="col-md-6 col-12 ps-md-4 ps-lg-5">
          <h1 className="pb-0 pb-md-4 d-none d-md-block">Our Background</h1>
          <p className="ourBackgroundParaFirst">
            Smart Vision was established in response to an overwhelming need
            among humanitarian and development organizations for efficient and
            accurate monitoring, evaluation, and research services. We are
            driven by a passion to help our clients reach their maximum
            potential in Somalia and the Horn of Africa{" "}
          </p>
          <p className="ourBackgroundPara">
            Since our inception 12 years ago, Smart Vision has become an
            industry leader in Somalia and Somaliland. We have gained an
            enviable reputation by providing top-rated M&E and research services
            and have expanded our support to include organizational capacity
            building. 
          </p>
          <p className="ourBackgroundPara">
            We are proud to have a track record of meeting and exceeding our
            clients’ expectations, and have received positive recommendations
            from both governmental and non-governmental organizations. We are a
            registered company in Somalia, Somaliland, Puntland and Jubbaland. 
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurBackground;
