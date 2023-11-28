import { useDispatch } from "react-redux";
import { modalMenuItems } from "../../../../../constants";
import "./style.css";
import { setOrder } from "../../store/index";

const makeImgUrl = (url) => `/src/assets/img${url}`;

function Card({ item, order, title, isActive }) {
  const keyCategory = modalMenuItems[title].keyCategory;
  const dispatch = useDispatch();

  const orderFormation = () => {
    if (keyCategory === "vegetables" || keyCategory === "sauces") {
      if (order[keyCategory] && order[keyCategory].length) {
        const isContain = order[keyCategory].some(
          (order) => order.name === item.name
        );
        if (isContain) {
          dispatch(
            setOrder({
              ...order,
              [keyCategory]: order[keyCategory].filter(
                (order) => order.name !== item.name
              ),
            })
          );
          return;
        }
        if (order[keyCategory].length === 3) {
          dispatch(
            setOrder({
              ...order,
              [keyCategory]: [...order[keyCategory].slice(1), item],
            })
          );
          return;
        }
        dispatch(
          setOrder({
            ...order,
            [keyCategory]: [...order[keyCategory], item],
          })
        );
        return;
      }
      dispatch(
        setOrder({
          ...order,
          [keyCategory]: [item],
        })
      );
      return;
    }
    dispatch(
      setOrder({
        ...order,
        [keyCategory]: item,
      })
    );
  };

  return (
    <button
      onClick={() => orderFormation()}
      className={`product-size-card-buttons ${
        isActive ? "active-cards-modal" : ""
      }`}
      id="${this.id}"
    >
      <div className="options-background-little-bread">
        <img className="img-filling" src={makeImgUrl(item.image)} />
      </div>
      <div className="the-final-filling-in-the-product">{item.name}</div>
      <div className="price-size-letters">
        <div className="price-size-letters">Цена: </div>
        <div className="price-filling">{item.price} </div>
        <div className="price-size-letters">руб.</div>
      </div>
    </button>
  );
}

export default Card;
