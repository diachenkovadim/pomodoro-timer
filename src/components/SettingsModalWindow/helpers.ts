import { IResponse, IgetModalFieldsProps } from './types';

export const getModalFields = (props: IgetModalFieldsProps): IResponse[] => {
  const {
    focusLength,
    longBreakLength,
    onChangeFieldHandler,
    shortBreakLength,
  } = props;
  return [
    {
      title: 'Focus length',
      onChange: onChangeFieldHandler,
      fieldName: 'focusLength',
      value: focusLength,
    },
    {
      title: 'Short break length',
      onChange: onChangeFieldHandler,
      fieldName: 'shortBreakLength',
      value: shortBreakLength,
    },
    {
      title: 'Long break length',
      onChange: onChangeFieldHandler,
      fieldName: 'longBreakLength',
      value: longBreakLength,
    },
  ];
};
