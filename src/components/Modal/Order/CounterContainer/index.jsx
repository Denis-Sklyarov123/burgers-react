import Counter from "../Counter";
import "./style.css";

function CounterContainer() {
  return (
    <>
      <div className="buttons-and-quantity">
        <div className="quantity-in-modal">КОЛИЧЕСТВО</div>
        <Counter />
      </div>
    </>
  );
}

export default CounterContainer;
