import { useEffect, useState } from "react";

const CityWeather = () => {
  const [weatherData, setWeatherData] = useState({} as Weather);

  useEffect(() => {
    const fetchData = async () => {
      const data: Weather = await fetch("weatherAPI.json")
        .then(res => res.json())
        .then(data => data[1]);
      setWeatherData(data);
    }
    fetchData();
  }, []);

  return (
    <>
      <h1>{weatherData.city_name}</h1>
      <h2>{`${weatherData.app_temp}°`}</h2>
      <h2>{`${weatherData.temp}°`}</h2>
      <ul>
        <li>{weatherData.weather?.description}</li>
        <li><img src={`https://www.weatherbit.io/static/img/icons/${weatherData.weather?.icon}.png`} /></li>
        <li>{weatherData.weather?.code}</li>
      </ul>
    </>
  )

}

export default CityWeather;
