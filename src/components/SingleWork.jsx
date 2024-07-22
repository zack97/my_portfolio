import React from "react";
import logo from "../assets/zacklogo.png";
import singlePost1 from "../assets/single-post-1.png";
import singlePost2 from "../assets/single-post-2.png";
import Footer from "./Footer";

const SingleWork = () => {
  return (
    <>
      <nav>
        <div className="logo">
          <img src={logo} alt="Logo" />
          <a href="/">ZackProg</a>
        </div>
        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/works">Works</a>
          <a className="selected" href="/single-work">
            Single Work
          </a>
          <a href="/blog">Blog</a>
          <a href="/contact">Contact</a>
        </div>
      </nav>

      <h1 className="page-title">
        Designing Dashboards with usability in mind
      </h1>

      <div className="content">
        <div className="work-info">
          <div className="year-badge">2024</div>
          <div className="category">
            <p>Dashboard, User Experience Design</p>
          </div>
        </div>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non beatae
          qui et dolores minima illo facilis modi? Porro alias.
        </p>

        <img src={singlePost1} alt="Designing Dashboards" />

        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>

        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid, ad,
          modi soluta consectetur ipsam in molestias saepe totam unde incidunt
          adipisci laboriosam cum quis impedit vel eaque, harum ratione minus.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quae
          incidunt accusamus dolorem voluptate obcaecati enim maiores, minus
          magnam illum facilis, quibusdam qui. Quaerat modi magni sed. Eius, ea
          magni!
        </p>

        <img src={singlePost2} alt="Dashboard Usability" />
      </div>

      <Footer />
    </>
  );
};

export default SingleWork;
