import "./App.css";
import Observer from "@researchgate/react-intersection-observer";
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
import img2 from "./static/img/wedding.gif";
import img3 from "./static/img/jardin.jpg";
import img5 from "./static/img/acf-dessous.jpg";
import img4 from "./static/img/rsvp.jpg";

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
    };
  }

  componentDidMount() {
    this.setState({});
    window.scrollTo(0, 0);
  }

  fetchGuest() {
    console.log("Fetching");
    // fetch with DRF correct url (as if you were going to DRF view)
    fetch(
      "http://ec2-18-188-160-47.us-east-2.compute.amazonaws.com/api/guest-list/"
    ).then((response) =>
      // response will be JSONed and will send "data"

      response.json().then((data) =>
        // setState will deal with data and display on the screen
        // you could console.log("Data", data)) to verify output (replace)
        this.setState({ guestList: data })
      )
    );
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

  render() {
    return (
      <div>
        <NavBar></NavBar>
        <div className="container-fluid">
          {/* Navbar */}
          {/* main container */}
          <div className="main-container" id="home">
            {/* CAROUSEL MAIN MENU */}
            <div className="carousel-img-container">
              <div style={{ position: "relative" }}>
                <div style={{ position: "absolute" }}>TEXT</div>
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
                      className="merry-go-round-img"
                      style={{ filter: "contrast(50%)" }}
                    />
                    <p className="legend">
                      <p className="breaking-news">
                        BENJAMIN LEROUX ET CAMILLE CHAFEY
                        <br /> SE MARIENT<p></p>
                        LE VENDREDI 3 SEPTEMBRE 2021
                      </p>
                      <Link
                        className="go-to-programme-link"
                        to="programme"
                        spy={true}
                        smooth={true}
                      >
                        PROGRAMME
                        <br />
                        <i class="fa fa-chevron-down" aria-hidden="true"></i>
                      </Link>
                      <br />
                    </p>
                  </div>
                  <div>
                    <img
                      src={img1}
                      className="merry-go-round-img"
                      style={{ filter: "contrast(50%)" }}
                    />
                    <p className="legend">
                      <p className="breaking-news">
                        BENJAMIN LEROUX ET CAMILLE CHAFEY <br />
                        SE MARIENT<p></p>
                        LE VENDREDI 3 SEPTEMBRE 2021
                      </p>
                      <Link
                        className="go-to-programme-link"
                        to="programme"
                        spy={true}
                        smooth={true}
                      >
                        PROGRAMME
                        <br />
                        <i class="fa fa-chevron-down" aria-hidden="true"></i>
                      </Link>
                    </p>
                  </div>
                  <div>
                    <img
                      src={img5}
                      className="merry-go-round-img"
                      style={{ filter: "contrast(50%)" }}
                    />
                    <p className="legend">
                      <p className="breaking-news">
                        BENJAMIN LEROUX ET CAMILLE CHAFEY
                        <br /> SE MARIENT<p></p>
                        LE VENDREDI 3 SEPTEMBRE 2021
                      </p>
                      <Link
                        className="go-to-programme-link"
                        to="programme"
                        spy={true}
                        smooth={true}
                      >
                        PROGRAMME
                        <br />
                        <i class="fa fa-chevron-down" aria-hidden="true"></i>
                      </Link>
                    </p>
                  </div>
                </Carousel>
              </div>
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
            <Observer onChange={this.FadeInContentTwo}>
              <div
                className={`${this.state.visibilitytwo}`}
                style={{ marginBottom: "100px" }}
              >
                <Carousel
                  showArrows={true}
                  autoPlay={true}
                  autoFocus={true}
                  interval={5000}
                  emulateTouch={true}
                  infiniteLoop={true}
                  centerMode={false}
                  centerSlidePercentage={110}
                  showThumbs={false}
                  showIndicators={false}
                  stopOnHover={false}
                  showStatus={false}
                  transitionTime={1000}
                >
                  <div className="img-container-scroll">
                    <img
                      src={img2}
                      className="merry-go-round-img-scroll"
                      style={{ filter: "contrast(50%)" }}
                    />
                    <p className="legend"></p>
                  </div>
                </Carousel>
              </div>
            </Observer>

            {/* Programme */}
            <div id="programme"></div>
            <Observer onChange={this.FadeInContentThree}>
              <div className={`${this.state.visibilitythree}`}>
                <div className="container-programme-row">
                  <p className="programme-title">PROGRAMME</p>
                  <p className="programme-title">VENDREDI 3 SEPTEMBRE 2021</p>
                  <p></p>
                  <Programme></Programme>
                </div>
              </div>
            </Observer>
            <div id="rsvp"></div>
            {/* RVSP */}
            <Observer onChange={this.FadeInContentFour}>
              <div className={`${this.state.visibilityfour}`}>
                <div id="rsvp" className="buffer-container">
                  <div className="rsvp-carousel">
                    <div className="span-text"></div>
                    <AttendFormR></AttendFormR>
                  </div>
                </div>
              </div>
            </Observer>
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
