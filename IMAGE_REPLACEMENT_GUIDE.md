# 📸 Image Replacement Guide

This guide shows you exactly where and how to replace placeholder images with your actual decoration photos.

## 🎠 NEW: Carousel Feature Added!

A beautiful auto-playing carousel has been added to showcase your best work at the top of the Gallery section!

### Quick Carousel Setup:

**Location:** `src/components/Gallery/Gallery.jsx` (lines 8-12)

**Add your carousel images:**
```jsx
const carouselImages = [
  { id: 1, title: 'Featured Wedding Decoration', category: 'wedding', image: '/images/carousel/wedding-featured.jpg' },
  { id: 2, title: 'Birthday Party Setup', category: 'birthday', image: '/images/carousel/birthday-featured.jpg' },
  { id: 3, title: 'Corporate Event Design', category: 'corporate', image: '/images/carousel/corporate-featured.jpg' },
  { id: 4, title: 'Baby Shower Theme', category: 'babyshower', image: '/images/carousel/babyshower-featured.jpg' },
  { id: 5, title: 'Anniversary Celebration', category: 'wedding', image: '/images/carousel/anniversary-featured.jpg' },
]
```

**Then update the carousel slide JSX (around line 72-78):**

Replace:
```jsx
<div className={styles.carouselPlaceholder}>
  <span className={styles.carouselIcon}>🎨</span>
  <p className={styles.carouselTitle}>{image.title}</p>
  <p className={styles.carouselSubtitle}>Add your featured {image.category} decoration photo</p>
  <span className={styles.slideNumber}>{index + 1} / {carouselImages.length}</span>
</div>
```

With:
```jsx
<div className={styles.carouselSlideImage}>
  <img 
    src={image.image} 
    alt={image.title}
    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
  />
  <div className={styles.carouselCaption}>
    <h3>{image.title}</h3>
    <span className={styles.slideNumber}>{index + 1} / {carouselImages.length}</span>
  </div>
</div>
```

**Recommended carousel image size:** 1000x600px (landscape, high quality)

**Features:**
- ✨ Auto-plays every 5 seconds
- ◀️ ▶️ Navigation arrows
- 🔘 Dot indicators for quick navigation
- 📱 Fully responsive

---

## 📁 Step 1: Organize Your Images

Create an `images` folder in the `public` directory:

```
TestPortfolio/
├── public/
│   ├── images/
│   │   ├── hero-decoration.jpg
│   │   ├── about-photo.jpg
│   │   ├── contact-decoration.jpg
│   │   ├── carousel/
│   │   │   ├── wedding-featured.jpg
│   │   │   ├── birthday-featured.jpg
│   │   │   ├── corporate-featured.jpg
│   │   │   ├── babyshower-featured.jpg
│   │   │   └── anniversary-featured.jpg
│   │   └── gallery/
│   │       ├── wedding-1.jpg
│   │       ├── wedding-2.jpg
│   │       ├── birthday-1.jpg
│   │       ├── corporate-1.jpg
│   │       ├── birthday-thumb.jpg (video thumbnail)
│   │       └── ... (more images)
│   └── videos/
│       ├── birthday-party.mp4
│       ├── wedding-ceremony.mp4
│       ├── corporate-event.mp4
│       └── ... (more videos)
```

## 🎯 Step 2: Replace Images in Each Section

### 1️⃣ **Hero Section** (Main Landing Image)
**Location:** `src/components/Hero/Hero.jsx`

**Current placeholder:**
```jsx
<div className={styles.imagePlaceholder}>
  <p>Hero Image: Replace with your best decoration photo...</p>
</div>
```

**Replace with:**
```jsx
<img 
  src="/images/hero-decoration.jpg" 
  alt="Beautiful event decoration"
  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
/>
```

**Recommended size:** 800x600px (landscape)
**Best for:** Your most stunning decoration setup

---

### 2️⃣ **About Section** (Your Photo/Workspace)
**Location:** `src/components/About/About.jsx`

**Current placeholder:**
```jsx
<div className={styles.imagePlaceholder}>
  <p>About Image: Your professional photo...</p>
</div>
```

