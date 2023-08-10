import { describe, it, expect } from "vitest";

import {
   validateStringNotEmpty,
   validateNumber,
   validatePersonDataNotEmpty,
   validatePersonDataAgeType,
} from "../src/utils/validation";

describe("validateStringNotEmpty()", () => {
   it("should throw an error if empty string is provided", () => {
      const empty = "";

      const checkString = () => {
         validateStringNotEmpty(empty);
      };

      expect(checkString).toThrow();
   });

   it("should not be error if not numeric number is provided", () => {
      const empty = "23";

      const checkString = () => {
         validateStringNotEmpty(empty);
      };

      expect(checkString).not.toThrow();
   });
});

describe("validateNumber()", () => {
   it("should throw an error if not number value is provided", () => {
      const notNumber = "invalid";

      const checkValue = () => {
         validateNumber(notNumber);
      };

      expect(checkValue).toThrow();
   });

   it("should not throw an error if number value is provided", () => {
      const notNumber = 23;

      const checkValue = () => {
         validateNumber(notNumber);
      };

      expect(checkValue).not.toThrow();
   });

   it("should throw an error if empty value is provided", () => {
      const notNumber = "";

      const checkValue = () => {
         validateNumber(notNumber);
      };

      expect(checkValue).toThrow();
   });
});

describe("validatePersonDataNotEmpty()", () => {
   it("should throw an error if empty value is provided", () => {
      const data = {
         firstValue: "23",
         secondValue: "",
      };

      const dataResult = () => {
         validatePersonDataNotEmpty(data);
      };

      expect(dataResult).toThrow();
   });
});
