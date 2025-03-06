// src/theme.ts
import { createTheme } from '@mui/material/styles';

// Extend the MUI theme to include custom animations
declare module '@mui/material/styles' {
  interface Theme {
    customAnimations: {
      fadeIn: { initial: object; animate: object };
      slideUp: { initial: object; animate: object };
      zoomIn: { initial: object; animate: object };
      slideLeft: { initial: object; animate: object };
      slideRight: { initial: object; animate: object };
    };
  }
  interface ThemeOptions {
    customAnimations?: {
      fadeIn?: { initial: object; animate: object };
      slideUp?: { initial: object; animate: object };
      zoomIn?: { initial: object; animate: object };
      slideLeft?: { initial: object; animate: object };
      slideRight?: { initial: object; animate: object };
    };
  }
}

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#4a90e2', contrastText: '#ffffff' },
    secondary: { main: '#e91e63', contrastText: '#ffffff' },
    background: { default: '#121212', paper: '#1d1d1d' },
    text: { primary: '#e0e0e0', secondary: '#a0a0a0', disabled: '#707070' },
    error: { main: '#f44336' },
    warning: { main: '#ff9800' },
    info: { main: '#2196f3' },
    success: { main: '#4caf50' }
  },
  typography: {
    fontFamily: ['"Roboto"', 'sans-serif'].join(','),
    h1: { fontSize: '2.5rem', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '1rem' },
    h2: { fontSize: '2rem', fontWeight: 600, letterSpacing: '-0.015em', marginBottom: '0.75rem' },
    h3: { fontSize: '1.75rem', fontWeight: 500, marginBottom: '0.75rem' },
    h4: { fontSize: '1.5rem', fontWeight: 500, marginBottom: '0.5rem' },
    h5: { fontSize: '1.25rem', fontWeight: 400, marginBottom: '0.5rem' },
    body1: { fontSize: '1rem', lineHeight: 1.6 },
    body2: { fontSize: '0.875rem', lineHeight: 1.5 },
    button: { textTransform: 'none', fontWeight: 600 },
    subtitle1: { fontSize: '1rem', fontWeight: 500 },
    subtitle2: { fontSize: '0.875rem', fontWeight: 500 },
    caption: { fontSize: '0.75rem' },
    overline: { fontSize: '0.75rem', letterSpacing: '0.1em' }
  },
  spacing: 8,
  shape: { borderRadius: 8 },
  breakpoints: {
    values: { xs: 0, sm: 600, md: 960, lg: 1280, xl: 1920 }
  },
  transitions: {
    easing: {
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'
    },
    duration: {
      shortest: 150, shorter: 200, short: 250,
      standard: 300, complex: 375,
      enteringScreen: 225, leavingScreen: 195
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
          padding: '10px 20px',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            transform: 'scale(1.05)',
            boxShadow: '0px 4px 20px rgba(0,0,0,0.2)'
          }
        }
      }
    },
    // Other component overrides (MuiAppBar, MuiCard, etc.) go here...
  },
  customAnimations: {
    fadeIn: { initial: { opacity: 0 }, animate: { opacity: 1, transition: { duration: 0.6, ease: 'easeInOut' } } },
    slideUp: { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeInOut' } } },
    zoomIn: { initial: { opacity: 0, scale: 0.8 }, animate: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeInOut' } } },
    slideLeft: { initial: { opacity: 0, x: 20 }, animate: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeInOut' } } },
    slideRight: { initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeInOut' } } }
  }
});

export default theme;
