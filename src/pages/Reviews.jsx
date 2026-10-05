import { useState } from "react";
import "./Reviews.css";

const initialReviews = [
  { id: 1, name: "Tomi Adeyemi", role: "Verified Diner", avatar: "TA", rating: 5, date: "2 days ago", title: "The jollof is seriously good.", content: "Smoky, properly seasoned and the chicken was grilled just right. The plantain disappeared before I even realised it.", order: "Smoky Jollof Chicken", helpful: 24 },
  { id: 2, name: "Daniel Okafor", role: "Verified Diner", avatar: "DO", rating: 5, date: "5 days ago", title: "Fresh, filling and beautifully packed.", content: "The bowl arrived looking great and every part tasted fresh. The pepper dressing was the surprise favourite.", order: "Suya Beef Bowl", helpful: 18 },
  { id: 3, name: "Maya Bello", role: "Food Lover", avatar: "MB", rating: 4, date: "1 week ago", title: "Comfort food with a fresh twist.", content: "The pasta was creamy without feeling too heavy, and the roasted tomatoes made every bite brighter.", order: "Creamy Pesto Pasta", helpful: 12 },
  { id: 4, name: "Chinedu James", role: "Verified Customer", avatar: "CJ", rating: 5, date: "2 weeks ago", title: "The whole table loved it.", content: "We ordered a mix of small chops and mains for a group. Generous portions, great flavour and everything arrived warm.", order: "Sharing spread", helpful: 9 },
];

export default function ReviewsPage() {
  const [reviews, setReviews] = useState(initialReviews), [filter, setFilter] = useState("all"), [formOpen, setFormOpen] = useState(false), [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState(""), [rating, setRating] = useState(5), [title, setTitle] = useState(""), [content, setContent] = useState(""), [order, setOrder] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !content.trim()) return;
    const newRev = {
      id: Date.now(), name: name.trim(), role: "Customer Review",
      avatar: name.trim().split(" ").map((p) => p[0]).slice(0, 2).join("").toUpperCase() || "DF",
      rating: Number(rating), date: "Just now", title: title.trim() || "A delicious experience!",
      content: content.trim(), order: order.trim() || "Dave's Food Hub", helpful: 0,
    };
    setReviews([newRev, ...reviews]); setName(""); setTitle(""); setContent(""); setOrder(""); setRating(5);
    setFormOpen(false); setSubmitted(true); setTimeout(() => setSubmitted(false), 4000);
  };

  const filtered = reviews.filter((r) => filter === "all" || r.rating === Number(filter));
  const avgRating = (reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length).toFixed(1);

  return <div className="reviews-page">
    <header className="reviews-hero">
      <div className="reviews-hero__content"><span className="section-label">What people are saying</span><h1 className="reviews-hero__title">Good food<br /><em>gets talked about.</em></h1><p className="reviews-hero__subtitle">From first bites to group orders, here's what people have been saying about Dave's Food Hub.</p></div>
      <div className="reviews-score-card"><div className="reviews-score-card__number">{avgRating}</div><div className="reviews-score-card__stars">★★★★★</div><div className="reviews-score-card__count">Based on {reviews.length + 120} customer orders</div><button className="btn btn--green reviews-score-card__btn" onClick={() => setFormOpen(!formOpen)}>{formOpen ? "Close form" : "Leave a review"}</button></div>
    </header>

    {submitted && <div className="reviews-alert">Thanks, your review has been added.</div>}

    {formOpen && <section className="review-form-box"><h2>Tell us about your order.</h2><p>Good, great or somewhere in between — we want to hear it.</p><form onSubmit={handleSubmit} className="review-form">
      <div className="review-form__row"><label>Your name<input required value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. Maya Lin" /></label><label>Rating<select value={rating} onChange={(e) => setRating(e.target.value)}><option value={5}>★★★★★ (5)</option><option value={4}>★★★★☆ (4)</option><option value={3}>★★★☆☆ (3)</option><option value={2}>★★☆☆☆ (2)</option><option value={1}>★☆☆☆☆ (1)</option></select></label></div>
      <div className="review-form__row"><label>Headline<input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="What stood out?" /></label><label>What did you order?<input value={order} onChange={(e) => setOrder(e.target.value)} placeholder="e.g. Jollof + Chicken" /></label></div>
      <label>Your review<textarea required rows={4} value={content} onChange={(e) => setContent(e.target.value)} placeholder="Tell us about the flavour, service and overall experience." /></label>
      <div className="review-form__actions"><button type="submit" className="btn btn--green">Post review</button><button type="button" className="btn btn--ghost" onClick={() => setFormOpen(false)}>Cancel</button></div>
    </form></section>}

    <section className="reviews-filter-bar"><div className="reviews-filter-bar__tabs"><button className={filter === "all" ? "is-active" : ""} onClick={() => setFilter("all")}>All ({reviews.length})</button><button className={filter === "5" ? "is-active" : ""} onClick={() => setFilter("5")}>5 stars</button><button className={filter === "4" ? "is-active" : ""} onClick={() => setFilter("4")}>4 stars</button></div><span className="reviews-filter-bar__badge">Real customer feedback</span></section>
    <section className="reviews-grid">{filtered.map((r) => <article key={r.id} className="review-card"><div className="review-card__header"><div className="review-card__avatar">{r.avatar}</div><div className="review-card__user"><h3>{r.name}</h3><small>{r.role} · {r.date}</small></div><div className="review-card__stars">{"★".repeat(r.rating)}<span className="review-card__stars--dim">{"☆".repeat(5 - r.rating)}</span></div></div><h4 className="review-card__title">"{r.title}"</h4><p className="review-card__body">{r.content}</p><div className="review-card__footer"><span className="review-card__order">Ordered: {r.order}</span><span className="review-card__badge">✓ Verified order</span></div></article>)}</section>
  </div>;
}
