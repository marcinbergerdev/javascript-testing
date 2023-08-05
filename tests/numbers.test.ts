import { describe, it, expect } from "vitest";

import { transformToNumber } from "../src/utils/numbers";

describe("transformToNumber()", () => {
   it("should yield number if numeric string is provided", () => {
      const string = "23";

      const result = transformToNumber(string);

      expect(result).toBeTypeOf("number");
   });

   it("should yield NaN if not number value is provided", () => {
      const text = "invalid";

      const result = transformToNumber(text);

      expect(result).toBeNaN();
   });
});
