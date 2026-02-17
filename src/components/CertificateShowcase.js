import React, { useState, useMemo } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEye, FaDownload, FaTimes } from 'react-icons/fa';
import { CERTIFICATIONS_DATA } from '../utils/constants';
import { useInView } from 'react-intersection-observer';

const CertificateGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: clamp(1.5rem, 4vw, 2rem);
  margin-top: clamp(2rem, 5vw, 3rem);

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: clamp(1rem, 3vw, 1.5rem);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: var(--space-lg);
  }
`;

const CertificateCard = styled(motion.div)`
  position: relative;
  background: var(--surface-card);
  border: 1px solid var(--surface-outline);
  border-radius: var(--radius-lg);
  padding: clamp(1.25rem, 3vw, 1.5rem);
  cursor: pointer;
  transition: all 0.3s ease;
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
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: left 0.5s ease;
  }

  &:hover {
    border-color: var(--accent-primary);
    box-shadow: 0 12px 30px var(--shadow-medium);
    transform: translateY(-4px);
  }

  &:hover::before {
    left: 100%;
  }
`;

const CertificateIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: var(--space-md);
  color: var(--accent-primary);
`;

const CertificateTitle = styled.h4`
  font-size: clamp(1rem, 2.5vw, 1.15rem);
  font-weight: 700;
  margin: 0 0 var(--space-sm);
  color: var(--text-primary);
  line-height: 1.3;
`;

const CertificateIssuer = styled.p`
  font-size: 0.9rem;
  color: var(--text-secondary);
  margin: 0 0 var(--space-sm);
  font-weight: 500;
`;

const CertificateDate = styled.span`
  display: inline-block;
  background: var(--chip-bg);
  color: var(--accent-primary);
  padding: 0.25rem 0.75rem;
  border-radius: 999px;
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: var(--space-md);
`;

const SkillsTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: var(--space-md);
`;

const SkillTag = styled.span`
  display: inline-block;
  background: rgba(58, 123, 213, 0.15);
  color: var(--accent-primary);
  padding: 0.35rem 0.65rem;
  border-radius: var(--radius-full);
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.02em;

  [data-theme='dark'] & {
    background: rgba(108, 149, 255, 0.2);
    color: var(--accent-primary);
  }
`;

const ActionButtons = styled.div`
  display: flex;
  gap: var(--space-sm);
  margin-top: var(--space-lg);
  padding-top: var(--space-lg);
  border-top: 1px solid var(--surface-outline);
`;

const ActionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  flex: 1;
  padding: 0.6rem;
  background: var(--accent-primary);
  color: white;
  border: none;
  border-radius: var(--radius-md);
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 12px rgba(58, 123, 213, 0.3);
  }

  &:active {
    transform: scale(0.98);
  }

  svg {
    font-size: 0.9rem;
  }
`;

const ModalOverlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  padding: var(--space-md);
`;

const ModalContent = styled(motion.div)`
  position: relative;
  background: var(--surface-card);
  border-radius: var(--radius-xl);
  padding: clamp(2rem, 5vw, 2.5rem);
  max-width: 500px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
`;

const CloseButton = styled.button`
  position: absolute;
  top: var(--space-lg);
  right: var(--space-lg);
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--text-secondary);
  transition: color 0.3s ease;
  padding: var(--space-sm);

  &:hover {
    color: var(--accent-primary);
  }
`;

const ModalTitle = styled.h3`
  font-size: clamp(1.25rem, 3vw, 1.5rem);
  font-weight: 700;
  margin: 0 2.5rem 0 0 var(--space-lg);
  color: var(--text-primary);
`;

const ModalDescription = styled.p`
  margin: var(--space-md) 0;
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--text-secondary);
`;

const ModalDetail = styled.p`
  font-size: 0.9rem;
  margin: var(--space-md) 0;
  color: var(--text-secondary);

  strong {
    color: var(--text-primary);
    font-weight: 600;
  }
`;

const ModalSkills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: var(--space-lg) 0;
`;

const CertificateShowcase = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const certificates = useMemo(() => CERTIFICATIONS_DATA, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const handleViewCertificate = (cert) => {
    setSelectedCert(cert);
  };

  const handleDownload = (url, title) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = `${title}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <CertificateGrid>
          {certificates.map((cert) => (
            <motion.div key={cert.credentialId} variants={cardVariants}>
              <CertificateCard
                onClick={() => handleViewCertificate(cert)}
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              >
                <CertificateIcon>📜</CertificateIcon>
                <CertificateTitle>{cert.title}</CertificateTitle>
                <CertificateIssuer>{cert.issuer}</CertificateIssuer>
                <CertificateDate>{cert.date}</CertificateDate>

                {cert.skills && cert.skills.length > 0 && (
                  <SkillsTags>
                    {cert.skills.slice(0, 3).map((skill, idx) => (
                      <SkillTag key={idx}>{skill}</SkillTag>
                    ))}
                    {cert.skills.length > 3 && (
                      <SkillTag>+{cert.skills.length - 3}</SkillTag>
                    )}
                  </SkillsTags>
                )}

                <ActionButtons>
                  <ActionButton
                    onClick={(e) => {
                      e.stopPropagation();
                      handleViewCertificate(cert);
                    }}
                    title="View certificate details"
                  >
                    <FaEye /> View
                  </ActionButton>
                  <ActionButton
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDownload(cert.pdfUrl, cert.title);
                    }}
                    title="Download certificate PDF"
                  >
                    <FaDownload /> Download
                  </ActionButton>
                </ActionButtons>
              </CertificateCard>
            </motion.div>
          ))}
        </CertificateGrid>
      </motion.div>

      <AnimatePresence>
        {selectedCert && (
          <ModalOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setSelectedCert(null)}
          >
            <ModalContent
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
            >
              <CloseButton
                onClick={() => setSelectedCert(null)}
                aria-label="Close modal"
              >
                <FaTimes />
              </CloseButton>

              <ModalTitle>{selectedCert.title}</ModalTitle>
              <ModalDetail>
                <strong>Issuer:</strong> {selectedCert.issuer}
              </ModalDetail>
              <ModalDetail>
                <strong>Date:</strong> {selectedCert.date}
              </ModalDetail>

              {selectedCert.credentialId && (
                <ModalDetail>
                  <strong>Credential ID:</strong> {selectedCert.credentialId}
                </ModalDetail>
              )}

              {selectedCert.description && (
                <>
                  <h4 style={{ marginTop: 'var(--space-lg)' }}>Description</h4>
                  <ModalDescription>{selectedCert.description}</ModalDescription>
                </>
              )}

              {selectedCert.skills && selectedCert.skills.length > 0 && (
                <>
                  <h4 style={{ marginTop: 'var(--space-lg)' }}>Skills Covered</h4>
                  <ModalSkills>
                    {selectedCert.skills.map((skill, idx) => (
                      <SkillTag key={idx}>{skill}</SkillTag>
                    ))}
                  </ModalSkills>
                </>
              )}

              <ActionButtons style={{ marginTop: 'var(--space-2xl)' }}>
                <ActionButton
                  onClick={() =>
                    handleDownload(selectedCert.pdfUrl, selectedCert.title)
                  }
                >
                  <FaDownload /> Download Certificate
                </ActionButton>
              </ActionButtons>
            </ModalContent>
          </ModalOverlay>
        )}
      </AnimatePresence>
    </>
  );
};

export default CertificateShowcase;
