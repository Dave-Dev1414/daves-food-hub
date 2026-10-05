import Ingredients from "../components/Ingredients";
import Family from "../components/Family";
import "./Story.css";

export default function Story() {
  return (
    <div className="story-page">
      <header className="story-page__hero">
        <span className="section-label">Our story</span>
        <h1>Built around<br/><em>good food.</em></h1>
        <p>Dave's Food Hub started with a simple belief: a good meal should make an ordinary day feel a little better.</p>
      </header>
      <Ingredients />
      <Family />
    </div>
  );
}
