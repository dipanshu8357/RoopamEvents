import React, { useState } from 'react'
import styles from './Navbar.module.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <div className={styles.logo}>
          <h2>Event Decorator</h2>
        </div>
        
        <div className={`${styles.navMenu} ${isOpen ? styles.active : ''}`}>
          <a href="#home" className={styles.navLink} onClick={closeMenu}>Home</a>
          <a href="#about" className={styles.navLink} onClick={closeMenu}>About</a>
          <a href="#services" className={styles.navLink} onClick={closeMenu}>Services</a>
          <a href="#gallery" className={styles.navLink} onClick={closeMenu}>Gallery</a>
          <a href="#contact" className={styles.navLink} onClick={closeMenu}>Contact</a>
        </div>

        <button 
          className={styles.hamburger} 
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
