import { useDispatch } from "react-redux";
import "./style.css";
import { setActiveCategory } from "../../pages/Main/store/index";

function Menu({ menu, activeCategory }) {
  const dispatch = useDispatch();

  return (
    <ul className="container-menu">
      {menu.map((item) => (
        <div
          key={item.keyCategory}
          className={`menu-item ${
            activeCategory === item.keyCategory ? "active" : ""
          }`}
          onClick={() => dispatch(setActiveCategory(item.keyCategory))}
        >
          {item.nameCategory}
        </div>
      ))}
    </ul>
  );
}

export default Menu;
