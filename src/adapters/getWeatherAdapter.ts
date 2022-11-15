import { Weather } from "../interfaces/interfaces";

export const getWeatherAdapter = (untypedWeather: any): Weather => {
  return {
    name: untypedWeather.name,
    description: untypedWeather.weather[0].description,
    icon: untypedWeather.weather[0].icon,
    temperature: {
      temp: untypedWeather.main.temp,
      feels_like: untypedWeather.main.feels_like,
      temp_min: untypedWeather.main.temp_min,
      temp_max: untypedWeather.main.temp_max,
      humidity: untypedWeather.main.humidity
    }
  }
}
