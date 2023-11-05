import { it, expect } from "vitest";
import { stringLength } from "./stringLength";

it("returns correct length for non empty string", () => {
  expect(stringLength("hello")).toBe(5);
});
it("returns 0 for non empty string", () => {
  expect(stringLength("")).toBe(0);
});
it("throws error for non string input", () => {
  expect(() => stringLength(null)).toThrow();
  expect(() => stringLength(undefined)).toThrow();
  expect(stringLength(123)).toBeUndefined();
});
