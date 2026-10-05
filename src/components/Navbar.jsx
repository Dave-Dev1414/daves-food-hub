import { useState } from "react";
import "./Navbar.css";

const navItems = [
  { label: "Find us", page: "find-us" },
  { label: "Menu", page: "menu" },
  { label: "Reviews", page: "reviews" },
  { label: "Catering", page: "catering" },
  { label: "Our story", page: "story" },
];

export default function Navbar({ currentPage = "home", onNavigate }) {
  const [open, setOpen] = useState(false);

  const go = (e, page) => {
    e.preventDefault();
    onNavigate?.(page);
    setOpen(false);
  };

  return (
    <nav className="navbar">
      <a href="#home" className="navbar__logo" onClick={(e) => go(e, "home")}>
        <span className="navbar__mark">D</span>
        <span className="navbar__name">Dave's<br />Food Hub</span>
      </a>

      <ul className={`navbar__links ${open ? "is-open" : ""}`}>
        {navItems.map((item) => (
          <li key={item.page}>
            <a
              href={`#${item.page}`}
              className={currentPage === item.page ? "is-current-page" : ""}
              onClick={(e) => go(e, item.page)}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      <div className="navbar__right">
        <a href="tel:08020539829" className="navbar__phone">0802 053 9829</a>
        <a href="#catering" className="btn btn--green" onClick={(e) => go(e, "catering")}>
          Order now <span>↗</span>
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
