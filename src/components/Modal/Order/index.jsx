import { useEffect, useState } from "react";
import Menu from "./Menu";
import "./style.css";
import { titleList } from "../../../constants";
import CardContainer from "./Cards";
import PrevNextContainer from "./PrevNextContainer";
import ReadySection from "./ReadySection";
import BtnCustom from "../../BtnCustom";
import Price from "./Price";
import Counter from "./Counter/index";
import { useSelector } from "react-redux";


function ModalWindow({ isOpen, setIsOpen, cards }) {
  const [activeCategory, setActiveCategory] = useState("sizes");
  const [title, setTitle] = useState(0);
  const [sum, setSum] = useState(0);
  const [order, setOrder] = useState({});
  // const [count, setCount] = useState(1);
  const count = useSelector((state) => state.order.count);

  useEffect(() => {
    let _sum = 0;
    for (const category in order) {
      if (Array.isArray(order[category])) {
        order[category].forEach((item) => {
          _sum += item.price;
        });
      } else {
        _sum += order[category].price;
      }
    }
    if (isNaN(_sum)) {
      _sum = 0;
    }

    _sum = _sum * count;

    setSum(_sum);
  }, [order, count]);

  return (
    <>
      <div className={`modal ${isOpen ? "open" : ""}`} id="my-modal">
        <div className="modal-box">
          <button
            className="modal-close-btn"
            id="close-my-modal-btn"
            onClick={() => setIsOpen(false)}
          >
            <img
              className="close"
              src="src/assets/img/4115230-cancel-close-cross-delete_114048.png"
            />
          </button>

          <p className="modal-window-text" id="modalTitleContainer">
            {titleList[title]}
          </p>

          <div className="modal-window-menu">
            <div>
              <Menu
                title={title}
                callback={setTitle}
                setActiveCategory={setActiveCategory}
              />
            </div>
            <div>
              <PrevNextContainer
                setTitle={setTitle}
                title={title}
                setActiveCategory={setActiveCategory}
              />
            </div>

            <div>
              {cards.sizes && title !== 5 ? (
                <CardContainer
                  title={title}
                  order={order}
                  setOrder={setOrder}
                  cards={cards[activeCategory]}
                />
              ) : (
                <ReadySection order={order} />
              )}
            </div>
          </div>

          <div
            className="price-quantity-in-basket"
            id="id-buttons-and-quantity"
          >
            <div>
              <Counter />
            </div>
            <div className="price-and-basket">
              <div>
                <Price sum={sum} />
              </div>
              <div>
                <BtnCustom classList="add-to-final-price">В КОРЗИНУ</BtnCustom>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalWindow;
