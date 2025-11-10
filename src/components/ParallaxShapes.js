import React from 'react';
import styled from 'styled-components';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';

const Layer = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
`;

const Shape = styled(motion.div)`
  position: absolute;
  border-radius: 9999px;
  filter: blur(${(p) => p.$blur || 0}px);
  opacity: ${(p) => p.$opacity || 0.2};
  background: radial-gradient(circle at 30% 30%, ${(p) => p.$c1}, ${(p) => p.$c2});

  @media (max-width: 768px) {
    display: none;
  }
`;

const ParallaxShapes = ({
  shapes = [],
  intensity = 30
}) => {
  const { scrollYProgress } = useScroll();
  const prefersReducedMotion = useReducedMotion();

  return (
    <Layer aria-hidden="true">
      {shapes.map((s, idx) => {
        // Different parallax factors per shape for depth effect
        const factor = (idx % 3 === 0 ? 1 : idx % 3 === 1 ? -0.6 : 0.35) * intensity;
        const y = prefersReducedMotion
          ? 0
          : useTransform(scrollYProgress, [0, 1], [factor * -1, factor]);
        return (
          <Shape
            key={idx}
            style={{ y, top: s.top, left: s.left, width: s.size, height: s.size }}
            $c1={s.color1 || 'rgba(59,130,246,0.35)'}
            $c2={s.color2 || 'rgba(16,185,129,0.15)'}
            $blur={s.blur || 24}
            $opacity={s.opacity || 0.25}
          />
        );
      })}
    </Layer>
  );
};

export default ParallaxShapes;

