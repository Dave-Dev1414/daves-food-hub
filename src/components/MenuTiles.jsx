import Photo from "./Photo";
import "./MenuTiles.css";

const top = [
  {
    title: "Sand-\nwiches",
    text: "Toasted, stacked and cut on the diagonal. Ham, turkey, roast beef or whatever the chef is feeling.",
    image: "/images/sandwich.jpg",
    color: "green",
  },
  {
    title: "House\nburgers",
    text: "Our signature range, built around fresh ground beef we shape by hand every morning.",
    image: "/images/house-burger.jpg",
    color: "orange",
  },
  {
    title: "Fresh\nsalads",
    text: "Crunchy, bright and properly dressed. Pair one with a burger and call it balance.",
    image: "/images/salad.jpg",
    color: "lime",
  },
];

const bottom = [
  {
    title: "For all\nkids",
    text: "Mini burgers, tiny hot dogs and a colouring sheet to keep the table quiet.",
    image: "/images/hotdog.jpg",
    color: "blue",
  },
  {
    title: "Sweet\ndesserts",
    text: "Shakes, sundaes and a warm cookie skillet that never lasts long enough.",
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
          {text ? "View menu" : "See it all"}
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
