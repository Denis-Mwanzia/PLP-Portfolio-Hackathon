import React from 'react';
import styled from 'styled-components';
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from 'framer-motion';

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
  background: radial-gradient(
    circle at 30% 30%,
    ${(p) => p.$c1},
    ${(p) => p.$c2}
  );

  @media (max-width: 768px) {
    display: none;
  }
`;

const MAX_SHAPES = 5;

const ParallaxShapes = ({ shapes = [], intensity = 30 }) => {
  const { scrollYProgress } = useScroll();
  const prefersReducedMotion = useReducedMotion();

  // Hooks must be called unconditionally at top level — fixed number of useTransform calls
  const y0 = useTransform(scrollYProgress, [0, 1], [-1 * intensity, intensity]);
  const y1 = useTransform(
    scrollYProgress,
    [0, 1],
    [0.6 * intensity, -0.6 * intensity],
  );
  const y2 = useTransform(
    scrollYProgress,
    [0, 1],
    [0.35 * intensity, -0.35 * intensity],
  );
  const y3 = useTransform(
    scrollYProgress,
    [0, 1],
    [-0.6 * intensity, 0.6 * intensity],
  );
  const y4 = useTransform(
    scrollYProgress,
    [0, 1],
    [0.35 * intensity, -0.35 * intensity],
  );

  const yValues = [y0, y1, y2, y3, y4];

  return (
    <Layer aria-hidden="true">
      {shapes.slice(0, MAX_SHAPES).map((s, idx) => {
        const y = prefersReducedMotion ? 0 : yValues[idx];
        return (
          <Shape
            key={idx}
            style={{
              y,
              top: s.top,
              left: s.left,
              width: s.size,
              height: s.size,
            }}
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
