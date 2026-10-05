import Photo from "./Photo";
import "./Ingredients.css";

const items = [
  {
    name: "Artisan buns",
    side: "left",
    points: ["Baked every morning", "Brioche and sesame", "Never frozen"],
  },
  {
    name: "Fresh produce",
    side: "right",
    points: ["Delivered daily", "Local farms first", "Washed in-house"],
  },
  {
    name: "Ground beef",
    side: "left",
    points: ["Chuck and brisket blend", "Hormone free", "Smashed to order"],
  },
  {
    name: "Ground turkey",
    side: "right",
    points: ["Free range", "Lightly seasoned", "Juicy, not dry"],
  },
];

export default function Ingredients() {
  return (
    <section className="ingredients">
      <h2>
        Best quality<br />ingredients
      </h2>

      <div className="ingredients__stage">
        <div className="ingredients__photo">
          <Photo src="/images/footer-burger.jpg" alt="Burger ingredients" />
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
        See our ingredient list. Produce availability varies by season.
      </p>
      <a href="#menu" className="btn">
        Read more
      </a>
    </section>
  );
}
