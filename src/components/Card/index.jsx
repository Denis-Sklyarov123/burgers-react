import "./style.css";

function Card({ item }) {
  const makeImgUrl = (url) => `/src/assets/img${url}`;

  return (
    <>
      <div className="card-product">
        <img className="subway" src="/src/assets/img/SUBWAY1.png" />
        <img className="options-background-img" src={makeImgUrl(item.image)} />
        <div className="names">{item.name}</div>
        <div className="ingredients">{item.description}</div>
        <div className="price">Цена: {item.price} руб.</div>
        <div className="quantity">КОЛИЧЕСТВО</div>
        <div className="buttons">
          <img className="minus" src="src/assets/img/minus.svg" />
          <input value="1" className="input" />
          <img className="plus" src="src/assets/img/plus.svg" />
        </div>
        <button id="${this.id}" className="in-basket">
          В КОРЗИНУ
        </button>
      </div>
    </>
  );
}

export default Card;
