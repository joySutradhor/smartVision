import React, { useEffect } from "react";
import ContactBanner from "./ContactBanner/ContactBanner";
import GetTuch from "./GetTuch/GetTuch";
import FAQ from "./FAQ/FAQ";

const Contact = () => {

  useEffect(()=>{
    window.scroll(0,0)
  })

  return (
    <div>
      <ContactBanner />
      <GetTuch />
      <FAQ></FAQ>
    </div>
  );
};

export default Contact;
