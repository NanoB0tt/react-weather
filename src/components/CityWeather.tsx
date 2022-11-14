import { useEffect, useState } from "react";
import { LatLon, Weather } from "../interfaces/interfaces";

interface Props {
  location: LatLon | null;
}

const CityWeather = ({ location }: Props) => {
  const [weatherData, setWeatherData] = useState<Weather | null>(null);

  useEffect(() => {
    if (location) {
      const fetchData = async () => {
        const data: Weather = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=ed2c277292dc14513b2b77e5239c846b&units=metric&lang=es`)
          .then(res => res.json())
        setWeatherData(data);
      }
      fetchData();
    }
  }, [location?.lon, location?.lat]);


  return (
    <>
      {weatherData && (
        <div>
          <h1>{weatherData.name}</h1>
          <h2>{`${weatherData.main?.temp}°`}</h2>
          <h2>{`${weatherData.main?.feels_like}°`}</h2>
          <ul>
            <li>{weatherData?.weather[0]?.description}</li>
            <li><img src={`http://openweathermap.org/img/wn/${weatherData?.weather[0]?.icon}@2x.png`} /></li>
          </ul>
        </div>
      )}
    </>
  )

}

export default CityWeather;
