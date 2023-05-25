import { FC } from 'react';
import { Stack, Typography } from '@mui/material';

import { useCountdown } from 'hooks/useCountdown';
import { getTimeValues } from 'helpers/time';

interface ITimerProps {
  settingsTime: number;
  isPlay: boolean;
  onResetTimerHandler: () => void;
}
export const Timer: FC<ITimerProps> = (props) => {
  const { settingsTime, isPlay, onResetTimerHandler } = props;
  const time = settingsTime * 60;

  const { counter } = useCountdown(time, isPlay, onResetTimerHandler);

  const { minutesValue, secondsValue } = getTimeValues(counter);
  const fontVariant = isPlay || counter < time ? 'h1' : 'h2';
  return (
    <Stack spacing={1}>
      <Typography variant={fontVariant}>{minutesValue}</Typography>
      <Typography variant={fontVariant}>{secondsValue}</Typography>
    </Stack>
  );
};
