import { describe, expect, it } from "vitest";
import { data } from "../data/data";
import { getAllAverageTemperatures } from "../exercises/e3";

describe("getAllAverageTemperatures", () => {
  it("Should exist", () => {
    expect(getAllAverageTemperatures).toBeInstanceOf(Function);
  });
  it("There should be 8 elements", () => {
    expect(getAllAverageTemperatures(data.planets).length).toEqual(8);
  });
  it("Should give an array of average Temperature values", () => {
    expect(getAllAverageTemperatures(data.planets)).toEqual([
      76, 55, 165, 210, 440, 134, 288, 737,
    ]);
  });
});
