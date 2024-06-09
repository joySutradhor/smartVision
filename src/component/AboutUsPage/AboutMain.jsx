import { useEffect } from "react";
import AboutUsPageSection from "./AboutUsPageSection";
import AboutUsSlider from "./AboutUsSlider/AboutUsSlider";
import OurBackground from "./OurBackground/OurBackground";
import OurManagement from "./OurManagement/OurManagement";
import OurMissionPage from "./OurMissionPage/OurMissionPage";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs";
import WorkLocation from "./WorkLocation/WorkLocation";


const AboutMain = () => {
    useEffect(()=>{
        window.scroll(0,0)
      })
    return (
        <div>
            <AboutUsPageSection></AboutUsPageSection>
            <OurBackground></OurBackground>
            <WhyChooseUs></WhyChooseUs>
            <OurMissionPage></OurMissionPage>
            <OurManagement></OurManagement>
            <WorkLocation></WorkLocation>
            <AboutUsSlider></AboutUsSlider>
        </div>
    );
};

export default AboutMain;