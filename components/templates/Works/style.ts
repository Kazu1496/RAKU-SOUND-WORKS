import styled from '@emotion/styled';

import { spacing } from '@/theme';
import { mq } from '@/theme/mediaQuery';

export const Wrapper = styled.div(() =>
  mq({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    margin: `60px auto`,
    '& > h1': {
      marginBottom: '40px',
    },
  }),
);

export const TagList = styled.ul(() =>
  mq({
    display: 'flex',
    justifyContent: 'center',
    margin: `0 0 ${spacing.xxl}`,
    '& > li': {
      marginRight: spacing.s,
    },
  }),
);

export const WorkList = styled.ol(() =>
  mq({
    display: 'grid',
    gridTemplateColumns: [
      'repeat(auto-fit, minmax(0, 280px))',
      'repeat(auto-fit, 320px)',
      'repeat(auto-fit, 400px)',
    ],
    gridGap: spacing.s,
    justifyContent: 'center',
    width: '100%',
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
