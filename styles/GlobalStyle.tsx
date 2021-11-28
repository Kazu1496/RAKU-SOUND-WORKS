import { Global } from '@emotion/react';
// @ts-ignore
import destyle from 'destyle.css';

import { color, hoverOpacity, spacing, text } from '@/theme';

const GlobalStyle: React.FC = () => {
  return (
    <Global
      styles={{
        destyle,
        body: {
          color: text.default,
          fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Helvetica, "Hiragino Kaku Gothic ProN", "Hiragino Sans", "ヒラギノ角ゴ ProN W3", Arial, "メイリオ", Meiryo, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans Emoji"`,
        },
        a: {
          ...hoverOpacity,
          '&:hover': {
            cursor: 'pointer',
          },
        },
        h1: {
          fontSize: '40px',
          fontWeight: 'bold',
          color: color.secondary,
          letterSpacing: '10px',
          marginBottom: spacing.xxl,
          '&:first-letter': {
            color: color.primary,
          },
        },
      }}
    />
  );
};

export default GlobalStyle;
