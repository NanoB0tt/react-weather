import { useState } from "react";
import { LatLon } from "../interfaces/interfaces";
import CityWeather from "../components/CityWeather";
import SearchBar from "../components/SearchBar/SearchBar";
import WeekWeather from "../components/WeekWeather";

const WeatherApp = () => {
  const [location, setLatLon] = useState<LatLon | null>(null);

  return (
    <>
      <SearchBar setLatLon={setLatLon} />
      <CityWeather location={location} />
      <WeekWeather location={location} />
    </>
  )
}

export default WeatherApp;
