import "./../App.css";
import React from "react";
import insta from "./../static/img/insta.png";
import { Link } from "react-scroll";
// import logo from "./../static/img/camb2.png";

const NavBar = () => {
  function closeNav() {
    document.getElementById("toggler").classList.add("collapsed");
    document
      .getElementById("navbarNavAltMarkup")
      .classList.replace("show", "hide");
  }
  const logo = "BENJAMIN ET CAMILLE";
  return (
    <nav className="navbar mynavbar navbar-expand-lg navbar-light bg-light">
      <button
        id="toggler"
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      {/* <img style={{ height: "40px" }} src={logo} alt="" /> */}
      {/* <b>{logo}</b> */}
      <div className="logo-couple">
        <div>#benetcam22</div>
      </div>
      <div className="insta">
        <a href="https://www.instagram.com/ben_cam_2022">
          <img className="insta-logo" src={insta} alt={insta} />
        </a>
      </div>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="align-menu-link"></div>
        <div className="nav-main">
          <Link
            className="link"
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            onClick={closeNav}
          >
            ACCUEIL
          </Link>
        </div>
        <div className="nav-main">
          <Link
            className="link"
            to="programme"
            spy={true}
            smooth={true}
            onClick={closeNav}
          >
            PROGRAMME
          </Link>
        </div>
        <div className="nav-main">
          <a href="#liste-de-mariage" onClick={closeNav}>
            LISTE DE MARIAGE
          </a>
        </div>
        <div className="nav-main">
          <Link
            className="link"
            to="rsvp"
            spy={true}
            smooth={true}
            onClick={closeNav}
          >
            RSVP
          </Link>
        </div>
      </div>
      <div className="hashtag">#benetcam22</div>
      <div className="insta">
        <a href="https://www.instagram.com/ben_cam_2022">
          <img className="insta-large-screen" src={insta} alt={insta} />
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
