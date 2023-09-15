export const QUERY_KEY_WEATHER = 'weatherData';
// export const QUERY_KEY_FAV = 'weatherData';

export async function fetchWeatherData() {
  const response = await fetch('/api/weather');
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  return response.json();
}

// export async function fetchFavWeatherData(ids: string[]) {
//   const promises = ids.map(async (id) => {
//     const response = await fetch(`/api/weather/${id}`);
//     if (!response.ok) {
//       throw new Error(`Failed to fetch weather data for ID ${id}`);
//     }
//     return response.json();
//   });

//   return Promise.all(promises);
// }
