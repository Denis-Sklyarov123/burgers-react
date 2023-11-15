import { useState } from "react";
import "./style.css";

function Counter() {
  const [count, setCount] = useState(1);

  return (
    <div className="price-buttons">
      <img
        onClick={() => setCount((state) => (state === 1 ? state : --state))}
        id="id-minus-in-modal-window"
        className="minus-in-modal-window"
        src="src/assets/img/minus.svg"
      />

      <div className="input-in-modal-window">{count}</div>

      <img
        onClick={() => setCount((state) => ++state)}
        id="id-plus-in-modal-window"
        className="plus-in-modal-window"
        src="src/assets/img/plus.svg"
      />
    </div>
  );
}

export default Counter;
