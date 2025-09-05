import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: var(--dark-blue);
  color: var(--white);
  padding: clamp(3rem, 6vw, 4rem) 0 var(--space-xl);
`;

const Container = styled.div`
  max-width: var(--container-xl);
  margin: 0 auto;
  padding: 0 clamp(1rem, 5vw, 2rem);
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: clamp(2rem, 5vw, 3rem);
  margin-bottom: var(--space-2xl);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: var(--space-xl);
  }
`;

const FooterAbout = styled.div`
  flex: 1;
`;

const FooterTitle = styled.h3`
  font-size: clamp(1.2rem, 3vw, 1.5rem);
  margin-bottom: var(--space-lg);
  font-weight: 600;
`;

const FooterDescription = styled.p`
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: var(--space-lg);
  line-height: 1.7;
  font-size: clamp(0.9rem, 2vw, 1rem);
`;

const SocialLinks = styled.div`
  display: flex;
  gap: var(--space-md);
  margin: 0;
`;

const SocialLink = styled.a`
  color: var(--white);
  font-size: clamp(1.2rem, 3vw, 1.5rem);
  transition: all 0.3s ease;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  text-decoration: none;

  &:hover {
    color: var(--secondary-blue);
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }
`;

const FooterLinks = styled.div`
  flex: 1;
`;

const FooterLinksList = styled.ul`
  list-style: none;
  padding: 0;
`;

const FooterLinksItem = styled.li`
  margin-bottom: var(--space-md);
`;

const FooterLink = styled.a`
  color: rgba(255, 255, 255, 0.8);
  transition: color 0.3s ease;
  font-size: clamp(0.9rem, 2vw, 1rem);
  text-decoration: none;

  &:hover {
    color: var(--secondary-blue);
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: var(--space-xl);
  text-align: center;
  color: rgba(255, 255, 255, 0.7);
  font-size: clamp(0.8rem, 2vw, 0.9rem);
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const quickLinks = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'projects', label: 'Projects', href: '#projects' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    {
      id: 'github',
      icon: FaGithub,
      href: 'https://github.com/Denis-Mwanzia',
      label: 'GitHub',
    },
    {
      id: 'linkedin',
      icon: FaLinkedin,
      href: 'https://www.linkedin.com/in/denis-mwanzia',
      label: 'LinkedIn',
    },
    {
      id: 'twitter',
      icon: FaTwitter,
      href: '#',
      label: 'Twitter',
    },
    {
      id: 'instagram',
      icon: FaInstagram,
      href: '#',
      label: 'Instagram',
    },
  ];

  const handleLinkClick = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        const headerHeight = 80;
        const targetPosition = element.offsetTop - headerHeight - 20;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <FooterContainer>
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, threshold: 0.1 }}
        >
          <FooterContent>
            <motion.div variants={itemVariants}>
              <FooterAbout>
                <FooterTitle>Denis Mwanzia</FooterTitle>
                <FooterDescription>
                  Full‑stack developer focused on scalable, accessible web apps.
                  Experienced across web based applications, AI‑assisted features, and
                  internal tools. Pragmatic about performance, DX and
                  maintainability.
                </FooterDescription>
                <SocialLinks>
                  {socialLinks.map((link) => (
                    <SocialLink
                      key={link.id}
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : '_self'}
                      rel={
                        link.href.startsWith('http')
                          ? 'noopener noreferrer'
                          : ''
                      }
                      aria-label={link.label}
                    >
                      <link.icon />
                    </SocialLink>
                  ))}
                </SocialLinks>
              </FooterAbout>
            </motion.div>

            <motion.div variants={itemVariants}>
              <FooterLinks>
                <FooterTitle>Quick Links</FooterTitle>
                <FooterLinksList>
                  {quickLinks.map((link) => (
                    <FooterLinksItem key={link.id}>
                      <FooterLink
                        href={link.href}
                        onClick={(e) => handleLinkClick(e, link.href)}
                      >
                        {link.label}
                      </FooterLink>
                    </FooterLinksItem>
                  ))}
                </FooterLinksList>
              </FooterLinks>
            </motion.div>
          </FooterContent>

          <motion.div variants={itemVariants}>
            <FooterBottom>
              <p>&copy; {currentYear} Denis Mwanzia. All rights reserved.</p>
            </FooterBottom>
          </motion.div>
        </motion.div>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
