import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Box, Container, Grid } from '@mui/material';

import { useButtons } from 'hooks/useButtons';

import { SettingsModalWindow } from '../SettingsModalWindow';

export const Layout: FC = () => {
  const { isSettingsModalWindow, onCloseSettingsModalWindowHandler } =
    useButtons();

  return (
    <Container>
      <Box
        component="main"
        sx={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Grid container>
          <Grid item xs={12} justifyContent="center">
            <Outlet />
          </Grid>
        </Grid>
      </Box>
      <SettingsModalWindow
        isOpenModalWindow={isSettingsModalWindow}
        onToggleModalWindow={onCloseSettingsModalWindowHandler}
      />
    </Container>
  );
};
