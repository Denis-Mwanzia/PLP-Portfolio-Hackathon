import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FaGraduationCap,
  FaBriefcase,
  FaUserCog,
  FaLaptopCode,
  FaServer,
  FaNetworkWired,
  FaTools,
  FaCertificate,
  FaEye,
  FaDownload,
  FaTimes,
} from 'react-icons/fa';

const ResumeSection = styled.section`
  position: relative;
  overflow: hidden;
  padding: clamp(3rem, 8vw, 5rem) 0;
  background: var(--section-surface);
  transition: background 0.6s ease;
`;

const Container = styled.div`
  max-width: var(--container-xl);
  margin: 0 auto;
  padding: 0 clamp(1rem, 5vw, 2rem);
`;

const SectionTitle = styled.div`
  text-align: center;
  margin-bottom: var(--space-2xl);
`;


const Title = styled.h3`
  font-size: clamp(2rem, 6vw, 2.5rem);
  font-weight: 800;
  margin-bottom: var(--space-md);
  text-transform: uppercase;
  background: linear-gradient(
    90deg,
    var(--primary-blue) 0%,
    var(--secondary-blue) 100%
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  letter-spacing: 1px;
`;

const SubTitle = styled.p`
  font-size: clamp(1.1rem, 3vw, 1.5rem);
  font-weight: 500;
  color: var(--medium-gray);
  position: relative;
  padding-bottom: var(--space-md);
`;

const ResumeTabs = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: clamp(1rem, 3vw, 2rem);
  margin-bottom: clamp(3rem, 8vw, 6rem);

  @media (max-width: 480px) {
    flex-direction: column;
    gap: var(--space-md);
  }
`;

const TabButton = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: var(--space-sm);
  font-size: clamp(1rem, 2.5vw, 1.18rem);
  font-weight: 600;
  padding: clamp(0.75rem, 2vw, 1rem) clamp(1.25rem, 3vw, 2rem);
  border-radius: var(--radius-full);
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  background: var(--white);
  color: var(--text-gray);
  border: 2px solid transparent;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.4),
      transparent
    );
    transition: left 0.5s ease;
  }

  &.active {
    color: var(--white);
    background: linear-gradient(
      135deg,
      var(--primary-blue),
      var(--secondary-blue)
    );
    border-color: var(--primary-blue);
    box-shadow: 0 8px 25px rgba(59, 130, 246, 0.3);
    transform: translateY(-2px);
  }

  &.active::before {
    display: none;
  }

  &:hover {
    transform: translateY(-3px) scale(1.02);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
    border-color: rgba(59, 130, 246, 0.3);
  }

  &:hover::before {
    left: 100%;
  }

  @media (max-width: 480px) {
    width: 100%;
    max-width: 250px;
    justify-content: center;
  }
`;

const TabContent = styled.div`
  position: relative;
  width: 100%;
  justify-content: center;
  margin-bottom: var(--space-xl);
  padding-top: 1rem;
`;

const TimelineContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: clamp(3rem, 8vw, 8rem);
  width: 100%;
  max-width: 800px;
  margin: 2rem auto 0;

  @media (max-width: 992px) {
    gap: var(--space-xl);
    margin-top: 1.5rem;
  }
`;

const TimelineLine = styled.div`
  background: var(--accent-primary);
  width: 2px;
  height: auto;
  min-height: 100%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;

  @media (max-width: 992px) {
    display: none;
  }
`;

const TimelineItem = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 120px;

  &::before {
    content: '';
    position: absolute;
    background: var(--accent-primary);
    width: 12px;
    height: 12px;
    border-radius: 50%;
    z-index: 2;
    border: 3px solid var(--surface-card);
    box-shadow: 0 2px 10px var(--shadow-light);
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    @media (max-width: 992px) {
      display: none;
    }
  }
`;

const ItemInfo = styled(motion.div)`
  position: absolute;
  width: clamp(280px, 42vw, 360px);
  display: flex;
  align-items: center;
  gap: var(--space-lg);
  background: var(--surface-card);
  padding: var(--space-lg);
  border-radius: var(--radius-lg);
  border: 1px solid var(--surface-outline);
  box-shadow: 0 12px 28px var(--shadow-light);
  transition: all 0.3s ease;
  z-index: 1;

  &.left {
    right: calc(50% + 2.5rem);
    text-align: left;
  }

  &.right {
    left: calc(50% + 2.5rem);
    text-align: left;
  }

  &:hover {
    transform: translateY(-3px);
    background: var(--surface-card-hover);
    box-shadow: 0 16px 32px var(--shadow-medium);
  }

  @media (max-width: 992px) {
    position: static !important;
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
  }
`;

