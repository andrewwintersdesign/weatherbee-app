import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentLocation } from "../../../state/location/locationSlice";
import { CurrentConditions, Location } from "../../../model";
import {
  getCurrentConditions,
  selectCurrentConditions,
} from "../../../state/dailyForecast/dailyForecastSlice";
import { AppDispatch } from "../../../app/store";
import { Stack, Box, Typography } from "@mui/material";

type Props = {};

const DailyForecast = (props: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const currentLocation: Location | undefined = useSelector(
    selectCurrentLocation
  );
  const currentConditions: CurrentConditions | undefined = useSelector(
    selectCurrentConditions
  );

  useEffect(() => {
    if (currentLocation) {
      dispatch(
        getCurrentConditions({
          latitude: currentLocation?.latitude,
          longitude: currentLocation?.longitude,
        })
      );
    }
  }, [currentLocation, dispatch]);
  return (
    <Stack spacing={4}>
      <Stack spacing={2}>
        <Box sx={{ borderBottom: 1 }}>
          <Typography variant="h4">Current Conditions</Typography>
        </Box>
        <Box
          sx={{ display: "flex", flexGrow: 1, justifyContent: "space-between" }}
        >
          <Typography variant="h6">{currentLocation?.name}, {currentLocation?.country_code} </Typography>
          <Typography variant="h6">{new Date().toLocaleTimeString('en', { timeStyle: "short", timeZone: currentLocation?.timezone, })} </Typography>
        </Box>
        <Box
          sx={{ display: "flex", flexGrow: 1, justifyContent: "space-between", alignItems: "center" }}
        >
          <Typography variant="h6">{currentConditions?.weatherCode.image} </Typography>
          <Typography variant="h2" component="div">{currentConditions?.temperature.toFixed(0)}°C</Typography>
        </Box>
        <Box
          sx={{ display: "flex", flexGrow: 1, justifyContent: "space-between", alignItems: "center" }}
        >
          <Typography variant="subtitle1">{currentConditions?.weatherCode.summary} </Typography>
          <Typography variant="h2" component="div">{currentConditions?.temperature.toFixed(0)}°C</Typography>
          </Box>
      </Stack>
    </Stack>
  );
};

export default DailyForecast;
