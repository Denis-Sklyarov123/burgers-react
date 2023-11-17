import { useDispatch } from "react-redux";
import "./style.css";

function BtnCustom({ classList, children, callback, id }) {
  const dispatch = useDispatch();

  return (
    <button className={classList} id={id} onClick={() => dispatch(callback())}>
      {children}
    </button>
  );
}

export default BtnCustom;
