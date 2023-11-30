import { useDispatch } from "react-redux";
import "./style.css";
import { setActiveCategory } from "../../pages/Main/store/index";

function Menu({ menu, activeCategory }) {
  const dispatch = useDispatch();
  return (
    <ul className="container-menu">
      {menu.map((item) => (
        <div
          key={item.key}
          className={`menu-item ${activeCategory === item.key ? "active" : ""}`}
          onClick={() => dispatch(setActiveCategory(item.key))}
        >
          {item.name}
        </div>
      ))}
    </ul>
  );
}

export default Menu;
