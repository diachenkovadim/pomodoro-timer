import { palette } from './palette';

interface CustomBordersOptions {
  darkBorder: string;
}

declare module '@mui/material/styles' {
  interface Theme {
    customBorders: CustomBordersOptions;
  }
  interface ThemeOptions {
    customBorders?: CustomBordersOptions;
  }
}

const themeColor = palette();

const DARK_MODE = themeColor?.primary?.border;

const LIGHT_MODE = themeColor.primary.darker;

const createBorders = (color: string) => {
  return {
    darkBorder: `2px solid ${color}`,
  };
};

export const customBorders = (isDarkMode: boolean) =>
  createBorders(isDarkMode ? DARK_MODE : LIGHT_MODE);
