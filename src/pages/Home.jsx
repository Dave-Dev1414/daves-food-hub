import Hero from "../components/Hero";
import "./Home.css";

export default function Home({ onNavigate }) {
  return (
    <div className="home-page">
      <Hero onNavigate={onNavigate} />
      <section className="home-intro">
        <div className="home-intro__heading">
          <span className="section-label">Welcome to Dave's</span>
          <h2>Food worth <em>coming back for.</em></h2>
        </div>
        <div className="home-intro__copy">
          <p>From smoky jollof and proper suya to fresh bowls and sweet finishes, Dave's Food Hub keeps good food simple, generous and full of personality.</p>
          <div className="home-intro__actions">
            <a href="#menu" className="btn btn--green" onClick={(e)=>{e.preventDefault();onNavigate("menu")}}>Explore the menu ↗</a>
            <a href="#story" className="btn btn--ghost" onClick={(e)=>{e.preventDefault();onNavigate("story")}}>Our story</a>
          </div>
        </div>
      </section>
    </div>
  );
}
