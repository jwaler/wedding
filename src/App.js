import "./App.css";
import Timer from "./miniapps/clock.js";
import NavBar from "./miniapps/navbar.js";
import Cards from "./miniapps/card.js";
import AttendFormR from "./miniapps/form2.js";
import ContactPopover from "./miniapps/footer.js";
import Mapping from "./miniapps/map.js";
import Mapping2 from "./miniapps/map-2.js";
import React from "react";
import AnimateHeight from "react-animate-height";

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
      height: 0,
      heightDiv2: 0,
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
          toggleDiv2: "",
          toggleDiv: "",
        })
      : setTimeout(() => {
          this.setState({
            showMap2: true,
            showMap1: false,
          });
        }, 800);
  }
  dePloy() {
    console.log("deploy");
    const { height } = this.state;

    this.setState({
      height: height === 0 ? "auto" : 0,
    });
    if (height === 0) {
      this.setState({
        heightDiv2: 0,
      });
    }
  }
  maxdePloy() {
    console.log("deploy");
    const { heightDiv2 } = this.state;

    this.setState({
      heightDiv2: heightDiv2 === 0 ? "auto" : 0,
    });
    if (heightDiv2 === 0) {
      this.setState({
        height: 0,
      });
    }
  }
  rollMap() {
    this.state.toggleDiv !== ""
      ? this.setState({
          toggleDiv: "",
          toggleDiv2: "",
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
            showMap2: false,
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
    const { height } = this.state;
    const { heightDiv2 } = this.state;
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
                    Benjamin Leroux et Camille Chafey
                  </h3>
                </div>
                <div className="text-card-one">
                  <div>
                    <h3>Célèbrent leur Mariage </h3>{" "}
                  </div>
                  <div>le 03 Septembre 2021</div>
                  <p></p>
                  <div className="div-main-info-parties">
                    <div>- À 15H30 à la mairie du XVIe arr. de Paris</div>
                    <div>- Puis, à l'Automobile Club de France</div>
                  </div>
                  <p></p>
                  <div style={{ fontSize: "12px !important;" }}>
                    <form action="/#programme">
                      <button type="submit" className="button-mairie-map">
                        Voir le programme
                      </button>
                    </form>
                  </div>
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
                    <img
                      className="img-ring"
                      src="https://user-images.githubusercontent.com/55392/53607323-1d474a80-3b73-11e9-9832-f514d0c70f1e.png"
                      alt="https://user-images.githubusercontent.com/55392/53607323-1d474a80-3b73-11e9-9832-f514d0c70f1e.png"
                    />
                    {"   "}
                    15h30: Mariage Civil
                  </p>
                  <button
                    aria-expanded={height !== 0}
                    aria-controls="example-panel"
                    onClick={() => this.dePloy()}
                    className="button-prog-map"
                  >
                    <i className="fas fa-map-marker-alt"></i> À la mairie du
                    XVIème arr. de Paris
                  </button>
                  <hr className="side"></hr>
                  <div style={{ width: "98%" }}>
                    <AnimateHeight
                      id="example-panel"
                      duration={1500}
                      height={height} // see props documentation below
                    >
                      <Mapping></Mapping>
                    </AnimateHeight>
                  </div>

                  <p></p>
                  <p></p>
                  <p className="card-two-prog-title">
                    <i className="fas fa-cocktail mr-2"></i> 18h30: Cocktail
                  </p>
                  <div className="card-two-prog-location">
                    <i className="fas fa-map-marker-alt"></i> Sur le toit de
                    l'Automobile Club de France
                  </div>
                  <div className="card-two-prog-location">
                    (Jardin des frères Renault)
                  </div>
                  <p></p>
                  <p className="card-two-prog-title">
                    <img
                      className="img-ring"
                      src="https://image.flaticon.com/icons/png/512/16/16707.png"
                      alt="https://image.flaticon.com/icons/png/512/16/16707.png"
                    />{" "}
                    21h00: Dîner
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
                  <p>
                    <button
                      className="button-prog-map"
                      onClick={() => this.maxdePloy()}
                    >
                      <i className="fas fa-map-marker-alt"> </i> À l'Automobile
                      Club de France
                    </button>
                  </p>
                  <div style={{ width: "98%" }}>
                    <AnimateHeight
                      id="example-panel"
                      duration={1500}
                      height={heightDiv2} // see props documentation below
                    >
                      <Mapping2></Mapping2>
                    </AnimateHeight>
                  </div>
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
