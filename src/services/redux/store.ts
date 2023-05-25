import { persistStore } from 'redux-persist';
import { configureStore } from '@reduxjs/toolkit';

import { persistedReducer } from './rootReducer';

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: process.env.NODE_ENV !== 'production',
});

const persistedStore = persistStore(store);

export { persistedStore, store };
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
