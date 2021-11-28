import { Global } from '@emotion/react';
// @ts-ignore
import destyle from 'destyle.css';

import { hoverOpacity, text } from '@/theme';

const GlobalStyle: React.FC = () => {
  return (
    <Global
      styles={{
        destyle,
        body: {
          color: text.default,
          fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Helvetica, "Hiragino Kaku Gothic ProN", "Hiragino Sans", "ヒラギノ角ゴ ProN W3", Arial, "メイリオ", Meiryo, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans Emoji"`,
        },
        'a, button, svg': {
          ...hoverOpacity,
          '&:hover': {
            cursor: 'pointer',
          },
        },
      }}
    />
  );
};

export default GlobalStyle;
