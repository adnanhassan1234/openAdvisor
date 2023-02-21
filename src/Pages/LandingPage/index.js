import React from "react";
import Banner from "../../Components/Banner";
import LogoSlider from "../../Components/LogoSlider";
import AboutUs from "../../Components/AboutUs";
import Blogs from "../../Components/Blogs";
import PostSection from "../../Components/PostSection";
import SliderSection from "../../Components/SliderSection";



const LandingPage = (props) => {
  return (
    <>
        <Banner
            HomerBanner
            title={"Find your Strategic Advisor"}
            description={"Open Founder helps early and mid stage startups from around the world find strategic mentors, who impart the wisdom and guidance of years spent transforming industries."}
            buttonText={"Sign in"}
            buttonUrl={"#"}
        />
        <LogoSlider />
        <AboutUs />
        <SliderSection />
        <PostSection />
        <Blogs />

    </>
  );
};

export default LandingPage;
