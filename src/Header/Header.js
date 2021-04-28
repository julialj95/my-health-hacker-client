import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
function Header() {
  return (
    <header className="header_link_container">
      <Link to="/" className="header_link">
        MyHealthHacker
      </Link>
    </header>
  );
}

export default Header;
