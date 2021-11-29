import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

import { color } from '@/theme';
import { mq } from '@/theme/mediaQuery';

const headingBefore = keyframes`
	0% {
		right: auto;
		width: 0;
		left: 0;
	}

	10% {
		width: 50%;
	}

	50% {
		width: 0;
		left: 100%;
	}

	51% {
		width: 0;
		right: 0;
		left: auto;
	}

	60% {
		width: 50%;
	}

	99% {
		width: 0;
		right: 100%;
		left: auto;
	}

	100% {
		right: auto;
		width: 0;
		left: 0;
	}
`;

const headingAfter = keyframes`
	0% {
		left: auto;
		width: 0;
		right: 0;
	}

	10% {
		width: 50%;
		left: auto;
	}

	50% {
		width: 0;
		right: 100%;
		left: auto;
	}

	51% {
		width: 0;
		left: 0;
		right: auto;
	}

	60% {
		width: 50%;
	}

	99% {
		width: 0;
		left: 100%;
		right: atuo;
	}

	100% {
		left: auto;
		width: 0;
		right: 0;
	}
`;

const H1 = styled.h1(() =>
  mq({
    position: 'relative',
    display: 'inline-block',
    fontSize: ['30px', '30px', '40px'],
    fontWeight: 'bold',
    color: color.secondary,
    letterSpacing: '10px',
    '&:first-letter': {
      color: color.primary,
    },
    '&:before': {
      content: '""',
      display: 'block',
      position: 'absolute',
      top: '-8px',
      height: '2px',
      backgroundColor: color.primary,
      animation: `${headingBefore} 4s ease infinite`,
    },
    '&:after': {
      content: '""',
      display: 'block',
      position: 'absolute',
      bottom: '-8px',
      right: 0,
      height: '2px',
      backgroundColor: color.primary,
      animation: `${headingAfter} 4s ease infinite`,
    },
  }),
);

const HeadLine: React.FC = ({ children }) => {
  return <H1>{children}</H1>;
};

export default HeadLine;
