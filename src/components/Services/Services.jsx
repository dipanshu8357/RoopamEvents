import React from 'react'
import styles from './Services.module.css'

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Wedding Decorations',
      description: 'Make your special day unforgettable with stunning wedding decorations that reflect your love story.',
      icon: '💒'
    },
    {
      id: 2,
      title: 'Birthday Parties',
      description: 'Celebrate birthdays in style with creative themes and vibrant decorations for all ages.',
      icon: '🎂'
    },
    {
      id: 3,
      title: 'Corporate Events',
      description: 'Professional and elegant decoration services for corporate gatherings and business events.',
      icon: '🏢'
    },
    {
      id: 4,
      title: 'Baby Showers',
      description: 'Adorable and charming decorations to celebrate the arrival of your little one.',
      icon: '🍼'
    },
    {
      id: 5,
      title: 'Anniversary Celebrations',
      description: 'Romantic and memorable setups to honor your years of togetherness.',
      icon: '💕'
    },
    {
      id: 6,
      title: 'Custom Themes',
      description: 'Bring any theme to life with our custom decoration services tailored to your imagination.',
      icon: '🎨'
    }
  ]

  return (
    <section id="services" className={styles.services}>
      <div className={styles.servicesContainer}>
        <div className={styles.servicesHeader}>
          <h2 className={styles.sectionTitle}>Our Services</h2>
          <div className={styles.titleUnderline}></div>
          <p className={styles.servicesSubtitle}>
            We offer a wide range of decoration services to make every occasion special
          </p>
        </div>

        <div className={styles.servicesGrid}>
          {services.map(service => (
            <div key={service.id} className={styles.serviceCard}>
              <div className={styles.serviceIcon}>{service.icon}</div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
