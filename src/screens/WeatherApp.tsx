import { useState } from "react";
import { LatLon } from "../interfaces/interfaces";
import CityWeather from "../components/CityWeather";
import SearchBar from "../components/SearchBar";
import WeekWeatherDisplay from "../components/WeekWeather";

const WeatherApp = () => {
  const [location, setLatLon] = useState<LatLon | null>(null);

  return (
    <>
      <CityWeather location={location} />
      <WeekWeatherDisplay location={location} />
      <SearchBar setLatLon={setLatLon} />
    </>
  )
}

export default WeatherApp;
