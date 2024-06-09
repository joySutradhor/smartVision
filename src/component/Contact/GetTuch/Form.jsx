import React from "react";
import rightArrow from "./../../../assets/images/rightarrow.png";

const Form = () => {
  return (
    <form>
      <input type="text" className="form-control" placeholder="Full Name" />

      <input type="email" className="form-control" placeholder="Active Email" />
      <input
        type="number"
        className="form-control"
        placeholder="Phone Number"
      />
      <input type="text" className="form-control" placeholder="Subject" />
      <textarea type="text" rows="10" cols="50" placeholder="Message" />
      <button className="custom-button">
        Send Request <img className="ms-2  d-md-none" src={rightArrow} alt="" />
      </button>
    </form>
  );
};

export default Form;
