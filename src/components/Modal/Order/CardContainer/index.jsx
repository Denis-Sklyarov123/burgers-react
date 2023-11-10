import Card from "../Card/index";
import "./style.css";

function CardContainer({ cards }) {
  return (
    <div className="size-cards" id="size-products">
      {Object.values(cards).map((item, index) => (
        <Card key={index} item={item} />
      ))}
    </div>
  );
}

export default CardContainer;
