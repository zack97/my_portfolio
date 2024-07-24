import React, { useState } from "react";
import profile from "../assets/zackimagenoir.jpg";
import { Link } from "react-router-dom";
import "./Portfolio.css";
import Footer from "./Footer";
import Header from "./Header";
import featuredWorks from "../model/featuredWorks";
import posts from "../model/posts";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  const [isExpanded, setIsExpanded] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleLoadMore = () => {
    setShowMore(true);
  };

  const displayedWorks = showMore ? featuredWorks : featuredWorks.slice(0, 3);
  const displayedPosts = posts.slice(0, 2);

  return (
    <>
      <Header />
      <div className="main">
        <div className="info">
          <h2>
            {t("greeting", { name: "Zacharie" })}
            <br />
            {t("title")}
          </h2>
          <div className={`profile-text ${isExpanded ? "expanded" : ""}`}>
            <p>{t("introduction")}</p>
          </div>
          <button className="button" onClick={toggleExpand}>
            {isExpanded ? t("showLess") : t("readMore")}
          </button>
          <br />
          <br />
          <a
            href="/MY_WEBDEVELOPER_CV_ZACHARIE.pdf"
            download="MY_WEBDEVELOPER_CV_ZACHARIE.pdf"
          >
            <button>{t("downloadResume")}</button>
          </a>
        </div>
        <img src={profile} alt={t("profileAlt")} />
      </div>

      <div className="lineDiv">
        <p className="spaceline"></p>
      </div>

      <div className="skills" id="skills">
        <h5>{t("skillsHeading")}</h5>
        <h3>{t("expertiseHeading")}</h3>
        <div className="skill-items">
          {[
            {
              icon: "bx-directions",
              title: "fullStack",
              description: "fullStackDesc",
            },
            {
              icon: "bx-bookmark-heart",
              title: "apiDev",
              description: "apiDevDesc",
            },
            {
              icon: "bxl-figma",
              title: "responsiveDesign",
              description: "responsiveDesignDesc",
            },
            {
              icon: "bx-code-alt",
              title: "dbManagement",
              description: "dbManagementDesc",
            },
            {
              icon: "bx-code-alt",
              title: "versionControl",
              description: "versionControlDesc",
            },
            {
              icon: "bx-code-alt",
              title: "performanceOpt",
              description: "performanceOptDesc",
            },
          ].map((skill, index) => (
            <div className="item" key={index}>
              <div className="icon">
                <i className={`bx ${skill.icon}`}></i>
              </div>
              <h4>{t(skill.title)}</h4>
              <p>{t(skill.description)}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="recent">
        <div className="header">
          <h4>
            <b>{t("blog")}</b> / {t("recentPosts")}
          </h4>
          <Link to="/blog">
            <a>{t("viewAll")}</a>
          </Link>
        </div>
        <div className="posts">
          {displayedPosts.map((post, index) => (
            <div className="post-item" key={index}>
              <h3>{post.title}</h3>
              <div className="info">
                <h5>{post.date}</h5>
                <h5>|</h5>
                <h5>{post.tags}</h5>
              </div>
              <p>{post.preview}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="separator">
        <h4>{t("featuredWorks")}</h4>
      </div>

      <div className="featured">
        {displayedWorks.map((work, index) => (
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
                  {t("view")}
                </a>
                <a href={work.linkcode} className=" a-backgroung">
                  {t("codeSource")}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      {!showMore && (
        <button className="load-more-button">
          <Link to="/works">{t("moreWorks")}</Link>
        </button>
      )}

      <Footer />
    </>
  );
};

export default Home;
