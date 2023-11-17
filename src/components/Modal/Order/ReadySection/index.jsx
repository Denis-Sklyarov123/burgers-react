import { useSelector } from "react-redux";
import "./style.css";

function ReadySection({ order }) {
  const name = useSelector((state) => state.mainPage.name);

  return (
    <>
      <div className="selection-columns">
        <div className="container-img">
          <div className="options-background-img-card">
            <img
              className="img-filling-final"
              src="src/assets/img/i/result_sandwich.jpg"
            />
          </div>
          <div className="selection-columns-in-modal">
            <div className="your-product-is-ready">Ваш сендвич готов!</div>

            <div className="name-of-final-products" id="container-all-toppings">
              <div className="name">
                Размер:
                {order.sizes && (
                  <div className="name-product">{order.sizes.name}</div>
                )}
              </div>
              <div className="name">
                Хлеб:
                {order.breads && (
                  <div className="name-product">{order.breads.name}</div>
                )}
              </div>
              <div className="name">
                Овощи:
                {order.vegetables &&
                  order.vegetables.map((item, index) => (
                    <div className="name-product" key={index}>
                      {item.name}
                    </div>
                  ))}
              </div>
              <div className="name">
                Соусы:
                {order.sauces &&
                  order.sauces.map((item, index) => (
                    <div className="name-product" key={index}>
                      {item.name}
                    </div>
                  ))}
              </div>
              <div className="name">
                Начинка:
                {order.fillings && (
                  <div className="name-product">{order.fillings.name}</div>
                )}
              </div>
            </div>

            <div className="name-final-product">{name}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReadySection;
