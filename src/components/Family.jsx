import Photo from "./Photo";
import "./Family.css";

const badges = [
  "Proudly sourced from local farms",
  "Only natural and hormone free beef",
  "Bread baked fresh, every single day",
];

export default function Family() {
  return (
    <section className="family">
      <div className="family__bg">
        <Photo src="/images/family.jpg" alt="Buns and raw beef on a board" />
      </div>

      <div className="family__content">
        <h2>Family</h2>
        <h3>
          Is rich with flavor. It's people that surround us with gratitude,
          authenticity &amp; values. That satisfy the soul.
        </h3>
        <p>
          Three generations, one grill. What started as a Saturday stall is
          still run by the same family, using the same recipes and the same
          stubborn rule: if we wouldn't serve it at home, we don't serve it
          here.
        </p>

        <div className="family__actions">
          <a href="#story" className="btn btn--green">
            Our story
          </a>
          <a href="#menu" className="btn btn--ghost">
            See the menu
          </a>
        </div>

        <ul className="family__badges">
          {badges.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
