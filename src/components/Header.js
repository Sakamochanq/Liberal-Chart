import React from 'react'

export const Header = () => {
  return (
    <header>
      <h3 className="nav-logo">LC</h3>
      <nav>
        <ul className="menu">
          <li className="menu-item"><a href="#">Home</a></li>
          <li className="menu-item"><a href="https://github.com/Sakamochanq" target="_blank">Help</a></li>
        </ul>
      </nav>
    </header>
  )
}
export default Header