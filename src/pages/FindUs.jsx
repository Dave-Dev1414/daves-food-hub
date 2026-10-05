import "./FindUs.css";

export default function FindUs() {
  return (
    <div className="find-us-page">
      <header className="find-us-page__hero">
        <span className="section-label">Find us</span>
        <h1>Your next good<br/><em>meal is nearby.</em></h1>
        <p>Come by, grab a table, pick up your order or call ahead. We are here for the everyday meals and the plans that turn into dinner.</p>
      </header>
      <section className="find-us-page__content">
        <div className="find-us-page__card find-us-page__card--main">
          <span className="section-label">Dave's Food Hub</span>
          <h2>Lagos, Nigeria</h2>
          <p>Visit us for fresh plates, quick pick-ups and a relaxed table when you want to stay.</p>
          <div className="find-us-page__details">
            <div><strong>Opening hours</strong><span>Mon - Sun · 10:00 AM - 10:00 PM</span></div>
            <div><strong>Phone</strong><a href="tel:08020539829">0802 053 9829</a></div>
            <div><strong>Email</strong><a href="mailto:slightlybetter204@gmail.com">slightlybetter204@gmail.com</a></div>
          </div>
          <a className="btn btn--green" href="tel:08020539829">Call the kitchen ↗</a>
        </div>
        <div className="find-us-page__map" aria-label="Location placeholder">
          <div className="find-us-page__map-pin">D</div>
          <span>Lagos</span>
          <small>Ask us for directions before you set out.</small>
        </div>
      </section>
    </div>
  );
}
