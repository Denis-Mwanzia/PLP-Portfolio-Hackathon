import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${(p) => (p.$scrolled ? '0.8rem' : 'var(--space-lg)')} 5%;
  position: sticky;
  top: 0;
  background: var(--white);
  backdrop-filter: blur(10px);
  z-index: 1000;
  box-shadow: ${(p) => (p.$scrolled ? '0 4px 24px var(--shadow-medium)' : '0 2px 20px var(--shadow-light)')};
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

const RightCta = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-lg);

  @media (max-width: 768px) {
    display: none;
  }
`;

const ThemeToggle = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 999px;
  border: 1px solid var(--surface-outline);
  background: var(--surface-card);
  color: var(--accent-primary);
  cursor: pointer;
  transition: all 0.25s ease;
  box-shadow: 0 4px 12px var(--shadow-light);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 18px var(--shadow-medium);
  }
`;

const NavLink = styled.a`
  position: relative;
  font-size: var(--text-lg);
  font-weight: 600;
  color: var(--text-gray);
  text-decoration: none;
  padding: var(--space-sm) 0;
  transition: color 0.3s ease;
  outline: none;

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

  &:focus-visible {
    color: var(--primary-blue);
  }

  &:focus-visible::after {
    width: 100%;
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
  right: 0;
  width: min(320px, 85vw);
  height: 100vh;
  background: var(--surface-card);
  box-shadow: -5px 0 20px var(--shadow-medium);
  padding: 5rem clamp(1.25rem, 6vw, 2rem);
  z-index: 1000;
  will-change: transform;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  html[data-theme='dark'] & {
    background: rgba(10, 18, 34, 0.96);
    box-shadow: -5px 0 28px rgba(3, 8, 20, 0.6);
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const MobileOverlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: rgba(3, 8, 20, 0.45);
  backdrop-filter: blur(4px);
  z-index: 900;
`;

const MobileNavLinks = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
  flex: 1;
  margin: 0;
  padding: 0;
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
  outline: none;

  &:hover,
  &.active {
    color: var(--primary-blue);
    padding-left: var(--space-md);
  }

  &:focus-visible {
    color: var(--primary-blue);
    padding-left: var(--space-md);
  }
`;

const MobileMenuFooter = styled.div`
  margin-top: auto;
  padding-top: var(--space-xl);
  border-top: 1px solid rgba(58, 123, 213, 0.14);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-md);
`;

const ThemeMeta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.15rem;

  span:first-child {
    font-size: var(--text-sm);
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: rgba(94, 112, 148, 0.82);
  }

  span:last-child {
    font-size: var(--text-base);
    font-weight: 600;
    color: var(--text-primary);
  }

  html[data-theme='dark'] & span:first-child {
    color: rgba(197, 210, 245, 0.72);
  }
`;

const MobileThemeToggle = styled(ThemeToggle)`
  width: 44px;
  height: 44px;
  border-width: 1.5px;
`;

const Header = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [previousFocus, setPreviousFocus] = useState(null);
  const mobileNavRef = React.useRef(null);
  const mobileToggleRef = React.useRef(null);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'resume', label: 'Resume' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
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
    setIsMobileNavOpen((open) => !open);
  };

  const closeMobileNav = () => {
    setIsMobileNavOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMobileNavOpen) {
        setIsMobileNavOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileNavOpen]);

  const handleNavClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    closeMobileNav();

    if (element) {
      const headerHeight = scrolled ? 64 : 80;
      const targetPosition = element.offsetTop - headerHeight - 20;

      requestAnimationFrame(() => {
        window.scrollTo({
          top: targetPosition < 0 ? 0 : targetPosition,
          left: 0,
          behavior: 'smooth',
        });
      });
    }
  };

  // Manage focus trap and keyboard interactions for mobile nav
  useEffect(() => {
    if (isMobileNavOpen) {
      setPreviousFocus(document.activeElement);
      const navEl = mobileNavRef.current;
      if (!navEl) return;

      // Prevent page from shifting horizontally when menu opens
      const currentScrollTop = window.scrollY || document.documentElement.scrollTop;
      window.scrollTo({ top: currentScrollTop, left: 0, behavior: 'auto' });
      document.documentElement.scrollLeft = 0;
      document.body.scrollLeft = 0;
      const prevBodyOverflow = document.body.style.overflow;
      const prevHtmlOverflow = document.documentElement.style.overflow;
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';

      const focusableSelectors =
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';
      const focusable = Array.from(navEl.querySelectorAll(focusableSelectors));
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      first && first.focus();

      const onKeyDown = (e) => {
        if (e.key === 'Escape') {
          e.preventDefault();
          closeMobileNav();
          mobileToggleRef.current && mobileToggleRef.current.focus();
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

      return () => {
        document.removeEventListener('keydown', onKeyDown);
        document.body.style.overflow = prevBodyOverflow;
        document.documentElement.style.overflow = prevHtmlOverflow;
        document.documentElement.scrollLeft = 0;
        document.body.scrollLeft = 0;
        if (previousFocus && previousFocus.focus) previousFocus.focus();
      };
    }
  }, [isMobileNavOpen, previousFocus]);

  return (
    <HeaderContainer $scrolled={scrolled}>
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

      <RightCta>
        <ThemeToggle
          onClick={toggleTheme}
          aria-label={`Activate ${theme === 'light' ? 'dark' : 'light'} theme`}
          title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? <FaMoon size={16} /> : <FaSun size={16} />}
        </ThemeToggle>
      </RightCta>

      <MobileNavToggle
        onClick={toggleMobileNav}
        aria-label="Toggle mobile navigation"
        aria-haspopup="menu"
        aria-expanded={isMobileNavOpen}
        aria-controls="mobile-navigation"
        ref={mobileToggleRef}
      >
        <HamburgerLine />
        <HamburgerLine />
        <HamburgerLine />
      </MobileNavToggle>

      <AnimatePresence>
        {isMobileNavOpen && (
          <>
            <MobileOverlay
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              onClick={closeMobileNav}
            />
            <MobileNav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.35, ease: [0.22, 0.61, 0.36, 1] }}
              id="mobile-navigation"
              role="dialog"
              aria-modal="true"
              aria-label="Site navigation"
              ref={mobileNavRef}
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
              <MobileMenuFooter>
                <ThemeMeta>
                  <span>Theme</span>
                  <span>{theme === 'light' ? 'Light mode' : 'Dark mode'}</span>
                </ThemeMeta>
                <MobileThemeToggle
                  onClick={toggleTheme}
                  aria-label={`Activate ${theme === 'light' ? 'dark' : 'light'} theme`}
                  title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
                >
                  {theme === 'light' ? <FaMoon size={16} /> : <FaSun size={16} />}
                </MobileThemeToggle>
              </MobileMenuFooter>
            </MobileNav>
          </>
        )}
      </AnimatePresence>
    </HeaderContainer>
  );
};

export default Header;
