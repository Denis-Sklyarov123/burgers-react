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
import { setSum, resetStore, setFillings } from "./store";
import {
  setIsOpen,
  setFinalOrder,
  accumulatorSum,
} from "../../../pages/Main/store/index";
import Api from "../../../api/api";

function ModalWindow({ isOpen }) {
  const fillings = useSelector((state) => state.modalOrder.fillings);
  const count = useSelector((state) => state.modalOrder.count);
  const title = useSelector((state) => state.modalOrder.title);
  const sum = useSelector((state) => state.modalOrder.sum);
  const finalOrder = useSelector((state) => state.mainPage.finalOrder);
  const name = useSelector((state) => state.mainPage.name);
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
    dispatch(setSum(_sum * count));
  }, [dispatch, order, count]);

  useEffect(() => {
    const loadCategories = async () => {
      if (activeCategory === "ready") {
        return;
      }
      const { data: fillings } = await Api.getFillingsByCategory(
        activeCategory
      );
      dispatch(setFillings(fillings));
    };

    loadCategories();
  }, [dispatch, activeCategory]);

  const finalSum = () => {
    dispatch(setFinalOrder([...finalOrder, { name, sum, count }]));
    dispatch(accumulatorSum());
  };

  const closeModal = () => {
    dispatch(setIsOpen(false));
    dispatch(resetStore());
  };

  const makeAnOrder = () => {
    closeModal();
    finalSum();
  };

  return (
    <>
      <div className={`modal ${isOpen ? "open" : ""}`} id="my-modal">
        <div className="modal-box">
          <button
            className="modal-close-btn"
            id="close-my-modal-btn"
            onClick={() => closeModal()}
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
              {fillings && title !== 5 ? (
                <Cards title={title} order={order} cards={fillings} />
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
                <BtnCustom
                  classList="add-to-final-price"
                  callback={makeAnOrder}
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
