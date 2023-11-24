import BtnCustom from "../../BtnCustom";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../../../store/test/index";
import "./style.css";
import { setIsOpen, setName } from "../../../pages/Main/store/index";

function Card({ item }) {
  const makeImgUrl = (url) => `/src/assets/img${url}`;
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <div className="card-product">
        <img className="subway" src="/src/assets/img/SUBWAY1.png" />
        <img className="options-background-img" src={makeImgUrl(item.image)} />
        <div className="names">{item.name}</div>
        <div
          className="ingredients"
          onClick={() => {
            dispatch(setIsOpen(true));
            dispatch(setName(item.name));
          }}
        >
          {item.description}
        </div>
        <div className="price">Цена: {item.price} руб.</div>
        <div className="quantity">КОЛИЧЕСТВО</div>
        <div className="buttons">
          <img
            className="minus"
            src="src/assets/img/minus.svg"
            onClick={() => dispatch(decrement())}
          />
          <input value={count} className="input" />
          <img
            className="plus"
            src="src/assets/img/plus.svg"
            onClick={() => dispatch(increment())}
          />
        </div>
        <div></div>
        <BtnCustom classList="in-basket">В КОРЗИНУ</BtnCustom>
      </div>
    </>
  );
}

export default Card;
