import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  background: var(--light-gray);
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: ${(props) => props.minHeight || '200px'};
`;

const LazyImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.3s ease;
  opacity: ${(props) => (props.loaded ? 1 : 0)};
`;

const Placeholder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;

  @keyframes loading {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`;

const LazyImageComponent = ({
  src,
  alt,
  minHeight,
  sizes,
  srcSet,
  width,
  height,
  decoding = 'async',
  ...props
}) => {
  const [loaded, setLoaded] = useState(false);
  const [inView, setInView] = useState(false);
  const imgRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleLoad = () => {
    setLoaded(true);
  };

  return (
    <ImageContainer ref={imgRef} minHeight={minHeight} {...props}>
      {!loaded && <Placeholder />}
      {inView && (
        <LazyImage
          src={src}
          alt={alt}
          loaded={loaded}
          onLoad={handleLoad}
          loading="lazy"
          decoding={decoding}
          sizes={sizes}
          srcSet={srcSet}
          width={width}
          height={height}
        />
      )}
    </ImageContainer>
  );
};

export default LazyImageComponent;
