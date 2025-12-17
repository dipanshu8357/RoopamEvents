# Event Decorator Portfolio Website

A modern, responsive portfolio website built with React.js to showcase event decoration services, photos, and videos.

## 🎨 Features

- **Hero Section**: Eye-catching landing page with business introduction and key statistics
- **About Section**: Professional bio and business approach
- **Services Section**: Showcase of different event decoration services offered
- **Portfolio Gallery**: 
  - **Auto-playing Carousel** - Showcase your best 5 decoration photos in a smooth carousel
  - **Video Support** - Add decoration videos with play controls and thumbnails
  - **Photo Gallery** - Beautiful image grid for your decoration photos
  - **Smart Filters** - Toggle between All, Videos, and Photos
- **Contact Section**: Modern contact display with image placeholder
- **Responsive Design**: Mobile-first design that works on all devices
- **Smooth Animations**: Modern UI with smooth transitions and animations
- **Dark Theme**: Professional dark background with gold accents

## 🚀 Tech Stack

- **React 18+** - UI Library
- **Vite** - Build tool and development server
- **CSS Modules** - Scoped and modular styling
- **Modern JavaScript (ES6+)**

## 📦 Installation

1. Clone the repository or navigate to the project directory:
```bash
cd TestPortfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 📁 Project Structure

```
TestPortfolio/
├── src/
│   ├── components/
│   │   ├── Navbar/
│   │   ├── Hero/
│   │   ├── About/
│   │   ├── Services/
│   │   ├── Gallery/
│   │   ├── Contact/
│   │   └── Footer/
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

## 🎯 Customization Guide

### Replace Placeholder Content

1. **Images/Videos**: Replace placeholder items in the Gallery component with your actual decoration photos and videos
2. **Contact Information**: Update phone, email, and location in the Contact component
3. **Business Name**: Change "Event Decorator" to your business name throughout the site
4. **Social Media Links**: Add your social media URLs in the Footer component
5. **About Content**: Customize the About section with your personal story and experience
6. **Stats**: Update the statistics in the Hero section with your actual numbers

### Adding Images

To add images to your gallery:

1. Create a `public/images` folder
2. Add your images to this folder
3. Update the `galleryItems` array in `Gallery.jsx` with image paths:

```javascript
const galleryItems = [
  { id: 1, type: 'image', category: 'wedding', title: 'Wedding 1', src: '/images/wedding1.jpg' },
  // Add more items...
]
```

4. Update the JSX to use the image source:

```javascript
<img src={item.src} alt={item.title} />
```

## 🎨 Color Customization

Edit the CSS variables in `src/index.css`:

```css
:root {
  --primary-color: #2c3e50;    /* Main brand color */
  --secondary-color: #e74c3c;  /* Accent color */
  --accent-color: #f39c12;     /* Highlight color */
  /* ... more colors */
}
```

## 📱 Responsive Breakpoints

- Desktop: 1200px and above
- Tablet: 768px - 1199px
- Mobile: Below 768px

## 🌟 Future Enhancements

- Add lightbox/modal for image viewing
- Implement video player for decoration videos
- Add testimonials section
- Create blog section for decoration tips
- Add animations library (e.g., Framer Motion)
- Integrate with a CMS for easier content management
- Add form submission backend integration

## 📄 License

This project is open source and available for personal and commercial use.

## 🤝 Support

For questions or support, please contact through the website's contact form.

---

**Note**: Remember to replace all placeholder content with your actual business information, images, and videos before deploying to production.
