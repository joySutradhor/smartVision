import React from "react";
import "./GetTuch.css";
import rightArrow from "./../../../assets/images/rightarrow.png";
import Form from "./Form";

const GetTuch = () => {
  return (
    <div className="sectionGap containe contact">
      <div className="d-lg-flex justify-content-between align-items-center">
        <div className="col-12 col-lg-5">
          <h1 className="pb-0 pb-md-4">Get In Touch</h1>
          <p className="">
            Smart Vision was established in response to an overwhelming need
            among humanitarian and development organizations.
          </p>
          <p className="">
            We are driven by a passion to help our clients reach their maximum
            potential in Somalia and the Horn of Africa.
          </p>
          <p>
            Since our inception 10 years ago, Smart Vision has become an
            industry leader in Somalia and Somaliland. We have gained an
            enviable reputation by providing top-rated M&E and research services
            and have expanded our support to include organizational capacity
            building.
          </p>
        </div>

        <div className="col-12 mt-md-4 col-lg-6 bg-secondary rounded-4 p-4 p-md-5">
          
            <Form></Form>
         
        </div>
      </div>
    </div>
  );
};

export default GetTuch;
