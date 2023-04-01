export const fetchCurrentConditions = ((latitude: number, longitude: number) => {
    const response = fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&models=best_match&current_weather=true&timezone=auto`)
    .then(data => data.json()).then(data => {
      debugger;
      return data
    });
    
    return response
  })