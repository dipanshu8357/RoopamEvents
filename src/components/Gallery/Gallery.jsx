import React, { useState, useEffect } from 'react'
import styles from './Gallery.module.css'

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('all')
  const [currentSlide, setCurrentSlide] = useState(0)

  // Carousel featured images - add your best decoration photos here
  const carouselImages = [
    { id: 1, title: 'Featured Wedding Decoration', category: 'wedding' },
    { id: 2, title: 'Birthday Party Setup', category: 'birthday' },
    { id: 3, title: 'Corporate Event Design', category: 'corporate' },
    { id: 4, title: 'Baby Shower Theme', category: 'babyshower' },
    { id: 5, title: 'Anniversary Celebration', category: 'wedding' },
  ]

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [carouselImages.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  // Placeholder gallery items - replace with actual images/videos
  const galleryItems = [
    { id: 1, type: 'photo', title: 'Decoration Photo 1' },
    { id: 2, type: 'video', title: 'Decoration Video 1' },
    { id: 3, type: 'photo', title: 'Decoration Photo 2' },
    { id: 4, type: 'video', title: 'Decoration Video 2' },
    { id: 5, type: 'photo', title: 'Decoration Photo 3' },
    { id: 6, type: 'video', title: 'Decoration Video 3' },
    { id: 7, type: 'photo', title: 'Decoration Photo 4' },
    { id: 8, type: 'photo', title: 'Decoration Photo 5' },
    { id: 9, type: 'video', title: 'Decoration Video 4' },
  ]

  const filteredItems = activeTab === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.type === activeTab)

  const tabs = [
    { id: 'all', label: 'All' },
    { id: 'video', label: 'Videos' },
    { id: 'photo', label: 'Photos' }
  ]

  return (
    <section id="gallery" className={styles.gallery}>
      <div className={styles.galleryContainer}>
        <div className={styles.galleryHeader}>
          <h2 className={styles.sectionTitle}>Body of Work</h2>
          <div className={styles.titleUnderline}></div>
        </div>

        {/* Carousel Section */}
        <div className={styles.carouselSection}>
          <div className={styles.carousel}>
            <div 
              className={styles.carouselTrack}
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {carouselImages.map((image, index) => (
                <div key={image.id} className={styles.carouselSlide}>
                  <div className={styles.carouselPlaceholder}>
                    <span className={styles.carouselIcon}>🎨</span>
                    <p className={styles.carouselTitle}>{image.title}</p>
                    <p className={styles.carouselSubtitle}>Add your featured {image.category} decoration photo</p>
                    <span className={styles.slideNumber}>{index + 1} / {carouselImages.length}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button 
              className={`${styles.carouselBtn} ${styles.carouselBtnPrev}`}
              onClick={prevSlide}
              aria-label="Previous slide"
            >
              ‹
            </button>
            <button 
              className={`${styles.carouselBtn} ${styles.carouselBtnNext}`}
              onClick={nextSlide}
              aria-label="Next slide"
            >
              ›
            </button>

            {/* Dot Indicators */}
            <div className={styles.carouselDots}>
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  className={`${styles.dot} ${currentSlide === index ? styles.dotActive : ''}`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className={styles.filterTabs}>
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`${styles.filterBtn} ${activeTab === tab.id ? styles.active : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className={styles.galleryGrid}>
          {filteredItems.map(item => (
            <div key={item.id} className={styles.galleryItem}>
              <div className={styles.itemPlaceholder} data-type={item.type}>
                {item.type === 'video' ? (
                  <>
                    <div className={styles.videoIcon}>
                      <span className={styles.playButton}>▶</span>
                    </div>
                    <p className={styles.itemTitle}>Replace with decoration video</p>
                    <span className={styles.videoBadge}>VIDEO</span>
                  </>
                ) : (
                  <>
                    <span className={styles.itemType}>📷</span>
                    <p className={styles.itemTitle}>Replace with decoration photo</p>
                    <span className={styles.photoBadge}>PHOTO</span>
                  </>
                )}
              </div>
              <div className={styles.itemOverlay}>
                <h4>{item.title}</h4>
                <p className={styles.itemFormat}>{item.type}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
