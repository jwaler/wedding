import "./../App.css";
import "./../Navbar.css";
import React from "react";
import insta from "./../static/img/insta.png";
import { Link } from "react-scroll";
import cametben from "./../static/img/camb1.png";
import logo from "./../static/img/logo.png";
// import logo from "./../static/img/camb2.png";

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
      menu: "supermenu",
      initial: "toggle",
      triggered: "supertoggle notvisible",
      togglebutton: "",
    };
    this.closeNav = this.closeNav.bind(this);
    this.showMenu = this.showMenu.bind(this);
  }
  componentDidMount() {
    this.setState({
      menu: "supermenu",
      togglebutton: "",
    });
  }
  closeNav() {
    this.setState({
      isActive: false,
      menu: "supermenu",
      initial: "toggle",
      triggered: "",
    });
  }
  showMenu() {
    if (this.state.isActive === true) {
      this.setState({
        isActive: false,
        menu: "supermenu",
        initial: "toggle",
        triggered: "",
        togglebutton: "",
      });
    } else {
      this.setState({
        isActive: true,
        menu: "supermenu superactive",
        initial: "toggle notvisible",
        triggered: "supertoggle",
        togglebutton: "on",
      });
    }
  }
  render() {
    return (
      <div className="navbar-scroll">
        <nav className="navbar mynavbar navbar-expand-lg navbar-light bg-light">
          <div className="logo-toggler">
            <button
              id="toggler"
              className={this.state.initial}
              type="button"
              onClick={this.showMenu}
            >
              <a className="atoggle">
                <i className="fa fa-bars"></i>
              </a>
            </button>
          </div>
          {/* MOBILE IPAD NAVBAR RENDERING */}
          <div className="logo-couple">
            <img className="main-logo" src={logo} alt={logo} />
          </div>
          <div className="insta">
            <a href="https://www.instagram.com/ben_cam_2022">
              <img className="insta-logo" src={insta} alt={insta} />
              <p></p>
              <div
                className="not-visible-for-desktop"
                style={{ fontSize: "7px" }}
              >
                #BENETCAM22
              </div>
            </a>
          </div>
          {/* MENU DESKTOP */}
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="align-menu-link"></div>
            <div className="nav-main">
              <img className="main-logo" src={logo} alt={logo} />
            </div>
            <div className="nav-main">
              <Link
                activeClass={"active"}
                className="link"
                to="home"
                spy={true}
                smooth={true}
              >
                ACCUEIL
              </Link>
            </div>
            <div className="nav-main">
              <Link
                activeClass={"active"}
                className={`link`}
                to="programme"
                spy={true}
                smooth={true}
              >
                PROGRAMME
              </Link>
            </div>
            <div className="nav-main">
              <a href="https://www.millemercismariage.com/benjamin-camille/mariage-de-benjamin-leroux-et-camille-chafey.html">
                LISTE DE MARIAGE
              </a>
            </div>
            <div className="nav-main">
              <Link
                activeClass={"active"}
                className="link"
                to="rsvp"
                spy={true}
                smooth={true}
              >
                RSVP
              </Link>
            </div>
            <div className="nav-main">
              <Link
                activeClass={"active"}
                className="link"
                to="contact"
                spy={true}
                smooth={true}
              >
                CONTACT
              </Link>
            </div>
          </div>

          {/* MENU IPAD ? MOB */}
          <div className={this.state.menu}>
            <button
              id="toggler"
              className={this.state.triggered}
              type="button"
              onClick={this.showMenu}
            >
              <a className="asupertoggle">
                <i className="fa fa-times" aria-hidden="true"></i>
              </a>
            </button>
            <ul className="superul" style={{ paddingBottom: "20%" }}>
              <img style={{ width: "150px" }} src={logo} alt={logo} />
              <hr className="sidemenu" />
              <li className="superli">
                <Link
                  className="link"
                  activeClass="active"
                  to="home"
                  spy={true}
                  smooth={true}
                  onClick={this.closeNav}
                >
                  ACCUEIL
                </Link>
              </li>
              <li className="superli">
                <Link
                  className="link"
                  to="programme"
                  spy={true}
                  smooth={true}
                  onClick={this.closeNav}
                >
                  PROGRAMME
                </Link>
              </li>
              <li className="superli">
                <a
                  href="https://www.millemercismariage.com/benjamin-camille/mariage-de-benjamin-leroux-et-camille-chafey.html"
                  onClick={this.closeNav}
                >
                  LISTE DE MARIAGE
                </a>
              </li>
              <li className="superli">
                <Link
                  className="link"
                  to="rsvp"
                  spy={true}
                  smooth={true}
                  onClick={this.closeNav}
                >
                  RSVP
                </Link>
              </li>
              <li className="superli">
                <Link
                  className="link"
                  to="contact"
                  spy={true}
                  smooth={true}
                  onClick={this.closeNav}
                >
                  CONTACT
                </Link>
              </li>
              <hr className="sidemenu" />
            </ul>
          </div>

          <div className="insta">
            <a href="https://www.instagram.com/ben_cam_2022">
              <img className="insta-large-screen" src={insta} alt={insta} />
              <p></p>
              <div className="hashtag" tyle={{ fontSize: "8px" }}>
                #BENETCAM22
              </div>
            </a>
          </div>
        </nav>
      </div>
    );
  }
}
