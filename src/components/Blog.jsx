import React, { useState } from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import Header from "./Header";
import posts from "../model/posts";

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

  return (
    <>
      <Header />

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
