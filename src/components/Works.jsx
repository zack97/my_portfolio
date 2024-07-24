import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import featuredWorks from "../model/featuredWorks";

const Works = () => {
  return (
    <>
      <Header />

      <h1 className="page-title">Works</h1>

      <div className="content">
        <div className="works-list">
          {featuredWorks.map((work, index) => (
            <div className="item" key={index}>
              <img src={work.img} alt={work.title} />
              <div className="details">
                <h3>{work.title}</h3>
                <div className="item-info">
                  <div className="year-badge">{work.year}</div>
                  <h4>{work.tech}</h4>
                </div>
                <p>{work.description}</p>
                <div className="viewgitub">
                  <a href={work.link} className=" a-backgroung">
                    View
                  </a>
                  <a href={work.linkcode} className=" a-backgroung">
                    Code source
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Works;
