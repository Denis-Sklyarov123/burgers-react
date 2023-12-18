import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import "./style.css";
import { useState } from "react";
import Api from "../../../api/api";

function Register({ isShow, handleClose }) {
  const [user, setUser] = useState({
    name: "",
    login: "",
    password: "",
    number: null,
    email: "",
  });
  const [isValidate, setValidate] = useState(false);

  const addUser = async () => {
    setValidate(true);
    for (const item in user) {
      if (user[item] === "") {
        return;
      }
    }
    await Api.createUser(user);
    handleClose();
    console.log(user);
  };

  return (
    <Modal className="signUp" show={isShow} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title className="fs-2">Регистрация</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className="fs-3">Login</Form.Label>
            <Form.Control
              className="fs-3"
              type="text"
              autoFocus
              value={user.login}
              onChange={(event) =>
                setUser({ ...user, login: event.target.value })
              }
            />
          </Form.Group>
          {user.login === "" && isValidate && (
            <div className="warning-in-modal-register">
              Поле не может быть пустым
            </div>
          )}
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className="fs-3">Password</Form.Label>
            <Form.Control
              className="fs-3"
              type="password"
              autoFocus
              value={user.password}
              onChange={(event) =>
                setUser({ ...user, password: event.target.value })
              }
            />
          </Form.Group>
          {user.password === "" && isValidate && (
            <div className="warning-in-modal-register">
              Поле не может быть пустым
            </div>
          )}
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className="fs-3">Name</Form.Label>
            <Form.Control
              className="fs-3"
              type="text"
              autoFocus
              value={user.name}
              onChange={(event) =>
                setUser({ ...user, name: event.target.value })
              }
            />
          </Form.Group>
          {user.name === "" && isValidate && (
            <div className="warning-in-modal-register">
              Поле не может быть пустым
            </div>
          )}
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className="fs-3">Number</Form.Label>
            <Form.Control
              className="fs-3"
              type="number"
              autoFocus
              value={user.number}
              onChange={(event) =>
                setUser({ ...user, number: event.target.value })
              }
            />
          </Form.Group>
          {user.number === null && isValidate && (
            <div className="warning-in-modal-register">
              Поле не может быть пустым
            </div>
          )}
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className="fs-3">Email</Form.Label>
            <Form.Control
              className="fs-3"
              type="email"
              placeholder="name@example.com"
              autoFocus
              value={user.email}
              onChange={(event) =>
                setUser({ ...user, email: event.target.value })
              }
            />
          </Form.Group>
          {user.email === "" && isValidate && (
            <div className="warning-in-modal-register">
              Поле не может быть пустым
            </div>
          )}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="primary"
          onClick={() => addUser()}
          className="btn-register"
        >
          Зарегестрироваться
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Register;
