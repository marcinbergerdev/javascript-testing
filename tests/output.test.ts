import { describe, it, expect } from "vitest";

import { validateResult } from "../src/utils/output";

describe("validateResult()", () => {
   it("should yield empty string if 'no-calc' is provided", () => {
      const text = "no-calc";

      const emptyString = validateResult(text);

      expect(emptyString).toBe("");
   });

   it("should contain Invalid if 'invalid' value is provided", () => {
      const text = "Invalid";

      const checkString = validateResult(text);

      expect(checkString).toContain(text);
   });

   it("should contain Result if not 'invalid' and 'not-calc' is provided", () => {
      const text = "hello world";

      const checkString = validateResult(text);

      expect(checkString).toContain(text);
   });
});
