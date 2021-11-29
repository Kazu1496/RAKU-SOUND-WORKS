import styled from '@emotion/styled';

import { color, font, spacing } from '@/theme';
import { mq } from '@/theme/mediaQuery';

const formInputCss = {
  width: '100%',
  border: `1px solid ${color.secondary}`,
  borderRadius: '5px',
  padding: spacing.s,
  '&:focus': {
    outline: `3px solid ${color.primary}`,
  },
};

export const Wrapper = styled.div(() =>
  mq({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    maxWidth: '700px',
    height: '100%',
    margin: '60px auto',
    '& > h1': {
      marginBottom: '40px',
    },
  }),
);

export const Form = styled.form(() =>
  mq({
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridGap: spacing.xl,
    width: '100%',
  }),
);

export const FormArea = styled.div(() =>
  mq({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  }),
);

export const Label = styled.label((props: { required?: boolean }) =>
  mq({
    fontSize: [font.s, font.s, font.m],
    marginBottom: spacing.s,
    '&:after': {
      content: props.required ? '"*"' : '""',
      display: 'inline-block',
      width: '12px',
      color: '#F00',
      fontSize: font.xs,
      marginLeft: spacing.xs,
    },
  }),
);

export const Select = styled.select(() =>
  mq({
    height: '50px',
    ...formInputCss,
  }),
);

export const Input = styled.input(() =>
  mq({
    height: '50px',
    ...formInputCss,
  }),
);

export const Textarea = styled.textarea(() =>
  mq({
    height: '250px',
    ...formInputCss,
  }),
);

export const ErrorMsg = styled.span(() =>
  mq({
    display: 'inline-block',
    color: '#F00',
    fontSize: font.s,
    marginTop: spacing.s,
  }),
);

export const Submit = styled.button(() =>
  mq({
    position: 'relative',
    display: 'inline-block',
    width: '260px',
    height: '50px',
    color: color.primary,
    fontSize: '18px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center',
    border: `2px solid ${color.primary}`,
    borderRadius: '5px',
    padding: spacing.s,
    margin: `${spacing.xxl} auto 0`,
    '&:before': {
      transition: '0.3s all ease',
      position: 'absolute',
      top: 0,
      left: '50%',
      right: '50%',
      bottom: 0,
      opacity: 0,
      content: '""',
      backgroundColor: color.primary,
      zIndex: -2,
    },
    '&:hover': {
      color: color.white,
      '&:before': {
        transition: '0.3s all ease',
        left: 0,
        right: 0,
        opacity: 1,
      },
    },
    '&:focus': {
      outline: 'none',
      color: color.white,
      '&:before': {
        transition: '0.3s all ease',
        left: 0,
        right: 0,
        opacity: 1,
      },
    },
  }),
);
