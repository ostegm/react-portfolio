import React from 'react';
import { Link } from 'react-router-dom';
import './nav-bar.css';

export default function NavBar() {
  return (
    <nav className="nav-bar">
      <Link to="/">
        Home
      </Link>
    </nav>
  );
}
