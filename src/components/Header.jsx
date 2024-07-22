import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/zacklogo.png";

function Header() {
  const location = useLocation();

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

  // Determine which route is active
  const getClassName = (path) => {
    return location.pathname === path ? "selected" : "";
  };

  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="Logo" />
        <Link to="/">ZackProg</Link>
      </div>
      <ul>
        <li>
          <Link to="/" className={getClassName("/")}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/works" className={getClassName("/works")}>
            Works
          </Link>
        </li>
        {/* <li>
          <Link to="/single-work" className={getClassName("/single-work")}>
            Single Work
          </Link>
        </li> */}
        <li>
          <Link to="/blog" className={getClassName("/blog")}>
            Blog
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
