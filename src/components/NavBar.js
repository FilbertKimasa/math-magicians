import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css';

function NavBar() {
  return (
    <section className="header flex-space-between">
      <Link to="/" className="logo text-decoration">
        Math Magicians
      </Link>
      <nav>
        <ul className="flex-space-between navigation-menu">
          <li>
            <Link to="Home" className="text-decoration link-item">
              Home
            </Link>
          </li>
          <li className="calculator-link">
            <Link to="Calculator" className="text-decoration link-item">
              Calculator
            </Link>
          </li>
          <li>
            <Link to="Quote" className="text-decoration link-item">
              Quote
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default NavBar;
