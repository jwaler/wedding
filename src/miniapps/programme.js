import React from "react";
import "./../App.css";
import programme from "./../static/img/mairie.jpg";
import programme2 from "./../static/img/acf-dessous.jpg";
import AnimateHeight from "react-animate-height";
import Mapping from "./map.js";
import Mapping2 from "./map-2.js";

export default class Programme extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
  render() {
    const { height } = this.state;
    const { heightDiv2 } = this.state;
    return (
      <div>
        {/* FOR DESKTOP VERSION */}
        {/* mairie */}
        <div className="row ipad-mobile-render">
          <div className="col-6 programme-img-col">
            <AnimateHeight
              id="example-panel"
              duration={1500}
              height={height} // see props documentation below
            >
              <Mapping></Mapping>
            </AnimateHeight>
            <img className="img-programme" src={programme} alt="" />

            <p></p>
          </div>
          <div className="col-6 programme-col">
            <div className="core-text">
              <p className="card-two-prog-title">15h30: MARIAGE CIVIL</p>
              <p></p>
              <button
                aria-expanded={height !== 0}
                aria-controls="example-panel"
                onClick={() => this.dePloy()}
                className="button-prog-map"
              >
                <i className="fas fa-map-marker-alt"></i> A LA MAIRIE DU XVIeme
                ARRONDISSEMENT DE PARIS
              </button>
              <p></p>
              <p></p>
            </div>
          </div>
        </div>
        {/* ACF */}
        <div className="row ipad-mobile-render">
          <div className="col-6 programme-col">
            <p></p>
            <div className="core-text">
              <p className="card-two-prog-title">19h00: COCKTAIL</p>
              <div className="card-two-prog-location">
                SUR LE TOIT DE L'AUTOMOBILE CLUB DE FRANCE
              </div>
              <div className="card-two-prog-location">
                (JARDIN DES FRERES RENAULT)
              </div>
              <p></p>
              <p className="card-two-prog-title">21h00: DINER</p>
              <p className="card-two-prog-location">DANS LES SALONS CONCORDE</p>
              <p className="card-two-prog-title">23h30: SOIREE DANSANTE</p>
              <p className="card-two-prog-location">DANS LES SALONS CONCORDE</p>
              <p>
                <button
                  className="button-prog-map"
                  onClick={() => this.maxdePloy()}
                >
                  <i className="fas fa-map-marker-alt"> </i> A L'AUTOMOBILE CLUB
                  DE FRANCE
                </button>
              </p>
            </div>
          </div>
          <div className="col-6 programme-img-col">
            <AnimateHeight
              id="example-panel"
              duration={1500}
              height={heightDiv2} // see props documentation below
            >
              <Mapping2></Mapping2>
            </AnimateHeight>
            <img className="img-programme-acf" src={programme2} alt="" />

            <p></p>
          </div>
        </div>

        {/* FOR MOBILE IPAD VERSION */}
        {/* mairie */}
        <div className="row not-visible-for-desktop">
          <div className="col-6 mobile-col">
            <img className="img-programme" src={programme} alt="" />
            <p></p>
          </div>
          <div className="col-6 mobile-col">
            <p></p>
            <p className="card-two-prog-title">15h30: MARIAGE CIVIL</p>
            <p></p>
            <button
              aria-expanded={height !== 0}
              aria-controls="example-panel"
              onClick={() => this.dePloy()}
              className="button-prog-map"
            >
              <i className="fas fa-map-marker-alt"></i> A LA MAIRIE DU XVIeme
              ARRONDISSEMENT DE PARIS
            </button>
            <p></p>
            <p></p>
            <AnimateHeight
              id="example-panel"
              duration={1500}
              height={height} // see props documentation below
            >
              <Mapping></Mapping>
            </AnimateHeight>
            <p></p>
          </div>
        </div>
        {/* ACF */}
        <div className="row not-visible-for-desktop">
          <div className="col-6 mobile-col">
            <img className="img-programme" src={programme2} alt="" />
            <p></p>
          </div>
          <div className="col-6 mobile-col">
            <p></p>
            <p className="card-two-prog-title">19h00: COCKTAIL</p>
            <div className="card-two-prog-location">
              SUR LE TOIT DE L'AUTOMOBILE CLUB DE FRANCE
            </div>
            <div className="card-two-prog-location">
              (JARDIN DES FRERES RENAULT)
            </div>
            <p></p>
            <p className="card-two-prog-title"> 21h00: DINER</p>
            <p className="card-two-prog-location">DANS LES SALONS CONCORDE</p>
            <p className="card-two-prog-title">23h30: SOIREE DANSANTE</p>
            <p className="card-two-prog-location">DANS LES SALONS CONCORDE</p>
            <p>
              <button
                className="button-prog-map"
                onClick={() => this.maxdePloy()}
              >
                <i className="fas fa-map-marker-alt"> </i> A L'AUTOMOBILE CLUB
                DE FRANCE
              </button>
              <p></p>
              <p></p>
              <div>
                <AnimateHeight
                  id="example-panel"
                  duration={1500}
                  height={heightDiv2} // see props documentation below
                >
                  <Mapping2></Mapping2>
                </AnimateHeight>
              </div>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
