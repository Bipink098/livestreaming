import "./Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>About LiveStreaming</h3>
            <p>
              Empowering students through live interactive classes,
              comprehensive study notes, and real-time learning experiences.
            </p>
            <div className="footer-social">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Facebook"
              >
                f
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Twitter"
              >
                𝕏
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
              >
                📷
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                title="YouTube"
              >
                ▶
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/live">Live Classes</a>
              </li>
              <li>
                <a href="/notes">Study Notes</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Support</h3>
            <ul>
              <li>
                <a href="/">FAQ</a>
              </li>
              <li>
                <a href="/">Privacy Policy</a>
              </li>
              <li>
                <a href="/">Terms & Conditions</a>
              </li>
              <li>
                <a href="/">Contact Support</a>
              </li>
              <li>
                <a href="/">Report Issue</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Contact Info</h3>
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:info@livestreaming.com">info@livestreaming.com</a>
            </p>
            <p>
              <strong>Phone:</strong>{" "}
              <a href="tel:+91234567890">+91 (234) 567-890</a>
            </p>
            <p>
              <strong>Address:</strong>
              <br />
              123 Education Street
              <br />
              Learning City, LC 12345
              <br />
              India
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {currentYear} LiveStreaming Platform. All rights reserved.
            <span className="footer-divider">|</span>
            Made with ❤️ for education
          </p>
        </div>
      </div>
    </footer>
  );
}
