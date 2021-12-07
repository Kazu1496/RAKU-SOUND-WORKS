import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

import { color } from '@/theme';
import { mq } from '@/theme/mediaQuery';

const rotate = keyframes`
	100% {
    transform: rotate(360deg);
  }
`;

const dash = keyframes`
	0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 90, 200;
    stroke-dashoffset: -35px;
  }

  100% {
    stroke-dashoffset: -125px;
  }
`;

const SVG = styled.svg(() =>
  mq({
    width: '3.75em',
    transformOrigin: 'center',
    animation: `${rotate} 2s linear infinite`,
  }),
);

const Circle = styled.circle(() =>
  mq({
    fill: 'none',
    stroke: color.primary,
    strokeWidth: 2,
    strokeDasharray: '1, 200',
    strokeDashoffset: 0,
    strokeLinecap: 'round',
    animation: `${dash} 1.5s ease-in-out infinite`,
  }),
);

const Spinner: React.FC = () => {
  return (
    <SVG viewBox='25 25 50 50'>
      <Circle cx='50' cy='50' r='20'></Circle>
    </SVG>
  );
};

export default Spinner;
