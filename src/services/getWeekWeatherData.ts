import { getWeekWeatherAdapter } from "../adapters/getWeekWeatherAdapter";
import { Weather } from "../interfaces/interfaces";

export const getWeekWeather = async (): Promise<Weather[]> => {
  const data = await fetch(`5daysForecast.json`)
    .then(res => res.json())
  return getWeekWeatherAdapter(data);
}
