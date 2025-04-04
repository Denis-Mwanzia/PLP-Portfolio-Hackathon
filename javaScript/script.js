// Mobile Navigation Toggle
const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
const mobileNav = document.getElementById('mobile-nav');

mobileNavToggle.addEventListener('click', () => {
  const isExpanded = mobileNavToggle.getAttribute('aria-expanded') === 'true';
  mobileNavToggle.setAttribute('aria-expanded', !isExpanded);
  mobileNav.setAttribute('aria-hidden', isExpanded);
  mobileNavToggle.classList.toggle('active');
  mobileNav.classList.toggle('active');
});

// Close mobile nav when clicking on a link
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
mobileNavLinks.forEach((link) => {
  link.addEventListener('click', () => {
    mobileNavToggle.setAttribute('aria-expanded', 'false');
    mobileNav.setAttribute('aria-hidden', 'true');
    mobileNavToggle.classList.remove('active');
    mobileNav.classList.remove('active');
  });
});

// Active link highlighting
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop - 300) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// About section Scroll effect
document.addEventListener('DOMContentLoaded', function () {
  const reveals = document.querySelectorAll('.reveal');

  function revealElements() {
    reveals.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (elementTop < windowHeight - 50) {
        element.classList.add('visible');
      }
    });
  }

  window.addEventListener('scroll', revealElements);
  revealElements(); // Initial check in case elements are already in view
});

// RESUME SECTION
const resumePortfolioTabBtns = document.querySelectorAll('.tab-btn'); // Selecting the tab buttons
const resumeTabContents = document.querySelectorAll('.resume-tab-content'); // Selecting the tab contents

// Function to handle tab switching
var resumeTabNav = function (resumeTabClick) {
  // Hide all tab content and remove 'active' class
  resumeTabContents.forEach((resumeTabContent) => {
    resumeTabContent.style.display = 'none'; // Hide all tabs
    resumeTabContent.classList.remove('active'); // Remove active class
  });

  // Remove 'active' class from all buttons
  resumePortfolioTabBtns.forEach((resumePortfolioTabBtn) => {
    resumePortfolioTabBtn.classList.remove('active');
  });

  // Show the selected tab content and mark it as active
  resumeTabContents[resumeTabClick].style.display = 'flex';

  setTimeout(() => {
    resumeTabContents[resumeTabClick].classList.add('active');
  }, 100);
  resumeTabContents[resumeTabClick].classList.add('active');
  resumePortfolioTabBtns[resumeTabClick].classList.add('active');
};

// Attach event listeners to all tab buttons
resumePortfolioTabBtns.forEach((resumePortfolioTabBtn, i) => {
  resumePortfolioTabBtn.addEventListener('click', (event) => {
    event.preventDefault(); // 🚀 Prevents page refresh
    resumeTabNav(i);
  });
});

