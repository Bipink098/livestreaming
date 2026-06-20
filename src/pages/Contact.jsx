import { useState } from "react";
import "../pages/Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    category: "general",
    message: "",
  });

  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form
    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      setSubmitStatus({
        type: "error",
        message: "Please fill in all fields.",
      });
      return;
    }

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus({
        type: "error",
        message: "Please enter a valid email address.",
      });
      return;
    }

    // Simulate form submission
    console.log("Form submitted:", formData);
    setSubmitStatus({
      type: "success",
      message: "Thank you for contacting us! We will get back to you soon.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      category: "general",
      message: "",
    });

    // Clear success message after 5 seconds
    setTimeout(() => setSubmitStatus(null), 5000);
  };

  return (
    <div className="contact">
      <div className="contact-hero">
        <h1>Get In Touch</h1>
        <p>Have questions? We'd love to hear from you. Send us a message!</p>
      </div>

      <div className="contact-container">
        <div className="contact-content">
          <div className="contact-info">
            <h2>Contact Information</h2>

            <div className="info-item">
              <div className="info-icon">📧</div>
              <div className="info-details">
                <h3>Email</h3>
                <p>
                  <a href="mailto:support@livestreaming.com">
                    support@livestreaming.com
                  </a>
                </p>
                <p style={{ marginTop: "5px" }}>
                  <a href="mailto:info@livestreaming.com">
                    info@livestreaming.com
                  </a>
                </p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">📱</div>
              <div className="info-details">
                <h3>Phone</h3>
                <p>
                  <a href="tel:+911234567890">+91 (123) 456-7890</a>
                </p>
                <p style={{ marginTop: "5px" }}>
                  Toll Free: <a href="tel:18001234567">1-800-123-4567</a>
                </p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">📍</div>
              <div className="info-details">
                <h3>Address</h3>
                <p>
                  123 Education Street
                  <br />
                  Tech Park Building A
                  <br />
                  Learning City, LC 12345
                  <br />
                  India
                </p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">🕐</div>
              <div className="info-details">
                <h3>Business Hours</h3>
                <p>
                  Monday - Friday: 9:00 AM - 6:00 PM IST
                  <br />
                  Saturday: 10:00 AM - 4:00 PM IST
                  <br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>

          <div className="form-wrapper">
            <h2>Send us a Message</h2>

            {submitStatus && (
              <div className={`${submitStatus.type}-message`}>
                {submitStatus.message}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="category">Category *</label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                >
                  <option value="general">General Inquiry</option>
                  <option value="support">Technical Support</option>
                  <option value="billing">Billing Issues</option>
                  <option value="course">Course Related</option>
                  <option value="feedback">Feedback</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What is this about?"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us more about your inquiry..."
                  required
                />
              </div>

              <button type="submit" className="submit-button">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      <div style={{ marginTop: "60px", textAlign: "center" }}>
        <h2 style={{ marginBottom: "40px" }}>Frequently Asked Questions</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              padding: "20px",
              background: "#f9fafb",
              borderRadius: "8px",
              textAlign: "left",
            }}
          >
            <h4 style={{ marginBottom: "10px" }}>
              How do I enroll in a course?
            </h4>
            <p style={{ fontSize: "0.9rem", color: "#6b7280", margin: 0 }}>
              Simply browse our courses, click "Enroll Now," and follow the
              payment process. You'll get instant access to all course
              materials.
            </p>
          </div>
          <div
            style={{
              padding: "20px",
              background: "#f9fafb",
              borderRadius: "8px",
              textAlign: "left",
            }}
          >
            <h4 style={{ marginBottom: "10px" }}>Can I get a refund?</h4>
            <p style={{ fontSize: "0.9rem", color: "#6b7280", margin: 0 }}>
              Yes, we offer a 7-day money-back guarantee if you're not satisfied
              with the course content.
            </p>
          </div>
          <div
            style={{
              padding: "20px",
              background: "#f9fafb",
              borderRadius: "8px",
              textAlign: "left",
            }}
          >
            <h4 style={{ marginBottom: "10px" }}>How long do I have access?</h4>
            <p style={{ fontSize: "0.9rem", color: "#6b7280", margin: 0 }}>
              You have lifetime access to all course materials and any future
              updates.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
