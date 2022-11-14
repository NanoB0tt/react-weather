export interface Weather {
  weather: {
    description: string;
    icon: string;
  }[];
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    humidity: number;
  };
  name: string;
}

export interface City {
  name: string;
  lat: number;
  lon: number;
  state: string;
}

export type LatLon = Pick<City, "lat" | "lon">
