import { it, expect } from "vitest";
import { cleanNumbers } from "./numbers";

it("should return an array of number if an array of string numbers is provided", () => {
  const stringNumbers = ["2", "3"];
  const result = cleanNumbers(stringNumbers);
  console.log(result);
  expect(result[0]).toBeTypeOf("number");
});

it("should throw an error if at least an empty string is provided", () => {
  const stringNumbers = ["", "3"];
  const resultFn = () => cleanNumbers(stringNumbers);
  expect(resultFn).toThrow();
});
