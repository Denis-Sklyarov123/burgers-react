import "./style.css";

function Menu({ menu, activeCategory, callback }) {
  return (
    <ul className="container-menu">
      {menu.map((item) => (
        <div
          key={item.keyCategory}
          className={`menu-item ${
            activeCategory === item.keyCategory ? "active" : ""
          }`}
          onClick={() => callback(item.keyCategory)}
        >
          {item.nameCategory}
        </div>
      ))}
    </ul>
  );
}

export default Menu;
