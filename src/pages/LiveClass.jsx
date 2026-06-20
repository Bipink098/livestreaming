import "../pages/LiveClass.css";

export default function LiveClass() {
  const upcomingClasses = [
    {
      time: "10:00 AM",
      subject: "Mathematics - Calculus Advanced Concepts",
      instructor: "Mr. Rahul Kumar",
    },
    {
      time: "11:30 AM",
      subject: "Physics - Quantum Mechanics Basics",
      instructor: "Dr. Priya Sharma",
    },
    {
      time: "1:00 PM",
      subject: "Chemistry - Organic Reactions",
      instructor: "Prof. Amit Patel",
    },
    {
      time: "2:30 PM",
      subject: "English - Shakespeare Analysis",
      instructor: "Ms. Neha Singh",
    },
    {
      time: "4:00 PM",
      subject: "Biology - Genetics and Heredity",
      instructor: "Dr. Vikram Desai",
    },
  ];

  return (
    <div className="live-class">
      <div className="live-class-header">
        <div className="live-indicator">
          <div className="live-dot"></div>
          🔴 LIVE NOW
        </div>
        <h1>Live Classes</h1>
        <p>
          Join interactive live sessions with expert instructors in real-time
        </p>
      </div>

      <div className="live-class-container">
        <div className="video-wrapper">
          <iframe
            width="100%"
            height="600"
            src="https://www.youtube.com/embed/AP5kn6FdoD4"
            title="Live Class"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="live-info">
          <div className="info-card">
            <h3>📊 Viewers</h3>
            <p>2,450+</p>
          </div>
          <div className="info-card">
            <h3>👥 Active Participants</h3>
            <p>1,240</p>
          </div>
          <div className="info-card">
            <h3>⏱️ Duration</h3>
            <p>45 Minutes</p>
          </div>
          <div className="info-card">
            <h3>🎓 Current Instructor</h3>
            <p>Prof. Rahul Kumar</p>
          </div>
        </div>

        <div className="schedule-section">
          <h2>Today's Schedule</h2>
          <ul className="schedule-list">
            {upcomingClasses.map((classItem, index) => (
              <li key={index} className="schedule-item">
                <span className="schedule-time">{classItem.time}</span>
                <div>
                  <div className="schedule-class">{classItem.subject}</div>
                  <div
                    style={{
                      fontSize: "0.85rem",
                      color: "#9ca3af",
                      marginTop: "4px",
                    }}
                  >
                    by {classItem.instructor}
                  </div>
                </div>
                <button className="join-button">Join Class</button>
              </li>
            ))}
          </ul>
        </div>

        <div className="schedule-section" style={{ marginTop: "40px" }}>
          <h2>Class Features</h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "20px",
              marginTop: "20px",
            }}
          >
            <div
              style={{
                padding: "15px",
                background: "#f9fafb",
                borderRadius: "8px",
              }}
            >
              <div style={{ fontSize: "2rem", marginBottom: "8px" }}>💬</div>
              <h4 style={{ margin: "0 0 8px 0", fontSize: "1rem" }}>
                Live Chat
              </h4>
              <p style={{ margin: 0, fontSize: "0.9rem", color: "#6b7280" }}>
                Real-time interaction with instructors and peers
              </p>
            </div>
            <div
              style={{
                padding: "15px",
                background: "#f9fafb",
                borderRadius: "8px",
              }}
            >
              <div style={{ fontSize: "2rem", marginBottom: "8px" }}>📝</div>
              <h4 style={{ margin: "0 0 8px 0", fontSize: "1rem" }}>
                Screen Share
              </h4>
              <p style={{ margin: 0, fontSize: "0.9rem", color: "#6b7280" }}>
                Follow along with live demonstrations and explanations
              </p>
            </div>
            <div
              style={{
                padding: "15px",
                background: "#f9fafb",
                borderRadius: "8px",
              }}
            >
              <div style={{ fontSize: "2rem", marginBottom: "8px" }}>🎬</div>
              <h4 style={{ margin: "0 0 8px 0", fontSize: "1rem" }}>
                Recording
              </h4>
              <p style={{ margin: 0, fontSize: "0.9rem", color: "#6b7280" }}>
                Access class recordings anytime after the session
              </p>
            </div>
            <div
              style={{
                padding: "15px",
                background: "#f9fafb",
                borderRadius: "8px",
              }}
            >
              <div style={{ fontSize: "2rem", marginBottom: "8px" }}>❓</div>
              <h4 style={{ margin: "0 0 8px 0", fontSize: "1rem" }}>
                Q&A Session
              </h4>
              <p style={{ margin: 0, fontSize: "0.9rem", color: "#6b7280" }}>
                Ask questions and get instant responses from instructors
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
