import Photo from "./Photo";
import "./Our table.css";

const badges = [
  "Fresh ideas, familiar comfort",
  "Thoughtful ingredients every day",
  "Made for sharing, always",
];

export default function Our table() {
  return (
    <section className="family">
      <div className="family__bg">
        <Photo src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=85" alt="Buns and raw beef on a board" />
      </div>

      <div className="family__content">
        <h2>Our table</h2>
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
            Meet the brand
          </a>
          <a href="#menu" className="btn btn--ghost">
            See what's cooking
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
