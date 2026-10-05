import Photo from "./Photo";
import "./Ingredients.css";

const items = [
  {
    name: "Freshly baked",
    side: "left",
    points: ["Baked in small batches", "Soft, toasted finishes", "Never left overnight"],
  },
  {
    name: "Market produce",
    side: "right",
    points: ["Seasonal ingredients", "Picked for flavour", "Prepared every day"],
  },
  {
    name: "Slow roasted",
    side: "left",
    points: ["Deep, layered flavour", "Cooked with care", "Finished to order"],
  },
  {
    name: "Bright sauces",
    side: "right",
    points: ["Made in our kitchen", "Fresh herbs and citrus", "Balanced, never heavy"],
  },
];

export default function Ingredients() {
  return (
    <section className="ingredients">
      <h2>
        Good food<br />starts here
      </h2>

      <div className="ingredients__stage">
        <div className="ingredients__photo">
          <Photo src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=85" alt="Burger ingredients" />
        </div>

        {items.map((it, n) => (
          <div key={it.name} className={`callout callout--${n + 1} callout--${it.side}`}>
            <h3>{it.name}</h3>
            <ul>
              {it.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="ingredients__note">
        We choose simple ingredients and let them do the talking.
      </p>
      <a href="#menu" className="btn">
        Discover the menu
      </a>
    </section>
  );
}
