import "./App.css";
import Main from "../pages/Main/index";
import Register from "../components/Modal/Register";
import { useState } from "react";
import Authorization from "../components/Modal/Authorization";
import { useSelector } from "react-redux";

function App() {
  const [isShow, setIsShow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const user = useSelector((state) => state.mainPage.user);

  return (
    <div>
      <div className="authorization">
        {user ? (
          <div className="container-avatar">
            <img
              className="avatar"
              src="https://ui-avatars.com/api/?name=Denis&rounded=true&background=FFA500"
              alt="avatar"
            />
            <div className="name-avatar">{user.name ?? "Name"}</div>
          </div>
        ) : (
          <>
            <button
              onClick={() => setIsOpen(true)}
              type="button"
              className="btn btn-warning"
            >
              Войти
            </button>
            <button
              onClick={() => setIsShow(true)}
              type="button"
              className="btn btn-warning"
            >
              Регистрация
            </button>
          </>
        )}
      </div>
      <h1 className="title">CДЕЛАЙТЕ ЗАКАЗ НАПРЯМУЮ ИЗ РЕСТОРАНА</h1>
      <div>
        <Main />
      </div>
      <Authorization isOpen={isOpen} handleClose={() => setIsOpen(false)} />
      <Register isShow={isShow} handleClose={() => setIsShow(false)} />
    </div>
  );
}

export default App;
