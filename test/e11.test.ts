import { describe, expect, it } from "vitest";
import { lowMoonsPlanets } from "../exercises/e11";
import { data } from "../data/data";

describe("lowMoonsPlanets", () => {
  it("Should exist", () => {
    expect(lowMoonsPlanets).toBeInstanceOf(Function);
  });
  it("Should return an array of 2 items", () => {
    expect(lowMoonsPlanets(data.planets).length).toEqual(4);
  });
  it("should be the objects for Mars, Mercure, Earth, Venus if I plug in data.planets", () => {
    expect(lowMoonsPlanets(data.planets).map((p) => p.name)).toEqual([
      "Mars",
      "Mercure",
      "Earth",
      "Vénus",
    ]);
  });
});
