import styled from '@emotion/styled';
import Link from 'next/link';

import { hoverOpacity } from '@/theme';
import { mq } from '@/theme/mediaQuery';

export const Anchor = styled.a(() =>
  mq({
    textDecorationLine: 'underline',
    ...hoverOpacity,
  }),
);

export const ButtonWrapper = styled.span(() =>
  mq({
    display: 'block',
    maxWidth: '320px',
    width: ['100%', '100%', '320px', '320px'],
    height: '56px',
    margin: '40px auto',
  }),
);

export const StyledLink = styled(Anchor)().withComponent(Link);

export const ImageWrapper = styled.div(() =>
  mq({
    width: ['100%', '100%', '480px', '480px'],
    height: 'auto',
    margin: '0 auto',
    '& img': {
      objectFit: 'contain',
    },
  }),
);

export const IframeWrapper = styled.div(() =>
  mq({
    position: 'relative',
    width: ['100%', '100%', '480px', '480px'],
    height: 0,
    paddingTop: '75%',
    margin: '0 auto',
    '& > iframe': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: ['100%', '100%', '480px', '480px'],
      height: ['100%', '100%', '360px', '360px'],
    },
  }),
);

export const Ul = styled.ul(() =>
  mq({
    listStyle: 'inside',
    lineHeight: 1.6,
  }),
);

export const Blockquote = styled.blockquote(() => mq({}));

export const MediaWrapper = styled.div(() =>
  mq({
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  }),
);
