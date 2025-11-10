import React, { useState, useMemo, useCallback, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';
import LazyImageComponent from './LazyImage';
import ParallaxShapes from './ParallaxShapes';
import { PROJECTS_DATA, PROJECT_FILTERS } from '../utils/constants';

const ProjectsSection = styled.section`
  position: relative;
  padding: clamp(3rem, 8vw, 4rem) 0;
  background: var(--section-surface);
  transition: background 0.6s ease;
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
  color: var(--text-secondary);
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

const TabButton = styled(motion.button)`
  font-family: var(--font-main);
  font-size: clamp(0.9rem, 2.2vw, 1.18rem);
  font-weight: 500;
  color: var(--text-secondary);
  padding: clamp(0.6rem, 2vw, 0.75rem) clamp(1rem, 3vw, 1.5rem);
  border-radius: var(--radius-full);
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  background: var(--surface-card);
  outline: none;
  box-shadow: 0 2px 10px var(--shadow-light);

  &:hover {
    color: var(--accent-primary);
    transform: translateY(-2px);
    box-shadow: 0 4px 15px var(--shadow-medium);
  }

  &.active {
    color: #fff;
    background: var(--accent-gradient);
    border-color: transparent;
    box-shadow: 0 6px 18px rgba(58, 123, 213, 0.35);
  }

  @media (max-width: 480px) {
    width: 100%;
    max-width: 200px;
    text-align: center;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  position: relative;
  width: 100%;
  gap: clamp(1.5rem, 4vw, 2rem);
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  align-items: stretch;
  transition: all 0.3s ease;

  @media (min-width: 1280px) {
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  }

  @media (max-width: 540px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(motion.article)`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  border-radius: var(--radius-xl);
  overflow: hidden;
  border: 1px solid var(--surface-outline);
  background: var(--surface-card);
  box-shadow: 0 10px 28px var(--shadow-light);
  transition: transform 0.4s ease, box-shadow 0.4s ease, border-color 0.4s ease;
  cursor: pointer;

  &:hover,
  &:focus-visible {
    transform: translateY(-8px);
    border-color: rgba(59, 130, 246, 0.25);
    box-shadow: 0 16px 42px var(--shadow-medium);
  }
`;

const CardVisual = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: calc(var(--radius-xl) - 1px) calc(var(--radius-xl) - 1px) 0 0;
  background: var(--surface-glass);
  min-height: clamp(130px, 20vw, 180px);

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      180deg,
      rgba(6, 13, 25, 0) 35%,
      rgba(6, 13, 25, 0.55) 100%
    );
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  ${ProjectCard}:hover &::after,
  ${ProjectCard}:focus-visible &::after {
    opacity: 0.8;
  }

  @media (prefers-reduced-motion: reduce) {
    &::after {
      display: none;
    }
  }
`;

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
  padding: clamp(0.85rem, 2vw, 1.15rem);
  flex: 1;
`;

const CardMetaRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: var(--space-sm);
`;

const CardDate = styled.span`
  font-size: 0.7rem;
  color: var(--text-secondary);
  background: var(--surface-glass);
  border: 1px solid var(--surface-outline);
  border-radius: var(--radius-full);
  padding: 0.25rem 0.65rem;
  letter-spacing: 0.04em;
`;

const CardCategory = styled.span`
  color: var(--accent-primary);
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
`;

const CardTitle = styled.h4`
  color: var(--text-primary);
  font-size: clamp(0.95rem, 2.3vw, 1.15rem);
  margin-bottom: 0.4rem;
  font-weight: 600;
  line-height: 1.35;
`;

const CardSummary = styled.p`
  font-size: clamp(0.8rem, 1.9vw, 0.9rem);
  color: var(--text-secondary);
  line-height: 1.6;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-sm);
  padding: clamp(0.65rem, 2vw, 0.9rem) clamp(0.85rem, 2vw, 1rem);
  margin-top: auto;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-xs);
  }
