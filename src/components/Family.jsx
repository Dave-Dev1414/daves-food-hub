import Photo from "./Photo";
import { tableSpread } from "../assets";
import "./Family.css";

const badges = [
  "Made in Lagos",
  "Big on flavour",
  "Built for sharing",
];

export default function Family({ onNavigate }) {
  return (
    <section className="family">
      <div className="family__bg">
        <Photo
          src={tableSpread}
          alt="Friends sharing food around a table"
        />
      </div>

      <div className="family__content" id="story">
        <span className="section-label">Our story</span>

        <h2>
          One table.
          <br />
          Lots of good
          <br />
          <em>reasons to stay.</em>
        </h2>

        <p>
          Dave's Food Hub is built around a simple idea: food should feel
          generous. We mix familiar Nigerian favourites with a few unexpected
          turns, keeping the kitchen relaxed and the plates exciting.
        </p>

        <div className="family__actions">
          <a
            href="#menu"
            className="btn btn--green"
            onClick={(event) => {
              event.preventDefault();
              onNavigate?.("menu");
            }}
          >
            Explore the menu ↗
          </a>

          <a
            href="mailto:slightlybetter204@gmail.com"
            className="btn btn--ghost"
          >
            Say hello
          </a>
        </div>

        <ul className="family__badges">
          {badges.map((badge) => (
            <li key={badge}>{badge}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
