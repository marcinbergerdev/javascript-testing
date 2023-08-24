import { describe, it, expect, beforeAll } from "vitest";

import {
   validateStringNotEmpty,
   validateNumber,
   validatePersonDataNotEmpty,
   validatePersonAgeType,
   validateServerError,
   validateServerStatus,
} from "../src/utils/validation";
import { getPetsRequest } from "../src/utils/petsApi";

let correctApiLink: string;
let wrongApiLink: string;

beforeAll(() => {
   correctApiLink = "https://api.thecatapi.com/v1/images/search?limit=10"; // correct link api to get response
   wrongApiLink = "https://api.thecatapi.com/v1/test"; // wrong link api to get error
});

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

describe("validateServerError()", () => {
   it("should throw a error if response server status is false provided", async () => {
      const petsApiRequest: Response = await getPetsRequest(wrongApiLink);

      const validationResult = () => {
         validateServerError(petsApiRequest);
      };

      expect(validationResult).toThrow();
   });

   it("should not throw a error if correct api link is provided", async () => {
      const petsApiRequest: Response = await getPetsRequest(correctApiLink);

      const validationResult = () => {
         validateServerError(petsApiRequest);
      };

      expect(validationResult).not.toThrow();
   });

   it("should throw text 'Something goes wrong try later' if wrong api link is provided", async () => {
      const petsApiRequest: Response = await getPetsRequest(wrongApiLink);

      const validationResult = () => {
         validateServerError(petsApiRequest);
      };

      expect(validationResult).toThrowError("Something goes wrong try later");
   });
});

describe("validateServerStatus()", () => {
   it("should throw a error if response server status is 404", async () => {
      const petsApiRequest: Response = await getPetsRequest(wrongApiLink);

      const validationResult = () => {
         validateServerStatus(petsApiRequest);
      };

      expect(validationResult).toThrow();
   });

   it("should not throw a error if correct api link is provided", async () => {
      const petsApiRequest: Response = await getPetsRequest(correctApiLink);

      const validationResult = () => {
         validateServerStatus(petsApiRequest);
      };

      expect(validationResult).not.toThrow();
   });

   it("should throw text 'Sorry - server is down :(' if wrong api link is provided", async () => {
      const petsApiRequest: Response = await getPetsRequest(wrongApiLink);

      const validationResult = () => {
         validateServerStatus(petsApiRequest);
      };

      expect(validationResult).toThrowError("Sorry - server is down :(");
   });
});
