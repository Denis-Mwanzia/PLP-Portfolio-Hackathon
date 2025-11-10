import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import ParallaxShapes from './ParallaxShapes';
import { useInView } from 'react-intersection-observer';
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
} from 'react-icons/fa';

// ===== Styled Components =====
const ContactSection = styled.section`
  background: var(--section-surface);
  padding: clamp(3rem, 8vw, 5rem) 0;
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

const ContactContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: clamp(2rem, 6vw, 3rem);
  margin-top: var(--space-xl);
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--space-xl);
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
`;

const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: var(--space-lg);
  padding: var(--space-lg);
  background: var(--surface-card);
  border-radius: var(--radius-lg);
  box-shadow: 0 10px 28px var(--shadow-light);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid var(--surface-outline);
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      rgba(59, 130, 246, 0.03),
      rgba(16, 185, 129, 0.02)
    );
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 1;
  }

  &:hover {
    transform: translateY(-5px) scale(1.02);
    background: var(--surface-card-hover);
    box-shadow: 0 20px 60px var(--shadow-medium),
      0 0 0 1px rgba(59, 130, 246, 0.12);
  }

  &:hover::before {
    opacity: 1;
  }
`;

const ContactIcon = styled.div`
  font-size: clamp(1.2rem, 3vw, 1.5rem);
  color: var(--accent-primary);
  margin-top: var(--space-xs);
  flex-shrink: 0;
`;

const ContactContent = styled.div`
  flex: 1;
`;

const ContactTitle = styled.h4`
  font-size: clamp(1.1rem, 2.5vw, 1.25rem);
  margin-bottom: var(--space-sm);
  color: var(--text-primary);
  font-weight: 600;
`;

const ContactText = styled.p`
  color: var(--text-secondary);
  font-size: clamp(0.9rem, 2vw, 1rem);
  word-break: break-word;
`;

const ContactLink = styled.a`
  color: var(--text-secondary);
  transition: color 0.3s ease;
  font-size: clamp(0.9rem, 2vw, 1rem);
  word-break: break-word;
  text-decoration: none;
  &:hover {
    color: var(--accent-primary);
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
  background: var(--surface-card);
  padding: clamp(1.5rem, 4vw, 2rem);
  border-radius: var(--radius-xl);
  box-shadow: 0 12px 32px var(--shadow-light);
  border: 1px solid var(--surface-outline);
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      rgba(59, 130, 246, 0.02),
      rgba(16, 185, 129, 0.01)
    );
    z-index: 1;
  }
`;

const FormGroup = styled.div`
  position: relative;
`;

const FormInput = styled.input`
  width: 100%;
  padding: clamp(0.8rem, 2.5vw, 1rem);
  border: 2px solid var(--surface-outline);
  border-radius: var(--radius-lg);
  font-size: clamp(0.9rem, 2vw, 1rem);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  background: rgba(255, 255, 255, 0.9);
  position: relative;
  z-index: 2;

  &:focus {
    border-color: var(--accent-primary);
    outline: none;
    box-shadow: 0 0 0 4px rgba(58, 123, 213, 0.14);
    transform: translateY(-2px);
    background: rgba(255, 255, 255, 0.98);
  }

  &:hover {
    border-color: rgba(58, 123, 213, 0.25);
    transform: translateY(-1px);
  }

  html[data-theme='dark'] & {
    background: rgba(12, 22, 39, 0.92);
    border-color: rgba(108, 149, 255, 0.25);
    color: var(--text-primary);

    &:focus {
      border-color: rgba(108, 149, 255, 0.55);
      box-shadow: 0 0 0 4px rgba(108, 149, 255, 0.2);
    }
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: clamp(0.8rem, 2.5vw, 1rem);
  border: 2px solid var(--surface-outline);
  border-radius: var(--radius-lg);
  font-size: clamp(0.9rem, 2vw, 1rem);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  background: rgba(255, 255, 255, 0.9);
  resize: vertical;
  min-height: 120px;
  position: relative;
  z-index: 2;

  &:focus {
    border-color: var(--accent-primary);
    outline: none;
    box-shadow: 0 0 0 4px rgba(58, 123, 213, 0.14);
    transform: translateY(-2px);
    background: rgba(255, 255, 255, 0.98);
  }

  &:hover {
    border-color: rgba(58, 123, 213, 0.25);
    transform: translateY(-1px);
  }

  html[data-theme='dark'] & {
    background: rgba(12, 22, 39, 0.92);
    border-color: rgba(108, 149, 255, 0.25);
    color: var(--text-primary);

    &:focus {
      border-color: rgba(108, 149, 255, 0.55);
      box-shadow: 0 0 0 4px rgba(108, 149, 255, 0.2);
    }
  }
`;

const SubmitButton = styled(motion.button)`
  background: var(--accent-gradient);
  color: var(--white);
  border: none;
  padding: clamp(0.8rem, 2.5vw, 1rem) clamp(1.5rem, 4vw, 2rem);
  border-radius: var(--radius-full);
  font-size: clamp(0.9rem, 2vw, 1rem);
  cursor: pointer;
  font-weight: 600;
  box-shadow: 0 8px 25px rgba(59, 130, 246, 0.3);
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  justify-content: center;
  min-width: 150px;
  position: relative;
  z-index: 2;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
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
    transform: translateY(-3px) scale(1.02);
    box-shadow: 0 12px 35px rgba(59, 130, 246, 0.4);
  }

  &:hover::before {
    left: 100%;
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }
`;

const FormMessage = styled(motion.div)`
  padding: 1rem;
  border-radius: var(--radius-md);
  margin-top: 1rem;
  font-weight: 500;
  &.success {
    background: #d4edda;
    color: #155724;
    border: 1px solid #c3e6cb;
  }
  &.error {
    background: #f8d7da;
    color: #721c24;
    border: 1px solid #f5c6cb;
  }
