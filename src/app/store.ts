import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import menuReducer from '../state/mobileMenu/mobileMenuSlice';
import locationReducer from '../state/loaction/locationSlice'

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    location: locationReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
