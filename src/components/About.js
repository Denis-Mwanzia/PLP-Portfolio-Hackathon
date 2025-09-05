import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutSection = styled.section`
  position: relative;
  overflow: hidden;
  padding: clamp(3rem, 8vw, 5rem) 0;
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
  font-size: clamp(1.1rem, 3vw, 1.5rem);
  font-weight: 500;
  color: var(--medium-gray);
  position: relative;
  padding-bottom: var(--space-md);

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background: linear-gradient(
      90deg,
      var(--primary-blue) 0%,
      var(--secondary-blue) 100%
    );
    border-radius: 3px;
  }
`;

const AboutContent = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  gap: clamp(2rem, 8vw, 4rem);

  @media (max-width: 992px) {
    flex-direction: column;
    text-align: center;
  }
`;

const AboutImage = styled.div`
  flex: 0 1 40%;
  min-width: 280px;
  max-width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  transition: all 0.4s ease;
  order: 1;

  @media (max-width: 992px) {
    order: 1;
    max-width: 300px;
    margin: 0 auto;
  }

  &::before {
    content: '';
    position: absolute;
    width: 90%;
    height: 90%;
    border: 8px solid rgba(58, 123, 213, 0.2);
    border-radius: var(--radius-xl);
    z-index: 0;
    transition: all 0.4s ease;
  }

  &:hover {
    transform: translateY(-5px);
  }

  &:hover::before {
    transform: rotate(5deg);
    border-color: rgba(58, 123, 213, 0.4);
  }
`;

const Image = styled.img`
  width: 100%;
  border-radius: var(--radius-xl);
  box-shadow: 0 10px 30px var(--shadow-medium);
  position: relative;
  z-index: 1;
  transition: all 0.4s ease;
  aspect-ratio: 1/1;
  object-fit: cover;

  ${AboutImage}:hover & {
    box-shadow: 0 15px 40px var(--shadow-dark);
  }
`;

const AboutDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  padding: clamp(1.5rem, 4vw, 2rem);
  background-color: var(--white);
  border-radius: var(--radius-xl);
  box-shadow: 0 5px 25px var(--shadow-light);
  transition: all 0.3s ease;
  order: 2;

  @media (max-width: 992px) {
    order: 2;
    text-align: center;
  }

  &:hover {
    box-shadow: 0 8px 30px var(--shadow-medium);
  }
`;

const SectionHeading = styled.h4`
  font-size: clamp(1.2rem, 3vw, 1.5rem);
  font-weight: 700;
  margin-bottom: var(--space-md);
  color: var(--primary-blue);
  position: relative;
`;

const Description = styled.p`
  font-size: clamp(1rem, 2.5vw, 1.15rem);
  font-weight: 400;
  line-height: 1.8;
  color: var(--medium-gray);
  max-width: 100%;
  margin-bottom: var(--space-lg);
`;

const Highlight = styled.strong`
  color: var(--primary-blue);
  font-weight: 600;
`;

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <AboutSection id="about">
      <Container>
        <SectionTitle>
          <Title>About Me</Title>
          <SubTitle>Who I am and what I do</SubTitle>
        </SectionTitle>

        <AboutContent ref={ref}>
          <AboutImage>
            <Image
              src="/assets/about.PNG"
              alt="Denis Mwanzia portrait"
              loading="lazy"
            />
          </AboutImage>

          <AboutDetails>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
            >
              <motion.div variants={itemVariants}>
                <SectionHeading>Who I Am</SectionHeading>
                <Description>
                  I am a dedicated{' '}
                  <Highlight>
                    Full-Stack Web Developer & IT Specialist
                  </Highlight>{' '}
                  based in Kenya, with a{' '}
                  <Highlight>
                    Bachelor's degree in Information Technology
                  </Highlight>{' '}
                  from Kabarak University. My journey into web development began
                  with a passion for solving real-world challenges through
                  technology.
                </Description>
              </motion.div>

              <motion.div variants={itemVariants}>
                <SectionHeading>What I Do</SectionHeading>
                <Description>
                  I started my career building{' '}
                  <Highlight>
                    dynamic full-stack web applications with Django
                  </Highlight>
                  , where I mastered{' '}
                  <Highlight>
                    HTML, CSS, Tailwind, JavaScript, and jQuery
                  </Highlight>{' '}
                  to craft user-centric experiences. Now, I am specializing in
                  the <Highlight>MERN stack</Highlight> through a
                  <Highlight>
                    software engineering scholarship at Power Learn Project
                    Academy
                  </Highlight>
                  . I focus on scalable web architectures, modern frameworks,
                  and industry best practices.
                </Description>
              </motion.div>
            </motion.div>
          </AboutDetails>
        </AboutContent>
      </Container>
    </AboutSection>
  );
};

export default About;
