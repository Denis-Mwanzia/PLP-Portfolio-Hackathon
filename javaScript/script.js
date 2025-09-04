// ================================================
// PORTFOLIO WEBSITE JAVASCRIPT - ENHANCED FUNCTIONALITY
// ================================================

// Utility Functions
const debounce = (func, delay) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), delay);
  };
};

const throttle = (func, delay) => {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, delay);
    }
  };
};

// ================================================
// MOBILE NAVIGATION - ENHANCED WITH ACCESSIBILITY
// ================================================

class MobileNavigation {
  constructor() {
    this.toggle = document.querySelector('.mobile-nav-toggle');
    this.nav = document.getElementById('mobile-nav');
    this.links = document.querySelectorAll('.mobile-nav-link');
    this.isOpen = false;
    
    this.init();
  }
  
  init() {
    if (!this.toggle || !this.nav) return;
    
    this.toggle.addEventListener('click', () => this.toggleNav());
    this.links.forEach(link => {
      link.addEventListener('click', () => this.closeNav());
    });
    
    // Close on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen) {
        this.closeNav();
      }
    });
    
    // Close on outside click
    document.addEventListener('click', (e) => {
      if (this.isOpen && !this.nav.contains(e.target) && !this.toggle.contains(e.target)) {
        this.closeNav();
      }
    });
  }
  
  toggleNav() {
    this.isOpen ? this.closeNav() : this.openNav();
  }
  
  openNav() {
    this.isOpen = true;
    this.toggle.setAttribute('aria-expanded', 'true');
    this.nav.setAttribute('aria-hidden', 'false');
    this.toggle.classList.add('active');
    this.nav.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
  
  closeNav() {
    this.isOpen = false;
    this.toggle.setAttribute('aria-expanded', 'false');
    this.nav.setAttribute('aria-hidden', 'true');
    this.toggle.classList.remove('active');
    this.nav.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
}

// ================================================
// NAVIGATION HIGHLIGHTING - IMPROVED PERFORMANCE
// ================================================

class NavigationHighlighter {
  constructor() {
    this.sections = document.querySelectorAll('section[id]');
    this.navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
    this.currentSection = '';
    
    this.init();
  }
  
  init() {
    if (this.sections.length === 0) return;
    
    const handleScroll = throttle(() => {
      this.updateActiveLink();
    }, 100);
    
    window.addEventListener('scroll', handleScroll);
    this.updateActiveLink(); // Initial check
  }
  
  updateActiveLink() {
    let current = '';
    const scrollPosition = window.pageYOffset + 200;
    
    this.sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });
    
    if (current !== this.currentSection) {
      this.currentSection = current;
      this.highlightActiveLink(current);
    }
  }
  
  highlightActiveLink(current) {
    this.navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  }
}

// ================================================
// SCROLL REVEAL ANIMATIONS - INTERSECTION OBSERVER
// ================================================

class ScrollReveal {
  constructor() {
    this.elements = document.querySelectorAll('.reveal');
    this.init();
  }
  
  init() {
    if (!('IntersectionObserver' in window)) {
      // Fallback for older browsers
      this.elements.forEach(el => el.classList.add('visible'));
      return;
    }
    
    const options = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          this.observer.unobserve(entry.target);
        }
      });
    }, options);
    
    this.elements.forEach(el => this.observer.observe(el));
  }
}

// ================================================
// RESUME TABS - ENHANCED WITH KEYBOARD SUPPORT
// ================================================

class ResumeTabs {
  constructor() {
    this.tabButtons = document.querySelectorAll('.resume-tabs .tab-btn');
    this.tabContents = document.querySelectorAll('.resume-tab-content');
    this.currentTab = 0;
    
    this.init();
  }
  
  init() {
    if (this.tabButtons.length === 0) return;
    
    this.tabButtons.forEach((button, index) => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        this.switchTab(index);
      });
      
