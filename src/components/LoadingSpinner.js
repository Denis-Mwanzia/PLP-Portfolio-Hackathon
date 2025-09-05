import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, var(--off-white) 0%, var(--white) 100%);
`;

const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border: 4px solid var(--light-gray);
  border-top: 4px solid var(--primary-blue);
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
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

const LoadingSpinner = ({ text = 'Loading...' }) => {
  return (
    <SpinnerContainer>
      <LoadingContainer>
        <Spinner />
        <LoadingText>{text}</LoadingText>
      </LoadingContainer>
    </SpinnerContainer>
  );
};

export default LoadingSpinner;
