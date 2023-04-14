import { ForecastSection } from "../../../components/forecastSection";
import { Stack } from "@mui/material";
import { SevenDayForecast } from "../../../model";
import { useSelector } from "react-redux";
import {
  selectCurrentConditionsStatus,
  selectSevenDayForecast,
} from "../../../state/dailyForecast/dailyForecastSlice";
import DayForecast from "./dayForecast/DayForecast";
import { LoadingBox } from "../../../components/loadingBox";

const SevenDayForecastComponent = () => {
  const forecast: SevenDayForecast[] = useSelector(selectSevenDayForecast);
  const currentConditionsStatus = useSelector(selectCurrentConditionsStatus);

  const loading: boolean = currentConditionsStatus === "loading";

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
          sx={{ flexGrow: 1, justifyContent: "space-between", overflowX: 'scroll' }}
        >
          {loading
            ? Array.from({ length: 7 }, (x, index) => (
                <LoadingBox
                  key={index}
                  height={283}
                  width={100}
                  opacity={0.2}
                  loading={true}
                >
                  <></>{" "}
                </LoadingBox>
              ))
            : forecast.map((forecast) => (
                <DayForecast key={forecast.day} forecast={forecast} />
              ))}
        </Stack>
      </ForecastSection>
    </Stack>
  );
};

export default SevenDayForecastComponent;
