import "./App.css";
import Main from "../pages/Main/index";
import Register from "../components/Modal/Register";
import { useState } from "react";

function App() {
  const [isShow, setIsShow] = useState(false);

  return (
    <div>
      <div className="authorization">
        <button
          style={{ margin: 10 }}
          type="button"
          className="btn btn-warning"
        >
          Войти
        </button>
        <button
          onClick={() => setIsShow(true)}
          style={{ margin: 10 }}
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
      <Register isShow={isShow} handleClose={() => setIsShow(false)} />
    </div>
  );
}

export default App;
