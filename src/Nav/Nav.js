import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import UserContext from "../UserContext";

function Nav(props) {
  const context = useContext(UserContext);
  console.log("context", context);
  const LoggedIn = () => {
    return (
      <>
        <li className="navlink">
          <Link to="/submit-log">Submit Log</Link>
        </li>
        <li className="navlink">
          <Link to="/logs">View Logs</Link>
        </li>
        <li>
          <button className="logout_btn" onClick={props.handleLogout}>
            Log Out {context.username}
          </button>
        </li>
      </>
    );
  };

  const LoggedOut = () => {
    return (
      <>
        <li className="navlink">
          <Link to="signup">Create Account</Link>
        </li>
        <li className="navlink">
          <Link to="login">Log In</Link>
        </li>
      </>
    );
  };
  console.log("props.loggedIn", props.loggedIn);
  return (
    <nav className="nav">
      <ul className="navbar">
        <li className="navlink">
          <Link to="/">Home</Link>
        </li>
        {props.loggedIn ? LoggedIn() : LoggedOut()}
      </ul>
    </nav>
  );
}

export default Nav;
