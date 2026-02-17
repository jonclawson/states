import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { combineReducers } from 'redux';
import counterReducer from '../features/counterSlice';
import todosReducer from '../features/todosSlice';
import logger from '../middleware/logger';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
  counter: counterReducer,
  todos: todosReducer,
});

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ['counter', 'todos'],
};

const makeStore = () => {
  const persistedReducer = typeof window !== 'undefined' ? persistReducer(persistConfig, rootReducer) : rootReducer;

  const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefault) => getDefault().concat(logger),
    devTools: process.env.NODE_ENV !== 'production',
  }) as any;

  if (typeof window !== 'undefined') {
    (store as any).__persistor = persistStore(store);
  }

  return store;
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = AppStore['dispatch'];

export const wrapper = createWrapper<AppStore>(makeStore);
