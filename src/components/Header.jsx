import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "../assets/zacklogo.png";
import enFlag from "../assets/england_flag.jpg";
import frFlag from "../assets/france_flag.jpg";

function Header() {
  const { t, i18n } = useTranslation();
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

  const getClassName = (path) => {
    return location.pathname === path ? "selected" : "";
  };

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
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
            {t("Home")}
          </Link>
        </li>
        <li>
          <Link to="/works" className={getClassName("/works")}>
            {t("Works")}
          </Link>
        </li>
        <li>
          <Link to="/blog" className={getClassName("/blog")}>
            {t("Blog")}
          </Link>
        </li>
        <li className="noneDisplay">
          <Link to="/contact" className={getClassName("/contact")}>
            {t("contact")}
          </Link>
        </li>
      </ul>

      <div className="menuLangues">
        <div className="language-select">
          <select onChange={handleLanguageChange} value={i18n.language}>
            <option value="en">En</option>
            <option value="fr">Fr</option>
          </select>
          <img
            src={i18n.language === "en" ? enFlag : frFlag}
            alt={i18n.language === "en" ? "English" : "Français"}
            style={{ width: "20px", height: "20px", marginLeft: "5px" }}
          />
        </div>
        <button id="menuButton">
          <i className="bx bx-menu"></i>
        </button>
        <button>
          <Link to="/contact">{t("contact")}</Link>
        </button>
      </div>
    </nav>
  );
}

export default Header;
