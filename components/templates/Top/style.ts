import styled from '@emotion/styled';

import { mq } from '@/theme/mediaQuery';

export const Wrapper = styled.div(() =>
  mq({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100%',
    width: '100%',
    '& img': {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: ['280px', '280px', '450px', '450px'],
      height: ['280px', '280px', '450px', '450px'],
      objectFit: 'contain',
    },
  }),
);
