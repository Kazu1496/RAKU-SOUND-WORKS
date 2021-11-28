import { CSSObject } from '@emotion/react';

const spacing = {
  xs: '4px',
  s: '8px',
  m: '12px',
  l: '16px',
  xl: '20px',
  xxl: '24px',
} as const;

const font = {
  xs: '12px',
  s: '14px',
  m: '16px',
  l: '18px',
  xl: '20px',
  xxl: '24px',
} as const;

const color = {
  primary: '#E60039',
  secondary: '#313331',
  white: '#FFF',
} as const;

const text = {
  default: '#313331',
  gray: '#838582',
  white: '#FFF',
} as const;

const hoverStyle = (style: CSSObject) => ({
  '@media (hover: hover)': {
    '&:hover': style,
  },
});

const touchStyle = (style: CSSObject) => ({
  '@media (hover: none)': {
    '&:active': style,
    WebkitTapHighlightColor: 'rgba(0, 0, 0, 0.2)',
  },
});

const hoverOpacity = {
  transition: 'opacity .2s ease-out',
  opacity: 1,
  ...hoverStyle({
    opacity: '0.3',
  }),
  ...touchStyle({
    opacity: '0.3',
  }),
};

export { color, font, hoverOpacity, spacing, text };