      // Keyboard navigation
      button.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
          e.preventDefault();
          const direction = e.key === 'ArrowLeft' ? -1 : 1;
          const newIndex = (index + direction + this.tabButtons.length) % this.tabButtons.length;
          this.switchTab(newIndex);
          this.tabButtons[newIndex].focus();
        }
      });
    });
    
    // Set first tab as active
    this.switchTab(0);
  }
  
  switchTab(tabIndex) {
    if (tabIndex === this.currentTab) return;
    
    // Hide all content
    this.tabContents.forEach(content => {
      content.style.display = 'none';
      content.classList.remove('active');
    });
    
    // Remove active from all buttons
    this.tabButtons.forEach(button => {
      button.classList.remove('active');
      button.setAttribute('aria-selected', 'false');
    });
    
    // Show selected content
    if (this.tabContents[tabIndex]) {
      this.tabContents[tabIndex].style.display = 'flex';
      setTimeout(() => {
        this.tabContents[tabIndex].classList.add('active');
      }, 50);
    }
    
    // Activate selected button
    this.tabButtons[tabIndex].classList.add('active');
    this.tabButtons[tabIndex].setAttribute('aria-selected', 'true');
    
    this.currentTab = tabIndex;
  }
}

// ================================================
// PROJECT FILTERING - ENHANCED WITH ANIMATIONS
// ================================================

class ProjectFilter {
  constructor() {
    this.tabButtons = document.querySelectorAll('#projects .tab-btn');
    this.projectCards = document.querySelectorAll('#projects .card-with-model');
    this.activeFilter = 'all';
    this.isAnimating = false;
    
    this.init();
  }
  
  init() {
    if (this.tabButtons.length === 0) return;
    
    this.tabButtons.forEach(button => {
      button.addEventListener('click', debounce((e) => {
        e.preventDefault();
        const filterValue = button.dataset.filter || 'all';
        this.handleFilterChange(button, filterValue);
      }, 200));
    });
    
    // Initialize with first tab active
    const activeTab = document.querySelector('#projects .tab-btn.active');
    if (!activeTab && this.tabButtons.length > 0) {
      this.tabButtons[0].classList.add('active');
      this.tabButtons[0].setAttribute('aria-selected', 'true');
    }
    
    this.filterProjects('all');
  }
  
  handleFilterChange(button, filterValue) {
    if (this.isAnimating || this.activeFilter === filterValue) return;
    
    this.updateActiveTab(button);
    this.filterProjects(filterValue);
  }
  
  updateActiveTab(activeButton) {
    this.tabButtons.forEach(btn => {
      btn.classList.remove('active');
      btn.setAttribute('aria-selected', 'false');
    });
    
    activeButton.classList.add('active');
    activeButton.setAttribute('aria-selected', 'true');
  }
  
  filterProjects(filterValue) {
    if (this.isAnimating) return;
    
    this.isAnimating = true;
    this.activeFilter = filterValue;
    let visibleCount = 0;
    
    this.projectCards.forEach((card, index) => {
      const matchesFilter = filterValue === 'all' || card.dataset.category === filterValue;
      
      if (matchesFilter) {
        visibleCount++;
        this.showCard(card, index * 100);
      } else {
        this.hideCard(card);
      }
    });
    
    setTimeout(() => {
      this.isAnimating = false;
    }, Math.max(visibleCount * 100, 400));
  }
  
  showCard(card, delay) {
    card.classList.remove('hidden');
    card.style.opacity = '0';
    card.style.transform = 'scale(0.9) translateY(20px)';
    card.style.visibility = 'visible';
    
    setTimeout(() => {
      card.style.opacity = '1';
      card.style.transform = 'scale(1) translateY(0)';
    }, delay);
  }
  
  hideCard(card) {
    card.style.opacity = '0';
    card.style.transform = 'scale(0.9) translateY(-20px)';
    
    setTimeout(() => {
      card.classList.add('hidden');
      card.style.visibility = 'hidden';
    }, 300);
  }
}

// ================================================
// PROJECT POPUP - ENHANCED WITH BETTER UX
// ================================================

