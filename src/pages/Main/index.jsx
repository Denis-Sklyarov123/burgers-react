import { useEffect, useState } from "react";
import Basket from "../../components/Basket/index";
import Menu from "../../components/Menu/index";
import CardContainer from "../../components/CardContainer";
import ModalWindow from "../../components/Modal/Order";
import { useDispatch, useSelector } from "react-redux";
import { setProducts, setMenu } from "./store/index";
import Api from "../../api/api";
import { Spinner } from "react-bootstrap";
import "./style.css";

export function Main() {
  const menu = useSelector((state) => state.mainPage.menu);
  const products = useSelector((state) => state.mainPage.products);
  const activeCategory = useSelector((state) => state.mainPage.activeCategory);
  const isOpen = useSelector((state) => state.mainPage.isOpen);
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const loadCategories = async () => {
      const { data: products } = await Api.getByCategory(activeCategory);
      dispatch(setProducts(products));
      setLoading(false);
    };

    loadCategories();
  }, [dispatch, activeCategory]);

  useEffect(() => {
    const loadMenu = async () => {
      const { data: menu } = await Api.getMenu();
      dispatch(setMenu(menu));
    };
    loadMenu();
  }, [dispatch]);

  return (
    <div className="d-flex flex-row overflow-auto">
      <div>
        <Menu menu={menu} activeCategory={activeCategory} />
        <Basket />
      </div>
      <div style={{ width: "100%" }}>
        {isLoading === true ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <Spinner
              animation="border"
              variant="warning"
              style={{ width: "10rem", height: "10rem" }}
              role="status"
            ></Spinner>
          </div>
        ) : (
          products && <CardContainer cards={products} />
        )}
      </div>
      <div>{isOpen && <ModalWindow isOpen={isOpen} />}</div>
    </div>
  );
}

export default Main;
