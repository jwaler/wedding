import "./../App.css";
import React from "react";
// import logo from "./../static/img/camb2.png";

const NavBar = () => {
  function closeNav() {
    document.getElementById("toggler").classList.add("collapsed");
    document
      .getElementById("navbarNavAltMarkup")
      .classList.replace("show", "hide");
  }
  const logo = "Benjamin & Camille";
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
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="align-menu-link"></div>
        <div className="nav-main">
          <a href="#accueil" onClick={closeNav}>
            Accueil
          </a>
        </div>
        <div className="nav-main">
          <a href="#programme" onClick={closeNav}>
            Programme
          </a>
        </div>
        <div className="nav-main">
          <a href="#liste-de-mariage" onClick={closeNav}>
            Liste de Mariage
          </a>
        </div>
        <div className="nav-main">
          <a href="#rsvp" onClick={closeNav}>
            RSVP
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
