import { Dispatch, SetStateAction, useState } from "react";
import style from "./DisplayOptions.module.css";

interface Props {
  setOption: Dispatch<SetStateAction<string>>
}

const DisplayOptions = ({ setOption }: Props) => {
  const [isPressed, setIsPressed] = useState(true);

  const buttonAction = (str: string, bool: boolean) => {
    setOption(str);
    setIsPressed(bool);
  }

  return (
    <div className={style["btn-container"]}>
      <button className={`${style["btn-day"]} ${isPressed ? style["pressed"] : ""}`} onClick={() => buttonAction('day', true)}>Day</button>
      <button className={`${style["btn-week"]} ${!isPressed ? style["pressed"] : ""}`} onClick={() => buttonAction('week', false)}>Week</button>
    </div>
  )
}

export default DisplayOptions;
