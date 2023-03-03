import { nanoid } from "nanoid"
import { Weather } from "../../interfaces/interfaces";
import { GetDay } from "../../utils/utils";
import style from "./Days.module.css"

interface Props {
  day: Weather[];
  onToggle: () => void;
  active: boolean;
}

const Days = ({ day, onToggle, active }: Props) => {

  return (
    <article>
      <h1 className={style["day"]} onClick={onToggle}>{day.map(title => GetDay(title.hour))[0]}</h1>
      {active && (
        day.map(weather => {
          return (
            <section className={style["day-weather"]} key={nanoid()}>
              <h2 className={style["hour"]}>{weather.hour?.split(' ')[1].split(':').slice(0, -1).join(':')}</h2>
              <h2 className={style["temperature"]}>{`${Math.round(weather.temperature?.temp)}°C`}</h2>
              <h2 className={style["feels-like"]}>{`${weather.temperature?.feels_like && Math.round(weather.temperature?.feels_like)}°`}</h2>
              <ul className={style["items-list"]}>
                <li className={style["weather-icon"]}><img src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`} /></li>
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
