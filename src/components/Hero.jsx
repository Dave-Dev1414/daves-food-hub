import { useEffect, useState } from "react";
import Photo from "./Photo";
import "./Hero.css";

const burgers = [
  {
    name: "The Double Decker",
    price: "12.99",
    was: "15.50",
    blurb:
      "Two smashed beef patties, aged cheddar, red onion and a little too much house sauce on a toasted sesame bun.",
    image: "/images/hero-burger.png",
  },
  {
    name: "Smoke House",
    price: "11.49",
    was: "13.00",
    blurb:
      "Hickory-smoked bacon, crispy onion strings and a pepper jack melt. Messy in the best way.",
    image: "/images/smoke-house.png",
  },
  {
    name: "The Classic",
    price: "8.99",
    was: "10.50",
    blurb:
      "Single patty, pickles, tomato, lettuce, American cheese. Nothing clever, nothing missing.",
    image: "/images/classic.png",
  },
  {
    name: "Veggie Stack",
    price: "10.25",
    was: "12.00",
    blurb:
      "Black bean and roasted corn patty, avocado, crunchy slaw and chipotle mayo.",
    image: "/images/veggie-stack.png",
  },
  {
    name: "Chicken Crunch",
    price: "9.75",
    was: "11.25",
    blurb:
      "Buttermilk fried thigh, hot honey and a pile of crunchy pickled cabbage.",
    image: "/images/chicken-crunch.png",
  },
  {
    name: "Blue Moon",
    price: "12.49",
    was: "14.00",
    blurb:
      "Blue cheese, caramelised onion and a fig jam that sounds odd until you try it.",
    image: "/images/blue-moon.png",
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
        <span className="hero__tag">New</span>
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
            3 reviews
          </a>
        </p>
        <p className="hero__blurb">{item.blurb}</p>

        <div className="hero__buy">
          <a href="#order" className="btn">
            Order now
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
