import React, { useState, useEffect } from 'react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (e.target.closest('.menu-button') || e.target.closest('.menu-modal')) return;
      setIsMenuOpen(false);
    };

    document.body.addEventListener('click', handleClickOutside);

    return () => {
      document.body.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <header>
      <img className='nav-logo' src="https://liberal-chart.vercel.app/assets/images/Liberal-Chart-Logo.png" alt="Liberal Chart Logo"/>
      <button onClick={toggleMenu} className="menu-button">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav className={`menu-modal ${isMenuOpen ? 'open' : ''}`}>
        <ul className="menu">
          <li className="menu-item"><a href="#home">Home</a></li>
          <li className="menu-item"><a href="https://www.kanazawa-it.ac.jp/campus_guide/2023/chapter_6/undergraduate/liberalarts/" target='_blank' rel="noreferrer">FYI</a></li>
          <li className="menu-item"><a href="https://github.com/Sakamochanq/Liberal-Chart/blob/master/CONTRIBUTING.md" target='_blank' rel="noreferrer">Contributes</a></li>
          {/* <li className="menu-item"><a href="https://github.com/Sakamochanq/Liberal-Chart/commits/master/" target='_blank'>Changelog</a></li> */}
          <li className="menu-item"><a href="https://github.com/Sakamochanq/Liberal-Chart/" target="_blank" rel="noreferrer">Help</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
