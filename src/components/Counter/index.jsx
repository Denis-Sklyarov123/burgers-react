import "./style.css";

function Counter({ decrement, increment, count }) {
  return (
    <div>
      <div className="quantity">КОЛИЧЕСТВО</div>
      <div className="buttons">
        <img onClick={() => decrement()} src="src/assets/img/minus.svg" />

        {count && <div className="input">{count}</div>}
        <img onClick={() => increment()} src="src/assets/img/plus.svg" />
      </div>
    </div>
  );
}

export default Counter;
