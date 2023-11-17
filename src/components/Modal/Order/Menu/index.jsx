import { modalMenuItems } from "../../../../constants";
import "./style.css";
import { setActiveCategory, setTitle } from "../store/index";
import { useDispatch } from "react-redux";

function Menu({ title }) {
  const dispatch = useDispatch();

  return (
    <div className="items-menu" id="modal-menu">
      {modalMenuItems.map((item, index) => (
        <div
          key={item.keyCategory}
          className={`item-modal-window-menu ${title === index ? "open" : ""}`}
          onClick={() => {
            dispatch(setTitle(index));
            dispatch(setActiveCategory(item.keyCategory));
          }}
        >
          {item.nameCategory}
        </div>
      ))}
    </div>
  );
}

export default Menu;
