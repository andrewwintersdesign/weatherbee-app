import { Stack, Typography } from "@mui/material";
import { SevenDayForecast } from "../../../../model";
import WeatherIcon from "../../../../components/weatherIcon/WeatherIcon";
import { ReactComponent as High } from "../../../../assets/icons/high.svg"
import { ReactComponent as Low } from "../../../../assets/icons/low.svg"
import { LoadingBox } from "../../../../components/loadingBox";

type Props = {
  forecast: SevenDayForecast;
};

const DayForecast = (props: Props) => {

  
  return (
    <Stack spacing={2} sx={{ padding: 1, alignItems: "center", flexGrow: 1 }}>
      <WeatherIcon size={"small"} iconName={props.forecast.weatherCode.image} />
      <Typography variant="h6">{props.forecast.day}</Typography>
      <Typography variant="subtitle2">
        {new Date(props.forecast.date).toLocaleString("en-gb", {
          day: "numeric",
          month: "short",
        })}
      </Typography>
      <Stack
          direction={"row"}
          spacing={1}
          sx={{ flexGrow: 1, justifyContent: "space-between", alignItems: 'center' }}
        >
        <High/>
        <Typography variant="h6">{props?.forecast?.high?.toFixed(0) || '--'}°C</Typography>
      </Stack>
      <Stack
          direction={"row"}
          spacing={1}
          sx={{ flexGrow: 1, justifyContent: "space-between", alignItems: 'center' }}
        >
        <Low/>
        <Typography variant="h6">{props?.forecast?.low?.toFixed(0) || '--'}°C</Typography>
      </Stack>
    </Stack>
  );
};

export default DayForecast;
