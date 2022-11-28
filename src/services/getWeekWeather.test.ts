import { Weather } from "../interfaces/interfaces";
import { getWeekWeather } from "./getWeekWeather";


describe('getWeekWeather', () => {
  it('should get Weather[]', () => {
    expectTypeOf(getWeekWeather({ lat: -27.6335, lon: -55.4972 })).resolves.toEqualTypeOf<Weather[]>();
  });
});

export { }
