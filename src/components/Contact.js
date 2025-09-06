import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
} from 'react-icons/fa';

// ===== Styled Components =====
const ContactSection = styled.section`
  background-color: var(--off-white);
  padding: clamp(3rem, 8vw, 5rem) 0;
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
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background: linear-gradient(
      90deg,
      var(--primary-blue) 0%,
      var(--secondary-blue) 100%
    );
    border-radius: 3px;
  }
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
  background: var(--white);
  border-radius: var(--radius-lg);
  box-shadow: 0 3px 15px var(--shadow-light);
  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px var(--shadow-medium);
  }
`;

const ContactIcon = styled.div`
  font-size: clamp(1.2rem, 3vw, 1.5rem);
  color: var(--primary-blue);
  margin-top: var(--space-xs);
  flex-shrink: 0;
`;

const ContactContent = styled.div`
  flex: 1;
`;

const ContactTitle = styled.h4`
  font-size: clamp(1.1rem, 2.5vw, 1.25rem);
  margin-bottom: var(--space-sm);
  color: var(--dark-blue);
  font-weight: 600;
`;

const ContactText = styled.p`
  color: var(--medium-gray);
  font-size: clamp(0.9rem, 2vw, 1rem);
  word-break: break-word;
`;

const ContactLink = styled.a`
  color: var(--medium-gray);
  transition: color 0.3s ease;
  font-size: clamp(0.9rem, 2vw, 1rem);
  word-break: break-word;
  text-decoration: none;
  &:hover {
    color: var(--primary-blue);
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
  background: var(--white);
  padding: clamp(1.5rem, 4vw, 2rem);
  border-radius: var(--radius-xl);
  box-shadow: 0 5px 25px var(--shadow-light);
`;

const FormGroup = styled.div`
  position: relative;
`;

const FormInput = styled.input`
  width: 100%;
  padding: clamp(0.8rem, 2.5vw, 1rem);
  border: 2px solid var(--border-gray);
  border-radius: var(--radius-lg);
  font-size: clamp(0.9rem, 2vw, 1rem);
  transition: all 0.3s ease;
  background: var(--white);
  &:focus {
    border-color: var(--primary-blue);
    outline: none;
    box-shadow: 0 0 0 3px rgba(58, 123, 213, 0.1);
    transform: translateY(-1px);
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: clamp(0.8rem, 2.5vw, 1rem);
  border: 2px solid var(--border-gray);
  border-radius: var(--radius-lg);
  font-size: clamp(0.9rem, 2vw, 1rem);
  transition: all 0.3s ease;
  background: var(--white);
  resize: vertical;
  min-height: 120px;
  &:focus {
    border-color: var(--primary-blue);
    outline: none;
    box-shadow: 0 0 0 3px rgba(58, 123, 213, 0.1);
    transform: translateY(-1px);
  }
`;

const SubmitButton = styled(motion.button)`
  background: linear-gradient(
    90deg,
    var(--primary-blue),
    var(--secondary-blue)
  );
  color: var(--white);
  border: none;
  padding: clamp(0.8rem, 2.5vw, 1rem) clamp(1.5rem, 4vw, 2rem);
  border-radius: var(--radius-full);
  font-size: clamp(0.9rem, 2vw, 1rem);
  cursor: pointer;
  font-weight: 600;
  box-shadow: 0 4px 15px rgba(58, 123, 213, 0.25);
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  justify-content: center;
  min-width: 150px;
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(58, 123, 213, 0.35);
  }
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
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
    setIsSubmitting(true);
    setSubmitMessage(null);

    try {
      const response = await fetch('https://formspree.io/f/xnnbljlo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitMessage({
          type: 'success',
          text: "Message sent successfully! I'll get back to you soon.",
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
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
                <FormGroup>
                  <FormInput
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                  {errors.name && <FieldError>{errors.name}</FieldError>}
                </FormGroup>
                <FormGroup>
                  <FormInput
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                  {errors.email && <FieldError>{errors.email}</FieldError>}
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
                  />
                  {errors.message && <FieldError>{errors.message}</FieldError>}
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
