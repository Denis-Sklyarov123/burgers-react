import "./style.css";

function ReadySection() {
  return (
    <>
      <div className="selection-columns">
        <div className="container-img">
          <div className="options-background-img-card">
            <img
              className="img-filling-final"
              src="img/i/result_sandwich.jpg"
            />
          </div>
          <div className="selection-columns-in-modal"></div>
          <div className="your-product-is-ready">Ваш сендвич готов!</div>
          <div
            className="name-of-final-products"
            id="container-all-toppings"
          ></div>
          <div className="name-final-product">Овощной</div>
        </div>
      </div>
    </>
  );
}

export default ReadySection;
