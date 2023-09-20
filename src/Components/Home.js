import React from "react";

import BannerImage from '../images/image14.jpg'

import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">

        <div className="home-bannerImage-container">
          
        </div>
        <div className="home-text-section">
          <h2 className="primary-heading">
          Spicy chicken that’ll knock


          </h2>
          <p className="primary-text">
            Healthy switcher chefs do all the prep work, like peeding, chopping
            & marinating, so you can cook a fresh food.
          </p>
          <button className="secondary-button">
            Order Now <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
        <img src={BannerImage} alt="" />
         
        </div>
      </div>
    </div>
  );
};

export default Home;