import { describe, expect, it } from "vitest";
import { getGreatestDiscoveryYear } from "../exercises/e18";
import { data } from "../data/data";

describe("getGreatestDiscoveryYear", () => {
  it("Should exist", () => {
    expect(getGreatestDiscoveryYear).toBeInstanceOf(Function);
  });
  it("Should be the 1847", () => {
    expect(getGreatestDiscoveryYear(data.asteroids)).toEqual(1847);
  });
});
