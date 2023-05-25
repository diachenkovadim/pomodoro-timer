import { useAppDispatch, useAppSelector } from 'hooks/useRedux';
import {
  TFieldNames,
  setIsDarkMode,
  setIsNotification,
  setLengthValue,
  increaseLengthValue,
  decreaseLengthValue,
} from 'services/redux/settingsReducer';

import { getModalFields } from './helpers';

export const useSettingsModalWindowState = () => {
  const dispath = useAppDispatch();
  const {
    focusLength,
    isDarkMode,
    isNotification,
    longBreakLength,
    shortBreakLength,
  } = useAppSelector((state) => state.settings);

  const onChangeFieldHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = +event.target.value;
    const value = inputValue < 1 ? 1 : inputValue;
    dispath(
      setLengthValue({
        value: value,
        fieldName: event.target.name as TFieldNames,
      })
    );
  };

  const onChangeIsDarkModeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => dispath(setIsDarkMode(event.target.checked));

  const onChangeIsNotificationHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => dispath(setIsNotification(event.target.checked));

  const onAddTimeClickButtonHandler = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => dispath(increaseLengthValue(event.currentTarget.name as TFieldNames));

  const onSubstructTimeClickButtonHandler = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => dispath(decreaseLengthValue(event.currentTarget.name as TFieldNames));

  const inputFields = getModalFields({
    onChangeFieldHandler,
    focusLength,
    longBreakLength,
    shortBreakLength,
  });

  return {
    inputFields,
    onChangeIsNotificationHandler,
    onChangeIsDarkModeHandler,
    onSubstructTimeClickButtonHandler,
    onAddTimeClickButtonHandler,
    isDarkMode,
    isNotification,
  };
};
