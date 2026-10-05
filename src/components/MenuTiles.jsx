import Photo from "./Photo";
import {
  smokyJollof,
  streetFood,
  greenMarket,
  smallChops,
  berryCream,
  drinks,
} from "../assets";
import "./MenuTiles.css";

const top = [
  {
    title: "Everyday\nFavourites",
    text: "The plates you come back for: comforting, generous and full of the flavours we grew up loving.",
    image: smokyJollof,
    color: "sage",
  },
  {
    title: "Street Food\nEnergy",
    text: "Suya, loaded fries, crispy chicken and other bold bites built for serious cravings.",
    image: streetFood,
    color: "terracotta",
  },
  {
    title: "Fresh &\nLight",
    text: "Colourful bowls, salads and bright sides for when you want something fresh without being boring.",
    image: greenMarket,
    color: "cream",
  },
];

const bottom = [
  {
    title: "Small\nChops",
    text: "Perfect for sharing, snacking or pretending you ordered just one thing.",
    image: smallChops,
    color: "gold",
  },
  {
    title: "Sweet\nThings",
    text: "Desserts and cold treats that make the final bite worth waiting for.",
    image: berryCream,
    color: "dark",
  },
  {
    title: "Drinks &\nMore",
    text: "Cold bottles, fresh blends and little extras for the full table.",
    image: drinks,
    color: "sage-dark",
  },
];

function Tile({ title, text, image, color, onNavigate }) {
  return (
    <article className={"tile tile--" + color}>
      <div className="tile__text">
        <span className="tile__kicker">Dave's Food Hub</span>
        <h3>{title}</h3>
        <p>{text}</p>
        <a
          href="#catering"
          className="btn"
          onClick={(event) => {
            event.preventDefault();
            onNavigate?.("catering");
          }}
        >
          Order from here ↗
        </a>
      </div>

      <div className="tile__img">
        <Photo
          src={image}
          alt={title.replace(/\n/g, " ")}
        />
      </div>
    </article>
  );
}

export default function MenuTiles({ onNavigate }) {
  return (
    <section className="tiles" id="menu">
      <div className="tiles__row tiles__row--top">
        {top.map((tile) => (
          <Tile
            key={tile.title}
            {...tile}
            onNavigate={onNavigate}
          />
        ))}
      </div>

      <div className="tiles__row tiles__row--bottom">
        {bottom.map((tile) => (
          <Tile
            key={tile.title}
            {...tile}
            onNavigate={onNavigate}
          />
        ))}
      </div>
    </section>
  );
}
