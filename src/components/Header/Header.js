import React, { useState, useEffect } from 'react'
import './Header.css'

export const Header = () => {
  const [MenuOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => {
    setMenuOpen(!MenuOpen)
  }
  const closeMenu = (e) => {
    if (!e.target.closest('.menu-item') && !e.target.closest('.menu-button')) {
      setMenuOpen(false)
    }
  }
  useEffect(() => {
    document.addEventListener('click', closeMenu)
    return () => {
      document.removeEventListener('click', closeMenu)
    }
  }, [])

  return (
    <header>
        <h1 className='nav-logo'>LIBERAL CHART</h1>
        <button onClick={toggleMenu} className="menu-button">
          <span></span><span></span><span></span>
        </button>
        <nav className={`menu-modal ${MenuOpen ? 'open' : ''}`}>
            <ul className='menu'>
                <li className='menu-item'><a href="./">ホーム</a></li>
                <li className='menu-item'><a href="#announcement">お知らせ</a></li>
                <li className='menu-item'><a href="">免責事項</a></li>
                <li className='menu-item'><a href="https://github.com/Sakamochanq/Liberal-Chart/issues">お問い合わせ</a></li>
            </ul>
        </nav>
    </header>
  )

}
export default Header