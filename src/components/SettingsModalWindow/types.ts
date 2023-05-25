import { TFieldNames } from 'services/redux/settingsReducer';

export interface IgetModalFieldsProps {
  onChangeFieldHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  focusLength: number;
  longBreakLength: number;
  shortBreakLength: number;
}

export interface IResponse {
  title: string;
  fieldName: TFieldNames;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: number;
}

export interface ISettingsModalWindowRowIteProps {
  title: string;
  children: React.ReactNode;
}

export interface ISettingsModalWindowProps {
  isOpenModalWindow: boolean;
  onToggleModalWindow: () => void;
}
