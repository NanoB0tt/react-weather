import { getWeatherAdapter } from "../adapters/getWeatherAdapter";
import { Weather } from "../interfaces/interfaces";

export const getWeatherData = async (location: { lat: number; lon: number; }) => {
  const data: Promise<Weather> = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=ed2c277292dc14513b2b77e5239c846b&units=metric&lang=es`)
    .then(res => res.json())
  return getWeatherAdapter(data);
}
