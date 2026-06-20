import "../pages/About.css";

export default function About() {
  return (
    <div className="about">
      <div className="about-hero">
        <h1>About LiveStreaming</h1>
        <p>Revolutionizing education through interactive live learning</p>
      </div>

      <div className="about-container">
        <div className="about-section">
          <h2>Our Mission</h2>
          <p>
            At LiveStreaming, we believe that education should be accessible to
            everyone, everywhere. Our mission is to empower students by
            providing high-quality, interactive live classes combined with
            comprehensive study materials. We are committed to making learning
            engaging, affordable, and effective for all.
          </p>
          <p>
            We leverage cutting-edge technology to create a seamless learning
            experience where students can connect with experienced instructors
            in real-time, ask questions instantly, and collaborate with peers
            from around the world.
          </p>
        </div>

        <div className="about-section">
          <h2>Our Vision</h2>
          <p>
            We envision a world where geographical boundaries and economic
            constraints don't limit access to quality education. Through our
            platform, we aim to democratize learning and inspire millions of
            students to reach their full potential.
          </p>
        </div>

        <div className="about-section">
          <h2>Why Choose LiveStreaming?</h2>
          <div className="about-grid">
            <div className="about-item">
              <h3>🎓 Expert Instructors</h3>
              <p>
                Learn from industry experts and experienced educators who are
                passionate about teaching.
              </p>
            </div>
            <div className="about-item">
              <h3>📱 Flexible Learning</h3>
              <p>
                Access classes from any device, anywhere. Learn at your own pace
                with recorded sessions.
              </p>
            </div>
            <div className="about-item">
              <h3>💰 Affordable Pricing</h3>
              <p>
                Quality education without breaking the bank. Multiple
                subscription options available.
              </p>
            </div>
            <div className="about-item">
              <h3>🌟 Interactive Experience</h3>
              <p>
                Real-time interactions, live Q&A sessions, and community support
                forums.
              </p>
            </div>
            <div className="about-item">
              <h3>📊 Progress Tracking</h3>
              <p>
                Monitor your learning progress with detailed analytics and
                performance reports.
              </p>
            </div>
            <div className="about-item">
              <h3>🏆 Certifications</h3>
              <p>
                Earn recognized certificates upon course completion to boost
                your career.
              </p>
            </div>
          </div>
        </div>

        <div className="about-section">
          <h2>Our Team</h2>
          <p>
            Our dedicated team of educators, developers, and administrators work
            tirelessly to bring you the best learning experience possible.
          </p>
          <div className="team-grid">
            <div className="team-member">
              <div className="team-member-avatar">👨‍🏫</div>
              <h3>Rahul Kumar</h3>
              <p>Founder & CEO</p>
            </div>
            <div className="team-member">
              <div className="team-member-avatar">👩‍💼</div>
              <h3>Priya Sharma</h3>
              <p>Head of Curriculum</p>
            </div>
            <div className="team-member">
              <div className="team-member-avatar">👨‍💻</div>
              <h3>Amit Patel</h3>
              <p>Lead Developer</p>
            </div>
            <div className="team-member">
              <div className="team-member-avatar">👩‍🎓</div>
              <h3>Neha Singh</h3>
              <p>Student Success Manager</p>
            </div>
          </div>
        </div>

        <div className="about-section">
          <h2>Our Achievements</h2>
          <div className="about-grid">
            <div className="about-item">
              <h3>📊 50,000+</h3>
              <p>Active Students learning on our platform</p>
            </div>
            <div className="about-item">
              <h3>👨‍🏫 200+</h3>
              <p>Expert Instructors and educators</p>
            </div>
            <div className="about-item">
              <h3>🎓 500+</h3>
              <p>Courses and learning modules</p>
            </div>
            <div className="about-item">
              <h3>🌍 40+</h3>
              <p>Countries represented in our community</p>
            </div>
            <div className="about-item">
              <h3>⭐ 4.8/5</h3>
              <p>Average student satisfaction rating</p>
            </div>
            <div className="about-item">
              <h3>🏆 95%</h3>
              <p>Course completion rate</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
