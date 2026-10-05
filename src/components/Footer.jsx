import Photo from "./Photo";
import "./Footer.css";

const navItems = [
  { label: "Find us", page: "find-us" },
  { label: "Menu", page: "menu" },
  { label: "Reviews", page: "reviews" },
  { label: "Catering", page: "catering" },
  { label: "Our story", page: "story" },
];

export default function Footer({ onNavigate }) {
  const handleClick = (e, item) => { e.preventDefault(); onNavigate?.(item.page); };
  return <footer className="footer">
    <div className="footer__top">
      <div><span className="footer__brand">Dave's Food Hub</span><p>Comfort food. Big flavour.<br />A good reason to order again.</p></div>
      <div className="footer__contact"><a href="tel:08020539829">0802 053 9829</a><a href="mailto:slightlybetter204@gmail.com">slightlybetter204@gmail.com</a></div>
    </div>
    <div className="footer__nav">
      <a href="#home" className="btn" onClick={(e) => { if (onNavigate) { e.preventDefault(); onNavigate("home"); } }}>Back to top ↑</a>
      <ul>{navItems.map((item) => <li key={item.label}><a href={`#${item.page}`} onClick={(e) => handleClick(e, item)}>{item.label}</a></li>)}</ul>
      <a href="#catering" className="btn btn--green" onClick={(e) => { e.preventDefault(); onNavigate?.("catering"); }}>Order now ↗</a>
    </div>
    <div className="footer__main">
      <div><span className="section-label">Stay hungry</span><h2>See you<br /><em>at the table.</em></h2><a href="mailto:slightlybetter204@gmail.com" className="btn btn--lime">Get in touch ↗</a></div>
      <div className="footer__photo"><Photo src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85" alt="A colourful meal" /></div>
    </div>
    <p className="footer__legal">© {new Date().getFullYear()} Dave's Food Hub. All rights reserved.</p>
  </footer>;
}
