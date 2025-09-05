import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaDownload, FaLinkedin, FaGithub } from 'react-icons/fa';

const HeroSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: var(--space-xl);
  background: linear-gradient(135deg, var(--off-white) 0%, var(--white) 100%);
  position: relative;
`;

const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: clamp(2rem, 8vw, 5rem);
  max-width: var(--container-xl);
  width: 100%;

  @media (max-width: 992px) {
    flex-direction: column;
    gap: var(--space-2xl);
    text-align: center;
  }
`;

const ProfileContainer = styled.div`
  position: relative;
  width: clamp(200px, 25vw, 260px);
  height: clamp(200px, 25vw, 260px);
  flex-shrink: 0;
  order: 1;

  @media (max-width: 992px) {
    order: 1;
  }
`;

const ProfileBorder = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  padding: 5px;
  background: linear-gradient(
    45deg,
    var(--primary-blue),
    var(--secondary-blue)
  );
  animation: rotate 8s linear infinite;
  position: relative;
  z-index: 1;
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid var(--white);
  position: relative;
  z-index: 2;
  transition: transform 0.5s ease;
`;

const ProfileShadow = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(58, 123, 213, 0.2) 0%,
    transparent 70%
  );
  top: 0;
  left: 0;
  z-index: 0;
  animation: pulse 4s ease-in-out infinite;
`;

const HeroContent = styled.div`
  flex: 1;
  max-width: 600px;
  text-align: center;
  order: 2;

  @media (max-width: 992px) {
    order: 2;
  }
`;

const HeroGreeting = styled.p`
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  font-weight: 600;
  color: var(--medium-gray);
  margin-bottom: var(--space-sm);
`;

const HeroTitle = styled.h1`
  font-size: clamp(2rem, 8vw, 3.5rem);
  font-weight: 700;
  margin: var(--space-sm) 0;
  line-height: 1.1;
`;

const TitlePart = styled.span`
  display: block;
  background: linear-gradient(
    90deg,
    var(--primary-blue),
    var(--secondary-blue)
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;

const HeroSubtitle = styled.p`
  font-size: clamp(1rem, 3vw, 1.3rem);
  font-weight: 500;
  color: var(--text-gray);
  margin-bottom: var(--space-xl);
`;

const HeroActions = styled.div`
  display: flex;
  justify-content: center;
  gap: var(--space-lg);
  margin: var(--space-xl) 0;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: var(--space-md);
  }
`;

const Button = styled.a`
  display: inline-flex;
  align-items: center;
  gap: var(--space-sm);
  padding: clamp(0.6rem, 2vw, 0.8rem) clamp(1.5rem, 4vw, 2rem);
  border-radius: var(--radius-full);
  font-weight: 600;
  font-size: clamp(0.9rem, 2.5vw, 1rem);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  z-index: 1;
  min-width: 140px;
  justify-content: center;
  text-decoration: none;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 250px;
  }
`;

const PrimaryButton = styled(Button)`
  background: var(--white);
  color: var(--primary-blue);
  border: 2px solid var(--primary-blue);

  &:hover {
    background: var(--light-gray);
    box-shadow: 0 5px 15px rgba(58, 123, 213, 0.2);
    transform: translateY(-2px);
  }
`;

const SecondaryButton = styled(Button)`
  background: var(--primary-blue);
  color: var(--white);
  border: 2px solid var(--primary-blue);

  &:hover {
    background: var(--hover-blue);
    box-shadow: 0 5px 15px rgba(58, 123, 213, 0.3);
    transform: translateY(-2px);
  }
`;

const ButtonIcon = styled.span`
  transition: transform 0.3s ease;

  ${Button}:hover & {
    transform: translateX(3px);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: var(--space-lg);
  margin-top: var(--space-lg);

  @media (max-width: 768px) {
    gap: var(--space-md);
  }
`;

const SocialLink = styled.a`
  position: relative;
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.3s ease;
  background: var(--white);
  box-shadow: 0 2px 10px var(--shadow-light);
  color: var(--primary-blue);
  text-decoration: none;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 20px var(--shadow-medium);
  }
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: var(--space-xl);
  left: 50%;
  transform: translateX(-50%);
`;

const ScrollLine = styled.div`
  width: 1px;
  height: 50px;
  background: linear-gradient(to bottom, var(--primary-blue), transparent);
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    width: 6px;
    height: 6px;
    background: var(--primary-blue);
    border-radius: 50%;
    transform: translate(-50%, 0);
    animation: scrollBounce 2s infinite;
  }
`;

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <HeroSection id="home">
      <HeroContainer>
        <ProfileContainer>
          <ProfileBorder>
            <ProfileImage
              src="/assets/homeImage.jpg"
              alt="Denis Mwanzia"
              loading="eager"
            />
          </ProfileBorder>
          <ProfileShadow />
        </ProfileContainer>

        <HeroContent>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <HeroGreeting>Hello, I'm</HeroGreeting>
            </motion.div>

            <motion.div variants={itemVariants}>
              <HeroTitle>
                <TitlePart>Denis</TitlePart>
                <TitlePart>Mwanzia</TitlePart>
              </HeroTitle>
            </motion.div>

            <motion.div variants={itemVariants}>
              <HeroSubtitle>Full-Stack Developer & IT Specialist</HeroSubtitle>
            </motion.div>

            <motion.div variants={itemVariants}>
              <HeroActions>
                <PrimaryButton href="/assets/resume.pdf" download>
                  <span>Download CV</span>
                  <ButtonIcon>
                    <FaDownload />
                  </ButtonIcon>
                </PrimaryButton>
                <SecondaryButton href="#contact">
                  <span>Let's Connect</span>
                  <ButtonIcon>→</ButtonIcon>
                </SecondaryButton>
              </HeroActions>
            </motion.div>

            <motion.div variants={itemVariants}>
              <SocialLinks>
                <SocialLink
                  href="https://www.linkedin.com/in/denis-mwanzia"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={20} />
                </SocialLink>
                <SocialLink
                  href="https://github.com/Denis-Mwanzia"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <FaGithub size={20} />
                </SocialLink>
              </SocialLinks>
            </motion.div>
          </motion.div>
        </HeroContent>
      </HeroContainer>

      <ScrollIndicator>
        <ScrollLine />
      </ScrollIndicator>
    </HeroSection>
  );
};

export default Hero;
