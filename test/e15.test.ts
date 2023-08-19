import { describe, expect, it } from "vitest";
import { getPlanetsWithNoMoons } from "../exercises/e15";
import { data } from "../data/data";

describe("planetsWithNoMoons", () => {
  it("Should exist", () => {
    expect(getPlanetsWithNoMoons).toBeInstanceOf(Function);
  });
  it("There should be 2 items in the array", () => {
    expect(getPlanetsWithNoMoons(data.planets).length).toEqual(2);
  });
  it("The returned planet objects should be mercure and Venus", () => {
    expect(getPlanetsWithNoMoons(data.planets).map((p) => p.name)).toEqual([
      "Mercure",
      "Vénus",
    ]);
  });
});
