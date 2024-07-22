import React from "react";
import logo from "../assets/zacklogo.png";

function Footer() {
  return (
    <footer>
      <div className="top">
        <div className="logo">
          <img src={logo}></img>
          <a href="/">ZackProg</a>
        </div>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="blog">Blog</a>
          </li>
          <li>
            <a href="contact">Contact</a>
          </li>
          <li>
            <a href="https://github.com/zack97">Github</a>
          </li>
        </ul>
        <div className="social-links">
          <a href="#">
            <i className="bx bxl-facebook"></i>
          </a>
          <a href="#">
            <i className="bx bxl-instagram"></i>
          </a>
          <a href="#">
            <i className="bx bxl-twitter"></i>
          </a>
          <a href="https://www.linkedin.com/in/zacharie3/">
            <i className="bx bxl-linkedin-square"></i>
          </a>
        </div>
      </div>
      <div className="separator1"></div>
      <div className="bottom">
        <h5>&copy; ZackProg 2024 All rights reserved </h5>
      </div>
    </footer>
  );
}

export default Footer;
