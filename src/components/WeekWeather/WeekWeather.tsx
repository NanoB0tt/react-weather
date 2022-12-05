import { useEffect, useState } from "react";
import { LatLon, Weather } from "../../interfaces/interfaces";
import { getWeekWeather } from "../../services/getWeekWeather";
import { WeekDay } from "../../utils/utils";
import Days from "../Days/Days";
import style from "./WeekWeather.module.css";

interface Props {
  location: LatLon | null;
  option: string;
}

const WeekWeather = ({ location, option }: Props) => {
  const [weatherData, setWeatherData] = useState<Weather[] | null>(null);
  const [clicked, setClicked] = useState<number | null>(null);

  const handleClick = (index: number) => {
    if (clicked === index) {
      setClicked(null);
    } else {
      setClicked(index);
    }
  }

  useEffect(() => {
    if (location) {
      const fetchData = () => {
        getWeekWeather(location).then(setWeatherData);
      }
      fetchData();
    }
  }, [location?.lat, location?.lon]);

  return (
    <>
      {option == "week" && (
        <div className={style["week-weather-container"]}>
          {WeekDay(weatherData)?.map((day: Weather[], index) => <Days day={day} key={index} onToggle={() => handleClick(index)} active={clicked === index} />)}
        </div>
      )
      }
    </>
  )
}

export default WeekWeather;
