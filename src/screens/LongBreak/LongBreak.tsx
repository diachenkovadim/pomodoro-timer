import { FC } from 'react';

import { Buttons } from 'components/Buttons';
import { Timer } from 'components/Timer';
import { Label } from 'components/Label/Label';
import { ContentWrapper } from 'components/Layout';

import { useAppSelector } from 'hooks/useRedux';
import { useButtons } from 'hooks/useButtons';

import { ROUTES } from 'constants/routes';

export const LongBreak: FC = () => {
  const { shortBreakLength } = useAppSelector((state) => state.settings);

  const {
    isPlay,
    onResetTimerHandler,
    onNextButtonClickHandler,
    onPlayButtonClickHandler,
    onSettingsButtonClickHandler,
  } = useButtons({
    navigateTo: ROUTES.focus,
    nextCurrPage: 'focus',
  });

  return (
    <ContentWrapper>
      <Label title="Long Break" icon="iconBreakLabel" />
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
