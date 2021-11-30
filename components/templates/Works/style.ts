import styled from '@emotion/styled';

import { spacing } from '@/theme';
import { mq } from '@/theme/mediaQuery';

export const Wrapper = styled.div(() =>
  mq({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    margin: '60px auto',
    '& > h1': {
      marginBottom: '40px',
    },
  }),
);

export const ContentList = styled.ol(() =>
  mq({
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, 320px)',
    gridGap: spacing.s,
    justifyContent: 'center',
    width: '100%',
  }),
);
