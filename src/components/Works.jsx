import React from "react";
import logo from "../assets/zacklogo.png";
import item1 from "../assets/item-1.jpg";
import item2 from "../assets/item-2.jpg";
import item3 from "../assets/item-3.jpg";
import Footer from "./Footer";

const featuredWorks = [
  {
    img: item1,
    title: "Ecommerce Website with PHP Laravel",
    year: "2024",
    tech: "PHP, Laravel",
    description:
      "An ecommerce platform developed using PHP and Laravel, featuring product management, shopping cart, and secure payment integration.",
  },
  {
    img: item2,
    title: "Dashboard Website with React",
    year: "2024",
    tech: "React",
    description:
      "A dynamic dashboard application built with React, offering real-time data visualization and interactive user interfaces.",
  },
  {
    img: item3,
    title: "Job Work Searching with React",
    year: "2024",
    tech: "React",
    description:
      "A job search application using React that allows users to find and apply for job listings with filters and user authentication.",
  },
  {
    img: item1,
    title: "Password Generator with Java",
    year: "2024",
    tech: "Java",
    description:
      "A secure password generator built in Java, featuring customizable options for length and complexity.",
  },
  {
    img: item2,
    title: "QR Generator with Java",
    year: "2024",
    tech: "Java",
    description:
      "A Java application that generates QR codes for various types of data, including URLs and text.",
  },
  {
    img: item3,
    title: "Detect Device Battery with JavaScript",
    year: "2024",
    tech: "JavaScript",
    description:
      "A JavaScript utility to detect and display the device's battery status in real-time.",
  },
  {
    img: item1,
    title: "Translator App with React",
    year: "2024",
    tech: "React",
    description:
      "A translation application built with React, allowing users to translate text between multiple languages.",
  },
  {
    img: item2,
    title: "Budget App with React",
    year: "2024",
    tech: "React",
    description:
      "A budgeting application built with React, featuring expense tracking and financial insights.",
  },
  {
    img: item3,
    title: "Chat GPT Bot with JavaScript",
    year: "2024",
    tech: "JavaScript",
    description:
      "A chatbot application utilizing GPT technology, developed using JavaScript for interactive conversations.",
  },
  {
    img: item1,
    title: "Chess Game with React",
    year: "2024",
    tech: "React",
    description:
      "A chess game built with React, featuring real-time gameplay and chessboard interactions.",
  },
  // Add more works here
];

const Works = () => {
  return (
    <>
      <nav>
        <div className="logo">
          <img src={logo} alt="Logo" />
          <a href="/">ZackProg</a>
        </div>
        <div className="nav-links">
          <a href="/">Home</a>
          <a className="selected" href="/works">
            Works
          </a>
          <a href="/single-work">Single Work</a>
          <a href="/blog">Blog</a>
          <a href="/contact">Contact</a>
        </div>
      </nav>

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
