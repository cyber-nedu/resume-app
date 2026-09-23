import { ArrowUpRight, Mail } from "lucide-react";
import { NavLink } from "react-router-dom";
import Logo from "../components/Logo";
import "./Footer.css";

const footerContent = {
  brand: {
    role: "Frontend Developer",
    description:
      "Building modern digital experiences with clean code, thoughtful interfaces and attention to detail.",
  },

  newsletter: {
    eyebrow: "STAY CONNECTED",
    title: {
      first: "Stay in",
      highlight: " the loop.",
    },
    description:
      "Get occasional updates about what I'm building, learning, and exploring in frontend development.",
    button: "Subscribe",
  },

  navigation: [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Skills", path: "/skills" },
    { label: "Projects", path: "/projects" },
    { label: "Contact", path: "/contact" },
  ],

  social: [
    {
      label: "GitHub",
      href: "https://github.com/cyber-nedu",
      icon: "github",
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/",
      icon: "linkedin",
    },
    {
      label: "Email",
      href: "mailto:chinedu.daniel.ernest@gmail.com",
      icon: "email",
    },
  ],
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-glow footer-glow-one"></div>
      <div className="footer-glow footer-glow-two"></div>

      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-brand">
            <Logo />

            <div className="footer-brand-info">
              <span>{footerContent.brand.role}</span>
            </div>

            <p>{footerContent.brand.description}</p>
          </div>

          <div className="footer-newsletter">
            <span className="footer-eyebrow">
              {footerContent.newsletter.eyebrow}
            </span>

            <h2>
              {footerContent.newsletter.title.first}
              <span>{footerContent.newsletter.title.highlight}</span>
            </h2>

            <p>{footerContent.newsletter.description}</p>

            <form className="footer-newsletter-form">
              <div className="footer-input-wrapper">
                <Mail size={17} />

                <input
                  type="email"
                  placeholder="Your email address"
                  aria-label="Your email address"
                />
              </div>

              <button type="submit">
                <span>{footerContent.newsletter.button}</span>
                <ArrowUpRight size={17} />
              </button>
            </form>

            <span className="footer-newsletter-note">
              No spam. Just useful updates.
            </span>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-links">
          <div className="footer-navigation">
            <span className="footer-section-label">NAVIGATE</span>

            <nav>
              {footerContent.navigation.map((link) => (
                <NavLink to={link.path} key={link.label}>
                  {link.label}
                </NavLink>
              ))}
            </nav>
          </div>

          <div className="footer-connect">
            <span className="footer-section-label">CONNECT</span>

            <div className="footer-socials">
              {footerContent.social.map((social) => (
                <a
                  href={social.href}
                  key={social.label}
                  target={social.icon === "email" ? undefined : "_blank"}
                  rel={
                    social.icon === "email" ? undefined : "noreferrer"
                  }
                >
                  {social.icon === "github" && (
                    <i className="fa-brands fa-github"></i>
                  )}

                  {social.icon === "linkedin" && (
                    <i className="fa-brands fa-square-linkedin"></i>
                  )}

                  {social.icon === "email" && <Mail size={17} />}

                  <span>{social.label}</span>

                  <ArrowUpRight size={15} />
                </a>
              ))}
            </div>
          </div>

          <div className="footer-status">
            <span className="footer-section-label">STATUS</span>

            <div className="footer-availability">
              <span className="footer-status-dot"></span>
              <span>Available for new projects</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Ernest Daniel Chinedu. All rights reserved.</span>

          <span className="footer-built">
            Designed & Built with
            <span> React</span>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;