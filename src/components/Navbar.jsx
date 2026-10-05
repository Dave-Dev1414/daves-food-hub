import { useState } from "react";
import "./Navbar.css";

const navItems = [
  { label: "Locations", href: "#locations", page: "home" },
  { label: "Menu", href: "#menu", page: "home" },
  { label: "Reviews", href: "#reviews", page: "reviews" },
  { label: "Gift cards", href: "#gift-cards", page: "home" },
  { label: "Food truck", href: "#food-truck", page: "home" },
  { label: "Email club", href: "#email-club", page: "home" },
];

export default function Navbar({ currentPage = "home", onNavigate }) {
  const [open, setOpen] = useState(false);

  const handleClick = (e, item) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(item.page, item.href);
    }
    setOpen(false);
  };

  return (
    <nav className="navbar">
      <a
        href="#top"
        className="navbar__logo"
        onClick={(e) => {
          if (onNavigate) {
            e.preventDefault();
            onNavigate("home", "#top");
          }
        }}
      >
        <span className="navbar__mark">L</span>
        <span className="navbar__name">
          Lara<br />Chops
        </span>
      </a>

      <ul className={`navbar__links ${open ? "is-open" : ""}`}>
        {navItems.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className={
                currentPage === item.page && (item.page === "reviews" || item.label === "Menu")
                  ? "is-current-page"
                  : ""
              }
              onClick={(e) => handleClick(e, item)}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      <div className="navbar__right">
        <a href="tel:7184424400" className="navbar__phone">
          +1 718-442-4400
        </a>
        <a href="#order" className="btn btn--green">
          Order now
        </a>
        <button
          className="navbar__burger"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}
