import { Box, Typography } from "@mui/material";
import {
  CurrentConditions,
  windDirection,
  windStrength,
} from "../../../../model";

import { ReactComponent as WindDirectionIcon } from "../../../../assets/icons/wind-direction-96.svg";
import { useSelector } from "react-redux";
import {
  selectCurrentConditions,
  selectCurrentConditionsStatus,
} from "../../../../state/dailyForecast/dailyForecastSlice";
import { LoadingBox } from "../../../../components/loadingBox";

const WindSummary = () => {
  const currentConditions: CurrentConditions | undefined = useSelector(
    selectCurrentConditions
  );

  const currentConditionsStatus = useSelector(selectCurrentConditionsStatus);

  const loading: boolean = 
    currentConditionsStatus === "loading" ;
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
      
          <LoadingBox height={72} width={150} opacity={0.2} loading={loading}><Typography variant="h2" component="span">
          {currentConditions?.windSpeed?.toFixed(0) || '--'}
          <Typography variant="subtitle1" component="span">
            km/h
          </Typography>
        </Typography></LoadingBox>
     

        <Box
          sx={{
            transition: "transform ease 200ms",
            transform: `rotate(${currentConditions.windDirection}deg)`,
            width: 96,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <LoadingBox height={72} width={72} opacity={0.2} loading={loading}>
          <WindDirectionIcon />
          </LoadingBox>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexGrow: 1,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
      
            <LoadingBox height={27} width={150} opacity={0.1} loading={loading}> <Typography variant="subtitle2">
              {windStrength(currentConditions.windSpeed)}
            </Typography></LoadingBox>
            <LoadingBox height={27} width={200} opacity={0.1} loading={loading}> <Typography variant="subtitle2" component="div">
              {windDirection(currentConditions.windDirection)}
            </Typography></LoadingBox>

       
      </Box>
    </>
  );
};

export default WindSummary;
