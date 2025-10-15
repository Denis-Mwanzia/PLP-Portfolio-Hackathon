import React from 'react';
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

const AppContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, var(--off-white) 0%, var(--white) 100%);
`;

const App = () => {
  return (
    <ThemeProvider>
      <ErrorBoundary>
        <AppContainer>
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
            <meta
              property="og:url"
              content="https://denis-mwanzia-portfolio.netlify.app/"
            />
            <meta
              property="og:title"
              content="Denis Mwanzia - Full-Stack Developer & IT Specialist"
            />
            <meta
              property="og:description"
              content="Portfolio of Denis Mwanzia, a passionate Full-Stack Developer and IT Specialist based in Kenya."
            />
            <meta
              property="og:image"
              content="https://denis-mwanzia-portfolio.netlify.app/assets/passport.jpg"
            />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta
              property="twitter:url"
              content="https://denis-mwanzia-portfolio.netlify.app/"
            />
            <meta
              property="twitter:title"
              content="Denis Mwanzia - Full-Stack Developer & IT Specialist"
            />
            <meta
              property="twitter:description"
              content="Portfolio of Denis Mwanzia, a passionate Full-Stack Developer and IT Specialist based in Kenya."
            />
            <meta
              property="twitter:image"
              content="https://denis-mwanzia-portfolio.netlify.app/assets/passport.jpg"
            />

            <link
              rel="canonical"
              href="https://denis-mwanzia-portfolio.netlify.app/"
            />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
              rel="preconnect"
              href="https://fonts.gstatic.com"
              crossOrigin="anonymous"
            />
          </Helmet>

          <Header />
          <Hero />
          <About />
          <Resume />
          <Projects />
          <Contact />
          <Footer />
          <ScrollToTop />
        </AppContainer>
      </ErrorBoundary>
    </ThemeProvider>
  );
};

export default App;
