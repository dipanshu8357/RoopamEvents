import React, { useState } from 'react'
import styles from './Contact.module.css'
import { FaInstagram } from "react-icons/fa";


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      eventType: '',
      message: ''
    })
  }

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.contactContainer}>
        <div className={styles.thankYou}>
          <h2 className={styles.thankYouText}>Thanks for Viewing :)</h2>
          <div className={styles.smiley}>
            <div className={styles.smileyArc}></div>
          </div>
        </div>

        <div className={styles.contactContent}>
          <div className={styles.contactInfo}>
            <div className={styles.infoItem}>
              <span className={styles.icon}>📞</span>
              <div>
                <h4>Contact</h4>
                <p>
                   <a
                    href="tel:+918103700107"
                    className={styles.callLink}
                  ></a>
                  +91 8103700107</p>
              </div>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.icon}>✉️</span>
              <div>
                <h4>Email</h4>
                <p>kashishkanojia2@gmail.com</p>
              </div>
            </div>
            <div className={styles.infoItem}>
              {/* <span className={styles.icon}>�</span> */}
              <span className={styles.icon}>
                <FaInstagram />
              </span>
              <div>
                <h4>Social</h4>
                <p><a
                href="https://www.instagram.com/_roopam_events"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                @_roopam_events
              </a></p>
              </div>
            </div>
          </div>

          <div className={styles.contactImage}>
            
              {/* <p>Contact Image: Decoration sample or portrait (Recommended: 600x500px)</p> */}
              <img
                 src="./public\images\05_k.jpg"
                 alt="Decoration setup"
                 className={styles.heroImg}></img>
            {/* </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
