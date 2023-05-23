import React from "react";
import AboutBackgroundImage from "./aboutimage2.png";
import { BsFillPlayCircleFill } from "react-icons/bs";
import aboutimage from "./about.jpeg";
import "./about.css";

const About = () => {
    return (
        <div className="about-section-container">
            {/* <div className="about-section-image-container">
                <img src={AboutBackgroundImage} alt="" />
            </div> */}
            <div className="about-image">
                <img src={aboutimage} alt="" />
            </div>
            <div className="about-section-text-container">
                <p className="primary-subheading">About us</p>
                {/* <h1 className="primary-heading">
                    Whether it's a big project or a small repair job, our platform has got you covered
                </h1> */}
                <p className="primary-text">
                    At HandyHire, we believe in making quality services accessible and affordable for everyone. We understand that finding skilled professionals for your various needs can be a daunting task, and that's why we've created a platform that simplifies the process and connects you with reliable service providers near you.
                    Our platform is designed to bridge the gap between service providers and consumers, and empower both parties by providing a seamless and efficient way to connect. With our easy-to-use interface, you can easily search and filter service providers based on your specific requirements and location, making it easier than ever to find the right person for the job.
                </p>

                <p className="primary-text">
                </p>

            </div>



        </div>
    );
};

export default About;