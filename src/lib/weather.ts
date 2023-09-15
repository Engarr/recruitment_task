export const QUERY_KEY_WEATHER = 'weatherData';

export async function fetchWeatherData() {
  const response = await fetch('/api/weather');
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  return response.json();
}


