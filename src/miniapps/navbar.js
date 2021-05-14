import "./../App.css";
import "./../Navbar.css";
import React from "react";
import insta from "./../static/img/insta.png";
import { Link } from "react-scroll";
import cametben from "./../static/img/camb1.png";
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
              >
                ACCUEIL
              </Link>
            </div>
            <div className="nav-main">
              <Link className="link" to="programme" spy={true} smooth={true}>
                PROGRAMME
              </Link>
            </div>
            <div className="nav-main">
              <a href="#liste-de-mariage">LISTE DE MARIAGE</a>
            </div>
            <div className="nav-main">
              <Link className="link" to="rsvp" spy={true} smooth={true}>
                RSVP
              </Link>
            </div>
          </div>
          <div className={this.state.menu}>
            <button
              id="toggler"
              className={this.state.triggered}
              type="button"
              onClick={this.showMenu}
            >
              <a className="asupertoggle">
                <i class="fa fa-times" aria-hidden="true"></i>
              </a>
            </button>
            <ul className="superul">
              <img style={{ width: "150px" }} src={cametben} alt={cametben} />
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
                <a href="#liste-de-mariage" onClick={this.closeNav}>
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
              <hr className="sidemenu" />
            </ul>
          </div>

          <div className="hashtag">#benetcam22</div>
          <div className="insta">
            <a href="https://www.instagram.com/ben_cam_2022">
              <img className="insta-large-screen" src={insta} alt={insta} />
            </a>
          </div>
        </nav>
      </div>
    );
  }
}
