import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentLocation, setCurrentLocation } from "../state/loaction/locationSlice";
import { Location } from "../model";
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
    const location: Location = {
      id: 0,
      name: "Current Location",
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
      elevation: position.coords.altitude || 0,
      feature_code: "",
      country_code: "",
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      population: 0,
      country: "",
    };
    dispatch(setCurrentLocation(location))
  };

  const errorCallback = (error: GeolocationPositionError) => {
    console.error(error);
  };

  return <div>Daily</div>;
};

export default Daily;
