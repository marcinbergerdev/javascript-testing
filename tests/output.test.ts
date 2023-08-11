import { describe, it, expect } from "vitest";
import { validateResult, validatePersonData} from "../src/utils/output";

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

describe('validatePersonData()', () => {
   it('should contain Error if "Invalid" value is provided', () => {
      const text = 'Invalid'

      const textResult = validatePersonData(text);

      expect(textResult).toContain('Error');
   });


   it('should yield person data if array of (string | number) is provided', () => {
      const personData = ['test', 'test', 12, 'test'];

      const textResult = validatePersonData(personData);

      expect(textResult).toBe(personData);
   });

   it('should yield type string if error contain "Invalid"', () => {
      const text = 'Invalid'
      const textResult = validatePersonData(text);
      expect(textResult).toBeTypeOf('string')
   })

   it('should yield type Array(string | number)[] if person data is provided', () => {
      const personData = ['test', 'test', 12, 'test'];

      const textResult = validatePersonData(personData);
      expect(textResult).toBe(personData)
   })
});