import { Person } from "./parse";

export function validateStringNotEmpty(value: string) {
   if (value.trim().length === 0) {
      throw new Error("Invalid input - must not be empty.");
   }
}

export function validateNumber(number: any) {
   if (isNaN(number) || typeof number !== "number") {
      throw new Error("Invalid number input.");
   }
}

export function validatePersonDataNotEmpty(person: Person) {
   for (const data in person) {
      const personData = person[data];
      if (personData.trim().length === 0) {
         throw new Error("Invalid - all input are invalid");
      }
   }
}

export function validatePersonDataAgeType(typedData: (string | number)[]) {
   typedData.forEach((data) => {
      if (Number.isNaN(data)) {
         throw new Error("Invalid - Age input must be number!");
      }
   });
}
