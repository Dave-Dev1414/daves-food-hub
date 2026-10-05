import Photo from "./Photo";
import "./MenuTiles.css";

const top = [
  { title: "Everyday\nFavourites", text: "The plates you come back for: comforting, generous and full of the flavours we grew up loving.", image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=700&q=85", color: "sage" },
  { title: "Street Food\nEnergy", text: "Suya, loaded fries, crispy chicken and other bold bites built for serious cravings.", image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=700&q=85", color: "terracotta" },
  { title: "Fresh &\nLight", text: "Colourful bowls, salads and bright sides for when you want something fresh without being boring.", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=700&q=85", color: "cream" },
];
const bottom = [
  { title: "Small\nChops", text: "Perfect for sharing, snacking or pretending you ordered just one thing.", image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=700&q=85", color: "gold" },
  { title: "Sweet\nThings", text: "Desserts and cold treats that make the final bite worth waiting for.", image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=700&q=85", color: "dark" },
  { title: "Drinks &\nMore", text: "Cold bottles, fresh blends and little extras for the full table.", image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=700&q=85", color: "sage-dark" },
];

function Tile({ title, text, image, color }) {
  return <article className={`tile tile--${color}`}>
    <div className="tile__text"><span className="tile__kicker">Dave's Food Hub</span><h3>{title}</h3><p>{text}</p><a href="#catering" className="btn">Order from here ↗</a></div>
    <div className="tile__img"><Photo src={image} alt={title.replace(/\n/g, " ")} /></div>
  </article>;
}

export default function MenuTiles() {
  return <section className="tiles" id="menu">
    <div className="tiles__row tiles__row--top">{top.map((t) => <Tile key={t.title} {...t} />)}</div>
    <div className="tiles__row tiles__row--bottom">{bottom.map((t) => <Tile key={t.title} {...t} />)}</div>
  </section>;
}
