import { ForecastSection } from "../../../components/forecastSection";
import { Stack } from "@mui/material";
import { SevenDayForecast } from "../../../model";
import { useSelector } from "react-redux";
import { selectSevenDayForecast } from "../../../state/dailyForecast/dailyForecastSlice";
import DayForecast from "./dayForecast/DayForecast";

const SevenDayForecastComponent = () => {
  const forecast: SevenDayForecast[] = useSelector(selectSevenDayForecast);
  return (
    <Stack
      spacing={2}
      sx={{
        flex: 1,
        overflowX: "scroll",
      }}
    >
      <ForecastSection header="Seven Day Forecast" headerComponent="h4">
        <Stack
          direction={"row"}
          spacing={1}
          sx={{ flexGrow: 1, justifyContent: "space-between" }}
        >
          {forecast.map((forecast) => (
            <DayForecast key={forecast.day} forecast={forecast} />
          ))}
        </Stack>
      </ForecastSection>
    </Stack>
  );
};

export default SevenDayForecastComponent;
