import React from 'react';
import Navbar from '../Navbar/Navbar';
import './home.css';
import BannerImage from './sidegif.gif';
import { FiArrowRight } from "react-icons/fi";
import About from '../About/About';
import Contact from '../Contact/Contact';

import { TransitionGroup, CSSTransition } from 'react-transition-group';

const Home = () => {
  return (
    <div>

      <div className='home-container'>
        <Navbar />
        <TransitionGroup>
          <CSSTransition classNames="fade" timeout={500}>
            <div className='home-banner-container' >
              <div className="home-text-section">
                <h1 className="primary-heading">
                  Bridge the Gap between Service Provider and Consumer
                </h1>
                <p className="primary-text">
                  Welcome to Local Service Provider, your go-to platform for connecting with skilled professionals in your area. Whether you need a plumber, electrician, tutor, or any other service provider, we've got you covered. Our platform simplifies the process of finding reliable experts, ensuring you get quality services without the hassle. With a seamless search and filter system, you can easily locate the right person for the job. Empowering individuals and organizations, we're here to bridge the gap between service providers and those in need. Experience convenience and excellence with Local Service Provider today.
                  Connect with reliable service providers near you, and get the job done right.
                </p>
                <button className="secondary-button">
                  Get Started <FiArrowRight />{" "}
                </button>
              </div>
              <div className="home-image-section">
                <img src={BannerImage} alt="gif" />
              </div>

            </div>

          </CSSTransition>
        </TransitionGroup>
      </div>

      <TransitionGroup>
        <CSSTransition classNames="fade" timeout={500}>
          <About />
        </CSSTransition>
        <CSSTransition classNames="fade" timeout={500}>
          <Contact />
        </CSSTransition>
      </TransitionGroup>

    </div>
  )
}

export default Home