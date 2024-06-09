import React, { useEffect } from "react";
import Banner from "./Banner/Banner";
import About from "./About/About";
import OurService from "./OurService/OurService";
import ThematicAreas from "./ThematicAreas/ThematicAreas";
import OurClients from "./OurClients/OurClients";
import Testimonial from "./Testimonial/Testimonial";
import Team from "./Team/Team";
import TrackRecords from "./TrackRecords/TrackRecords";

const Home = () => {
  
  useEffect(()=>{
    window.scroll(0,0)
  })
  return (
    <div className="containe mt-5 mt-md-0">
      <Banner></Banner>
      <About></About>
      <OurService></OurService>
      <ThematicAreas />
      <TrackRecords></TrackRecords>
      <Team></Team>
      <OurClients></OurClients>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
