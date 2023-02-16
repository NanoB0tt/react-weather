import { Weather } from "../interfaces/interfaces"

export const getWeekWeatherAdapter = (untypeWeekWeather: any): Weather[] => {
  return untypeWeekWeather.list.map((weatherDay: any) => ({
    description: weatherDay.weather[0].description,
    icon: weatherDay.weather[0].icon,
    temperature: {
      temp: weatherDay.main.temp,
      feels_like: weatherDay.main.feels_like,
      temp_min: weatherDay.main.temp_min,
      temp_max: weatherDay.main.temp_max,
    },
    hour: weatherDay.dt_txt
  })
  )
}
