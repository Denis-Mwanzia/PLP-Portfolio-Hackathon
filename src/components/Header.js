import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--space-lg) 5%;
  position: sticky;
  top: 0;
  background: rgba(255, 255, 255, 0.96);
  backdrop-filter: blur(10px);
  z-index: 1000;
  box-shadow: 0 2px 20px var(--shadow-light);
  transition: all 0.3s ease;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  font-size: clamp(1.25rem, 2.5vw, 1.8rem);
  font-weight: 700;
  color: var(--primary-blue);
  cursor: default;
`;

const LogoDot = styled.span`
  display: inline-block;
  width: 8px;
  height: 8px;
  background: var(--secondary-blue);
  border-radius: 50%;
  margin-left: 4px;
  animation: pulse 2s infinite;
`;

const DesktopNav = styled.nav`
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  gap: var(--space-xl);
  list-style: none;
`;

const NavLink = styled.a`
  position: relative;
  font-size: var(--text-lg);
  font-weight: 600;
  color: var(--text-gray);
  text-decoration: none;
  padding: var(--space-sm) 0;
  transition: color 0.3s ease;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(
      90deg,
      var(--primary-blue),
      var(--secondary-blue)
    );
    transition: width 0.3s ease;
  }

  &:hover,
  &.active {
    color: var(--primary-blue);
  }

  &:hover::after,
  &.active::after {
    width: 100%;
  }
`;

const MobileNavToggle = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: var(--space-sm);
  z-index: 1001;

  @media (max-width: 768px) {
    display: block;
  }
`;

const HamburgerLine = styled.span`
  display: block;
  width: 25px;
  height: 2px;
  background: var(--primary-blue);
  margin: 5px 0;
  transition: all 0.3s ease;
`;

const MobileNav = styled(motion.nav)`
  position: fixed;
  top: 0;
  right: -100%;
  width: 280px;
  height: 100vh;
  background: var(--white);
  box-shadow: -5px 0 20px var(--shadow-medium);
  padding: 6rem var(--space-xl);
  transition: right 0.4s ease;
  z-index: 1000;

  &.active {
    right: 0;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const MobileNavLinks = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
`;

const MobileNavLink = styled.a`
  display: block;
  font-size: var(--text-xl);
  font-weight: 600;
  color: var(--text-gray);
  text-decoration: none;
  padding: var(--space-sm) 0;
  border-bottom: 1px solid rgba(58, 123, 213, 0.1);
  transition: all 0.3s ease;

  &:hover,
  &.active {
    color: var(--primary-blue);
    padding-left: var(--space-md);
  }
`;

const Header = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'resume', label: 'Resume' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems
        .map((item) => document.getElementById(item.id))
        .filter(Boolean);
      const scrollPosition = window.pageYOffset + 200;

      for (const section of sections) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  const closeMobileNav = () => {
    setIsMobileNavOpen(false);
  };

  const handleNavClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const targetPosition = element.offsetTop - headerHeight - 20;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
    }
    closeMobileNav();
  };

  return (
    <HeaderContainer>
      <Logo>
        <span>Denis</span>
        <LogoDot />
      </Logo>

      <DesktopNav>
        <NavLinks>
          {navItems.map((item) => (
            <li key={item.id}>
              <NavLink
                href={`#${item.id}`}
                className={activeSection === item.id ? 'active' : ''}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </NavLinks>
      </DesktopNav>

      <MobileNavToggle
        onClick={toggleMobileNav}
        aria-label="Toggle mobile navigation"
      >
        <HamburgerLine />
        <HamburgerLine />
        <HamburgerLine />
      </MobileNavToggle>

      <AnimatePresence>
        {isMobileNavOpen && (
          <MobileNav
            initial={{ right: '-100%' }}
            animate={{ right: 0 }}
            exit={{ right: '-100%' }}
            transition={{ duration: 0.4 }}
            className={isMobileNavOpen ? 'active' : ''}
          >
            <MobileNavLinks>
              {navItems.map((item) => (
                <li key={item.id}>
                  <MobileNavLink
                    href={`#${item.id}`}
                    className={activeSection === item.id ? 'active' : ''}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.id);
                    }}
                  >
                    {item.label}
                  </MobileNavLink>
                </li>
              ))}
            </MobileNavLinks>
          </MobileNav>
        )}
      </AnimatePresence>
    </HeaderContainer>
  );
};

export default Header;
