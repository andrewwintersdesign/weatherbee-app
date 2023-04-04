import { Box, Stack, Typography } from '@mui/material';
import { ReactNode } from 'react'

type Props = {
    header: string;
    headerComponent?:  "h1" | "h2" | "h3" | "h4" | "h5" | "h6" |  "subtitle1" | "subtitle2" |  undefined,
    children: ReactNode
}

const ForecastSection = (props: Props) => {
  return (
    <Stack spacing={1}>
        <Box sx={{ borderBottom: 1 }}>
          <Typography variant={props.headerComponent || 'subtitle1'} sx={{ fontWeght: "400" }}>
            {props.header}
          </Typography>
        </Box>
        
        {props.children}
        </Stack>
  )
}

export default ForecastSection