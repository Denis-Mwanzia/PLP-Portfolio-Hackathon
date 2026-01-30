import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import ParallaxShapes from './ParallaxShapes';
import { useInView } from 'react-intersection-observer';
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaPhp,
} from 'react-icons/fa';
import {
  SiMongodb,
  SiTailwindcss,
  SiJavascript,
  SiDjango,
  SiGraphql,
  SiC,
  SiCplusplus,
  SiGo,
  SiRuby,
  SiExpress,
  SiTypescript,
} from 'react-icons/si';

const AboutSection = styled.section`
  position: relative;
  overflow: hidden;
  padding: clamp(3rem, 8vw, 5rem) 0;
  background: var(--section-surface);
`;

const Container = styled.div`
  max-width: var(--container-xl);
  margin: 0 auto;
  padding: 0 clamp(1rem, 5vw, 2rem);
  text-align: center;
  color: var(--text-secondary);
`;

const Title = styled.h3`
  font-size: clamp(2rem, 6vw, 3rem);
  font-weight: 900;
  margin-bottom: var(--space-md);
  background: linear-gradient(90deg, #0077ff, #00c6ff, #0077ff);
  background-size: 200%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: gradientShift 5s infinite linear;

  @keyframes gradientShift {
    0% {
      background-position: 0%;
    }
    100% {
      background-position: 200%;
    }
  }
`;

const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 2.5rem;
`;

const Card = styled(motion.div)`
  background: var(--surface-card);
  padding: 1.8rem;
  border-radius: var(--radius-xl);
  box-shadow: 0 12px 28px var(--shadow-light);
  border: 1px solid var(--surface-outline);
  text-align: left;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease,
    background 0.3s ease;
  cursor: default;

  &:hover {
    transform: translateY(-6px) scale(1.02);
    background: var(--surface-card-hover);
    box-shadow: 0 16px 36px var(--shadow-medium);
  }
`;

const SectionHeading = styled.h4`
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 0.8rem;
  color: var(--primary-blue);
`;

const Description = styled.p`
  font-size: 1.05rem;
  line-height: 1.7;
  color: var(--text-gray);
`;

const Highlight = styled.span`
  color: var(--primary-blue);
  font-weight: 600;
`;

const TechShowcase = styled.div`
  margin-top: clamp(2.5rem, 6vw, 4.5rem);
  display: flex;
  flex-direction: column;
  gap: clamp(1.75rem, 4vw, 2.75rem);
`;

const FadeMask = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    width: clamp(40px, 8vw, 80px);
    pointer-events: none;
    z-index: 2;
  }

  &::before {
    left: 0;
    background: linear-gradient(
      90deg,
      var(--section-surface),
      rgba(255, 255, 255, 0)
    );
    [data-theme='dark'] & {
      background: linear-gradient(
        90deg,
        rgba(9, 16, 32, 1),
        rgba(9, 16, 32, 0)
      );
    }
  }

  &::after {
    right: 0;
    background: linear-gradient(
      -90deg,
      var(--section-surface),
      rgba(255, 255, 255, 0)
    );
    [data-theme='dark'] & {
      background: linear-gradient(
        -90deg,
        rgba(9, 16, 32, 1),
        rgba(9, 16, 32, 0)
      );
    }
  }
`;

const scrollLeft = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const scrollRight = keyframes`
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0);
  }
`;

const TechRow = styled.div`
  display: flex;
  align-items: center;
  gap: clamp(1.5rem, 3vw, 2.75rem);
  min-width: 200%;
  animation: ${(p) => (p.$reverse ? scrollRight : scrollLeft)}
    ${(p) => p.$duration || 32}s linear infinite;
  will-change: transform;

  &:hover {
    animation-play-state: paused;
  }

  @media (max-width: 640px) {
    gap: clamp(1.1rem, 5vw, 1.6rem);
  }

  @media (prefers-reduced-motion: reduce) {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
    transform: translateX(0) !important;
  }
`;

const IconBubble = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.45rem;
  min-width: clamp(80px, 10vw, 120px);
  padding: clamp(0.85rem, 2.6vw, 1.25rem);
  border-radius: var(--radius-xl);
  background: rgba(255, 255, 255, 0.75);
  border: 1px solid rgba(58, 123, 213, 0.18);
  box-shadow: 0 10px 22px rgba(30, 64, 175, 0.08);
  color: var(--primary-blue);
  text-align: center;
  backdrop-filter: blur(6px);

  span {
    font-size: clamp(0.7rem, 1.8vw, 0.85rem);
    font-weight: 600;
    color: var(--text-secondary);
    letter-spacing: 0.03em;
  }

  [data-theme='dark'] & {
    background: rgba(10, 18, 34, 0.72);
    border-color: rgba(108, 149, 255, 0.25);
    box-shadow: 0 10px 22px rgba(12, 22, 39, 0.55);

    span {
      color: rgba(226, 236, 255, 0.92);
    }
  }