`;

const DetailLink = styled(motion.button)`
  background: none;
  border: none;
  padding: 0;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--accent-primary);
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  cursor: pointer;

  &:focus-visible {
    outline: 2px solid var(--accent-primary);
    outline-offset: 2px;
  }

  @media (max-width: 600px) {
  width: 100%;
    justify-content: space-between;
  }
`;

const IconActions = styled.div`
  display: inline-flex;
  align-items: center;
  gap: var(--space-xs);

  @media (max-width: 600px) {
    gap: var(--space-sm);
  }
`;

const IconButton = styled(motion.a)`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1px solid var(--surface-outline);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--text-secondary);
  background: var(--surface-glass);
  transition: background 0.3s ease, color 0.3s ease, border-color 0.3s ease;

  &:hover {
    background: var(--surface-card);
    color: var(--accent-primary);
    border-color: rgba(59, 130, 246, 0.3);
  }

  &:focus-visible {
    outline: 2px solid var(--accent-primary);
    outline-offset: 2px;
  }

  @media (max-width: 600px) {
    width: 34px;
    height: 34px;
  }
`;

const TechBadges = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
  margin-top: 0.15rem;
`;

const TechBadge = styled.span`
  display: inline-block;
  padding: 0.15rem 0.45rem;
  font-size: 0.68rem;
  border: 1px solid var(--badge-border);
  color: var(--text-secondary);
  border-radius: 999px;
  background: var(--badge-bg);
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
  background-color: var(--surface-card);
  border-radius: var(--radius-2xl);
  max-width: 800px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 20px 45px var(--shadow-medium);
  border: 1px solid var(--surface-outline);
  backdrop-filter: blur(14px);
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
  color: var(--text-secondary);
`;

