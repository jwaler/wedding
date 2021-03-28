import "./../App.css";
import React, { useState } from "react";
// import Form from "react-bootstrap/Form";
// import FormControl from "react-bootstrap/FormControl";
import { DataStore } from "@aws-amplify/datastore";
import { Response } from "./../models";

function AttendForm() {
  const [attendance, setAttend] = useState("");
  const [guest, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSent, setIsSent] = useState(false);
  const [form, setForm] = useState(true);
  const [errMsg, setErrMsg] = useState("");
  const thankYouMessage = (
    <div
      style={{
        color: "green",
        borderRadius: "20px",
        padding: "3px",
      }}
    >
      <h3>Merci, {guest} !</h3>
      <h3>Nous sommes très heureux de vous compter parmi nous.</h3>
      <h3>A très bientôt!</h3>
    </div>
  );
  const seeYouAgain = (
    <div style={{ color: "tomato" }}>
      <h3>Merci, {guest} !</h3>
      <h4>Dommage !</h4>
      <h4>Nous vous embrassons bien fort.</h4>
    </div>
  );
  const specialCharacter = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/;
  async function saveData() {
    if (guest === "") {
      setErrMsg("Vous n'avez pas entré votre prénom et nom.");
    } else if (email === "") {
      setErrMsg("Vous n'avez pas entré votre email.");
    } else if (!email.match(specialCharacter)) {
      setErrMsg("Votre email n'est pas valide.");
    } else if (attendance === "") {
      setErrMsg("Il manque votre réponse.");
    } else {
      // try {
      //   await DataStore.save(
      //     new Response({
      //       name: guest,
      //       email: email,
      //       response: attendance,
      //     })
      //   );
      //   console.log("Merci !");
      //   console.log(guest, attendance, email);
      //   setIsSent(true);
      //   setForm(false);
      //   const models = await DataStore.query(Response);
      //   console.log(models);
      // } catch (error) {
      //   setErrMsg(`Merci de désactiver le mode "navigation privée"`);
      // }
    }
  }
  function resetForm() {
    setIsSent(false);
    setForm(true);
    setEmail("");
    setName("");
  }

  return (
    <div className="formulaire">
      {isSent ? (attendance ? thankYouMessage : seeYouAgain) : ""}
      <p></p>
      {!form ? (
        <div>
          <p
            style={{
              borderRadius: "20px",
              padding: "3px",
            }}
          ></p>
          <button className="add-person" type="button" onClick={resetForm}>
            Ajouter une autre personne !
          </button>
        </div>
      ) : (
        <div>
          <div className="card-rsvp-title">
            <p className="card-rsvp-title-p">
              Veuillez répondre avant <br></br>le 3 juillet 2021
            </p>
          </div>

          <div className="block-form" id="block-form">
            <form>
              <div className="span-text">
                <input
                  type="input"
                  placeholder="Prénom et Nom"
                  value={guest}
                  onChange={(e) => setName(e.target.value)}
                ></input>
              </div>

              <div className="span-text">
                <input
                  type="input"
                  placeholder="Votre Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
              </div>

              {/* <Form.Check
          className="custom-switch-xl"
          type="switch"
          id="custom-switch"
          value={attendance}
          onChange={(e) =>
            attendance === true ? setAttend(false) : setAttend(true)
          }
        /> */}
              <div className="radio-group">
                <label className="radio-button">
                  {" "}
                  Sera présent(e)
                  <input
                    type="radio"
                    onChange={(e) => setAttend(true)}
                    value={attendance}
                    name="reponse"
                  />
                  <span class="radio-form"></span>
                </label>
                <label className="radio-button">
                  Ne sera pas présent(e)
                  <input
                    type="radio"
                    onChange={(e) => setAttend(false)}
                    value={attendance}
                    name="reponse"
                  />
                  <span class="radio-form"></span>
                </label>
              </div>
              <p></p>
              <span style={{ color: "red" }}>{errMsg}</span>
              <p></p>
              <button className="btnrsvp" type="button" onClick={saveData}>
                RSVP
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default AttendForm;
