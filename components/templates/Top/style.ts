import styled from '@emotion/styled';

import { color, font } from '@/theme';
import { mq } from '@/theme/mediaQuery';

export const Wrapper = styled.div(() =>
  mq({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  }),
);

export const H1 = styled.h1(() =>
  mq({
    display: 'flex',
    flexDirection: ['column-reverse', 'column-reverse', 'row'],
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: [font.xxl, font.xxl, '40px'],
    fontWeight: 'bold',
    color: color.secondary,
    textAlign: 'center',
    letterSpacing: '10px',
    wordWrap: 'break-word',
    '&::after': {
      content: '""',
      display: 'block',
      width: ['150px', '150px', '300px'],
      height: ['200px', '200px', '400px'],
      backgroundImage: 'url("/avatar2.png")',
      backgroundSize: ['200px', '200px', '400px'],
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    },
  }),
);
