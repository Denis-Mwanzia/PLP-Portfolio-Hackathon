# 🚀 Denis Mwanzia - Portfolio Website

A modern, responsive portfolio website built with React, showcasing my skills, projects, and experience as a Full-Stack Developer and IT Specialist.

## 🌟 Live Demo

- **Production URL**: <https://denismwanzia.netlify.app/>
- **Latest Deploy Preview**: <https://denismwanzia.netlify.app/>

## ✨ Feature Highlights

### 🎨 Modern, Animated Interface

- **Responsive layout** that adapts seamlessly to mobile, tablet, and desktop viewports
- **Hero experience** with animated background layers, spotlight effect, and refined copy
- **Animated tech marquee** to showcase the primary stack in motion
- **Capabilities section** that introduces competency pillars with staggered animations
- **Scroll progress indicator** and section dividers to guide reading flow

### 🌙 Theming & UX

- **Light/Dark mode** support with theme persistence via local storage
- **Mobile theme toggle** surfaced inside the hamburger drawer
- **Accessible navigation** with focus management, keyboard traps, and skip-friendly interactions
- **Optimized project detail modals** with keyboard/ESC handling, background scroll lock, and improved contrast

### 🗂 Resume & Credentials

- Interactive **resume tabs** (Education, Certifications, Skills, Experience)
- Embedded **certificate viewer** with download actions for PLP MERN and ICT Authority graduate awards
- Dedicated **Capabilities** grid summarising core strengths across delivery, backend, and frontend

### 🛠 Technical Features

- **React 18** with functional components and hooks
- **Vite** tooling for instant dev server, HMR, and optimized production builds
- **Styled Components** for scoped styling and theme-aware variants
- **Framer Motion** for animation choreography
- **React Helmet Async** for SEO-friendly metadata and structured data
- **Custom hooks** for scroll position, intersection observers, and local storage helpers
- **Lazy image loading** and progressive enhancement for assets

### 📱 Responsive Sections

- **Hero**, **About**, **Capabilities**, **Resume**, **Projects**, **Contact**, and **Footer** – each tuned for various breakpoints
- **Filterable Projects** section with category chips and quick-view drawer
- **Contact form** powered by Formspree with validation states

### ♿ Accessibility

- ARIA labels on interactive controls
- Focus trapping within dialogs
- Keyboard navigable menus and overlays
- Respect for reduced-motion user preferences

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm (ships with Node) or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Denis-Mwanzia/PLP-Portfolio-Hackathon.git
   cd PLP-Portfolio-Hackathon
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

   The Vite dev server defaults to <http://localhost:5173>. Pass `--host` if you need LAN access:

   ```bash
   npm run dev -- --host
   ```

4. **Build for production**

   ```bash
   npm run build
   # or
   yarn build
   ```

   Compiled assets land in the `dist/` directory. Preview the production build locally with:

   ```bash
   npm run preview
   ```

### Optional: Deploy with Netlify CLI

```bash
netlify deploy --dir=dist      # staging deploy
netlify deploy --dir=dist --prod
```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header.js          # Sticky navigation + theme toggle
│   ├── Hero.js            # Animated hero section
│   ├── About.js           # Bio + tech marquee
│   ├── Capabilities.js    # Capability cards
│   ├── Resume.js          # Resume tabs + certificate viewer
│   ├── Projects.js        # Project grid & modal
│   ├── Contact.js         # Formspree-powered contact form
│   ├── Footer.js          # Footer links
│   ├── SectionDivider.js  # SVG wave divider
│   ├── ScrollProgress.js  # Top progress bar
│   └── ScrollToTop.js     # Scroll-to-top button
├── context/            # React context
│   └── ThemeContext.js    # Theme provider + persistence
├── hooks/              # Custom React hooks
│   ├── useScrollPosition.js
│   ├── useIntersectionObserver.js
│   └── useLocalStorage.js
├── utils/              # Utility functions
│   ├── animations.js      # Animation variants
│   └── constants.js       # App constants and data
├── App.js                 # Root layout + section ordering
├── main.jsx               # Application entry point
└── index.css              # Global styles & CSS variables
```

## 🎨 Customization

### Personal Information

Update your personal information in `src/utils/constants.js`:

```javascript
export const PERSONAL_INFO = {
  name: 'Your Name',
  title: 'Your Title',
  email: 'your.email@example.com',
  phone: '+1234567890',
  location: 'Your Location',
  // ... other details
};
```

### Projects

Add your projects in the `PROJECTS_DATA` array in `src/utils/constants.js`:

```javascript
export const PROJECTS_DATA = [
  {
    id: 'project1',
    title: 'Your Project Title',
    category: 'frontend', // or 'backend', 'fullstack', 'ai'
    description: 'Project description...',
    image: '/assets/project-image.jpg',
    github: 'https://github.com/yourusername/project',
    live: 'https://your-project-demo.com',
    date: 'January 2025',
    technologies: ['React', 'Node.js', 'MongoDB']
  }
];
```

### Styling

Global styles and theme tokens live in `src/index.css`. Update CSS custom properties to adjust the palette:

```css
:root {
  --primary-blue: #3a7bd5;
  --secondary-blue: #00d2ff;
  /* ... other color variables */
}
```

## 🛠️ Technologies Used

### Frontend

- **React 18** - UI library
- **Vite** - Dev server & bundler
- **Styled Components** - CSS-in-JS styling
- **Framer Motion** - Animation library
- **React Icons** - Icon library
- **React Helmet Async** - SEO management
- **Tailwind (optional)** - Utility classes (configured, opt-in)

### Development Tools

- **ESLint & Prettier** - Consistent formatting and linting
- **Netlify CLI** - Continuous deployment and preview
- **GitHub Actions (optional)** - CI/CD hooks

### Deployment

- **Netlify** - Hosting platform
- **GitHub** - Version control

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🚀 Performance Features

- **Lazy Loading**: Images load as they come into view
- **Code Splitting**: Automatic via Vite & React
- **Optimized Images**: Compressed and optimized images
- **Minified CSS/JS**: Production builds are minified
- **Caching**: Proper cache headers for static assets

## 📈 SEO Features

- **Meta Tags**: Comprehensive meta tags for social sharing
- **Open Graph**: Facebook and Twitter card support
- **Structured Data**: JSON-LD structured data
- **Sitemap**: XML sitemap for search engines
- **Robots.txt**: Search engine crawling instructions

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- **Email**: <denismunyoki5657@gmail.com>
- **Phone**: +254110433220
- **LinkedIn**: [Denis Mwanzia](https://www.linkedin.com/in/denis-mwanzia)
- **GitHub**: [Denis-Mwanzia](https://github.com/Denis-Mwanzia)

## 🙏 Acknowledgments

- Design inspiration from modern portfolio websites
- Icons from React Icons
- Animations powered by Framer Motion
- Hosted on Netlify

---

⭐ **Star this repository if you found it helpful!**
