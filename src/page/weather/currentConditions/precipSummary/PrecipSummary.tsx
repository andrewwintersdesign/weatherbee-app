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

  const loading: boolean = currentConditionsStatus === "loading";

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
        <LoadingBox height={96} width={96} opacity={0.1} loading={loading}>
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
                height: `${Math.min(
                  currentConditions.precipitation * 10,
                  100
                )}%`,
                backgroundImage: `url(${PrecipFill})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "bottom",
                marginBottom: "4px",
              }}
            />
          </Box>
        </LoadingBox>
        <LoadingBox height={72} width={120} opacity={0.2} loading={loading}>
          {" "}
          <Typography variant="h2" component="span">
            {currentConditions?.precipitationProbability?.toFixed(0) || "--"}%
          </Typography>
        </LoadingBox>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexGrow: 1,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <LoadingBox height={27} width={100} opacity={0.1} loading={loading}>
          <Typography
            variant="subtitle2"
            sx={{ minWidth: 72, textAlign: "center" }}
          >
            {currentConditions.precipitation === 0 &&
            currentConditions.precipitationProbability > 0
              ? "<0.01"
              : currentConditions.precipitation}
            mm
          </Typography>
        </LoadingBox>
        <LoadingBox height={27} width={200} opacity={0.1} loading={loading}>
          {" "}
          <Typography variant="subtitle2" component="div">
            Chance of precipitation
          </Typography>
        </LoadingBox>
      </Box>
    </>
  );
};

export default PrecipSummary;
