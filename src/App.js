import React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
import { ThemeProvider } from './context/ThemeContext';
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
      <AppContainer>
        <Helmet>
          <title>Denis Mwanzia - Full-Stack Developer & IT Specialist</title>
          <meta
            name="description"
            content="Portfolio of Denis Mwanzia, a passionate Full-Stack Developer and IT Specialist based in Kenya. Showcasing web development projects, skills, and experience."
          />
          <meta
            name="keywords"
            content="web developer, full-stack developer, react, javascript, portfolio, denis mwanzia, kenya"
          />
          <meta name="author" content="Denis Mwanzia" />
          <link
            rel="canonical"
            href="https://denis-mwanzia-portfolio.netlify.app/"
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
    </ThemeProvider>
  );
};

export default App;
