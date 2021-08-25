import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Button from "react-bootstrap/Button";
import logo from "./../static/img/logo.png";

function ContactPopover() {
  const ContactPopover = (
    <Popover id="popover-basic">
      <Popover.Content>leroux.jeremy@gmail.com</Popover.Content>
    </Popover>
  );

  return (
    <div>
      <div style={{ marginBottom: "50px" }}>
        <img
          className="main-logo"
          style={{ width: "65px" }}
          src={logo}
          alt={logo}
        />
      </div>
      <OverlayTrigger trigger="click" placement="top" overlay={ContactPopover}>
        <Button variant="outline-dark" className="footer-button">
          CREE PAR JEREMY LEROUX
        </Button>
      </OverlayTrigger>
      <p></p>
      <p style={{ fontSize: "9px" }}>
        <a href="https://support.github.com/" style={{ fontSize: "8px" }}>
          MENTIONS LEGALES
        </a>
      </p>
      <p></p>
    </div>
  );
}

export default ContactPopover;
