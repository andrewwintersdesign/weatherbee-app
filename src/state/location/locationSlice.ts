import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { FetchStatus, Location } from "../../model";
import { fetchLocations } from "./locationAPI";

export interface LocationState {
  currentLocation?: Location;
  locations: Location[];
  status: FetchStatus;
  error: string | null;
}

const initialState: LocationState = {
  currentLocation: undefined,
  locations: [],
  status: "idle",
  error: null,
};

export const getLocations = createAsyncThunk(
  "location/getLocations",
  async (locationSearch: string) => {
    const response = await fetchLocations(locationSearch)
    
    return response.results;
  }
);

export const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    setCurrentLocation: (state, action) => {
        state.currentLocation = action.payload ;
      },
  },
  extraReducers(builder) {
    builder
      .addCase(getLocations.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(getLocations.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.locations = action.payload ? action.payload : [];
      })
      .addCase(getLocations.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message || null
      })
  }
});

export const { setCurrentLocation } = locationSlice.actions;

export const selectLocations = (state: RootState) => state.location.locations;
export const selectLocationStatus = (state: RootState) => state.location.status;
export const selectCurrentLocation = (state: RootState) => state.location.currentLocation;
export default locationSlice.reducer;
