import { useEffect } from "react";
import Menu from "./Menu";
import "./style.css";
import { titleList } from "../../../constants";
import Cards from "./Cards";
import PrevNextContainer from "./PrevNextContainer";
import ReadySection from "./ReadySection";
import BtnCustom from "../../BtnCustom";
import Price from "./Price";
import Counter from "./Counter/index";
import { useDispatch, useSelector } from "react-redux";
import { setSum } from "./store";
import { setFinalCount, setIsOpen } from "../../../pages/Main/store";

function ModalWindow({ isOpen, cards }) {
  const count = useSelector((state) => state.modalOrder.count);
  const title = useSelector((state) => state.modalOrder.title);
  const sum = useSelector((state) => state.modalOrder.sum);
  // const order = useSelector((state) => state.main.order);
  const activeCategory = useSelector(
    (state) => state.modalOrder.activeCategory
  );
  const order = useSelector((state) => state.modalOrder.order);
  const dispatch = useDispatch();

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
    dispatch(setSum(_sum));
  }, [dispatch, order]);

  // const test = () => {
  //   if (order.length) {
  //     dispatch(setInBasket([...order, { name: "", sum, count }]));
  //   } else {
  //     dispatch(setInBasket([{ name: "", sum, count }]));
  //   }
  // };

  return (
    <>
      <div className={`modal ${isOpen ? "open" : ""}`} id="my-modal">
        <div className="modal-box">
          <button
            className="modal-close-btn"
            id="close-my-modal-btn"
            onClick={() => dispatch(setIsOpen(false))}
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
              <Menu title={title} />
            </div>
            <div>
              <PrevNextContainer title={title} />
            </div>

            <div>
              {cards.sizes && title !== 5 ? (
                <Cards
                  title={title}
                  order={order}
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
                <Price sum={sum * count} />
              </div>
              <div>
                <BtnCustom
                  classList="add-to-final-price"
                  callback={setFinalCount(sum)}
                >
                  В КОРЗИНУ
                </BtnCustom>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalWindow;
