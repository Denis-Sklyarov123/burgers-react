import "./style.css";
import BtnCustom from "../../../BtnCustom";

function BtnPrevNext({ orientation, onClick }) {
  return (
    <>
      {orientation === "next" ? (
        <BtnCustom callback={() => onClick()} classList="forward-button">
          <div className="indent-for-word-forward">ВПЕРЕД</div>
          <img
            className="arrow"
            src="./src/assets/img/keyboard-right-arrow-button-1_icon-icons.com_72690.svg"
          />
        </BtnCustom>
      ) : (
        <BtnCustom callback={() => onClick()} classList="back-button">
          <div className="indent-for-word-forward">НАЗАД</div>
          <img
            className="arrow"
            src="./src/assets/img/left_icon-icons.com_61213.svg"
          />
        </BtnCustom>
      )}
    </>
  );
}

export default BtnPrevNext;
