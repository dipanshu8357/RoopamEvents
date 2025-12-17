import React from 'react'
import styles from './Hero.module.css'

const Hero = () => {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.heroText}>
          <p className={styles.experience}>5+ YRS EXP</p>
          <h1 className={styles.heroTitle}>EVENT DECORATOR</h1>
          <p className={styles.portfolio}>PORTFOLIO</p>
          <div className={styles.heroStats}>
            <div className={styles.stat}>
              <h3>500+</h3>
              <p>Events Decorated</p>
            </div>
            <div className={styles.stat}>
              <h3>100%</h3>
              <p>Client Satisfaction</p>
            </div>
          </div>
          <p className={styles.tagline}>
            Creating decorations that bring celebrations and memories to life.
          </p>
        </div>
        <div className={styles.heroImage}>
          <div className={styles.imagePlaceholder}>
            <p>Hero Image: Replace with your best decoration photo (Recommended: 800x600px)</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
