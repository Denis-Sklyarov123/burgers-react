import { useEffect, useState } from "react";
import { menu } from "../../constants/index";
import Basket from "../../components/Basket/index";
import Menu from "../../components/Menu/index";
import Api from "../../api/api";
import CardContainer from "../../components/CardContainer";
import ModalWindow from "../../components/Modal/Order";

export function Main() {
  const [activeCategory, setActiveCategory] = useState("sandwiches");
  const [cards, setCards] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    Api.getData().then((data) => {
      setCards(data.menu.filter((item) => item.category === activeCategory));
    });
  }, [activeCategory]);

  return (
    <div className="d-flex flex-row overflow-auto">
      <div>
        <Menu
          menu={menu}
          activeCategory={activeCategory}
          callback={setActiveCategory}
        />
        <Basket />
      </div>
      <div>
        <CardContainer setIsOpen={setIsOpen} cards={cards} />
      </div>
      <div>
        <ModalWindow isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </div>
  );
}

export default Main;
