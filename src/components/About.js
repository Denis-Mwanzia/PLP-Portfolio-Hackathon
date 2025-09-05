import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaReact, FaNodeJs, FaPython, FaGitAlt } from 'react-icons/fa';
import {
  SiMongodb,
  SiTailwindcss,
  SiJavascript,
  SiDjango,
} from 'react-icons/si';

const AboutSection = styled.section`
  position: relative;
  overflow: hidden;
  padding: clamp(3rem, 8vw, 5rem) 0;
  background: linear-gradient(135deg, #f9fafc 0%, #f3f8ff 100%);
`;

const Container = styled.div`
  max-width: var(--container-xl);
  margin: 0 auto;
  padding: 0 clamp(1rem, 5vw, 2rem);
  text-align: center;
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
  background: white;
  padding: 1.8rem;
  border-radius: var(--radius-xl);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);
  text-align: left;
  transition: transform 0.3s ease;
  cursor: default;

  &:hover {
    transform: translateY(-6px) scale(1.02);
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.1);
  }
`;

const SectionHeading = styled.h4`
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 0.8rem;
  color: #0077ff;
`;

const Description = styled.p`
  font-size: 1.05rem;
  line-height: 1.7;
  color: #444;
`;

const Highlight = styled.span`
  color: #0077ff;
  font-weight: 600;
`;

const TechStack = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(60px, 1fr));
  gap: 1rem;
  justify-items: center;
  margin-top: 3rem;
`;

const TechIcon = styled(motion.div)`
  font-size: 2rem;
  color: #0077ff;
  transition: transform 0.3s ease, color 0.3s ease;

  &:hover {
    transform: scale(1.2);
    color: #005bbb;
  }
`;

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

  return (
    <AboutSection id="about">
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
        <TechStack>
          {[
            FaReact,
            FaNodeJs,
            SiMongodb,
            SiTailwindcss,
            SiJavascript,
            FaPython,
            SiDjango,
            FaGitAlt,
          ].map((Icon, i) => (
            <TechIcon key={i} whileHover={{ scale: 1.3 }}>
              <Icon />
            </TechIcon>
          ))}
        </TechStack>
      </Container>
    </AboutSection>
  );
};

export default About;
