import "./App.css";
import Main from "../pages/Main/index";
import Register from "../components/Modal/Register";
import { useState } from "react";
import Authorization from "../components/Modal/Authorization";

function App() {
  const [isShow, setIsShow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="authorization">
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
