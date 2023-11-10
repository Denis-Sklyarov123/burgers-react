import "./style.css";

function Card({ item }) {
  const makeImgUrl = (url) => `/src/assets/img${url}`;

  return (
    <>
      <button className="product-size-card-buttons" id="${this.id}">
        <div className="options-background-little-bread">
          <img className="img-filling" src={makeImgUrl(item.image)} />
        </div>
        <div className="the-final-filling-in-the-product">{item.name}</div>
        <div className="price-size-letters">
          <div className="price-size-letters">Цена: </div>
          <div className="price-filling">{item.price} </div>
          <div className="price-size-letters">руб.</div>
        </div>
      </button>
    </>
  );
}

export default Card;
