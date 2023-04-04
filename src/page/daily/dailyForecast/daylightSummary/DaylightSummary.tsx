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
      
      <LoadingBox height={27} width={200} opacity={0.1} loading={loading}> 
             <Typography variant="subtitle2" component="span" sx={{display: 'flex', alignItems: 'center'}}>
            Sunrise:&nbsp;
            <Typography variant="h6">
              {`${new Date(currentConditions.sunrise).toLocaleTimeString('en', { hour: "2-digit", minute: "2-digit" })}`}
              </Typography>
            </Typography></LoadingBox>
            <LoadingBox height={27} width={200} opacity={0.1} loading={loading}> 
             <Typography variant="subtitle2" component="span" sx={{display: 'flex', alignItems: 'center'}}>
            Sunset:&nbsp;
            <Typography variant="h6">
              {`${new Date(currentConditions.sunset).toLocaleTimeString('en', { hour: "2-digit", minute: "2-digit" })}`}
              </Typography>
            </Typography></LoadingBox>
      
           
        
      </Box>
  )
}

export default DaylightSummary