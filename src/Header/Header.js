import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
function Header() {
  return (
    <header className="header_link">
      <Link to="/" className="link">
        MyHealthHacker
      </Link>
    </header>
  );
}

export default Header;
