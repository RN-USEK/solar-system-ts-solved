import { describe, expect, it } from "vitest";
import { getPlanetNamesWithMassValue } from "../exercises/e5";
import { data } from "../data/data";

describe("getPlanetsWithMassValue", () => {
  it("Should exist", () => {
    expect(getPlanetNamesWithMassValue).toBeInstanceOf(Function);
  });
  it("The value of 4 should give me an array of planet names of length 5", () => {
    expect(
      getPlanetNamesWithMassValue({
        planets: data.planets,
        greaterThanOrEqualTo: 4,
      }).length
    ).toEqual(5);
  });
  it("The number of 4 should give an array of Planets' names", () => {
    expect(
      getPlanetNamesWithMassValue({
        planets: data.planets,
        greaterThanOrEqualTo: 4,
      })
    ).toEqual(["Uranus", "Mars", "Saturne", "Earth", "Vénus"]);
  });
});
