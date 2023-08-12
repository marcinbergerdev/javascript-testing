import { describe, it, expect, expectTypeOf } from "vitest";

import { transformToSpecificTypeArrayOfData } from "../src/utils/strings";

describe("transformToSpecificTypeArrayOfData()", () => {
   it("should yield array of (string | number) if object of string is provided", () => {
      const objectOfStrings = {
         firstName: "example1",
         secondName: "example2",
         age: "123",
         profession: "example3",
      };

      const returnedArrayOfStringNumber = [
         "example1",
         "example2",
         123,
         "example3",
      ];

      const arrayResult = transformToSpecificTypeArrayOfData(objectOfStrings);

      expect(arrayResult).toEqual(returnedArrayOfStringNumber);
   });
});
