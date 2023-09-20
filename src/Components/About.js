import React from "react";
import AboutBackground from '../images/image16.jpg'
import AboutBackgroundImage  from '../images/image17.jpg'

import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
      <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
      <img src={AboutBackgroundImage} alt="" />
        
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
        It’s all about foooood
        </h1>
        <p className="primary-text">
        KFC Corporation, doing business as Kentucky Fried Chicken (KFC), is an American fast food restaurant chain headquartered in Louisville, Kentucky, that specializes in fried chicken. It is the world's second-largest restaurant chain (as measured by sales) after McDonald's, with 22,621 locations globally in 150 countries as of December 2019.[4] The chain is a subsidiary of Yum! Brands, a restaurant company that also owns the Pizza Hut and Taco Bell chains.[5]
        </p>
        <p className="primary-text">
        By branding himself as "Colonel Sanders", Harland became a prominent figure of American cultural history and his image remains widely used in KFC advertising to this day. However, the company's rapid expansion overwhelmed the aging Sanders and he sold it to a group of investors led by John Y. Brown Jr. and Jack C. Massey in 1964.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;