import React from "react";
import "./Navbar.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
        <img
          id="logo"
          src="./logo_transparent_white.png"
          alt="Juhani Rajalahti logo"
        />
        <ul role="presentation">
          <li>
            <Link to="/">Who</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/skills">Skills</Link>
          </li>
        </ul>
    </nav>
  );
}