class ProjectPopup {
  constructor() {
    this.popup = document.querySelector('.project-popup');
    this.popupClose = document.querySelector('.popup-close');
    this.popupOverlay = document.querySelector('.popup-overlay');
    this.cardButtons = document.querySelectorAll('.card-btn');
    
    this.popupElements = {
      image: document.querySelector('.popup-image'),
      title: document.querySelector('.popup-title'),
      description: document.querySelector('.popup-description'),
      category: document.querySelector('.popup-category'),
      date: document.querySelector('.popup-date'),
      githubLink: document.querySelector('.github-link'),
      liveLink: document.querySelector('.live-link')
    };
    
    this.projectsData = {
      ai1: {
        title: 'Sentiment Analysis Of Customer Reviews',
        description: 'This was part of my University Final Year Project where I trained AI models using both Naive Bayes and Support Vector Machine algorithms. The models achieved impressive accuracy rates of 89% and 94% respectively, demonstrating effective sentiment classification capabilities.',
        category: 'AI and Machine Learning',
        date: 'October 2023',
        image: '../assets/aiSentiment.jpg',
        github: 'https://github.com/Denis-Mwanzia/Mwananchi_Estore/tree/main/Sentiment_analysis_and_Recomender_system',
        live: null
      },
      fullstack1: {
        title: 'Mwananchi E-store',
        category: 'Fullstack Application',
        description: 'A comprehensive e-commerce platform developed as part of my Final Year Project. This system was designed to integrate seamlessly with the sentiment analysis model, providing a complete solution for online retail with intelligent customer feedback processing.',
        date: 'October 2023',
        image: '../assets/ecommerce.jpg',
        github: 'https://github.com/Denis-Mwanzia/Mwananchi_Estore.git',
        live: null
      },
      frontend2: {
        title: 'Portfolio Website',
        description: 'A modern, responsive portfolio website showcasing creative work with smooth animations, interactive elements, and optimized performance. Built with vanilla HTML, CSS, and JavaScript, demonstrating mastery of fundamental web technologies.',
        category: 'Frontend Development',
        date: 'January 2025',
        image: '../assets/uiUx.jpg',
        github: 'https://github.com/Denis-Mwanzia/PLP-Portfolio-Hackathon.git',
        live: 'https://denis-mwanzia-portfolio.netlify.app/'
      }
    };
    
    this.init();
  }
  
  init() {
    if (!this.popup) return;
    
    this.cardButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        e.stopPropagation();
        this.openPopup(button);
      });
    });
    
    this.popupClose?.addEventListener('click', () => this.closePopup());
    this.popupOverlay?.addEventListener('click', () => this.closePopup());
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isPopupOpen()) {
        this.closePopup();
      }
    });
  }
  
  openPopup(button) {
    const projectCard = button.closest('.card-with-model');
    const projectId = projectCard?.dataset.project;
    const projectData = this.projectsData[projectId];
    
    if (!projectData) return;
    
    this.populatePopup(projectData);
    this.showPopup();
  }
  
  populatePopup(data) {
    if (this.popupElements.image) {
      this.popupElements.image.src = data.image;
      this.popupElements.image.alt = `${data.title} Screenshot`;
    }
    
    if (this.popupElements.title) {
      this.popupElements.title.textContent = data.title;
    }
    
    if (this.popupElements.description) {
      this.popupElements.description.textContent = data.description;
    }
    
    if (this.popupElements.category) {
      this.popupElements.category.textContent = `Category: ${data.category}`;
    }
    
    if (this.popupElements.date) {
      this.popupElements.date.textContent = `Date: ${data.date}`;
    }
    
    if (this.popupElements.githubLink) {
      this.popupElements.githubLink.href = data.github;
    }
    
    if (this.popupElements.liveLink) {
      if (data.live) {
        this.popupElements.liveLink.href = data.live;
        this.popupElements.liveLink.style.display = 'flex';
      } else {
        this.popupElements.liveLink.style.display = 'none';
      }
    }
  }
  
  showPopup() {
    this.popup.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    
    // Focus management for accessibility
    setTimeout(() => {
      this.popupClose?.focus();
    }, 100);
  }
  
  closePopup() {
    this.popup.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
  
  isPopupOpen() {
    return this.popup.style.display === 'flex';
  }
}

// ================================================
// CONTACT FORM - ENHANCED VALIDATION & UX
// ================================================

class ContactForm {
  constructor() {
    this.form = document.querySelector('.contact-form');
    this.submitBtn = document.querySelector('.submit-btn');
    this.originalBtnText = this.submitBtn?.textContent || 'Send Message';
    
    this.init();
  }
  
