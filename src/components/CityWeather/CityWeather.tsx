import { useEffect, useState } from "react";
import { LatLon, Weather } from "../../interfaces/interfaces";
import { getWeather } from "../../services/getWeather";
import style from "./CityWeather.module.css";

interface Props {
  location: LatLon | null;
  option: string;
}

const CityWeather = ({ location, option }: Props) => {
  const [weatherData, setWeatherData] = useState<Weather | null>(null);

  useEffect(() => {
    if (location) {
      const fetchData = () => {
        getWeather(location).then(setWeatherData);
      }
      fetchData();
    }
  }, [location?.lon, location?.lat]);


  return (
    <>
      {weatherData && option === "day" && (
        <div className={style["weather-container"]}>
          <h1 className={style["city-name"]}>{weatherData.name}</h1>
          <h2 className={style["temperature"]}>{`${Math.round(weatherData.temperature?.temp)}°C`}</h2>
          <p className={style["feels-like"]}>{`Sensación térmica de ${weatherData.temperature?.feels_like && Math.round(weatherData.temperature?.feels_like)}°`}</p>
          <ul className={style["items-list"]}>
            <li className={style["weather-icon"]}><img src={`http://openweathermap.org/img/wn/${weatherData.icon}@2x.png`} /></li>
            <li className={style["weather-description"]}>{weatherData.description}</li>
          </ul>
        </div>
      )}
    </>
  )

}

export default CityWeather;
