import React, { useState } from 'react'
import { FaBars, FaTimes, FaCalculator } from 'react-icons/fa'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }
    
  return (
    <header>
        <div className="navbar-logoName">
            <h1>Foam Calculator <FaCalculator /> </h1>
        </div>
        <nav className={`navbar-menu ${isOpen ? 'open' : ''}`}>
            <ul className="navbar-list">
            <li className="navbar-item">34 Tank</li>
            <li className="navbar-item">40 Tank</li>
            <li className="navbar-item">10 Tank</li>
            <li className="navbar-item">24 Tank</li>
            </ul>
        </nav>
        <div className="hamburger" onClick={toggleMenu}>
            {isOpen ? <FaTimes /> : <FaBars />}
        </div>    
    </header>
  )
}

export default Navbar