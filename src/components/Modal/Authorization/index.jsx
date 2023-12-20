import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import "./style.css";
import Api from "../../../api/api";
import { useState } from "react";
import { setUserData } from "../../../pages/Main/store";
import { useDispatch } from "react-redux";

function Authorization({ isOpen, handleClose }) {
  const [user, setUser] = useState({
    login: "",
    password: "",
  });
  const [isValidate, setValidate] = useState(false);
  const dispatch = useDispatch();

  const loginUser = async () => {
    setValidate(true);
    const { data } = await Api.login(user);

    setUser({
      login: "",
      password: "",
    });

    dispatch(setUserData(data.user));
    handleClose();
  };

  return (
    <Modal className="signUn" show={isOpen} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title className="fs-2">Авторизация</Modal.Title>
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
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="primary"
          onClick={() => loginUser()}
          className="btn-register"
        >
          Войти
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Authorization;
