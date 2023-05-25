import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  TCurrentPage,
  setCurrentPage,
  setIsSettingsModalWindow,
} from 'services/redux/settingsReducer';

import { useAppDispatch, useAppSelector } from './useRedux';
import { useSnackbar } from 'notistack';
import { useSounds } from './useSounds';

interface IuseButtonsProps {
  navigateTo: string;
  nextCurrPage: TCurrentPage;
}
export const useButtons = (props?: IuseButtonsProps) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const { pause, start, slide, timeUp } = useSounds();

  const { isSettingsModalWindow, isNotification } = useAppSelector(
    (state) => state.settings
  );
  const [isPlay, setIsPlay] = useState(false);

  const onPlayButtonClickHandler = () => {
    if (!isPlay) {
      setIsPlay(true);

      if (isNotification) {
        start();
        enqueueSnackbar('Time is running', {
          variant: 'default',
        });
      }
    } else {
      setIsPlay(false);
      isNotification && pause();
    }
  };

  const onNextButtonClickHandler = () => {
    isNotification && slide();
    dispatch(setCurrentPage(props?.nextCurrPage || 'focus'));
    navigate(props?.navigateTo || '', { replace: true });
  };

  const onSettingsButtonClickHandler = () => {
    isNotification && slide();
    dispatch(setIsSettingsModalWindow(true));
  };

  const onCloseSettingsModalWindowHandler = () =>
    dispatch(setIsSettingsModalWindow(false));

  const onResetTimerHandler = () => {
    setIsPlay(false);
    if (isNotification) {
      timeUp();
      enqueueSnackbar('Time is up');
    }
  };
  return {
    onPlayButtonClickHandler,
    onNextButtonClickHandler,
    onSettingsButtonClickHandler,
    onCloseSettingsModalWindowHandler,
    onResetTimerHandler,
    isSettingsModalWindow,
    isPlay,
  };
};
