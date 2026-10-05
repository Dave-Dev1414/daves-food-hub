import { useState } from "react";
import "./ReviewsPage.css";

const initialReviews = [
  {
    id: 1,
    name: "Marcus Vance",
    role: "Local Foodie",
    avatar: "MV",
    rating: 5,
    date: "2 days ago",
    title: "The Double Decker is unreal!",
    content:
      "Easily the best burger in the neighbourhood. The sear on the beef patties is spot-on and the house sauce has that signature tang. Definitely my new Friday night routine.",
    order: "The Double Decker + Golden Fries",
    helpful: 24,
  },
  {
    id: 2,
    name: "Sophia Chen",
    role: "Verified Diner",
    avatar: "SC",
    rating: 5,
    date: "5 days ago",
    title: "Super fast delivery, hot and crispy",
    content:
      "Arrived in under 25 minutes! The grilled sandwiches were still piping hot and crunchy, not soggy like other delivery places. 10/10 service.",
    order: "Grilled Sandwich & House Slaw",
    helpful: 18,
  },
  {
    id: 3,
    name: "Jerome Bell",
    role: "Chef & Critic",
    avatar: "JB",
    rating: 4,
    date: "1 week ago",
    title: "Quality ingredients make all the difference",
    content:
      "You can immediately taste that the chuck & brisket blend is freshly ground and never frozen. Fresh buns made in-house. Top tier comfort food.",
    order: "House Burger & Sweet Desserts",
    helpful: 12,
  },
  {
    id: 4,
    name: "Amina K.",
    role: "Verified Customer",
    avatar: "AK",
    rating: 5,
    date: "2 weeks ago",
    title: "That ice cream sundae dessert was the star",
    content:
      "Kids loved the mini hot dogs and my partner and I split the huge sweet desserts bowl. Outstanding atmosphere and real family hospitality.",
    order: "Kids Meal & Sweet Desserts Sundae",
    helpful: 9,
  },
];

export default function ReviewsPage() {
  const [reviews, setReviews] = useState(initialReviews);
  const [filter, setFilter] = useState("all");
  const [formOpen, setFormOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Form inputs
  const [name, setName] = useState("");
  const [rating, setRating] = useState(5);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [order, setOrder] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !content.trim()) return;

    const newRev = {
      id: Date.now(),
      name: name.trim(),
      role: "Customer Review",
      avatar: name
        .trim()
        .split(" ")
        .map((p) => p[0])
        .slice(0, 2)
        .join("")
        .toUpperCase() || "LC",
      rating: Number(rating),
      date: "Just now",
      title: title.trim() || "Delicious meal!",
      content: content.trim(),
      order: order.trim() || "House Burger",
      helpful: 0,
    };

    setReviews([newRev, ...reviews]);
    setName("");
    setTitle("");
    setContent("");
    setOrder("");
    setRating(5);
    setFormOpen(false);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const filtered = reviews.filter((r) => {
    if (filter === "5") return r.rating === 5;
    if (filter === "4") return r.rating === 4;
    return true;
  });

  const avgRating = (
    reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length
  ).toFixed(1);

  return (
    <div className="reviews-page">
      {/* Hero Header */}
      <header className="reviews-hero">
        <div className="reviews-hero__content">
          <span className="reviews-hero__tag">What People Say</span>
          <h1 className="reviews-hero__title">
            Real Flavor.<br />Real Reviews.
          </h1>
          <p className="reviews-hero__subtitle">
            Every burger smashed, every bun baked, and every hot meal delivered
            with pride. Here's what our community thinks about Lara Chops.
          </p>
        </div>

        {/* Score Card */}
        <div className="reviews-score-card">
          <div className="reviews-score-card__number">{avgRating}</div>
          <div className="reviews-score-card__stars">★★★★★</div>
          <div className="reviews-score-card__count">
            Based on {reviews.length + 120} verified customer orders
          </div>
          <button
            className="btn btn--green reviews-score-card__btn"
            onClick={() => setFormOpen(!formOpen)}
          >
            {formOpen ? "Close form" : "Leave a review"}
          </button>
        </div>
      </header>

      {/* Review Submission Form Modal / Box */}
      {submitted && (
        <div className="reviews-alert">
          ✓ Thank you! Your review has been added successfully.
        </div>
      )}

      {formOpen && (
        <section className="review-form-box">
          <h2>Share Your Experience</h2>
          <p>Tell the grill team how your order turned out.</p>

          <form onSubmit={handleSubmit} className="review-form">
            <div className="review-form__row">
              <label>
                Your Name
                <input
                  type="text"
                  required
                  placeholder="e.g. Maya Lin"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </label>

              <label>
                Rating
                <select
                  value={rating}
                  onChange={(e) => setRating(e.target.value)}
                >
                  <option value={5}>★★★★★ (5 Stars - Exceptional)</option>
                  <option value={4}>★★★★☆ (4 Stars - Great)</option>
                  <option value={3}>★★★☆☆ (3 Stars - Average)</option>
                  <option value={2}>★★☆☆☆ (2 Stars - Needs work)</option>
                  <option value={1}>★☆☆☆☆ (1 Star - Bad)</option>
                </select>
              </label>
            </div>

            <div className="review-form__row">
              <label>
                Headline / Title
                <input
                  type="text"
                  placeholder="e.g. Smashed to perfection!"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </label>

              <label>
                What did you order?
                <input
                  type="text"
                  placeholder="e.g. The Double Decker + Fries"
                  value={order}
                  onChange={(e) => setOrder(e.target.value)}
                />
              </label>
            </div>

            <label>
              Your Review
              <textarea
                required
                rows={4}
                placeholder="How was the flavor, delivery speed, and taste? Be honest!"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </label>

            <div className="review-form__actions">
              <button type="submit" className="btn btn--green">
                Submit Review
              </button>
              <button
                type="button"
                className="btn btn--ghost"
                onClick={() => setFormOpen(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        </section>
      )}

      {/* Filter Bar */}
      <section className="reviews-filter-bar">
        <div className="reviews-filter-bar__tabs">
          <button
            className={filter === "all" ? "is-active" : ""}
            onClick={() => setFilter("all")}
          >
            All Reviews ({reviews.length})
          </button>
          <button
            className={filter === "5" ? "is-active" : ""}
            onClick={() => setFilter("5")}
          >
            5 Stars Only
          </button>
          <button
            className={filter === "4" ? "is-active" : ""}
            onClick={() => setFilter("4")}
          >
            4 Stars Only
          </button>
        </div>

        <span className="reviews-filter-bar__badge">
          100% Genuine Lara Chops Feedback
        </span>
      </section>

      {/* Reviews Grid */}
      <section className="reviews-grid">
        {filtered.map((r) => (
          <article key={r.id} className="review-card">
            <div className="review-card__header">
              <div className="review-card__avatar">{r.avatar}</div>
              <div className="review-card__user">
                <h3>{r.name}</h3>
                <small>{r.role} • {r.date}</small>
              </div>
              <div className="review-card__stars">
                {"★".repeat(r.rating)}
                <span className="review-card__stars--dim">
                  {"☆".repeat(5 - r.rating)}
                </span>
              </div>
            </div>

            <h4 className="review-card__title">"{r.title}"</h4>
            <p className="review-card__body">{r.content}</p>

            <div className="review-card__footer">
              <span className="review-card__order">Ordered: {r.order}</span>
              <span className="review-card__badge">✓ Verified Bite</span>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
