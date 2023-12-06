import BtnCustom from "../../BtnCustom";
import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import { setIsOpen, setName } from "../../../pages/Main/store/index";
import { useEffect, useState } from "react";
import { setFinalOrder, accumulatorSum } from "../../../pages/Main/store/index";
import { setSum } from "../../Modal/Order/store";
import Counter from "../../Counter";

function Card({ item }) {
  const makeImgUrl = (url) => `/src/assets/img${url}`;
  const [count, setCount] = useState(1);
  const sum = useSelector((state) => state.modalOrder.sum);
  const finalOrder = useSelector((state) => state.mainPage.finalOrder);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSum(item.price * count));
  }, [dispatch, count, item]);

  const finalSum = () => {
    dispatch(setFinalOrder([...finalOrder, { name: item.name, sum, count }]));
    dispatch(accumulatorSum());
  };

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
        <Counter
          decrement={() => setCount(count === 1 ? 1 : count - 1)}
          increment={() => setCount(count + 1)}
          count={count}
        ></Counter>
        <BtnCustom classList="in-basket" callback={() => finalSum()}>
          В КОРЗИНУ
        </BtnCustom>
      </div>
    </>
  );
}

export default Card;
