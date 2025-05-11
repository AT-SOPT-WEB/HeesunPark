import { style } from '@vanilla-extract/css';
import { vars } from '@styles/theme.css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '4rem',
});

export const head = style({
  fontSize: vars.fontSize['2xl'],
  fontWeight: vars.fontWeight.bold,
});

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
});
