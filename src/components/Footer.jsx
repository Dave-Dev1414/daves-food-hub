import Photo from "./Photo";
import "./Footer.css";

const navItems = [
  { label: "Locations", href: "#locations", page: "home" },
  { label: "Menu", href: "#menu", page: "home" },
  { label: "Reviews", href: "#reviews", page: "reviews" },
  { label: "Gift cards", href: "#gift-cards", page: "home" },
  { label: "Food truck", href: "#food-truck", page: "home" },
  { label: "Email club", href: "#email-club", page: "home" },
];

export default function Footer({ onNavigate }) {
  const handleClick = (e, item) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(item.page, item.href);
    }
  };

  return (
    <footer className="footer" id="story">
      <div className="footer__nav">
        <a
          href="#top"
          className="btn"
          onClick={(e) => {
            if (onNavigate) {
              e.preventDefault();
              onNavigate("home", "#top");
            }
          }}
        >
          Menu
        </a>
        <ul>
          {navItems.map((item) => (
            <li key={item.label}>
              <a href={item.href} onClick={(e) => handleClick(e, item)}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="tel:7184424400" className="footer__phone">
          +1 718-442-4400
        </a>
        <a href="#order" className="btn btn--green">
          Order now
        </a>
      </div>

      <div className="footer__main">
        <div>
          <h2>
            Our family.<br />Our story.<br />Our burgers.
          </h2>
          <a href="#story" className="btn btn--lime">
            Read our story
          </a>
        </div>

        <div className="footer__photo">
          <Photo src="/images/hamburger.jpg" alt="Burger" />
        </div>
      </div>

      <p className="footer__legal">
        © {new Date().getFullYear()} Lara Chops. All rights reserved.
      </p>
    </footer>
  );
}
