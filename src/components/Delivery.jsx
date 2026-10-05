import Photo from "./Photo";
import "./Delivery.css";

export default function Delivery() {
  return (
    <section className="delivery" id="order">
      <div className="delivery__col delivery__col--left">
        <h2>
          Fresh<br />to your<br />door!
        </h2>
        <p>
          Hot out of the kitchen and onto your doorstep in under thirty minutes,
          or the fries are on us.
        </p>
        <a href="#menu" className="btn btn--green">
          Order a favourite
        </a>
      </div>

      <div className="delivery__center">
        <div className="delivery__art delivery__art--scooter">
          <Photo
            src="https://images.unsplash.com/photo-1526367790999-0150786686a2?auto=format&fit=crop&w=900&q=85"
            fallbackSrc="/images/delivery_on_a_scooter.jpg"
            alt="Delivery on a scooter"
          />
        </div>
        <div className="delivery__heart" aria-hidden="true">♥</div>
        <div className="delivery__art delivery__art--standing">
          <Photo
            src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=700&q=85"
            fallbackSrc="/images/standing_delivery.jpg"
            alt="Standing delivery person"
          />
        </div>
      </div>

      <div className="delivery__col delivery__col--right">
        <h2>
          Bring<br />good food<br />to more people.
        </h2>
        <p>
          We're hiring cooks, riders and friendly faces for every shift. No
          experience needed, just show up hungry to learn.
        </p>
        <a href="#jobs" className="btn btn--lime">
          Plan a spread
        </a>
      </div>
    </section>
  );
}
