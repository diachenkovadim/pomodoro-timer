import { useMemo } from 'react';
import { CssBaseline } from '@mui/material';
import {
  ThemeProvider as MUIThemeProvider,
  StyledEngineProvider,
  ThemeOptions,
  createTheme,
} from '@mui/material/styles';

import { useAppSelector } from 'hooks/useRedux';

import { GlobalStyles } from './globalStyles';
import { palette } from './palette';
import { typography } from './typography';
import { customBorders } from './customBorders';
import Button from '../overrides/Button';

type TProps = {
  children: React.ReactNode;
};

export const ThemeProvider = ({ children }: TProps) => {
  const { isDarkMode, currentPage } = useAppSelector((state) => state.settings);
  const themeOptions: ThemeOptions = useMemo(
    () => ({
      palette: palette(isDarkMode, currentPage),
      typography,
      shape: { borderRadius: 8 },
      customBorders: customBorders(isDarkMode),
    }),
    [isDarkMode, currentPage]
  );

  const theme = createTheme(themeOptions);
  theme.components = Button(theme);

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
};
