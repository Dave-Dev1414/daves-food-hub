import Photo from "./Photo";
import { ingredients } from "../assets";
import "./Ingredients.css";

const items = [
  {
    name: "Kitchen-made",
    side: "left",
    points: [
      "Sauces made in-house",
      "Fresh herbs & spices",
      "Small-batch prep",
    ],
  },
  {
    name: "Local first",
    side: "right",
    points: [
      "Seasonal produce",
      "Trusted suppliers",
      "Picked for flavour",
    ],
  },
  {
    name: "Slow & smoky",
    side: "left",
    points: [
      "Properly grilled",
      "Deep, layered flavour",
      "Finished to order",
    ],
  },
  {
    name: "No shortcuts",
    side: "right",
    points: [
      "Fresh every day",
      "Thoughtful portions",
      "Food we are proud of",
    ],
  },
];

export default function Ingredients({ onNavigate }) {
  return (
    <section className="ingredients">
      <div className="ingredients__intro">
        <span className="section-label">Behind the plate</span>

        <h2>
          Good food is
          <br />
          <em>never accidental.</em>
        </h2>

        <p>
          We keep the process simple: good ingredients, confident seasoning and
          enough time to get the little things right.
        </p>
      </div>

      <div className="ingredients__stage">
        <div className="ingredients__photo">
          <Photo
            src={ingredients}
            alt="Fresh food prepared at a table"
          />
        </div>

        {items.map((item, index) => (
          <div
            key={item.name}
            className={
              "callout callout--" + (index + 1) + " callout--" + item.side
            }
          >
            <span>0{index + 1}</span>
            <h3>{item.name}</h3>

            <ul>
              {item.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="ingredients__bottom">
        <p>
          Made with care in Lagos, served with plenty of personality.
        </p>

        <a
          href="#menu"
          className="btn btn--green"
          onClick={(event) => {
            event.preventDefault();
            onNavigate?.("menu");
          }}
        >
          See what's cooking ↗
        </a>
      </div>
    </section>
  );
}
