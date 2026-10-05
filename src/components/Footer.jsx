import Photo from "./Photo";
import "./Footer.css";

const navItems = [
  { label: "Find us", page: "find-us" },
  { label: "Menu", page: "menu" },
  { label: "Reviews", page: "reviews" },
  { label: "Catering", page: "catering" },
  { label: "Our story", page: "story" },
];

const serviceItems = [
  { label: "Order food", page: "menu" },
  { label: "Catering", page: "catering" },
  { label: "Find us", page: "find-us" },
];

export default function Footer({ onNavigate }) {
  const handleClick = (e, page) => {
    e.preventDefault();
    onNavigate?.(page);
  };

  return (
    <footer className="footer">
      <div className="footer__main">
        <div className="footer__brand-block">
          <span className="footer__brand">Dave's Food Hub</span>
          <p>Comfort food. Big flavour.<br />A good reason to order again.</p>
          <div className="footer__contact">
            <a href="tel:08020539829">0802 053 9829</a>
            <a href="mailto:slightlybetter204@gmail.com">slightlybetter204@gmail.com</a>
          </div>
        </div>

        <div className="footer__links">
          <div>
            <span className="footer__heading">Explore</span>
            <ul>
              {navItems.map((item) => (
                <li key={item.page}>
                  <a href={`#${item.page}`} onClick={(e) => handleClick(e, item.page)}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <span className="footer__heading">Quick links</span>
            <ul>
              {serviceItems.map((item) => (
                <li key={item.label}>
                  <a href={`#${item.page}`} onClick={(e) => handleClick(e, item.page)}>{item.label}</a>
                </li>
              ))}
              <li><a href="mailto:slightlybetter204@gmail.com">Contact us</a></li>
            </ul>
          </div>
        </div>

        <div className="footer__cta">
          <span className="section-label">Stay hungry</span>
          <h2>See you<br /><em>at the table.</em></h2>
          <a href="#menu" className="btn btn--green" onClick={(e) => handleClick(e, "menu")}>Explore the menu ↗</a>
        </div>

        <div className="footer__photo">
          <Photo src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85" alt="A colourful meal" />
        </div>
      </div>

      <div className="footer__bottom">
        <p>© {new Date().getFullYear()} Dave's Food Hub. All rights reserved.</p>
        <a href="#home" onClick={(e) => handleClick(e, "home")}>Back to home ↑</a>
      </div>
    </footer>
  );
}
