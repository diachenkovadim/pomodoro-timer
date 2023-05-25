import { FC } from 'react';

import { useButtons } from 'hooks/useButtons';
import { useAppSelector } from 'hooks/useRedux';

import { Buttons } from 'components/Buttons';
import { Timer } from 'components/Timer/Timer';
import { Label } from 'components/Label/Label';
import { ContentWrapper } from 'components/Layout';

import { ROUTES } from 'constants/routes';

export const ShortBreak: FC = () => {
  const { shortBreakLength } = useAppSelector((state) => state.settings);

  const {
    isPlay,
    onResetTimerHandler,
    onNextButtonClickHandler,
    onPlayButtonClickHandler,
    onSettingsButtonClickHandler,
  } = useButtons({
    navigateTo: ROUTES.longBreak,
    nextCurrPage: 'longBreak',
  });

  return (
    <ContentWrapper>
      <Label title="Short Break" icon="iconBreakLabel" />
      <Timer
        settingsTime={shortBreakLength}
        isPlay={isPlay}
        onResetTimerHandler={onResetTimerHandler}
      />
      <Buttons
        onPlayButtonClickHandler={onPlayButtonClickHandler}
        onNextButtonClickHandler={onNextButtonClickHandler}
        onSettingsButtonClickHandler={onSettingsButtonClickHandler}
        isPlay={isPlay}
      />
    </ContentWrapper>
  );
};
