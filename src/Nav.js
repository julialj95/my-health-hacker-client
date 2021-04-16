import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

class Nav extends React.Component {
  render() {
    return (
      <nav className="nav">
        <ul className="navbar">
          <li>
            <Link className="navlink" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="navlink" to="/submit-log">
              Submit Log
            </Link>
          </li>
          <li>
            <Link className="navlink" to="/logs">
              View Logs
            </Link>
          </li>
          <li>
            <Link className="navlink" to="signup">
              Create Account
            </Link>
          </li>
          <li>
            <Link className="navlink" to="login">
              Log In
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
