import { configureStore,  ThunkAction, Action } from '@reduxjs/toolkit';
import menuReducer from '../state/mobileMenu/mobileMenuSlice';
import locationReducer from '../state/location/locationSlice';
import dailyForecastReducer from '../state/dailyForecast/dailyForecastSlice'




export const store = configureStore({
  reducer: {
    menu: menuReducer,
    location: locationReducer,
    dailyForecast: dailyForecastReducer
  },
 
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
