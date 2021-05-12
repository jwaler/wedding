import "./../App.css";
import React from "react";
import insta from "./../static/img/insta.png";
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
      <div className="logo-couple">{logo}</div>
      <div className="insta">
        <a href="https://www.instagram.com/ben_cam_2022">
          <img className="insta-logo" src={insta} alt={insta} />
        </a>
      </div>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="align-menu-link"></div>
        <div className="nav-main">
          <a href="#accueil" onClick={closeNav}>
            ACCUEIL
          </a>
        </div>
        <div className="nav-main">
          <a href="#programme" onClick={closeNav}>
            PROGRAMME
          </a>
        </div>
        <div className="nav-main">
          <a href="#liste-de-mariage" onClick={closeNav}>
            LISTE DE MARIAGE
          </a>
        </div>
        <div className="nav-main">
          <a href="#rsvp" onClick={closeNav}>
            RSVP
          </a>
        </div>
      </div>
      <div className="insta">
        <a href="https://www.instagram.com/ben_cam_2022">
          <img className="insta-large-screen" src={insta} alt={insta} />
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
