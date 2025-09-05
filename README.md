# 🚀 Denis Mwanzia - Portfolio Website

A modern, responsive portfolio website built with React, showcasing my skills, projects, and experience as a Full-Stack Developer and IT Specialist.

## 🌟 Live Demo

🔗 **[View Live Portfolio](https://denismwanzia.netlify.app/)**

- **Production URL**: <https://denismwanzia.netlify.app/>

## ✨ Features

### 🎨 Modern Design

- **Responsive Design**: Optimized for all devices (desktop, tablet, mobile)
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Interactive Elements**: Hover effects, transitions, and micro-interactions
- **Clean UI/UX**: Modern design with excellent user experience

### 🛠️ Technical Features

- **React 18**: Latest React features with hooks and functional components
- **Styled Components**: CSS-in-JS for component-scoped styling
- **Framer Motion**: Advanced animations and transitions
- **React Helmet**: SEO optimization and meta tag management
- **Intersection Observer**: Scroll-triggered animations
- **Local Storage**: Theme persistence and user preferences

### 📱 Responsive Sections

- **Hero Section**: Eye-catching introduction with animated profile image
- **About Section**: Personal story and professional background
- **Resume Section**: Interactive tabs for Education, Experience, and Skills
- **Projects Section**: Filterable project showcase with detailed modals
- **Contact Section**: Working contact form with validation
- **Footer**: Social links and quick navigation

### 🎯 Enhanced Functionality

- **Mobile Navigation**: Hamburger menu with smooth animations
- **Scroll-to-Top**: Floating button for easy navigation
- **Project Filtering**: Filter projects by category
- **Form Validation**: Real-time form validation with error handling
- **Loading States**: Smooth loading animations
- **Accessibility**: ARIA labels, keyboard navigation, and screen reader support

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

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
   npm start
   # or
   yarn start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the portfolio.

### Build for Production

```bash
npm run build
# or
yarn build
```

This creates an optimized production build in the `build` folder.

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header.js       # Navigation header
│   ├── Hero.js         # Hero section
│   ├── About.js        # About section
│   ├── Resume.js       # Resume/Experience section
│   ├── Projects.js     # Projects showcase
│   ├── Contact.js      # Contact form
│   ├── Footer.js       # Footer
│   └── ScrollToTop.js  # Scroll to top button
├── context/            # React context
│   └── ThemeContext.js # Theme management
├── hooks/              # Custom React hooks
│   ├── useScrollPosition.js
│   └── useLocalStorage.js
├── utils/              # Utility functions
│   ├── animations.js   # Animation variants
│   └── constants.js    # App constants and data
├── App.js              # Main App component
├── index.js            # App entry point
└── index.css           # Global styles
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

The portfolio uses CSS custom properties for easy theming. Update colors in `src/index.css`:

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
- **Styled Components** - CSS-in-JS styling
- **Framer Motion** - Animation library
- **React Icons** - Icon library
- **React Helmet Async** - SEO management

### Development Tools

- **Create React App** - Development environment
- **ESLint** - Code linting
- **Prettier** - Code formatting

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
- **Code Splitting**: Automatic code splitting with React
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

**Denis Mwanzia**

- Email: <denismunyoki5657@gmail.com>
- Phone: +254110433220
- LinkedIn: [Denis Mwanzia](https://www.linkedin.com/in/denis-mwanzia)
- GitHub: [Denis-Mwanzia](https://github.com/Denis-Mwanzia)

## 🙏 Acknowledgments

- Design inspiration from modern portfolio websites
- Icons from React Icons
- Animations powered by Framer Motion
- Hosted on Netlify

---

⭐ **Star this repository if you found it helpful!**