// Set the first tab as default active on page load
if (resumePortfolioTabBtns.length > 0) {
  resumeTabNav(0);
}
// PROJECT FILTERING AND POPUP SYSTEM
document.addEventListener('DOMContentLoaded', () => {
  // Tab filtering functionality
  const tabButtons = document.querySelectorAll('#projects .tab-btn');
  const projectCards = document.querySelectorAll('#projects .card-with-model');
  let activeFilter = 'all';
  let isAnimating = false;

  // Debounce function
  const debounce = (func, delay) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), delay);
    };
  };

  // Filter projects with animation
  const filterProjects = (filterValue) => {
    if (isAnimating || activeFilter === filterValue) return;

    isAnimating = true;
    activeFilter = filterValue;
    let visibleCount = 0;

    projectCards.forEach((card) => {
      const matchesFilter =
        filterValue === 'all' || card.dataset.category === filterValue;

      if (matchesFilter) {
        visibleCount++;
        card.classList.remove('hidden');
        card.style.opacity = '0';
        card.style.transform = 'scale(0.95)';

        setTimeout(() => {
          card.style.opacity = '1';
          card.style.transform = 'scale(1)';
          card.style.visibility = 'visible';
        }, 20);
      } else {
        card.style.opacity = '0';
        card.style.transform = 'scale(0.95)';

        setTimeout(() => {
          card.classList.add('hidden');
        }, 400);
      }
    });

    setTimeout(() => {
      isAnimating = false;
    }, Math.min(visibleCount * 50, 400));
  };

  // Handle tab click
  const handleTabClick = (button, filterValue) => {
    tabButtons.forEach((btn) => {
      btn.classList.remove('active');
      btn.setAttribute('aria-selected', 'false');
    });

    button.classList.add('active');
    button.setAttribute('aria-selected', 'true');
    filterProjects(filterValue);
  };

  // Add click event to each tab
  tabButtons.forEach((button) => {
    button.addEventListener(
      'click',
      debounce((e) => {
        e.preventDefault();
        const filterValue = button.dataset.filter || 'all';
        handleTabClick(button, filterValue);
      }, 200)
    );
  });

  // Initialize tabs
  const activeTab = document.querySelector('#projects .tab-btn.active');
  if (!activeTab && tabButtons.length > 0) {
    tabButtons[0].classList.add('active');
    tabButtons[0].setAttribute('aria-selected', 'true');
    filterProjects('all');
  }

  // Project popup functionality - ARROW CLICK SPECIFIC
  const popup = document.querySelector('.project-popup');
  const popupClose = document.querySelector('.popup-close');
  const popupOverlay = document.querySelector('.popup-overlay');
  const popupImage = document.querySelector('.popup-image');
  const popupTitle = document.querySelector('.popup-title');
  const popupDescription = document.querySelector('.popup-description');
  const popupCategory = document.querySelector('.popup-category');
  const popupDate = document.querySelector('.popup-date');
  const githubLink = document.querySelector('.github-link');
  const liveLink = document.querySelector('.live-link');
  const cardButtons = document.querySelectorAll('.card-btn');

  // Project data - replace with your actual project data
  const projectsData = {
    ai1: {
      title: 'Sentiment Analysis Of Customer Reviews',
      description:
        ' This was part of My University Final Year Project. Where I had to train AI Model using both Naive Bayes and Support Vector Machine algorithms. The models performed pretty good with accuracy of 89% and 94% respectively.',
      category: 'AI and Machine Learning',
      date: 'October 2023',
      image: '../assets/aiSentiment.jpg',
      github:
        'https://github.com/Denis-Mwanzia/Mwananchi_Estore/tree/main/Sentiment_analysis_and_Recomender_system',
      live: '#',
    },
    fullstack1: {
      title: 'Mwananchi E-store',
      category: 'Fullstack App',
      description:
        'This was also part of Final Year Project Where i had to Develop E-commerce system so as to integrate it with sentiment analysis model i was working on.',
      date: 'October 2023',
      image: '../assets/ecommerce.jpg',
      github: 'https://github.com/Denis-Mwanzia/Mwananchi_Estore.git',
      live: '#',
    },
    // fullstack1: {
    //   title: 'Task Management App',
    //   description:
    //     'A fullstack application for team task management with real-time updates and collaboration features.',
    //   category: 'Fullstack',
    //   date: 'February 2023',
    //   image: '../assets/uiUx.jpg',
    //   github: 'https://github.com/yourusername/task-manager',
    //   live: 'https://yourwebsite.com/task-demo',
    // },
    frontend2: {
      title: 'Portfolio Website',
      description:
        'A responsive portfolio website showcasing creative work with smooth animations and interactions.',
      category: 'Frontend',
      date: 'April 2025',
      image: '../assets/uiUx.jpg',
      github: 'https://github.com/Denis-Mwanzia/PLP-Portfolio-Hackathon.git',
      live: '#',
    },
  };

  // Add click event to ARROW BUTTONS only
  cardButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      e.stopPropagation(); // Prevent event bubbling to card
      const projectCard = button.closest('.card-with-model');
      const projectId = projectCard.dataset.project;
      const projectData = projectsData[projectId];

      if (projectData) {
        // Populate popup with project data
        popupImage.src = projectData.image;
        popupImage.alt = `${projectData.title} Screenshot`;
        popupTitle.textContent = projectData.title;
        popupDescription.textContent = projectData.description;
        popupCategory.textContent = `Category: ${projectData.category}`;
        popupDate.textContent = `Date: ${projectData.date}`;
        githubLink.href = projectData.github;

        // Show/hide live demo link based on availability
        if (projectData.live) {
          liveLink.href = projectData.live;
          liveLink.style.display = 'flex';
        } else {
          liveLink.style.display = 'none';
        }

        // Show popup and disable body scroll
        popup.style.display = 'flex';
        document.body.style.overflow = 'hidden';
      }
    });
  });

  // Close popup functions
  function closePopup() {
    popup.style.display = 'none';
    document.body.style.overflow = 'auto';
  }

  popupClose.addEventListener('click', closePopup);
  popupOverlay.addEventListener('click', closePopup);

  // Close popup with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && popup.style.display === 'flex') {
      closePopup();
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  // Update copyright year
  document.getElementById('year').textContent = new Date().getFullYear();

  // Form submission handling (example)
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      // Add your form submission logic here
      alert('Message sent successfully!');
      this.reset();
    });
  }
});
