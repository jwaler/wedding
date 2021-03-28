import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Button from "react-bootstrap/Button";

function ContactPopover() {
  const ContactPopover = (
    <Popover id="popover-basic">
      <Popover.Content>leroux.jeremy@gmail.com</Popover.Content>
    </Popover>
  );

  return (
    <div>
      <OverlayTrigger trigger="click" placement="top" overlay={ContactPopover}>
        <Button variant="outline-dark">Créé par Jeremy Leroux</Button>
      </OverlayTrigger>
      <p></p>
      <p></p>
    </div>
  );
}

export default ContactPopover;
