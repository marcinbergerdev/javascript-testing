import { describe, it, expect, vi, beforeAll } from "vitest";
import { v4 as uuid } from "uuid";

import { addNumbers, setProductId } from "../src/utils/math";
import { calculatePetsImages } from "../src/utils/math";
import { Pets } from "../types/Pets";

let correctApiLink: string;
let wrongApiLink: string;

beforeAll(() => {
   correctApiLink = "https://api.thecatapi.com/v1/images/search?limit=10"; // correct link api to get response
   wrongApiLink = "https://api.thecatapi.com/v1/test"; // wrong link api to get error
});

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

describe("calculatePetsImages()", () => {
   it("should return array of pets if api link is correct provided", async () => {
      const calculatedPets = await calculatePetsImages(correctApiLink);
      expect(calculatedPets).toHaveLength(calculatedPets.length);
   });

   it("should contain (id and url) pets if array of pets it returned", async () => {
      const pets = (await calculatePetsImages(correctApiLink)) as Pets[];

      pets.forEach((pet) => {
         expect(pet).toHaveProperty("id");
         expect(pet).toHaveProperty("url");
      });
   });

   it("should throw an error if wrong api link is provided", async () => {
      const requestError: string | Pets[] = await calculatePetsImages(
         wrongApiLink
      );
      expect(requestError).toBe("Something goes wrong try later");
      expect(requestError).toBeTypeOf("string");
   });
});

vi.mock("uuid");

describe("setProductId()", () => {
   it("should execute uuid function", () => {
      const testProduct = {
         name: "testName",
         price: "10",
         available: "true",
      };

      setProductId(testProduct);

      return expect(uuid).toBeCalled();
   });

   it("should return product with id", () => {
      const testProduct = {
         name: "testName",
         price: "10",
         available: "true",
      };

      return expect(setProductId(testProduct)).toEqual({
         id: "testId",
         ...testProduct,
      });
   });
});

describe("createProduct()", () => {
   it("should create list of object", () => {
      const testProduct = {
         name: "testName",
         price: "10",
         available: "true",
      };

      try {
         expect(setProductId(testProduct)).toBeTypeOf("object");
      } catch (err) {
         expect(err.message).toMatch("Sorry");
      }
   });
});
