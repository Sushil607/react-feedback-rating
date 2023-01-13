import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>Feedback Rating</h1>
      <nav>
        <NavLink className="nav-link" to="/">
          Home
        </NavLink>
        <NavLink className="nav-link" to="/about">
          About
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
