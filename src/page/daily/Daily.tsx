import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCurrentLocation,
  setCurrentLocation,
} from "../../state/location/locationSlice";
import { Location, ReverseGeocodeDTO } from "../../model";
import { AppDispatch } from "../../app/store";
import DailyForecast from "./dailyForecast/DailyForecast";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { setStatus } from "../../state/dailyForecast/dailyForecastSlice";

type Props = {};

const Daily = (props: Props) => {
  const currentLocation: Location | undefined = useSelector(
    selectCurrentLocation
  );
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    document.title = `Daily Forecast`;
    if (currentLocation.id === -1) {
      navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    }
  });


  const successCallback = (position: GeolocationPosition) => {
    dispatch(setStatus('loading'))
    fetch(
      `https://api-bdc.net/data/reverse-geocode?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&key=${process.env.REACT_APP_BIG_DATA_CLOUD_KEY}`
    )
      .then((data) => data.json())
      .then((data: ReverseGeocodeDTO) => {
        debugger;
        const location = {
          id: 0,
          name: data.localityInfo?.administrative[data.localityInfo.administrative.length -1].name || data.city || data.locality,
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          elevation: position.coords.altitude || 0,
          feature_code: "",
          country_code: data.countryCode,
          timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
          population: 0,
          country: data.countryName,
        };
        dispatch(setCurrentLocation(location));
      })
      .catch((err) => console.error(err));
  };

  const errorCallback = (error: GeolocationPositionError) => {
    const location: Location = {
      id: -1,
      name: 'No Loction Selected',
      latitude:  -1,
      longitude: -1,
      elevation:  0,
      feature_code: "",
      country_code: 'n',
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      population: 0,
      country: '',
    };
    dispatch(setCurrentLocation(location));
  };

  return (
    <Grid2 container spacing={2} columns={{ xs: 4, sm: 8, lg: 12 }} sx={{minHeight: '100%'}}>
      <Grid2 xs={4}>
        <DailyForecast />
      </Grid2>
      <Grid2 xs={4} lg={8}></Grid2>
    </Grid2>
  );
};

export default Daily;

