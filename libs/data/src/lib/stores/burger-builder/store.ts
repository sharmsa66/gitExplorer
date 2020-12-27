import { configureStore, ThunkAction, Action,getDefaultMiddleware  } from '@reduxjs/toolkit';
import {reducer as BurgerReducer} from   './ingredient.slice';
import { reducer as OrderReducer} from './order.slice';
import { reducer as AuthReducer} from './auth.slice';

export const burgerStore = configureStore({
  reducer: {
    burger: BurgerReducer,
    order: OrderReducer ,
    auth: AuthReducer
  },
  middleware: [...getDefaultMiddleware()],
  devTools: process.env.NODE_ENV !== 'production',
  enhancers: [],
});

export type burgerState = ReturnType<typeof burgerStore.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  burgerState,
  unknown,
  Action<string>
>;
