import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaServer, FaShieldAlt } from 'react-icons/fa';

const Section = styled.section`
  padding: clamp(2.5rem, 7vw, 4rem) 0;
  background: var(--section-surface);
  transition: background 0.6s ease;
  color: var(--text-primary);
`;

const Container = styled.div`
  max-width: var(--container-xl);
  margin: 0 auto;
  padding: 0 clamp(1rem, 5vw, 2rem);
`;

const Title = styled.h3`
  text-align: center;
  font-size: clamp(1.6rem, 4vw, 2rem);
  font-weight: 800;
  margin-bottom: var(--space-2xl);
  background: linear-gradient(90deg, var(--primary-blue), var(--secondary-blue));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: clamp(1rem, 3vw, 1.5rem);

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled(motion.div)`
  border: 1px solid var(--surface-outline);
  border-radius: var(--radius-2xl);
  padding: clamp(1rem, 3vw, 1.5rem);
  background: var(--surface-card);
  box-shadow: 0 12px 28px var(--shadow-light);
  transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 18px 36px var(--shadow-medium);
    background: var(--surface-card-hover);
  }
`;

const CardTitle = styled.h4`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: clamp(1.05rem, 2.5vw, 1.2rem);
  margin-bottom: var(--space-sm);

  svg {
    color: var(--accent-primary);
  }
`;

const List = styled.ul`
  margin: 0;
  padding-left: 1rem;
  color: var(--text-secondary);
  line-height: 1.8;
`;

const Capabilities = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.98 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, delay: i * 0.15, ease: 'easeOut' },
    }),
  };

  return (
    <Section aria-labelledby="capabilities-heading">
      <Container>
        <Title id="capabilities-heading">Capabilities</Title>
        <Grid as={motion.div} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
          {[
            {
              icon: <FaLaptopCode />,
              title: 'Front‑End Engineering',
              points: ['Accessible, responsive UI', 'Design systems & theming', 'Performance budgeting'],
            },
            {
              icon: <FaServer />,
              title: 'Back‑End & APIs',
              points: ['RESTful APIs', 'Auth, RBAC, security', 'Relational & document DBs'],
            },
            {
              icon: <FaShieldAlt />,
              title: 'Quality & Delivery',
              points: ['Testing & a11y checks', 'CI/CD & observability', 'SEO & analytics'],
            },
          ].map((card, index) => (
            <Card key={card.title} custom={index} variants={cardVariants} whileHover={{ y: -6 }} transition={{ type: 'spring', stiffness: 220, damping: 18 }}>
              <CardTitle>
                {card.icon} {card.title}
              </CardTitle>
              <List>
                {card.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </List>
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default Capabilities;

