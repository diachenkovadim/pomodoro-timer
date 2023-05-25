export type TCurrentPage = 'focus' | 'shortBreak' | 'longBreak';

export interface ISETTINGS_INITIAL_STATE {
  isDarkMode: boolean;
  focusLength: number;
  shortBreakLength: number;
  longBreakLength: number;
  isNotification: boolean;
  currentPage: TCurrentPage;
  isSettingsModalWindow: boolean;
}

export type TFieldNames = keyof Omit<
  ISETTINGS_INITIAL_STATE,
  'isDarkMode' | 'isNotification' | 'currentPage' | 'isSettingsModalWindow'
>;
