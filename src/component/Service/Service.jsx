import React, { useEffect } from "react";
import Testimonial from "../Home/Testimonial/Testimonial";
import ServiceBanner from "./ServiceBanner/ServiceBanner";
import WhatWeOffer from "./WhatWeOffer/WhatWeOffer";

const Service = () => {
  useEffect(() => {
    window.scroll(0, 0);
  });

  return (
    <div>
      <ServiceBanner />
      <WhatWeOffer />
      <div className="testimonialTopSapce mx-auto w-100">
        <Testimonial></Testimonial>
      </div>
    </div>
  );
};

export default Service;
