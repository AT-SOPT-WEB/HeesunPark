import { createGlobalTheme } from '@vanilla-extract/css';

export const vars = createGlobalTheme(':root', {
  colors: {
    main01: '#BBDEFB',
    main02: '#64B5F6',
    main03: '#2196F3',
    main04: '#1976D2',
    main05: '#0D47A1',
    main06: '#082567',

    alert01: '#FF6363',
    alert02: '#EE4545',
    alert03: '#D93030',

    black70: 'rgba(0, 0, 0, 0.7)',
    white50: 'rgba(255, 255, 255, 0.5)',

    white: '#FFFFFF',
    gray01: '#F3F4F6',
    gray02: '#E5E7EB',
    gray03: '#DDDFE5',
    gray04: '#CFD3DE',
    gray05: '#A7AFBF',
    gray06: '#96A0B1',
    gray07: '#788397',
    gray08: '#636C7F',
    gray09: '#525A6A',
    gray10: '#363E4D',
    gray11: '#202734',
    black: '#091120',
  },
  fontSize: {
    xs: '0.5rem',
    sm: '0.75rem',
    md: '1rem',
    lg: '1.25rem',
    xl: '1.5rem',
    '2xl': '1.75rem',
  },
});
