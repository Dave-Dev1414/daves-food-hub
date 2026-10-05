import { useState } from "react";
import "./Navbar.css";

const navItems = [
  { label: "Find us", href: "#locations", page: "home" },
  { label: "Menu", href: "#menu", page: "home" },
  { label: "Reviews", href: "#reviews", page: "reviews" },
  { label: "Catering", href: "#catering", page: "home" },
  { label: "Our story", href: "#story", page: "home" },
];

export default function Navbar({ currentPage = "home", onNavigate }) {
  const [open, setOpen] = useState(false);
  const handleClick = (e, item) => {
    if (onNavigate) { e.preventDefault(); onNavigate(item.page, item.href); }
    setOpen(false);
  };

  return (
    <nav className="navbar">
      <a href="#top" className="navbar__logo" onClick={(e) => {
        if (onNavigate) { e.preventDefault(); onNavigate("home", "#top"); }
      }}>
        <span className="navbar__mark">D</span>
        <span className="navbar__name">Dave's<br />Food Hub</span>
      </a>

      <ul className={`navbar__links ${open ? "is-open" : ""}`}>
        {navItems.map((item) => (
          <li key={item.label}>
            <a href={item.href}
              className={currentPage === item.page && item.page === "reviews" ? "is-current-page" : ""}
              onClick={(e) => handleClick(e, item)}
            >{item.label}</a>
          </li>
        ))}
      </ul>

      <div className="navbar__right">
        <a href="tel:08020539829" className="navbar__phone">0802 053 9829</a>
        <a href="#order" className="btn btn--green">Order now <span>↗</span></a>
        <button className="navbar__burger" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          <span /><span />
        </button>
      </div>
    </nav>
  );
}
