import "./style.css";

function BtnCustom({ classList, children, callback, id }) {
  return (
    <button className={classList} id={id} onClick={() => callback()}>
      {children}
    </button>
  );
}

export default BtnCustom;
