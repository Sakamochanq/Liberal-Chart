import React from 'react'

export const Header = () => {
  return (
    <header>
      <h3 className="nav-logo">RL</h3>
      <nav>
        <ul className="menu">
          <li className="menu-item"><a href="#">Home</a></li>
          <li className="menu-item"><a href="https://github.com/Sakamochanq">Help</a></li>
        </ul>
      </nav>
    </header>
  )
}
export default Header