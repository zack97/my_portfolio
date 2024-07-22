import React from "react";
import logo from "../assets/zacklogo.png";
import singlePost1 from "../assets/single-post-1.png";
import singlePost2 from "../assets/single-post-2.png";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const SingleWork = () => {
  return (
    <>
      <nav>
        <div className="logo">
          <img src={logo} alt="Logo" />
          <Link to="/">
            <a>ZackProg</a>
          </Link>
        </div>
        <div className="nav-links">
          <Link to="/">
            <a>Home</a>
          </Link>
          <Link to="/works">
            <a>Works</a>
          </Link>
          <Link to="/single-work">
            <a className="selected">Single Work</a>
          </Link>
          <Link to="/blog">
            <a>Blog</a>
          </Link>
          <Link to="/contact">
            <a>Contact</a>
          </Link>
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
