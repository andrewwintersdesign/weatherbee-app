import { RootState } from "../../app/store";
import reducer, {
  toggle,
  open,
  close,
  selectMenuOpen,
} from "./mobileMenuSlice";

const initialState = {
  open: false,
};

const rootState: RootState = {
  menu: initialState,
  dailyForecast: {
    currentConditions: {
      temperature: 0,
      apparentTemperature: 0,
      time: new Date(0).toISOString(),
      weatherCode: {
        image: "",
        summary: "",
      },
      windDirection: 0,
      windSpeed: 0,
      precipitation: 0,
      precipitationProbability: 0,
      sunrise: new Date(0).toISOString(),
      sunset: new Date(0).toISOString(),
    },
    sevenDayForecast: [],
    twoDayForecast: [],
    status: "idle",
    error: null,
  },
  location: {
    currentLocation: {
      id: -1,
      name: "No Loction Selected",
      latitude: 0,
      longitude: 0,
      elevation: 0,
      feature_code: "",
      country_code: "",
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      population: 0,
      country: "",
    },
    locations: [],
    status: "idle",
    error: null,
  },
};

describe('reducer', () => {
    it("should return the initial state", () => {
        expect(reducer(undefined, { type: undefined })).toEqual(initialState);
      });
      it('should handle toggling menu', () => {
        const previousState = initialState
        expect(reducer(previousState, toggle())).toEqual({open: !previousState.open});
      })
      it('should handle opening menu', () => {
        const previousState = initialState
        expect(reducer(previousState, open())).toEqual({open: true});
      })
      it('should handle closing menu', () => {
        const previousState = initialState
        expect(reducer(previousState, close())).toEqual({open: false});
      })
})

describe('selector', () => {
  it('should select menu state', () => {
    expect(selectMenuOpen(rootState)).toEqual(false);
  })
})

