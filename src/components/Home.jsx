import React, { useState } from "react";
import profile from "../assets/zackimagenoir.jpg";
import { Link } from "react-router-dom";
import "./Portfolio.css";
import Footer from "./Footer";
import Header from "./Header";
import featuredWorks from "../model/featuredWorks";
import posts from "../model/posts";

const Home = () => {
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
            Hello, I'm Zacharie, <br />
            Full-Stack Developer | Creative Problem Solver
          </h2>
          <div className={`profile-text ${isExpanded ? "expanded" : ""}`}>
            <p>
              I am a passionate Full-Stack Developer currently preparing for my
              final year in Bachelor of Computer Management at EPHEC Belgium,
              starting September 2024. I recently completed intensive training
              at BeCode Bootcamp, gaining expertise in JavaScript, React,
              Node.js, Mysql, Laravel, Php, Java. This experience enhanced my
              ability to deliver high-quality, dynamic applications. I excel in
              both front-end and back-end development, creating user-centric
              solutions. Committed to continuous learning, I stay updated with
              industry trends and enjoy contributing to open-source projects.
            </p>
          </div>
          <button className="button" onClick={toggleExpand}>
            {isExpanded ? "Show Less" : "Read More"}
          </button>
          <br />
          <br />
          <a
            href="/MY_WEBDEVELOPER_CV_ZACHARIE.pdf"
            download="MY_WEBDEVELOPER_CV_ZACHARIE.pdf"
          >
            <button>Download Resume</button>
          </a>
        </div>
        <img src={profile} alt="Profile" />
      </div>

      <div className="lineDiv">
        <p className="spaceline"></p>
      </div>

      <div className="skills" id="skills">
        <h5>My Skills</h5>
        <h3>My Expertise</h3>
        <div className="skill-items">
          <div className="item">
            <div className="icon">
              <i className="bx bx-directions"></i>
            </div>
            <h4>Full-Stack Development</h4>
            <p>
              Proficient in both front-end and back-end technologies, including
              JavaScript, React, Node.js, Java, PHP, Laravel, and databases,
              enabling the creation of complete web applications from start to
              finish.
            </p>
          </div>
          <div className="item">
            <div className="icon">
              <i className="bx bx-bookmark-heart"></i>
            </div>
            <h4>API Development & Integration</h4>
            <p>
              Skilled in designing and implementing RESTful APIs, as well as
              integrating third-party services to enhance application
              functionality and connectivity.
            </p>
          </div>
          <div className="item">
            <div className="icon">
              <i className="bx bxl-figma"></i>
            </div>
            <h4>Responsive Web Design</h4>
            <p>
              Expert in crafting responsive and adaptive web designs using HTML,
              CSS, and frameworks like Bootstrap, ensuring a seamless experience
              across devices and screen sizes.
            </p>
          </div>
          <div className="item">
            <div className="icon">
              <i className="bx bx-code-alt"></i>
            </div>
            <h4>Database Management</h4>
            <p>
              Experienced in managing and optimizing databases, including SQL
              (MySQL, PostgreSQL) and NoSQL (MongoDB), to ensure efficient data
              storage, retrieval, and manipulation.
            </p>
          </div>
          <div className="item">
            <div className="icon">
              <i className="bx bx-code-alt"></i>
            </div>
            <h4>Version Control & Collaboration</h4>
            <p>
              Proficient in using Git and GitHub for version control and
              collaboration, facilitating smooth team workflows and maintaining
              code integrity across projects.
            </p>
          </div>
          <div className="item">
            <div className="icon">
              <i className="bx bx-code-alt"></i>
            </div>
            <h4>Performance Optimization</h4>
            <p>
              Skilled in performance optimization techniques, including code
              splitting, lazy loading, and efficient querying to enhance
              application speed and responsiveness.
            </p>
          </div>
        </div>
      </div>

      <div className="recent">
        <div className="header">
          <h4>
            <b>BLOG</b> / Recent Posts
          </h4>
          <Link to="/blog">
            <a>View all</a>
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
        <h4>Featured Works</h4>
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
            </div>
          </div>
        ))}
      </div>
      {!showMore && (
        <button className="load-more-button">
          <Link to="/works">More Works</Link>
        </button>
      )}

      <Footer />
    </>
  );
};

export default Home;
