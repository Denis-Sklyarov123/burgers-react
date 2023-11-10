import { modalMenuItems } from "../../../../constants";
import "./style.css";

function Menu({ title, callback, setActiveCategory }) {
  return (
    <div className="items-menu" id="modal-menu">
      {modalMenuItems.map((item, index) => (
        <div
          key={item.keyCategory}
          className={`item-modal-window-menu ${title === index ? "open" : ""}`}
          onClick={() => {
            callback(index), setActiveCategory(item.keyCategory);
          }}
        >
          {item.nameCategory}
        </div>
      ))}
    </div>
  );
}

export default Menu;
