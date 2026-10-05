import { useEffect, useState } from "react";
import Photo from "./Photo";
import "./Hero.css";

const burgers = [
  {
    name: "Smoky Garden Burger",
    price: "12.99",
    was: "15.50",
    blurb:
      "Charred beef, smoked cheddar, crisp lettuce, pickled onions and our bright house sauce on a toasted brioche bun.",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Crispy Chicken Stack",
    price: "11.49",
    was: "13.00",
    blurb:
      "Golden chicken, crunchy slaw, fresh herbs and a creamy chilli dressing layered into a warm toasted bun.",
    image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Roasted Veggie Melt",
    price: "8.99",
    was: "10.50",
    blurb:
      "Roasted peppers, mushrooms, mozzarella, basil and tomato relish pressed until warm and perfectly crisp.",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Market Fresh Bowl",
    price: "10.25",
    was: "12.00",
    blurb:
      "Seasonal greens, avocado, roasted vegetables, grains and a zesty dressing made for bright lunches.",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Creamy Pesto Pasta",
    price: "9.75",
    was: "11.25",
    blurb:
      "Silky pesto pasta with roasted tomatoes, parmesan and fresh basil for a bowl that feels like home.",
    image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Berry Cloud Sundae",
    price: "12.49",
    was: "14.00",
    blurb:
      "Creamy vanilla, fresh berries, crunchy crumble and a drizzle of berry sauce to finish the meal.",
    image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=900&q=85",
  },
];

// the deal runs for three days from whenever the page is opened
const DEAL_MS = 3 * 24 * 60 * 60 * 1000;

function useCountdown() {
  const [end] = useState(() => Date.now() + DEAL_MS);
  const [left, setLeft] = useState(DEAL_MS);

  useEffect(() => {
    const id = setInterval(() => setLeft(Math.max(0, end - Date.now())), 30000);
    return () => clearInterval(id);
  }, [end]);

  const mins = Math.floor(left / 60000);
  return {
    days: Math.floor(mins / 1440),
    hours: Math.floor((mins % 1440) / 60),
    minutes: mins % 60,
  };
}

export default function Hero({ onNavigate }) {
  const [i, setI] = useState(0);
  const item = burgers[i];
  const { days, hours, minutes } = useCountdown();

  const prev = () => setI((i - 1 + burgers.length) % burgers.length);
  const next = () => setI((i + 1) % burgers.length);

  return (
    <header className="hero" id="top">
      <div className="hero__left">
        <span className="hero__tag">Today's pick</span>
        <h1 className="hero__title">{item.name}</h1>

        <p className="hero__rating">
          <span aria-hidden="true">★★★☆☆</span>{" "}
          <a
            href="#reviews"
            onClick={(e) => {
              if (onNavigate) {
                e.preventDefault();
                onNavigate("reviews");
              }
            }}
            style={{ textDecoration: "underline", cursor: "pointer" }}
          >
            128 reviews
          </a>
        </p>
        <p className="hero__blurb">{item.blurb}</p>

        <div className="hero__buy">
          <a href="#order" className="btn">
            Try it today
          </a>
          <p className="hero__price">
            <s>${item.was}</s>
            ${item.price}
          </p>
        </div>

        <ul className="hero__thumbs">
          {burgers.map((b, n) => (
            <li key={b.name}>
              <button
                className={n === i ? "is-active" : ""}
                onClick={() => setI(n)}
                aria-label={`Show ${b.name}`}
              >
                {n + 1}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="hero__right">
        <div className="hero__clock" aria-label="Offer ends in">
          <div>
            <b>{String(days).padStart(2, "0")}</b>
            <span>days</span>
          </div>
          <div>
            <b>{String(hours).padStart(2, "0")}</b>
            <span>hrs</span>
          </div>
          <div>
            <b>{String(minutes).padStart(2, "0")}</b>
            <span>min</span>
          </div>
        </div>

        <div className="hero__photo">
          <Photo src={item.image} alt={item.name} />
        </div>

        <div className="hero__arrows">
          <button onClick={prev} aria-label="Previous burger">
            ←
          </button>
          <button onClick={next} aria-label="Next burger">
            →
          </button>
        </div>
      </div>
    </header>
  );
}
