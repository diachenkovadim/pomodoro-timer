import { TCurrentPage } from 'services/redux/settingsReducer';

declare module '@mui/material/styles/createPalette' {
  interface SimplePaletteColorOptions {
    black: string;
    darker: string;
    border: string;
  }
  interface PaletteColor {
    black: string;
    darker: string;
    border: string;
  }

  interface Palette {
    inputBorder: {
      main: string;
    };
  }

  interface PaletteOptions {
    inputBorder: {
      main: string;
    };
  }

  interface TypeBackground {
    switcher: string;
  }
}

const FOCUS = {
  light: '#FFF2F2',
  main: '#FF4C4C26',
  dark: '#FF4C4CB5',
  darker: '#471515',
  black: '#0D0404',
  border: '#FFF2F2',
} as const;

const SHORT_BREAK = {
  light: '#F2FFF5',
  main: '#4DDA6E26',
  dark: '#4DDA6E9E',
  darker: '#14401D',
  black: '#040D06',
  border: '#F2FFF5',
} as const;

const LONG_BREAK = {
  light: '#F2F9FF',
  main: '#4CACFF26',
  dark: '#4CACFF9E',
  darker: '#153047',
  black: '#04090D',
  border: '#F2F9FF',
} as const;

const COLOR_PRESETS = {
  focus: FOCUS,
  shortBreak: SHORT_BREAK,
  longBreak: LONG_BREAK,
} as const;

export const palette = (isDarkMode?: boolean, currentPage?: TCurrentPage) => {
  const primary = COLOR_PRESETS[currentPage || 'focus'];

  const paletteTheme = {
    primary,
    mode: 'light',
    text: {
      primary: primary.darker,
    },
    inputBorder: {
      main: '#00000026',
    },
    background: {
      paper: primary.light,
      default: primary.light,
      switcher: '#0000003D',
    },
  } as const;

  const darkPalleteTheme = {
    primary,
    mode: 'dark',
    text: {
      primary: primary.light,
    },
    inputBorder: {
      main: '#FFFFFF26',
    },
    background: {
      default: primary.black,
      switcher: '#FFFFFF3D',
    },
  } as const;
  return isDarkMode ? darkPalleteTheme : paletteTheme;
};