`;

const FieldError = styled.div`
  color: #dc3545;
  font-size: 0.875rem;
  margin-top: 0.25rem;
`;

// ===== Contact Component =====
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    honeypot: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState(null);
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = 'Please enter a valid email address';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    if (formData.honeypot) {
      return;
    }
    setIsSubmitting(true);
    setSubmitMessage(null);

    try {
      const response = await fetch('https://formspree.io/f/xnnbljlo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitMessage({
          type: 'success',
          text: "Message sent successfully! I'll get back to you soon.",
        });
        setFormData({ name: '', email: '', subject: '', message: '', honeypot: '' });
        setTimeout(() => setSubmitMessage(null), 5000);
      } else {
        throw new Error('Formspree submission failed');
      }
    } catch (error) {
      setSubmitMessage({
        type: 'error',
        text: 'Failed to send message. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <ContactSection id="contact">
      <Container>
        <ParallaxShapes
          shapes={[
            { size: '300px', top: '10%', left: '15%', color1: 'rgba(0,119,255,0.18)', color2: 'rgba(0,198,255,0.1)', blur: 42, opacity: 0.2 },
            { size: '220px', top: '70%', left: '80%', color1: 'rgba(139,92,246,0.18)', color2: 'rgba(59,130,246,0.1)', blur: 38, opacity: 0.18 }
          ]}
          intensity={18}
        />
        <SectionTitle>
          <Title>Get In Touch</Title>
          <SubTitle>Let's work together</SubTitle>
        </SectionTitle>

        <ContactContainer ref={ref}>
          {/* Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <motion.div variants={itemVariants}>
              <ContactInfo>
                <ContactItem>
                  <ContactIcon>
                    <FaEnvelope />
                  </ContactIcon>
                  <ContactContent>
                    <ContactTitle>Email</ContactTitle>
                    <ContactLink href="mailto:denismunyoki5657@gmail.com">
                      denismunyoki5657@gmail.com
                    </ContactLink>
                  </ContactContent>
                </ContactItem>
                <ContactItem>
                  <ContactIcon>
                    <FaPhone />
                  </ContactIcon>
                  <ContactContent>
                    <ContactTitle>Phone</ContactTitle>
                    <ContactLink href="tel:+254110433220">
                      +254110433220
                    </ContactLink>
                  </ContactContent>
                </ContactItem>
                <ContactItem>
                  <ContactIcon>
                    <FaMapMarkerAlt />
                  </ContactIcon>
                  <ContactContent>
                    <ContactTitle>Location</ContactTitle>
                    <ContactText>Nairobi, Kenya</ContactText>
                  </ContactContent>
                </ContactItem>
              </ContactInfo>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <motion.div variants={itemVariants}>
              <ContactForm onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={handleInputChange}
                  tabIndex={-1}
                  autoComplete="off"
                  style={{ position: 'absolute', clip: 'rect(0 0 0 0)', height: 1, width: 1, margin: -1, border: 0, padding: 0 }}
                  aria-hidden="true"
                />
                <FormGroup>
                  <FormInput
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    aria-required="true"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'contact-name-error' : undefined}
                  />
                  {errors.name && <FieldError id="contact-name-error">{errors.name}</FieldError>}
                </FormGroup>
                <FormGroup>
                  <FormInput
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    aria-required="true"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'contact-email-error' : undefined}
                  />
                  {errors.email && <FieldError id="contact-email-error">{errors.email}</FieldError>}
                </FormGroup>
                <FormGroup>
                  <FormInput
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                  />
                </FormGroup>
                <FormGroup>
                  <FormTextarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    aria-required="true"
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'contact-message-error' : undefined}
                  />
                  {errors.message && <FieldError id="contact-message-error">{errors.message}</FieldError>}
                </FormGroup>
                <SubmitButton
                  type="submit"
                  disabled={isSubmitting}
                  animate={
                    isSubmitting ? { scale: [1, 1.05, 1] } : { scale: 1 }
                  }
                  transition={
                    isSubmitting
                      ? { repeat: Infinity, duration: 0.6, ease: 'easeInOut' }
                      : {}
                  }
                >
                  <FaPaperPlane />{' '}
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </SubmitButton>
                <AnimatePresence>
                  {submitMessage && (
                    <FormMessage
                      className={submitMessage.type}
                      role="alert"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                    >
                      {submitMessage.text}
                    </FormMessage>
                  )}
                </AnimatePresence>
              </ContactForm>
            </motion.div>
          </motion.div>
        </ContactContainer>
      </Container>
    </ContactSection>
  );
};

export default Contact;