const ItemIcon = styled.div`
  color: var(--accent-primary);
  font-size: clamp(1.5rem, 4vw, 2.15rem);
  flex-shrink: 0;
`;

const ItemContent = styled.div`
  flex: 1;
`;

const ItemTitle = styled.h5`
  color: var(--text-primary);
  font-size: clamp(1rem, 2.5vw, 1.13rem);
  font-weight: 600;
  margin-bottom: var(--space-sm);
  line-height: 1.3;
`;

const ItemSubtitle = styled.p`
  color: var(--text-secondary);
  font-size: clamp(0.9rem, 2vw, 1.07rem);
  margin-bottom: var(--space-md);
  line-height: 1.4;
`;

const ItemDate = styled.span`
  background: var(--chip-bg);
  color: var(--accent-primary);
  font-size: clamp(0.8rem, 2vw, 0.9rem);
  padding: var(--space-xs) var(--space-sm);
  border-radius: var(--radius-sm);
  font-weight: 500;
`;

const CredentialId = styled.div`
  margin-top: var(--space-sm);
  font-size: 0.8rem;
  color: var(--text-secondary);
  font-family: 'Courier New', monospace;
  background: var(--surface-glass);
  padding: var(--space-xs);
  border-radius: var(--radius-sm);
  display: inline-block;
`;

const SkillsTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-xs);
  margin-top: var(--space-sm);
`;

const SkillTag = styled.span`
  background: rgba(255, 255, 255, 0.18);
  color: #fff;
  font-size: 0.7rem;
  padding: 2px var(--space-xs);
  border-radius: var(--radius-sm);
  font-weight: 500;

  html[data-theme='light'] & {
    background: rgba(58, 123, 213, 0.12);
    color: var(--accent-primary);
  }
`;

// PDF Viewer Modal Components
const PDFModal = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  box-sizing: border-box;
`;

const ModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(5px);
`;

const ModalContainer = styled(motion.div)`
  position: relative;
  background-color: var(--surface-card);
  border-radius: var(--radius-xl);
  max-width: 90vw;
  max-height: 90vh;
  width: 100%;
  box-shadow: 0 20px 45px var(--shadow-medium);
  border: 1px solid var(--surface-outline);
  z-index: 1001;
  overflow: hidden;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  background: var(--surface-card-hover);
  border-bottom: 1px solid var(--surface-outline);
`;

const ModalTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0;
`;

const ModalActions = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const ActionButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: var(--radius-md);
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &.download {
    background: var(--accent-gradient);
    color: #fff;

    &:hover {
      filter: brightness(1.05);
    }
  }

  &.close {
    background: var(--surface-card);
    color: var(--text-primary);
    border: 1px solid var(--surface-outline);

    &:hover {
      background: var(--surface-card-hover);
      color: var(--accent-primary);
    }
  }
`;

const PDFViewer = styled.div`
  width: 100%;
  height: 70vh;
  min-height: 500px;
  position: relative;
`;

const PDFFrame = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 0 0 var(--radius-xl) var(--radius-xl);
`;

const ViewCertificateButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: var(--space-sm);
  padding: 0.5rem 1rem;
  background: var(--accent-gradient);
  color: #fff;
  border: none;
  border-radius: var(--radius-md);
  font-size: 0.8rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    filter: brightness(1.05);
    transform: translateY(-1px);
  }
`;

const SkillsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: clamp(1.5rem, 4vw, 2.5rem);
  padding: var(--space-lg);
  place-items: center;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    max-width: 500px;
    margin: 0 auto;
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const SkillCard = styled.div`
  position: relative;
  background: var(--accent-gradient);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: clamp(2rem, 5vw, 2.5rem);
  border-radius: var(--radius-xl);
  width: 100%;
  max-width: 420px;
  min-height: 380px;
  box-shadow: 0 18px 40px rgba(58, 123, 213, 0.35);
  color: #ffffff;
  transition: all 0.35s ease;

  &:hover {
    transform: translateY(-5px) scale(1.01);
    box-shadow: 0 26px 55px rgba(58, 123, 213, 0.45);
  }

  @media (max-width: 480px) {
    min-height: 320px;
    padding: var(--space-xl);
  }
`;

const SkillTitle = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  margin-bottom: var(--space-xl);
`;

const SkillIcon = styled.div`
  font-size: clamp(1.5rem, 4vw, 2rem);
  color: #fff;
`;

