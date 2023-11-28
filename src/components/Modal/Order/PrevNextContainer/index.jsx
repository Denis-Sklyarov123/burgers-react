import { useDispatch } from "react-redux";
import { modalMenuItems } from "../../../../constants";
import BtnPrevNext from "../BtnPrevNext";
import "./style.css";
import { setActiveCategory, setTitleIndex } from "../store";

function PrevNextContainer({ title }) {
  const dispatch = useDispatch();

  const onClickNext = () => {
    dispatch(setActiveCategory(modalMenuItems[title + 1].keyCategory));
    dispatch(setTitleIndex(title + 1));
  };

  const onClickPrev = () => {
    dispatch(setActiveCategory(modalMenuItems[title - 1].keyCategory));
    dispatch(setTitleIndex(title - 1));
  };

  return (
    <div
      className={`menu-products ${title === 0 ? "size" : ""}`}
      id="size-menu"
    >
      {title === 0 && (
        <BtnPrevNext onClick={onClickNext} orientation={"next"} />
      )}
      {title > 0 && title < 5 && (
        <>
          <BtnPrevNext orientation={"prev"} onClick={onClickPrev} />
          <BtnPrevNext orientation={"next"} onClick={onClickNext} />
        </>
      )}
      {title === 5 && (
        <BtnPrevNext orientation={"prev"} onClick={onClickPrev} />
      )}
    </div>
  );
}

export default PrevNextContainer;
