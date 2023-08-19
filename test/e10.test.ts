import { describe, expect, it } from "vitest";
import { getAsteroidDataByName } from "../exercises/e10";
import { data } from "../data/data";

describe("getAsteroidDataByName", () => {
  it("Should exist", () => {
    expect(getAsteroidDataByName).toBeInstanceOf(Function);
  });
  it("Should be the object of Asteroid Data", () => {
    expect(
      getAsteroidDataByName({ allData: data, asteroidName: "624 Hektor" })?.name
    ).toEqual("624 Hektor");
  });
});
