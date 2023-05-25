import { FC } from 'react';
import { Box, Typography, useTheme } from '@mui/material';

import { Icon, TIconType } from '../Icon';

interface ILabelProps {
  title: string;
  icon: TIconType;
}
export const Label: FC<ILabelProps> = (props) => {
  const { title, icon } = props;
  const theme = useTheme();
  return (
    <Box
      component="div"
      sx={{
        borderRadius: 5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        py: 1,
        px: 1.5,
        backgroundColor: (theme) => theme.palette.primary.main,
        border: (theme) => theme.customBorders.darkBorder,
      }}
    >
      <Icon type={icon} fill={theme.palette.text.primary} />
      <Typography ml={1} variant="h6">
        {title}
      </Typography>
    </Box>
  );
};
