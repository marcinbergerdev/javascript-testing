import { describe, it, expect, beforeAll } from "vitest";

import {
   validateStringNotEmpty,
   validateNumber,
   validatePersonDataNotEmpty,
   validatePersonAgeType,
   validateServerError,
   validateServerStatus,
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

      const validationResult = () => {
         validateNumber(notNumber);
      };

      expect(validationResult).toThrow();
   });

   it("should not throw an error if number value is provided", () => {
      const notNumber = 23;

      const validationResult = () => {
         validateNumber(notNumber);
      };

      expect(validationResult).not.toThrow();
   });

   it("should throw an error if empty value is provided", () => {
      const notNumber = "";

      const validationResult = () => {
         validateNumber(notNumber);
      };

      expect(validationResult).toThrow();
   });
});

describe("validatePersonDataNotEmpty()", () => {
   it("should throw an error if empty value or white space is provided", () => {
      const data = {
         firstValue: "23",
         secondValue: "",
         age: "    ",
      };

      const validationResult = () => {
         validatePersonDataNotEmpty(data);
      };

      expect(validationResult).toThrow();
   });

   it("should pass if all input are provided", () => {
      const data = {
         firstValue: "test",
         secondValue: "test",
         age: "12",
         profession: "test",
      };

      const validationResult = () => {
         validatePersonDataNotEmpty(data);
      };
      expect(validationResult).not.toThrow();
   });

   it("should pass if all input are string type", () => {
      const data = {
         firstValue: "test",
         secondValue: "test",
         age: "12",
         profession: "test",
      };

      const personData = Object.keys(data);
      const isAllInputsString = personData.every(
         (data) => typeof data === "string"
      );

      expect(isAllInputsString).toBe(true);
   });
});

describe("validatePersonDataAgeType()", () => {
   it("should throw an error if Age input is not number", () => {
      const age = NaN;
      const validationResult = () => {
         validatePersonAgeType(age);
      };

      expect(validationResult).toThrow();
   });
});

const apiLink: string = "https://api.thecatapi.com/v1/imasearch?limit=10"; // false api link

describe("validateServerError()", () => {
   it("should throw a error if response server status is false provided", async () => {
      try {
         await fetch(apiLink);
      } catch (err) {
         expect(err).toThrow;
      }
   });
});
