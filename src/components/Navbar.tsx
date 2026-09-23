import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";

const navLinks = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "About",
    path: "/about",
  },
  {
    label: "Skills",
    path: "/skills",
  },
  {
    label: "Projects",
    path: "/projects",
  },
  {
    label: "Contact",
    path: "/contact",
  },
];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/",
    icon: "fa-brands fa-github",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/",
    icon: "fa-brands fa-square-linkedin",
  },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("navbar-menu-open");
    } else {
      document.body.classList.remove("navbar-menu-open");
    }

    return () => {
      document.body.classList.remove("navbar-menu-open");
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header className="navbar">
        <div className="navbar-inner">

          <Link
            to="/"
            className="navbar-logo"
            onClick={closeMenu}
            aria-label="Ernest Daniel home"
          >
            <span className="navbar-logo-mark">
              ED
            </span>

            <span className="navbar-logo-name">
              Ernest • Daniel
            </span>
          </Link>

          <nav
            className="navbar-links"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                className={({ isActive }) =>
                  `navbar-link ${isActive ? "active" : ""}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="navbar-actions">

            <div className="navbar-socials">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="navbar-social"
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>

            <Link
              to="/contact"
              className="navbar-talk"
            >
              <span>Let's Talk</span>

              <ArrowUpRight
                size={16}
                strokeWidth={2}
              />
            </Link>
          </div>

          <button
            type="button"
            className={`navbar-menu-button ${
              menuOpen ? "open" : ""
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={
              menuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <X size={22} />
            ) : (
              <Menu size={22} />
            )}
          </button>
        </div>

        <div
          className={`navbar-mobile ${
            menuOpen ? "show" : ""
          }`}
        >
          <div className="navbar-mobile-inner">

            <nav
              className="navbar-mobile-links"
              aria-label="Mobile navigation"
            >
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === "/"}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `navbar-mobile-link ${
                      isActive ? "active" : ""
                    }`
                  }
                >
                  <strong>{link.label}</strong>
                </NavLink>
              ))}
            </nav>

            <div className="navbar-mobile-bottom">

              <div className="navbar-mobile-socials">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                  >
                    <i className={social.icon}></i>
                  </a>
                ))}
              </div>

              <Link
                to="/contact"
                onClick={closeMenu}
                className="navbar-mobile-talk"
              >
                <span>Let's Talk</span>

                <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;