  init() {
    if (!this.form) return;
    
    this.form.addEventListener('submit', (e) => this.handleSubmit(e));
    
    // Real-time validation
    const inputs = this.form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
      input.addEventListener('blur', () => this.validateField(input));
      input.addEventListener('input', () => this.clearErrors(input));
    });
  }
  
  async handleSubmit(e) {
    e.preventDefault();
    
    if (!this.validateForm()) return;
    
    this.setLoading(true);
    
    try {
      // Simulate form submission
      await this.simulateSubmission();
      this.showSuccess();
      this.form.reset();
    } catch (error) {
      this.showError('Failed to send message. Please try again.');
    } finally {
      this.setLoading(false);
    }
  }
  
  validateForm() {
    const inputs = this.form.querySelectorAll('input[required], textarea[required]');
    let isValid = true;
    
    inputs.forEach(input => {
      if (!this.validateField(input)) {
        isValid = false;
      }
    });
    
    return isValid;
  }
  
  validateField(field) {
    const value = field.value.trim();
    const type = field.type;
    let isValid = true;
    let message = '';
    
    if (field.hasAttribute('required') && !value) {
      isValid = false;
      message = 'This field is required';
    } else if (type === 'email' && value && !this.isValidEmail(value)) {
      isValid = false;
      message = 'Please enter a valid email address';
    }
    
    this.showFieldError(field, isValid ? '' : message);
    return isValid;
  }
  
  isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  showFieldError(field, message) {
    this.clearErrors(field);
    
    if (message) {
      field.style.borderColor = '#dc3545';
      const errorEl = document.createElement('div');
      errorEl.className = 'field-error';
      errorEl.textContent = message;
      errorEl.style.cssText = `
        color: #dc3545;
        font-size: 0.875rem;
        margin-top: 0.25rem;
        animation: fadeInUp 0.3s ease;
      `;
      field.parentNode.appendChild(errorEl);
    }
  }
  
  clearErrors(field) {
    field.style.borderColor = '';
    const errorEl = field.parentNode.querySelector('.field-error');
    if (errorEl) {
      errorEl.remove();
    }
  }
  
  setLoading(loading) {
    if (!this.submitBtn) return;
    
    this.submitBtn.disabled = loading;
    this.submitBtn.textContent = loading ? 'Sending...' : this.originalBtnText;
    this.submitBtn.style.opacity = loading ? '0.7' : '1';
  }
  
  async simulateSubmission() {
    // Simulate API call delay
    return new Promise(resolve => setTimeout(resolve, 1500));
  }
  
  showSuccess() {
    this.showMessage('Message sent successfully! I\'ll get back to you soon.', 'success');
  }
  
  showError(message) {
    this.showMessage(message, 'error');
  }
  
  showMessage(text, type) {
    const messageEl = document.createElement('div');
    messageEl.className = `form-message ${type}`;
    messageEl.textContent = text;
    messageEl.style.cssText = `
      padding: 1rem;
      border-radius: 0.5rem;
      margin-top: 1rem;
      font-weight: 500;
      animation: fadeInUp 0.3s ease;
      ${type === 'success' 
        ? 'background: #d4edda; color: #155724; border: 1px solid #c3e6cb;'
        : 'background: #f8d7da; color: #721c24; border: 1px solid #f5c6cb;'
      }
    `;
    
    this.form.appendChild(messageEl);
    
    setTimeout(() => {
      messageEl.remove();
    }, 5000);
  }
}

// ================================================
// PERFORMANCE OPTIMIZATIONS
// ================================================

class PerformanceOptimizer {
  constructor() {
    this.init();
  }
  
  init() {
    // Lazy load images
    this.setupLazyLoading();
    
    // Optimize scroll events
    this.optimizeScrollEvents();
    
    // Preload critical resources
    this.preloadCriticalResources();
  }
  
