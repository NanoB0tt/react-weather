import { City } from "../interfaces/interfaces";

export const getCity = async (cityName: string): Promise<City[]> => {
  const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=ed2c277292dc14513b2b77e5239c846b`)
  const data = await response.json()
  return data;
}
