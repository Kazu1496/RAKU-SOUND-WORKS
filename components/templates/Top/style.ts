import styled from '@emotion/styled';

import { text } from '@/theme';
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
    color: text.white,
    width: ['280px', '280px', '450px', '450px'],
    height: ['280px', '280px', '450px', '450px'],
    backgroundImage: 'url("/Logo_HP_Green.png")',
    backgroundSize: ['280px', '280px', '450px', '450px'],
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  }),
);
