import styled from '@emotion/styled';

import { font, spacing } from '@/theme';
import { mq } from '@/theme/mediaQuery';

export const Wrapper = styled.div(() =>
  mq({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    maxWidth: '1240px',
    margin: `60px auto`,
    '& > h1': {
      marginBottom: '40px',
    },
  }),
);

export const TagSelector = styled.div(() =>
  mq({
    display: 'flex',
    justifyContent: 'center',
    width: '150px',
    margin: `0 0 ${spacing.xxl}`,
  }),
);

export const WorkList = styled.ol(() =>
  mq({
    display: 'grid',
    gridTemplateColumns: [
      'repeat(auto-fill, minmax(0, 280px))',
      'repeat(auto-fill, 320px)',
      'repeat(auto-fill, 400px)',
    ],
    gridGap: spacing.s,
    justifyContent: 'center',
    width: '100%',
  }),
);

export const EmptyText = styled.p(() =>
  mq({
    fontSize: font.m,
    textAlign: 'center',
    margin: `${spacing.xl} 0`,
  }),
);

export const List = styled.li(() =>
  mq({
    width: '100%',
    paddingTop: '56.25%',
    position: 'relative',
    '& > button': {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
  }),
);

export const LoadingWrapper = styled.div(() =>
  mq({
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    marginBottom: '60px',
  }),
);
