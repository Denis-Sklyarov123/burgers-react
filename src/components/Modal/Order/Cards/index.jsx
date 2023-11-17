import { modalMenuItems } from "../../../../constants";
import Card from "./Card/index";
import "./style.css";

function Cards({ cards, order, title }) {
  const keyCategory = modalMenuItems[title].keyCategory;

  const examination = (item) => {
    if (order[keyCategory] && order[keyCategory].length) {
      return order[keyCategory].some((order) => order.name === item.name);
    }
    if (order[keyCategory]?.name === item.name) {
      return true;
    }
    return false;
  };

  return (
    <div className="size-cards" id="size-products">
      {Object.values(cards).map((item) => (
        <Card
          isActive={examination(item)}
          key={item.name}
          order={order}
          title={title}
          item={item}
        />
      ))}
    </div>
  );
}

export default Cards;
