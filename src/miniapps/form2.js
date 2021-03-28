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
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetForm = this.resetForm.bind(this);
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
    const specialCharacter = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/;
    // console.log("Guest", this.state.activeGuest); // display the object
    var csrftoken = this.getCookie("csrftoken");
    var url =
      "http://ec2-18-188-160-47.us-east-2.compute.amazonaws.com/api/guest-create/"; // DRF create URL

    if (this.state.activeGuest.nom === "") {
      this.setState({ errMsg: "Vous n'avez pas entré votre prénom et nom." });
    } else if (this.state.activeGuest.email === "") {
      this.setState({ errMsg: "Vous n'avez pas entré votre email." });
    } else if (!this.state.activeGuest.email.match(specialCharacter)) {
      this.setState({ errMsg: "Votre email n'est pas valide." });
    } else if (this.state.activeGuest.attend === "") {
      this.setState({ errMsg: "Il manque votre réponse." });
    } else {
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

  resetForm() {
    this.setState({
      form: true,
      isSent: false,
      errMsg: "",
      attending: "",
      guestname: "",
    });
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
        <h3>Merci, {self.state.guestname} !</h3>
        <h3>Nous sommes très heureux de vous compter parmi nous.</h3>
        <h3>A très bientôt!</h3>
      </div>
    );
    const seeYouAgain = (
      <div>
        <h3>Merci, {self.state.guestname} !</h3>
        <h4>Dommage !</h4>
        <h4>Nous vous embrassons bien fort.</h4>
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
                Veuillez répondre avant <br></br>le 3 juillet 2021
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
                    placeholder="Prénom et Nom"
                    value={this.state.activeGuest.nom}
                    onChange={self.handleChange}
                  ></input>
                </div>

                <div className="span-text">
                  <input
                    className="email"
                    type="input"
                    placeholder="Votre Email"
                    value={this.state.activeGuest.email}
                    onChange={self.handleChange}
                  ></input>
                </div>
                <div className="radio-group">
                  <label className="radio-button">
                    {" "}
                    Sera présent(e)
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
                    Ne sera pas présent(e)
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
                <span style={{ color: "red" }}>{self.state.errMsg}</span>
                <p></p>
                <button className="btnrsvp" type="submit" id="submit">
                  RSVP
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    );
  }
}
