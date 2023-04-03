import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { CurrentConditions } from "../../../../model";
import {
  selectCurrentConditions,
  selectCurrentConditionsStatus,
} from "../../../../state/dailyForecast/dailyForecastSlice";
import Precip from "../../../../assets/icons/precip-96.svg";
import PrecipFill from "../../../../assets/icons/precip-fill-96.svg";
import { LoadingBox } from "../../../../components/loadingBox";

const PrecipSummary = () => {
  const currentConditions: CurrentConditions | undefined = useSelector(
    selectCurrentConditions
  );

  const currentConditionsStatus = useSelector(selectCurrentConditionsStatus);

  const loading: boolean =
    currentConditionsStatus === "loading" || currentConditionsStatus === "idle";
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
        <Box
          sx={{
            width: 72,
            height: 96,
            backgroundImage: `url(${Precip})`,
            backgroundPosition: "center",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              width: 64,
              height: `${Math.min(currentConditions.precipitation * 10, 100)}%`,
              backgroundImage: `url(${PrecipFill})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "bottom",
              marginBottom: "4px",
            }}
          ></Box>
        </Box>
        {loading ? (
          <LoadingBox height={72} width={100} opacity={0.2} />
        ) : (
          <Typography variant="h2" component="span">
            {currentConditions.precipitationProbability.toFixed(0)}%
          </Typography>
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
            <LoadingBox height={27} width={100} opacity={0.1} />
            <LoadingBox height={27} width={200} opacity={0.1} />
          </>
        ) : (
          <>
            <Typography variant="subtitle2">
              {currentConditions.precipitation}mm
            </Typography>
            <Typography variant="subtitle2" component="div">
              Chance of precipitation
            </Typography>
          </>
        )}
      </Box>
    </>
  );
};

export default PrecipSummary;
