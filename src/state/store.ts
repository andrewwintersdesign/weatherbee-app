import {
  configureStore,
  ThunkAction,
  Action,
  combineReducers,
  PreloadedState,
} from "@reduxjs/toolkit";
import menuReducer from "../state/mobileMenu/mobileMenuSlice";
import locationReducer from "../state/location/locationSlice";
import dailyForecastReducer from "../state/dailyForecast/dailyForecastSlice";

const rootReducer = combineReducers({
  menu: menuReducer,
  location: locationReducer,
  dailyForecast: dailyForecastReducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};

export const store = configureStore({
  reducer: rootReducer,
});
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
