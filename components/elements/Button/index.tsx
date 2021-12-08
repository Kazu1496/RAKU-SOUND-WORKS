import styled, { CSSObject } from '@emotion/styled';

import { borderRadius, color, font, hoverOpacity, spacing } from '@/theme';
import { mq } from '@/theme/mediaQuery';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  width?: CSSObject['width'];
  height?: CSSObject['height'];
  outline?: boolean;
  bgColor: keyof typeof color;
  spacing: keyof typeof spacing;
  fontSize: keyof typeof font;
  radius: keyof typeof borderRadius;
}

export const _Button = styled.button(
  (
    props: Pick<
      Props,
      | 'width'
      | 'height'
      | 'bgColor'
      | 'spacing'
      | 'fontSize'
      | 'radius'
      | 'outline'
    >,
  ) =>
    mq({
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: props.width || '100%',
      height: props.height || '100%',
      color: props.outline ? color[props.bgColor] : color.white,
      backgroundColor: props.outline ? color.white : color[props.bgColor],
      fontSize: font[props.fontSize],
      fontWeight: 'bold',
      border: `1px solid ${props.outline ? color[props.bgColor] : color.white}`,
      borderRadius: borderRadius[props.radius],
      padding: spacing[props.spacing],
      ...hoverOpacity,
    }),
);

const Button: React.FC<Props> = (props) => {
  return <_Button {...props}>{props.children}</_Button>;
};

export default Button;
