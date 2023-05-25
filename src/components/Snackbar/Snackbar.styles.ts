import { styled } from '@mui/material';
import { MaterialDesignContent } from 'notistack';

export const StyledMaterialDesignContent = styled(MaterialDesignContent)(
  ({ theme }) => ({
    '&.notistack-MuiContent-default': {
      backgroundColor: theme.palette.primary.darker,
    },
  })
);
