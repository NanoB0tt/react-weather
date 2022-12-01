import { Weather } from "../interfaces/interfaces";

export const WeekDay = (data: Weather[] | null) => {
  const arr = [];
  const obj = {} as { [name: string]: Weather[] };

  data?.map(item => {
    const index = item.hour?.split(' ')[0]
    if (index !== undefined) {
      obj[index] = obj[index] === undefined ? [item] : [...obj[index], item]
    }
  })

  for (const [_key, value] of Object.entries(obj)) {
    arr.push(value);
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