const SkillTitleText = styled.span`
  color: var(--white);
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  font-weight: 600;
  text-align: center;
`;

const SkillCategories = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: clamp(0.75rem, 2.5vw, 1rem);
  width: 100%;
  align-items: start;
  justify-items: stretch;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 480px) {
    gap: var(--space-sm);
  }
`;

const Skill = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  padding: var(--space-md);
  border-radius: var(--radius-md);
  background: rgba(255, 255, 255, 0.18);
  border: 1px solid rgba(255, 255, 255, 0.28);
  backdrop-filter: blur(12px);
  transition: all 0.3s ease, border 0.3s ease;
  width: 100%;
  min-height: 52px;

  &:hover {
    background: rgba(255, 255, 255, 0.26);
    border-color: rgba(255, 255, 255, 0.45);
    transform: translateY(-2px);
  }

  html[data-theme='light'] & {
    background: var(--surface-card);
    border: 1px solid var(--surface-outline);
    color: var(--text-secondary);
    box-shadow: 0 6px 18px var(--shadow-light);

    &:hover {
      background: var(--surface-card-hover);
      border-color: rgba(58, 123, 213, 0.15);
    }
  }
`;

const SkillIconSmall = styled.div`
  color: #ffffff;
  font-size: 1rem;
  flex-shrink: 0;

  html[data-theme='light'] & {
    color: var(--accent-primary);
  }
`;

const SkillInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
  width: 100%;
`;

const SkillName = styled.h5`
  font-size: clamp(0.9rem, 1.8vw, 1rem);
  font-weight: 600;
  color: inherit;
  white-space: normal;
  overflow-wrap: anywhere;
`;

const SkillLevel = styled.span`
  font-size: clamp(0.8rem, 2.5vw, 0.95rem);
  color: rgba(255, 255, 255, 0.8);

  html[data-theme='light'] & {
    color: var(--text-secondary);
  }
