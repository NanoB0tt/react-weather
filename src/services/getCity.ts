import { City } from "../interfaces/interfaces";

export const getCity = async (cityName: string): Promise<City[]> => {
  const response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${import.meta.env.VITE_WEATHER_API_KEY}`);
  const data = await response.json();
  return data;
}
