import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';

const ProjectsSection = styled.section`
  position: relative;
  padding: clamp(3rem, 8vw, 4rem) 0;
  background-color: var(--off-white);
`;

const Container = styled.div`
  max-width: var(--container-xl);
  margin: 0 auto;
  padding: 0 clamp(1rem, 5vw, 2rem);
`;

const SectionTitle = styled.div`
  text-align: center;
  margin-bottom: var(--space-2xl);
`;

const Title = styled.h3`
  font-size: clamp(2rem, 6vw, 2.5rem);
  font-weight: 800;
  margin-bottom: var(--space-md);
  text-transform: uppercase;
  background: linear-gradient(
    90deg,
    var(--primary-blue) 0%,
    var(--secondary-blue) 100%
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  letter-spacing: 1px;
`;

const SubTitle = styled.p`
  font-size: clamp(1rem, 2.5vw, 1.18rem);
  color: var(--dark-gray);
  margin-bottom: var(--space-lg);
  font-weight: 500;
`;

const ProjectTabs = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: clamp(0.75rem, 2vw, 1rem) clamp(1rem, 3vw, 2rem);
  margin-bottom: clamp(2rem, 6vw, 3.5rem);

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    gap: var(--space-sm);
  }
`;

const TabButton = styled.button`
  font-family: var(--font-main);
  font-size: clamp(0.9rem, 2.2vw, 1.18rem);
  font-weight: 500;
  color: var(--light-blue);
  padding: clamp(0.6rem, 2vw, 0.75rem) clamp(1rem, 3vw, 1.5rem);
  border-radius: var(--radius-full);
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  background: var(--white);
  outline: none;
  box-shadow: 0 2px 10px var(--shadow-light);

  &:hover {
    color: var(--hover-blue);
    transform: translateY(-2px);
    box-shadow: 0 4px 15px var(--shadow-medium);
  }

  &.active {
    color: var(--white);
    background: var(--primary-blue);
    border-color: var(--primary-blue);
    box-shadow: 0 4px 15px rgba(58, 123, 213, 0.3);
  }

  @media (max-width: 480px) {
    width: 100%;
    max-width: 200px;
    text-align: center;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: clamp(1.5rem, 4vw, 2rem);
  position: relative;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(motion.div)`
  background: var(--white);
  border-radius: var(--radius-xl);
  overflow: hidden;
  box-shadow: 0 5px 20px var(--shadow-light);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  height: 100%;
  display: flex;
  flex-direction: column;
  cursor: pointer;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 35px var(--shadow-dark);
  }
`;

const CardImage = styled.div`
  height: clamp(180px, 25vw, 220px);
  overflow: hidden;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;

  ${ProjectCard}:hover & {
    transform: scale(1.08);
  }
`;

const CardInfo = styled.div`
  padding: clamp(1rem, 3vw, 1.5rem);
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const CardCategory = styled.span`
  color: var(--medium-gray);
  font-size: clamp(0.8rem, 2vw, 0.9rem);
  display: block;
  margin-bottom: var(--space-sm);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-weight: 500;
`;

const CardTitle = styled.h4`
  color: var(--dark-blue);
  font-size: clamp(1.1rem, 3vw, 1.3rem);
  margin-bottom: var(--space-md);
  font-weight: 600;
  line-height: 1.4;
  flex: 1;
`;

const CardButton = styled.div`
  position: absolute;
  right: clamp(1rem, 3vw, 1.5rem);
  bottom: clamp(1rem, 3vw, 1.5rem);
  font-size: clamp(1.2rem, 3vw, 1.5rem);
  color: var(--primary-blue);
  cursor: pointer;
  transition: all 0.3s ease;
  background: var(--light-gray);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: var(--white);
    background: var(--primary-blue);
    transform: scale(1.1);
  }
`;

const ProjectPopup = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: clamp(1rem, 3vw, 1.5rem);
  box-sizing: border-box;
`;

const PopupOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(5px);
`;

const PopupContainer = styled(motion.div)`
  position: relative;
  background-color: var(--white);
  border-radius: var(--radius-2xl);
  max-width: 800px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
  z-index: 1001;
`;

const PopupContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const PopupImageContainer = styled.div`
  width: 100%;
  height: clamp(200px, 40vw, 350px);
  overflow: hidden;
  border-radius: var(--radius-xl) var(--radius-xl) 0 0;
`;

const PopupImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
`;

const PopupDetails = styled.div`
  padding: clamp(1.5rem, 4vw, 2rem);
`;

const PopupTitle = styled.h3`
  font-size: clamp(1.3rem, 4vw, 1.8rem);
  margin-bottom: var(--space-md);
  color: var(--dark-blue);
  font-weight: 700;
  line-height: 1.3;
`;

const PopupDescription = styled.p`
  font-size: clamp(0.95rem, 2.5vw, 1rem);
  line-height: 1.7;
  color: var(--medium-gray);
  margin-bottom: var(--space-lg);
`;

