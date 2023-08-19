import { describe, expect, it } from "vitest";
import { findPlanetByMoon } from "../exercises/e8";
import { data } from "../data/data";

describe("findPlanetNameByMoon", () => {
  it("Should exist", () => {
    expect(findPlanetByMoon).toBeInstanceOf(Function);
  });
  it("Should be the planet Neptune object for Triton moon", () => {
    expect(
      findPlanetByMoon({ moonName: "Triton", planets: data.planets })?.name
    ).toEqual("Neptune");
  });

  it("Should not care about case sensitivity", () => {
    expect(
      findPlanetByMoon({ moonName: "triton", planets: data.planets })?.name
    ).toEqual("Neptune");
  });
});
