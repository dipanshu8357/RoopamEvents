import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3>Event Decorator</h3>
            <p>Creating magical moments through exceptional decorations</p>
          </div>

          <div className={styles.footerSection}>
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h4>Services</h4>
            <ul>
              <li>Wedding Decorations</li>
              <li>Birthday Parties</li>
              <li>Corporate Events</li>
              <li>Baby Showers</li>
              <li>Custom Themes</li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h4>Follow Us</h4>
            <div className={styles.socialLinks}>
              <span className={styles.socialIcon} title="Instagram">📷</span>
              <span className={styles.socialIcon} title="Facebook">📘</span>
              <span className={styles.socialIcon} title="Pinterest">📌</span>
              <span className={styles.socialIcon} title="Twitter">🐦</span>
            </div>
            <p style={{ fontSize: '0.9rem', marginTop: '1rem', opacity: 0.8 }}>
              Add your social media links here
            </p>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>&copy; {currentYear} Event Decorator. All rights reserved.</p>
          <p>Designed with ❤️ for creating beautiful moments</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
