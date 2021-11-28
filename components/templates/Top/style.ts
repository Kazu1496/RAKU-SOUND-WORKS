import styled from '@emotion/styled';

import { color } from '@/theme';
import { mq } from '@/theme/mediaQuery';

export const Wrapper = styled.div(() =>
  mq({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  }),
);

export const H1 = styled.h1(() =>
  mq({
    display: 'flex',
    alignItems: 'center',
    fontSize: '40px',
    fontWeight: 'bold',
    color: color.secondary,
    letterSpacing: '10px',
    '&::after': {
      content: '""',
      display: 'block',
      width: '300px',
      height: '400px',
      backgroundImage: 'url("/avatar2.png")',
      backgroundSize: '400px',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    },
  }),
);
