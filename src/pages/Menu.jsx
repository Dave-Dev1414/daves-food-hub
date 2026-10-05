import MenuTiles from "../components/MenuTiles";
import "./Menu.css";

export default function Menu() {
  return (
    <div className="menu-page">
      <header className="menu-page__hero">
        <span className="section-label">The menu</span>
        <h1>Pick your<br/><em>kind of hungry.</em></h1>
        <p>From everyday favourites to proper party food, there is something for solo cravings, family tables and everything in between.</p>
      </header>
      <MenuTiles />
      <section className="menu-page__note">
        <div><span className="section-label">Need a hand?</span><h2>Not sure what to order?</h2></div>
        <p>Tell us what you are in the mood for and we will point you in the right direction.</p>
        <a href="#catering" className="btn btn--green">Talk to us ↗</a>
      </section>
    </div>
  );
}
