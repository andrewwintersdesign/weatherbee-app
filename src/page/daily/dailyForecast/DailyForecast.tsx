import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentLocation } from "../../../state/location/locationSlice";
import { CurrentConditions, Location } from "../../../model";
import { getCurrentConditions, selectCurrentConditions } from "../../../state/dailyForecast/dailyForecastSlice";
import { AppDispatch } from "../../../app/store";

type Props = {};

const DailyForecast = (props: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const currentLocation: Location | undefined = useSelector(
    selectCurrentLocation
  );
  const currentConditions: CurrentConditions | undefined = useSelector(selectCurrentConditions)
  let x = ''
  useEffect(() => {
    if(currentLocation){
    dispatch(getCurrentConditions({latitude: currentLocation?.latitude, longitude: currentLocation?.longitude}))
    }
  }, [currentLocation, dispatch]);
  return <div>{currentConditions?.currentPercievedTemp }</div>;
};

export default DailyForecast;
