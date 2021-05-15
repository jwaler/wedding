import "./../App.css";
import React from "react";

export default class AttendFormR extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSent: false,
      form: true,
      errMsg: "",
      activeGuest: {
        id: null,
        nom: "",
        email: "",
        attend: "",
      },
      attending: "",
      guestname: "",
      showButton: "",
      showLoader: "notvisible",
      disabled: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeBtn = this.changeBtn.bind(this);
    this.getCookie = this.getCookie.bind(this);
  }

  getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== "") {
      const cookies = document.cookie.split(";");
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        // Does this cookie string begin with the name we want?
        if (cookie.substring(0, name.length + 1) === name + "=") {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }
    return cookieValue;
  }

  changeBtn() {
    this.setState({
      disabled: true,
      showButton: "notvisible",
      showLoader: "",
    });
  }
  handleChange(e) {
    var name = e.target.className; // fetch from html tagname below
    var value = e.target.value; // fetch from html tagname below
    // console.log("Name", name);
    // console.log("Value", value);
    if (name === "name") {
      this.setState({
        activeGuest: {
          ...this.state.activeGuest, // ... means we do reset current value to update instantly new one
          nom: value, // update value which will replace previous input (onevent)
        },
        guestname: value,
      });
    } else if (name === "email") {
      this.setState({
        activeGuest: {
          ...this.state.activeGuest, // ... means we do reset current value to update instantly new one
          email: value, // update value which will replace previous input (onevent)
        },
      });
    } else if (name === "response") {
      if (e.target.id === "true") {
        value = true;
      } else if (e.target.id === "false") {
        value = false;
      } else {
        value = "";
      }
      this.setState({
        activeGuest: {
          ...this.state.activeGuest, // ... means we do reset current value to update instantly new one
          attend: value, // update value which will replace previous input (onevent)
        },
        attending: value,
      });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const specialCharacter =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/;
    // console.log("Guest", this.state.activeGuest); // display the object
    var csrftoken = this.getCookie("csrftoken");
    var url = "https://www.turtle-api.net/api/guest-create/"; // DRF create URL

    if (this.state.activeGuest.nom === "") {
      this.setState({ errMsg: "VOUS N'AVEZ PAS ENTRE VOTRE PRENOM ET NOM." });
    } else if (this.state.activeGuest.email === "") {
      this.setState({ errMsg: "VOUS N'AVEZ PAS ENTRE VOTRE EMAIL." });
    } else if (!this.state.activeGuest.email.match(specialCharacter)) {
      this.setState({ errMsg: "VOTRE EMAIL N'EST PAS VALIDE." });
    } else if (this.state.activeGuest.attend === "") {
      this.setState({ errMsg: "IL MANQUE VOTRE REPONSE." });
    } else {
      this.changeBtn();
      fetch(url, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          "X-CSRFToken": csrftoken,
        },
        body: JSON.stringify(this.state.activeGuest),
      })
        // what's happening after?
        .then((response) => {
          this.setState({
            activeGuest: {
              id: null,
              nom: "",
              email: "",
              attend: "",
            },
          });
          this.setState({
            form: false,
            isSent: true,
          });
        })
        // or error
        .catch(function (error) {
          console.log("ERROR", error);
        });
    }
    // process with the submit, url (edit or new), POST, headers with token, JSONed "data"
  }

  render() {
    var self = this;
    const thankYouMessage = (
      <div
        style={{
          borderRadius: "20px",
          padding: "3px",
        }}
      >
        <p className="thank-msg">Merci, {self.state.guestname} !</p>
        <p className="thank-msg">
          Nous sommes impatients de fêter cet évènement mémorable avec vous !
        </p>
      </div>
    );
    const seeYouAgain = (
      <div>
        <p className="thank-msg">Quel dommage, {self.state.guestname} !</p>
        <p className="thank-msg">Nous vous embrassons quand même bien fort.</p>
      </div>
    );
    return (
      <div className="formulaire">
        {self.state.isSent
          ? self.state.attending
            ? thankYouMessage
            : seeYouAgain
          : ""}
        <p></p>
        {!self.state.form ? (
          <div>
            <p
              style={{
                borderRadius: "20px",
                padding: "3px",
              }}
            ></p>
          </div>
        ) : (
          <div>
            <div className="card-rsvp-title">
              <p className="card-rsvp-title-p">
                NOUS ATTENDONS VOTRE REPONSE <br></br>AVANT LE 3 JUILLET 2021
              </p>
            </div>

            <div className="block-form" id="block-form">
              <form onSubmit={this.handleSubmit}>
                <div className="span-text">
                  <input
                    className="name"
                    id="name"
                    name="name"
                    type="input"
                    placeholder="PRENOM ET NOM"
                    value={this.state.activeGuest.nom}
                    onChange={self.handleChange}
                  ></input>
                </div>

                <div className="span-text">
                  <input
                    className="email"
                    type="input"
                    placeholder="VOTRE EMAIL"
                    value={this.state.activeGuest.email}
                    onChange={self.handleChange}
                  ></input>
                </div>
                <div className="radio-group">
                  <label className="radio-button">
                    {" "}
                    ASSISTERA
                    <input
                      className="response"
                      type="radio"
                      id="true"
                      value={this.state.activeGuest.attend}
                      onChange={self.handleChange}
                      name="reponse"
                    />
                    <span className="radio-form"></span>
                  </label>
                  <label className="radio-button">
                    NE POURRA ASSISTER
                    <input
                      className="response"
                      onChange={self.handleChange}
                      id="false"
                      value={this.state.activeGuest.attend}
                      type="radio"
                      name="reponse"
                    />
                    <span className="radio-form"></span>
                  </label>
                </div>
                <p></p>
                <span style={{ color: "red", fontSize: "15px" }}>
                  {self.state.errMsg}
                </span>
                <p></p>
                <button
                  className="btnrsvp"
                  type="submit"
                  id="submit"
                  disabled={this.state.disabled}
                >
                  <div className={this.state.showButton}>REPONDRE</div>
                  <div className={this.state.showLoader}>
                    <i class="fa fa-spinner fa-spin"></i> ENVOI
                  </div>
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    );
  }
}
