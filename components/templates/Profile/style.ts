import styled from '@emotion/styled';

import { font, spacing } from '@/theme';
import { mq } from '@/theme/mediaQuery';

export const Wrapper = styled.div(() =>
  mq({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    maxWidth: '700px',
    height: '100%',
    margin: '40px auto',
  }),
);

export const ProfileArea = styled.div(() =>
  mq({
    display: 'grid',
    gridTemplateColumns: '200px 1fr',
    gridGap: spacing.xxl,
    alignItems: 'start',
    width: '100%',
    marginBottom: spacing.xxl,
    '& > span': {
      borderRadius: '50%',
    },
  }),
);

export const Name = styled.h1(() =>
  mq({
    fontSize: font.xxl,
    fontWeight: 'bold',
    marginBottom: spacing.xl,
  }),
);

export const SnsList = styled.ul(() =>
  mq({
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 30px)',
    gridGap: spacing.m,
  }),
);

export const Description = styled.p(() =>
  mq({
    fontSize: font.m,
    whiteSpace: 'pre-line',
    lineHeight: '2em',
  }),
);