`;

const IconGlyph = styled.span`
  font-size: clamp(1.75rem, 5vw, 2.4rem);
  filter: drop-shadow(0 8px 16px rgba(58, 123, 213, 0.18));
`;

const IconLabel = styled.span``;

const About = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.2 },
    }),
  };

  const marqueeSets = [
    {
      duration: 32,
      reverse: false,
      icons: [
        { Icon: SiJavascript, label: 'JavaScript' },
        { Icon: SiTypescript, label: 'TypeScript' },
        { Icon: FaPython, label: 'Python' },
        { Icon: FaHtml5, label: 'HTML5' },
        { Icon: FaCss3Alt, label: 'CSS3' },
        { Icon: SiGraphql, label: 'GraphQL' },
        { Icon: SiC, label: 'C' },
        { Icon: SiCplusplus, label: 'C++' },
        { Icon: SiGo, label: 'Go' },
        { Icon: SiRuby, label: 'Ruby' },
        { Icon: FaPhp, label: 'PHP' },
      ],
    },
    {
      duration: 36,
      reverse: true,
      icons: [
        { Icon: FaReact, label: 'React' },
        { Icon: FaNodeJs, label: 'Node.js' },
        { Icon: SiExpress, label: 'Express' },
        { Icon: SiMongodb, label: 'MongoDB' },
        { Icon: SiTailwindcss, label: 'Tailwind' },
        { Icon: SiDjango, label: 'Django' },
        { Icon: FaGitAlt, label: 'Git' },
      ],
    },
  ];

  return (
    <AboutSection id="about">
      <ParallaxShapes
        shapes={[
          {
            size: '240px',
            top: '5%',
            left: '10%',
            color1: 'rgba(0,119,255,0.25)',
            color2: 'rgba(0,198,255,0.12)',
            blur: 40,
            opacity: 0.25,
          },
          {
            size: '320px',
            top: '60%',
            left: '75%',
            color1: 'rgba(16,185,129,0.22)',
            color2: 'rgba(0,119,255,0.12)',
            blur: 50,
            opacity: 0.22,
          },
          {
            size: '180px',
            top: '75%',
            left: '15%',
            color1: 'rgba(139,92,246,0.25)',
            color2: 'rgba(59,130,246,0.12)',
            blur: 38,
            opacity: 0.22,
          },
        ]}
        intensity={26}
      />
      <Container>
        <Title>About Me</Title>

        <CardsWrapper ref={ref}>
          <Card
            variants={cardVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={0}
          >
            <SectionHeading>👨‍💻 Who I Am</SectionHeading>
            <Description>
              I’m a{' '}
              <Highlight>Full-Stack Web Developer & IT Specialist</Highlight>{' '}
              from Kenya with a
              <Highlight> BSc in Information Technology</Highlight> from Kabarak
              University. I love transforming complex ideas into{' '}
              <Highlight>fast, secure, and scalable applications</Highlight>.
            </Description>
          </Card>

          <Card
            variants={cardVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={1}
          >
            <SectionHeading>⚡ What I Do</SectionHeading>
            <Description>
              Started with <Highlight>Django</Highlight> & the web fundamentals
              (<Highlight>HTML, CSS, JS</Highlight>), now I specialize in the
              <Highlight> MERN stack</Highlight> through a{' '}
              <Highlight>software engineering scholarship</Highlight> at PLP
              Academy, focusing on <Highlight>clean architecture</Highlight>,{' '}
              <Highlight>performance</Highlight> &{' '}
              <Highlight>accessibility</Highlight>.
            </Description>
          </Card>

          <Card
            variants={cardVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={2}
          >
            <SectionHeading>🎯 Why I Do It</SectionHeading>
            <Description>
              My goal is to create{' '}
              <Highlight>impactful digital solutions</Highlight> that solve
              real-world problems. I thrive in{' '}
              <Highlight>collaborative environments</Highlight>, value{' '}
              <Highlight>continuous learning</Highlight>, and enjoy exploring
              Nairobi’s tech scene when I’m not coding.
            </Description>
          </Card>
        </CardsWrapper>

        {/* Tech Stack Showcase */}
        <TechShowcase>
          {marqueeSets.map(({ icons, reverse, duration }, rowIndex) => {
            const loopIcons = [...icons, ...icons];
            return (
              <FadeMask key={rowIndex} aria-hidden="true">
                <TechRow $reverse={reverse} $duration={duration}>
                  {loopIcons.map(({ Icon, label }, i) => (
                    <IconBubble
                      key={`${label}-${i}`}
                      whileHover={{ scale: 1.15, rotate: reverse ? -1.5 : 1.5 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{
                        type: 'spring',
                        stiffness: 260,
                        damping: 18,
                      }}
                    >
                      <IconGlyph aria-hidden="true">
                        <Icon />
                      </IconGlyph>
                      <IconLabel>{label}</IconLabel>
                    </IconBubble>
                  ))}
                </TechRow>
              </FadeMask>
            );
          })}
        </TechShowcase>
      </Container>
    </AboutSection>
  );
};

export default About;