  setupLazyLoading() {
    if ('IntersectionObserver' in window) {
      const images = document.querySelectorAll('img[loading="lazy"]');
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src || img.src;
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
          }
        });
      });
      
      images.forEach(img => imageObserver.observe(img));
    }
  }
  
  optimizeScrollEvents() {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          // Scroll-based animations can be added here
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
  }
  
  preloadCriticalResources() {
    // Preload hero image
    const heroImage = document.querySelector('.profile-image');
    if (heroImage && heroImage.src) {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = heroImage.src;
      document.head.appendChild(link);
    }
  }
}

// ================================================
// ACCESSIBILITY ENHANCEMENTS
// ================================================

class AccessibilityEnhancer {
  constructor() {
    this.init();
  }
  
  init() {
    this.setupKeyboardNavigation();
    this.setupFocusManagement();
    this.setupARIALabels();
  }
  
  setupKeyboardNavigation() {
    // Skip to main content link
    const skipLink = document.createElement('a');
    skipLink.href = '#home';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link';
    skipLink.style.cssText = `
      position: absolute;
      top: -40px;
      left: 6px;
      background: var(--primary-blue);
      color: white;
      padding: 8px;
      text-decoration: none;
      border-radius: 4px;
      z-index: 1000;
      transition: top 0.3s;
    `;
    
    skipLink.addEventListener('focus', () => {
      skipLink.style.top = '6px';
    });
    
    skipLink.addEventListener('blur', () => {
      skipLink.style.top = '-40px';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);
  }
  
  setupFocusManagement() {
    // Ensure focus is visible
    const style = document.createElement('style');
    style.textContent = `
      .focus-visible {
        outline: 2px solid var(--primary-blue);
        outline-offset: 2px;
      }
    `;
    document.head.appendChild(style);
  }
  
  setupARIALabels() {
    // Add ARIA labels where missing
    const buttons = document.querySelectorAll('button:not([aria-label])');
    buttons.forEach(button => {
      if (button.classList.contains('mobile-nav-toggle')) {
        button.setAttribute('aria-label', 'Toggle mobile navigation');
      }
    });
  }
}

// ================================================
// INITIALIZATION - ENHANCED ERROR HANDLING
// ================================================

class PortfolioApp {
  constructor() {
    this.components = [];
    this.init();
  }
  
  init() {
    // Wait for DOM to be fully loaded
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.initializeComponents());
    } else {
      this.initializeComponents();
    }
  }
  
  initializeComponents() {
    try {
      // Initialize all components
      this.components.push(new MobileNavigation());
      this.components.push(new NavigationHighlighter());
      this.components.push(new ScrollReveal());
      this.components.push(new ResumeTabs());
      this.components.push(new ProjectFilter());
      this.components.push(new ProjectPopup());
      this.components.push(new ContactForm());
      this.components.push(new PerformanceOptimizer());
      this.components.push(new AccessibilityEnhancer());
      
      // Update copyright year
      this.updateCopyrightYear();
      
      console.log('Portfolio initialized successfully');
    } catch (error) {
      console.error('Error initializing portfolio:', error);
    }
  }
  
  updateCopyrightYear() {
    const yearElement = document.getElementById('year');
    if (yearElement) {
      yearElement.textContent = new Date().getFullYear();
    }
  }
}

// ================================================
// ADDITIONAL UTILITY FUNCTIONS
// ================================================

// Smooth scroll polyfill for older browsers
function smoothScrollTo(target) {
  const element = document.querySelector(target);
  if (!element) return;
  
  const headerHeight = document.querySelector('#main-header')?.offsetHeight || 0;
  const targetPosition = element.offsetTop - headerHeight - 20;
  
  if ('scrollBehavior' in document.documentElement.style) {
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  } else {
    // Fallback for older browsers
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 800;
    let start = null;
    
    function animation(currentTime) {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      const run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }
    
    function ease(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    }
    
    requestAnimationFrame(animation);
  }
}

// Enhanced link handling
document.addEventListener('click', (e) => {
  const link = e.target.closest('a[href^="#"]');
  if (link) {
    e.preventDefault();
    smoothScrollTo(link.getAttribute('href'));
  }
});

// Initialize the application
const portfolioApp = new PortfolioApp();

// Export for potential module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    PortfolioApp,
    MobileNavigation,
    NavigationHighlighter,
    ScrollReveal,
    ResumeTabs,
    ProjectFilter,
    ProjectPopup,
    ContactForm
  };
}