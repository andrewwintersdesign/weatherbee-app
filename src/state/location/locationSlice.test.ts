import { RootState } from "../store";
import { FetchStatus } from "../../model";
import reducer, {
  setCurrentLocation,
  clearLocations,
  LocationState,
  selectLocations,
  selectLocationStatus,
  selectCurrentLocation,
} from "./locationSlice";

const initialState: LocationState = {
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
};

const rootState: RootState = {
  location: initialState,
  menu: { open: true },
  dailyForecast: {
    currentConditions: {
      temperature: 0,
      apparentTemperature: 0,
      time: new Date().toISOString(),
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
};

const auckland = {
  admin1: "Auckland",
  admin1_id: 2193734,
  admin2: "Auckland",
  admin2_id: 2193732,
  country: "New Zealand",
  country_code: "NZ",
  country_id: 2186224,
  elevation: 43,
  feature_code: "PPLA",
  id: 2193733,
  latitude: -36.84853,
  longitude: 174.76349,
  name: "Auckland",
  population: 417910,
  timezone: "Pacific/Auckland",
};
describe("reducers", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, { type: undefined })).toEqual(initialState);
  });
  it("should handle setting current location", () => {
    const previousState: LocationState = initialState;

    expect(reducer(previousState, setCurrentLocation(auckland))).toEqual({
      ...previousState,
      currentLocation: auckland,
    });
  });

  it("should handle clearing locations", () => {
    const previousState: LocationState = {
      ...initialState,
      locations: [auckland],
    };

    expect(reducer(previousState, clearLocations())).toEqual({
      ...previousState,
      locations: [],
    });
  });
});

describe("selectors", () => {
  it("should handle location select", () => {
   
    const state = {...rootState, location: {...initialState, currentLocation: auckland}}
    expect(selectCurrentLocation(state)).toEqual(auckland);
  });

  it("should handle locations select", () => {
    const state = {...rootState, location: {...initialState, locations: [auckland]}}
    expect(selectLocations(state)).toContain(auckland);
  });
  it("should handle status select", () => {
    const state = {...rootState, location: {...initialState, status: "succeeded" as FetchStatus}}
    expect(selectLocationStatus(state)).toEqual('succeeded');
  });
});
