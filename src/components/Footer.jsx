import Photo from "./Photo";
import "./Footer.css";

const navItems = [
  { label: "Find us", href: "#locations", page: "home" },
  { label: "Back to top", href: "#menu", page: "home" },
  { label: "Reviews", href: "#reviews", page: "reviews" },
  { label: "Gift cards", href: "#gift-cards", page: "home" },
  { label: "Catering", href: "#food-truck", page: "home" },
  { label: "Join us", href: "#email-club", page: "home" },
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
          Back to top
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
          +234 808 442 4400
        </a>
        <a href="#order" className="btn btn--green">
          Order now
        </a>
      </div>

      <div className="footer__main">
        <div>
          <h2>
            Good food.<br />Bright days.<br />Better company.
          </h2>
          <a href="#story" className="btn btn--lime">
            Our story
          </a>
        </div>

        <div className="footer__photo">
          <Photo src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85" alt="Burger" />
        </div>
      </div>

      <p className="footer__legal">
        © {new Date().getFullYear()} Bite & Bloom. All rights reserved.
      </p>
    </footer>
  );
}
