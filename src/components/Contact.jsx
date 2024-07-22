import React from "react";
import logo from "../assets/zacklogo.png";
import profile from "../assets/profile_image1.jpg";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import Header from "./Header";

const About = () => {
  return (
    <>
      <Header />

      <h1 className="page-title">About</h1>

      <div className="content">
        <div className="container">
          <img src={profile} alt="Profile" />
          <div className="about">
            <h2>I'm Zacharie Tshilomba</h2>
            <p>
              I am a passionate software developer with experience in building
              dynamic and responsive web applications. My expertise lies in
              using modern frameworks and technologies to create efficient and
              scalable solutions. I enjoy tackling complex problems and
              continuously strive to learn and improve my skills. My projects
              reflect my dedication to quality and innovation.
            </p>
            <p className="email">Contact Me : tshibzack@gmail.com</p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;
