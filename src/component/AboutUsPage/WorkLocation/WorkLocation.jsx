import "./WorkLocation.css";
import locationMap from "../../../assets/images/map.png";
const WorkLocation = () => {
  return (
    <div className="sectionSpace pt-5 pt-md-0 mt-0 ">
      <h1 className="locationTitle text-center mb-3">Work Locations</h1>
      <img
        className="locationImg"
        src={locationMap}
        alt="location map img img-fluid"
        srcset=""
      />
    </div>
  );
};

export default WorkLocation;
