import React, { useState } from "react";
import logo from "../assets/zacklogo.png";
import Footer from "./Footer";

const Blog = () => {
  const [expandedPost, setExpandedPost] = useState(null);

  const handleReadMore = (index) => {
    setExpandedPost(expandedPost === index ? null : index);
  };

  const handleShare = (post) => {
    if (navigator.share) {
      navigator
        .share({
          title: post.title,
          text: post.preview,
          url: window.location.href,
        })
        .then(() => console.log("Successful share"))
        .catch((error) => console.log("Error sharing", error));
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("URL copied to clipboard");
    }
  };

  const handleCopyLink = (index) => {
    const postUrl = `${window.location.origin}/blog#post-${index}`;
    navigator.clipboard.writeText(postUrl);
    alert("Post URL copied to clipboard");
  };

  const posts = [
    {
      title: "Making a layout system from scratch",
      date: "12 July 2024",
      tags: "Design, Layout",
      preview:
        "Creating a layout system from scratch involves several key steps and tools. Start by defining your project’s needs and designing a flexible grid system using tools like Figma or Sketch for mockups...",
      fullText:
        "Creating a layout system from scratch involves several key steps and tools. Start by defining your project’s needs and designing a flexible grid system using tools like Figma or Sketch for mockups. Implement responsive layouts with CSS Grid or Flexbox for adaptable columns and rows. Use Sass or LESS to manage your stylesheets efficiently. PostCSS can help with automating CSS properties and optimizing your code. Test across various devices using tools like BrowserStack or Responsive Design Mode in browsers. Ensure performance optimization with Lighthouse. Document your system with tools like Storybook or Zeroheight to maintain consistency and ease future updates.",
    },
    {
      title: "Understanding CSS Grid",
      date: "15 July 2024",
      tags: "CSS, Grid",
      preview:
        "CSS Grid Layout is a two-dimensional layout system for the web. It allows you to design complex web layouts with simple code...",
      fullText:
        "CSS Grid Layout is a two-dimensional layout system for the web. It allows you to design complex web layouts with simple code. Grid enables you to create rows and columns with ease, making responsive designs more manageable. With CSS Grid, you can define areas within your layout and place elements accordingly. It's particularly useful for creating complex layouts that need precise alignment and spacing. Tools like Chrome DevTools make debugging CSS Grid layouts straightforward, while online resources such as MDN Web Docs provide extensive guides and examples.",
    },
    {
      title: "Mastering Flexbox for Responsive Design",
      date: "20 July 2024",
      tags: "CSS, Flexbox",
      preview:
        "Flexbox is a one-dimensional layout model in CSS that helps in aligning items along a row or column. It’s ideal for creating responsive layouts...",
      fullText:
        "Flexbox is a one-dimensional layout model in CSS that helps in aligning items along a row or column. It’s ideal for creating responsive layouts that adapt to different screen sizes. Flexbox allows for easy distribution of space and alignment of items within a container. With properties like flex-direction, flex-wrap, and justify-content, you can build flexible and responsive designs quickly. Using Flexbox together with media queries can help you create layouts that adjust gracefully across various devices. Tools like CSS Tricks and Flexbox Froggy are great for learning and practicing Flexbox techniques.",
    },
  ];

  return (
    <>
      <nav>
        <div className="logo">
          <img src={logo} alt="Logo" />
          <a href="/">ZackProg</a>
        </div>
        <div className="nav-links">
          <a href="/">Home</a>
          <a href="works">Works</a>
          <a href="single-work">Single Work</a>
          <a className="selected" href="blog">
            Blog
          </a>
          <a href="contact">Contact</a>
        </div>
      </nav>

      <h1 className="page-title">Blog</h1>

      <div className="content">
        <div className="post-list">
          {posts.map((post, index) => (
            <div className="post-item" key={index} id={`post-${index}`}>
              <h3>{post.title}</h3>
              <div className="info">
                <h5>{post.date}</h5>
                <h5>|</h5>
                <h5>{post.tags}</h5>
              </div>
              <p>{expandedPost === index ? post.fullText : post.preview}</p>
              <div className="buttons">
                <i
                  className="bx bx-share"
                  onClick={() => handleShare(post)}
                ></i>
                <i
                  className="bx bx-link-alt"
                  onClick={() => handleCopyLink(index)}
                ></i>
                <i
                  className="bx bx-copy"
                  onClick={() => handleCopyLink(index)}
                ></i>
                <i className="bx bx-bookmark-plus"></i>
                <button onClick={() => handleReadMore(index)}>
                  {expandedPost === index ? "Read Less" : "Read More"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Blog;
