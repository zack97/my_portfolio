import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/zacklogo.png";

function Header() {
  useEffect(() => {
    const menuButton = document.getElementById("menuButton");
    menuButton.addEventListener("click", openMenu);

    return () => {
      menuButton.removeEventListener("click", openMenu);
    };
  }, []);

  function openMenu() {
    const nav = document.querySelector("nav");
    nav.classList.toggle("open");
  }

  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="Logo" />
        <Link to="/">ZackProg</Link>
      </div>
      <ul>
        <li>
          <Link to="/">
            <span className="selected">Home</span>
          </Link>
        </li>
        <li>
          <Link to="/works">
            <span>Works</span>
          </Link>
        </li>
        {/* <li>
          <Link to="/single-work">
            <span>Single Work</span>
          </Link>
        </li> */}
        <li>
          <Link to="/blog">
            <span>Blog</span>
          </Link>
        </li>
      </ul>
      <button>
        <Link to="/contact">Contact me</Link>
      </button>
      <button id="menuButton">
        <i className="bx bx-menu"></i>
      </button>
    </nav>
  );
}

export default Header;
