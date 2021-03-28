import "./App.css";
import Timer from "./miniapps/clock.js";
import NavBar from "./miniapps/navbar.js";
import Cards from "./miniapps/card.js";
import AttendFormR from "./miniapps/form2.js";
import ContactPopover from "./miniapps/footer.js";
import Mapping from "./miniapps/map.js";
import Mapping2 from "./miniapps/map-2.js";
import React from "react";

// Main WEBSITE
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guestList: [],
      toggleDiv: "",
      toggleDiv2: "",
      showMap1: false,
      showMap2: false,
    };
  }

  componentDidMount() {
    this.setState({
      toggleDiv: "",
      showMap1: false,
      showMap2: false,
    });
  }

  rollMap2() {
    this.state.toggleDiv2 !== ""
      ? this.setState({
          toggleDiv2: "",
        })
      : this.setState({
          toggleDiv2: "open",
        });
    this.state.showMap2
      ? this.setState({
          showMap2: false,
        })
      : setTimeout(() => {
          this.setState({
            showMap2: true,
          });
        }, 800);
  }

  rollMap() {
    this.state.toggleDiv !== ""
      ? this.setState({
          toggleDiv: "",
        })
      : this.setState({
          toggleDiv: "open",
        });
    this.state.showMap1
      ? this.setState({
          showMap1: false,
        })
      : setTimeout(() => {
          this.setState({
            showMap1: true,
          });
        }, 800);
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

  render() {
    const et = "&";
    return (
      <div className="container-fluid">
        {/* Navbar */}
        <NavBar></NavBar>
        {/* main container */}
        <div className="main-container">
          <div className="scroll-container">
            {/* accueil */}
            <div id="accueil" className="card-container">
              <div id="main-info" className={this.state.toggleDiv}>
                <div className="benji-cam">
                  <h3 className="title-cards">
                    Camille Chafey {et} Benjamin Leroux
                  </h3>
                </div>
                <div className="text-card-one">
                  Célèbrent leur mariage
                  <p>Le 03 Septembre 2021 à 15H30</p>
                </div>
                <button
                  onClick={() => this.rollMap()}
                  className="button-mairie-map"
                >
                  <i className="fas fa-map-marker-alt"></i> À la mairie du
                  XVIème
                </button>
                <p></p>
                <div className={this.state.showMap1 ? "fadeIn" : "fadeOut"}>
                  {this.state.showMap1 === false ? "" : <Mapping></Mapping>}
                </div>

                {/* <button
                    className="btnrsvp"
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href = "#rsvp";
                    }}
                  >
                    RSVP
                  </button> */}
              </div>
            </div>

            <div className="buffer-container">
              <Timer></Timer>
              <hr />
              <Cards></Cards>
            </div>

            {/* Programme */}
            <div id="programme" className="carousel-container">
              <div id="programme-info" className={this.state.toggleDiv2}>
                <div className="title">
                  <h4 className="title-cards"> Vendredi 03 Septembre 2021</h4>
                </div>
                <div className="core-text">
                  <p className="card-two-prog-title">
                    <i className="fas fa-cocktail mr-2"></i> 18h30: Cocktail
                  </p>
                  <p className="card-two-prog-location">
                    <i className="fas fa-map-marker-alt"></i> Dans le jardin des
                    frères Renault
                  </p>

                  <p className="card-two-prog-title">
                    <i className="fas fa-utensils mr-2"></i> 21h00: Dîner
                  </p>
                  <p className="card-two-prog-location">
                    <i className="fas fa-map-marker-alt"></i> Dans les salons
                    Concorde
                  </p>

                  <p className="card-two-prog-title">
                    <i className="fas fa-music mr-2"></i> 23h30: Soirée dansante
                  </p>
                  <p className="card-two-prog-location">
                    <i className="fas fa-map-marker-alt"></i> Dans les salons
                    Concorde
                  </p>
                  <p style={{ paddingLeft: "60px" }}>
                    <button
                      className="button-prog-map"
                      onClick={() => this.rollMap2()}
                    >
                      <i className="fas fa-map-marker-alt"> </i> Voir sur la
                      carte
                    </button>
                  </p>
                </div>
                <div className={this.state.showMap2 ? "fadeIn" : "fadeOut"}>
                  {this.state.showMap2 === false ? "" : <Mapping2></Mapping2>}
                </div>
              </div>
            </div>

            <div className="buffer-container"></div>

            {/* RVSP */}
            <div id="rsvp" className="rsvp-container">
              <div className="rsvp-carousel">
                <div className="span-text"></div>
                <AttendFormR></AttendFormR>
              </div>
            </div>
          </div>
        </div>
        {/* FIN CONTAINER */}
        <div className="footer-container" style={{ marginBottom: "200px" }}>
          <div className="row timer-row">
            <div className="footer-info">
              <ContactPopover></ContactPopover>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
