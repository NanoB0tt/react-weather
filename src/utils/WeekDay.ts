import { Weather } from "../interfaces/interfaces";

export const WeekDay = (data: Weather[] | null) => {
  const arr = [];

  const weekdays = data?.reduce((obj, day) => {
    if (day.hour !== undefined) {
      const dayDate = day.hour.split(' ')[0];
      obj[dayDate] = data.filter((weather) => weather.hour?.split(' ')[0] === dayDate);
    }

    return obj;

  }, {} as { [name: string]: Weather[] });

  if (weekdays !== undefined) {
    for (const [_key, value] of Object.entries(weekdays)) {
      arr.push(value);
    }
  }

  return arr;
}

export const GetDay = (str: string | undefined) => {
  const arr = str?.split(' ');
  const newStr = `${arr?.[0]} ${arr?.[1]}`;
  const date = new Date(newStr);
  const formatedDay = new Intl.DateTimeFormat('es-AR', { weekday: "long" }).format(date);

  return formatedDay;
}
