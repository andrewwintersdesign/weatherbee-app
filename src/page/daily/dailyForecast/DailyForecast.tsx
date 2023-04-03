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
import { ReactComponent as WindDirectionIcon } from "../../../assets/icons/wind-direction-96.svg";

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
      debugger;
      dispatch(
        getCurrentConditions({
          latitude: currentLocation?.latitude,
          longitude: currentLocation?.longitude,
        })
      );
    }
  }, [currentLocation,  dispatch]);
  return (
    <Stack spacing={4}>
      <Stack spacing={2}>
        <Box sx={{ borderBottom: 1 }}>
          <Typography variant="h4">Current Conditions</Typography>
        </Box>
        <Box
          sx={{ display: "flex", flexGrow: 1, justifyContent: "space-between" }}
        >
          <Typography variant="h6">
            {currentLocation?.name}, {currentLocation?.country}{" "}
          </Typography>
          <Typography variant="h6" sx={{ whiteSpace: "nowrap" }}>
            {new Date().toLocaleTimeString("en", {
              timeStyle: "short",
              timeZone: currentLocation?.timezone,
            })}{" "}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexGrow: 1,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h6">
            {currentConditions?.weatherCode.image}{" "}
          </Typography>
          <Typography variant="h2" component="div">
            {currentConditions?.temperature.toFixed(0)}°C
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexGrow: 1,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="subtitle2">
            {currentConditions?.weatherCode.summary}{" "}
          </Typography>
          <Typography variant="subtitle2" component="div">
            Feels like {currentConditions?.apparentTemperature.toFixed(0)}°C
          </Typography>
        </Box>
      </Stack>
      <Stack spacing={2}>
        <Box sx={{ borderBottom: 1 }}>
          <Typography variant="subtitle1" sx={{ fontWeght: "400" }}>
            Wind
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexGrow: 1,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h2" component="span">
            {currentConditions?.windSpeed.toFixed(0)}<Typography variant="subtitle1" component="span">km/h</Typography>
          </Typography>
          <Box
            sx={{ transform: `rotate(${currentConditions?.winddirection}deg)`, width: 96, display: 'flex', justifyContent: 'center' }}
          >
            <WindDirectionIcon />
          </Box>
        </Box>
      </Stack>
    </Stack>
  );
};

export default DailyForecast;
