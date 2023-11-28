import { modalMenuItems } from "../../../../constants";
import "./style.css";
import { setActiveCategory, setTitleIndex } from "../store/index";
import { useDispatch } from "react-redux";

// classnames

function Menu({ title }) {
  const dispatch = useDispatch();

  return (
    <div className="items-menu" id="modal-menu">
      {modalMenuItems.map((item, index) => (
        <div
          key={item.keyCategory}
          className={`item-modal-window-menu ${title === index ? "open" : ""}`}
          onClick={() => {
            dispatch(setTitleIndex(index));
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
