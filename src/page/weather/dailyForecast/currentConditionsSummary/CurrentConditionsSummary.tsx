import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { selectCurrentLocation } from "../../../../state/location/locationSlice";
import { CurrentConditions, Location } from "../../../../model";
import {
  selectCurrentConditions,
  selectCurrentConditionsStatus,
} from "../../../../state/dailyForecast/dailyForecastSlice";
import WeatherIcon from "../../../../components/weatherIcon/WeatherIcon";
import { LoadingBox } from "../../../../components/loadingBox";

type Props = {};

const CurrentConditionsSummary = (props: Props) => {
  const currentLocation: Location | undefined = useSelector(
    selectCurrentLocation
  );
  const currentConditions: CurrentConditions | undefined = useSelector(
    selectCurrentConditions
  );

  const currentConditionsStatus = useSelector(selectCurrentConditionsStatus);

  const loading: boolean = 
    currentConditionsStatus === "loading" ;

  const h6Height = 32;
  const h2Height = 72;
  const subtitle2Height = 27;

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexGrow: 1,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
       
            <LoadingBox height={h6Height} width={250} opacity={0.2} loading={loading}> <Typography variant="h6">
              {currentLocation?.name}{currentLocation?.country && `, ${currentLocation.country}`}
            </Typography></LoadingBox>
            <LoadingBox height={h6Height} width={120} opacity={0.2} loading={loading}> <Typography variant="h6" sx={{ whiteSpace: "nowrap" }}>
              {new Date().toLocaleTimeString("en", {
                timeStyle: "short",
                timeZone: currentLocation?.timezone,
              })}{" "}
            </Typography></LoadingBox>
    
      </Box>

      <Box
        sx={{
          display: "flex",
          flexGrow: 1,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
      
            <LoadingBox height={96} width={96} opacity={0.2} loading={loading}> <WeatherIcon
              size={"large"}
              iconName={currentConditions.weatherCode.image}
            /></LoadingBox>
            <LoadingBox height={h2Height} width={150} opacity={0.2} loading={loading}> <Typography variant="h2" component="div" >
              {currentConditions?.temperature.toFixed(0)}°C
            </Typography></LoadingBox>
   
      </Box>
      <Box
        sx={{
          display: "flex",
          flexGrow: 1,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        
            <LoadingBox height={subtitle2Height} width={150} opacity={0.1} loading={loading}>    <Typography variant="subtitle2" style={{minWidth: 96, textAlign: 'center'}}>
              {currentConditions?.weatherCode.summary}
            </Typography></LoadingBox>
            <LoadingBox height={subtitle2Height} width={150} opacity={0.1} loading={loading}> <Typography variant="subtitle2" component="div">
              Feels like {currentConditions?.apparentTemperature.toFixed(0)}°C
            </Typography></LoadingBox>
      
      </Box>
    </>
  );
};

export default CurrentConditionsSummary;
