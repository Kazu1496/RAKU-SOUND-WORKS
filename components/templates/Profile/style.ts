import styled from '@emotion/styled';

import { font, hoverOpacity, spacing } from '@/theme';
import { mq } from '@/theme/mediaQuery';

export const Wrapper = styled.div(() =>
  mq({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    maxWidth: '700px',
    height: '100%',
    margin: '60px auto',
    '& > h1': {
      marginBottom: '40px',
    },
  }),
);

export const ProfileArea = styled.div(() =>
  mq({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    marginBottom: [spacing.xxl, spacing.xxl, '40px'],
    '& > span': {
      borderRadius: '50%',
    },
  }),
);

export const Name = styled.h2(() =>
  mq({
    fontSize: [font.xl, font.xl, font.xxl],
    fontWeight: 'bold',
    textAlign: 'center',
    margin: [`${spacing.m} 0`, `${spacing.m} 0`, `${spacing.xl} 0`],
  }),
);

export const SnsList = styled.ul(() =>
  mq({
    display: 'flex',
    '& > li': {
      cursor: 'pointer',
      ...hoverOpacity,
      '&:not(:last-of-type)': {
        marginRight: spacing.xl,
      },
    },
  }),
);

export const Description = styled.p(() =>
  mq({
    fontSize: font.m,
    whiteSpace: 'pre-line',
    lineHeight: '2em',
  }),
);
