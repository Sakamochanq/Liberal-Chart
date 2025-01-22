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
      <img className='nav-logo' src="https://liberal-chart.vercel.app/assets/images/Liberal-Chart-Logo.png"/>
      <button onClick={toggleMenu} className="menu-button">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav className={`menu-modal ${isMenuOpen ? 'open' : ''}`}>
        <ul className="menu">
          <li className="menu-item"><a href="#">Home</a></li>
          <li className="menu-item"><a href="https://www.kanazawa-it.ac.jp/campus_guide/2023/chapter_6/undergraduate/liberalarts/" target='_blank'>FYI</a></li>
          <li className="menu-item"><a href="https://github.com/Sakamochanq/Liberal-Chart/blob/master/CONTRIBUTING.md" target='_blank'>Contributes</a></li>
          <li className="menu-item"><a href="https://github.com/Sakamochanq/Liberal-Chart/" target="_blank">Help</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
