import { describe, expect, it } from "vitest";
import { findEarthData } from "../exercises/e9";
import { data } from "../data/data";

describe("getEarthData", () => {
  it("Should exist", () => {
    expect(findEarthData).toBeInstanceOf(Function);
  });
  it("Should be the object of Earth planet data", () => {
    expect(findEarthData(data)).toEqual(data.planets[6]);
  });
});
