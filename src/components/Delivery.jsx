import Photo from "./Photo";
import "./Delivery.css";

export default function Delivery() {
  return <section className="delivery" id="order">
    <div className="delivery__copy">
      <span className="section-label">Food, your way</span>
      <h2>Good food<br /><em>moves fast.</em></h2>
      <p>Order for yourself, feed the whole crew or let us handle the spread. We cook it fresh and get it moving.</p>
      <div className="delivery__actions"><a href="#menu" className="btn btn--green">Start an order ↗</a><a href="tel:08020539829" className="btn btn--ghost">Call 0802 053 9829</a></div>
    </div>
    <div className="delivery__center">
      <div className="delivery__art delivery__art--main"><Photo src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85" alt="A colourful prepared meal" /></div>
      <div className="delivery__stamp">FRESH<br />FROM<br />OUR<br />KITCHEN</div>
      <div className="delivery__art delivery__art--small"><Photo src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=700&q=85" alt="Food ready to share" /></div>
    </div>
    <div className="delivery__aside" id="catering">
      <span className="section-label">For the table</span>
      <h3>Feeding a crowd?</h3>
      <p>From birthdays to office lunches, Dave's Food Hub can put together a spread that actually gets people excited.</p>
      <a href="mailto:slightlybetter204@gmail.com" className="text-link">slightlybetter204@gmail.com ↗</a>
    </div>
  </section>;
}
