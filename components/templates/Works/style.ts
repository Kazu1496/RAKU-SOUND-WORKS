import styled from '@emotion/styled';
import { rgba } from 'polished';

import { color, font, spacing } from '@/theme';
import { mq } from '@/theme/mediaQuery';

export const Wrapper = styled.div(() =>
  mq({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    margin: '60px auto',
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

export const Item = styled.li(() =>
  mq({
    backgroundColor: color.white,
    position: 'relative',
    cursor: 'pointer',
    height: 'calc(320px * 0.5625)',
    '&:hover div': {
      opacity: 1,
    },
  }),
);

export const WorkAbout = styled.div(() =>
  mq({
    position: 'absolute',
    top: 0,
    left: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: rgba(0, 0, 0, 0.8),
    opacity: 0,
    transition: '.3s ease-in-out',
  }),
);

export const Title = styled.p(() =>
  mq({
    color: color.white,
    fontSize: font.xxl,
    fontWeight: 'bold',
    marginBottom: spacing.m,
  }),
);

export const ImageWrapper = styled.button(() =>
  mq({
    height: '100%',
  }),
);
