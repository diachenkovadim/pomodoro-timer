import { TextField, Button, styled } from '@mui/material';

export const InputWithArrowsStyles = {
  StyledInput: styled(TextField)(({ theme }) => ({
    width: 66,
    height: 40,
    '& .MuiInputBase-input': {
      height: 40,
      boxSizing: 'border-box',
      px: 1,
      textAlign: 'center',
    },
    '& .MuiInputBase-root': {
      height: 40,
      '&.MuiInput-root::before, &.MuiInput-root::after': {
        content: 'none',
      },
    },
  })),

  StyledButton: styled(Button)(({ theme }) => ({
    borderBottom: '1px solid rgba(0, 0, 0, 0.15)',
    borderRadius: 0,
    minWidth: 29,
    height: 20,
    '&::before': {
      width: 0,
      height: 0,
      position: 'absolute',
      content: '""',
      borderStyle: 'solid',
      borderWidth: '0 6px 10px 6px',
      borderColor: `transparent transparent ${theme.palette.text.primary} transparent`,
    },
  })),
};
