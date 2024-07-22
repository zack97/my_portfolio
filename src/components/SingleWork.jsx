import React from "react";
import logo from "../assets/zacklogo.png";
import singlePost1 from "../assets/single-post-1.png";
import singlePost2 from "../assets/single-post-2.png";
import featuredWorks from "../model/featuredWorks"; // Import the featuredWorks array
import Footer from "./Footer";
import { Link } from "react-router-dom";
import Header from "./Header";

const SingleWork = () => {
  return (
    <>
      <Header />

      <div className="content">
        {featuredWorks.map((work, index) => (
          <>
            <h1 className="page-title">{work.title}</h1>
            <div className="work-info" key={index}>
              <div className="year-badge">{work.year}</div>
              <div className="category">
                <p>{work.tech}</p>
              </div>
            </div>
            <p>{work.description}</p>
            <img src={work.img} alt={work.alt} />
            <div className="separator1"></div>
          </>
        ))}
      </div>

      <Footer />
    </>
  );
};

export default SingleWork;
