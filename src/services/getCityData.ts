import { City } from "../interfaces/interfaces";

export const getCityData = async (cityName: string) => {
  const data: Promise<City[]> = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=ed2c277292dc14513b2b77e5239c846b`)
    .then(response => response.json())
    .catch(err => console.error(err));
  return data;
}
