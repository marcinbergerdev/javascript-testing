import { describe, it, expect, expectTypeOf } from "vitest";

import { transformToSpecificTypeArrayOfData } from "../src/utils/strings";

describe("transformToSpecificTypeArrayOfData()", () => {
   it("should yield array of (string | number) if object of string is provided", () => {
      const objectOfStrings = {
         firstName: "text1",
         secondName: "text2",
         age: "123",
         profession: "text3",
      };

      const returnedArrayOfStringNumber = ["text1", "text2", 123, "text3"];

      const arrayResult = transformToSpecificTypeArrayOfData(objectOfStrings);

      expect(arrayResult).toEqual(returnedArrayOfStringNumber);
   });

   it("should throw an error if an object with age value is string provided", () => {
      const personData = {
         firstName: "text1",
         secondName: "text2",
         age: "text3",
         profession: "text4",
      };

      const transformedPerson = () =>
         transformToSpecificTypeArrayOfData(personData);

      expect(transformedPerson).toThrow();
   });
});
