import React, { useState } from 'react'
import styles from './Contact.module.css'

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
                <p>+1 (555) 123-4567</p>
              </div>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.icon}>✉️</span>
              <div>
                <h4>Email</h4>
                <p>events@decorator.com</p>
              </div>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.icon}>�</span>
              <div>
                <h4>Social</h4>
                <p>@eventdecorator</p>
              </div>
            </div>
          </div>

          <div className={styles.contactImage}>
            <div className={styles.imagePlaceholder}>
              <p>Contact Image: Decoration sample or portrait (Recommended: 600x500px)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
