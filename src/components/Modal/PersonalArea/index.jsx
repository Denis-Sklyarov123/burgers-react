import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./style.css";
import UncontrolledExample from "./UncontrolledTabsExample";

function PersonalArea(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <img
            className="avatar"
            src="https://ui-avatars.com/api/?name=Denis&rounded=true&background=FFA500"
            alt="avatar"
          />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <UncontrolledExample />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.reLog} className="button-close-personal-area">
          Выход
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default PersonalArea;
