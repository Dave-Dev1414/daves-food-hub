import Photo from "./Photo";
import "./Delivery.css";

export default function Delivery() {
  return (
    <section className="delivery" id="order">
      <div className="delivery__col delivery__col--left">
        <h2>
          Really<br />faaaaaast<br />delivery!
        </h2>
        <p>
          Hot out of the kitchen and onto your doorstep in under thirty minutes,
          or the fries are on us.
        </p>
        <a href="#menu" className="btn btn--green">
          View locations
        </a>
      </div>

      <div className="delivery__center">
        <div className="delivery__art delivery__art--scooter">
          <Photo
            src="/images/delivery_on_a_scooter.png"
            fallbackSrc="/images/delivery_on_a_scooter.jpg"
            alt="Delivery on a scooter"
          />
        </div>
        <div className="delivery__heart" aria-hidden="true">♥</div>
        <div className="delivery__art delivery__art--standing">
          <Photo
            src="/images/standing_delivery.png"
            fallbackSrc="/images/standing_delivery.jpg"
            alt="Standing delivery person"
          />
        </div>
      </div>

      <div className="delivery__col delivery__col--right">
        <h2>
          Don't wait,<br />become one<br />of us now!
        </h2>
        <p>
          We're hiring cooks, riders and friendly faces for every shift. No
          experience needed, just show up hungry to learn.
        </p>
        <a href="#jobs" className="btn btn--lime">
          Open positions
        </a>
      </div>
    </section>
  );
}
