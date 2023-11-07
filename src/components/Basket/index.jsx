import "./style.css";

function Basket() {
  return (
    <div className="basket-container">
      <div className="title-icon">
        <img className="icon" src="src/assets/img/krytaia-korzinka.png" />
        Корзина
      </div>

      <div className="container-values-basket" id="container-final-values">
        <div className="container-quantity-and-name">
          <div className="order-name-and-quantity" id="total-order-name">
            <div id="main-name-product">Название:</div>
            <div
              className="order-name-and-quantity-value"
              id="total-order-name-value"
            ></div>
          </div>

          <div className="order-name-and-quantity" id="total-order-quantity">
            Количество:
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
            0
          </div>

          <div className="final-purchase-price">руб.</div>
        </div>
      </div>
      <div className="checkout">
        <button className="ordering-food">ОФОРМИТЬ ЗАКАЗ</button>
      </div>
    </div>
    // <div className="basket-container">
    //   <div className="title-icon">Корзина</div>
    //   <div className="container-values-basket">
    //     <div className="container-quantity-and-name">
    //       <div className="order-name-and-quantity">
    //         <div id="main-name-product">Название:</div>
    //       </div>
    //       <div className="order-name-and-quantity">Количество:</div>
    //     </div>
    //     <div className="total">
    //       <div className="final-purchase-price">Итого:</div>
    //       <div className="final-purchase-price">0</div>
    //       <div className="final-purchase-price">руб.</div>
    //     </div>
    //   </div>
    //   <div className="checkout">
    //     <button className="ordering-food">ОФОРМИТЬ ЗАКАЗ</button>
    //   </div>
    // </div>
  );
}

export default Basket;
