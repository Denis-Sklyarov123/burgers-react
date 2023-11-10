import "./style.css";

function BtnPrevNext({ orientation, onClick }) {
  return (
    <>
      {orientation === "next" ? (
        <button
          onClick={() => onClick()}
          className="forward-button"
          id="go-to-sauce-block"
        >
          <div className="indent-for-word-forward">ВПЕРЕД</div>
          <img
            className="arrow"
            src="./src/assets/img/keyboard-right-arrow-button-1_icon-icons.com_72690.svg"
          />
        </button>
      ) : (
        <button
          onClick={() => onClick()}
          className="back-button"
          id="go-to-back-bread-block"
        >
          <img
            className="arrow"
            src="./src/assets/img/left_icon-icons.com_61213.svg"
          />
          <div className="indent-for-word-back">НАЗАД</div>
        </button>
      )}
    </>
  );
}

export default BtnPrevNext;
