import "./style.css";

function Price({ sum }) {
  return (
    <>
      <div className="price-and-basket" id="id-price-and-basket">
        <div className="price-in-basket-letters">Цена:</div>

        <div
          className="price-in-the-basket"
          id="the-final-price-of-the-product-in-the-modal-window"
        >
          {sum}
        </div>

        <div className="price-in-basket-letters">руб.</div>
      </div>
    </>
  );
}

export default Price;
