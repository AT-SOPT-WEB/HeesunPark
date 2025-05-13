import { style } from '@vanilla-extract/css';
import { vars } from '@styles/theme.css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1rem',
});

export const signup = style({
  cursor: 'pointer',
  color: vars.colors.gray08,

  selectors: {
    '&:hover': {
      color: vars.colors.black,
    },
  },
});
