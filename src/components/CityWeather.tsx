import { useEffect, useState } from "react";
import { LatLon, Weather } from "../interfaces/interfaces";
import { getWeather } from "../services/getWeather";

interface Props {
  location: LatLon | null;
}

const CityWeather = ({ location }: Props) => {
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
      {weatherData && (
        <div>
          <h1>{weatherData.name}</h1>
          <h2>{`${weatherData.temperature?.temp}°`}</h2>
          <h2>{`${weatherData.temperature?.feels_like}°`}</h2>
          <ul>
            <li>{weatherData.description}</li>
            <li><img src={`http://openweathermap.org/img/wn/${weatherData.icon}@2x.png`} /></li>
          </ul>
        </div>
      )}
    </>
  )

}

export default CityWeather;
