import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./style.css";

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
        <div>
          <Button className="buttons-personal-area">Личная информация</Button>
          <Button className="buttons-personal-area">Заказы</Button>
        </div>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} className="buttons-personal-area">
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default PersonalArea;
