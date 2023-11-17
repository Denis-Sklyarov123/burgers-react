import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import { countIncrement, countDecrement } from "../store";

function Counter() {
  const count = useSelector((state) => state.modalOrder.count);
  const dispatch = useDispatch();

  return (
    <div className="buttons-and-quantity">
      <div className="quantity-in-modal">КОЛИЧЕСТВО</div>
      <div className="price-buttons">
        <img
          onClick={() => dispatch(countDecrement())}
          id="id-minus-in-modal-window"
          className="minus-in-modal-window"
          src="src/assets/img/minus.svg"
        />

        {count && <div className="input-in-modal-window">{count}</div>}
        <img
          onClick={() => dispatch(countIncrement())}
          id="id-plus-in-modal-window"
          className="plus-in-modal-window"
          src="src/assets/img/plus.svg"
        />
      </div>
    </div>
  );
}

export default Counter;
