import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
`;

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${(props) => props.height || '100vh'};
  width: ${(props) => props.width || '100%'};
  background: ${(props) =>
    props.background ||
    'linear-gradient(135deg, var(--off-white) 0%, var(--white) 100%)'};
`;

const Spinner = styled.div`
  width: ${(props) => props.size || '50px'};
  height: ${(props) => props.size || '50px'};
  border: 4px solid var(--light-gray);
  border-top: 4px solid var(--primary-blue);
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

const DotSpinner = styled.div`
  display: flex;
  gap: 4px;

  div {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--primary-blue);
    animation: ${pulse} 1.4s ease-in-out infinite both;

    &:nth-child(1) {
      animation-delay: -0.32s;
    }
    &:nth-child(2) {
      animation-delay: -0.16s;
    }
    &:nth-child(3) {
      animation-delay: 0s;
    }
  }
`;

const LoadingText = styled.p`
  margin-top: 1rem;
  color: var(--medium-gray);
  font-size: 1rem;
  font-weight: 500;
`;

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LoadingSpinner = ({
  text = 'Loading...',
  variant = 'spinner',
  size = '50px',
  height,
  width,
  background,
  showText = true,
}) => {
  return (
    <SpinnerContainer height={height} width={width} background={background}>
      <LoadingContainer>
        {variant === 'dots' ? (
          <DotSpinner>
            <div></div>
            <div></div>
            <div></div>
          </DotSpinner>
        ) : (
          <Spinner size={size} />
        )}
        {showText && <LoadingText>{text}</LoadingText>}
      </LoadingContainer>
    </SpinnerContainer>
  );
};

export default LoadingSpinner;
