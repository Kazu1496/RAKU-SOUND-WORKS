import styled from '@emotion/styled';

import { color, font, hoverOpacity, spacing, text } from '@/theme';
import { mq } from '@/theme/mediaQuery';

export const Wrapper = styled.div(() =>
  mq({
    height: '100%',
    color: text.default,
    border: `8px solid ${color.primary}`,
    padding: spacing.m,
    '& > main': {
      height: `calc(100vh - 40px - 40px - 16px - ${spacing.m} - ${spacing.m})`,
    },
  }),
);

export const Logo = styled.div(() =>
  mq({
    cursor: 'pointer',
    ...hoverOpacity,
  }),
);

export const Header = styled.header(() =>
  mq({
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '40px',
  }),
);

export const Footer = styled.footer(() =>
  mq({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '40px',
    fontSize: font.xs,
  }),
);

export const Nav = styled.nav(() =>
  mq({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  }),
);

export const Ul = styled.ul(() =>
  mq({
    display: 'flex',
    '& > li': {
      display: 'flex',
      alignItems: 'center',
      '&:not(:last-of-type)': {
        marginRight: spacing.xl,
      },
    },
  }),
);

export const Li = styled.li((props: { isActive: boolean }) =>
  mq({
    '& > a': {
      borderBottom: props.isActive ? `2px solid ${color.primary}` : '',
    },
  }),
);
