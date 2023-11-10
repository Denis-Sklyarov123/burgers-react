import BtnPrevNext from "../BtnPrevNext";
import "./style.css";

function PrevNextContainer({ title, setTitle }) {
  return (
    <div
      className={`menu-products ${title === 0 ? "size" : ""}`}
      id="size-menu"
    >
      {title === 0 && (
        <BtnPrevNext onClick={() => setTitle(title + 1)} orientation={"next"} />
      )}
      {title > 0 && title < 5 && (
        <>
          <BtnPrevNext
            orientation={"prev"}
            onClick={() => setTitle(title - 1)}
          />
          <BtnPrevNext
            orientation={"next"}
            onClick={() => setTitle(title + 1)}
          />
        </>
      )}
      {title === 5 && (
        <BtnPrevNext orientation={"prev"} onClick={() => setTitle(title - 1)} />
      )}
    </div>
  );
}

export default PrevNextContainer;
