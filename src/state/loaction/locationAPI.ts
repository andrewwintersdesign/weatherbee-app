export const fetchLocations = ((locationSearch: string) => {
  const response = fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${locationSearch}&count=4`)
  .then(data => data.json());
  
  return response
})