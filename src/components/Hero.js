import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaDownload, FaLinkedin, FaGithub } from 'react-icons/fa';
import Tilt from 'react-parallax-tilt';
import Typewriter from 'typewriter-effect';

const HeroSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: var(--space-xl);
  position: relative;
  background: linear-gradient(
    135deg,
    #f8fafc 0%,
    #e2e8f0 25%,
    #f1f5f9 50%,
    #e0f2fe 75%,
    #f0f9ff 100%
  );
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(
        circle at 20% 20%,
        rgba(59, 130, 246, 0.08),
        transparent 50%
      ),
      radial-gradient(
        circle at 80% 70%,
        rgba(16, 185, 129, 0.06),
        transparent 50%
      ),
      radial-gradient(
        circle at 40% 80%,
        rgba(139, 92, 246, 0.05),
        transparent 50%
      );
    animation: floatBackground 12s ease-in-out infinite alternate;
    z-index: 0;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      45deg,
      transparent 30%,
      rgba(255, 255, 255, 0.1) 50%,
      transparent 70%
    );
    animation: shimmer 3s ease-in-out infinite;
    z-index: 1;
  }

  @keyframes floatBackground {
    0% {
      transform: translateY(0) rotate(0deg);
    }
    50% {
      transform: translateY(-10px) rotate(1deg);
    }
    100% {
      transform: translateY(15px) rotate(-1deg);
    }
  }

  @keyframes shimmer {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }
`;

const Particle = styled.div`
  position: absolute;
  width: 8px;
  height: 8px;
  background: rgba(0, 119, 255, 0.2);
  border-radius: 50%;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  animation: floatParticle ${(props) => props.duration}s linear infinite;

  @keyframes floatParticle {
    0%,
    100% {
      transform: translateY(0) scale(1);
      opacity: 1;
    }
    50% {
      transform: translateY(-20px) scale(1.2);
      opacity: 0.6;
    }
  }
`;

const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: clamp(2rem, 8vw, 5rem);
  max-width: var(--container-xl);
  width: 100%;
  position: relative;
  z-index: 2;

  @media (max-width: 992px) {
    flex-direction: column;
    text-align: center;
  }
`;

const ProfileContainer = styled.div`
  position: relative;
  width: clamp(200px, 25vw, 260px);
  height: clamp(200px, 25vw, 260px);
  flex-shrink: 0;
`;

const ProfileBorder = styled.div`
  border-radius: 50%;
  padding: 5px;
  background: linear-gradient(135deg, #0077ff, #00c6ff, #0077ff);
  background-size: 300% 300%;
  animation: glowing 8s ease infinite;

  @keyframes glowing {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid white;
  transition: transform 0.4s ease;
`;

const HeroContent = styled.div`
  flex: 1;
  max-width: 600px;
`;

const HeroGreeting = styled.p`
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  font-weight: 600;
  color: var(--medium-gray);
`;

const HeroTitle = styled.h1`
  font-size: clamp(2rem, 8vw, 3.5rem);
  font-weight: 800;
  margin: var(--space-sm) 0;
  line-height: 1.1;
`;

const TitlePart = styled.span`
  display: block;
  background: linear-gradient(90deg, #0077ff, #00c6ff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;

const HeroSubtitle = styled.div`
  font-size: clamp(1rem, 3vw, 1.3rem);
  font-weight: 500;
  color: var(--text-gray);
  margin-bottom: var(--space-xl);
  min-height: 30px;
`;

const HeroActions = styled.div`
  display: flex;
  justify-content: center;
  gap: var(--space-lg);
  margin: var(--space-xl) 0;
  flex-wrap: wrap;
`;

const Button = styled.a`
  display: inline-flex;
  align-items: center;
  gap: var(--space-sm);
  padding: 0.8rem 1.8rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1rem;
  position: relative;
  text-decoration: none;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-3px);
  }

  &:active {
    transform: scale(0.97);
    box-shadow: 0 0 10px rgba(0, 119, 255, 0.4);
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 50px;
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: -1;
  }
`;

const PrimaryButton = styled(Button)`
  background: white;
  border: 2px solid var(--primary-blue);
  color: var(--primary-blue);

  &:hover::after {
    background: var(--light-gray);
    opacity: 1;
  }
`;

const SecondaryButton = styled(Button)`
  background: var(--primary-blue);
  color: white;
  border: 2px solid var(--primary-blue);

  &:hover::after {
    background: var(--hover-blue);
    opacity: 1;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: var(--space-lg);
  margin-top: var(--space-lg);
`;

const SocialLink = styled.a`
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: white;
  box-shadow: 0 2px 10px rgba(0, 119, 255, 0.1);
  color: var(--primary-blue);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 4px 15px rgba(0, 119, 255, 0.3);
  }
`;

const ScrollIndicator = styled.a`
  position: absolute;
  bottom: var(--space-xl);
  left: 50%;
  transform: translateX(-50%);
  font-size: 1.5rem;
  color: var(--primary-blue);
  cursor: pointer;
  animation: bounce 2s infinite;

  @keyframes bounce {
    0%,
    100% {
      transform: translate(-50%, 0);
    }
    50% {
      transform: translate(-50%, 10px);
    }
  }
`;

const Hero = () => {
  return (
    <HeroSection id="home">
      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <Particle
          key={i}
          top={`${Math.random() * 90}%`}
          left={`${Math.random() * 90}%`}
          duration={8 + i}
        />
      ))}

      <HeroContainer>
        <Tilt
          tiltMaxAngleX={10}
          tiltMaxAngleY={10}
          perspective={1000}
          scale={1.05}
        >
          <ProfileContainer>
            <ProfileBorder>
              <ProfileImage src="/assets/passport.jpg" alt="Denis Mwanzia" />
            </ProfileBorder>
          </ProfileContainer>
        </Tilt>

        <HeroContent>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <HeroGreeting>Hello, I'm</HeroGreeting>
            <HeroTitle>
              <TitlePart>Denis</TitlePart>
              <TitlePart>Mwanzia</TitlePart>
            </HeroTitle>
            <HeroSubtitle>
              <Typewriter
                options={{
                  strings: [
                    'Full-Stack Developer',
                    'IT Specialist',
                    'Problem Solver',
                    'Tech Enthusiast',
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                }}
              />
            </HeroSubtitle>
            <p style={{ color: 'var(--medium-gray)', marginTop: '0.5rem' }}>
              Crafting seamless digital experiences for the web & beyond.
            </p>

            <HeroActions>
              <PrimaryButton href="/assets/resume.pdf" download>
                <FaDownload /> Download CV
              </PrimaryButton>
              <SecondaryButton href="#contact">
                🚀 Let's Connect
              </SecondaryButton>
            </HeroActions>

            <SocialLinks>
              <SocialLink
                href="https://www.linkedin.com/in/denis-mwanzia"
                target="_blank"
              >
                <FaLinkedin size={20} />
              </SocialLink>
              <SocialLink
                href="https://github.com/Denis-Mwanzia"
                target="_blank"
              >
                <FaGithub size={20} />
              </SocialLink>
            </SocialLinks>
          </motion.div>
        </HeroContent>
      </HeroContainer>

      <ScrollIndicator href="#about">⬇</ScrollIndicator>
    </HeroSection>
  );
};

export default Hero;
