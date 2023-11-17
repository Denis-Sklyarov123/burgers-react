import Card from "../Card/index";
import "./style.css";

function CardContainer({ cards }) {
  return (
    <div className="all-product-card-windows">
      {cards.map((item, index) => (
        <Card key={index} item={item} />
      ))}
    </div>
  );
}

export default CardContainer;
