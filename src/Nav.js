import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

class Nav extends React.Component {
  render() {
    return (
      <nav className="nav">
        <ul className="navbar">
          <li className="navlink">
            <Link to="/">Home</Link>
          </li>
          <li className="navlink">
            <Link to="/submit-log">Submit Log</Link>
          </li>
          <li className="navlink">
            <Link to="/logs">View Logs</Link>
          </li>
          <li className="navlink">
            <Link to="signup">Create Account</Link>
          </li>
          <li className="navlink">
            <Link to="login">Log In</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
