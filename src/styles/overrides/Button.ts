import { Theme } from '@mui/material/styles';
import { ButtonProps } from '@mui/material';

const COLORS = ['primary', 'secondary'] as const;

export default function Button(theme: Theme) {
  const rootStyle = (ownerState: ButtonProps) => {
    const inheritColor = ownerState.color === 'inherit';

    const containedVariant = ownerState.variant === 'contained';

    const mediumSize = ownerState.size === 'medium';
    const largeSize = ownerState.size === 'large';

    const defaultStyle = {
      ...(inheritColor && {
        ...(containedVariant && {
          backgroundColor: theme.palette.primary.main,
        }),
      }),
    };

    const colorStyle = COLORS.map((color) => ({
      ...(ownerState.color === color &&
        color === 'primary' && {
          ...(containedVariant && {
            backgroundColor: theme.palette.primary.dark,
            '&:hover': {
              backgroundColor: theme.palette.primary.main,
            },
          }),
        }),

      ...(ownerState.color === color &&
        color === 'secondary' && {
          ...(containedVariant && {
            backgroundColor: theme.palette.primary.main,
            '&:hover': {
              backgroundColor: theme.palette.primary.dark,
            },
          }),
        }),
    }));

    const size = {
      ...(mediumSize && {
        height: 80,
        width: 80,
        borderRadius: 24,
        fontSize: 13,
        [theme.breakpoints.down('sm')]: {
          width: 70,
          height: 'auto',
          padding: '21px 0',
        },
      }),
      ...(largeSize && {
        height: 96,
        width: 128,
        borderRadius: 32,
        fontSize: 15,
        [theme.breakpoints.down('sm')]: {
          width: 100,
          height: 'auto',
          padding: '23px 0',
        },
      }),
    };

    return [...colorStyle, defaultStyle, size];
  };

  return {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },

      styleOverrides: {
        root: ({ ownerState }: { ownerState: ButtonProps }) =>
          rootStyle(ownerState),
      },
    },
  };
}
