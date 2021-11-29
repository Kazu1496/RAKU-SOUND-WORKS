import styled from '@emotion/styled';

import { color, font, spacing, text } from '@/theme';
import { mq } from '@/theme/mediaQuery';

export const Wrapper = styled.div(() =>
  mq({
    backgroundColor: color.white,
    '& > img': {
      width: '100%',
    },
  }),
);

export const Title = styled.p(() =>
  mq({
    fontSize: font.xxl,
    fontWeight: 'bold',
    margin: `${spacing.l} 0`,
    '& > span': {
      color: text.gray,
      fontSize: font.s,
      fontWeight: 'normal',
      marginLeft: spacing.s,
    },
  }),
);

export const SubInfo = styled.div(() =>
  mq({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  }),
);

export const TagList = styled.ul(() =>
  mq({
    display: 'flex',
    alignItems: 'center',
    '& > li:not(last-of-type)': {
      marginRight: spacing.s,
    },
  }),
);

export const Tag = styled.li(() =>
  mq({
    color: text.white,
    fontSize: [font.xs, font.xs, font.s],
    fontWeight: 'bold',
    backgroundColor: color.primary,
    borderRadius: '4px',
    padding: spacing.s,
  }),
);

export const ReleaseDate = styled.time(() =>
  mq({
    color: text.gray,
    fontSize: font.s,
  }),
);
