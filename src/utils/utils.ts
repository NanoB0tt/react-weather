import { Weather } from "../interfaces/interfaces";

// Define a function named WeekDay that takes an array
// of weather data or null as a parameter
export const WeekDay = (data: Weather[] | null) => {
  // Create an empty array
  // and an empty object (used to group data by day)
  const arr = [];
  const obj = {} as { [name: string]: Weather[] };

  // If the data parameter is not null,
  // execute the map function for each element in the array
  data?.map(item => {
    // Get the date (day) from the current element
    // and use it as a key in the 'obj' object
    const index = item.hour?.split(' ')[0]
    if (index !== undefined) {
      obj[index] = obj[index] === undefined ? [item] : [...obj[index], item]
    }
  })

  // Add the values from the 'obj' object to the 'arr' array
  for (const [_key, value] of Object.entries(obj)) {
    arr.push(value);
  }

  // Return the arr array with the data grouped by day
  return arr;
}

// Define a function named GetDay that takes a string as a parameter
export const GetDay = (str: string | undefined) => {
  // Split the string into an array using the space as a separator,
  // then create a new string using the first and second element of the array
  const arr = str?.split(' ');
  const newStr = `${arr?.[0]} ${arr?.[1]}`;

  // Create a new Date object using the above string
  // and format the weekday using the specified language and format
  const date = new Date(newStr);
  const formatedDay = new Intl.DateTimeFormat('es-AR', { weekday: "long" }).format(date);

  // Return the formatted string with the weekday
  return formatedDay;
}
