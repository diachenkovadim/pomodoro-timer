import { FC } from 'react';
import { Stack } from '@mui/material';

export const ContentWrapper: FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <Stack spacing={{ xs: 2, sm: 3, md: 4 }} alignItems="center">
    {children}
  </Stack>
);
