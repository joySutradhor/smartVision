import React, { useEffect } from "react";
import TracRecordBanner from "./TracRecordBanner/TracRecordBanner";
import Records from "./Records/Records";
import OurClients from './../Home/OurClients/OurClients';

const TracRecord = () => {

  useEffect(() => {
    window.scroll(0, 0)
  })

  return (
    <div>
      <TracRecordBanner />
      <Records></Records>
      <div className="track-record-client-bootom">
        <OurClients></OurClients>
      </div>
    </div>
  );
};

export default TracRecord;
