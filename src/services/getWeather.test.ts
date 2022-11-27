import { Weather } from "../interfaces/interfaces";
import { getWeather } from "./getWeather";


describe('getWeather', () => {
  it('should get Weather', () => {
    expectTypeOf(getWeather({ lat: -27.6335, lon: -55.4972 })).resolves.toEqualTypeOf<Weather>();
  });
});

export { }
