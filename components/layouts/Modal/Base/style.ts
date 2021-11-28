import styled from '@emotion/styled';
import { rgba } from 'polished';
import { TransitionStatus } from 'react-transition-group';
import { ENTERED } from 'react-transition-group/Transition';

import { color, spacing } from '@/theme';
import { mq } from '@/theme/mediaQuery';

export const transitionDuration = 250;

export const Background = styled.div(
  (props: { transitionStatus: TransitionStatus; baseZIndex: number }) =>
    mq({
      position: 'fixed',
      top: '0',
      left: '0',
      bottom: '0',
      overflowY: 'auto',
      width: '100%',
      height: '100%',
      backgroundColor: rgba(0, 0, 0, 0.7),
      zIndex: props.baseZIndex,
      transition: `all ${transitionDuration}ms ease-out`,
      opacity: props.transitionStatus === ENTERED ? 1 : 0,
      visibility: props.transitionStatus === ENTERED ? 'visible' : 'hidden',
    }),
);

export interface ContainerStyleProps {
  desktopWidth?: string;
  mobileWidth?: string;
  desktopHeight?: string;
  mobileHeight?: string;
  backgroundColor?: string;
}

export const Container = styled.div(
  (
    props: ContainerStyleProps & {
      transitionStatus: TransitionStatus;
      baseZIndex: number;
    },
  ) => {
    const dWidth = '500px';
    const mWidth = '95%';

    return mq({
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
      width: [mWidth, mWidth, mWidth, dWidth],
      maxHeight: 'calc(var(--vh) - 100px)',
      borderRadius: '3px',
      backgroundColor: color.white,
      padding: spacing.xxl,
      overflowY: 'auto',
      zIndex: props.baseZIndex + 1,
      transition: `all ${transitionDuration}ms ease-out`,
      opacity: props.transitionStatus === ENTERED ? 1 : 0,
    });
  },
);
