export const fetchLocations = ((locationSearch: string) => {
  const response = fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${locationSearch}&count=8`)
  .then(data => data.json());
  
  return response
})