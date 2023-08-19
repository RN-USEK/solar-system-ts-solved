import { describe, expect, it } from "vitest";
import { getPlanetNamesWithLowGravity } from "../exercises/e4";
import { data } from "../data/data";

describe("getPlanetsWithLowGravity", () => {
  it("should exist", () => {
    expect(getPlanetNamesWithLowGravity).toBeInstanceOf(Function);
  });
  it("There should be 5 planets", () => {
    expect(getPlanetNamesWithLowGravity(data.planets).length).toEqual(5);
  });
  it("should give me an array of all the planet names", () => {
    expect(getPlanetNamesWithLowGravity(data.planets)).toEqual([
      "Uranus",
      "Mars",
      "Mercure",
      "Earth",
      "Vénus",
    ]);
  });
});
