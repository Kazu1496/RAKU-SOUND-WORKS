import styled from '@emotion/styled';

import { color, font, spacing } from '@/theme';
import { mq } from '@/theme/mediaQuery';

export const Wrapper = styled.button(() =>
  mq({
    display: 'inline-block',
    cursor: 'pointer',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    textAlign: 'left',
    background: '#000',
    '& *, &:before, &:after': {
      transition: 'all 0.2s ease',
    },
    '& img': {
      width: '100%',
      height: '100%',
      maxWidth: '100%',
      backfaceVisibility: 'hidden',
      verticalAlign: 'top',
    },
    '&:before, &:after': {
      position: 'absolute',
      top: '20px',
      right: '20px',
      content: '""',
      backgroundColor: '#fff',
      zIndex: 1,
      opacity: 0,
    },
    '&:before': {
      width: 0,
      height: '1px',
    },
    '&:after': {
      height: 0,
      width: '1px',
    },
    '&:hover img': {
      zoom: 1,
      filter: 'alpha(opacity=20)',
      opacity: 0.2,
    },
    '&:hover:before, &:hover:after': {
      opacity: 1,
      transitionDelay: '0.1s',
    },
    '&:hover:before': {
      width: '40px',
    },
    '&:hover:after': {
      height: '40px',
    },
    '&:hover p': {
      opacity: 1,
      transitionDelay: '0.15s',
    },
  }),
);

export const WorkAbout = styled.div(() =>
  mq({
    position: 'absolute',
    left: 0,
    bottom: 0,
    padding: '15px 20px',
  }),
);

export const Title = styled.p(() =>
  mq({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    color: color.white,
    fontSize: font.m,
    fontWeight: 'bold',
    opacity: 0,
    margin: 0,
    '& > span': {
      fontSize: font.xs,
      fontWeight: 'normal',
      marginTop: spacing.xs,
    },
  }),
);
