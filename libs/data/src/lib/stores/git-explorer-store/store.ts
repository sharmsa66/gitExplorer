import { configureStore, ThunkAction, Action,getDefaultMiddleware  } from '@reduxjs/toolkit';
import {reducer as counterReducer} from   './counter.slice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware: [...getDefaultMiddleware()],
  devTools: process.env.NODE_ENV !== 'production',
  enhancers: [],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
