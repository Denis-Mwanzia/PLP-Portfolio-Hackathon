import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
import { ThemeProvider } from './context/ThemeContext';
import ErrorBoundary from './components/ErrorBoundary';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import SectionDivider from './components/SectionDivider';
import ScrollProgress from './components/ScrollProgress';
import Capabilities from './components/Capabilities';
import { SITE_BASE_URL } from './utils/constants';

const AppContainer = styled.div`
  min-height: 100vh;
  background: var(--bg-page);
  color: var(--text-primary);
  transition:
    background 0.6s ease,
    color 0.6s ease;
`;

const BackgroundGrid = styled.div`
  position: fixed;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  background-image:
    radial-gradient(
      circle at 20% 10%,
      rgba(59, 130, 246, 0.08),
      transparent 30%
    ),
    radial-gradient(
      circle at 80% 30%,
      rgba(16, 185, 129, 0.06),
      transparent 30%
    ),
    radial-gradient(
      circle at 50% 80%,
      rgba(139, 92, 246, 0.05),
      transparent 30%
    ),
    linear-gradient(
      transparent 0,
      transparent 98%,
      rgba(58, 123, 213, 0.06) 100%
    ),
    linear-gradient(
      90deg,
      transparent 0,
      transparent 98%,
      rgba(58, 123, 213, 0.06) 100%
    );
  background-size:
    100% 100%,
    100% 100%,
    100% 100%,
    40px 40px,
    40px 40px;
  background-position:
    0 0,
    0 0,
    0 0,
    0 0,
    0 0;
  mix-blend-mode: normal;

  html[data-theme='dark'] & {
    background-image:
      radial-gradient(
        circle at 15% 12%,
        rgba(108, 149, 255, 0.16),
        transparent 32%
      ),
      radial-gradient(
        circle at 82% 25%,
        rgba(28, 216, 255, 0.12),
        transparent 35%
      ),
      radial-gradient(
        circle at 55% 88%,
        rgba(143, 92, 247, 0.12),
        transparent 35%
      ),
      linear-gradient(
        transparent 0,
        transparent 98%,
        rgba(108, 149, 255, 0.12) 100%
      ),
      linear-gradient(
        90deg,
        transparent 0,
        transparent 98%,
        rgba(28, 216, 255, 0.12) 100%
      );
  }
`;

const SkipLink = styled.a`
  position: absolute;
  top: -100px;
  left: 50%;
  transform: translateX(-50%);
  padding: 0.75rem 1.5rem;
  background: var(--primary-blue);
  color: white;
  font-weight: 600;
  border-radius: var(--radius-md);
  z-index: 9999;
  transition: top 0.2s ease;

  &:focus {
    top: 1rem;
    outline: 2px solid var(--secondary-blue);
    outline-offset: 2px;
  }
`;

const MainContent = styled.main`
  outline: none;
`;

const App = () => {
  const [errorBoundaryKey, setErrorBoundaryKey] = useState(0);
  const canonicalUrl = `${SITE_BASE_URL}/`;
  const previewImage = `${SITE_BASE_URL}/assets/passport.jpg`;

  return (
    <ThemeProvider>
      <ErrorBoundary
        key={errorBoundaryKey}
        onRetry={() => setErrorBoundaryKey((k) => k + 1)}
      >
        <AppContainer>
          <ScrollProgress />
          <BackgroundGrid />
          <Helmet>
            <title>Denis Mwanzia - Full-Stack Developer & IT Specialist</title>
            <meta
              name="description"
              content="Portfolio of Denis Mwanzia, a passionate Full-Stack Developer and IT Specialist based in Kenya. Showcasing web development projects, skills, and experience."
            />
            <meta
              name="keywords"
              content="web developer, full-stack developer, react, javascript, portfolio, denis mwanzia, kenya, mern stack, django, python"
            />
            <meta name="author" content="Denis Mwanzia" />
            <meta name="robots" content="index, follow" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={canonicalUrl} />
            <meta
              property="og:title"
              content="Denis Mwanzia - Full-Stack Developer & IT Specialist"
            />
            <meta
              property="og:description"
              content="Portfolio of Denis Mwanzia, a passionate Full-Stack Developer and IT Specialist based in Kenya."
            />
            <meta property="og:image" content={previewImage} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={canonicalUrl} />
            <meta
              property="twitter:title"
              content="Denis Mwanzia - Full-Stack Developer & IT Specialist"
            />
            <meta
              property="twitter:description"
              content="Portfolio of Denis Mwanzia, a passionate Full-Stack Developer and IT Specialist based in Kenya."
            />
            <meta property="twitter:image" content={previewImage} />

            <link rel="canonical" href={canonicalUrl} />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
              rel="preconnect"
              href="https://fonts.gstatic.com"
              crossOrigin="anonymous"
            />
            <script type="application/ld+json">
              {JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'Person',
                name: 'Denis Mwanzia',
                url: canonicalUrl,
                image: previewImage,
                jobTitle: 'Full-Stack Developer & IT Specialist',
                sameAs: [
                  'https://www.linkedin.com/in/denis-mwanzia',
                  'https://github.com/Denis-Mwanzia',
                ],
              })}
            </script>
            <script type="application/ld+json">
              {JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'WebSite',
                name: 'Denis Mwanzia Portfolio',
                url: canonicalUrl,
                potentialAction: {
                  '@type': 'SearchAction',
                  target: `${SITE_BASE_URL}/?q={search_term_string}`,
                  'query-input': 'required name=search_term_string',
                },
              })}
            </script>
          </Helmet>

          <SkipLink href="#main-content">Skip to main content</SkipLink>

          <Header />
          <MainContent id="main-content" tabIndex={-1}>
            <Hero />
            <SectionDivider />
            <About />
            <Capabilities />
            <Resume />
            <SectionDivider />
            <Projects />
            <SectionDivider flip />
            <Contact />
          </MainContent>
          <Footer />
          <ScrollToTop />
        </AppContainer>
      </ErrorBoundary>
    </ThemeProvider>
  );
};

export default App;
