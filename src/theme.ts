// src/theme.ts
import { createTheme } from '@mui/material/styles';

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
    primary: {
      main: '#4a90e2',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#e91e63',
      contrastText: '#ffffff',
    },
    background: {
      default: '#0e0e12',
      paper: 'rgba(29, 29, 33, 0.85)',
    },
    text: {
      primary: '#e0e0e0',
      secondary: '#b0b3b8',
    },
    action: {
      hover: 'rgba(255, 255, 255, 0.1)',
      selected: 'rgba(255, 255, 255, 0.1)',
    },
  },
  typography: {
    fontFamily: ['Inter', 'Roboto', 'sans-serif'].join(','),
    h1: {
      fontSize: '3rem',
      fontWeight: 800,
      letterSpacing: '-0.03em',
      marginBottom: '1rem',
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 700,
      letterSpacing: '-0.02em',
      marginBottom: '1rem',
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 700,
      marginBottom: '0.75rem',
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 600,
      marginBottom: '0.5rem',
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 600,
      marginBottom: '0.5rem',
    },
    subtitle1: {
      fontSize: '1rem',
      fontWeight: 600,
    },
    subtitle2: {
      fontSize: '0.875rem',
      fontWeight: 600,
    },
    body1: { fontSize: '1rem', lineHeight: 1.5 },
    body2: { fontSize: '0.875rem' },
    button: { fontWeight: 600 },
    caption: { fontSize: '0.75rem', fontWeight: 500 },
    overline: { fontSize: '0.75rem', letterSpacing: '0.1em' },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: '0.8rem 1.5rem',
          backgroundColor: 'transparent',
          border: '2px solid #e91e63',
          color: '#000000',
          fontSize: '0.8rem',
          fontWeight: '400',
          borderRadius: 0,
          cursor: 'pointer',
          transition: 'transform 0.5s ease, background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease',
          '&:hover': {
            backgroundColor: '#e91e63',
            borderColor: '#e91e63',
            color: '#ffffff',
            transform: 'scale(1.05)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: 'rgba(29, 29, 33, 0.8)',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.35)',
          border: '1px solid rgba(255,255,255,0.05)',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(18,18,24,0.9)',
          backdropFilter: 'blur(10px)',
          boxShadow: 'none',
          borderBottom: '1px solid rgba(255,255,255,0.05)',
        },
      },
    },
  },
  customAnimations: {
    fadeIn: {
      initial: { opacity: 0 },
      animate: { opacity: 1, transition: { duration: 0.8, ease: 'easeInOut' } },
    },
    slideUp: {
      initial: { opacity: 0, y: 40 },
      animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
    },
    slideLeft: {
      initial: { opacity: 0, x: 40 },
      animate: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } },
    },
    slideRight: {
      initial: { opacity: 0, x: -40 },
      animate: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
    },
    zoomIn: {
      initial: { opacity: 0, scale: 0.95 },
      animate: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } },
    },
  },
});

export default theme;