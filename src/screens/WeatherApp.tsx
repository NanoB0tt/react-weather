import { useState } from "react";
import { LatLon } from "../interfaces/interfaces";
import CityWeather from "../components/CityWeather/CityWeather";
import SearchBar from "../components/SearchBar/SearchBar";
import WeekWeather from "../components/WeekWeather/WeekWeather";
import DisplayOptions from "../components/DisplayOptions/DisplayOptions";
import style from "./WeatherApp.module.css";

const WeatherApp = () => {
  const [location, setLatLon] = useState<LatLon | null>(null);
  const [option, setOption] = useState('day');

  return (
    <div className={style["container"]}>
      <div className={style["blur"]}>
        <SearchBar setLatLon={setLatLon} />
        {location && <DisplayOptions setOption={setOption} />}
        <CityWeather location={location} option={option} />
        <WeekWeather location={location} option={option} />
      </div>
    </div>
  )
}

export default WeatherApp;
