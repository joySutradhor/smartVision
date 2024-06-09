import React from "react";
import aretmatich from "../../../assets/images/arethmatich.png";
import "./ThematicAreas.css";

const ThematicAreas = () => {
  return (
    <div className="sectionGap">
      <div className="">
        <div className="col-12 col-md-7 m-auto text-center">
          <h1 className="pb-0 pb-md-3">Thematic Areas</h1>
          <p className="text-center">
            Smart Vision for Consultancy and Development was incorporated in
            2011 in Somalia.
          </p>
        </div>
        <img
          className="img-fluid w-100"
          src={aretmatich}
          alt="thematic areas"
        />
      </div>
    </div>
  );
};

export default ThematicAreas;
