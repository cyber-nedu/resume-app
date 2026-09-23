import { Link } from "react-router-dom";
import "./Logo.css";

const Logo = () => {
  return (
    <Link
      to="/"
      className="navbar-logo"
      aria-label="Ernest Daniel home"
    >
      <span className="navbar-logo-mark">
        ED
      </span>

      <span className="navbar-logo-name">
        Ernest • Daniel
      </span>
    </Link>
  );
};

export default Logo;