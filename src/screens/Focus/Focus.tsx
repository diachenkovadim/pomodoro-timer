import { FC } from 'react';

import { Buttons } from 'components/Buttons';
import { Label } from 'components/Label/Label';
import { Timer } from 'components/Timer/Timer';
import { ContentWrapper } from 'components/Layout';

import { useAppSelector } from 'hooks/useRedux';
import { useButtons } from 'hooks/useButtons';

import { ROUTES } from 'constants/routes';

export const Focus: FC = () => {
  const { focusLength } = useAppSelector((state) => state.settings);

  const {
    isPlay,
    onNextButtonClickHandler,
    onPlayButtonClickHandler,
    onSettingsButtonClickHandler,
    onResetTimerHandler,
  } = useButtons({
    navigateTo: ROUTES.shortBreak,
    nextCurrPage: 'shortBreak',
  });

  return (
    <ContentWrapper>
      <Label title="Focus" icon="iconFocusLabel" />
      <Timer
        settingsTime={focusLength}
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
