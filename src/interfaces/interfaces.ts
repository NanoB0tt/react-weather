interface Weather {
  app_temp: number;
  temp: number;
  city_name: string;
  precip: number;
  weather: {
    code: number;
    icon: string;
    description: string;
  };
}
