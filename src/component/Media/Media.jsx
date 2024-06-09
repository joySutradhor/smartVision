import React, { useEffect } from "react";
import MediaBanner from "./MediaBanner/MediaBanner";
import PhotoGallery from "./PhotoGallery/PhotoGallery";
import VideoGallary from "./VideoGallery/VideoGallary";

const Media = () => {

  useEffect(()=>{
    window.scroll(0,0)
  })

  return (
    <div>
      <MediaBanner></MediaBanner>
      <PhotoGallery></PhotoGallery>
      <VideoGallary></VideoGallary>
    </div>
  );
};

export default Media;
