import { getCity } from "./getCity";
import { City } from "../interfaces/interfaces";


describe("getCity", () => {
  it("should be of type City[]", () => {
    expectTypeOf(getCity("Cerro Azul")).resolves.toEqualTypeOf<City[]>();
  });
});

export { }
