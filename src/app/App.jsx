import "./App.css";
import Main from "../pages/Main/index";
import Register from "../components/Modal/Register";
import { useState } from "react";
import Authorization from "../components/Modal/Authorization";
import { useDispatch, useSelector } from "react-redux";
import PersonalArea from "../components/Modal/PersonalArea";
import Cookies from "js-cookie";
import { setUserData } from "../pages/Main/store";

function App() {
  const [isShow, setIsShow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const dispatch = useDispatch();

  const deleteCookies = () => {
    Cookies.remove("Token");
    dispatch(setUserData(null));
  };
  const user = useSelector((state) => state.mainPage.user);

  return (
    <div>
      <div className="authorization">
        {user ? (
          <div className="container-avatar">
            <img
              onClick={() => setModalShow(true)}
              className="avatar"
              src={`https://ui-avatars.com/api/?name=${user.name}&rounded=true&background=FFA500`}
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
      <PersonalArea
        show={modalShow}
        onHide={() => {
          setModalShow(false);
        }}
        reLog={() => {
          setModalShow(false);
          deleteCookies();
        }}
      />
      <Authorization isOpen={isOpen} handleClose={() => setIsOpen(false)} />
      <Register isShow={isShow} handleClose={() => setIsShow(false)} />
    </div>
  );
}

export default App;
