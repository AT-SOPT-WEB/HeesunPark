import { vars } from '@styles/theme.css';
import { style } from '@vanilla-extract/css';

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  width: '35rem',
  gap: '1rem',
});

export const input = style({
  padding: '1rem',

  fontSize: vars.fontSize.lg,
  border: `1px solid ${vars.colors.gray04}`,
  borderRadius: '5px',

  selectors: {
    '&::placeholder': {
      color: vars.colors.gray06,
    },
  },
});
