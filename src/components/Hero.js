import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import {
  FaDownload,
  FaLinkedin,
  FaGithub,
  FaCode,
  FaRocket,
  FaFigma,
} from 'react-icons/fa';
import { SiTypescript, SiNextdotjs } from 'react-icons/si';

const HeroSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: clamp(var(--space-lg), 7vw, var(--space-3xl));
  position: relative;
  background: var(--hero-gradient);
  overflow: hidden;

  /* Dark theme override */
  [data-theme='dark'] & {
    background: var(--hero-gradient);
  }

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      radial-gradient(
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

  /* Subtle shimmer in dark mode */
  [data-theme='dark'] &::after {
    background: linear-gradient(
      45deg,
      transparent 30%,
      rgba(255, 255, 255, 0.04) 50%,
      transparent 70%
    );
  }

  /* Spotlight cursor */
  .spotlight {
    pointer-events: none;
    position: absolute;
    inset: 0;
    background: radial-gradient(
      600px circle at var(--mx, 50%) var(--my, 50%),
      rgba(59, 130, 246, 0.12),
      transparent 40%
    );
    z-index: 2;
    transition: background-position 0.05s ease;
  }

  @media (max-width: 768px) {
    min-height: auto;
    padding: var(--space-2xl) var(--space-md) var(--space-4xl);

    .spotlight {
      display: none;
    }
  }

  @media (max-width: 480px) {
    padding: var(--space-xl) var(--space-sm) var(--space-3xl);
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
  z-index: 1;

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
  align-items: stretch;
  justify-content: center;
  gap: clamp(1.5rem, 6vw, 3.5rem);
  max-width: 1200px;
  width: 100%;
  position: relative;
  z-index: 2;

  @media (max-width: 1100px) {
    max-width: var(--container-xl);
    gap: clamp(1.5rem, 5vw, 2.5rem);
  }

  @media (max-width: 992px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: clamp(1.75rem, 6vw, 2.5rem);
  }
`;

const ProfileContainer = styled.div`
  position: relative;
  width: clamp(180px, 26vw, 240px);
  height: clamp(180px, 26vw, 240px);
  flex-shrink: 0;

  @media (max-width: 540px) {
    width: clamp(150px, 45vw, 200px);
    height: clamp(150px, 45vw, 200px);
  }
`;

const ProfileBorder = styled.div`
  border-radius: 50%;
  padding: 5px;
  background: var(--accent-gradient);
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
  max-width: 620px;
  padding: 0 clamp(0.5rem, 3.5vw, 1rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: clamp(1.4rem, 4vw, 2rem);
`;

const HeroGreeting = styled.p`
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  font-weight: 600;
  color: var(--text-secondary);
`;

const HeroTitle = styled.h1`
  font-size: clamp(2rem, 8vw, 3.5rem);
  font-weight: 800;
  margin: var(--space-sm) 0;
  line-height: 1.1;
`;

const TitlePart = styled.span`
  display: block;
  background: var(--accent-gradient);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;

const HeroSubtitle = styled.p`
  margin: 0;
  font-size: clamp(1.05rem, 2.6vw, 1.45rem);
  font-weight: 600;
  color: var(--text-secondary);
  min-height: auto;

  .accent {
    background: linear-gradient(
      120deg,
      var(--accent-primary),
      var(--accent-secondary)
    );
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    font-weight: 700;
  }
`;

const HeroNarrative = styled.p`
  margin: 0;
  font-size: clamp(0.96rem, 2.1vw, 1.12rem);
  line-height: 1.6;
  color: var(--text-secondary);
  max-width: 36ch;

  strong {
    color: var(--primary-blue);
    font-weight: 600;
  }

  [data-theme='dark'] & strong {
    color: var(--secondary-blue);
  }

  @media (max-width: 992px) {
    margin-inline: auto;
  }
`;

const HeroActions = styled.div`
  display: flex;
  justify-content: center;
  gap: var(--space-lg);
  margin-top: var(--space-lg);
  flex-wrap: wrap;

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: stretch;
    gap: var(--space-md);
  }
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
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

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

  @media (max-width: 640px) {
    width: 100%;
    justify-content: center;
  }
`;

const PrimaryButton = styled(Button)`
  background: var(--surface-card);
  border: 2px solid var(--surface-outline);
  color: var(--accent-primary);

  &:hover::after {
    background: rgba(255, 255, 255, 0.2);
    opacity: 1;
  }

  html[data-theme='dark'] & {
    background: rgba(12, 22, 39, 0.88);
    color: var(--text-primary);
    border-color: rgba(108, 149, 255, 0.22);

    &:hover::after {
      background: rgba(108, 149, 255, 0.16);
    }
  }
`;

const SecondaryButton = styled(Button)`
  background: var(--accent-gradient);
  color: #ffffff;
  border: 2px solid transparent;

  &:hover::after {
    background: rgba(255, 255, 255, 0.2);
    opacity: 1;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: clamp(var(--space-md), 6vw, var(--space-lg));
  margin-top: var(--space-lg);
`;

const SocialLink = styled.a`
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: var(--surface-card);
  box-shadow: 0 2px 12px var(--shadow-light);
  color: var(--accent-primary);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 18px var(--shadow-medium);
  }

  @media (max-width: 640px) {
    width: 40px;
    height: 40px;
  }
`;

const BadgeRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: clamp(0.65rem, 2.2vw, 0.95rem);
  margin-top: clamp(0.8rem, 3vw, 1.4rem);
`;

const Badge = styled(motion.span)`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.55rem 1.1rem;
  border-radius: 999px;
  background: linear-gradient(
    120deg,
    rgba(58, 123, 213, 0.25),
    rgba(143, 92, 247, 0.18),
    rgba(28, 216, 255, 0.15)
  );
  color: var(--accent-primary);
  font-weight: 600;
  font-size: clamp(0.8rem, 2.2vw, 0.95rem);
  letter-spacing: 0.04em;
  border: 1px solid rgba(58, 123, 213, 0.25);
  backdrop-filter: blur(6px);

  [data-theme='dark'] & {
    background: linear-gradient(
      120deg,
      rgba(108, 149, 255, 0.22),
      rgba(28, 216, 255, 0.14),
      rgba(139, 92, 246, 0.18)
    );
    color: var(--secondary-blue);
    border-color: rgba(108, 149, 255, 0.28);
  }
`;

const StatsGrid = styled.div`
  margin-top: clamp(1.1rem, 3.2vw, 1.9rem);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
  gap: clamp(1rem, 3vw, 1.5rem);

  @media (max-width: 1100px) {
    display: none;
  }

  @media (max-height: 860px) {
    display: none;
  }
`;

const StatCard = styled(motion.div)`
  position: relative;
  padding: clamp(1.1rem, 3.2vw, 1.4rem);
  border-radius: var(--radius-xl);
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(58, 123, 213, 0.18);
  box-shadow: 0 16px 32px rgba(15, 35, 95, 0.08);
  overflow: hidden;

  [data-theme='dark'] & {
    background: rgba(12, 22, 39, 0.82);
    border-color: rgba(108, 149, 255, 0.22);
    box-shadow: 0 18px 36px rgba(6, 12, 25, 0.65);
  }

  h4 {
    font-size: clamp(1.6rem, 4vw, 2rem);
    font-weight: 800;
    color: var(--primary-blue);
    margin: 0;
  }

  p {
    margin: 0.15rem 0 0.45rem;
    font-weight: 600;
    color: var(--text-secondary);
    letter-spacing: 0.04em;
  }

  span {
    font-size: 0.85rem;
    color: var(--text-secondary);
    opacity: 0.75;
  }
`;

const accentPulse = keyframes`
  0% {
    transform: scale(0.9);
    opacity: 0.4;
  }
  50% {
    transform: scale(1.15);
    opacity: 0.85;
  }
  100% {
    transform: scale(0.9);
    opacity: 0.4;
  }
`;

const StatGlow = styled.span`
  position: absolute;
  inset: -40%;
  background: radial-gradient(
    circle at center,
    rgba(58, 123, 213, 0.22),
    rgba(255, 255, 255, 0)
  );
  animation: ${accentPulse} 6.5s ease-in-out infinite;
  pointer-events: none;
  opacity: 0.55;
`;

const CodeCard = styled(motion.pre)`
  margin-top: clamp(1.2rem, 3.5vw, 2.3rem);
  padding: clamp(1.2rem, 3.5vw, 1.6rem);
  background: rgba(1, 22, 56, 0.92);
  color: #e8f1ff;
  border-radius: var(--radius-xl);
  border: 1px solid rgba(59, 130, 246, 0.25);
  box-shadow: 0 22px 38px rgba(6, 20, 65, 0.48);
  font-family: 'Fira Code', 'JetBrains Mono', monospace;
  font-size: clamp(0.75rem, 1.8vw, 0.9rem);
  line-height: 1.65;
  overflow-x: auto;
  position: relative;
  max-width: clamp(280px, 42vw, 360px);

  &:before {
    content: 'workflow.ts';
    position: absolute;
    top: 0.55rem;
    right: 1rem;
    font-size: 0.7rem;
    opacity: 0.45;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  code {
    display: block;
    white-space: pre;
  }

  @media (max-width: 1100px) {
    display: none;
  }

  @media (max-height: 860px) {
    display: none;
  }

  @media (max-width: 992px) {
    margin-inline: auto;
  }
`;

const orbit = keyframes`
  0% {
    transform: rotate(0deg) translateY(-4px);
  }
  50% {
    transform: rotate(180deg) translateY(6px);
  }
  100% {
    transform: rotate(360deg) translateY(-4px);
  }
`;

const FloatingIcon = styled(motion.div)`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: clamp(42px, 5vw, 58px);
  height: clamp(42px, 5vw, 58px);
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.85);
  border: 1px solid rgba(58, 123, 213, 0.25);
  color: var(--accent-primary);
  box-shadow: 0 14px 30px rgba(0, 40, 120, 0.16);
  z-index: 3;
  animation: ${orbit} ${(p) => p.$orbit ?? 14}s linear infinite;
  transform-origin: center;

  [data-theme='dark'] & {
    background: rgba(9, 16, 32, 0.85);
    border-color: rgba(108, 149, 255, 0.25);
    box-shadow: 0 18px 36px rgba(4, 10, 28, 0.6);
  }
`;

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: '50%', y: '50%' });

  const heroStats = [
    {
      value: '12+',
      label: 'Production launches',
      meta: 'From fintech dashboards to civic platforms',
    },
    {
      value: '40%',
      label: 'Performance gains',
      meta: 'Average Lighthouse uplift after refactors',
    },
    {
      value: '8',
      label: 'Hackathons & wins',
      meta: 'Collaboration, rapid ideation & delivery',
    },
  ];

  const floatingBits = [
    {
      id: 'code',
      icon: <FaCode size={20} />,
      top: '16%',
      left: '12%',
      orbit: 18,
      delay: 0,
    },
    {
      id: 'ts',
      icon: <SiTypescript size={22} />,
      top: '68%',
      left: '8%',
      orbit: 22,
      delay: 0.4,
    },
    {
      id: 'next',
      icon: <SiNextdotjs size={20} />,
      top: '22%',
      right: '14%',
      orbit: 16,
      delay: 0.2,
    },
    {
      id: 'rocket',
      icon: <FaRocket size={18} />,
      top: '72%',
      right: '12%',
      orbit: 20,
      delay: 0.6,
    },
  ];

  const particlePositions = [
    { top: '22%', left: '28%', duration: 9 },
    { top: '66%', left: '32%', duration: 12 },
    { top: '18%', left: '72%', duration: 10 },
    { top: '74%', left: '58%', duration: 7 },
    { top: '42%', left: '86%', duration: 9 },
  ];

  return (
    <HeroSection
      id="home"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setMousePos({ x: `${x}%`, y: `${y}%` });
      }}
      style={{ ['--mx']: mousePos.x, ['--my']: mousePos.y }}
    >
      <div className="spotlight" aria-hidden="true" />
      {particlePositions.map((particle, index) => (
        <Particle key={`particle-${index}`} {...particle} />
      ))}
      {floatingBits.map(({ id, icon, top, left, right, orbit, delay }) => (
        <FloatingIcon
          key={id}
          style={{ top, left, right }}
          $orbit={orbit}
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: 'mirror',
            delay,
          }}
          aria-hidden="true"
        >
          {icon}
        </FloatingIcon>
      ))}
      <HeroContainer>
        <ProfileContainer>
          <ProfileBorder>
            <ProfileImage
              src="/assets/passport.jpg"
              alt="Denis Mwanzia portrait"
              width="260"
              height="260"
              decoding="async"
              fetchpriority="high"
            />
          </ProfileBorder>
        </ProfileContainer>

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
              Full-stack developer turning ideas into{' '}
              <span className="accent">fast, inclusive, production-grade</span>{' '}
              products.
            </HeroSubtitle>
            <HeroNarrative>
              Focused on <strong>developer velocity</strong>,{' '}
              <strong>experience design</strong>, and resilient releases that
              make a measurable dent.
            </HeroNarrative>
            <HeroActions>
              <PrimaryButton
                href="/assets/resume.pdf"
                download
                aria-label="Download CV (PDF)"
              >
                <FaDownload /> Download CV
              </PrimaryButton>
              <SecondaryButton
                href="#contact"
                aria-label="Go to contact section"
              >
                🚀 Let's Connect
              </SecondaryButton>
            </HeroActions>

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
            <StatsGrid>
              {heroStats.map((stat) => (
                <StatCard
                  key={stat.label}
                  whileHover={{ y: -6, rotateX: 4 }}
                  transition={{ type: 'spring', stiffness: 180, damping: 16 }}
                >
                  <StatGlow />
                  <h4>{stat.value}</h4>
                  <p>{stat.label}</p>
                  <span>{stat.meta}</span>
                </StatCard>
              ))}
            </StatsGrid>
            <CodeCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              aria-label="Preview of Denis' workflow pseudo code"
            >
              <code>
                {`const denis = engineer({
  stack: ['React', 'Node', 'TypeScript', 'GraphQL'],
  ethos: ['ship fast', 'measure impact', 'delight users'],
  currently: 'Building dependable web apps at lightning pace',
});

denis.launch({ day: 'Today', focus: 'Developer Experience' });`}
              </code>
            </CodeCard>
          </motion.div>
        </HeroContent>
      </HeroContainer>
    </HeroSection>
  );
};

export default Hero;
