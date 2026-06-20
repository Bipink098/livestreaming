import { Link } from "react-router-dom";
import "../pages/Home.css";

export default function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to LiveStreaming</h1>
          <p>
            Stream live classes, share knowledge, and learn together in real
            time. Join thousands of students on their learning journey.
          </p>
          <Link to="/live" className="cta-button">
            Start Learning Now
          </Link>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Why Choose Us?</h2>
        <div className="cards-container">
          <div className="card">
            <div className="card-icon">🎥</div>
            <h3>Live Streaming</h3>
            <p>
              Crystal-clear HD streams with real-time interaction and
              engagement.
            </p>
          </div>
          <div className="card">
            <div className="card-icon">📝</div>
            <h3>Study Notes</h3>
            <p>Comprehensive downloadable notes to revise whenever you want.</p>
          </div>
          <div className="card">
            <div className="card-icon">💬</div>
            <h3>Real-time Chat</h3>
            <p>Ask questions and get answers instantly during classes.</p>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "#f9fafb" }}>
        <h2 className="section-title">Popular Courses</h2>
        <div className="cards-container">
          <div className="card">
            <div className="card-icon">📚</div>
            <h3>Mathematics</h3>
            <p>
              Learn algebra, calculus, geometry, and advanced mathematical
              concepts.
            </p>
          </div>
          <div className="card">
            <div className="card-icon">🧬</div>
            <h3>Science</h3>
            <p>
              Explore physics, chemistry, biology with practical demonstrations.
            </p>
          </div>
          <div className="card">
            <div className="card-icon">🌍</div>
            <h3>English</h3>
            <p>
              Master grammar, literature, writing, and communication skills.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">What Our Students Say</h2>
        <div className="cards-container">
          <div className="card">
            <div className="card-icon">⭐</div>
            <p style={{ fontStyle: "italic" }}>
              "This platform has completely changed my learning experience. The
              live classes are engaging and the notes are comprehensive!"
            </p>
            <h3 style={{ marginTop: "15px" }}>- Priya S.</h3>
          </div>
          <div className="card">
            <div className="card-icon">⭐</div>
            <p style={{ fontStyle: "italic" }}>
              "I love how interactive the classes are. The instructors answer
              all my questions in real-time. Highly recommended!"
            </p>
            <h3 style={{ marginTop: "15px" }}>- Rohit K.</h3>
          </div>
          <div className="card">
            <div className="card-icon">⭐</div>
            <p style={{ fontStyle: "italic" }}>
              "The best investment for my education. The course materials and
              live sessions helped me improve my grades significantly."
            </p>
            <h3 style={{ marginTop: "15px" }}>- Ananya M.</h3>
          </div>
        </div>
      </section>
    </div>
  );
}