**Replace with:**
```jsx
<img 
  src="/images/about-photo.jpg" 
  alt="Event decorator professional photo"
  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
/>
```

**Recommended size:** 600x600px (square)
**Best for:** Professional headshot or workspace photo

---

### 3️⃣ **Gallery Section** (Multiple Images & Videos)
**Location:** `src/components/Gallery/Gallery.jsx`

**Current code (line ~40-48):**
```jsx
const galleryItems = [
  { id: 1, type: 'photo', category: 'wedding', title: 'Wedding Decoration 1' },
  { id: 2, type: 'video', category: 'birthday', title: 'Birthday Party 1' },
  // ... more items
]
```

**Update to:**
```jsx
const galleryItems = [
  { 
    id: 1, 
    type: 'photo', 
    category: 'wedding', 
    title: 'Elegant Wedding Setup',
    src: '/images/gallery/wedding-1.jpg' 
  },
  { 
    id: 2, 
    type: 'video', 
    category: 'birthday', 
    title: 'Birthday Celebration',
    src: '/videos/birthday-party.mp4',
    thumbnail: '/images/gallery/birthday-thumb.jpg'
  },
  // Add more items with your images and videos
]
```

**Then update the JSX (line ~118-136):**

**For Photos, replace:**
```jsx
<>
  <span className={styles.itemType}>📷</span>
  <p className={styles.itemTitle}>Replace with {item.category} decoration photo</p>
  <span className={styles.photoBadge}>PHOTO</span>
</>
```

**With:**
```jsx
<img 
  src={item.src} 
  alt={item.title}
  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
/>
<span className={styles.photoBadge}>PHOTO</span>
```

**For Videos, replace:**
```jsx
<>
  <div className={styles.videoIcon}>
    <span className={styles.playButton}>▶</span>
  </div>
  <p className={styles.itemTitle}>Replace with {item.category} decoration video</p>
  <span className={styles.videoBadge}>VIDEO</span>
</>
```

**With:**
```jsx
<>
  <video 
    poster={item.thumbnail}
    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
    controls
  >
    <source src={item.src} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  <span className={styles.videoBadge}>VIDEO</span>
</>
```

**Or for a simpler approach, update the entire map to:**
```jsx
{filteredItems.map(item => (
  <div key={item.id} className={styles.galleryItem}>
    {item.type === 'video' ? (
      <div className={styles.videoContainer}>
        <video 
          poster={item.thumbnail}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          controls
        >
          <source src={item.src} type="video/mp4" />
        </video>
        <span className={styles.videoBadge}>VIDEO</span>
      </div>
    ) : (
      <div className={styles.photoContainer}>
        <img 
          src={item.src} 
          alt={item.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <span className={styles.photoBadge}>PHOTO</span>
      </div>
    )}
    <div className={styles.itemOverlay}>
      <h4>{item.title}</h4>
      <p className={styles.itemFormat}>{item.type}</p>
    </div>
  </div>
))}
```

**Recommended sizes:**
- **Photos:** 600x400px (any aspect ratio works)
- **Videos:** MP4 format, 1080p or 720p, under 10MB
- **Video Thumbnails:** 600x400px JPG (for preview before playing)

**File Organization:**
```
public/
├── images/
│   └── gallery/
│       ├── wedding-1.jpg
│       ├── wedding-2.jpg
│       ├── birthday-thumb.jpg  (video thumbnail)
│       └── ...
└── videos/
    ├── birthday-party.mp4
    ├── wedding-ceremony.mp4
    └── ...
```

**Filter Tabs:**
- **All** - Shows both photos and videos
- **Videos** - Shows only video content
- **Photos** - Shows only photo content

---

### 4️⃣ **Contact Section** (Decoration Sample)
**Location:** `src/components/Contact/Contact.jsx`

**Current placeholder:**
```jsx
<div className={styles.imagePlaceholder}>
  <p>Contact Image: Decoration sample...</p>
</div>
```

**Replace with:**
```jsx
<img 
  src="/images/contact-decoration.jpg" 
  alt="Contact us for event decoration"
  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
/>
```

