import React, { useState } from 'react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  document.body.addEventListener('click', (e) => {
    if (e.target.closest('.menu-button') || e.target.closest('.menu-modal')) return;
    setIsMenuOpen(false);
  });

  return (
    <header>
      <h3 className="nav-logo">LC</h3>
      <button onClick={toggleMenu} className="menu-button">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav className={`menu-modal ${isMenuOpen ? 'open' : ''}`}>
        <ul className="menu">
          <li className="menu-item"><a href="#">Home</a></li>
          <li className="menu-item"><a href="#">About</a></li>
          <li className="menu-item"><a href="https://github.com/Sakamochanq/Liberal-Chart" target="_blank">Help</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
