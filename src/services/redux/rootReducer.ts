import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { seatingsReducer } from './settingsReducer';

export const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['settings'],
};

const combinedReducers = combineReducers({
  settings: seatingsReducer,
});

export const persistedReducer = persistReducer(persistConfig, combinedReducers);
