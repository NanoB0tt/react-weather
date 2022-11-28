import { Weather } from "../interfaces/interfaces";
import { getWeekWeather } from "../services/getWeekWeather";
import { GetDay, WeekDay } from "./utils";

describe("WeekDay", () => {
  it("should return Weather[][]", async () => {
    const data = await getWeekWeather({ lat: -27.6335, lon: -55.4972 });
    expectTypeOf(WeekDay(data)).toEqualTypeOf<Weather[][]>();
  });
});

describe("GetDay", () => {
  it("should return a string", () => {
    expect(GetDay("2022-11-27 18:00:00")).toBeTypeOf("string");
  });
});

export { }
