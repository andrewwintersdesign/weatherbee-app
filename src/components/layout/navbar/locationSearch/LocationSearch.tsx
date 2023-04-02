import { Autocomplete, CircularProgress, Icon, TextField } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch } from "../../../../app/store";
import {
  selectLocationStatus,
  getLocations,
  selectLocations,
  selectCurrentLocation,
  setCurrentLocation,
} from "../../../../state/location/locationSlice";
import { Location } from "../../../../model";
import { SyntheticEvent } from "react";
import React from "react";
import { close } from "../../../../state/mobileMenu/mobileMenuSlice";

const LocationSearch = () => {
  const [value] = React.useState<Location | undefined>(
    useSelector(selectCurrentLocation)
  );
  const dispatch = useDispatch<AppDispatch>();
  const locationStatus = useSelector(selectLocationStatus);
  const loading = locationStatus === "loading";
  const locationOptions: Location[] = useSelector(selectLocations);

  let debounceTimeout: ReturnType<typeof setTimeout>;

  const fetchLocations = (searchString: string | null) => {
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => {
      if (searchString && searchString.length > 1)
        dispatch(getLocations(searchString));
    }, 300);
  };

  return (
    <Autocomplete
      id="search-location"
      freeSolo
      filterOptions={(x) => x}
      sx={{ width: "100%", maxWidth: 300 }}
      isOptionEqualToValue={(option, value) => option.id === value.id}
      getOptionLabel={(location) =>
        typeof location === "string"
          ? location
          : location.country
          ? `${location.name}, ${location.country}`
          : `${location.name}`
      }
      options={locationOptions}
      autoComplete
      includeInputInList
      value={value}
      noOptionsText="No locations"
      onChange={(event: SyntheticEvent, newValue: Location | string | null) => {
        const location = typeof newValue !== "string" ? newValue : undefined;
        if (location) {
          dispatch(setCurrentLocation(location));
          dispatch(close());
        } else {
          console.error("Location not found");
        }
      }}
      onInputChange={(event, newInputValue) => {
        fetchLocations(newInputValue);
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search Locations"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {loading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : (
                  <Icon>search</Icon>
                )}
                {params.InputProps.endAdornment}
              </>
            ),
          }}
        />
      )}
    />
  );
};

export default LocationSearch;
