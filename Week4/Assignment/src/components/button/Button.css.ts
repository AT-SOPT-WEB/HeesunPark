import { recipe } from '@vanilla-extract/recipes';
import { vars } from '@styles/theme.css';

export const button = recipe({
  base: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    padding: '1rem',

    fontSize: vars.fontSize.lg,
    borderRadius: '6px',
    cursor: 'pointer',
  },
  variants: {
    variant: {
      primary: {
        backgroundColor: vars.colors.main03,
        color: vars.colors.white,
      },
    },
    disabled: {
      true: {
        backgroundColor: vars.colors.gray02,
        color: vars.colors.gray09,
        cursor: 'not-allowed',
      },
      false: {},
    },
  },
  defaultVariants: {
    variant: 'primary',
    disabled: true,
  },
});
