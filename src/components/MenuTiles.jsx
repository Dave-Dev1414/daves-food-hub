import Photo from "./Photo";
import "./MenuTiles.css";

const top = [
  {
    title: "Loaded\nBites",
    text: "Big flavours, toasted edges and generous fillings made for hungry afternoons and late-night cravings.",
    image: "/images/sandwich.jpg",
    color: "green",
  },
  {
    title: "Signature\nMains",
    text: "Comfort food with a fresh point of view, from smoky burgers to creamy pasta and everything between.",
    image: "/images/house-burger.jpg",
    color: "orange",
  },
  {
    title: "Fresh\nBowls",
    text: "Crisp greens, roasted vegetables, grains and bright dressings for meals that keep things feeling light.",
    image: "/images/salad.jpg",
    color: "lime",
  },
];

const bottom = [
  {
    title: "Little\nBites",
    text: "Simple favourites for smaller appetites, with plenty of colour, crunch and room for dessert.",
    image: "/images/hotdog.jpg",
    color: "blue",
  },
  {
    title: "Sweet\nFinish",
    text: "Soft, cold, warm and chocolatey treats that deserve their own final course.",
    image: "/images/sweet_deserts.jpg",
    color: "pink",
  },
  {
    title: "And\nmuch,\nmuch\nmore...",
    text: null,
    image: null,
    color: "white",
  },
];

function Tile({ title, text, image, color }) {
  return (
    <article className={`tile tile--${color}`}>
      <div className="tile__text">
        <h3>{title}</h3>
        {text && <p>{text}</p>}
        <a href="#menu" className="btn">
          {text ? "Explore" : "Explore"}
        </a>
      </div>
      {image && (
        <div className="tile__img">
          <Photo
            src={image}
            fallbackSrc={image.replace("sweet_deserts.jpg", "sweet-desserts.jpg")}
            alt={title.replace("\n", "")}
          />
        </div>
      )}
    </article>
  );
}

export default function MenuTiles() {
  return (
    <section className="tiles" id="menu">
      <div className="tiles__row tiles__row--top">
        {top.map((t) => (
          <Tile key={t.color} {...t} />
        ))}
      </div>
      <div className="tiles__row tiles__row--bottom">
        {bottom.map((t) => (
          <Tile key={t.color} {...t} />
        ))}
      </div>
    </section>
  );
}
