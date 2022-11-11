import { useState } from "react";
import { LatLon } from "../interfaces/interfaces";
import CityWeather from "./CityWeather";
import SearchBar from "./SearchBar";

const WeatherApp = () => {
  const [location, setLatLon] = useState<LatLon | null>(null);

  return (
    <div>
      <CityWeather location={location} />
      <SearchBar setLatLon={setLatLon} />
    </div>
  )
}

export default WeatherApp;
