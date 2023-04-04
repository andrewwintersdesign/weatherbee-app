import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentLocation } from "../../../state/location/locationSlice";
import { Location } from "../../../model";
import { getCurrentConditions } from "../../../state/dailyForecast/dailyForecastSlice";
import { AppDispatch } from "../../../app/store";
import { Stack } from "@mui/material";

import { ForecastSection } from "../../../components/forecastSection";
import { CurrentConditionsSummary } from "./currentConditionsSummary";
import { WindSummary } from "./windSummary";
import { PrecipSummary } from "./precipSummary";
import { DaylightSummary } from "./daylightSummary";

const DailyForecast = () => {
  const dispatch = useDispatch<AppDispatch>();
  const currentLocation: Location | undefined = useSelector(
    selectCurrentLocation
  );
  

  useEffect(() => {
    if (currentLocation && currentLocation.id !== -1) {
      dispatch(
        getCurrentConditions({
          latitude: currentLocation?.latitude,
          longitude: currentLocation?.longitude,
        })
      );
    }
  }, [currentLocation, dispatch]);
  return (
    <Stack
      spacing={2}
      sx={{
        justifyContent: "space-between",
        minHeight: { xs: "calc(100vh - 88px)", sm: "calc(100vh - 96px)" },
      }}
    >
      <ForecastSection header="Current Conditions" headerComponent="h4">
        <CurrentConditionsSummary />
      </ForecastSection>
      <ForecastSection header="Wind">
        <WindSummary />
      </ForecastSection>
      <ForecastSection header="Precipitation">
        <PrecipSummary />
      </ForecastSection>
      <ForecastSection header="Sunrise & Sunset">
        <DaylightSummary />
      </ForecastSection>
    </Stack>
  );
};

export default DailyForecast;