**Recommended size:** 600x500px
**Best for:** Another decoration showcase or behind-the-scenes photo

---

## 🎨 Image Optimization Tips

### Before uploading images:

1. **Resize images** to recommended dimensions
   - Use free tools like:
     - [TinyPNG](https://tinypng.com/) - Compress images
     - [Squoosh](https://squoosh.app/) - Resize & optimize
     - Photoshop/GIMP - Professional editing

2. **Optimize file sizes**
   - Photos: Under 500KB per image
   - Videos: Under 10MB per video (or use YouTube/Vimeo embed)
   - Format: JPG for photos, MP4 for videos

3. **Video Optimization Tips**
   - **Recommended:** Use YouTube or Vimeo for hosting videos (better performance)
   - **Format:** MP4 (H.264 codec)
   - **Resolution:** 1080p or 720p
   - **Length:** Keep videos under 2 minutes for web
   - **Compress:** Use [HandBrake](https://handbrake.fr/) or online tools
   - **Always provide a thumbnail** for better user experience

4. **Use descriptive filenames**
   - ✅ Good: `wedding-decoration-elegant-hall.jpg`
   - ✅ Good: `birthday-party-setup-2024.mp4`
   - ❌ Bad: `IMG_1234.jpg`, `VID_5678.mp4`

5. **Maintain aspect ratios**
   - Don't stretch or squash images/videos
   - Use `object-fit: cover` for best results

---

## 🚀 Quick Start Example

### Add a single image to test:

1. **Create the images folder:**
   ```
   public/images/
   ```

2. **Copy your best decoration photo there:**
   ```
   public/images/my-decoration.jpg
   ```

3. **Update Hero section** in `src/components/Hero/Hero.jsx`:
   ```jsx
   // Find this line (around line 28):
   <div className={styles.imagePlaceholder}>
   
   // Replace the entire div with:
   <img 
     src="/images/my-decoration.jpg" 
     alt="Event decoration"
     style={{ 
       width: '100%', 
       height: '100%', 
       objectFit: 'cover',
       borderRadius: '0'
     }}
   />
   ```

4. **Save and check your browser!** 🎉

---

## 📋 Checklist

- [ ] Created `public/images/` folder
- [ ] Created `public/videos/` folder
- [ ] Created `public/images/carousel/` subfolder
- [ ] Created `public/images/gallery/` subfolder
- [ ] Added 5 carousel images (1000x600px each)
- [ ] Added hero image (800x600px)
- [ ] Added about photo (600x600px)
- [ ] Added gallery content (mix of photos and videos)
  - [ ] Wedding decoration photos/videos
  - [ ] Birthday party photos/videos
  - [ ] Corporate event photos/videos
  - [ ] Baby shower photos/videos
  - [ ] Video thumbnails for all videos
- [ ] Added contact image (600x500px)
- [ ] Optimized all images (under 500KB each)
- [ ] Optimized all videos (under 10MB each, or using YouTube/Vimeo)
- [ ] Tested carousel auto-play and navigation
- [ ] Tested video playback in gallery
- [ ] Tested photo/video filter tabs
- [ ] Tested website to verify all media loads

---

## 🎯 Pro Tips

1. **Mix photos and videos** in the gallery for variety and engagement
2. **Use high-quality content** - they're your portfolio!
3. **Show variety** - different styles, colors, themes
4. **Include close-ups and wide shots** for context
5. **Before/after transformations** work great too!
6. **Keep videos short** - 30-60 seconds is ideal for web
7. **Add music to videos** - Makes them more engaging
8. **Use video thumbnails** - Always provide an attractive poster image
9. **Consider YouTube embedding** - Better for longer videos and reduces hosting costs
10. **Test on mobile** - Ensure videos play smoothly on all devices

---

## ❓ Need Help?

If images aren't showing:
1. Check the file path: `/images/filename.jpg`
2. Ensure images are in `public/images/` folder
3. Check browser console for errors (F12)
4. Verify image filenames match exactly (case-sensitive!)

---

**Happy decorating! 🎉✨**
