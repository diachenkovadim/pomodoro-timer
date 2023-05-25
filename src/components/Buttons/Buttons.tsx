import { FC } from 'react';
import { Button, Stack, useTheme } from '@mui/material';

import { Icon } from '../Icon';

interface IButtonsProps {
  onNextButtonClickHandler: () => void;
  onPlayButtonClickHandler: () => void;
  onSettingsButtonClickHandler: () => void;
  isPlay: boolean;
}

export const Buttons: FC<IButtonsProps> = (props) => {
  const {
    onNextButtonClickHandler,
    onPlayButtonClickHandler,
    onSettingsButtonClickHandler,
    isPlay,
  } = props;

  console.log('render');

  const theme = useTheme();
  const iconColor = theme.palette.text.primary;
  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <Button
        variant="contained"
        color="secondary"
        disabled={isPlay}
        onClick={onSettingsButtonClickHandler}
      >
        <Icon type="iconDots" fill={iconColor} />
      </Button>

      <Button
        variant="contained"
        color="primary"
        size="large"
        onClick={onPlayButtonClickHandler}
      >
        <Icon type={isPlay ? 'iconStop' : 'iconPlay'} fill={iconColor} />
      </Button>

      <Button
        variant="contained"
        color="secondary"
        onClick={onNextButtonClickHandler}
      >
        <Icon type="iconNext" fill={iconColor} />
      </Button>
    </Stack>
  );
};
