import React from 'react'
import styles from './About.module.css'

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutImage}>
          <div className={styles.imagePlaceholder}>
            {/* <p>About Image: Your professional photo or workspace (Recommended: 600x600px)</p> */}

              <img
               src="/RoopamEvents/images/03_k.jpg"
               alt="Decoration setup"
               className={styles.heroImg}></img>
          </div>
        </div>
        {/* <div></div> */}
          <div className={styles.aboutContent}>
          <h2 className={styles.sectionTitle}>About Me</h2>
          <div className={styles.titleUnderline}></div>
          <p className={styles.aboutText}>
           Roopam Events is a professional event management company founded by Kashish and Yuvraj Kanojia,
            a brother-and-sister duo driven by creativity and passion. 
           Since 2020, we have been crafting elegant weddings, celebrations, and events with personalized concepts,
            quality décor, and seamless execution.

          </p>
          <p className={styles.aboutText}>
            At Roopam Events, we don’t just manage events — we create moments that last a lifetime.
          </p>
          
          <div className={styles.approach}>
            <h3>My Approach</h3>
            <p>
             At Roopam Events, we believe every celebration deserves a personal touch.
              We plan, design, and execute events with creativity, precision, and care.
              From concept to completion, we focus on seamless coordination and elegant details.
              Creating unforgettable moments that last a lifetime.
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
