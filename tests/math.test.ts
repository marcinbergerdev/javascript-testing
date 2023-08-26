import { describe, it, expect } from "vitest";
import { addNumbers } from "../src/utils/math";
import { calculatePetsImages } from '../src/utils/math'

describe("addNumbers()", () => {

   it("should yield number if not numeric string is provided", () => {
      const strings = ["25", "25"];

      const numbersResult = addNumbers(strings);

      expect(numbersResult).toBe(50);
   });

   it("should yield NaN if not a number is provided", () => {
      const value = [[], {}, "invalid", false, true];

      const valueResult = addNumbers(value);

      expect(valueResult).toBeNaN();
   });

   it("should summarize all value in array to number", () => {
      const strings = ["1", "24"];

      const result = addNumbers(strings); 

      const sum = strings.reduce(
         (preValue: number, currValue: string | number) => {
            return preValue + +currValue;
         },
         0
      );

      expect(result).toBe(sum);
   });
});


describe('calculatePetsImages()', () => {
   it('should return array of pets if api link is correct', () => {
      const arrayOfPets = calculatePetsImages();
      
      expect(arrayOfPets).toBeTypeOf('object');
   });
});