import { Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__grid">
          {/* Brand/Monogram column */}
          <div className="footer__brand-col">
            <div className="footer__badge" aria-hidden="true">
              <span>SK</span>
            </div>
            <span className="footer__name">SHYAM KAILASH</span>
            <p className="footer__tagline">
              Building intelligent systems with precision, purpose, and practical impact.
            </p>
          </div>

          {/* Quick Links column */}
          <div className="footer__links-col">
            <h4 className="footer__title">Quick Links</h4>
            <ul className="footer__links-list">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#timeline">Timeline</a></li>
              <li><a href="#certificates">Certificates</a></li>
            </ul>
          </div>

          {/* Follow Me column */}
          <div className="footer__socials-col">
            <h4 className="footer__title">Follow Me</h4>
            <div className="footer__socials-buttons">
              <a
                href="https://github.com/shyamkailash"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="footer__social-btn"
              >
                <FaGithub size={18} />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/shyam-kailash-861240331"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="footer__social-btn"
              >
                <FaLinkedinIn size={18} />
                <span>LinkedIn</span>
              </a>
              <a
                href="mailto:shyamkailash268@gmail.com"
                aria-label="Email Shyam"
                className="footer__social-btn"
              >
                <Mail size={18} />
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright details */}
        <div className="footer__bottom">
          <div className="footer__divider" aria-hidden="true" />
          <div className="footer__meta-row">
            <p className="footer__copy">
              &copy; 2026 Shyam Kailash. All rights reserved.
            </p>
            <p className="footer__credit">
              Designed & Built by Shyam Kailash
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
