import { modalMenuItems } from "../../../../constants";
import BtnPrevNext from "../BtnPrevNext";
import "./style.css";

function PrevNextContainer({ title, setTitle, setActiveCategory }) {
  const onClickNext = () => {
    setActiveCategory(modalMenuItems[title + 1].keyCategory);
    setTitle(title + 1);
  };

  const onClickPrev = () => {
    setActiveCategory(modalMenuItems[title - 1].keyCategory);
    setTitle(title - 1);
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
