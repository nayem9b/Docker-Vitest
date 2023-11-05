import { it, expect } from "vitest";
import { add } from "./math";

it("should return the correct sum if an array of number is provided", () => {
  //Arrange
  const numbers = [1, 2, 3];
  const expectedResult = numbers.reduce((acc, cur) => acc + cur);

  //Action
  const result = add(numbers);

  //Asertion
  expect(result).toBe(expectedResult);
});

it("should provide NaN if at least one invalied number is provided", () => {
  //Arrange
  const numbers = [1, "invalid", 3];
  const expectedResult = numbers.reduce((acc, cur) => acc + cur);

  //Action
  const result = add(numbers);

  //Asertion
  expect(result).toBeNaN;
});

it("should provide correct sum if an Array of numbaric string is provided", () => {
  //Arrange
  const numbers = ["1", "2", "3"];
  const expectedResult = numbers.reduce((acc, cur) => +acc + +cur);

  //Action
  const result = add(numbers);

  //Asertion
  expect(result).toBe(expectedResult);
});

it("should throw an error if no argument is passed", () => {
  const resultFn = () => {
    add();
  };
  expect(resultFn).toThrow();
});

it("should throw an error if multiple argument is provided", () => {
  const resultFn = () => {
    add(1, 2, 3);
  };
  expect(resultFn).toThrow(/is not iterable/i);
});
