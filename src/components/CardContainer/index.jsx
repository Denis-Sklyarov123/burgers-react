import Card from "../Card/index";
import "./style.css";

function CardContainer({ cards }) {
  return (
    <div className="all-product-card-windows">
      {cards.map((item) => (
        <Card key={Math.random()} item={item} />
      ))}
    </div>
  );
}

export default CardContainer;
