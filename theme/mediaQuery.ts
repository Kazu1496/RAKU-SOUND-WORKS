import { CSSObject } from '@emotion/serialize';
import facepaint, { Arg, DynamicStyle, DynamicStyleFunction } from 'facepaint';

export type MqType = readonly [string, string, string];

interface CustomDynamicStyleFunction extends DynamicStyleFunction {
  (..._args: (CSSObject | Arg)[]): DynamicStyle[];
}

export const breakPoints = {
  small: 375,
  medium: 600,
  large: 1025,
};

const breakPointSelectors: facepaint.Selector[] = Object.values(
  breakPoints,
).map((bp) => `@media(min-width: ${bp}px)`);

export const mq = facepaint(breakPointSelectors) as CustomDynamicStyleFunction;
