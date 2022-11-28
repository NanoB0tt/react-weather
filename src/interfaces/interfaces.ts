export interface Temperature {
  temp: number;
  feels_like?: number;
  temp_min: number;
  temp_max: number;
}

export interface Weather {
  name?: string;
  hour?: string;
  description: string;
  icon: string;
  temperature: Temperature;
}

export interface City {
  name: string;
  lat: number;
  lon: number;
  state?: string;
  country: string;
}

export type LatLon = Pick<City, "lat" | "lon">
