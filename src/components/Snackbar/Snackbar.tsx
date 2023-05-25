import React, { FC } from 'react';
import { SnackbarProvider } from 'notistack';

import { StyledMaterialDesignContent } from './Snackbar.styles';

interface ISnackbarProps {
  children: React.ReactNode;
}

export const Snackbar: FC<ISnackbarProps> = ({ children }) => {
  return (
    <SnackbarProvider
      preventDuplicate
      hideIconVariant
      autoHideDuration={2000}
      anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
      Components={{
        default: StyledMaterialDesignContent,
      }}
    >
      {children}
    </SnackbarProvider>
  );
};
