import Card from "../Card/index";
import "./style.css";

function CardContainer({ cards, setIsOpen }) {
  return (
    <div className="all-product-card-windows">
      {cards.map((item, index) => (
        <Card key={index} item={item} callback={setIsOpen} />
      ))}
    </div>
  );
}

export default CardContainer;
