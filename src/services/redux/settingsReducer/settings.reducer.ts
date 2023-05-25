import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import {
  ISETTINGS_INITIAL_STATE,
  TCurrentPage,
  TFieldNames,
} from './settings.types';

export const initialState: ISETTINGS_INITIAL_STATE = {
  isDarkMode: false,
  isNotification: false,
  isSettingsModalWindow: false,
  focusLength: 25,
  shortBreakLength: 5,
  longBreakLength: 15,
  currentPage: 'focus',
};

export const seatingsSlice = createSlice({
  name: 'seatingsSlice',
  initialState,
  reducers: {
    setIsSettingsModalWindow: (
      state: ISETTINGS_INITIAL_STATE,
      action: PayloadAction<boolean>
    ) => {
      state.isSettingsModalWindow = action.payload;
    },
    setCurrentPage: (
      state: ISETTINGS_INITIAL_STATE,
      action: PayloadAction<TCurrentPage>
    ) => {
      state.currentPage = action.payload;
    },
    setIsDarkMode: (
      state: ISETTINGS_INITIAL_STATE,
      action: PayloadAction<boolean>
    ) => {
      state.isDarkMode = action.payload;
    },
    setLengthValue: (
      state: ISETTINGS_INITIAL_STATE,
      action: PayloadAction<{ fieldName: TFieldNames; value: number }>
    ) => {
      const { fieldName, value } = action.payload;
      if (state[fieldName] < 1) return;
      state[fieldName] = value;
    },
    setIsNotification: (
      state: ISETTINGS_INITIAL_STATE,
      action: PayloadAction<boolean>
    ) => {
      state.isNotification = action.payload;
    },
    increaseLengthValue: (
      state: ISETTINGS_INITIAL_STATE,
      action: PayloadAction<TFieldNames>
    ) => {
      state[action.payload] += 1;
    },
    decreaseLengthValue: (
      state: ISETTINGS_INITIAL_STATE,
      action: PayloadAction<TFieldNames>
    ) => {
      if (state[action.payload] === 1) return;
      state[action.payload] -= 1;
    },
  },
});

export const {
  decreaseLengthValue,
  increaseLengthValue,
  setIsDarkMode,
  setIsNotification,
  setLengthValue,
  setCurrentPage,
  setIsSettingsModalWindow,
} = seatingsSlice.actions;

export const seatingsReducer = seatingsSlice.reducer;
