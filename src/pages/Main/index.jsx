import { useEffect } from "react";
import { menu } from "../../constants/index";
import Basket from "../../components/Basket/index";
import Menu from "../../components/Menu/index";
import Api from "../../api/api";
import CardContainer from "../../components/CardContainer";
import ModalWindow from "../../components/Modal/Order";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "./store/index";

export function Main() {
  const data = useSelector((state) => state.mainPage.data);
  const activeCategory = useSelector((state) => state.mainPage.activeCategory);
  const isOpen = useSelector((state) => state.mainPage.isOpen);
  const dispatch = useDispatch();

  useEffect(() => {
    Api.getData().then((data) => {
      dispatch(setData(data));
    });
  }, [dispatch]);

  return (
    <div className="d-flex flex-row overflow-auto">
      <div>
        <Menu menu={menu} activeCategory={activeCategory} />
        <Basket />
      </div>
      <div>
        {data && (
          <CardContainer
            cards={data.menu.filter((item) => item.category === activeCategory)}
          />
        )}
      </div>
      <div>{data && <ModalWindow cards={data} isOpen={isOpen} />}</div>
    </div>
  );
}

export default Main;
