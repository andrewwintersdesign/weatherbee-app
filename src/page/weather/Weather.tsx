import { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  selectCurrentLocation,
} from "../../state/location/locationSlice";
import { Location } from "../../model";
import CurrentConditionsComponent from "./currentConditions/CurrentConditions";
import {
  getWeatherForecast,
} from "../../state/dailyForecast/dailyForecastSlice";
import { Stack, Unstable_Grid2 as Grid } from "@mui/material/";
import SevenDayForecastComponent from "./sevenDayForecast/SevenDayForecast";
import TwoDayForecast from "./twoDayForecast/TwoDayForecast";
import { useAppDispatch } from "../../app/hooks";



const Weather = () => {
  const currentLocation: Location | undefined = useSelector(
    selectCurrentLocation
  );
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    document.title = `weatherbee`;
    if (currentLocation && currentLocation.id !== -1) {
      dispatch(
        getWeatherForecast({
          latitude: currentLocation?.latitude,
          longitude: currentLocation?.longitude,
        })
      );
    }
  }, [currentLocation, dispatch]);


  return (
    <Grid
      container
      spacing={4}
      columns={{ xs: 4, sm: 8, lg: 12 }}
      sx={{ minHeight: "100%" }}
    >
      <Grid xs={4}>
        <CurrentConditionsComponent />
      </Grid>
      <Grid xs={4} lg={8}>
        <Stack
          spacing={2}
          sx={{
            justifyContent: "space-between",
            minHeight: { xs: "calc(100vh - 88px)", sm: "calc(100vh - 96px)" },
          }}
        >
          <SevenDayForecastComponent />
          {/* <TwoDayForecast /> */}
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Weather;
