import { useEffect, useState } from "react";
import Basket from "../../components/Basket/index";
import Menu from "../../components/Menu/index";
import Api from "../../api/api";
import CardContainer from "../../components/CardContainer";

export function Main() {
  const menu = [
    {
      keyCategory: "sandwiches",
      nameCategory: "Сендвичи",
    },
    {
      keyCategory: "burgers",
      nameCategory: "Бургеры",
    },
    {
      keyCategory: "pizza",
      nameCategory: "Пицца",
    },
    {
      keyCategory: "shaurma",
      nameCategory: "Шаурма",
    },
    {
      keyCategory: "salads",
      nameCategory: "Тортилья и Салаты",
    },
    {
      keyCategory: "chicken",
      nameCategory: "Курица и Картошка",
    },
    {
      keyCategory: "drinks",
      nameCategory: "Напитки и Десерт",
    },
  ];

  const [activeCategory, setActiveCategory] = useState("sandwiches");
  const [cards, setCards] = useState([]);

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
        <CardContainer cards={cards} />
      </div>
    </div>
  );
}

export default Main;
