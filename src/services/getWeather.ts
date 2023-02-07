import { getWeatherAdapter } from "../adapters/getWeatherAdapter";
import { LatLon, Weather } from "../interfaces/interfaces";

export const getWeather = async ({ lat, lon }: LatLon): Promise<Weather> => {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${import.meta.env.VITE_WEATHER_API_KEY}&units=metric&lang=es`);
  const data = await response.json();
  return getWeatherAdapter(data);
}
