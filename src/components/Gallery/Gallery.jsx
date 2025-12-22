import React, { useState, useEffect } from 'react'
import styles from './Gallery.module.css'

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('all')
  const [currentSlide, setCurrentSlide] = useState(0)

  // Carousel featured images - add your best decoration photos here
  const carouselImages = [
    { id: 1, title: 'Featured Wedding Decoration', category: 'wedding', src:"./public/images/09_k.jpg"},
    { id: 2, title: 'Birthday Party Setup', category: 'birthday' ,src:"./public/images/08_k.jpg"},
    { id: 3, title: 'Corporate Event Design', category: 'corporate', src:"./public/images/10_k.jpg" },
    { id: 4, title: 'Baby Shower Theme', category: 'babyshower',src:"./public/images/11_k.jpg" },
    { id: 5, title: 'Anniversary Celebration', category: 'wedding',src:"./public/images/12_k.jpg" },
  ]

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
    }, 6000)
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
    { id: 1, type: 'photo', title: 'Decoration Photo 1', src:"./public/images/06_k.jpg" },
    { id: 2, type: 'video', title: 'Decoration Video 1', src:"./public/videos/02_k.mp4" },
    { id: 3, type: 'photo', title: 'Decoration Photo 2', src:"./public/images/01_k.jpg" },
    { id: 4, type: 'video', title: 'Decoration Video 2',src:"./public/videos/01_k.mp4" },
    { id: 5, type: 'photo', title: 'Decoration Photo 3',src:"./public/images/14_k.jpeg" },
    { id: 6, type: 'video', title: 'Decoration Video 3' ,src:"./public/videos/03_k.mp4"},
    { id: 7, type: 'photo', title: 'Decoration Photo 4', src:"./public/images/15_k.jpeg" },
    { id: 8, type: 'video', title: 'Decoration Video 4', src:"./public/videos/05_k.mp4" },
    { id: 9, type: 'photo', title: 'Decoration Photo 5', src:"./public/images/17_k.jpeg" },
    { id: 10, type: 'video', title: 'Decoration Video 5',src:"./public/videos/04_k.mp4" },
    { id: 11, type: 'photo', title: 'Decoration Photo 6',src:"./public/images/16_k.jpeg" },
    { id: 12, type: 'video', title: 'Decoration Video 6' ,src:"./public/videos/06_k.mp4"},
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
                     
                    {/* <span className={styles.carouselIcon}>🎨</span> */}
                    {/* <p className={styles.carouselTitle}>{image.title}</p> */}
                    {/* <p className={styles.carouselSubtitle}>Add your featured {image.category} decoration photo</p> */}
                    <img
                      src={image.src}
                      alt="Decoration setup"
                      className={styles.heroImg}></img>
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
                    {/* <div className={styles.videoIcon}>
                      <span className={styles.playButton}>▶</span>
                    </div> */}
                    {/* <p className={styles.itemTitle}>Replace with decoration video</p> */}
                    <video
                    src={item.src}
                    className={styles.galleryMedia}
                     autoPlay
                      muted
                      loop
                      playsInline
                  />
                    <span className={styles.videoBadge}>VIDEO</span>
                  </>
                ) : (
                  <>
                    {/* <span className={styles.itemType}>📷</span> */}
                    {/* <p className={styles.itemTitle}>Replace with decoration photo</p> */}<img
                      src={item.src}
                      alt="Decoration setup"
                      className={styles.heroImg}></img>
                    
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
