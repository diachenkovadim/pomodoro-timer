import { Box, styled } from '@mui/material';

export const SettingsModalWindowStyles = {
  CardSX: {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '448px',
    width: '100%',
    bgcolor: 'background.paper',
    px: 3,
    pt: 3.5,
    pb: 4,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    borderRadius: 3,
  },

  CloseButton: styled(Box)(({ theme }) => ({
    position: 'absolute',
    right: '0',
    top: '0',
    width: '28px',
    height: '28px',
    borderRadius: theme.shape.borderRadius,
    p: 1,
    ':hover': {
      background: theme.palette.primary.main,
      cursor: 'pointer',
    },
    '&::before, &::after': {
      position: 'absolute',
      left: '50%',
      top: '50%',
      content: "' '",
      height: '20px',
      width: '2px',
      backgroundColor: theme.palette.text.primary,
      transform: 'translate(-50%, -50%) rotate(45deg)',
    },
    '&::after': {
      transform: 'translate(-50%, -50%) rotate(-45deg)',
    },
  })),
};
