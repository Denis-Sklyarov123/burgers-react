import { useState } from "react";
import BtnCustom from "../BtnCustom";
import FinishOrder from "../Modal/FinishOrder";
import "./style.css";
import { useSelector } from "react-redux";

function Basket() {
  const finalOrder = useSelector((state) => state.mainPage.finalOrder);
  const finalSum = useSelector((state) => state.mainPage.finalSum);
  const [modalShow, setModalShow] = useState(false);

  return (
    <div className="basket-container">
      <div className="title-icon">
        <img className="icon" src="src/assets/img/krytaia-korzinka.png" />
        Корзина
      </div>

      <div className="container-values-basket" id="container-final-values">
        <div className="container-quantity-and-name">
          <div className="order-name-and-quantity" id="total-order-name">
            <div id="main-name-product">
              Название:{" "}
              {finalOrder &&
                finalOrder.map((item) => (
                  <div key={item.index} className="item-basket">
                    {item.name}
                  </div>
                ))}{" "}
            </div>
            <div
              className="order-name-and-quantity-value"
              id="total-order-name-value"
            ></div>
          </div>

          <div className="order-name-and-quantity" id="total-order-quantity">
            Количество:
            {finalOrder &&
              finalOrder.map((item) => (
                <div key={item.index} className="item-basket">
                  {item.count}
                </div>
              ))}
          </div>
        </div>
        <div id="name-and-value-id"></div>
        <div className="total">
          <div className="final-purchase-price">Итого:</div>

          <div
            className="final-purchase-price"
            id="id-final-purchase-price"
          ></div>

          <div className="final-purchase-price">{finalSum} руб.</div>
        </div>
      </div>
      <div className="checkout">
        <BtnCustom
          classList="ordering-food"
          callback={() => setModalShow(true)}
        >
          ОФОРМИТЬ ЗАКАЗ
        </BtnCustom>
      </div>
      <FinishOrder show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
}

export default Basket;
