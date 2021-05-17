import "./App.css";
import Observer from "@researchgate/react-intersection-observer";
import ReactPlayer from "react-player";
import { Link } from "react-scroll";
import Timer from "./miniapps/clock.js";
import NavBar from "./miniapps/navbar.js";
import Cards from "./miniapps/card.js";
import Programme from "./miniapps/programme.js";
import AttendFormR from "./miniapps/form2.js";
import ContactPopover from "./miniapps/footer.js";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import img1 from "./static/img/background.jpg";
import img3 from "./static/img/jardin.jpg";
import img5 from "./static/img/rsvp.jpg";
import gif from "./static/img/acf1.gif";
import video from "./static/img/wedding.mp4";
import contactimg from "./static/img/acf-contact.jpg";

// Main WEBSITE
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guestList: [],
      visibilityone: "hidden",
      visibilitytwo: "hidden",
      visibilitythree: "hidden",
      visibilityfour: "hidden",
      visibilityfive: "hidden",
    };
  }

  componentDidMount() {
    this.setState({});
    window.scrollTo(0, 0);
  }
  FadeInContentOne = (event) => {
    this.setState({
      visibilityone: event.isIntersecting ? "visible" : "invisible",
    });
  };
  FadeInContentTwo = (event) => {
    this.setState({
      visibilitytwo: event.isIntersecting ? "visible" : "invisible",
    });
  };
  FadeInContentThree = (event) => {
    this.setState({
      visibilitythree: event.isIntersecting ? "visible" : "invisible",
    });
  };
  FadeInContentFour = (event) => {
    this.setState({
      visibilityfour: event.isIntersecting ? "visible" : "invisible",
    });
  };
  FadeInContentFive = (event) => {
    this.setState({
      visibilityfive: event.isIntersecting ? "visible" : "invisible",
    });
  };

  render() {
    return (
      <div>
        <NavBar></NavBar>
        <div className="container-fluid">
          {/* Navbar */}
          {/* main container */}
          <div className="main-container">
            {/* CAROUSEL MAIN MENU */}
            <div className="text-oncarousel">
              <div className="benetcam">BENJAMIN LEROUX ET CAMILLE CHAFEY</div>
              <p></p>
              <div>SE MARIENT</div>
              <p></p>
              LE VENDREDI 3 SEPTEMBRE 2021
              <div className="space-div"></div>
              <Link
                className="go-to-programme-link"
                to="programme"
                spy={true}
                smooth={true}
              >
                PROGRAMME
                <br />
                <i className="fa fa-chevron-down" aria-hidden="true"></i>
              </Link>
            </div>
            <div className="carousel-img-container" id="home">
              <Carousel
                showArrows={true}
                autoPlay={true}
                autoFocus={true}
                interval={7000}
                emulateTouch={true}
                infiniteLoop={true}
                centerMode={false}
                centerSlidePercentage={90}
                showThumbs={false}
                showIndicators={false}
                stopOnHover={false}
                showStatus={false}
                transitionTime={1000}
              >
                <div>
                  <img
                    src={img3}
                    alt={img3}
                    className="merry-go-round-img"
                    style={{ filter: "brightness(50%)" }}
                  />
                </div>
                <div>
                  <img
                    src={img1}
                    alt={img1}
                    className="merry-go-round-img"
                    style={{ filter: "brightness(50%)" }}
                  />
                </div>
                <div>
                  <img
                    src={img5}
                    alt={img5}
                    className="merry-go-round-img"
                    style={{ filter: "brightness(50%)" }}
                  />
                </div>
              </Carousel>
            </div>

            {/* TIMER + PHOTOS */}
            <div className="buffer-container">
              <Observer onChange={this.FadeInContentOne}>
                <div className={`${this.state.visibilityone}`}>
                  <Timer></Timer>
                  <br />
                  <Cards></Cards>
                </div>
              </Observer>
            </div>

            {/* VIDEO */}

            <div className="invisible-to-mobile">
              <div className="video">
                <ReactPlayer
                  url={video}
                  muted={true}
                  playing={true}
                  loop={true}
                  width="100%"
                  height="100%"
                />
              </div>
            </div>
            <div className="invisible-to-desktop">
              <Carousel
                showArrows={true}
                autoPlay={true}
                autoFocus={true}
                interval={5000}
                emulateTouch={true}
                infiniteLoop={true}
                centerMode={false}
                centerSlidePercentage={90}
                showThumbs={false}
                showIndicators={false}
                stopOnHover={false}
                showStatus={false}
                transitionTime={1000}
              >
                <div className="img-container-scroll">
                  <img
                    src={gif}
                    alt={gif}
                    className="merry-go-round-img-scroll"
                    style={{ filter: "brightness(90%)" }}
                  />
                </div>
              </Carousel>
            </div>

            {/* Programme */}
            <div id="programme">
              <Observer onChange={this.FadeInContentThree}>
                <div
                  style={{ paddingTop: "120px" }}
                  className={`${this.state.visibilitythree}`}
                >
                  <div className="container-programme-row">
                    <p className="programme-title">PROGRAMME</p>
                    <p className="programme-title">VENDREDI 3 SEPTEMBRE 2021</p>
                    <p></p>
                    <Programme></Programme>
                  </div>
                </div>
              </Observer>
            </div>
            {/* RVSP */}
            <div id="rsvp">
              <Observer onChange={this.FadeInContentFour}>
                <div
                  className={`${this.state.visibilityfour}`}
                  style={{ paddingTop: "120px" }}
                >
                  <div className="buffer-container">
                    <div className="rsvp-carousel">
                      <div className="span-text"></div>
                      <AttendFormR></AttendFormR>
                    </div>
                  </div>
                </div>
              </Observer>
            </div>
            {/* CONTACT */}
            <div id="contact">
              <Observer onChange={this.FadeInContentFive}>
                <div
                  className={`${this.state.visibilityfive}`}
                  style={{ paddingTop: "120px" }}
                >
                  <div className="contact-oncarousel">
                    <div className="contact-frame">
                      <a
                        className="contact-link"
                        href="mailto:contact@benjamin-camille.com"
                      >
                        CONTACT@BENJAMIN-CAMILLE.COM
                      </a>
                    </div>
                    <p></p>
                    <p></p>
                    <div className="space-div-contact"></div>
                  </div>
                  <div className="carousel-img-container">
                    <Carousel
                      showArrows={true}
                      autoPlay={true}
                      autoFocus={true}
                      emulateTouch={true}
                      infiniteLoop={true}
                      centerMode={false}
                      showThumbs={false}
                      showIndicators={false}
                      stopOnHover={false}
                      showStatus={false}
                      height={500}
                    >
                      <div>
                        <img
                          src={contactimg}
                          alt={contactimg}
                          className="merry-go-round-contact-img"
                          style={{ filter: "brightness(40%)" }}
                        />
                      </div>
                    </Carousel>
                  </div>
                </div>
              </Observer>
            </div>
          </div>
          {/* FIN CONTAINER */}
          <div className="footer-container">
            <div className="row timer-row">
              <div className="footer-info">
                <ContactPopover></ContactPopover>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
