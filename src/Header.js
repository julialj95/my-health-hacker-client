import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header_link">
      <Link to="/">MyHealthHacker</Link>
    </header>
  );
}

export default Header;