const PopupMeta = styled.div`
  display: flex;
  gap: var(--space-lg);
  margin-bottom: var(--space-lg);
  font-size: clamp(0.8rem, 2vw, 0.9rem);
  color: var(--light-blue);
  flex-wrap: wrap;
`;

const PopupLinks = styled.div`
  display: flex;
  gap: var(--space-md);
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const PopupLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: var(--space-sm);
  padding: clamp(0.6rem, 2vw, 0.75rem) clamp(1rem, 3vw, 1.5rem);
  color: var(--white);
  border-radius: var(--radius-full);
  text-decoration: none;
  font-weight: 500;
  font-size: clamp(0.85rem, 2vw, 1rem);
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px var(--shadow-medium);
  flex: 1;
  min-width: 120px;
  justify-content: center;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px var(--shadow-dark);
  }

  &.github {
    background-color: var(--github-black);

    &:hover {
      background-color: var(--darker-black);
    }
  }

  &.live {
    background-color: var(--success-green);

    &:hover {
      background-color: var(--dark-green);
    }
  }

  @media (max-width: 768px) {
    flex: none;
    width: 100%;
  }
`;

const PopupClose = styled.button`
  position: absolute;
  top: var(--space-lg);
  right: var(--space-lg);
  width: clamp(2rem, 5vw, 2.5rem);
  height: clamp(2rem, 5vw, 2.5rem);
  border-radius: 50%;
  background-color: var(--off-white);
  border: none;
  font-size: clamp(1.2rem, 3vw, 1.5rem);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1002;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px var(--shadow-medium);

  &:hover {
    background-color: var(--primary-blue);
    color: var(--white);
    transform: rotate(90deg);
    box-shadow: 0 3px 12px var(--shadow-dark);
  }
`;

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'frontend', label: 'FrontEnd' },
    { id: 'ai', label: 'AI & Machine Learning' },
    { id: 'fullstack', label: 'Fullstack' },
  ];

  const projects = [
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
    },
    {
      id: 'frontend2',
      title: 'Portfolio Website',
      category: 'frontend',
      description:
        'A modern, responsive portfolio website showcasing creative work with smooth animations, interactive elements, and optimized performance. Built with vanilla HTML, CSS, and JavaScript, demonstrating mastery of fundamental web technologies.',
      image: '/assets/uiUx.jpg',
      github: 'https://github.com/Denis-Mwanzia/PLP-Portfolio-Hackathon.git',
      live: 'https://denismwanzia.netlify.app/',
      date: 'February 2025',
    },
  ];

  const filteredProjects = projects.filter(
    (project) => activeFilter === 'all' || project.category === activeFilter
  );

  const openPopup = (project) => {
    setSelectedProject(project);
  };

  const closePopup = () => {
    setSelectedProject(null);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <ProjectsSection id="projects">
      <Container>
        <SectionTitle>
          <Title>Projects</Title>
          <SubTitle>My creative works</SubTitle>
        </SectionTitle>

        <ProjectTabs>
          {filters.map((filter) => (
            <TabButton
              key={filter.id}
              className={activeFilter === filter.id ? 'active' : ''}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </TabButton>
          ))}
        </ProjectTabs>

        <ProjectsGrid ref={ref}>
          <AnimatePresence>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="projects-container"
              style={{ display: 'contents' }}
            >
              {filteredProjects.map((project, index) => (
                <motion.div key={project.id} variants={itemVariants} layout>
                  <ProjectCard onClick={() => openPopup(project)}>
                    <CardImage>
                      <Image
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                      />
                    </CardImage>
                    <CardInfo>
                      <CardCategory>{project.category}</CardCategory>
                      <CardTitle>{project.title}</CardTitle>
                      <CardButton>→</CardButton>
                    </CardInfo>
                  </ProjectCard>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </ProjectsGrid>

        <AnimatePresence>
          {selectedProject && (
            <ProjectPopup
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <PopupOverlay onClick={closePopup} />
              <PopupContainer
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <PopupClose onClick={closePopup} aria-label="Close popup">
                  <FaTimes />
                </PopupClose>
                <PopupContent>
                  <PopupImageContainer>
                    <PopupImage
                      src={selectedProject.image}
                      alt={`${selectedProject.title} Screenshot`}
                    />
                  </PopupImageContainer>
                  <PopupDetails>
                    <PopupTitle>{selectedProject.title}</PopupTitle>
                    <PopupDescription>
                      {selectedProject.description}
                    </PopupDescription>
                    <PopupMeta>
                      <span>Category: {selectedProject.category}</span>
                      <span>Date: {selectedProject.date}</span>
                    </PopupMeta>
                    <PopupLinks>
                      <PopupLink
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="github"
                      >
                        <FaGithub />
                        View on GitHub
                      </PopupLink>
                      {selectedProject.live && (
                        <PopupLink
                          href={selectedProject.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="live"
                        >
                          <FaExternalLinkAlt />
                          Live Demo
                        </PopupLink>
                      )}
                    </PopupLinks>
                  </PopupDetails>
                </PopupContent>
              </PopupContainer>
            </ProjectPopup>
          )}
        </AnimatePresence>
      </Container>
    </ProjectsSection>
  );
};

export default Projects;
