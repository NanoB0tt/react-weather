import { nanoid } from "nanoid"
import { useState } from "react";
import { Weather } from "../../interfaces/interfaces";
import { GetDay } from "../../utils/utils";
import style from "./Days.module.css"

interface Props {
  day: Weather[];
}

const Days = ({ day }: Props) => {
  const [showData, setShowData] = useState(false);

  const displayDay = () => {
    setShowData(true);
    showData && setShowData(false);
  }

  return (
    <article>
      <h1 className={style["day"]} onClick={() => displayDay()}>{day.map(title => GetDay(title.hour))[0]}</h1>
      {showData && (
        day.map(weather => {
          return (
            <section className={style["day-weather"]} key={nanoid()}>
              <h2 className={style["hour"]}>{weather.hour?.split(' ')[1]}</h2>
              <h2 className={style["temperature"]}>{`${Math.round(weather.temperature?.temp)}°C`}</h2>
              <h2 className={style["feels-like"]}>{`${weather.temperature?.feels_like && Math.round(weather.temperature?.feels_like)}°`}</h2>
              <ul className={style["items-list"]}>
                <li className={style["weather-icon"]}><img src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`} /></li>
                <li className={style["weather-description"]}>{weather.description}</li>
              </ul>
            </section>
          )
        }
        ))}
    </article>
  )
}

export default Days;
