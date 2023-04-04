import { Box, Typography } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux';
import { LoadingBox } from '../../../../components/loadingBox';
import { CurrentConditions } from '../../../../model';
import { selectCurrentConditions, selectCurrentConditionsStatus } from '../../../../state/dailyForecast/dailyForecastSlice';

 

const DaylightSummary = () => {

    const currentConditions: CurrentConditions | undefined = useSelector(
        selectCurrentConditions
      );
    
      const currentConditionsStatus = useSelector(selectCurrentConditionsStatus);
    
      const loading: boolean =
        currentConditionsStatus === "loading";
  return (
    <Box
        sx={{
          display: "flex",
          flexGrow: 1,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
      
            <LoadingBox height={27} width={100} opacity={0.1} loading={loading}> <Typography variant="subtitle2">
              {`Sunrise: ${new Date(currentConditions.sunrise).toLocaleTimeString('en', { hour: "2-digit", minute: "2-digit" })}`}
            </Typography></LoadingBox>
            <LoadingBox height={27} width={200} opacity={0.1} loading={loading}>  <Typography variant="subtitle2" component="div">
            {`Sunset: ${new Date(currentConditions.sunset).toLocaleTimeString('en', { hour: "2-digit", minute: "2-digit" })}`}
            </Typography></LoadingBox>
      
           
        
      </Box>
  )
}

export default DaylightSummary