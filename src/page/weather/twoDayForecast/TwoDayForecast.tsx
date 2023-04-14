import React from 'react'
import { ForecastSection } from '../../../components/forecastSection'
import { Stack } from '@mui/material'

type Props = {}

const TwoDayForecast = (props: Props) => {
  return (
    <Stack
    spacing={2}
    sx={{
      flex: 1
    }}
  >
    <ForecastSection header="48 hour Forecast" headerComponent="h4">
      Hello!
    </ForecastSection>
  </Stack>
  )
}

export default TwoDayForecast