export interface Weather {
  name: string;
  description: string;
  icon: string;
  temperature: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    humidity: number;
  };
}

export interface City {
  name: string;
  lat: number;
  lon: number;
  state?: string;
  country: string;
}

export type LatLon = Pick<City, "lat" | "lon">
