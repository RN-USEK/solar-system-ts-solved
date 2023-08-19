import { describe, expect, it } from "vitest";
import { getPlanetsWithMoons } from "../exercises/e7";
import { data } from "../data/data";

describe("getPlanetsWithMoons", () => {
  it("should exist", () => {
    expect(getPlanetsWithMoons).toBeInstanceOf(Function);
  });
  it("There should be 6 items", () => {
    expect(getPlanetsWithMoons(data.planets).length).toEqual(6);
  });
  it("Should give me an array of the planet names", () => {
    expect(getPlanetsWithMoons(data.planets)).toEqual([
      "Uranus",
      "Neptune",
      "Jupiter",
      "Mars",
      "Saturne",
      "Earth",
    ]);
  });
});
