import React from 'react'
import styles from './About.module.css'

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutImage}>
          <div className={styles.imagePlaceholder}>
            <p>About Image: Your professional photo or workspace (Recommended: 600x600px)</p>
          </div>
        </div>
        <div className={styles.aboutContent}>
          <h2 className={styles.sectionTitle}>About Me</h2>
          <div className={styles.titleUnderline}></div>
          <p className={styles.aboutText}>
            Hi! I'm a passionate event decorator with a keen eye for detail and a love for creating unforgettable experiences. 
            With over 5 years of experience in the event decoration industry, I specialize in transforming ordinary spaces 
            into extraordinary celebrations.
          </p>
          <p className={styles.aboutText}>
            My approach goes beyond just placing decorations. I believe in understanding your vision, your story, and your 
            dreams to create a unique ambiance that reflects your personality and makes your event truly special.
          </p>
          
          <div className={styles.approach}>
            <h3>My Approach</h3>
            <p>
              Every event is unique, and I focus on creating personalized designs that capture the essence of your celebration. 
              From intimate gatherings to grand celebrations, I bring creativity, professionalism, and attention to detail to 
              every project. My goal is to exceed your expectations and create magical moments that you'll cherish forever.
            </p>
          </div>

          <div className={styles.values}>
            <div className={styles.value}>
              <h4>🎨 Creativity</h4>
              <p>Unique designs tailored to your vision</p>
            </div>
            <div className={styles.value}>
              <h4>⚡ Quality</h4>
              <p>Premium materials and flawless execution</p>
            </div>
            <div className={styles.value}>
              <h4>💝 Passion</h4>
              <p>Dedicated to making your event perfect</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