const PopupTitle = styled.h3`
  font-size: clamp(1.3rem, 4vw, 1.8rem);
  margin-bottom: var(--space-md);
  color: var(--text-gray);
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
  color: var(--accent-primary);
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
  color: #fff;
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
    background: linear-gradient(135deg, #24292f, #1f2328);
    color: #f6f8fa;

    &:hover {
      filter: brightness(1.05);
    }

    html[data-theme='dark'] & {
      background: linear-gradient(135deg, #f8fafc, #d0d7de);
      color: #1f2328;

      &:hover {
        filter: brightness(0.96);
      }
    }
  }

  &.live {
    background-image: var(--accent-gradient);
    background-color: transparent;

    &:hover {
      filter: brightness(1.05);
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
  const dialogRef = useRef(null);
  const closeBtnRef = useRef(null);
  const previouslyFocusedRef = useRef(null);

  const filters = useMemo(() => PROJECT_FILTERS, []);

  const projects = useMemo(() => PROJECTS_DATA, []);

  const filteredProjects = useMemo(
    () =>
      projects.filter(
        (project) => activeFilter === 'all' || project.category === activeFilter
      ),
    [activeFilter, projects]
  );

  const openPopup = useCallback((project) => {
    setSelectedProject(project);
  }, []);

  const closePopup = useCallback(() => {
    setSelectedProject(null);
  }, []);

  // Accessibility: focus trap and Esc for dialog
  useEffect(() => {
    if (selectedProject) {
      previouslyFocusedRef.current = document.activeElement;
      const dialogEl = dialogRef.current;
      const closeEl = closeBtnRef.current;
      const focusableSelectors =
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';
      const focusable = dialogEl
        ? Array.from(dialogEl.querySelectorAll(focusableSelectors))
        : [];
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      // set initial focus
      (closeEl || first)?.focus();

      const onKeyDown = (e) => {
        if (e.key === 'Escape') {
          e.preventDefault();
          closePopup();
          previouslyFocusedRef.current &&
            previouslyFocusedRef.current.focus &&
            previouslyFocusedRef.current.focus();
        }
        if (e.key === 'Tab' && focusable.length > 0) {
          if (e.shiftKey && document.activeElement === first) {
            e.preventDefault();
            last.focus();
          } else if (!e.shiftKey && document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      };

      document.addEventListener('keydown', onKeyDown);
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

      return () => {
        document.removeEventListener('keydown', onKeyDown);
        document.body.style.overflow = originalOverflow;
        if (previouslyFocusedRef.current?.focus) {
          previouslyFocusedRef.current.focus();
        }
      };
    }
  }, [selectedProject, closePopup]);

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
        <ParallaxShapes
          shapes={[
            { size: '260px', top: '8%', left: '80%', color1: 'rgba(0,119,255,0.22)', color2: 'rgba(0,214,255,0.1)', blur: 48, opacity: 0.22 },
            { size: '180px', top: '40%', left: '5%', color1: 'rgba(16,185,129,0.2)', color2: 'rgba(0,119,255,0.1)', blur: 36, opacity: 0.2 }
          ]}
          intensity={22}
        />
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
              whileTap={{ scale: 0.97 }}
              aria-pressed={activeFilter === filter.id}
              type="button"
            >
              {filter.label}
            </TabButton>
          ))}
        </ProjectTabs>

        <ProjectsGrid ref={ref}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              style={{ display: 'contents' }}
            >
              {filteredProjects.map((project, index) => (
                <motion.div key={project.id} variants={itemVariants} layout>
                  <ProjectCard
                    className="project-card"
                    onClick={() => openPopup(project)}
                    whileHover={{ y: -6 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: 'spring', stiffness: 240, damping: 20 }}
                    role="button"
                    tabIndex={0}
                    aria-haspopup="dialog"
                    aria-label={`Open details for ${project.title}`}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        openPopup(project);
                      }
                    }}
                  >
                    <CardVisual>
                      <LazyImageComponent
                        src={project.image}
                        alt={project.title}
                        minHeight="220px"
                        decoding="async"
                      />
                    </CardVisual>
                    <CardBody>
                      <CardMetaRow>
                      <CardCategory>{project.category}</CardCategory>
                        {project.date && <CardDate>{project.date}</CardDate>}
                      </CardMetaRow>
                      <CardTitle>{project.title}</CardTitle>
                      {project.description && (
                        <CardSummary>{project.description}</CardSummary>
                      )}
                      {'technologies' in project &&
                        Array.isArray(project.technologies) &&
                        project.technologies.length > 0 && (
                          <TechBadges>
                            {project.technologies.slice(0, 6).map((tech) => (
                              <TechBadge key={`${project.id}-${tech}`}>{tech}</TechBadge>
                            ))}
                          </TechBadges>
                        )}
                    </CardBody>
                    <CardFooter>
                      <DetailLink
                        type="button"
                        whileHover={{ x: 3 }}
                        whileTap={{ scale: 0.96 }}
                        onClick={(event) => {
                          event.stopPropagation();
                          openPopup(project);
                        }}
                        aria-label={`Quick view for ${project.title}`}
                      >
                        Quick view
                        <span aria-hidden="true">→</span>
                      </DetailLink>
                      <IconActions>
                        <IconButton
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={(event) => event.stopPropagation()}
                          aria-label={`Open ${project.title} repository`}
                        >
                          <FaGithub size={16} />
                        </IconButton>
                        {project.live && (
                          <IconButton
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={(event) => event.stopPropagation()}
                            aria-label={`Visit live site for ${project.title}`}
                          >
                            <FaExternalLinkAlt size={14} />
                          </IconButton>
                        )}
                      </IconActions>
                    </CardFooter>
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
              aria-hidden={false}
            >
              <PopupOverlay onClick={closePopup} />
              <PopupContainer
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
                role="dialog"
                aria-modal="true"
                aria-labelledby="project-dialog-title"
                aria-describedby="project-dialog-description"
                ref={dialogRef}
              >
                <PopupClose
                  onClick={closePopup}
                  aria-label="Close popup"
                  ref={closeBtnRef}
                >
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
                    <PopupTitle id="project-dialog-title">
                      {selectedProject.title}
                    </PopupTitle>
                    <PopupDescription id="project-dialog-description">
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
