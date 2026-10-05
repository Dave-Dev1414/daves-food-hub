import Delivery from "../components/Delivery";
import "./Catering.css";

export default function Catering() {
  return (
    <div className="catering-page">
      <header className="catering-page__hero">
        <span className="section-label">Catering</span>
        <h1>Feed the whole<br/><em>room.</em></h1>
        <p>Office lunch, birthday plans, family gatherings or a table full of friends. We make the food easy so you can focus on the people.</p>
      </header>
      <Delivery />
      <section className="catering-page__steps">
        <div><span>01</span><h2>Tell us the plan.</h2><p>Share your date, guest count and what you are looking for.</p></div>
        <div><span>02</span><h2>We build the spread.</h2><p>We will help you choose mains, sides, small chops and drinks.</p></div>
        <div><span>03</span><h2>We handle the rest.</h2><p>Your food arrives ready for the table, with the details taken care of.</p></div>
      </section>
    </div>
  );
}
