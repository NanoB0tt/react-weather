import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import { LatLon, Weather } from "../interfaces/interfaces";
import { getWeekWeather } from "../services/getWeekWeather";
import { WeekDay } from "./WeekDay";

interface Props {
  location: LatLon | null;
}

const WeekWeather = ({ location }: Props) => {
  const [weatherData, setWeatherData] = useState<Weather[] | null>(null);

  useEffect(() => {
    if (location) {
      const fetchData = () => {
        getWeekWeather(location).then(setWeatherData)
      }
      fetchData();
    }
  }, [location?.lat, location?.lon]);

  return (
    <>
      {
        WeekDay(weatherData)?.map((day: Weather[]) => (
          <article key={nanoid()}>
            {day.map(weather => (
              <section key={nanoid()}>
                <h2>{weather.hour}</h2>
                <h2>{`${weather.temperature?.temp}°`}</h2>
                <h2>{`${weather.temperature?.feels_like}°`}</h2>
                <ul>
                  <li>{weather.description}</li>
                  <li><img src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`} /></li>
                </ul>
              </section>
            ))}
          </article>
        ))
      }
    </>
  )

}

export default WeekWeather;
