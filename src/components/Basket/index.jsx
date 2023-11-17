import { useState } from "react";
import BtnCustom from "../BtnCustom";
import "./style.css";

function Basket() {
  const [finalCount, setFinalCount] = useState();
  const [finalSum, setFinalSum] = useState(0);
  const [finalName, setFinalName] = useState();

  return (
    <div className="basket-container">
      <div className="title-icon">
        <img className="icon" src="src/assets/img/krytaia-korzinka.png" />
        Корзина
      </div>

      <div className="container-values-basket" id="container-final-values">
        <div className="container-quantity-and-name">
          <div className="order-name-and-quantity" id="total-order-name">
            <div id="main-name-product">Название: {finalName}</div>
            <div
              className="order-name-and-quantity-value"
              id="total-order-name-value"
            ></div>
          </div>

          <div className="order-name-and-quantity" id="total-order-quantity">
            Количество: {finalCount}
            <div
              className="order-name-and-quantity-value"
              id="total-order-quantity-value"
            ></div>
          </div>
        </div>
        <div id="name-and-value-id"></div>
        <div className="total">
          <div className="final-purchase-price">Итого:</div>

          <div className="final-purchase-price" id="id-final-purchase-price">
            {finalSum}
          </div>

          <div className="final-purchase-price">руб.</div>
        </div>
      </div>
      <div className="checkout">
        <BtnCustom classList="ordering-food">ОФОРМИТЬ ЗАКАЗ</BtnCustom>
      </div>
    </div>
  );
}

export default Basket;
