import '@styles/layer.css';
import '@styles/reset.css';
import { globalStyle } from '@vanilla-extract/css';

globalStyle('body', {
  fontFamily: '"Pretendard Variable", Pretendard, -apple-system, sans-serif',
});

globalStyle('main', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: 'calc(100vh - 5rem)',
});
