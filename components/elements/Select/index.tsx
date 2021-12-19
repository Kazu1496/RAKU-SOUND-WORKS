import styled from '@emotion/styled';

import { borderRadius, color, spacing, text } from '@/theme';
import { mq } from '@/theme/mediaQuery';

const Wrapper = styled.div(() =>
  mq({
    position: 'relative',
    width: '100%',
    minWidth: '150px',
    '&:after': {
      content: '""',
      display: 'block',
      position: 'absolute',
      top: 'calc(50% - 0.4rem)',
      right: '0.75rem',
      width: '0.5rem',
      height: '0.5rem',
      border: `0 solid ${color.white}`,
      borderWidth: '0 0.125rem 0.125rem 0',
      transform: 'rotate(45deg)',
      willChange: 'top',
      pointerEvents: 'none',
    },
  }),
);

const _Select = styled.select(() =>
  mq({
    padding: spacing.m,
    color: text.white,
    width: '100%',
    maxHeight: '50px',
    background: color.primary,
    borderRadius: borderRadius.s,
    '&:focus': {
      outline: 'none',
    },
  }),
);

export type Option = {
  value: string;
  text: string;
};

interface Props {
  value: string;
  options: Option[];
  onSelect: (_val: string) => void;
}

const Select: React.FC<Props> = ({ value, options, onSelect }) => {
  return (
    <Wrapper>
      <_Select defaultValue={value} onChange={(e) => onSelect(e.target.value)}>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.text}
          </option>
        ))}
      </_Select>
    </Wrapper>
  );
};

export default Select;
