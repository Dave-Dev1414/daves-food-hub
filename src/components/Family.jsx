import Photo from "./Photo";
import "./Family.css";

const badges = ["Made in Lagos", "Big on flavour", "Built for sharing"];

export default function Family() {
  return <section className="family">
    <div className="family__bg"><Photo src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=85" alt="Friends sharing food around a table" /></div>
    <div className="family__content" id="story">
      <span className="section-label">Our story</span>
      <h2>One table.<br />Lots of good<br /><em>reasons to stay.</em></h2>
      <p>Dave's Food Hub is built around a simple idea: food should feel generous. We mix familiar Nigerian favourites with a few unexpected turns, keeping the kitchen relaxed and the plates exciting.</p>
      <div className="family__actions"><a href="#menu" className="btn btn--green">Explore the menu ↗</a><a href="mailto:slightlybetter204@gmail.com" className="btn btn--ghost">Say hello</a></div>
      <ul className="family__badges">{badges.map((b) => <li key={b}>{b}</li>)}</ul>
    </div>
  </section>;
}
