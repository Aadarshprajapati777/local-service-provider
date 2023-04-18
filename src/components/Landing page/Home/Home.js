import React from 'react';
import Navbar from '../Navbar/Navbar';
import './home.css';
import BannerImage from './handyman.jpg';
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className='home-container'>
      <Navbar />
      <div className='home-banner-container' >
        <div className="home-text-section">
          <h1 className="primary-heading">
            Bridge the Gap between Service Provider and Consumer
          </h1>
          <p className="primary-text">
            Connect with reliable service providers near you, and get the job done right.
          </p>
          <button className="secondary-button">
            Get Started <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
        </div>
      </div>
    </div>
  )
}

export default Home