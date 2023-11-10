import { useEffect, useState } from "react";
import Menu from "./Menu";
import "./style.css";
import { titleList } from "../../../constants";
import CardContainer from "./CardContainer";
import Api from "../../../api/api";
import PrevNextContainer from "./PrevNextContainer";

function ModalWindow({ isOpen, setIsOpen }) {
  const [activeCategory, setActiveCategory] = useState("sizes");
  const [title, setTitle] = useState(0);
  const [cards, setCards] = useState({});

  useEffect(() => {
    Api.getData().then((data) => {
      setCards(data);
    });
  }, [activeCategory]);

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
              {cards.sizes && <CardContainer cards={cards[activeCategory]} />}
            </div>
          </div>

          <div
            className="price-quantity-in-basket"
            id="id-buttons-and-quantity"
          >
            <div className="price-and-basket" id="id-price-and-basket">
              <div className="price-in-basket-letters">Цена:</div>

              <div
                className="price-in-the-basket"
                id="the-final-price-of-the-product-in-the-modal-window"
              >
                0
              </div>

              <div className="price-in-basket-letters">руб.</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalWindow;
