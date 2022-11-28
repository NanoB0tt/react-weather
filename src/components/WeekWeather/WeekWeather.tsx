import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import { LatLon, Weather } from "../../interfaces/interfaces";
import { getWeekWeather } from "../../services/getWeekWeather";
import { GetDay, WeekDay } from "../../utils/utils";
import style from "./WeekWeather.module.css";

interface Props {
  location: LatLon | null;
}

const WeekWeather = ({ location }: Props) => {
  const [weatherData, setWeatherData] = useState<Weather[] | null>(null);

  useEffect(() => {
    if (location) {
      const fetchData = () => {
        getWeekWeather(location).then(setWeatherData);
      }
      fetchData();
    }
  }, [location?.lat, location?.lon]);

  return (
    <div className={style["week-weather-container"]}>
      {
        WeekDay(weatherData)?.map((day: Weather[]) => (
          <article className={style["day-container"]} key={nanoid()}>
            <h1 className={style["day"]}>{day.map(title => GetDay(title.hour))[0]}</h1>
            {day.map(weather => (
              <section key={nanoid()}>
                <h2 className={style["hour"]}>{weather.hour?.split(' ')[1]}</h2>
                <h2 className={style["temperature"]}>{`${Math.round(weather.temperature?.temp)}°C`}</h2>
                <h2 className={style["feels-like"]}>{`${weather.temperature?.feels_like && Math.round(weather.temperature?.feels_like)}°`}</h2>
                <ul className={style["items-list"]}>
                  <li className={style["weather-icon"]}><img src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`} /></li>
                  <li className={style["weather-description"]}>{weather.description}</li>
                </ul>
              </section>
            ))}
          </article>
        ))
      }
    </div>
  )

}

export default WeekWeather;
