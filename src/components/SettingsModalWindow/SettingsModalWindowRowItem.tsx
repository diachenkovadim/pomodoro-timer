import { FC } from 'react';
import { Stack, Typography } from '@mui/material';

import { ISettingsModalWindowRowIteProps } from './types';

export const SettingsModalWindowRowItem: FC<ISettingsModalWindowRowIteProps> = (
  props
) => {
  const { children, title } = props;
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      <Typography>{title}</Typography>
      {children}
    </Stack>
  );
};
