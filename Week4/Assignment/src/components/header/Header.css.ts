import { vars } from '@styles/theme.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '1rem',

  backgroundColor: vars.colors.main03,
  color: vars.colors.white,
  fontSize: vars.fontSize.lg,
});

export const nav = style({
  display: 'flex',
  gap: '1rem',

  cursor: 'pointer',
});
