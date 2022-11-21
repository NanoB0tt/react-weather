import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import { LatLon, Weather } from "../interfaces/interfaces";
import { getWeekWeather } from "../services/getWeekWeather";

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
      {weatherData && weatherData.map(weather =>
        <div key={nanoid()}>
          <h1>{weather.hour}</h1>
          <h2>{`${weather.temperature?.temp}°`}</h2>
          <h2>{`${weather.temperature?.feels_like}°`}</h2>
          <ul>
            <li>{weather.description}</li>
            <li><img src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`} /></li>
          </ul>
        </div>
      )}
    </>
  )

}

export default WeekWeather;
