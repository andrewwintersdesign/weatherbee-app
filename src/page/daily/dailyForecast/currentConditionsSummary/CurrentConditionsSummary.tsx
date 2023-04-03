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
    currentConditionsStatus === "loading" || currentConditionsStatus === "idle";

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
        {loading ? (
          <>
            <LoadingBox height={h6Height} width={200} opacity={0.2} />
            <LoadingBox height={h6Height} width={100} opacity={0.2} />
          </>
        ) : (
          <>
            <Typography variant="h6">
              {currentLocation?.name}, {currentLocation?.country}{" "}
            </Typography>
            <Typography variant="h6" sx={{ whiteSpace: "nowrap" }}>
              {new Date().toLocaleTimeString("en", {
                timeStyle: "short",
                timeZone: currentLocation?.timezone,
              })}{" "}
            </Typography>
          </>
        )}
      </Box>

      <Box
        sx={{
          display: "flex",
          flexGrow: 1,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {loading ? (
          <>
            <LoadingBox height={96} width={96} opacity={0.2} />
            <LoadingBox height={h2Height} width={130} opacity={0.2} />
          </>
        ) : (
          <>
            <WeatherIcon
              size={"large"}
              iconName={currentConditions.weatherCode.image}
            />
            <Typography variant="h2" component="div">
              {currentConditions?.temperature.toFixed(0)}°C
            </Typography>
          </>
        )}
      </Box>
      <Box
        sx={{
          display: "flex",
          flexGrow: 1,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {loading ? (
          <>
            <LoadingBox height={subtitle2Height} width={100} opacity={0.1} />
            <LoadingBox height={subtitle2Height} width={100} opacity={0.1} />
          </>
        ) : (
          <>
            <Typography variant="subtitle2">
              {currentConditions?.weatherCode.summary}
            </Typography>
            <Typography variant="subtitle2" component="div">
              Feels like {currentConditions?.apparentTemperature.toFixed(0)}°C
            </Typography>
          </>
        )}
      </Box>
    </>
  );
};

export default CurrentConditionsSummary;