`;

const Resume = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const tabs = [
    { id: 'education', label: 'Education', icon: FaGraduationCap },
    { id: 'certifications', label: 'Certifications', icon: FaCertificate },
    { id: 'skills', label: 'Personal Skills', icon: FaUserCog },
    { id: 'experience', label: 'Resume', icon: FaBriefcase },
  ];

  const educationData = [
    {
      title: 'Bachelor Of Science in Information Technology',
      subtitle: 'Kabarak University',
      date: '2017-2023',
      icon: FaGraduationCap,
    },
    {
      title: 'SQL Training Certificate',
      subtitle: 'Learnomate Technologies Pvt Ltd',
      date: '2024-2024',
      icon: FaGraduationCap,
    },
    {
      title:
        'Cybersecurity and Emerging Technologies Awareness Training Certificate',
      subtitle: 'ICT Authority Smart Academy',
      date: '2024-2024',
      icon: FaGraduationCap,
    },
    {
      title: 'Software Development',
      subtitle: 'Power Learn Project Academy',
      date: '2025-Present',
      icon: FaGraduationCap,
    },
    {
      title: 'AI Literacy Certified Course',
      subtitle: 'Otermans Institute',
      date: '2025-2025',
      icon: FaGraduationCap,
    },
  ];

  const experienceData = [
    {
      title: 'Network Technician',
      subtitle: 'Tabasamu Fiber Networks Limited',
      date: '2023-2023',
      icon: FaBriefcase,
    },
    {
      title: 'Freelancer Web Developer & Networking Consultancy',
      subtitle: 'Self-Employed',
      date: '2023-Present',
      icon: FaBriefcase,
    },
  ];

  const certificationsData = [
    {
      title: 'SQL Training Certificate',
      subtitle: 'Learnomate Technologies Pvt Ltd',
      date: '2024',
      icon: FaCertificate,
      credentialId: 'SQL-2024-001',
      issuer: 'Learnomate Technologies',
      skills: ['SQL', 'Database Management', 'Data Analysis'],
      pdfUrl: '/assets/certificates/sql-certificate.pdf',
      description:
        'Comprehensive SQL training covering database design, query optimization, and data analysis techniques.',
    },
    {
      title: 'Cybersecurity and Emerging Technologies Awareness Training',
      subtitle: 'ICT Authority Smart Academy',
      date: '2024',
      icon: FaCertificate,
      credentialId: 'CYBER-2024-002',
      issuer: 'ICT Authority Kenya',
      skills: ['Cybersecurity', 'Network Security', 'Emerging Technologies'],
      pdfUrl: '/assets/certificates/cybersecurity-certificate.pdf',
      description:
        'Advanced training in cybersecurity fundamentals, threat assessment, and emerging technology security protocols.',
    },
    {
      title: 'AI Literacy Certified Course',
      subtitle: 'Otermans Institute',
      date: '2025',
      icon: FaCertificate,
      credentialId: 'OIAI25-ER35KX',
      issuer: 'Otermans Institute',
      skills: [
        'AI Literacy',
        'Artificial Intelligence',
        'Machine Learning',
        'AI Ethics',
      ],
      pdfUrl: '/assets/certificates/OIAI25-ER35KX.pdf',
      description:
        'Comprehensive AI literacy program covering artificial intelligence fundamentals, machine learning concepts, and AI ethics in modern technology.',
    },
    {
      title: 'Full-Stack Development — MERN Track',
      subtitle: 'Power Learn Project (PLP)',
      date: '2025',
      icon: FaCertificate,
      issuer: 'Power Learn Project Academy',
      skills: ['React', 'Node.js', 'MongoDB', 'Express', 'REST APIs', 'DevOps Fundamentals'],
      pdfUrl:
        '/assets/certificates/denis%20Full-Stack%20Development%20MERN%20Stack%20certificate.pdf',
      description:
        'Intensive full-stack engineering training focused on building production-grade MERN applications with modern tooling and best practices.',
    },
    {
      title: 'ICT Graduate Trainee Certification',
      subtitle: 'ICT Authority Smart Academy',
      date: '2024',
      icon: FaCertificate,
      issuer: 'ICT Authority Kenya',
      skills: ['ICT Infrastructure', 'Networking', 'Digital Transformation', 'Professional Development'],
      pdfUrl: '/assets/certificates/ICT%20Graduate.pdf',
      description:
        'Professional certification from the ICT Authority graduate program covering enterprise ICT infrastructure, support operations, and digital transformation initiatives.',
    },
  ];

  const skillsData = [
    {
      title: 'Front-End Developer',
      icon: FaLaptopCode,
      skills: [
        { name: 'HTML', level: 'Advanced' },
        { name: 'CSS', level: 'Advanced' },
        { name: 'Tailwind CSS', level: 'Intermediate' },
        { name: 'JavaScript', level: 'Intermediate' },
        { name: 'React', level: 'Basic' },
        { name: 'Bootstrap', level: 'Intermediate' },
      ],
    },
    {
      title: 'Back-End Developer',
      icon: FaServer,
      skills: [
        { name: 'Django', level: 'Intermediate' },
        { name: 'Node.js', level: 'Basic' },
        { name: 'Express.js', level: 'Basic' },
        { name: 'MySQL', level: 'Intermediate' },
        { name: 'MongoDB', level: 'Basic' },
        { name: 'Restful APIs', level: 'Intermediate' },
      ],
    },
    {
      title: 'Networking & IT Specialist',
      icon: FaNetworkWired,
      skills: [
        { name: 'Network Installation & Troubleshooting' },
        { name: 'MikroTik Configuration (Routing, Firewall, VPN)' },
        { name: 'FTTH Installation & Splicing' },
        { name: 'Linux & Windows Server Administration' },
      ],
    },
    {
      title: 'Tools & Technologies',
      icon: FaTools,
      skills: [
        { name: 'Git & GitHub' },
        { name: 'Docker & Virtualization' },
        { name: 'Bash & PowerShell Scripting' },
        { name: 'Cloud Computing (AWS)' },
      ],
    },
  ];

  const renderEducation = () => (
    <TimelineContainer>
      <TimelineLine />
      {educationData.map((item, index) => (
        <TimelineItem key={index}>
          <ItemInfo
            className={index % 2 === 0 ? 'left' : 'right'}
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <ItemIcon>
              <item.icon />
            </ItemIcon>
            <ItemContent>
              <ItemTitle>{item.title}</ItemTitle>
              <ItemSubtitle>{item.subtitle}</ItemSubtitle>
              <ItemDate>{item.date}</ItemDate>
            </ItemContent>
          </ItemInfo>
        </TimelineItem>
      ))}
    </TimelineContainer>
  );

  const renderExperience = () => (
    <TimelineContainer>
      <TimelineLine />
      {experienceData.map((item, index) => (
        <TimelineItem key={index}>
          <ItemInfo
            className={index % 2 === 0 ? 'left' : 'right'}
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <ItemIcon>
              <item.icon />
            </ItemIcon>
            <ItemContent>
              <ItemTitle>{item.title}</ItemTitle>
              <ItemSubtitle>{item.subtitle}</ItemSubtitle>
              <ItemDate>{item.date}</ItemDate>
            </ItemContent>
          </ItemInfo>
        </TimelineItem>
      ))}
    </TimelineContainer>
  );

  const openCertificateViewer = (certificate) => {
    setSelectedCertificate(certificate);
  };

  const closeCertificateViewer = () => {
    setSelectedCertificate(null);
  };

  const downloadCertificate = (certificate) => {
    const link = document.createElement('a');
    link.href = certificate.pdfUrl;
    link.download = `${certificate.title}.pdf`;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const renderCertifications = () => (
    <TimelineContainer>
      <TimelineLine />
      {certificationsData.map((cert, index) => (
        <TimelineItem key={index}>
          <ItemInfo
            className={index % 2 === 0 ? 'left' : 'right'}
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <ItemIcon>
              <cert.icon />
            </ItemIcon>
            <ItemContent>
              <ItemTitle>{cert.title}</ItemTitle>
              <ItemSubtitle>{cert.subtitle}</ItemSubtitle>
              <ItemDate>{cert.date}</ItemDate>
              {cert.credentialId && (
                <CredentialId>Credential ID: {cert.credentialId}</CredentialId>
              )}
              {cert.skills && (
                <SkillsTags>
                  {cert.skills.map((skill, skillIndex) => (
                    <SkillTag key={skillIndex}>{skill}</SkillTag>
                  ))}
                </SkillsTags>
              )}
              {cert.pdfUrl && (
                <ViewCertificateButton
                  onClick={() => openCertificateViewer(cert)}
                >
                  <FaEye />
                  View Certificate
                </ViewCertificateButton>
              )}
            </ItemContent>
          </ItemInfo>
        </TimelineItem>
      ))}
    </TimelineContainer>
  );

  const renderSkills = () => (
    <SkillsContainer>
      {skillsData.map((category, index) => (
        <SkillCard key={index}>
          <SkillTitle>
            <SkillIcon>
              <category.icon />
            </SkillIcon>
            <SkillTitleText>{category.title}</SkillTitleText>
          </SkillTitle>
          <SkillCategories>
            {category.skills.map((skill, skillIndex) => (
              <Skill key={skillIndex}>
                <SkillIconSmall>✓</SkillIconSmall>
                <SkillInfo>
                  <SkillName>{skill.name}</SkillName>
                  {skill.level && <SkillLevel>{skill.level}</SkillLevel>}
                </SkillInfo>
              </Skill>
            ))}
          </SkillCategories>
        </SkillCard>
      ))}
    </SkillsContainer>
  );

  const tabContent = [
    renderEducation(),
    renderCertifications(),
    renderSkills(),
    renderExperience(),
  ];

  return (
    <ResumeSection id="resume">
      <Container>
        <SectionTitle>
          <Title>My Resume</Title>
          <SubTitle>Combination of Education, Experience & Skills</SubTitle>
        </SectionTitle>

        <ResumeTabs>
          {tabs.map((tab, index) => (
            <TabButton
              key={tab.id}
              className={activeTab === index ? 'active' : ''}
              onClick={() => setActiveTab(index)}
            >
              <tab.icon />
              {tab.label}
            </TabButton>
          ))}
        </ResumeTabs>

        <TabContent ref={ref}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {tabContent[activeTab]}
            </motion.div>
          </AnimatePresence>
        </TabContent>

        {/* PDF Certificate Viewer Modal */}
        <AnimatePresence>
          {selectedCertificate && (
            <PDFModal
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ModalOverlay onClick={closeCertificateViewer} />
              <ModalContainer
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <ModalHeader>
                  <ModalTitle>{selectedCertificate.title}</ModalTitle>
                  <ModalActions>
                    <ActionButton
                      className="download"
                      onClick={() => downloadCertificate(selectedCertificate)}
                    >
                      <FaDownload />
                      Download
                    </ActionButton>
                    <ActionButton
                      className="close"
                      onClick={closeCertificateViewer}
                    >
                      <FaTimes />
                      Close
                    </ActionButton>
                  </ModalActions>
                </ModalHeader>
                <PDFViewer>
                  <PDFFrame
                    src={`${selectedCertificate.pdfUrl}#toolbar=1&navpanes=1&scrollbar=1`}
                    title={selectedCertificate.title}
                    onError={() => {
                      // Fallback for browsers that don't support PDF viewing
                      window.open(selectedCertificate.pdfUrl, '_blank');
                    }}
                  />
                </PDFViewer>
              </ModalContainer>
            </PDFModal>
          )}
        </AnimatePresence>
      </Container>
    </ResumeSection>
  );
};

export default Resume;
