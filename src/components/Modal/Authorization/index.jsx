import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import "./style.css";

function Authorization({ isOpen, handleClose }) {
  return (
    <Modal className="signUn" show={isOpen} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title className="fs-2">Авторизация</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className="fs-3">Login</Form.Label>
            <Form.Control className="fs-3" type="text" autoFocus />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className="fs-3">Password</Form.Label>
            <Form.Control className="fs-3" type="password" autoFocus />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="primary"
          onClick={handleClose}
          className="btn-register"
        >
          Войти
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Authorization;
