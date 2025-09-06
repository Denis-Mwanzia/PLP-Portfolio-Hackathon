// Portfolio data and constants
export const PERSONAL_INFO = {
  name: 'Denis Mwanzia',
  title: 'Full-Stack Developer & IT Specialist',
  email: 'denismunyoki5657@gmail.com',
  phone: '+254110433220',
  location: 'Nairobi, Kenya',
  resumeUrl: '/assets/resume.pdf',
  profileImage: '/assets/homeImage.jpg',
  aboutImage: '/assets/about.PNG',
};

export const SOCIAL_LINKS = {
  linkedin: 'https://www.linkedin.com/in/denis-mwanzia',
  github: 'https://github.com/Denis-Mwanzia',
  twitter: '#',
  instagram: '#',
};

export const NAVIGATION_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'resume', label: 'Resume' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export const PROJECT_FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'frontend', label: 'FrontEnd' },
  { id: 'ai', label: 'AI & Machine Learning' },
  { id: 'fullstack', label: 'Fullstack' },
];

export const RESUME_TABS = [
  { id: 'education', label: 'Education', icon: 'FaGraduationCap' },
  { id: 'experience', label: 'Experience', icon: 'FaBriefcase' },
  { id: 'skills', label: 'Personal Skills', icon: 'FaUserCog' },
];

export const EDUCATION_DATA = [
  {
    title: 'Bachelor Of Science in Information Technology',
    subtitle: 'Kabarak University',
    date: '2017-2023',
    icon: 'FaGraduationCap',
  },
  {
    title: 'SQL Training Certificate',
    subtitle: 'Learnomate Technologies Pvt Ltd',
    date: '2024-2024',
    icon: 'FaGraduationCap',
  },
  {
    title:
      'Cybersecurity and Emerging Technologies Awareness Training Certificate',
    subtitle: 'ICT Authority Smart Academy',
    date: '2024-2024',
    icon: 'FaGraduationCap',
  },
  {
    title: 'Software Development',
    subtitle: 'Power Learn Project Academy',
    date: '2025-Present',
    icon: 'FaGraduationCap',
  },
];

export const EXPERIENCE_DATA = [
  {
    title: 'Network Technician',
    subtitle: 'Tabasamu Fiber Networks Limited',
    date: '2023-2023',
    icon: 'FaBriefcase',
  },
  {
    title: 'Freelancer Web Developer & Networking Consultancy',
    subtitle: 'Self-Employed',
    date: '2023-Present',
    icon: 'FaBriefcase',
  },
];

export const SKILLS_DATA = [
  {
    title: 'Front-End Developer',
    icon: 'FaLaptopCode',
    skills: [
      { name: 'HTML', level: 'Advanced' },
      { name: 'CSS', level: 'Advanced' },
      { name: 'Tailwind CSS', level: 'Intermediate' },
      { name: 'JavaScript', level: 'Intermediate' },
      { name: 'React', level: 'Basic' },
      { name: 'Bootstrap', level: 'Intermediate' },
    ],
  },
  {
    title: 'Back-End Developer',
    icon: 'FaServer',
    skills: [
      { name: 'Django', level: 'Intermediate' },
      { name: 'Node.js', level: 'Basic' },
      { name: 'Express.js', level: 'Basic' },
      { name: 'MySQL', level: 'Intermediate' },
      { name: 'MongoDB', level: 'Basic' },
      { name: 'Restful APIs', level: 'Intermediate' },
    ],
  },
  {
    title: 'Networking & IT Specialist',
    icon: 'FaNetworkWired',
    skills: [
      { name: 'Network Installation & Troubleshooting' },
      { name: 'MikroTik Configuration (Routing, Firewall, VPN)' },
      { name: 'FTTH Installation & Splicing' },
      { name: 'Linux & Windows Server Administration' },
    ],
  },
  {
    title: 'Tools & Technologies',
    icon: 'FaTools',
    skills: [
      { name: 'Git & GitHub' },
      { name: 'Docker & Virtualization' },
      { name: 'Bash & PowerShell Scripting' },
      { name: 'Cloud Computing (AWS)' },
    ],
  },
];

export const PROJECTS_DATA = [
  {
    id: 'ai1',
    title: 'Sentiment Analysis Of Customer Reviews',
    category: 'ai',
    description:
      'This was part of my University Final Year Project where I trained AI models using both Naive Bayes and Support Vector Machine algorithms. The models achieved impressive accuracy rates of 89% and 94% respectively, demonstrating effective sentiment classification capabilities.',
    image: '/assets/aiSentiment.jpg',
    github:
      'https://github.com/Denis-Mwanzia/Mwananchi_Estore/tree/main/Sentiment_analysis_and_Recomender_system',
    live: null,
    date: 'October 2023',
    technologies: ['Python', 'Machine Learning', 'Naive Bayes', 'SVM', 'NLTK'],
  },
  {
    id: 'fullstack2',
    title: 'Mwananchi E-store',
    category: 'fullstack',
    description:
      'A comprehensive e-commerce platform developed as part of my Final Year Project. This system was designed to integrate seamlessly with the sentiment analysis model, providing a complete solution for online retail with intelligent customer feedback processing.',
    image: '/assets/ecommerce.jpg',
    github: 'https://github.com/Denis-Mwanzia/Mwananchi_Estore.git',
    live: null,
    date: 'October 2023',
    technologies: ['Django', 'Python', 'HTML', 'CSS', 'JavaScript', 'MySQL'],
  },
  {
    id: 'fullstack1',
    title: 'Tuko Maji',
    category: 'fullstack',
    description:
      'Tuko Maji is a community-driven platform that empowers citizens to report water-related issues, enables verifiers to validate them, and equips technicians with tools to resolve them.',
    image: '/assets/tukomaji.png',
    github:
      'https://github.com/PLP-MERN-Stack-Development/week-8-capstone_-Denis-Mwanzia.git',
    live: 'https://tukomaji-app.onrender.com/',
    date: 'July 2023',
  },
  {
    id: 'frontend2',
    title: 'Portfolio Website',
    category: 'frontend',
    description:
      'A modern, responsive portfolio website showcasing creative work with smooth animations, interactive elements, and optimized performance. Built with vanilla HTML, CSS, and JavaScript, demonstrating mastery of fundamental web technologies.',
    image: '/assets/uiUx.jpg',
    github: 'https://github.com/Denis-Mwanzia/PLP-Portfolio-Hackathon.git',
    live: 'https://denis-mwanzia-portfolio.netlify.app/',
    date: 'January 2025',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
  },
];

export const ABOUT_SECTIONS = {
  whoIAm: {
    title: 'Who I Am',
    content:
      "I am a dedicated Full-Stack Web Developer & IT Specialist based in Kenya, with a Bachelor's degree in Information Technology from Kabarak University. My journey into web development began with a passion for solving real-world challenges through technology.",
  },
  whatIDo: {
    title: 'What I Do',
    content:
      'I started my career building dynamic full-stack web applications with Django, where I mastered HTML, CSS, Tailwind, JavaScript, and jQuery to craft user-centric experiences. Now, I am specializing in the MERN stack through a software engineering scholarship at Power Learn Project Academy. I focus on scalable web architectures, modern frameworks, and industry best practices.',
  },
};
