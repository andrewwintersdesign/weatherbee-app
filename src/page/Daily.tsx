import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCurrentLocation,
  setCurrentLocation,
} from "../state/loaction/locationSlice";
import { Location, ReverseGeoCode } from "../model";
import { AppDispatch } from "../app/store";

type Props = {};

const Daily = (props: Props) => {
  const currentLocation: Location | undefined = useSelector(
    selectCurrentLocation
  );
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    document.title = `Daily Forcast`;
    if (!currentLocation) {
      navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    }
  });

  const successCallback = (position: GeolocationPosition) => {
    fetch(
      `https://api-bdc.net/data/reverse-geocode?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&key=${process.env.REACT_APP_BIG_DATA_CLOUD_KEY}`
    )
      .then((data) => data.json())
      .then((data: ReverseGeoCode) => {
        const location = {
          id: 0,
          name: data.city || data.locality,
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          elevation: position.coords.altitude || 0,
          feature_code: "",
          country_code: "",
          timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
          population: 0,
          country: "",
        };
        dispatch(setCurrentLocation(location));
      })
      .catch((err) => console.error(err));
  };

  const errorCallback = (error: GeolocationPositionError) => {
    console.error(error);
  };

  return <div>Daily</div>;
};

export default Daily;
